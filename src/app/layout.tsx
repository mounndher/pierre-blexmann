import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";
import { SITE } from "@/content/site";
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

const TITLE = "Cabinet Pierre Blexmann — Avocat en contentieux des affaires à Paris 16ᵉ";
const DESCRIPTION =
  "Avocat en contentieux des affaires à Paris 16ᵉ : litiges commerciaux, conflits entre associés, responsabilité des dirigeants, procédures d'urgence et MARD.";
const KEYWORDS = [
  "avocat contentieux des affaires Paris",
  "avocat litiges commerciaux Paris",
  "avocat conflits entre associés",
  "avocat responsabilité des dirigeants",
  "avocat contentieux commercial Paris 16",
  "avocat rupture brutale relations commerciales",
  "avocat contentieux post-acquisition Paris",
  "avocat contentieux international Paris",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: TITLE,
    template: "%s — Cabinet Pierre Blexmann",
  },
  description: DESCRIPTION,
  keywords: KEYWORDS,
  applicationName: SITE.legalName,
  authors: [{ name: SITE.legalName }],
  alternates: { canonical: "/" },
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
        alt: "Façade haussmannienne parisienne à Paris 16ᵉ — Cabinet Pierre Blexmann",
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
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
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
  name: SITE.legalName,
  alternateName: SITE.name,
  url: SITE.url,
  image: `${SITE.url}/images/hero-facade.jpg`,
  description: DESCRIPTION,
  foundingDate: String(SITE.founded),
  areaServed: ["Paris", "Île-de-France", "France", "International"],
  knowsAbout: [
    "Contentieux commercial et contractuel",
    "Conflits entre associés et actionnaires",
    "Responsabilité des dirigeants",
    "Contentieux post-acquisition",
    "Rupture brutale des relations commerciales et concurrence déloyale",
    "Procédures d'urgence",
    "Contentieux à dimension internationale",
    "Modes alternatifs de règlement des différends (négociation, médiation, conciliation, arbitrage)",
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
  founder: {
    "@type": "Person",
    name: "Pierre Blexmann",
    jobTitle: "Avocat au Barreau de Paris",
    worksFor: { "@type": "Organization", name: SITE.legalName },
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
        {children}
      </body>
    </html>
  );
}
