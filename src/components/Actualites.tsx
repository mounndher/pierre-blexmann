import Link from "next/link";
import AuditComment from "@/components/AuditComment";
import { NEWS, SITE } from "@/content/site";
import { EXTERNAL_PUBLICATIONS } from "@/content/articles";
import { Reveal, Section } from "@/components/ui";

export default function Actualites() {
  return (
    <Section id="publications" index="05" label="Publications externes">
      {/* TODO: Verify with lawyer: replace 2020 labor law articles with recent commercial litigation articles */}
      <AuditComment text="TODO: Verify with lawyer: replace 2020 labor law articles with recent commercial litigation articles" />
      <div id="actualites" className="scroll-mt-24">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <Reveal className="col-span-12 lg:col-span-6">
            <h2 id="publications-title" className="display-lg font-display text-navy">
              {NEWS.title}
            </h2>
            <p className="measure mt-7 text-[1.0625rem] leading-[1.75] text-ink/80">{NEWS.body}</p>
          </Reveal>

          <Reveal delay={0.1} className="col-span-12 lg:col-span-5 lg:col-start-8">
            <div className="rule-double pt-7">
              <p className="eyebrow text-bronze">Repère éditorial</p>
              <p className="mt-5 text-sm leading-relaxed text-mute">
                Ces articles parus en 2020 sont présentés à titre de référence documentaire. Leur
                contenu a une portée strictement informative et ne constitue ni une consultation
                juridique ni un conseil personnalisé.
              </p>
              <Link
                href="/publications"
                className="eyebrow group mt-5 inline-flex items-center gap-3 border-b border-gold pb-2 text-navy transition-colors hover:text-bronze"
              >
                Accéder à la page Publications
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="mt-14">
          <Reveal>
            <h3 className="font-display text-[1.35rem] leading-snug text-navy">
              Contributions publiées sur Village de la Justice
            </h3>
          </Reveal>
          <ul className="rule-double mt-5 border-b border-rule">
            {EXTERNAL_PUBLICATIONS.map((pub, i) => (
              <li key={pub.id} className="border-t border-rule first:border-t-0">
                <Reveal delay={0.05 * i}>
                  <article className="grid grid-cols-12 gap-x-4 gap-y-3 py-8 sm:py-9">
                    <div className="col-span-12 sm:col-span-2">
                      <span className="font-display text-lg italic text-bronze">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="eyebrow mt-2 text-mute">{pub.status}</p>
                      <p className="mt-1 text-xs text-mute">
                        <time dateTime={pub.isoDate}>{pub.publishedDate}</time>
                      </p>
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
                        {pub.venue} · {pub.author} · {pub.theme}
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
                </Reveal>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs leading-relaxed text-mute">
            Publications externes à portée strictement informative — l&rsquo;activité principale de{" "}
            {SITE.name} est dédiée au contentieux des affaires.
          </p>
        </div>
      </div>
    </Section>
  );
}
