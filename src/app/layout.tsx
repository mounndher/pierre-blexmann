import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";
import { OG_IMAGE, SITE } from "@/content/site";
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
 * Mark preview deployments (`*.vercel.app` or `VERCEL_ENV=preview`) as `noindex`
 * so they never compete with the canonical production domain.
 */
const IS_PREVIEW =
  process.env.VERCEL_ENV === "preview" ||
  (process.env.VERCEL_URL?.endsWith("vercel.app") ?? false);

/** Strictly under 60 characters (56 chars). */
const TITLE = "Avocat contentieux des affaires Paris | Blexmann Avocats";
/** Strictly under 155 characters (144 chars). */
const DESCRIPTION =
  "Cabinet Blexmann Avocats, Barreau de Paris : litiges commerciaux, conflits entre associés, responsabilité des dirigeants et référés à Paris 16ᵉ.";

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
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE.url,
    siteName: SITE.legalName,
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE.url],
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-ivory text-ink antialiased">
        {/* Entrance animations set inline opacity:0 — keep content visible if JS is disabled */}
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
