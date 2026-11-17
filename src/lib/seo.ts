import type { Metadata } from "next";
import { SITE } from "@/content/site";

export const OG_IMAGE = {
  url: "/images/hero-facade.jpg",
  width: 1536,
  height: 1024,
  alt: "Façade haussmannienne à Paris 16ᵉ — Cabinet Blexmann Avocats",
} as const;

/**
 * Shared page metadata. Next.js replaces (does not merge) the parent's
 * `openGraph` object, so every page must restate its images — centralised here.
 */
export function pageMetadata({
  title,
  description,
  path,
  index = true,
}: {
  title: string;
  description: string;
  path: string;
  index?: boolean;
}): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    robots: index ? { index: true, follow: true } : { index: false, follow: true },
    openGraph: {
      title,
      description,
      url: `${SITE.url}${path}`,
      siteName: SITE.legalName,
      locale: "fr_FR",
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

export const ORG_ID = `${SITE.url}/#organization`;
export const PERSON_ID = `${SITE.url}/#pierre-blexmann`;
export const WEBSITE_ID = `${SITE.url}/#website`;

/** E.164 form required by schema.org consumers. */
export const PHONE_E164 = "+33189864860";
