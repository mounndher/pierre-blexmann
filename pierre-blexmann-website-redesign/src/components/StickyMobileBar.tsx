"use client";

import { CTA, SITE } from "@/content/site";

/**
 * Mobile-only sticky bottom bar: call + primary CTA.
 * Hidden on the contact page to avoid a redundant CTA.
 */
export default function StickyMobileBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-rule bg-ivory/97 backdrop-blur-md md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-2 gap-2 px-3 py-2.5">
        <a
          href={SITE.phoneHref}
          className="eyebrow inline-flex items-center justify-center gap-2 border border-ink/30 px-3 py-3 text-ink"
        >
          Appeler
        </a>
        <a
          href="/contact"
          className="eyebrow inline-flex items-center justify-center gap-2 bg-navy px-3 py-3 text-ivory"
        >
          {CTA.primary}
        </a>
      </div>
    </div>
  );
}
