"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
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
            Avocat en contentieux des affaires — {SITE.address.locality} 16ᵉ · {SITE.barreau}
          </motion.p>

          <motion.h1
            {...rise(0.08)}
            id="hero-title"
            className="display-xl mt-7 font-display text-navy"
          >
            Défendre vos intérêts.
            <br />
            <span className="italic">Maîtriser</span> vos enjeux.
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
            Un impayé qui s&apos;installe, un associé qui bloque une décision, une garantie de passif
            invoquée après une cession&nbsp;: le litige pèse sur la trésorerie, la gouvernance et la
            valeur de l&apos;entreprise bien avant d&apos;atteindre le prétoire. Depuis {SITE.founded}
            , le Cabinet {SITE.wordmark} accompagne entreprises, dirigeants, actionnaires et
            investisseurs dans leurs contentieux d&apos;affaires — à {SITE.address.locality} comme à
            l&apos;international.
          </motion.p>

          <motion.div
            {...rise(0.32)}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
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
            <a
              href="#expertises"
              className="eyebrow group inline-flex items-center justify-center gap-3 border border-ink/30 px-7 py-4 text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-ivory"
            >
              {CTA.secondary}
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </motion.div>

          <motion.dl
            {...rise(0.44)}
            className="rule-double mt-14 grid grid-cols-2 gap-y-6 pt-6 sm:grid-cols-3"
          >
            {[
              { t: SITE.barreau, d: `Serment du ${SITE.oathDate} · Toque ${SITE.toque}` },
              { t: `Fondé en ${SITE.founded}`, d: `${SITE.address.street}, Paris 16ᵉ` },
              {
                t: "Procédure & voies amiables",
                d: "Juridictions étatiques, médiation, arbitrage",
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
        <div className="relative col-span-12 order-1 min-h-[46vh] overflow-hidden bg-navy lg:order-2 lg:col-span-5 lg:min-h-[calc(100vh-5.5rem)] xl:col-span-5">
          <Image
            src="/images/hero-facade.jpg"
            alt="Façade haussmannienne parisienne à Paris 16ᵉ — Cabinet Pierre Blexmann, avocat en contentieux des affaires"
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
              {SITE.address.locality} — {SITE.barreau.toUpperCase()}
            </span>
          </div>

          <motion.figure
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="absolute bottom-6 left-5 max-w-[22ch] sm:bottom-8 sm:left-8 lg:left-10"
          >
            <figcaption className="font-display text-lg italic leading-snug text-ivory/90">
              «&nbsp;Transformer la contrainte du contentieux en un outil de maîtrise.&nbsp;»
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
