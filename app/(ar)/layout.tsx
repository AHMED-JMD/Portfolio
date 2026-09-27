import type { Metadata, Viewport } from "next";
import "../globals.css";
import ar from "@/content/ar";
import { SITE_URL } from "@/content/site";
import { fontVariables } from "@/lib/fonts";

/**
 * Arabic root layout, served at /ar/. The second root layout (see app/(en)):
 * `dir` has to be right on <html> itself, or the whole document's bidi
 * resolution is wrong.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: ar.meta.title,
  description: ar.meta.description,
  alternates: { canonical: "/ar/", languages: { en: "/", ar: "/ar/" } },
  openGraph: {
    type: "website",
    url: "/ar/",
    siteName: "أحمد عبدالرحمن",
    title: ar.meta.title,
    description: ar.meta.description,
    locale: "ar_SD",
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

export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`no-js ${fontVariables}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
