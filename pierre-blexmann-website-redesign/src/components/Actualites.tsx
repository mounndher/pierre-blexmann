import { EXTERNAL_PUBLICATIONS } from "@/content/articles";
import { Reveal, Section } from "@/components/ui";

/**
 * TASK 4 — News section.
 * - The three « À paraître » cards have been removed: no unpublished content is
 *   presented as published.
 * - Only the verified external publications (Village de la Justice) remain.
 * Contenus à portée strictement informative.
 */
export default function Actualites() {
  return (
    <Section id="publications" index="05" label="Publications" tone="paper">
      <div className="grid grid-cols-12 gap-x-6 gap-y-10">
        <Reveal className="col-span-12 lg:col-span-6">
          <h2 id="publications-title" className="display-lg font-display text-navy">
            Publications externes — droit du travail
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="col-span-12 lg:col-span-5 lg:col-start-8">
          <div className="rule-double pt-7">
            <p className="eyebrow text-bronze">Note éditoriale</p>
            <p className="mt-5 text-sm leading-relaxed text-mute">
              Contenus à portée strictement informative. Ils ne constituent ni une consultation
              juridique, ni un conseil personnalisé.
            </p>
          </div>
        </Reveal>
      </div>

      <ul className="rule-double mt-14 border-b border-rule">
        {EXTERNAL_PUBLICATIONS.map((pub, i) => (
          <Reveal key={pub.id} delay={0.05 * i}>
            <li className="border-t border-rule first:border-t-0">
              <article className="grid grid-cols-12 gap-x-4 gap-y-3 py-8 sm:py-9">
                <div className="col-span-12 sm:col-span-2">
                  <span className="font-display text-lg italic text-bronze">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="eyebrow mt-2 text-mute">Publication externe</p>
                  <p className="mt-1 text-xs text-mute">{pub.publishedDate}</p>
                </div>
                <div className="col-span-12 sm:col-span-7">
                  <h3 className="font-display text-[1.25rem] leading-snug text-navy sm:text-[1.4rem]">
                    <a
                      href={pub.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-bronze"
                    >
                      {pub.title}
                      <span aria-hidden="true" className="ml-2 text-bronze">
                        ↗
                      </span>
                    </a>
                  </h3>
                  <p className="measure mt-3 text-[0.9375rem] leading-[1.7] text-ink/80">
                    {pub.excerpt}
                  </p>
                  <p className="eyebrow mt-4 text-mute">
                    {pub.venue} · {pub.author}
                  </p>
                </div>
                <div className="col-span-12 flex items-start sm:col-span-3 sm:justify-end">
                  <a
                    href={pub.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="eyebrow group inline-flex items-center gap-3 border-b border-gold pb-2 text-navy transition-colors hover:text-bronze"
                  >
                    Lire sur {pub.venue}
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      ↗
                    </span>
                  </a>
                </div>
              </article>
            </li>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={0.12}>
        <p className="mt-10 max-w-[60ch] text-sm leading-relaxed text-mute">
          Aucune autre publication n&apos;est annoncée sur cette page&nbsp;: seuls les contenus
          effectivement publiés et vérifiables y figurent.
        </p>
      </Reveal>
    </Section>
  );
}
