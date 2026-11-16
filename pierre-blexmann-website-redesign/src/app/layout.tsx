import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";
import { SITE } from "@/content/site";
import StickyMobileBar from "@/components/StickyMobileBar";
import LegacyAnchorRedirect from "@/components/LegacyAnchorRedirect";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: "variable",
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: "variable",
  variable: "--font-inter",
});

/**
 * Canonical production domain. The vercel.app preview domain is marked
 * `noindex` so it is never indexed in place of the production site.
 */
const PROD_HOST = "blexmann-avocats.fr";
const IS_PREVIEW = process.env.VERCEL_URL?.endsWith("vercel.app") ?? false;

/** Kept under 60 characters (659 px safe limit ≈ 60 chars). */
const TITLE = "Avocat contentieux des affaires à Paris | Blexmann Avocats";
const DESCRIPTION =
  "Cabinet Blexmann Avocats, avocat au Barreau de Paris : litiges commerciaux, conflits entre associés, responsabilité des dirigeants, procédures d'urgence.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: TITLE,
    template: `%s — ${SITE.legalName}`,
  },
  description: DESCRIPTION,
  applicationName: SITE.legalName,
  authors: [{ name: SITE.legalName }],
  alternates: { canonical: "/" },
  // Meta keywords intentionally removed (not used by modern search engines).
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE.url,
    siteName: SITE.legalName,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/images/hero-facade.jpg",
        width: 1536,
        height: 1024,
        alt: "Façade haussmannienne à Paris 16ᵉ, près du 53 avenue Victor Hugo où exerce le Cabinet Blexmann Avocats",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/hero-facade.jpg"],
  },
  robots: {
    index: !IS_PREVIEW,
    follow: !IS_PREVIEW,
    googleBot: { index: !IS_PREVIEW, follow: !IS_PREVIEW, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#101D2B",
  width: "device-width",
  initialScale: 1,
};

const legalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": `${SITE.url}/#legalservice`,
  name: SITE.legalName,
  alternateName: `${SITE.wordmark} ${SITE.wordmarkSuffix}`,
  url: SITE.url,
  image: `${SITE.url}/images/hero-facade.jpg`,
  description: DESCRIPTION,
  foundingDate: String(SITE.founded),
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
    "Rupture brutale des relations commerciales",
    "Concurrence déloyale",
    "Procédures d'urgence et référés",
    "Contentieux commercial international",
    "Modes alternatifs de règlement des différends",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    postalCode: SITE.address.postalCode,
    addressLocality: SITE.address.locality,
    addressCountry: SITE.address.countryCode,
  },
  telephone: SITE.phone,
  email: SITE.email,
  /** [À CONFIRMER] TODO: date de serment et numéro de toque à valider par le cabinet. */
  founder: {
    "@type": "Attorney",
    name: "Pierre Blexmann",
    jobTitle: "Avocat au Barreau de Paris",
    worksFor: { "@type": "LegalService", name: SITE.legalName },
    url: `${SITE.url}/le-cabinet`,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-ivory text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceJsonLd) }}
        />
        {/* Entrance animations set inline opacity:0 — never leave content hidden without JS */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <LegacyAnchorRedirect />
        {children}
        <StickyMobileBar />
      </body>
    </html>
  );
}

export { IS_PREVIEW, PROD_HOST };
