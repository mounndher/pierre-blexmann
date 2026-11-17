"use client";

import Link from "next/link";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { CTA, EXPERTISES, type Expertise } from "@/content/site";
import { Reveal, Section } from "@/components/ui";

function Row({ item, open, toggle }: { item: Expertise; open: boolean; toggle: () => void }) {
  return (
    <li className="border-t border-rule first:border-t-0">
      {/* Native details keeps all copy and links in the HTML, and remains usable without JS. */}
      <details open={open} className="group/dossier">
        <summary
          onClick={(event) => { event.preventDefault(); toggle(); }}
          className="group block cursor-pointer list-none transition-colors hover:bg-paper/70"
        >
          <h3 className="grid w-full grid-cols-12 items-start gap-x-4 gap-y-2 py-6 text-left sm:py-7">
            <span aria-hidden="true" className="order-1 col-span-2 font-display text-lg italic text-bronze sm:col-span-1 sm:text-xl">{item.index}</span>
            <span className="order-2 col-span-7 sm:col-span-4"><span className="eyebrow block text-mute">{item.domain}</span></span>
            <span className="order-4 col-span-12 sm:order-3 sm:col-span-6">
              <span className="block font-display text-[1.35rem] leading-[1.25] tracking-[-0.015em] text-navy transition-colors group-hover:text-bronze group-open/dossier:text-bronze sm:text-[1.6rem]">{item.title}</span>
            </span>
            <span aria-hidden="true" className="order-3 col-span-3 flex justify-end sm:order-4 sm:col-span-1 sm:pt-1">
              <span className="flex h-9 w-9 items-center justify-center border border-ink/25 text-ink/70 group-open/dossier:border-gold group-open/dossier:text-bronze">
                <Plus size={15} strokeWidth={1.5} className="group-open/dossier:hidden" />
                <Minus size={15} strokeWidth={1.5} className="hidden group-open/dossier:block" />
              </span>
            </span>
          </h3>
        </summary>
        <div className="dossier-panel grid grid-cols-12 gap-x-4 gap-y-6 pb-9 sm:pl-[8.333%]">
          <div className="col-span-12 sm:col-span-7 lg:col-span-6">
            <p className="measure text-[1.0625rem] leading-[1.75] text-ink/85">{item.problem}</p>
            <p className="eyebrow mt-6 text-bronze">Traitement du dossier</p>
            <p className="measure mt-3 text-[1.0625rem] leading-[1.75] text-ink/85">{item.intervention}</p>
            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3">
              <Link href={item.href} className="eyebrow group/link inline-flex items-center gap-3 border-b border-gold pb-2 text-navy transition-colors hover:text-bronze">
                <span>{`Consulter « ${item.domain} »`}</span>
                <span aria-hidden="true" className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
              </Link>
              <a href="#contact" onClick={() => window.dispatchEvent(new CustomEvent("blexmann:select-subject", { detail: item.contactSubject }))}
                className="eyebrow link-underline pb-2 text-mute transition-colors hover:text-navy">{CTA.primary}</a>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-5 lg:col-span-4 lg:col-start-8">
            <p className="eyebrow text-mute">Exemples de situations</p>
            <ul className="mt-4 space-y-3">
              {item.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-mute">
                  <span aria-hidden="true" className="mt-2.5 h-px w-5 shrink-0 bg-gold" /><span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </details>
    </li>
  );
}

export default function Expertises() {
  const [openId, setOpenId] = useState<string | null>(EXPERTISES[0]?.id ?? null);
  return (
    <Section id="expertises" index="01" label="Domaines d'intervention">
      <Reveal>
        <h2 id="expertises-title" className="display-lg max-w-[20ch] font-display text-navy">Derrière chaque litige, un enjeu économique concret.</h2>
      </Reveal>
      <Reveal delay={0.08}>
        <p className="measure mt-7 text-[1.0625rem] leading-[1.75] text-ink/80">
          Le cabinet accompagne dirigeants, entreprises et actionnaires dans leurs principaux
          contentieux économiques, commerciaux et sociétaires. Sélectionnez la situation qui
          correspond à votre enjeu pour en comprendre le traitement ou accéder à la page dédiée.
        </p>
      </Reveal>
      <Reveal delay={0.14} className="mt-12">
        <ul className="rule-double border-b border-rule">
          {EXPERTISES.map((item) => (
            <Row key={item.id} item={item} open={openId === item.id}
              toggle={() => setOpenId((current) => current === item.id ? null : item.id)} />
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
