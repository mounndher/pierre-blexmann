import Image from "next/image";
import { ABOUT, SITE } from "@/content/site";
import { Reveal, Section } from "@/components/ui";

export default function Cabinet() {
  return (
    <Section id="cabinet" index="04" label="Le Cabinet" tone="paper">
      <div className="grid grid-cols-12 gap-x-6 gap-y-12">
        <div className="col-span-12 lg:col-span-6">
          <Reveal>
            <p className="eyebrow text-bronze">{ABOUT.role}</p>
            <h2 id="cabinet-title" className="display-lg mt-5 font-display text-navy">
              {ABOUT.name}
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-8 max-w-[36ch] font-display text-[1.35rem] leading-[1.45] text-ink sm:text-[1.55rem]">
              {ABOUT.lead}
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-8 space-y-5">
              {ABOUT.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 32)}
                  className="measure text-[1.0625rem] leading-[1.75] text-ink/80"
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="rule-double mt-12 grid grid-cols-2 gap-x-6 gap-y-6 pt-7 sm:grid-cols-2">
              {ABOUT.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="eyebrow text-mute">{fact.label}</dt>
                  <dd className="mt-2 font-display text-[1.05rem] leading-snug text-navy">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="col-span-12 lg:col-span-5 lg:col-start-8">
          <Reveal delay={0.1}>
            <figure className="relative">
              <div className="relative aspect-[4/5] overflow-hidden bg-navy">
                <Image
                  src="/images/cabinet-salon.jpg"
                  alt="Salon de réception du Cabinet Pierre Blexmann, avocat au Barreau de Paris, 53 avenue Victor Hugo (Paris 16ᵉ)"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
              <figcaption className="eyebrow mt-4 text-mute">
                Le cabinet — {SITE.address.street}, {SITE.address.locality} 16ᵉ
              </figcaption>
            </figure>
          </Reveal>

          {/* Typographic identity panel — no authentic portrait available */}
          <Reveal delay={0.16}>
            <div className="mt-6 flex flex-col items-center bg-navy px-6 py-10 text-center">
              <span className="font-display text-5xl italic leading-none text-goldsoft">PB</span>
              <span aria-hidden="true" className="mt-5 h-px w-12 bg-gold" />
              <p className="mt-5 font-display text-lg leading-snug text-ivory">{ABOUT.name}</p>
              <p className="eyebrow mt-2 text-goldsoft">{ABOUT.role}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
