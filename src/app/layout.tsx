import type { Metadata, Viewport } from "next";
import { pageMetadata } from "@/lib/seo";
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

/** Strictly under 60 characters (56 chars). */
const TITLE = "Avocat contentieux des affaires Paris | Blexmann Avocats";
/** Strictly under 155 characters (144 chars). */
const DESCRIPTION =
  "Cabinet Blexmann Avocats, Barreau de Paris : litiges commerciaux, conflits entre associés, responsabilité des dirigeants et référés à Paris 16ᵉ.";

export const metadata: Metadata = {
  ...pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/" }),
  metadataBase: new URL(SITE.url),
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }, { url: "/favicon.ico", sizes: "32x32" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
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
