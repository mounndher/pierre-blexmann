import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";

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
  { path: "/mentions-legales", changeFrequency: "yearly", priority: 0.3 },
  { path: "/politique-de-confidentialite", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return PATHS.map(({ path, changeFrequency, priority }) => ({
    url: path ? `${SITE.url}${path}` : SITE.url,
    lastModified,
    changeFrequency,
    priority,
  }));
}
