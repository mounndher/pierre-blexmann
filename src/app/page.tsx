import AuditComment from "@/components/AuditComment";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Expertises from "@/components/Expertises";
import QuandFaireAppel from "@/components/QuandFaireAppel";
import Approche from "@/components/Approche";
import Cabinet from "@/components/Cabinet";
import Actualites from "@/components/Actualites";
import HomeFaq from "@/components/HomeFaq";
import Conversion from "@/components/Conversion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { HOME_FAQS } from "@/content/site";

const homeFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOME_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }}
      />
      <AuditComment text="TODO: Verify with lawyer: Phone, Toque number, SIREN, Founding year 2013, and replace 2020 labor law articles with recent commercial litigation articles" />
      <Header />
      <main id="main">
        <Hero />
        <Expertises />
        <QuandFaireAppel />
        <Approche />
        <Cabinet />
        <Actualites />
        <HomeFaq />
        <Conversion />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
