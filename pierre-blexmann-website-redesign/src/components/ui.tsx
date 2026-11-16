"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 1 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.65, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** A hairline that draws itself left → right, like a rule being set. */
export function DrawRule({
  className = "",
  delay = 0,
  color = "bg-gold",
}: {
  className?: string;
  delay?: number;
  color?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden="true"
      className={`h-px w-full origin-left ${color} ${className}`}
      initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    />
  );
}

/**
 * Editorial section shell: the index rail hangs outside the text measure,
 * which is what gives the page its asymmetric print grid.
 */
export function Section({
  id,
  index,
  label,
  children,
  tone = "ivory",
  className = "",
}: {
  id?: string;
  index: string;
  label: string;
  children: ReactNode;
  tone?: "ivory" | "navy" | "paper";
  className?: string;
}) {
  const bg =
    tone === "navy"
      ? "bg-navy text-ivory"
      : tone === "paper"
        ? "bg-paper text-ink"
        : "bg-ivory text-ink";
  const railColor = tone === "navy" ? "text-goldsoft" : "text-bronze";
  const railLabel = tone === "navy" ? "text-ivory/60" : "text-mute";
  const borderColor = tone === "navy" ? "border-ivory/15" : "border-rule";

  return (
    <section
      id={id}
      className={`relative border-t ${borderColor} ${bg} ${className}`}
      aria-labelledby={id ? `${id}-title` : undefined}
    >
      <div className="mx-auto w-full max-w-[92rem] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-x-6 lg:gap-x-10">
          <div className="col-span-12 pt-10 md:col-span-3 md:pt-16 lg:col-span-2">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 md:sticky md:top-28 md:block">
              <div className={`font-display text-2xl italic leading-none ${railColor}`}>
                {index}
              </div>
              <div
                className={`h-px w-8 md:my-3 md:h-8 md:w-px ${
                  tone === "navy" ? "bg-goldsoft/50" : "bg-gold"
                }`}
              />
              <p className={`eyebrow max-w-[16ch] ${railLabel}`}>{label}</p>
            </div>
          </div>
          <div className="col-span-12 pb-16 pt-6 md:col-span-9 md:pb-24 md:pt-16 lg:col-span-10">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

type CTAProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "light";
  className?: string;
  onClick?: () => void;
};

export function Cta({ href, children, variant = "solid", className = "", onClick }: CTAProps) {
  const base =
    "group inline-flex items-center justify-center gap-3 px-7 py-4 eyebrow transition-colors duration-300";
  const styles = {
    solid: "bg-navy text-ivory hover:bg-navytint",
    outline: "border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-ivory",
    light: "bg-ivory text-navy hover:bg-goldsoft",
  }[variant];

  return (
    <a href={href} onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
      <span
        aria-hidden="true"
        className="inline-block transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </a>
  );
}
