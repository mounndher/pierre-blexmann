import { CTA, SITE } from "@/content/site";

const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Contentieux commercial", href: "/contentieux-commercial" },
  { label: "Conflits entre associés", href: "/conflits-entre-associes" },
  { label: "Responsabilité des dirigeants", href: "/responsabilite-des-dirigeants" },
  { label: "Contentieux post-acquisition", href: "/contentieux-post-acquisition" },
  { label: "Rupture brutale & concurrence", href: "/rupture-brutale-concurrence-deloyale" },
  { label: "Procédures d'urgence", href: "/procedures-d-urgence" },
  { label: "Contentieux international", href: "/contentieux-international" },
];

const INFO_LINKS = [
  { label: "Le Cabinet", href: "/le-cabinet" },
  { label: "Publications", href: "/publications" },
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ivory/10 bg-navy pb-24 text-ivory md:pb-0">
      <div className="mx-auto w-full max-w-[92rem] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-12 lg:col-span-4">
            <p className="font-display text-2xl uppercase leading-none tracking-[0.14em] text-ivory">
              {SITE.wordmark}
            </p>
            <p className="eyebrow mt-3 text-goldsoft">
              {SITE.wordmarkSuffix} — {SITE.tagline}
            </p>
            <address className="mt-6 max-w-[34ch] text-sm not-italic leading-relaxed text-ivory/70">
              {SITE.legalName}
              <br />
              {SITE.address.street}
              <br />
              {SITE.address.postalCode} {SITE.address.locality}
            </address>
            <p className="mt-5 text-sm text-ivory/70">
              <a href={SITE.phoneHref} className="link-underline">
                {SITE.phone}
              </a>
              <br />
              <a href={`mailto:${SITE.email}`} className="link-underline break-all">
                {SITE.email}
              </a>
            </p>
          </div>

          <nav aria-label="Domaines d'intervention" className="col-span-6 sm:col-span-4 lg:col-span-3">
            <p className="eyebrow text-goldsoft">Domaines d&apos;intervention</p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="link-underline text-sm text-ivory/75 transition-colors hover:text-ivory"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Informations" className="col-span-6 sm:col-span-4 lg:col-span-2">
            <p className="eyebrow text-goldsoft">Informations</p>
            <ul className="mt-5 space-y-3">
              {INFO_LINKS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="link-underline text-sm text-ivory/75 transition-colors hover:text-ivory"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-12 sm:col-span-4 lg:col-span-3">
            <p className="eyebrow text-goldsoft">Premier échange</p>
            <p className="mt-5 text-sm leading-relaxed text-ivory/70">
              Sur rendez-vous au cabinet ({SITE.address.locality} 16ᵉ).
            </p>
            <a
              href="/contact"
              className="eyebrow mt-5 inline-flex items-center gap-3 border border-ivory/40 px-4 py-3 text-ivory transition-colors hover:border-ivory hover:bg-ivory hover:text-navy"
            >
              {CTA.primary}
            </a>
            <p className="mt-6 max-w-[30ch] text-xs leading-relaxed text-ivory/60">
              Les modalités d&apos;honoraires sont présentées avant toute intervention.
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-ivory/15 pt-7">
          <p className="max-w-[80ch] text-xs leading-relaxed text-ivory/55">
            Les informations diffusées sur ce site ont un caractère strictement général et
            informatif&nbsp;: elles ne constituent ni une consultation juridique ni un conseil
            personnalisé, et leur lecture ne crée aucune relation avocat-client. Une relation
            avocat-client ne peut être établie qu&apos;après acceptation expresse du dossier par le
            cabinet.
          </p>
          <div className="mt-6 flex flex-col gap-3 text-xs text-ivory/55 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {SITE.legalName} — {SITE.barreau} · {SITE.registration}
            </p>
            <p className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <a href="/mentions-legales" className="link-underline hover:text-ivory">
                Mentions légales
              </a>
              <a href="/politique-de-confidentialite" className="link-underline hover:text-ivory">
                Politique de confidentialité
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
