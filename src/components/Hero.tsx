"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import AuditComment from "@/components/AuditComment";
import { CTA, SITE } from "@/content/site";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? { opacity: 1 } : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay, ease: EASE },
  });

  return (
    <section id="top" aria-labelledby="hero-title" className="relative bg-ivory">
      <div className="mx-auto grid w-full max-w-[92rem] grid-cols-12">
        {/* Left — the ivory sheet carrying the headline */}
        <div className="col-span-12 order-2 px-5 pb-16 pt-12 sm:px-8 lg:order-1 lg:col-span-7 lg:px-12 lg:pb-24 lg:pt-20 xl:col-span-7">
          <motion.p {...rise(0)} className="eyebrow text-bronze">
            {SITE.name} — {SITE.address.arrondissement}
          </motion.p>

          <motion.h1
            {...rise(0.08)}
            id="hero-title"
            className="display-xl mt-7 font-display text-navy"
          >
            Avocat en contentieux des affaires à Paris.
            <br />
            Défendre vos intérêts, <span className="italic">maîtriser</span> vos enjeux.
          </motion.h1>

          <motion.div
            aria-hidden="true"
            initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: EASE }}
            className="mt-9 h-px w-full origin-left bg-gold"
          />

          <motion.p
            {...rise(0.22)}
            className="measure mt-8 text-[1.0625rem] leading-[1.75] text-ink/85 sm:text-lg"
          >
            Un impayé qui s&rsquo;installe, un associé qui bloque une décision, une garantie de
            passif invoquée après une cession&nbsp;: le litige pèse sur la trésorerie, la
            gouvernance et la valeur de l&rsquo;entreprise bien avant d&rsquo;atteindre le prétoire.{" "}
            {/* TODO: Verify with lawyer: Founding year 2013 */}
            <AuditComment text="TODO: Verify with lawyer: Founding year 2013" />
            Depuis {SITE.founded}, {SITE.name} accompagne dirigeants, associés et entreprises
            confrontés à des litiges commerciaux.
          </motion.p>

          <motion.div
            {...rise(0.32)}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
          >
            <a
              href="#contact"
              className="eyebrow group inline-flex items-center justify-center gap-3 bg-navy px-7 py-4 text-ivory transition-colors duration-300 hover:bg-navytint"
            >
              {CTA.primary}
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            {/* TODO: Verify with lawyer: Phone */}
            <AuditComment text="TODO: Verify with lawyer: Phone" />
            <a
              href={SITE.phoneHref}
              aria-label={`Appeler ${SITE.name} au ${SITE.phone}`}
              className="eyebrow group inline-flex items-center justify-center gap-3 border border-ink/30 px-7 py-4 text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-ivory"
            >
              Appeler le cabinet · {SITE.phone}
            </a>
          </motion.div>

          <motion.div {...rise(0.36)} className="mt-6 flex flex-col gap-2">
            <a
              href="#expertises"
              className="eyebrow group inline-flex w-fit items-center gap-3 border-b border-gold pb-1 text-navy transition-colors hover:text-bronze"
            >
              {CTA.secondary}
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <p className="measure mt-1 text-sm leading-relaxed text-mute">
              {SITE.confidentialityNotice}
            </p>
          </motion.div>

          {/* Credibility bar — single homepage placement of Barreau & Toque alongside footer */}
          <AuditComment text="TODO: Verify with lawyer: Toque number, Oath date, and Founding year 2013" />
          <motion.dl
            {...rise(0.44)}
            className="rule-double mt-14 grid grid-cols-2 gap-y-6 pt-6 sm:grid-cols-3"
          >
            {[
              { t: SITE.barreau, d: `Serment du ${SITE.oathDate} · Toque ${SITE.toque}` },
              { t: `Fondé en ${SITE.founded}`, d: `${SITE.address.street}, Paris 16ᵉ` },
              {
                t: "Procédure & voies amiables",
                d: "Juridictions françaises, médiation, arbitrage",
              },
            ].map((item) => (
              <div key={item.t} className="pr-4">
                <dt className="font-display text-lg leading-snug text-navy">{item.t}</dt>
                <dd className="eyebrow mt-2 text-mute">{item.d}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Right — the navy buckram cover, with the vertical spine */}
        <div className="relative col-span-12 order-1 min-h-[38vh] overflow-hidden bg-navy sm:min-h-[44vh] lg:order-2 lg:col-span-5 lg:min-h-[calc(100vh-5.5rem)] xl:col-span-5">
          <Image
            src="/images/hero-facade.jpg"
            alt="Façade haussmannienne parisienne à Paris 16ᵉ — Blexmann Avocats, avocat en contentieux des affaires"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover object-center opacity-[0.62] mix-blend-luminosity"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-navy via-navy/45 to-navy/20"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-navy/70 via-transparent to-transparent"
          />

          <div className="absolute inset-y-0 right-0 flex w-12 items-center justify-center border-l border-ivory/15 bg-navy/40 backdrop-blur-[2px] sm:w-14">
            <span className="vertical-rl eyebrow text-[0.6rem] tracking-[0.4em] text-goldsoft">
              {SITE.address.arrondissement}
            </span>
          </div>

          <motion.figure
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute bottom-6 left-5 max-w-[26ch] sm:bottom-8 sm:left-8 lg:left-10"
          >
            <figcaption className="font-display text-lg italic leading-snug text-ivory/90">
              {SITE.heroQuote}
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
