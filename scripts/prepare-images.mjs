#!/usr/bin/env node
/**
 * assets/shots/<project>/<name>.png  →  public/work/<project>/<name>-<width>.webp
 * assets/shots/<name>.jpeg           →  public/work/<name>-<width>.webp
 *
 * Screenshots are captured at 2–3× device scale, far heavier than any visitor
 * needs. This cuts responsive WebP variants and records each source's intrinsic
 * size in content/image-manifest.json, which components/Shot.tsx reads to emit
 * `srcset` plus a correct width/height (so images never shift the layout).
 *
 * Run `npm run images` after adding or replacing a screenshot.
 */
import sharp from "sharp";
import { readdirSync, mkdirSync, writeFileSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(ROOT, "assets/shots");
const OUT = path.join(ROOT, "public/work");
const WIDTHS = [240, 480, 800, 1200, 1800, 2400];
const isImage = (f) => /\.(png|jpe?g)$/i.test(f);
const stem = (f) => f.replace(/\.[^.]+$/, "");

/** Every image to cut, keyed the way content/*.ts refers to it. */
const jobs = [];
for (const entry of readdirSync(SRC)) {
  const full = path.join(SRC, entry);
  if (statSync(full).isDirectory()) {
    for (const file of readdirSync(full).filter(isImage)) {
      jobs.push({ key: `${entry}/${stem(file)}`, input: path.join(full, file) });
    }
  } else if (isImage(entry)) {
    // A loose image — the portrait — keeps its bare name as the key.
    jobs.push({ key: stem(entry), input: full });
  }
}

const manifest = {};
for (const job of jobs) {
  const { width, height } = await sharp(job.input).metadata();
  const widths = WIDTHS.filter((w) => w < width);
  widths.push(Math.min(width, 2880));

  mkdirSync(path.dirname(path.join(OUT, job.key)), { recursive: true });
  for (const w of widths) {
    await sharp(job.input)
      .resize({ width: w })
      .webp({ quality: 78, effort: 5 })
      .toFile(path.join(OUT, `${job.key}-${w}.webp`));
  }
  manifest[job.key] = { width, height, widths };
  console.log(`  ${job.key}  ${width}×${height}  → ${widths.join(", ")}`);
}

writeFileSync(
  path.join(ROOT, "content/image-manifest.json"),
  JSON.stringify(manifest, null, 2) + "\n",
);
console.log(`\n  ${Object.keys(manifest).length} images → public/work, manifest updated\n`);
