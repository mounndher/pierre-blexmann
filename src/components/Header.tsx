"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { CTA, EXPERTISES, NAV, SITE } from "@/content/site";

function Wordmark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const main = tone === "dark" ? "text-navy" : "text-ivory";
  const sub = tone === "dark" ? "text-bronze" : "text-goldsoft";
  return (
    <Link
      href="/"
      className="flex items-baseline gap-2.5 sm:gap-3"
      aria-label={`${SITE.name} — accueil`}
    >
      <span
        className={`font-display text-[1.35rem] leading-none uppercase tracking-[0.14em] sm:text-[1.55rem] ${main}`}
      >
        {SITE.wordmark}
      </span>
      <span
        aria-hidden="true"
        className={`h-4 w-px translate-y-0.5 ${tone === "dark" ? "bg-gold" : "bg-goldsoft"}`}
      />
      <span className={`eyebrow text-[0.6rem] sm:text-[0.65rem] ${sub}`}>
        {SITE.wordmarkSuffix}
      </span>
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [domainsOpen, setDomainsOpen] = useState(false);
  const [mobileDomainsOpen, setMobileDomainsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const isDomainPage = EXPERTISES.some((e) => e.href === pathname);

  const closeAll = useCallback(() => {
    setOpen(false);
    setDomainsOpen(false);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };
    const onPointerDown = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDomainsOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointerDown);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointerDown);
      document.body.style.overflow = "";
    };
  }, [open, closeAll]);

  return (
    <header
      className={`sticky top-0 z-50 bg-ivory transition-shadow duration-300 ${
        scrolled
          ? "border-b border-rule shadow-[0_10px_30px_-24px_rgba(16,29,43,0.55)]"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[92rem] items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-12">
        <Wordmark />

        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-6 lg:flex xl:gap-8"
        >
          {NAV.map((item) => {
            if ("hasMenu" in item && item.hasMenu) {
              return (
                <div key={item.label} ref={dropdownRef} className="relative">
                  <button
                    type="button"
                    aria-expanded={domainsOpen}
                    aria-controls="menu-domaines"
                    onClick={() => setDomainsOpen((v) => !v)}
                    className={`eyebrow link-underline inline-flex items-center gap-1.5 transition-colors hover:text-navy focus-visible:text-navy ${
                      isDomainPage || domainsOpen ? "text-navy" : "text-ink/80"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={13}
                      strokeWidth={1.75}
                      aria-hidden="true"
                      className={`transition-transform duration-200 ${
                        domainsOpen ? "rotate-180 text-bronze" : ""
                      }`}
                    />
                  </button>

                  {domainsOpen && (
                    <div
                      id="menu-domaines"
                      className="absolute left-0 top-full mt-4 w-[21rem] border border-rule bg-ivory p-5 shadow-[0_18px_40px_-22px_rgba(16,29,43,0.4)]"
                    >
                      <ul className="space-y-2.5">
                        {EXPERTISES.map((exp) => {
                          const active = pathname === exp.href;
                          return (
                            <li key={exp.id}>
                              <Link
                                href={exp.href}
                                onClick={closeAll}
                                aria-current={active ? "page" : undefined}
                                className={`group flex items-baseline gap-3 py-1 text-sm transition-colors ${
                                  active
                                    ? "font-medium text-bronze"
                                    : "text-ink/85 hover:text-navy"
                                }`}
                              >
                                <span
                                  aria-hidden="true"
                                  className="font-display text-sm italic text-bronze"
                                >
                                  {exp.index}
                                </span>
                                <span className="link-underline">{exp.domain}</span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              );
            }

            const active = item.href === pathname;
            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`eyebrow link-underline transition-colors hover:text-navy focus-visible:text-navy ${
                  active ? "text-navy" : "text-ink/80"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={pathname === "/" ? "/#contact" : "/contact"}
            className="eyebrow hidden bg-navy px-5 py-3 text-ivory transition-colors duration-300 hover:bg-navytint sm:inline-block"
          >
            {CTA.primary}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="flex h-11 w-11 items-center justify-center border border-ink/20 text-navy transition-colors hover:border-ink lg:hidden"
          >
            {open ? (
              <X size={18} strokeWidth={1.5} aria-hidden="true" />
            ) : (
              <Menu size={18} strokeWidth={1.5} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            key="menu"
            initial={reduce ? { opacity: 1 } : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="max-h-[82vh] overflow-y-auto border-t border-rule bg-ivory lg:hidden"
          >
            <nav aria-label="Navigation mobile" className="px-5 pb-8 pt-2 sm:px-8">
              <ul>
                {NAV.map((item, i) => {
                  if ("hasMenu" in item && item.hasMenu) {
                    return (
                      <li key={item.label} className="border-b border-rule">
                        <button
                          type="button"
                          aria-expanded={mobileDomainsOpen}
                          aria-controls="menu-mobile-domaines"
                          onClick={() => setMobileDomainsOpen((v) => !v)}
                          className="flex w-full items-baseline justify-between gap-4 py-4 text-left font-display text-2xl text-navy transition-colors hover:text-bronze"
                        >
                          <span className="inline-flex items-center gap-2.5">
                            {item.label}
                            <ChevronDown
                              size={16}
                              strokeWidth={1.5}
                              aria-hidden="true"
                              className={`transition-transform duration-200 ${
                                mobileDomainsOpen ? "rotate-180 text-bronze" : ""
                              }`}
                            />
                          </span>
                          <span aria-hidden="true" className="eyebrow text-bronze">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </button>
                        {mobileDomainsOpen && (
                          <ul
                            id="menu-mobile-domaines"
                            className="mb-4 space-y-2.5 border-l border-gold pl-4"
                          >
                            {EXPERTISES.map((exp) => (
                              <li key={exp.id}>
                                <Link
                                  href={exp.href}
                                  onClick={closeAll}
                                  aria-current={pathname === exp.href ? "page" : undefined}
                                  className="block py-1 text-[0.95rem] text-ink/85 transition-colors hover:text-bronze"
                                >
                                  {exp.domain}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  }

                  return (
                    <li key={item.label} className="border-b border-rule">
                      <Link
                        href={item.href}
                        onClick={closeAll}
                        aria-current={item.href === pathname ? "page" : undefined}
                        className="flex items-baseline justify-between gap-4 py-4 font-display text-2xl text-navy transition-colors hover:text-bronze"
                      >
                        <span>{item.label}</span>
                        <span aria-hidden="true" className="eyebrow text-bronze">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <Link
                href={pathname === "/" ? "/#contact" : "/contact"}
                onClick={closeAll}
                className="eyebrow mt-6 flex items-center justify-center gap-3 bg-navy px-6 py-4 text-ivory"
              >
                {CTA.primary}
              </Link>
              <a
                href={SITE.phoneHref}
                onClick={closeAll}
                className="eyebrow mt-3 flex items-center justify-center gap-3 border border-ink/30 px-6 py-4 text-ink"
              >
                {CTA.call} · {SITE.phone}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
