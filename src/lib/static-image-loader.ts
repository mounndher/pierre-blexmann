"use client";

import type { ImageLoaderProps } from "next/image";

/**
 * Responsive images for a pure static export. All variants exist under /public;
 * this function returns a local file path, never an image API or a remote URL.
 */
export default function staticImageLoader({ src, width }: ImageLoaderProps): string {
  const match = src.match(/^\/images\/(hero-facade|cabinet-desk|cabinet-salon)\.webp$/);
  if (!match) return src;
  const size = width <= 480 ? 480 : width <= 768 ? 768 : width <= 960 ? 960 : 1248;
  return size === 1248 ? src : `/images/${match[1]}-${size}.webp`;
}
