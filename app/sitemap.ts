import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";

export const dynamic = "force-static";

const languages = { en: `${SITE_URL}/`, ar: `${SITE_URL}/ar/` };

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, lastModified: new Date(), alternates: { languages } },
    { url: `${SITE_URL}/ar/`, lastModified: new Date(), alternates: { languages } },
  ];
}
