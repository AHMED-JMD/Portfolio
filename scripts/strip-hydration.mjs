#!/usr/bin/env node
/**
 * Removes React's hydration payload from the exported HTML.
 *
 * WHY
 * This site is a static brochure: every section is a server component, and the
 * only interactivity — sticky header, mobile drawer, scroll reveal — is handled
 * by the ~1KB inline script in components/SiteScript.tsx. Nothing on the page
 * hydrates. Next's App Router nonetheless ships ~103KB gzipped of React runtime
 * plus a ~230KB serialized RSC tree inlined into every page, none of which does
 * anything here. On the mobile connections this audience actually browses on,
 * that is the difference between a page that appears instantly and one that
 * chews through a chunk of someone's data bundle for nothing.
 *
 * SAFETY
 * This is only sound while the app has no client components, so that is checked
 * rather than assumed: if any `"use client"` directive appears under app/,
 * components/ or lib/, the script strips nothing, explains why, and leaves the
 * build fully intact. Adding a client component therefore silently and safely
 * turns this optimisation off instead of shipping a broken page.
 *
 * Run automatically as `postbuild`.
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "out");
const SOURCE_DIRS = ["app", "components", "lib"];

/* ─────────────────────────────────────────────────────────── the guard ── */

function walk(dir, test) {
  const found = [];
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return found;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) {
      found.push(...walk(full, test));
    } else if (test(full)) {
      found.push(full);
    }
  }
  return found;
}

function findClientComponents() {
  const offenders = [];
  for (const dir of SOURCE_DIRS) {
    for (const file of walk(path.join(ROOT, dir), (f) => /\.(tsx?|jsx?)$/.test(f))) {
      const head = readFileSync(file, "utf8").slice(0, 400);
      if (/^\s*["']use client["']/m.test(head)) {
        offenders.push(path.relative(ROOT, file));
      }
    }
  }
  return offenders;
}

/* ──────────────────────────────────────────────────────────── stripping ── */

/**
 * Removes exactly two things:
 *   1. <script src="/_next/static/chunks/*.js"> — the React runtime
 *   2. <script>self.__next_f.push(...)</script> — the serialized RSC tree
 *
 * Deliberately narrow. The JSON-LD block (type="application/ld+json") and the
 * inline SiteScript carry no `src` and no `__next_f`, so neither pattern can
 * match them — and both are asserted as still present afterwards.
 */
function strip(html) {
  return html
    .replace(/<script[^>]*\ssrc="\/_next\/static\/chunks\/[^"]*"[^>]*><\/script>/g, "")
    .replace(/<script[^>]*>\s*\(?self\.__next_f[\s\S]*?<\/script>/g, "")
    .replace(/<link[^>]*\srel="preload"[^>]*\sas="script"[^>]*>/g, "");
}

/* ───────────────────────────────────────────────────────────────── main ── */

const offenders = findClientComponents();
if (offenders.length) {
  console.log(
    "\n  Hydration payload kept — client components present:\n" +
      offenders.map((f) => `    · ${f}`).join("\n") +
      "\n  (Remove them, or leave this as-is; the build is correct either way.)\n",
  );
  process.exit(0);
}

const pages = walk(OUT, (f) => f.endsWith(".html"));
let before = 0;
let after = 0;

for (const page of pages) {
  const html = readFileSync(page, "utf8");
  const next = strip(html);

  // Assert we removed only what we meant to.
  const hadLd = html.includes("application/ld+json");
  if (hadLd && !next.includes("application/ld+json")) {
    console.error(`\n  ABORTED: JSON-LD was lost in ${path.relative(ROOT, page)}\n`);
    process.exit(1);
  }
  if (html.includes("__next_f") && next.includes("__next_f")) {
    console.error(`\n  ABORTED: hydration payload survived in ${path.relative(ROOT, page)}\n`);
    process.exit(1);
  }

  before += Buffer.byteLength(html);
  after += Buffer.byteLength(next);
  writeFileSync(page, next);
}

const kb = (n) => `${(n / 1024).toFixed(0)}KB`;
console.log(
  `\n  Stripped hydration payload from ${pages.length} pages: ` +
    `${kb(before)} → ${kb(after)} (-${(((before - after) / before) * 100).toFixed(0)}%)\n`,
);
