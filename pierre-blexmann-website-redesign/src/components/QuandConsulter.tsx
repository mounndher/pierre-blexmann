import { QUAND, CTA, SITE } from "@/content/site";
import { Reveal, Section } from "@/components/ui";

/** Homepage — « Quand faire appel à un avocat en contentieux des affaires ? » */
export default function QuandConsulter() {
  return (
    <Section id="quand-consulter" index={QUAND.index} label={QUAND.eyebrow} tone="paper">
      <Reveal>
        <h2 id="quand-consulter-title" className="display-lg max-w-[22ch] font-display text-navy">
          {QUAND.title}
        </h2>
      </Reveal>
      <Reveal delay={0.08}>
        <p className="measure mt-7 text-[1.0625rem] leading-[1.75] text-ink/80">{QUAND.body}</p>
      </Reveal>

      <div className="rule-double mt-12 grid grid-cols-12 gap-x-6 gap-y-8 border-b border-rule pb-10 pt-8">
        {QUAND.items.map((item, i) => (
          <Reveal
            key={item.title}
            delay={i * 0.04}
            className="col-span-12 sm:col-span-6 lg:col-span-4"
          >
            <div className="border-t border-rule pt-5 sm:pr-6">
              <span className="font-display text-lg italic text-bronze">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-[1.15rem] leading-snug text-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-[0.9375rem] leading-[1.7] text-ink/75">{item.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-10 max-w-[52ch] border-l-2 border-gold pl-5 font-display text-xl italic leading-snug text-navy">
          {QUAND.closing}
        </p>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="/contact"
            className="eyebrow group inline-flex items-center justify-center gap-3 bg-navy px-7 py-4 text-ivory transition-colors duration-300 hover:bg-navytint"
          >
            {CTA.primary}
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
          <a
            href={SITE.phoneHref}
            className="eyebrow group inline-flex items-center justify-center gap-3 border border-ink/30 px-7 py-4 text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-ivory"
          >
            {CTA.call} · {SITE.phone}
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
