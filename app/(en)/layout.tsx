import type { Metadata, Viewport } from "next";
import "../globals.css";
import en from "@/content/en";
import { SITE_URL } from "@/content/site";
import { fontVariables } from "@/lib/fonts";

/**
 * English root layout, served at `/`. One of two root layouts (Arabic lives in
 * app/(ar)): route groups let each locale own its <html>, the only way to get
 * a correct `lang` and `dir` per locale in a static export.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: en.meta.title,
  description: en.meta.description,
  alternates: { canonical: "/", languages: { en: "/", ar: "/ar/" } },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Ahmed Abdalrahman",
    title: en.meta.title,
    description: en.meta.description,
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3eee4" },
    { media: "(prefers-color-scheme: dark)", color: "#13110e" },
  ],
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    // SiteScript sets data-theme / data-scrolled and drops `no-js` before
    // hydration, so this element's attributes differ from the server HTML by design.
    <html lang="en" dir="ltr" className={`no-js ${fontVariables}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
