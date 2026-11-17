import type { MetadataRoute } from "next";

import { SITE } from "@/content/site";
import { INNER_PAGES } from "@/content/pages";

export const dynamic = "force-static";

/** No fabricated lastModified: add real editorial dates only when tracked. */
export default function sitemap(): MetadataRoute.Sitemap {

  return [
    {
      url: SITE.url,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...INNER_PAGES.map((page) => ({
      url: `${SITE.url}/${page.slug}`,
      changeFrequency: "monthly" as const,
      priority: page.kind === "expertise" ? 0.8 : 0.6,
    })),
    {
      url: `${SITE.url}/contact`,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${SITE.url}/mentions-legales`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE.url}/politique-de-confidentialite`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
