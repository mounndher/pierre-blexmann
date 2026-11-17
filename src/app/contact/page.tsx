import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { OG_IMAGE, SITE } from "@/content/site";

const CONTACT_TITLE = "Contact | Cabinet Blexmann Avocats à Paris 16ᵉ";
const CONTACT_DESCRIPTION =
  "Contacter le Cabinet Blexmann Avocats (53 avenue Victor Hugo, 75116 Paris) : formulaire, téléphone et adresse pour exposer votre litige d'affaires.";

export const metadata: Metadata = {
  title: { absolute: CONTACT_TITLE },
  description: CONTACT_DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: `${SITE.url}/contact`,
    siteName: SITE.legalName,
    title: CONTACT_TITLE,
    description: CONTACT_DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: CONTACT_TITLE,
    description: CONTACT_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
};

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
        <nav aria-label="Fil d'Ariane" className="bg-ivory">
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
                Contact
              </span>
            </li>
          </ol>
        </nav>

        <Contact mode="page" />
      </main>
      <Footer />
    </>
  );
}
