"use client";

import { useEffect } from "react";

/**
 * Legacy homepage anchors → dedicated pages.
 *
 * NOTE: URL fragments are never sent to the server, so they cannot be handled
 * by Next.js server-side redirects (next.config.ts). This client-side mapping
 * is what makes the old in-page anchors keep working instead of breaking.
 */
const LEGACY_MAP: Record<string, string> = {
  "#expertises": "/#expertises",
  "#commercial-contractuel": "/contentieux-commercial",
  "#associes-actionnaires": "/conflits-entre-associes",
  "#responsabilite-dirigeants": "/responsabilite-des-dirigeants",
  "#post-acquisition": "/contentieux-post-acquisition",
  "#rupture-concurrente": "/rupture-brutale-concurrence-deloyale",
  "#urgence": "/procedures-d-urgence",
  "#international": "/contentieux-international",
  "#pourquoi": "/#approche",
  "#cabinet": "/le-cabinet",
  "#actualites": "/publications",
  "#contact": "/contact",
};

export default function LegacyAnchorRedirect() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const target = LEGACY_MAP[hash];
    if (!target) return;

    if (target.startsWith("/#")) {
      // Same-page section: keep the hash so the section stays reachable.
      if (target.slice(1) !== hash) window.location.hash = target.slice(1);
      return;
    }

    window.location.replace(target);
  }, []);

  return null;
}
