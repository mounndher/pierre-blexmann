import type { NextConfig } from "next";

/**
 * STATIC SITE — no database, no API route, no server code.
 *
 * Every page is prerendered at build time. To produce the deployable static
 * folder (plain HTML/CSS/JS in `out/`, host it anywhere):
 *
 *     STATIC_EXPORT=1 npm run build
 *
 * A normal `npm run build` prerenders the very same pages and is only used by the
 * preview runtime (`next start` cannot serve an `output: "export"` build).
 *
 * - `images.unoptimized`: the Next.js image optimizer needs a server, so images are
 *   served as-is (they are already compressed JPEGs in /public/images).
 * - Redirects are not available on a static export: the legacy in-page anchors are
 *   handled client-side by `LegacyAnchorRedirect`.
 */
const nextConfig: NextConfig = {
  ...(process.env.STATIC_EXPORT === "1" ? { output: "export" as const } : {}),
  images: { unoptimized: true },
};

export default nextConfig;
