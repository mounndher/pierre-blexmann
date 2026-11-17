import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";

const LAST_EDITORIAL_UPDATE = "2026-11-16";

const PATHS: { path: string; changeFrequency: "monthly" | "yearly"; priority: number }[] = [
  { path: "", changeFrequency: "monthly", priority: 1 },
  { path: "/contentieux-commercial", changeFrequency: "monthly", priority: 0.8 },
  { path: "/conflits-entre-associes", changeFrequency: "monthly", priority: 0.8 },
  { path: "/responsabilite-des-dirigeants", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contentieux-post-acquisition", changeFrequency: "monthly", priority: 0.8 },
  { path: "/rupture-brutale-concurrence-deloyale", changeFrequency: "monthly", priority: 0.8 },
  { path: "/procedures-d-urgence", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contentieux-international", changeFrequency: "monthly", priority: 0.8 },
  { path: "/le-cabinet", changeFrequency: "yearly", priority: 0.7 },
  { path: "/publications", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
  { path: "/rendez-vous", changeFrequency: "yearly", priority: 0.6 },
  { path: "/mentions-legales", changeFrequency: "yearly", priority: 0.3 },
  { path: "/politique-de-confidentialite", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Date fixe (dernière révision éditoriale) : new Date() annoncerait une modification à chaque build.
  const lastModified = new Date(LAST_EDITORIAL_UPDATE);
  return PATHS.map(({ path, changeFrequency, priority }) => ({
    url: path ? `${SITE.url}${path}` : SITE.url,
    lastModified,
    changeFrequency,
    priority,
  }));
}
