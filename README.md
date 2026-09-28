# Ahmed Abdalrahman — portfolio

A bilingual (English at `/`, Arabic at `/ar/`) static site built around one
rule: **a project is done when the customer is satisfied, not when the code
works.** Every project is told as a work order — the customer, what they
needed, what I decided, the result.

Next.js 16 (static export) · TypeScript · Tailwind CSS v4 · no client JavaScript
framework at runtime (see "Why so little JavaScript").

---

## Commands

```bash
npm install
npm run dev       # http://localhost:3000  (Arabic: /ar/)
npm run build     # → out/  plain static files, deploy anywhere
npm run serve     # preview the built out/ on :4321
npm run images    # after adding or replacing a screenshot (see below)
```

## Where things live

| Path | What |
|---|---|
| `content/en.ts` | **All English copy.** Its shape defines the `Dictionary` type. |
| `content/ar.ts` | All Arabic copy, typed as `Dictionary` — a missing translation fails the build. |
| `content/site.ts` | Contact details, links, the CV path, `SITE_URL`, each client's brand colours. |
| `content/types.ts` | The `Project` / `Media` shapes. |
| `assets/shots/<project>/*.png` | Source screenshots (full size). |
| `public/work/` | Generated WebP variants — don't edit, run `npm run images`. |
| `public/video/` | Demo clips (H.264 MP4, no audio). |
| `public/Ahmed-Abdalrahman-CV.pdf` | The CV behind every "Download CV" button. |
| `components/` | One file per section. `HomePage.tsx` sets the order. |
| `app/*.css` | Design tokens and styles (`globals`, `receipt`, `work`, `sections`). |

## Common edits

**Change contact details or the domain** — `content/site.ts`. Set `SITE_URL`
to the real domain before deploying; canonical links, the sitemap and share
cards are built from it.

**Add a testimonial** — add `{ quote, name, role }` to `testimonials.items` in
*both* `en.ts` and `ar.ts`. The section appears only when the list isn't empty.
Only real quotes, with the client's permission.

**Add a project**
1. Put screenshots in `assets/shots/<id>/` and run `npm run images`.
2. Add the id to `Project["id"]` in `content/types.ts` and its colours to
   `brands` in `content/site.ts`.
3. Add the project to `projects` in both `en.ts` and `ar.ts`.

**Add a demo clip** — record, then cut and shrink it with ffmpeg, e.g.:

```bash
ffmpeg -ss 5 -to 50 -i recording.webm \
  -vf "crop=1534:822:66:78,scale=1280:-2" -r 30 \
  -c:v libx264 -crf 28 -preset slow -pix_fmt yuv420p -movflags +faststart -an \
  public/video/name-demo.mp4
```

Then set `video` and `duration` on the project's `Media`. Clips load only when
the visitor presses play.

## House rules for content

- Every claim must be checkable — from the project's code, its live site, a
  recorded demo or the client. Nothing rounded up, no invented quotes.
- Enjaz Tech Services' clients are not named, and neither are clients who'd
  rather not be.
- Screenshots and clips never show customer names, staff salaries or a
  client's balances. Cut the clip before those screens, or mask them.

## Why so little JavaScript

Every section is a server component. The only behaviour — theme, sticky nav,
mobile menu, scroll reveals, the receipt printer, play buttons — is one inline
script in `components/SiteScript.tsx`. After `next build`,
`scripts/strip-hydration.mjs` removes React's runtime from the exported HTML
(it refuses to if any `"use client"` component exists). Much of the audience
browses on mobile data, so this matters.

## Languages

English is the site root and what every visitor sees first; Arabic lives at
`/ar/` behind the language switch in the header. Each locale is its own root
layout so `lang` and `dir` are correct on `<html>`.

## Deploy

The build is plain files in `out/`. On Vercel: import the repository (framework
preset Next.js) or run `npx vercel`. Any static host works too.
