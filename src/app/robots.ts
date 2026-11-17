import type { MetadataRoute } from "next";

export const dynamic = "force-static";
import { SITE } from "@/content/site";

/**
 * Production robots.txt. The vercel.app preview domain is disallowed so that
 * the preview never competes with the production site in search results.
 */
export default function robots(): MetadataRoute.Robots {
  const isPreview =
    process.env.VERCEL_URL?.endsWith("vercel.app") ||
    process.env.VERCEL_ENV === "preview" ||
    false;

  if (isPreview) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  return {
    rules: [{ userAgent: "*", allow: "/", disallow: "/api/" }],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
