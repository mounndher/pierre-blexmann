import Image from "next/image";
import { APPROACH, APPROACH_INTRO, MARD } from "@/content/site";
import { DrawRule, Reveal, Section } from "@/components/ui";

export default function Approche() {
  return (
    <Section id="approche" index="02" label="Approche">
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

      <div className="rule-double mt-12 grid grid-cols-12 gap-x-6 gap-y-10 pt-10">
        {APPROACH.map((pillar, i) => (
          <Reveal
            key={pillar.index}
            delay={i * 0.06}
            className="col-span-12 sm:col-span-6 lg:col-span-4"
          >
            <div className="border-t border-rule pt-6 sm:pr-6">
              <span className="font-display text-xl italic text-bronze">{pillar.index}</span>
              <h3 className="mt-4 font-display text-[1.4rem] leading-snug text-navy">
                {pillar.title}
              </h3>
              <p className="mt-3 max-w-[46ch] text-[1rem] leading-[1.7] text-ink/80">
                {pillar.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* MARD — navy inset band with the desk still life */}
      <Reveal delay={0.1} className="mt-16">
        <div className="grid grid-cols-12 overflow-hidden bg-navy text-ivory">
          <div className="relative col-span-12 min-h-[220px] lg:col-span-5 lg:min-h-[340px]">
            <Image
              src="/images/cabinet-desk.jpg"
              alt="Bureau d'avocat en contentieux commercial à Paris — dossiers, préparation de stratégie et résolution des litiges"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover opacity-70 mix-blend-luminosity"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-transparent to-navy/80"
            />
          </div>
          <div className="col-span-12 px-6 py-10 sm:px-10 lg:col-span-7 lg:py-14">
            <p className="eyebrow text-goldsoft">{MARD.kicker}</p>
            <h3 className="display-md mt-5 font-display text-ivory">{MARD.title}</h3>
            <DrawRule className="mt-6 max-w-[8rem]" color="bg-goldsoft" />
            <p className="mt-6 max-w-[54ch] text-[1rem] leading-[1.75] text-ivory/80">{MARD.body}</p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
