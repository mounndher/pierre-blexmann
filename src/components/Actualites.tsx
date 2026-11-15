import { NEWS } from "@/content/site";
import { EXTERNAL_PUBLICATIONS, FORTHCOMING_TOPICS } from "@/content/articles";
import { Reveal, Section } from "@/components/ui";

export default function Actualites() {
  return (
    <Section id="actualites" index="05" label="Actualités">
      <div className="grid grid-cols-12 gap-x-6 gap-y-10">
        <Reveal className="col-span-12 lg:col-span-6">
          <h2 id="actualites-title" className="display-lg font-display text-navy">
            {NEWS.title}
          </h2>
          <p className="measure mt-7 text-[1.0625rem] leading-[1.75] text-ink/80">{NEWS.body}</p>
        </Reveal>

        <Reveal delay={0.1} className="col-span-12 lg:col-span-5 lg:col-start-8">
          <div className="rule-double pt-7">
            <p className="eyebrow text-bronze">Repère éditorial</p>
            <p className="mt-5 text-sm leading-relaxed text-mute">
              Les publications externes ci-dessous renvoient vers les articles publiés par Maître
              Pierre Blexmann sur Village de la Justice. Les thèmes annoncés «&nbsp;À paraître&nbsp;»
              correspondent aux prochaines notes du cabinet en cours de rédaction.
            </p>
          </div>
        </Reveal>
      </div>

      {/* 1. Verified external publications */}
      <div className="mt-14">
        <p className="eyebrow text-bronze">Publications externes vérifiées</p>
        <ul className="rule-double mt-5 border-b border-rule">
          {EXTERNAL_PUBLICATIONS.map((pub, i) => (
            <Reveal key={pub.id} delay={0.05 * i}>
              <li className="border-t border-rule first:border-t-0">
                <article className="grid grid-cols-12 gap-x-4 gap-y-3 py-8 sm:py-9">
                  <div className="col-span-12 sm:col-span-2">
                    <span className="font-display text-lg italic text-bronze">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="eyebrow mt-2 text-mute">{pub.status}</p>
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
                      Lire sur Village de la Justice
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
      </div>

      {/* 2. Forthcoming editorial topics — clearly separated, no fake links or dates */}
      <Reveal delay={0.1} className="mt-14">
        <div className="bg-paper/70 p-6 sm:p-9">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <p className="eyebrow text-bronze">Notes du cabinet — À paraître</p>
            <p className="text-xs text-mute">
              Contenus en préparation — mis en ligne après validation éditoriale
            </p>
          </div>
          <ul className="mt-6 grid grid-cols-12 gap-x-6 gap-y-6 border-t border-rule pt-6">
            {FORTHCOMING_TOPICS.map((topic) => (
              <li key={topic.id} className="col-span-12 md:col-span-4">
                <p className="eyebrow text-mute">
                  {topic.status} · {topic.domain}
                </p>
                <h3 className="mt-2 font-display text-[1.1rem] leading-snug text-navy">
                  {topic.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">{topic.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
