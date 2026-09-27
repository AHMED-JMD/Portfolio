import { Fraunces, Geist, Geist_Mono, IBM_Plex_Sans_Arabic, Amiri } from "next/font/google";

/**
 * Latin: Fraunces for display (an editorial serif with a soft, hand-made feel),
 * Geist for text, Geist Mono for the receipts.
 * Arabic: Amiri for display (the Naskh counterpart to Fraunces), IBM Plex Sans
 * Arabic for text.
 *
 * next/font self-hosts every file at build time, so the live site makes no
 * request to Google. The Arabic faces are not preloaded: the English page only
 * needs a few Arabic glyphs (the language switch), and unicode-range keeps the
 * files from downloading at all until an Arabic character is on screen.
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

export const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-ar",
  display: "swap",
  preload: false,
});

export const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
  preload: false,
});

export const fontVariables = [fraunces, geist, geistMono, plexArabic, amiri]
  .map((f) => f.variable)
  .join(" ");
