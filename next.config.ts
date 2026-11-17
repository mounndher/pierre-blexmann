import type { NextConfig } from "next";

/**
 * Every route is prerendered. `STATIC_EXPORT=1 npm run build` writes the pure
 * HTML/CSS/JS site to out/. The normal build serves the same static pages in the
 * managed preview, whose runtime cannot use next start with output: export.
 *
 * Images use local, pre-generated WebP variants: no image server, database,
 * third-party form service or dynamic application API is required.
 * Retired fragment links are handled by LegacyAnchorRedirect because fragments
 * are never sent to a web server.
 */
const nextConfig: NextConfig = {
  ...(process.env.STATIC_EXPORT === "1" ? { output: "export" as const } : {}),
  images: {
    loader: "custom",
    loaderFile: "./src/lib/static-image-loader.ts",
    deviceSizes: [480, 768, 960, 1248],
    imageSizes: [],
  },
};

export default nextConfig;
