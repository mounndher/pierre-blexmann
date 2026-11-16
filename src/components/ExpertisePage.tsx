import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqList, { type FaqItem } from "@/components/FaqList";
import { CTA, SITE, type ContactSubject } from "@/content/site";

export type Faq = FaqItem;

export type ExpertisePageData = {
  path: string;
  breadcrumbLabel: string;
  eyebrow: string;
  h1: string;
  intro: string[];
  situationsTitle: string;
  situationsText: string;
  situationsBullets: string[];
  conduiteTitle: string;
  conduiteParagraphs: string[];
  faqs: Faq[];
  related: { label: string; href: string }[];
  contactSubject: ContactSubject;
};

export default function ExpertisePage({ data }: { data: ExpertisePageData }) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const contactHref = `/contact?sujet=${encodeURIComponent(data.contactSubject)}`;

  return (
    <>
      <Header />
      <main id="main" className="bg-ivory">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <article className="mx-auto w-full max-w-[92rem] px-5 pb-24 pt-10 sm:px-8 lg:px-12 lg:pb-32 lg:pt-14">
          <Breadcrumbs
            items={[{ label: "Accueil", href: "/" }, { label: data.breadcrumbLabel }]}
          />
          <p className="eyebrow mt-10 text-bronze">{data.eyebrow}</p>
          <h1 className="display-lg mt-6 max-w-[22ch] font-display text-navy">{data.h1}</h1>
          <div aria-hidden="true" className="mt-8 h-px w-full max-w-[28rem] bg-gold" />

          <div className="mt-10 grid grid-cols-12 gap-x-6">
            <div className="col-span-12 lg:col-span-8 xl:col-span-7">
              {data.intro.map((p) => (
                <p
                  key={p.slice(0, 40)}
                  className="measure mt-5 text-[1.0625rem] leading-[1.75] text-ink/85 first:mt-0"
                >
                  {p}
                </p>
              ))}

              <h2 className="mt-14 font-display text-[1.6rem] leading-snug text-navy">
                {data.situationsTitle}
              </h2>
              <p className="measure mt-4 text-[1rem] leading-[1.75] text-ink/85">
                {data.situationsText}
              </p>
              <ul className="mt-6 space-y-3">
                {data.situationsBullets.map((b) => (
                  <li key={b.slice(0, 32)} className="flex items-start gap-3 text-ink/85">
                    <span aria-hidden="true" className="mt-2.5 h-px w-5 shrink-0 bg-gold" />
                    <span className="text-[1rem] leading-[1.7]">{b}</span>
                  </li>
                ))}
              </ul>

              <h2 className="mt-14 font-display text-[1.6rem] leading-snug text-navy">
                {data.conduiteTitle}
              </h2>
              {data.conduiteParagraphs.map((p) => (
                <p
                  key={p.slice(0, 40)}
                  className="measure mt-4 text-[1rem] leading-[1.75] text-ink/85"
                >
                  {p}
                </p>
              ))}

              <h2 className="mt-14 font-display text-[1.6rem] leading-snug text-navy">
                Questions fréquentes
              </h2>
              <FaqList items={data.faqs} />
            </div>

            <aside className="col-span-12 mt-14 lg:col-span-4 lg:mt-0">
              <div className="bg-paper/70 p-6 sm:p-8 lg:sticky lg:top-28">
                <p className="eyebrow text-bronze">Voir aussi</p>
                <ul className="mt-5 space-y-4">
                  {data.related.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="link-underline font-display text-[1.05rem] leading-snug text-navy hover:text-bronze"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div aria-hidden="true" className="my-6 h-px w-full bg-rule" />
                <p className="text-sm leading-relaxed text-ink/75">
                  {SITE.legalName} — {SITE.address.street}, {SITE.address.postalCode}{" "}
                  {SITE.address.locality}.
                </p>
                <p className="mt-3 text-sm">
                  <a href={SITE.phoneHref} className="link-underline text-navy">
                    {SITE.phone}
                  </a>
                </p>
              </div>
            </aside>
          </div>

          <div className="mt-20 bg-navy px-6 py-12 sm:px-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="eyebrow text-goldsoft">Premier échange</p>
                <p className="mt-4 max-w-[40ch] font-display text-2xl leading-snug text-ivory">
                  Quelques lignes sur les faits suffisent pour engager l&apos;examen de votre
                  dossier.
                </p>
                <p className="mt-4 max-w-[64ch] text-xs leading-relaxed text-ivory/55">
                  Les informations de cette page ont un caractère général et informatif&nbsp;; elles
                  ne constituent ni une consultation juridique ni un conseil personnalisé, et leur
                  lecture ne crée aucune relation avocat-client.
                </p>
              </div>
              <Link
                href={contactHref}
                className="eyebrow group inline-flex shrink-0 items-center justify-center gap-3 bg-ivory px-7 py-4 text-navy transition-colors duration-300 hover:bg-goldsoft"
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
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
