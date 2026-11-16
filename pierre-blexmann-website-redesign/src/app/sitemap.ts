import type { MetadataRoute } from "next";

export const dynamic = "force-static";
import { SITE } from "@/content/site";
import { INNER_PAGES } from "@/content/pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...INNER_PAGES.map((page) => ({
      url: `${SITE.url}/${page.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: page.kind === "expertise" ? 0.8 : 0.6,
    })),
    {
      url: `${SITE.url}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${SITE.url}/mentions-legales`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE.url}/politique-de-confidentialite`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
