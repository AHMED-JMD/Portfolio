import ar from "@/content/ar";
import en, { type Dictionary } from "@/content/en";

export type Locale = "en" | "ar";

/** English is the site root; Arabic lives under /ar/. */
export const localePath = (locale: Locale) => (locale === "ar" ? "/ar/" : "/");

export const dir = (locale: Locale) => (locale === "ar" ? "rtl" : "ltr");

const dictionaries: Record<Locale, Dictionary> = { en, ar };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
