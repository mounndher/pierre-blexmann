"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { CTA, EXPERTISES, NAV, SITE } from "@/content/site";

function Wordmark() {
  return (
    <Link href="/" className="flex shrink-0 items-baseline gap-2.5 sm:gap-3">
      <span className="font-display text-[1.35rem] uppercase leading-none tracking-[0.14em] text-navy sm:text-[1.55rem]">
        {SITE.wordmark}
      </span>
      <span aria-hidden="true" className="h-4 w-px translate-y-0.5 bg-gold" />
      {" "}
      <span className="eyebrow text-[0.6rem] text-bronze sm:text-[0.65rem]">{SITE.wordmarkSuffix}</span>
      <span className="sr-only"> — accueil</span>
    </Link>
  );
}

/** Disclosure menus, not application menus: ordinary links remain navigable with Tab. */
export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [domainsOpen, setDomainsOpen] = useState(false);
  const [mobileDomainsOpen, setMobileDomainsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const mobileToggle = useRef<HTMLButtonElement>(null);
  const domainsToggle = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const isDomainPage = EXPERTISES.some((e) => e.href === pathname);
  const contactHref = pathname === "/" ? "/#contact" : pathname === "/contact" ? "#formulaire-contact" : "/contact#formulaire-contact";

  const closeAll = useCallback(() => {
    setOpen(false);
    setDomainsOpen(false);
    setMobileDomainsOpen(false);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const onResize = () => {
      if (window.innerWidth >= 1280) setOpen(false);
      else setDomainsOpen(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    if (!domainsOpen) return;
    const outside = (event: PointerEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) setDomainsOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDomainsOpen(false);
        domainsToggle.current?.focus();
      }
    };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, [domainsOpen]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // The expanded mobile navigation occupies the screen: do not allow keyboard
    // focus into the obscured page or the bottom contact bar.
    const background = [...document.querySelectorAll<HTMLElement>("main, footer, [data-contact-bar]")];
    const previousInert = background.map((node) => node.inert);
    background.forEach((node) => { node.inert = true; });

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeAll();
        mobileToggle.current?.focus();
      }
      if (event.key !== "Tab") return;
      const focusables = [...(headerRef.current?.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled]), [tabindex='0']",
      ) ?? [])].filter((node) => node.getClientRects().length > 0 && !node.closest("[hidden]"));
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault(); last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      background.forEach((node, i) => { node.inert = previousInert[i]; });
      document.removeEventListener("keydown", onKey);
    };
  }, [open, closeAll]);

  return (
    <header ref={headerRef} className={`sticky top-0 z-50 bg-ivory transition-shadow duration-300 ${
      scrolled ? "border-b border-rule shadow-[0_10px_30px_-24px_rgba(16,29,43,0.55)]" : "border-b border-transparent"
    }`}>
      <div className="mx-auto flex w-full max-w-[92rem] items-center justify-between gap-4 px-5 py-4 sm:gap-6 sm:px-8 lg:px-12">
        <Wordmark />
        <nav aria-label="Navigation principale" className="hidden items-center gap-6 xl:flex 2xl:gap-8">
          {NAV.map((item) => {
            if ("hasMenu" in item && item.hasMenu) {
              return (
                <div key={item.label} ref={dropdownRef} className="relative"
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setDomainsOpen(false);
                  }}>
                  <button ref={domainsToggle} type="button" aria-expanded={domainsOpen} aria-controls="menu-domaines"
                    onClick={() => setDomainsOpen((value) => !value)}
                    onKeyDown={(event) => {
                      if (event.key === "ArrowDown") {
                        event.preventDefault(); setDomainsOpen(true);
                        requestAnimationFrame(() => dropdownRef.current?.querySelector<HTMLAnchorElement>("#menu-domaines a")?.focus());
                      }
                    }}
                    className={`eyebrow link-underline inline-flex min-h-9 items-center gap-1.5 transition-colors hover:text-navy ${isDomainPage || domainsOpen ? "text-navy" : "text-ink/80"}`}>
                    {item.label}
                    <ChevronDown size={13} strokeWidth={1.75} aria-hidden="true" className={`transition-transform duration-200 ${domainsOpen ? "rotate-180 text-bronze" : ""}`} />
                  </button>
                  <div id="menu-domaines" hidden={!domainsOpen} className="absolute left-0 top-full mt-3 w-[21rem] border border-rule bg-ivory p-5 shadow-[0_18px_40px_-22px_rgba(16,29,43,0.4)]">
                    <ul className="space-y-1.5">
                      {EXPERTISES.map((exp) => (
                        <li key={exp.id}>
                          <Link href={exp.href} onClick={closeAll} aria-current={pathname === exp.href ? "page" : undefined}
                            className={`flex min-h-9 items-baseline gap-3 py-1.5 text-sm transition-colors ${pathname === exp.href ? "font-medium text-bronze" : "text-ink/85 hover:text-navy"}`}>
                            <span aria-hidden="true" className="font-display text-sm italic text-bronze">{exp.index}</span>
                            <span className="link-underline">{exp.domain}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link href="/#expertises" onClick={closeAll} className="eyebrow mt-4 inline-block border-t border-rule pt-4 text-bronze">
                      Tous les domaines d’intervention
                    </Link>
                  </div>
                </div>
              );
            }
            return (
              <Link key={item.label} href={item.href} aria-current={item.href === pathname ? "page" : undefined}
                className={`eyebrow link-underline inline-flex min-h-9 items-center transition-colors hover:text-navy ${item.href === pathname ? "text-navy" : "text-ink/80"}`}>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex shrink-0 items-center gap-3">
          <Link href={contactHref} className="eyebrow hidden bg-navy px-5 py-3 text-ivory transition-colors hover:bg-navytint sm:inline-block">
            {CTA.primary}
          </Link>
          <button ref={mobileToggle} type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open}
            aria-controls={open ? "menu-mobile" : undefined} aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="flex h-11 w-11 items-center justify-center border border-ink/20 text-navy transition-colors hover:border-ink xl:hidden">
            {open ? <X size={18} strokeWidth={1.5} aria-hidden="true" /> : <Menu size={18} strokeWidth={1.5} aria-hidden="true" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div id="menu-mobile" key="menu" initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }} exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-rule bg-ivory xl:hidden">
            <nav aria-label="Navigation mobile" className="px-5 pb-8 pt-2 sm:px-8">
              <ul>
                {NAV.map((item, i) => (
                  <li key={item.label} className="border-b border-rule">
                    {"hasMenu" in item && item.hasMenu ? (
                      <>
                        <button type="button" aria-expanded={mobileDomainsOpen} aria-controls="menu-mobile-domaines"
                          onClick={() => setMobileDomainsOpen((value) => !value)}
                          className="flex w-full items-baseline justify-between gap-4 py-4 text-left font-display text-2xl text-navy hover:text-bronze">
                          <span className="inline-flex items-center gap-2.5">{item.label}
                            <ChevronDown size={16} strokeWidth={1.5} aria-hidden="true" className={`transition-transform ${mobileDomainsOpen ? "rotate-180" : ""}`} />
                          </span>
                          <span aria-hidden="true" className="eyebrow text-bronze">{String(i + 1).padStart(2, "0")}</span>
                        </button>
                        <ul id="menu-mobile-domaines" hidden={!mobileDomainsOpen} className="mb-4 space-y-1 border-l border-gold pl-4">
                          {EXPERTISES.map((exp) => (
                            <li key={exp.id}>
                              <Link href={exp.href} onClick={closeAll} aria-current={pathname === exp.href ? "page" : undefined}
                                className="block py-2 text-[0.95rem] text-ink/85 hover:text-bronze">{exp.domain}</Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link href={item.href} onClick={closeAll} aria-current={item.href === pathname ? "page" : undefined}
                        className="flex items-baseline justify-between gap-4 py-4 font-display text-2xl text-navy hover:text-bronze">
                        <span>{item.label}</span><span aria-hidden="true" className="eyebrow text-bronze">{String(i + 1).padStart(2, "0")}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <Link href={contactHref} onClick={closeAll} className="eyebrow mt-6 flex items-center justify-center gap-3 bg-navy px-6 py-4 text-ivory">{CTA.primary}</Link>
              <a href={SITE.phoneHref} onClick={closeAll} className="eyebrow mt-3 flex items-center justify-center gap-3 border border-ink/30 px-6 py-4 text-ink">{CTA.call} · {SITE.phone}</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
