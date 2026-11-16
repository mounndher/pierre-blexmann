import { NEWS } from "@/content/site";
import { EXTERNAL_PUBLICATIONS } from "@/content/articles";
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
              Les publications ci-dessous renvoient vers les articles publiés par Maître Pierre
              Blexmann sur Village de la Justice. Contenus à portée strictement informative.
            </p>
            <a
              href="/publications"
              className="eyebrow group mt-5 inline-flex items-center gap-3 border-b border-gold pb-2 text-navy transition-colors hover:text-bronze"
            >
              Toutes les publications
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </Reveal>
      </div>

      <div className="mt-14">
        <Reveal>
          <h3 className="font-display text-[1.35rem] leading-snug text-navy">
            Publications externes — droit du travail
          </h3>
        </Reveal>
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
                    <h4 className="font-display text-[1.15rem] leading-snug text-navy sm:text-[1.25rem]">
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
                    </h4>
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
        <p className="mt-6 text-xs leading-relaxed text-mute">
          Contenus à portée strictement informative.
        </p>
      </div>
    </Section>
  );
}
