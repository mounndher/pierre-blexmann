import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { EXTERNAL_PUBLICATIONS } from "@/content/articles";
import { CTA, SITE } from "@/content/site";

const TITLE = "Publications de Pierre Blexmann, avocat | Village de la Justice";
const DESCRIPTION =
  "Publications externes de Maître Pierre Blexmann sur Village de la Justice (droit du travail). Contenus à portée strictement informative.";
const PATH = "/publications";

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQS = [
  {
    q: "Ces contenus constituent-ils une consultation juridique ?",
    a: "Non. Les publications présentées ont une portée strictement informative : elles ne constituent ni une consultation juridique ni un conseil personnalisé, et ne créent aucune relation avocat-client.",
  },
  {
    q: "Où ces articles ont-ils été publiés ?",
    a: "Sur Village de la Justice, en 2020, dans une série de trois parties consacrée à la preuve de la discrimination dans les relations de travail. Chaque article est accessible via son lien d'origine.",
  },
  {
    q: "Comment exposer une situation propre à mon entreprise ?",
    a: "En décrivant les faits, les parties et les échéances éventuelles via la page de contact. Le cabinet en prend connaissance et indique les suites envisageables.",
  },
];

export default function Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <Header />
      <main id="main" className="bg-ivory">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <article className="mx-auto w-full max-w-[92rem] px-5 pb-24 pt-10 sm:px-8 lg:px-12 lg:pb-32 lg:pt-14">
          <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Publications" }]} />
          <p className="eyebrow mt-10 text-bronze">Publications</p>
          <h1 className="display-lg mt-6 max-w-[22ch] font-display text-navy">Publications</h1>
          <div aria-hidden="true" className="mt-8 h-px w-full max-w-[28rem] bg-gold" />
          <p className="measure mt-8 text-[1.0625rem] leading-[1.75] text-ink/85">
            Cette page rassemble les publications externes de Maître Pierre Blexmann. Contenus à
            portée strictement informative.
          </p>

          <h2 className="mt-14 font-display text-[1.6rem] leading-snug text-navy">
            Publications externes — droit du travail
          </h2>
          <ul className="rule-double mt-6 border-b border-rule">
            {EXTERNAL_PUBLICATIONS.map((pub, i) => (
              <li key={pub.id} className="border-t border-rule first:border-t-0">
                <article className="grid grid-cols-12 gap-x-4 gap-y-3 py-8 sm:py-9">
                  <div className="col-span-12 sm:col-span-2">
                    <span className="font-display text-lg italic text-bronze">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="eyebrow mt-2 text-mute">{pub.status}</p>
                    <p className="mt-1 text-xs text-mute">{pub.publishedDate}</p>
                  </div>
                  <div className="col-span-12 sm:col-span-7">
                    <h3 className="font-display text-[1.25rem] leading-snug text-navy sm:text-[1.4rem]">
                      <a
                        href={pub.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-bronze"
                      >
                        {pub.title}
                        <span aria-hidden="true" className="ml-2 text-bronze">
                          ↗
                        </span>
                      </a>
                    </h3>
                    <p className="measure mt-3 text-[0.9375rem] leading-[1.7] text-ink/80">
                      {pub.excerpt}
                    </p>
                    <p className="eyebrow mt-4 text-mute">
                      {pub.venue} · {pub.author}
                    </p>
                  </div>
                  <div className="col-span-12 flex items-start sm:col-span-3 sm:justify-end">
                    <a
                      href={pub.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="eyebrow group inline-flex items-center gap-3 border-b border-gold pb-2 text-navy transition-colors hover:text-bronze"
                    >
                      Lire sur Village de la Justice
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        ↗
                      </span>
                    </a>
                  </div>
                </article>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs leading-relaxed text-mute">
            Contenus à portée strictement informative.
          </p>

          <h2 className="mt-14 font-display text-[1.6rem] leading-snug text-navy">
            Questions fréquentes
          </h2>
          <div className="rule-double mt-6 max-w-[68ch] border-b border-rule">
            {FAQS.map((faq) => (
              <details key={faq.q.slice(0, 24)} className="group border-t border-rule py-5">
                <summary className="cursor-pointer list-none font-display text-[1.1rem] leading-snug text-navy transition-colors marker:hidden hover:text-bronze [&::-webkit-details-marker]:hidden">
                  <span className="flex items-baseline justify-between gap-4">
                    {faq.q}
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-bronze transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </span>
                </summary>
                <p className="measure mt-3 text-[0.95rem] leading-[1.75] text-ink/80">{faq.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-20 bg-navy px-6 py-12 sm:px-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-[40ch] font-display text-2xl leading-snug text-ivory">
                Une question propre à votre situation&nbsp;? Décrivez les faits au cabinet.
              </p>
              <a
                href="/contact"
                className="eyebrow group inline-flex shrink-0 items-center justify-center gap-3 bg-ivory px-7 py-4 text-navy transition-colors duration-300 hover:bg-goldsoft"
              >
                {CTA.primary}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
