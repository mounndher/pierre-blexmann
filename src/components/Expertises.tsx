"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { EXPERTISES, type Expertise } from "@/content/site";
import { Reveal, Section } from "@/components/ui";

function Row({
  item,
  open,
  onToggle,
}: {
  item: Expertise;
  open: boolean;
  onToggle: () => void;
}) {
  const reduce = useReducedMotion();
  const panelId = `expertise-panel-${item.id}`;
  const buttonId = `expertise-button-${item.id}`;

  const handleCtaClick = () => {
    window.dispatchEvent(
      new CustomEvent("blexmann:select-subject", { detail: item.contactSubject }),
    );
  };

  return (
    <li id={item.id} className="scroll-mt-24 border-t border-rule first:border-t-0">
      <h3>
        <button
          id={buttonId}
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="group grid w-full grid-cols-12 items-start gap-x-4 gap-y-2 py-6 text-left transition-colors duration-300 hover:bg-paper/70 sm:py-7"
        >
          <span className="order-1 col-span-2 font-display text-lg italic text-bronze sm:order-1 sm:col-span-1 sm:text-xl">
            {item.index}
          </span>
          <span className="order-2 col-span-7 sm:order-2 sm:col-span-4">
            <span className="eyebrow block text-mute">{item.domain}</span>
          </span>
          <span className="order-4 col-span-12 sm:order-3 sm:col-span-6">
            <span
              className={`block font-display text-[1.35rem] leading-[1.25] tracking-[-0.015em] transition-colors duration-300 sm:text-[1.6rem] ${
                open ? "text-bronze" : "text-navy group-hover:text-bronze"
              }`}
            >
              {item.title}
            </span>
          </span>
          <span className="order-3 col-span-3 flex justify-end sm:order-4 sm:col-span-1 sm:pt-1">
            <span
              aria-hidden="true"
              className={`flex h-9 w-9 items-center justify-center border transition-colors duration-300 ${
                open ? "border-gold text-bronze" : "border-ink/25 text-ink/70 group-hover:border-ink"
              }`}
            >
              {open ? <Minus size={15} strokeWidth={1.5} /> : <Plus size={15} strokeWidth={1.5} />}
            </span>
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            key="panel"
            initial={reduce ? { opacity: 1 } : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-12 gap-x-4 gap-y-6 pb-9 sm:pl-[8.333%]">
              <div className="col-span-12 sm:col-span-7 lg:col-span-6">
                <p className="measure text-[1.0625rem] leading-[1.75] text-ink/85">{item.problem}</p>
                <p className="eyebrow mt-6 text-bronze">L&apos;intervention du cabinet</p>
                <p className="measure mt-3 text-[1.0625rem] leading-[1.75] text-ink/85">
                  {item.intervention}
                </p>
                <div className="mt-7 flex flex-col items-start gap-4">
                  <a
                    href={item.href}
                    className="eyebrow group inline-flex items-center gap-3 border-b border-gold pb-2 text-navy transition-colors hover:text-bronze"
                  >
                    {item.pageLinkText}
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                  <a
                    href="#contact"
                    onClick={handleCtaClick}
                    className="eyebrow group inline-flex items-center gap-3 text-mute transition-colors hover:text-navy"
                  >
                    {item.cta}
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-span-12 sm:col-span-5 lg:col-span-4 lg:col-start-8">
                <p className="eyebrow text-mute">Exemples de situations traitées</p>
                <ul className="mt-4 space-y-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-mute">
                      <span aria-hidden="true" className="mt-2.5 h-px w-5 shrink-0 bg-gold" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export default function Expertises() {
  const [openId, setOpenId] = useState<string | null>(EXPERTISES[0]?.id ?? null);

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (EXPERTISES.some((e) => e.id === hash)) {
        setOpenId(hash);
      }
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  return (
    <Section id="expertises" index="01" label="Expertises">
      <Reveal>
        <h2 id="expertises-title" className="display-lg max-w-[20ch] font-display text-navy">
          Derrière chaque litige, un enjeu économique concret.
        </h2>
      </Reveal>
      <Reveal delay={0.08}>
        <p className="measure mt-7 text-[1.0625rem] leading-[1.75] text-ink/80">
          Le cabinet accompagne dirigeants, entreprises et actionnaires dans leurs principaux
          contentieux économiques, commerciaux et sociétaires. Ouvrez la situation qui correspond à
          votre enjeu pour consulter notre lecture du dossier et les modalités d&apos;intervention.
        </p>
      </Reveal>

      <Reveal delay={0.14} className="mt-12">
        <ul className="rule-double border-b border-rule">
          {EXPERTISES.map((item) => (
            <Row
              key={item.id}
              item={item}
              open={openId === item.id}
              onToggle={() => setOpenId((cur) => (cur === item.id ? null : item.id))}
            />
          ))}
        </ul>
      </Reveal>
      <Reveal delay={0.18} className="mt-12">
        <nav aria-label="Pages des domaines d'intervention">
          <p className="eyebrow text-bronze">Toutes les pages d&apos;expertise</p>
          <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {EXPERTISES.map((e) => (
              <li key={e.id} className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-2.5 h-px w-5 shrink-0 bg-gold" />
                <Link
                  href={e.href}
                  className="link-underline text-[1rem] leading-[1.7] text-navy hover:text-bronze"
                >
                  {e.pageLinkText}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Reveal>
    </Section>
  );
}
