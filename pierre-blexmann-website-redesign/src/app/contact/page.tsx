import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Reveal, Section } from "@/components/ui";
import { CTA, SITE } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: "Contact | Cabinet Blexmann Avocats, avocat à Paris" },
  description:
    "Contacter le Cabinet Blexmann Avocats, Paris 16ᵉ : formulaire, téléphone et adresse pour exposer votre litige d'affaires.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: `${SITE.url}/contact`,
    siteName: SITE.legalName,
    title: "Contact | Cabinet Blexmann Avocats, avocat à Paris",
    description:
      "Contacter le Cabinet Blexmann Avocats, Paris 16ᵉ : formulaire, téléphone et adresse pour exposer votre litige d'affaires.",
  },
};

/**
 * Static page: the optional `?objet=` pre-selection is read client-side by the
 * <Contact /> component (a static export cannot read search params on the server).
 */
export default function ContactPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE.url}/contact` },
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
              <span className="eyebrow text-navy">Contact</span>
            </li>
          </ol>
        </nav>

        <Section id="intro" index="—" label="Contact">
          <Reveal>
            <h1 id="contact-page-title" className="display-lg max-w-[22ch] font-display text-navy">
              Contacter le Cabinet Blexmann Avocats
            </h1>
            <div aria-hidden="true" className="mt-8 h-px w-full max-w-[28rem] bg-gold" />
            <p className="measure mt-8 text-[1.0625rem] leading-[1.75] text-ink/85 sm:text-lg">
              Quelques lignes sur les faits, les parties concernées et les échéances connues
              suffisent pour un premier échange. Le cabinet examine chaque demande et vous indique
              les suites envisageables.
            </p>
            <p className="mt-6 text-sm text-mute">{CTA.heroNote}</p>
          </Reveal>
        </Section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
