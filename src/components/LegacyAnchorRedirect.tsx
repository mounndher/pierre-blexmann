"use client";

import { useEffect } from "react";

/**
 * Redirects retired homepage anchors to their new dedicated static routes.
 * Active homepage anchors (`#expertises`, `#quand-consulter`, `#approche`,
 * `#publications`, `#contact`) stay in place so smooth anchor scrolling works.
 */
const RETIRED_HOME_ANCHORS: Record<string, string> = {
  "#commercial-contractuel": "/contentieux-commercial",
  "#associes-actionnaires": "/conflits-entre-associes",
  "#responsabilite-dirigeants": "/responsabilite-des-dirigeants",
  "#post-acquisition": "/contentieux-post-acquisition",
  "#rupture-concurrente": "/rupture-brutale-concurrence-deloyale",
  "#urgence": "/procedures-d-urgence",
  "#international": "/contentieux-international",
  "#pourquoi": "#approche",
  "#cabinet": "/le-cabinet",
  "#actualites": "/publications",
};

export default function LegacyAnchorRedirect() {
  useEffect(() => {
    const handleHash = () => {
      if (window.location.pathname !== "/") return;
      const target = RETIRED_HOME_ANCHORS[window.location.hash];
      if (!target) return;

      if (target.startsWith("#")) {
        window.location.hash = target;
        return;
      }

      window.location.replace(target);
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return null;
}
