import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CTA, SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Page introuvable",
  description: "La page demandée n'existe pas ou a été déplacée.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <a
        href="#main"
        className="eyebrow sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-navy focus:px-4 focus:py-3 focus:text-ivory"
      >
        Aller au contenu
      </a>
      <Header />
      <main id="main" className="bg-ivory">
        <section
          aria-labelledby="not-found-title"
          className="mx-auto w-full max-w-[92rem] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
        >
          <p className="eyebrow text-bronze">{SITE.legalName} — Erreur 404</p>
          <h1 id="not-found-title" className="display-lg mt-6 max-w-[18ch] font-display text-navy">
            Cette page est introuvable.
          </h1>
          <div aria-hidden="true" className="mt-8 h-px w-full max-w-[24rem] bg-gold" />
          <p className="measure mt-8 text-[1.0625rem] leading-[1.75] text-ink/80">
            L&apos;adresse demandée n&apos;existe pas ou a été déplacée. Vous pouvez revenir à
            l&apos;accueil, consulter les domaines d&apos;intervention du cabinet ou exposer
            directement votre situation.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="/"
              className="eyebrow group inline-flex items-center justify-center gap-3 bg-navy px-7 py-4 text-ivory transition-colors duration-300 hover:bg-navytint"
            >
              Retour à l&apos;accueil
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
            <Link
              href="/contact"
              className="eyebrow group inline-flex items-center justify-center gap-3 border border-ink/30 px-7 py-4 text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-ivory"
            >
              {CTA.primary}
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
