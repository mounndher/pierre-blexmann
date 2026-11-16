import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Reveal, Section } from "@/components/ui";
import { CTA, SITE, type ContactSubject } from "@/content/site";
import type { InnerPage } from "@/content/pages";

/**
 * Shared shell for every inner page: breadcrumb, single H1, H2 sections,
 * FAQ (native <details>, works without JS), internal links and final CTA.
 * Injects BreadcrumbList + FAQPage JSON-LD.
 */
export function innerPageMetadata(page: InnerPage): Metadata {
  return {
    // `absolute` keeps the page title under 60 characters (the layout template
    // would otherwise append « — Cabinet Blexmann Avocats »).
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      url: `${SITE.url}/${page.slug}`,
      siteName: SITE.legalName,
      title: page.title,
      description: page.description,
    },
  };
}

export default function InnerPageShell({
  page,
  faqBasePath = "pages",
}: {
  page: InnerPage;
  faqBasePath?: string;
}) {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: SITE.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.label,
        item: `${SITE.url}/${page.slug}`,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
    url: `${SITE.url}/${page.slug}`,
    inLanguage: "fr",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <a
        href="#main"
        className="eyebrow sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-navy focus:px-4 focus:py-3 focus:text-ivory"
      >
        Aller au contenu
      </a>
      <Header />

      <main id="main" className="bg-ivory">
        {/* Breadcrumb */}
        <nav aria-label="Fil d'ariane" className="border-b border-rule bg-ivory">
          <ol className="mx-auto flex w-full max-w-[92rem] flex-wrap items-center gap-x-2 px-5 py-3 sm:px-8 lg:px-12">
            <li>
              <a href="/" className="eyebrow link-underline text-mute hover:text-navy">
                Accueil
              </a>
            </li>
            <li aria-hidden="true" className="text-mute">
              /
            </li>
            <li>
              <span className="eyebrow text-navy">{page.label}</span>
            </li>
          </ol>
        </nav>

        {/* H1 + lead */}
        <section aria-labelledby="page-title" className="border-b border-rule bg-ivory">
          <div className="mx-auto w-full max-w-[92rem] px-5 pb-14 pt-12 sm:px-8 lg:px-12 lg:pb-20 lg:pt-16">
            <p className="eyebrow text-bronze">
              {SITE.name} — {SITE.tagline}, {SITE.address.locality} 16ᵉ
            </p>
            <h1
              id="page-title"
              className="display-lg mt-6 max-w-[24ch] font-display text-navy"
            >
              {page.h1}
            </h1>
            <div aria-hidden="true" className="mt-8 h-px w-full max-w-[28rem] bg-gold" />
            <p className="measure mt-8 text-[1.0625rem] leading-[1.75] text-ink/85 sm:text-lg">
              {page.lead}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href="/contact"
                className="eyebrow group inline-flex items-center justify-center gap-3 bg-navy px-7 py-4 text-ivory transition-colors duration-300 hover:bg-navytint"
              >
                {CTA.primary}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
              <a
                href={SITE.phoneHref}
                className="eyebrow group inline-flex items-center justify-center gap-3 border border-ink/30 px-7 py-4 text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-ivory"
              >
                {CTA.call} · {SITE.phone}
              </a>
            </div>
            <p className="mt-5 text-sm text-mute">{CTA.heroNote}</p>
          </div>
        </section>

        {/* H2 sections */}
        {page.sections.map((section, i) => (
          <Section
            key={section.heading}
            id={`${faqBasePath}-section-${i + 1}`}
            index={page.index === "—" ? String(i + 1).padStart(2, "0") : page.index}
            label={section.heading}
          >
            {section.paragraphs.map((paragraph) => (
              <Reveal key={paragraph.slice(0, 40)}>
                <p className="measure text-[1.0625rem] leading-[1.75] text-ink/85">
                  {paragraph}
                </p>
              </Reveal>
            ))}
            {section.points && (
              <Reveal delay={0.06}>
                <ul className="rule-double mt-8 space-y-3 border-b border-rule pt-6 pb-6">
                  {section.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-[1rem] text-ink/80">
                      <span aria-hidden="true" className="mt-3 h-px w-6 shrink-0 bg-gold" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </Section>
        ))}

        {/* FAQ */}
        <Section id="faq" index="FAQ" label="Questions fréquentes" tone="paper">
          <Reveal>
            <h2 id="faq-title" className="display-md font-display text-navy">
              Questions fréquentes
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rule-double mt-8 border-b border-rule">
              {page.faqs.map((faq) => (
                <details key={faq.question} className="group border-t border-rule first:border-t-0">
                  <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 py-5 font-display text-[1.15rem] leading-snug text-navy transition-colors hover:text-bronze">
                    <span>{faq.question}</span>
                    <span
                      aria-hidden="true"
                      className="shrink-0 font-display text-xl text-bronze transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="measure pb-6 text-[1rem] leading-[1.75] text-ink/80">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
        </Section>

        {/* Internal links + final CTA */}
        <Section id="suite" index="→" label="Pour aller plus loin">
          <Reveal>
            <h2 className="display-md font-display text-navy">Autres domaines d&apos;intervention</h2>
          </Reveal>
          <Reveal delay={0.06}>
            <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {page.related.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="eyebrow group inline-flex items-center gap-3 border-b border-gold pb-2 text-navy transition-colors hover:text-bronze"
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-14 border-t border-rule pt-10">
              <h2 className="display-md max-w-[20ch] font-display text-navy">
                Un dossier à exposer ?
              </h2>
              <p className="measure mt-5 text-[1.0625rem] leading-[1.75] text-ink/80">
                Quelques lignes sur les faits, les parties concernées et les échéances connues
                suffisent pour un premier échange.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={`/contact?objet=${encodeURIComponent(page.contactSubject as ContactSubject)}`}
                  className="eyebrow group inline-flex items-center justify-center gap-3 bg-navy px-7 py-4 text-ivory transition-colors duration-300 hover:bg-navytint"
                >
                  {CTA.primary}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
                <a
                  href={SITE.phoneHref}
                  className="eyebrow group inline-flex items-center justify-center gap-3 border border-ink/30 px-7 py-4 text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-ivory"
                >
                  {CTA.call} · {SITE.phone}
                </a>
              </div>
            </div>
          </Reveal>
        </Section>
      </main>

      <Footer />
    </>
  );
}
