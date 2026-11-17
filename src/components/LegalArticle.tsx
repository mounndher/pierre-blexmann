import type { ReactNode } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/content/site";

export default function LegalArticle({
  title,
  slug,
  updated,
  eyebrow = "Informations légales",
  backHref = "/",
  backLabel = "← Retour à l’accueil",
  children,
}: {
  title: string;
  slug: string;
  updated?: string;
  eyebrow?: string;
  backHref?: string;
  backLabel?: string;
  children: ReactNode;
}) {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
      { "@type": "ListItem", position: 2, name: title, item: `${SITE.url}/${slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <a
        href="#main"
        className="eyebrow sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-navy focus:px-4 focus:py-3 focus:text-ivory"
      >
        Aller au contenu
      </a>
      <Header />
      <main id="main" className="bg-ivory">
        <nav aria-label="Fil d'Ariane" className="border-b border-rule bg-ivory">
          <ol className="mx-auto flex w-full max-w-[92rem] flex-wrap items-center gap-x-2.5 gap-y-1 px-5 py-3 sm:px-8 lg:px-12">
            <li>
              <Link href="/" className="eyebrow link-underline text-mute hover:text-navy">
                Accueil
              </Link>
            </li>
            <li aria-hidden="true" className="text-xs text-mute">
              /
            </li>
            <li>
              <span aria-current="page" className="eyebrow text-navy">
                {title}
              </span>
            </li>
          </ol>
        </nav>

        <article className="mx-auto w-full max-w-[92rem] px-5 pb-24 pt-12 sm:px-8 lg:px-12 lg:pb-32 lg:pt-16">
          <p className="eyebrow text-bronze">
            {SITE.legalName} — {eyebrow}
          </p>
          <h1 className="display-lg mt-6 max-w-[22ch] font-display text-navy">{title}</h1>
          <div aria-hidden="true" className="mt-8 h-px w-full max-w-[28rem] bg-gold" />
          {updated && <p className="eyebrow mt-6 text-mute">Mise à jour — {updated}</p>}

          <div className="mt-12 grid grid-cols-12 gap-x-6">
            <div className="col-span-12 lg:col-span-8 xl:col-span-7">
              <div className="space-y-8 [&_a]:text-navy [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-[1.5rem] [&_h2]:leading-snug [&_h2]:text-navy [&_h2]:first:mt-0 [&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-[1.15rem] [&_h3]:text-navy [&_li]:mt-2 [&_li]:list-disc [&_li]:pl-2 [&_ol]:mt-3 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:mt-3 [&_p]:max-w-[68ch] [&_p]:text-[1rem] [&_p]:leading-[1.75] [&_p]:text-ink/85 [&_strong]:font-semibold [&_strong]:text-navy [&_ul]:mt-3 [&_ul]:pl-5">
                {children}
              </div>
            </div>
          </div>

          <Link
            href={backHref}
            className="eyebrow mt-16 inline-flex items-center gap-3 border-b border-gold pb-2 text-navy transition-colors hover:text-bronze"
          >
            {backLabel}
          </Link>
        </article>
      </main>
      <Footer />
    </>
  );
}
