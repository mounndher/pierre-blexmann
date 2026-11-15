"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { CONVERSION, SITE } from "@/content/site";

export default function Conversion() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-labelledby="conversion-title"
      className="relative overflow-hidden bg-navy text-ivory"
    >
      <Image
        src="/images/paris-passage.jpg"
        alt="Architecture parisienne au crépuscule — Cabinet d'avocats en contentieux des affaires à Paris"
        fill
        sizes="100vw"
        className="object-cover opacity-40 mix-blend-luminosity"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-navy/75" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40"
      />

      <div className="relative mx-auto w-full max-w-[92rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid grid-cols-12 gap-x-6 gap-y-8">
          <div className="col-span-12 lg:col-span-8">
            <motion.p
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="eyebrow text-goldsoft"
            >
              {CONVERSION.eyebrow}
            </motion.p>

            <motion.h2
              id="conversion-title"
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="display-lg mt-6 max-w-[16ch] font-display text-ivory"
            >
              {CONVERSION.title}
            </motion.h2>

            <motion.div
              aria-hidden="true"
              initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 h-px w-full max-w-[22rem] origin-left bg-gold"
            />

            <p className="mt-8 max-w-[54ch] text-[1.0625rem] leading-[1.75] text-ivory/80">
              {CONVERSION.body}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href="#contact"
                className="eyebrow group inline-flex items-center justify-center gap-3 bg-ivory px-7 py-4 text-navy transition-colors duration-300 hover:bg-goldsoft"
              >
                {CONVERSION.cta}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
              <a
                href={SITE.phoneHref}
                aria-label={`Appeler le cabinet au ${SITE.phone}`}
                className="eyebrow group inline-flex items-center justify-center gap-3 border border-ivory/40 px-7 py-4 text-ivory transition-colors duration-300 hover:border-ivory hover:bg-ivory/10"
              >
                Appeler · {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
