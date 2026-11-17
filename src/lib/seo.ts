import type { Metadata } from "next";
import { OG_IMAGE, SITE } from "@/content/site";

type DeploymentEnvironment = {
  VERCEL_ENV?: string;
  VERCEL_URL?: string;
  NEXT_PUBLIC_DEPLOYMENT_ENV?: string;
};

/** A production Vercel build also has a *.vercel.app technical URL: it is NOT a preview. */
export function isPreviewDeployment(env: DeploymentEnvironment): boolean {
  const stage = env.NEXT_PUBLIC_DEPLOYMENT_ENV ?? env.VERCEL_ENV;
  if (stage === "production") return false;
  if (stage === "preview" || stage === "development") return true;
  return env.VERCEL_URL?.endsWith(".vercel.app") ?? false;
}

export const IS_PREVIEW = isPreviewDeployment({
  VERCEL_ENV: process.env.VERCEL_ENV,
  VERCEL_URL: process.env.VERCEL_URL,
  NEXT_PUBLIC_DEPLOYMENT_ENV: process.env.NEXT_PUBLIC_DEPLOYMENT_ENV,
});

/** One metadata source for canonical, social previews and preview robots on every page. */
export function pageMetadata({
  title,
  description,
  path,
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}): Metadata {
  const indexable = !IS_PREVIEW && !noindex;
  const url = new URL(path, `${SITE.url}/`).toString();
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      url,
      siteName: SITE.name,
      title,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: { index: indexable, follow: indexable, "max-image-preview": "large" },
    },
  };
}
