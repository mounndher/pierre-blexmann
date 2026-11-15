import { WHY } from "@/content/site";
import { Reveal, Section } from "@/components/ui";

export default function Pourquoi() {
  return (
    <Section id="pourquoi" index="03" label={WHY.eyebrow} tone="navy">
      <div className="grid grid-cols-12 gap-x-6 gap-y-8">
        <Reveal className="col-span-12 lg:col-span-7">
          <h2 id="pourquoi-title" className="display-lg font-display text-ivory">
            {WHY.title}
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="col-span-12 lg:col-span-4 lg:col-start-9">
          <p className="text-[1.0625rem] leading-[1.75] text-ivory/80">{WHY.body}</p>
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-10">
        {WHY.commitments.map((commitment, i) => (
          <Reveal
            key={commitment.index}
            delay={i * 0.06}
            className="col-span-12 sm:col-span-6 lg:col-span-6"
          >
            <div className="border-t border-ivory/15 pt-7 sm:pr-8">
              <span className="font-display text-xl italic text-goldsoft">
                {commitment.index}
              </span>
              <h3 className="mt-4 font-display text-[1.4rem] leading-snug text-ivory">
                {commitment.title}
              </h3>
              <p className="mt-3 max-w-[48ch] text-[1rem] leading-[1.7] text-ivory/75">
                {commitment.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-14">
        <div className="flex flex-col gap-5 border-t border-ivory/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[44ch] font-display text-lg italic leading-snug text-ivory/85">
            {WHY.closing}
          </p>
          <a
            href="/#contact"
            className="eyebrow group inline-flex shrink-0 items-center justify-center gap-3 bg-ivory px-7 py-4 text-navy transition-colors duration-300 hover:bg-goldsoft"
          >
            {WHY.cta}
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
