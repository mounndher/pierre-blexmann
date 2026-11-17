import FaqList from "@/components/FaqList";
import { Reveal, Section } from "@/components/ui";
import { CTA, HOME_FAQS } from "@/content/site";

export default function HomeFaq() {
  return (
    <Section id="faq" index="06" label="FAQ" tone="paper">
      <div className="grid grid-cols-12 gap-x-6 gap-y-8">
        <Reveal className="col-span-12 lg:col-span-6">
          <h2 id="faq-title" className="display-lg font-display text-navy">
            Questions fréquentes en contentieux des affaires.
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="col-span-12 lg:col-span-5 lg:col-start-8">
          <p className="text-[1.0625rem] leading-[1.75] text-ink/80">
            Repères pratiques sur l&rsquo;injonction de payer, les blocages entre associés, les
            honoraires du cabinet, le choix entre mise en demeure et assignation, et le déroulement
            du premier rendez-vous.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.12} className="mt-12 max-w-[72ch]">
        <FaqList items={HOME_FAQS} />
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-relaxed text-mute">
            Réponses fournies à titre d&rsquo;information générale — chaque situation fait
            l&rsquo;objet d&rsquo;une analyse propre par le cabinet au vu des pièces.
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
