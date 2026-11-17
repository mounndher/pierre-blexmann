import { Reveal, Section } from "@/components/ui";
import { CTA } from "@/content/site";

const SIGNS = [
  "Une mise en demeure est restée sans réponse.",
  "Un partenaire cesse de payer ou interrompt la relation sans préavis.",
  "Une décision entre associés se trouve bloquée.",
  "La responsabilité d'un dirigeant est mise en cause.",
  "Un différend post-cession porte sur le prix, les comptes ou la garantie de passif.",
  "Une assignation ou une ordonnance vient d'être reçue.",
] as const;

export default function QuandFaireAppel() {
  return (
    <Section id="quand-faire-appel" index="02" label="Repères">
      <div className="grid grid-cols-12 gap-x-6 gap-y-8">
        <Reveal className="col-span-12 lg:col-span-7">
          <h2 id="quand-faire-appel-title" className="display-lg font-display text-navy">
            Quand faire appel à un avocat en contentieux des affaires&nbsp;?
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="col-span-12 lg:col-span-4 lg:col-start-9">
          <p className="text-[1.0625rem] leading-[1.75] text-ink/80">
            Le contentieux des affaires concerne les différends qui touchent la vie de
            l&apos;entreprise&nbsp;: contrats, gouvernance, responsabilité des dirigeants,
            acquisitions et relations commerciales.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-12">
        <ul className="rule-double grid grid-cols-12 gap-x-6 gap-y-5 border-b border-rule pb-10 pt-10">
          {SIGNS.map((sign, i) => (
            <li
              key={sign}
              className="col-span-12 flex items-start gap-4 sm:col-span-6 lg:col-span-4"
            >
              <span aria-hidden="true" className="font-display text-lg italic text-bronze">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[1rem] leading-[1.65] text-ink/85">{sign}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.12} className="mt-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[52ch] font-display text-lg italic leading-snug text-navy">
            Plus le dossier est examiné tôt, plus les options restent ouvertes, qu&apos;il
            s&apos;agisse d&apos;agir, de négocier ou de préserver des preuves.
          </p>
          <a
            href="#contact"
            className="eyebrow group inline-flex shrink-0 items-center gap-3 border-b border-gold pb-2 text-navy transition-colors hover:text-bronze"
          >
            {CTA.primary}
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
