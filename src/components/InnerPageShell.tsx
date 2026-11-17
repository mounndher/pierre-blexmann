import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExternalPublicationsList } from "@/components/Actualites";
import { Reveal, Section } from "@/components/ui";
import { CABINET_FACTS, CTA, OG_IMAGE, SITE } from "@/content/site";
import type { InnerPage } from "@/content/pages";

/**
 * Shared metadata builder for every static inner route.
 * Uses `title.absolute` to keep every `<title>` strictly under 60 characters
 * and preserves OG/Twitter image assets.
 */
export function innerPageMetadata(page: InnerPage): Metadata {
  return {
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
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [OG_IMAGE.url],
    },
  };
}

export default function InnerPageShell({ page }: { page: InnerPage }) {
  const contactUrl = `/contact?objet=${encodeURIComponent(page.contactSubject)}`;

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

  const faqJsonLd =
    page.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: page.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
          url: `${SITE.url}/${page.slug}`,
          inLanguage: "fr-FR",
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <a
        href="#main"
        className="eyebrow sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-navy focus:px-4 focus:py-3 focus:text-ivory"
      >
        Aller au contenu
      </a>
      <Header />

      <main id="main" className="bg-ivory">
        {/* Breadcrumb */}
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
                {page.label}
              </span>
            </li>
          </ol>
        </nav>

        {/* Hero band: single H1 + lead + contextual CTAs */}
        <section aria-labelledby="page-title" className="bg-ivory">
          <div className="mx-auto w-full max-w-[92rem] px-5 pb-14 pt-12 sm:px-8 lg:px-12 lg:pb-20 lg:pt-16">
            <div className="grid grid-cols-12 gap-x-8 gap-y-12">
              <div className={page.kind === "cabinet" ? "col-span-12 lg:col-span-7" : "col-span-12"}>
                <p className="eyebrow text-bronze">
                  {SITE.name} — {SITE.tagline}, {SITE.address.locality} 16ᵉ
                </p>
                <h1
                  id="page-title"
                  className="display-lg mt-6 max-w-[22ch] font-display text-navy"
                >
                  {page.h1}
                </h1>
                <div aria-hidden="true" className="mt-8 h-px w-full max-w-[28rem] bg-gold" />
                <p className="measure mt-8 text-[1.0625rem] leading-[1.75] text-ink/85 sm:text-lg">
                  {page.lead}
                </p>

                {page.kind === "cabinet" && (
                  <dl className="rule-double mt-10 grid grid-cols-1 gap-x-8 gap-y-5 pt-6 sm:grid-cols-2">
                    {CABINET_FACTS.map((fact) => (
                      <div key={fact.label}>
                        <dt className="eyebrow text-mute">{fact.label}</dt>
                        <dd className="mt-1.5 font-display text-[1.05rem] leading-snug text-navy">
                          {fact.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}

                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                  <Link
                    href={contactUrl}
                    className="eyebrow group inline-flex items-center justify-center gap-3 bg-navy px-7 py-4 text-ivory transition-colors duration-300 hover:bg-navytint"
                  >
                    {CTA.primary}
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                  <a
                    href={SITE.phoneHref}
                    className="eyebrow group inline-flex items-center justify-center gap-3 border border-ink/30 px-7 py-4 text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-ivory"
                  >
                    {CTA.call} · {SITE.phone}
                  </a>
                </div>
                <p className="mt-5 text-sm text-mute">{CTA.heroNote}</p>
              </div>

              {page.kind === "cabinet" && (
                <div className="col-span-12 lg:col-span-5">
                  <figure>
                    <div className="relative aspect-[4/5] overflow-hidden bg-navy">
                      <Image
                        src="/images/cabinet-salon.jpg"
                        alt="Salon de réception parisien aux boiseries bleu nuit et parquet à chevrons — Cabinet Blexmann Avocats, Paris 16ᵉ"
                        fill
                        loading="lazy"
                        sizes="(max-width: 1024px) 100vw, 38vw"
                        className="object-cover object-center"
                      />
                    </div>
                    <figcaption className="eyebrow mt-3 text-mute">
                      {SITE.address.locality} 16ᵉ
                    </figcaption>
                  </figure>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Structured H2 sections */}
        {page.sections.map((section, i) => {
          const sectionId = `section-${i + 1}`;
          return (
            <Section
              key={section.heading}
              id={sectionId}
              labelledBy={`${sectionId}-title`}
              index={String(i + 1).padStart(2, "0")}
              label={section.rail}
            >
              <Reveal>
                <h2
                  id={`${sectionId}-title`}
                  className="display-md max-w-[26ch] font-display text-navy"
                >
                  {section.heading}
                </h2>
              </Reveal>

              <div className="mt-6 space-y-5">
                {section.paragraphs.map((paragraph) => (
                  <Reveal key={paragraph.slice(0, 40)}>
                    <p className="measure text-[1.0625rem] leading-[1.75] text-ink/85">
                      {paragraph}
                    </p>
                  </Reveal>
                ))}
              </div>

              {section.points && (
                <Reveal delay={0.06}>
                  <ul className="rule-double mt-8 space-y-3 border-b border-rule pb-6 pt-6">
                    {section.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-[1rem] text-ink/80">
                        <span aria-hidden="true" className="mt-3 h-px w-6 shrink-0 bg-gold" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )}

              {page.kind === "publications" && i === 0 && (
                <div className="mt-12">
                  <ExternalPublicationsList />
                </div>
              )}
            </Section>
          );
        })}

        {/* FAQ */}
        {page.faqs.length > 0 && (
          <Section id="faq" labelledBy="faq-title" index="FAQ" label="Questions fréquentes" tone="paper">
            <Reveal>
              <h2 id="faq-title" className="display-md font-display text-navy">
                Questions fréquentes
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rule-double mt-8 border-b border-rule">
                {page.faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group border-t border-rule first:border-t-0"
                  >
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
        )}

        {/* Internal links + final CTA */}
        <Section id="suite" labelledBy="suite-title" index="→" label="Pour aller plus loin">
          <Reveal>
            <h2 id="suite-title" className="display-md font-display text-navy">
              {page.relatedHeading}
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {page.related.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="eyebrow group inline-flex items-center gap-3 border-b border-gold pb-2 text-navy transition-colors hover:text-bronze"
                  >
                    <span>{link.label}</span>
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-14 border-t border-rule pt-10">
              <h2 className="display-md max-w-[22ch] font-display text-navy">
                Un dossier à faire examiner&nbsp;?
              </h2>
              <p className="measure mt-5 text-[1.0625rem] leading-[1.75] text-ink/80">
                Quelques lignes sur les faits, les parties concernées et les échéances connues
                suffisent pour engager un premier échange confidentiel.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Link
                  href={contactUrl}
                  className="eyebrow group inline-flex items-center justify-center gap-3 bg-navy px-7 py-4 text-ivory transition-colors duration-300 hover:bg-navytint"
                >
                  {CTA.primary}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
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
