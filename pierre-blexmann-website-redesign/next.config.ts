import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  /**
   * Redirects — old in-page anchors (#commercial-contractuel, #associes-actionnaires, …)
   * are URL fragments: they never reach the server, so no 301 is technically applicable.
   * All historic anchor ids are preserved on the homepage expertise rows and footer links
   * now point to the dedicated pages, so every legacy link keeps working without a redirect.
   */
  async redirects() {
    return [];
  },
};

export default nextConfig;
