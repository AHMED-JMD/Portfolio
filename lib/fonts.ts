import { Cairo, Fraunces, Geist, Geist_Mono } from "next/font/google";

/**
 * Latin: Fraunces for display (an editorial serif with a soft, hand-made
 * feel), Geist for text, Geist Mono for the receipts.
 * Arabic: Cairo throughout — one family for headlines, text and receipts.
 *
 * next/font self-hosts every file at build time, so the live site makes no
 * request to Google. Cairo is variable, so one file covers every weight, and
 * it carries Latin glyphs too — Latin words inside Arabic copy stay in the
 * same voice instead of switching face mid-sentence.
 */
export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
});

export const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
  preload: false,
});

export const fontVariables = [fraunces, geist, geistMono, cairo]
  .map((f) => f.variable)
  .join(" ");
