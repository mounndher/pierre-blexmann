import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InnerPageShell, { innerPageMetadata } from "@/components/InnerPageShell";
import { INNER_PAGES } from "@/content/pages";

type Props = { params: Promise<{ slug: string }> };

/**
 * Static generation of the dedicated inner pages:
 * /contentieux-commercial, /conflits-entre-associes, /responsabilite-des-dirigeants,
 * /contentieux-post-acquisition, /rupture-brutale-concurrence-deloyale,
 * /procedures-d-urgence, /contentieux-international, /le-cabinet, /publications
 */
export function generateStaticParams() {
  return INNER_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = INNER_PAGES.find((p) => p.slug === slug);
  if (!page) return {};
  return innerPageMetadata(page);
}

export default async function InnerPage({ params }: Props) {
  const { slug } = await params;
  const page = INNER_PAGES.find((p) => p.slug === slug);
  if (!page) notFound();
  return <InnerPageShell page={page} />;
}
