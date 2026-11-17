"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CTA, SITE } from "@/content/site";

/**
 * Mobile-only sticky bottom bar with "Appeler" and "Exposer ma situation".
 * Hidden on `/contact` so it never overlaps the form controls or submit button.
 */
export default function StickyMobileBar() {
  const pathname = usePathname();
  if (pathname === "/contact" || pathname === "/contact/") return null;

  const contactHref = pathname === "/" ? "#contact" : "/contact#formulaire-contact";

  return (
    <div
      data-contact-bar
      role="region"
      aria-label="Contact rapide"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-rule bg-ivory/95 backdrop-blur-md md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-2 gap-2 px-3 py-2.5">
        <a
          href={SITE.phoneHref}
          aria-label={`Appeler le cabinet au ${SITE.phone}`}
          className="eyebrow inline-flex items-center justify-center gap-2 border border-ink/30 px-3 py-3 text-ink transition-colors active:bg-paper"
        >
          Appeler
        </a>
        {pathname === "/" ? (
          <a
            href={contactHref}
            className="eyebrow inline-flex items-center justify-center gap-2 bg-navy px-3 py-3 text-ivory transition-colors active:bg-navytint"
          >
            {CTA.primary}
          </a>
        ) : (
          <Link
            href={contactHref}
            className="eyebrow inline-flex items-center justify-center gap-2 bg-navy px-3 py-3 text-ivory transition-colors active:bg-navytint"
          >
            {CTA.primary}
          </Link>
        )}
      </div>
    </div>
  );
}
