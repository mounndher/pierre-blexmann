import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Expertises from "@/components/Expertises";
import QuandConsulter from "@/components/QuandConsulter";
import ApprochePourquoi from "@/components/ApprochePourquoi";
import Actualites from "@/components/Actualites";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { OG_IMAGE, SITE } from "@/content/site";

const legalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": `${SITE.url}/#legalservice`,
  name: SITE.legalName,
  alternateName: `${SITE.wordmark} ${SITE.wordmarkSuffix}`,
  url: SITE.url,
  image: `${SITE.url}${OG_IMAGE.url}`,
  description:
    "Cabinet Blexmann Avocats, avocat au Barreau de Paris : contentieux commercial, conflits entre associés, responsabilité des dirigeants, post-acquisition, rupture brutale et référés.",
  foundingDate: String(SITE.founded),
  telephone: SITE.phoneE164,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    postalCode: SITE.address.postalCode,
    addressLocality: SITE.address.locality,
    addressCountry: SITE.address.countryCode,
  },
  areaServed: [
    { "@type": "City", name: "Paris" },
    { "@type": "AdministrativeArea", name: "Île-de-France" },
    { "@type": "Country", name: "France" },
  ],
  knowsAbout: [
    "Contentieux commercial et contractuel",
    "Conflits entre associés et actionnaires",
    "Responsabilité des dirigeants",
    "Contentieux post-acquisition",
    "Rupture brutale de relations commerciales établies",
    "Concurrence déloyale",
    "Procédures d'urgence et référés",
    "Contentieux commercial international",
    "Modes alternatifs de règlement des différends",
  ],
  founder: {
    "@type": "Attorney",
    name: "Pierre Blexmann",
    jobTitle: "Avocat au Barreau de Paris",
    url: `${SITE.url}/le-cabinet`,
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceJsonLd) }}
      />
      <a
        href="#main"
        className="eyebrow sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-navy focus:px-4 focus:py-3 focus:text-ivory"
      >
        Aller au contenu
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Expertises />
        <QuandConsulter />
        <ApprochePourquoi />
        <Actualites />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
