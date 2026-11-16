import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Expertises from "@/components/Expertises";
import QuandFaireAppel from "@/components/QuandFaireAppel";
import Approche from "@/components/Approche";
import Cabinet from "@/components/Cabinet";
import Actualites from "@/components/Actualites";
import Conversion from "@/components/Conversion";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Expertises />
        <QuandFaireAppel />
        <Approche />
        <Cabinet />
        <Actualites />
        <Conversion />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
