import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/content/site";

const TITLE = "Contact avocat contentieux des affaires Paris 16e | Blexmann";
const DESCRIPTION =
  "Contactez le Cabinet Blexmann Avocats, 53 avenue Victor Hugo, Paris 16e : téléphone, courriel ou formulaire pour un premier échange confidentiel.";
const PATH = "/contact";

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const FAQS = [
  {
    q: "Les informations transmises restent-elles confidentielles ?",
    a: "Les demandes adressées au cabinet sont examinées de manière confidentielle. Les échanges conduits avec un avocat relèvent du secret professionnel dans les conditions prévues par la loi et le Règlement intérieur national.",
  },
  {
    q: "L'envoi du formulaire crée-t-il une relation avocat-client ?",
    a: "Non. L'envoi du formulaire ne crée pas, en soi, de relation avocat-client : celle-ci suppose l'acceptation expresse du dossier par le cabinet, après vérification notamment de l'absence de conflit d'intérêts.",
  },
  {
    q: "Que faut-il préparer avant d'écrire au cabinet ?",
    a: "Quelques lignes suffisent : les parties concernées, les faits, les montants en jeu si vous les connaissez et toute échéance en cours (mise en demeure, assignation, audience). Il n'est pas nécessaire de transmettre de documents sensibles à ce stade.",
  },
];

export default function Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <Header />
      <main id="main" className="bg-ivory">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <div className="mx-auto w-full max-w-[92rem] px-5 pb-24 pt-10 sm:px-8 lg:px-12 lg:pb-32 lg:pt-14">
          <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Contact" }]} />
          <p className="eyebrow mt-10 text-bronze">Contact</p>
          <h1 className="display-lg mt-6 max-w-[22ch] font-display text-navy">
            Contacter un avocat en contentieux des affaires à Paris
          </h1>
          <div aria-hidden="true" className="mt-8 h-px w-full max-w-[28rem] bg-gold" />
          <p className="measure mt-8 text-[1.0625rem] leading-[1.75] text-ink/85">
            Quelques lignes suffisent pour engager un premier échange : le contexte du différend,
            les parties concernées et vos éventuelles échéances procédurales. Le cabinet prend
            connaissance de votre demande et vous indique les suites envisageables. En cas
            d&apos;échéance imminente (assignation, audience, mesure conservatoire), préférez le
            téléphone.
          </p>

          <p className="measure mt-6 text-[1rem] leading-[1.75] text-ink/85">
            Vous préférez choisir un horaire&nbsp;?{" "}
            <a href="/rendez-vous" className="link-underline text-navy hover:text-bronze">
              Réservez un rendez-vous au cabinet, en visioconférence ou par téléphone
            </a>
            .
          </p>

          <div className="mt-12 grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 lg:col-span-4">
              <dl className="rule-double space-y-6 pt-7">
                <div>
                  <dt className="eyebrow text-mute">Cabinet à Paris 16ᵉ</dt>
                  <dd className="mt-2 font-display text-lg leading-snug text-navy">
                    {SITE.address.street}
                    <br />
                    {SITE.address.postalCode} {SITE.address.locality}
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-mute">Téléphone</dt>
                  <dd className="mt-2">
                    <a
                      href={SITE.phoneHref}
                      className="link-underline font-display text-lg text-navy hover:text-bronze"
                    >
                      {SITE.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-mute">Adresse électronique</dt>
                  <dd className="mt-2">
                    <a
                      href={`mailto:${SITE.email}`}
                      className="link-underline break-all font-display text-lg text-navy hover:text-bronze"
                    >
                      {SITE.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-mute">Rattachement</dt>
                  <dd className="mt-2 font-display text-lg text-navy">
                    {SITE.barreau} · Toque {SITE.toque}
                  </dd>
                </div>
              </dl>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              <ContactForm formId="c" />
            </div>
          </div>

          <h2 className="mt-20 font-display text-[1.6rem] leading-snug text-navy">
            Questions fréquentes
          </h2>
          <div className="rule-double mt-6 max-w-[68ch] border-b border-rule">
            {FAQS.map((faq) => (
              <details key={faq.q.slice(0, 24)} className="group border-t border-rule py-5">
                <summary className="cursor-pointer list-none font-display text-[1.1rem] leading-snug text-navy transition-colors marker:hidden hover:text-bronze [&::-webkit-details-marker]:hidden">
                  <span className="flex items-baseline justify-between gap-4">
                    {faq.q}
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-bronze transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </span>
                </summary>
                <p className="measure mt-3 text-[0.95rem] leading-[1.75] text-ink/80">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
