import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqList from "@/components/FaqList";
import { ABOUT, CTA, EXPERTISES, SITE } from "@/content/site";

const TITLE = "Maître Pierre Blexmann, avocat au Barreau de Paris";
const DESCRIPTION =
  "Maître Pierre Blexmann, avocat au Barreau de Paris. Cabinet fondé en 2013 au 53 avenue Victor Hugo, Paris 16e : contentieux des affaires.";
const PATH = "/le-cabinet";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}${PATH}`,
    siteName: SITE.legalName,
    locale: "fr_FR",
    type: "article",
  },
};

const FAQS = [
  {
    q: "Où se situe le cabinet ?",
    a: "Le cabinet est établi au 53 avenue Victor Hugo, 75116 Paris (16ᵉ arrondissement). Les échanges ont lieu au cabinet, sur rendez-vous.",
  },
  {
    q: "Quels litiges le cabinet traite-t-il ?",
    a: "Les principaux contentieux des affaires : litiges commerciaux et contractuels, conflits entre associés, responsabilité des dirigeants, contentieux post-acquisition, rupture brutale et concurrence déloyale, procédures d'urgence et litiges internationaux.",
  },
  {
    q: "Le premier échange crée-t-il une relation avocat-client ?",
    a: "Non. L'envoi d'un message ou un premier échange ne crée pas, en soi, de relation avocat-client : celle-ci suppose l'acceptation expresse du dossier par le cabinet, après vérification notamment de l'absence de conflit d'intérêts.",
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
          <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Le Cabinet" }]} />
          <p className="eyebrow mt-10 text-bronze">{ABOUT.role}</p>
          <h1 className="display-lg mt-6 max-w-[22ch] font-display text-navy">{ABOUT.name}</h1>
          <div aria-hidden="true" className="mt-8 h-px w-full max-w-[28rem] bg-gold" />

          <div className="mt-10 grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 lg:col-span-7">
              <p className="max-w-[36ch] font-display text-[1.35rem] leading-[1.45] text-ink sm:text-[1.55rem]">
                {ABOUT.lead}
              </p>

              <h2 className="mt-14 font-display text-[1.6rem] leading-snug text-navy">
                Parcours et pratique
              </h2>
              {ABOUT.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 32)}
                  className="measure mt-4 text-[1rem] leading-[1.75] text-ink/85"
                >
                  {p}
                </p>
              ))}

              <h2 className="mt-14 font-display text-[1.6rem] leading-snug text-navy">
                Domaines d&apos;intervention
              </h2>
              <ul className="mt-6 space-y-3">
                {EXPERTISES.map((e) => (
                  <li key={e.id} className="flex items-start gap-3">
                    <span aria-hidden="true" className="mt-2.5 h-px w-5 shrink-0 bg-gold" />
                    <Link
                      href={e.href}
                      className="link-underline text-[1rem] leading-[1.7] text-navy hover:text-bronze"
                    >
                      {e.pageLinkText}
                    </Link>
                  </li>
                ))}
              </ul>

              <h2 className="mt-14 font-display text-[1.6rem] leading-snug text-navy">
                Publications
              </h2>
              <p className="measure mt-4 text-[1rem] leading-[1.75] text-ink/85">
                Maître Pierre Blexmann a publié sur Village de la Justice une série de trois
                articles consacrés à la preuve de la discrimination dans les relations de travail.
              </p>
              <p className="mt-4">
                <Link
                  href="/publications"
                  className="eyebrow group inline-flex items-center gap-3 border-b border-gold pb-2 text-navy transition-colors hover:text-bronze"
                >
                  Voir les publications
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </p>

              <h2 className="mt-14 font-display text-[1.6rem] leading-snug text-navy">
                Questions fréquentes
              </h2>
              <FaqList items={FAQS} />
            </div>

            <div className="col-span-12 lg:col-span-4 lg:col-start-9">
              <figure className="relative">
                <div className="relative aspect-[4/5] overflow-hidden bg-navy">
                  <Image
                    src="/images/cabinet-salon.jpg"
                    alt="Salon de réception du Cabinet Blexmann Avocats, 53 avenue Victor Hugo à Paris 16ᵉ"
                    fill
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-cover object-center"
                  />
                </div>
                <figcaption className="eyebrow mt-4 text-mute">
                  Le cabinet — {SITE.address.street}, {SITE.address.locality} 16ᵉ
                </figcaption>
              </figure>

              <dl className="rule-double mt-10 grid grid-cols-1 gap-x-6 gap-y-6 pt-7 sm:grid-cols-2 lg:grid-cols-1">
                {ABOUT.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="eyebrow text-mute">{fact.label}</dt>
                    <dd className="mt-2 font-display text-[1.05rem] leading-snug text-navy">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="mt-20 bg-navy px-6 py-12 sm:px-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-[40ch] font-display text-2xl leading-snug text-ivory">
                Quelques lignes sur les faits suffisent pour engager l&apos;examen de votre dossier.
              </p>
              <Link
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
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
