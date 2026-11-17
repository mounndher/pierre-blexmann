import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BOOKING, SITE } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

const TITLE = "Prendre rendez-vous avec un avocat à Paris 16e | Blexmann";
const DESCRIPTION =
  "Demandez un rendez-vous avec Maître Pierre Blexmann, avocat en contentieux des affaires à Paris 16ᵉ : au cabinet, en visioconférence ou par téléphone.";
const PATH = "/rendez-vous";

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

export default function Page() {
  return (
    <>
      <Header />
      <main id="main" className="bg-ivory">
        <article className="mx-auto w-full max-w-[92rem] px-5 pb-24 pt-10 sm:px-8 lg:px-12 lg:pb-32 lg:pt-14">
          <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Rendez-vous" }]} />
          <p className="eyebrow mt-10 text-bronze">Rendez-vous</p>
          <h1 className="display-lg mt-6 max-w-[22ch] font-display text-navy">
            Prendre rendez-vous avec un avocat à Paris
          </h1>
          <div aria-hidden="true" className="mt-8 h-px w-full max-w-[28rem] bg-gold" />
          <p className="measure mt-8 text-[1.0625rem] leading-[1.75] text-ink/85">
            Choisissez le mode d&apos;échange qui vous convient. Votre demande est examinée par le
            cabinet, qui confirme le rendez-vous après les vérifications déontologiques d&apos;usage,
            notamment l&apos;absence de conflit d&apos;intérêts.
          </p>

          <ul className="rule-double mt-12 border-b border-rule">
            {BOOKING.modes.map((m) => (
              <li key={m.id} className="border-t border-rule first:border-t-0">
                <div className="grid grid-cols-12 items-start gap-x-4 gap-y-3 py-8">
                  <div className="col-span-12 sm:col-span-7">
                    <h2 className="font-display text-[1.35rem] leading-snug text-navy">{m.label}</h2>
                    <p className="measure mt-2 text-[0.9375rem] leading-[1.7] text-ink/80">{m.text}</p>
                  </div>
                  <p className="eyebrow col-span-6 text-mute sm:col-span-2">{m.duration}</p>
                  <div className="col-span-6 flex sm:col-span-3 sm:justify-end">
                    <a
                      href={m.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="eyebrow group inline-flex items-center gap-3 bg-navy px-6 py-3 text-ivory transition-colors hover:bg-navytint"
                    >
                      Choisir un créneau
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-12 grid grid-cols-12 gap-x-6 gap-y-8">
            <div className="col-span-12 lg:col-span-7">
              <h2 className="font-display text-[1.6rem] leading-snug text-navy">
                Avant de réserver
              </h2>
              <ul className="mt-5 space-y-3 text-[1rem] leading-[1.7] text-ink/85">
                <li>
                  Le rendez-vous est confirmé par le cabinet&nbsp;; la réservation ne crée pas, en
                  soi, de relation avocat-client.
                </li>
                <li>
                  Indiquez les parties concernées et toute échéance en cours (mise en demeure,
                  assignation, audience).
                </li>
                <li>Ne transmettez pas de documents sensibles à ce stade.</li>
                <li>
                  Échéance imminente&nbsp;? Appelez directement le cabinet au{" "}
                  <a href={SITE.phoneHref} className="link-underline text-navy">
                    {SITE.phone}
                  </a>
                  .
                </li>
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-mute">
                La réservation est assurée par le service Cal.com : consultez la{" "}
                <a href="/politique-de-confidentialite" className="link-underline text-navy">
                  politique de confidentialité
                </a>
                . Vous préférez écrire&nbsp;? Utilisez le{" "}
                <a href="/contact" className="link-underline text-navy">
                  formulaire de contact
                </a>
                .
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
