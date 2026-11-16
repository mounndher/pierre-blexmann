import Image from "next/image";
import { APPROACH_INTRO, APPROACH_STEPS, WHY, CTA, SITE } from "@/content/site";
import { DrawRule, Reveal, Section } from "@/components/ui";

/**
 * Homepage — « Approche » and « Pourquoi le cabinet » merged into one section:
 * the three-step method first, then the four commitments as short cards.
 */
export default function ApprochePourquoi() {
  return (
    <Section id="approche" index={APPROACH_INTRO.index} label={APPROACH_INTRO.eyebrow}>
      <div className="grid grid-cols-12 gap-x-6 gap-y-8">
        <Reveal className="col-span-12 lg:col-span-7">
          <h2 id="approche-title" className="display-lg font-display text-navy">
            {APPROACH_INTRO.title}
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="col-span-12 lg:col-span-4 lg:col-start-9">
          <p className="text-[1.0625rem] leading-[1.75] text-ink/80">{APPROACH_INTRO.body}</p>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-10">
        <p className="border-l-2 border-gold pl-5 font-display text-xl italic leading-snug text-navy sm:text-2xl">
          {APPROACH_INTRO.principle}
        </p>
      </Reveal>

      {/* 1. The three steps */}
      <div className="rule-double mt-12 grid grid-cols-12 gap-x-6 gap-y-10 pt-10">
        {APPROACH_STEPS.map((step, i) => (
          <Reveal
            key={step.index}
            delay={i * 0.06}
            className="col-span-12 sm:col-span-6 lg:col-span-4"
          >
            <div className="border-t border-rule pt-6 sm:pr-6">
              <span className="font-display text-xl italic text-bronze">{step.index}</span>
              <h3 className="mt-4 font-display text-[1.4rem] leading-snug text-navy">
                {step.title}
              </h3>
              <p className="mt-3 max-w-[46ch] text-[1rem] leading-[1.7] text-ink/80">
                {step.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* 2. The four commitments — short cards */}
      <Reveal delay={0.08} className="mt-16">
        <div className="grid grid-cols-12 overflow-hidden bg-navy text-ivory">
          <div className="relative col-span-12 min-h-[200px] lg:col-span-4 lg:min-h-[320px]">
            <Image
              src="/images/cabinet-desk.jpg"
              alt="Bureau d'avocat en contentieux des affaires à Paris : dossiers, stylo et lampe de bureau en laiton"
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 34vw"
              className="object-cover opacity-70 mix-blend-luminosity"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-transparent to-navy/80"
            />
          </div>

          <div className="col-span-12 px-6 py-10 sm:px-10 lg:col-span-8 lg:py-14">
            <p className="eyebrow text-goldsoft">{WHY.eyebrow}</p>
            <h3 className="display-md mt-5 max-w-[24ch] font-display text-ivory">{WHY.title}</h3>
            <DrawRule className="mt-6 max-w-[8rem]" color="bg-goldsoft" />

            <ul className="mt-9 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
              {WHY.commitments.map((commitment) => (
                <li key={commitment.index} className="border-t border-ivory/15 pt-5">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-lg italic text-goldsoft">
                      {commitment.index}
                    </span>
                    <h4 className="font-display text-[1.15rem] leading-snug text-ivory">
                      {commitment.title}
                    </h4>
                  </div>
                  <p className="mt-2 text-[0.9375rem] leading-[1.7] text-ivory/85">
                    {commitment.body}
                  </p>
                  <p className="mt-2 max-w-[44ch] text-[0.875rem] leading-[1.65] text-ivory/65">
                    {commitment.detail}
                  </p>
                </li>
              ))}
            </ul>

            <p className="mt-10 max-w-[48ch] text-sm leading-relaxed text-ivory/70">
              {WHY.closing}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/contact"
                className="eyebrow group inline-flex items-center justify-center gap-3 bg-ivory px-7 py-4 text-navy transition-colors duration-300 hover:bg-goldsoft"
              >
                {WHY.cta}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
              <a
                href={SITE.phoneHref}
                className="eyebrow group inline-flex items-center justify-center gap-3 border border-ivory/40 px-7 py-4 text-ivory transition-colors duration-300 hover:border-ivory hover:bg-ivory/10"
              >
                {CTA.call} · {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
