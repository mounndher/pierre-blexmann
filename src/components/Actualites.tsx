import { EXTERNAL_PUBLICATIONS } from "@/content/articles";
import { Reveal, Section } from "@/components/ui";

/**
 * Reusable list of verified external publications (Village de la Justice).
 * Shared between the homepage Publications section and `/publications` so
 * there is zero drift and every article carries date, excerpt, and external URL.
 */
export function ExternalPublicationsList() {
  return (
    <ul className="rule-double border-b border-rule">
      {EXTERNAL_PUBLICATIONS.map((pub, i) => (
        <li key={pub.id} className="border-t border-rule first:border-t-0">
          <Reveal delay={0.05 * i}>
            <article className="grid grid-cols-12 gap-x-4 gap-y-3 py-8 sm:py-9">
              <div className="col-span-12 sm:col-span-2">
                <span aria-hidden="true" className="font-display text-lg italic text-bronze">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="eyebrow mt-2 text-mute">{pub.status}</p>
                <time dateTime={pub.isoDate} className="mt-1 block text-xs text-mute">
                  {pub.publishedDate}
                </time>
                {pub.modifiedDate && (
                  <p className="mt-1 text-xs text-mute">Modifié le <time dateTime={pub.modifiedIsoDate}>{pub.modifiedDate}</time></p>
                )}
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
                    <span className="sr-only"> (s&apos;ouvre dans un nouvel onglet)</span>
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
                  <span>Lire sur {pub.venue}</span>
                  <span className="sr-only"> (nouvel onglet)</span>
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    ↗
                  </span>
                </a>
              </div>
            </article>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

/**
 * Homepage Publications section — strictly limited to verified external publications.
 */
export default function Actualites() {
  return (
    <Section id="publications" index="05" label="Publications" tone="paper">
      <div className="grid grid-cols-12 gap-x-6 gap-y-10">
        <Reveal className="col-span-12 lg:col-span-6">
          <h2 id="publications-title" className="display-lg font-display text-navy">
            Publications externes
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="col-span-12 lg:col-span-5 lg:col-start-8">
          <div className="rule-double pt-7">
            <p className="eyebrow text-bronze">Note éditoriale</p>
            <p className="mt-5 text-sm leading-relaxed text-mute">
              Contributions publiées en 2020 sur la preuve en droit du travail. Elles sont présentées
              comme travaux antérieurs, non comme description de l’activité principale actuelle du cabinet.
              Contenus à portée strictement informative.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="mt-14">
        <ExternalPublicationsList />
      </div>
    </Section>
  );
}
