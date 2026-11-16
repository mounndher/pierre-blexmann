import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Expertises from "@/components/Expertises";
import QuandConsulter from "@/components/QuandConsulter";
import ApprochePourquoi from "@/components/ApprochePourquoi";
import Actualites from "@/components/Actualites";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { SITE } from "@/content/site";

export default function HomePage() {
  return (
    <>
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
