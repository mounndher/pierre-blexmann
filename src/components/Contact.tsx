"use client";

import Link from "next/link";
import { AlertCircle, Check, ChevronDown, Copy, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { CONTACT, CTA, SITE } from "@/content/site";
import { Reveal, Section } from "@/components/ui";

type Fields = {
  nom: string;
  email: string;
  telephone: string;
  societe: string;
  sujet: string;
  message: string;
  consent: boolean;
};

type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = {
  nom: "",
  email: "",
  telephone: "",
  societe: "",
  sujet: "",
  message: "",
  consent: false,
};

/** Capped so the encoded `mailto:` URI remains reliable across desktop and mobile mail clients. */
const MAX_MESSAGE = 1800;

function isValidPhone(raw: string): boolean {
  const digits = raw.match(/\d/g)?.length ?? 0;
  return /^[+()\d\s.-]{6,25}$/.test(raw) && digits >= 6 && digits <= 15;
}

function validate(values: Fields): Errors {
  const errors: Errors = {};
  const nom = values.nom.trim();
  const email = values.email.trim();
  const tel = values.telephone.trim();
  const societe = values.societe.trim();
  const message = values.message.trim();

  if (nom.length < 2 || nom.length > 120) {
    errors.nom = "Veuillez indiquer votre nom et votre prénom.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 180) {
    errors.email = "Veuillez indiquer une adresse électronique valide.";
  }
  if (tel && !isValidPhone(tel)) {
    errors.telephone = "Veuillez indiquer un numéro de téléphone valide (au moins 6 chiffres).";
  }
  if (societe.length > 160) {
    errors.societe = "La dénomination saisie est trop longue (160 caractères maximum).";
  }
  if (!values.sujet || !CONTACT.subjects.includes(values.sujet as never)) {
    errors.sujet = "Veuillez sélectionner la nature du dossier.";
  }
  if (message.length < 20) {
    errors.message = "Veuillez décrire brièvement la situation (20 caractères minimum).";
  } else if (message.length > MAX_MESSAGE) {
    errors.message = `Votre message dépasse la limite de ${MAX_MESSAGE} caractères pour un envoi par messagerie.`;
  }
  if (!values.consent) {
    errors.consent =
      "Votre accord au traitement de ces informations est requis pour préparer votre demande.";
  }
  return errors;
}

const fieldClass = (invalid: boolean) =>
  `w-full border-0 border-b bg-transparent px-0 py-3 text-[1rem] text-ink outline-none transition-colors placeholder:text-mute/80 focus:border-gold ${
    invalid ? "border-red-700/70" : "border-ink/25 hover:border-ink/50"
  }`;

/** Builds the formatted plain-text email body (CRLF line breaks per RFC 6068). */
function buildMessageBody(values: Fields): string {
  return [
    `Nom et prénom : ${values.nom.trim()}`,
    `Adresse électronique : ${values.email.trim()}`,
    `Téléphone : ${values.telephone.trim() || "Non renseigné"}`,
    `Société : ${values.societe.trim() || "Non renseignée"}`,
    `Nature du dossier : ${values.sujet}`,
    "",
    "Situation :",
    values.message.trim(),
    "",
    "—",
    `Demande préparée depuis ${SITE.domain}. Cet envoi ne crée pas, en soi, de relation avocat-client.`,
  ].join("\r\n");
}

/** Pure static `mailto:` link — no backend, no database, no third-party service. */
function buildMailto(values: Fields): string {
  const subject = `[${SITE.domain}] ${values.sujet} — ${values.nom.trim()}`;
  const body = buildMessageBody(values);
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function Contact({ mode = "section" }: { mode?: "section" | "page" }) {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "mailto" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const [mailtoHref, setMailtoHref] = useState("");
  const [preparedBody, setPreparedBody] = useState("");
  const [copied, setCopied] = useState(false);

  // Pre-selection from `/contact?objet=...` or in-page `blexmann:select-subject` events.
  useEffect(() => {
    const applySubject = (candidate: string | null | undefined) => {
      if (candidate && CONTACT.subjects.includes(candidate as never)) {
        setValues((prev) => ({ ...prev, sujet: candidate }));
        setErrors((prev) => ({ ...prev, sujet: undefined }));
      }
    };

    applySubject(new URLSearchParams(window.location.search).get("objet"));

    const onSelect = (event: Event) => {
      applySubject((event as CustomEvent<string>).detail);
    };
    window.addEventListener("blexmann:select-subject", onSelect);
    return () => window.removeEventListener("blexmann:select-subject", onSelect);
  }, []);

  const set = <K extends keyof Fields>(key: K, value: Fields[K]) => {
    const next = { ...values, [key]: value };
    setValues(next);
    if (touched[key]) {
      const found = validate(next);
      setErrors((prev) => ({ ...prev, [key]: found[key] }));
    }
    if (status !== "idle") {
      setStatus("idle");
      setFeedback("");
      setCopied(false);
    }
  };

  const blur = (key: keyof Fields) => {
    setTouched((t) => ({ ...t, [key]: true }));
    const found = validate(values);
    setErrors((prev) => ({ ...prev, [key]: found[key] }));
  };

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched({
      nom: true,
      email: true,
      telephone: true,
      societe: true,
      sujet: true,
      message: true,
      consent: true,
    });

    const invalidKeys = Object.keys(found);
    if (invalidKeys.length > 0) {
      setStatus("error");
      setFeedback(
        invalidKeys.length === 1
          ? "Un champ obligatoire doit être complété ou corrigé avant de préparer votre demande."
          : `${invalidKeys.length} champs doivent être complétés ou corrigés avant de préparer votre demande.`,
      );
      document.getElementById(`f-${invalidKeys[0]}`)?.focus();
      return;
    }

    // Honeypot: silently ignore automated bot submissions.
    const honeypot = (document.getElementById("f-siteWeb") as HTMLInputElement | null)?.value;
    if (honeypot && honeypot.trim() !== "") {
      return;
    }

    const link = buildMailto(values);
    setMailtoHref(link);
    setPreparedBody(buildMessageBody(values));
    setCopied(false);
    setStatus("mailto");
    setFeedback(
      "Votre demande est préparée dans votre messagerie électronique : vérifiez le courriel pré-rempli puis validez son envoi pour l’adresser au cabinet.",
    );
    window.location.href = link;
  }

  async function copyPreparedMessage() {
    if (!preparedBody) return;
    try {
      await navigator.clipboard.writeText(preparedBody);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  const err = (key: keyof Fields) => (touched[key] ? errors[key] : undefined);
  const isPage = mode === "page";
  const headingId = "contact-title";

  return (
    <Section
      id="contact"
      labelledBy={headingId}
      index={isPage ? "01" : CONTACT.index}
      label={CONTACT.eyebrow}
    >
      <div className="grid grid-cols-12 gap-x-6 gap-y-14">
        {/* Left — heading + verified coordinates */}
        <div className="col-span-12 lg:col-span-4">
          <Reveal>
            {isPage ? (
              <h1 id={headingId} className="display-lg font-display text-navy">
                {CONTACT.pageH1}
              </h1>
            ) : (
              <h2 id={headingId} className="display-lg font-display text-navy">
                {CONTACT.title}
              </h2>
            )}
            <p className="mt-7 text-[1.0625rem] leading-[1.75] text-ink/80">{CONTACT.body}</p>
            <p className="mt-4 text-sm text-mute">{CTA.heroNote}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="rule-double mt-10 space-y-6 pt-7">
              <div>
                <dt className="eyebrow text-mute">Cabinet à Paris 16ᵉ</dt>
                <dd className="mt-2 font-display text-lg leading-snug text-navy">
                  {SITE.address.street}
                  <br />
                  {SITE.address.postalCode} {SITE.address.locality}
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-mute">Téléphone</dt>
                <dd className="mt-2">
                  <a
                    href={SITE.phoneHref}
                    className="link-underline font-display text-lg text-navy hover:text-bronze"
                  >
                    {SITE.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-mute">Adresse électronique</dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${SITE.email}`}
                    className="link-underline break-all font-display text-lg text-navy hover:text-bronze"
                  >
                    {SITE.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-mute">Rattachement</dt>
                {/* [À CONFIRMER] TODO: numéro de toque (E0140) à valider avec l'avocat. */}
                <dd className="mt-2 font-display text-lg text-navy">
                  {SITE.barreau} · Toque {SITE.toque}
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-10 border-l-2 border-gold pl-5">
              {/* [À CONFIRMER] TODO: modalités d'honoraires à valider par l'avocat. */}
              <p className="eyebrow text-bronze">Honoraires</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/80">
                Les modalités d&apos;honoraires sont présentées avant toute intervention.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right — pure static mailto form */}
        <div className="col-span-12 lg:col-span-7 lg:col-start-6">
          <Reveal delay={0.08}>
            <form
              onSubmit={onSubmit}
              noValidate
              aria-describedby="form-note"
              className="bg-paper/60 p-6 sm:p-9"
            >
              {isPage ? (
                <h2 className="eyebrow text-bronze">{CTA.primary}</h2>
              ) : (
                <p className="eyebrow text-bronze">{CTA.primary}</p>
              )}
              <p className="mt-3 text-sm leading-relaxed text-mute">
                Les champs suivis d&apos;un astérisque (*) sont obligatoires. Aucun document
                sensible n&apos;est requis lors de ce premier contact.
              </p>

              <div aria-live="polite" className="mt-5">
                {status === "mailto" && (
                  <div
                    role="status"
                    className="flex items-start gap-3 border border-navy/20 bg-ivory px-4 py-4 text-sm leading-relaxed text-navy"
                  >
                    <Mail
                      size={17}
                      strokeWidth={1.5}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-bronze"
                    />
                    <div className="space-y-2.5">
                      <p>{feedback}</p>
                      <p className="text-xs text-mute">
                        Si aucune fenêtre ne s&apos;est ouverte,{" "}
                        <a href={mailtoHref} className="link-underline text-navy">
                          cliquez ici pour ouvrir votre messagerie
                        </a>
                        , écrivez directement à{" "}
                        <a href={`mailto:${SITE.email}`} className="link-underline text-navy">
                          {SITE.email}
                        </a>{" "}
                        ou, en cas d&apos;échéance imminente, appelez le{" "}
                        <a href={SITE.phoneHref} className="link-underline text-navy">
                          {SITE.phone}
                        </a>
                        .
                      </p>
                      <button
                        type="button"
                        onClick={copyPreparedMessage}
                        className="eyebrow inline-flex cursor-pointer items-center gap-2 border border-ink/25 px-3 py-1.5 text-[0.625rem] text-navy transition-colors hover:border-navy hover:bg-navy hover:text-ivory"
                      >
                        {copied ? (
                          <>
                            <Check size={12} strokeWidth={1.75} aria-hidden="true" />
                            Texte copié
                          </>
                        ) : (
                          <>
                            <Copy size={12} strokeWidth={1.75} aria-hidden="true" />
                            Copier le texte préparé
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {status === "error" && feedback && (
                  <p
                    role="alert"
                    className="flex items-start gap-3 border border-red-800/30 bg-red-50 px-4 py-4 text-sm leading-relaxed text-red-900"
                  >
                    <AlertCircle
                      size={17}
                      strokeWidth={1.5}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0"
                    />
                    <span>{feedback}</span>
                  </p>
                )}
              </div>

              <div className="mt-7 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="f-nom" className="eyebrow block text-mute">
                    Nom et prénom *
                  </label>
                  <input
                    id="f-nom"
                    name="nom"
                    type="text"
                    autoComplete="name"
                    maxLength={120}
                    required
                    aria-required="true"
                    aria-invalid={!!err("nom")}
                    aria-describedby={err("nom") ? "e-nom" : undefined}
                    value={values.nom}
                    onChange={(e) => set("nom", e.target.value)}
                    onBlur={() => blur("nom")}
                    placeholder="Jean Dupont"
                    className={fieldClass(!!err("nom"))}
                  />
                  {err("nom") && (
                    <p id="e-nom" className="mt-2 text-xs text-red-800">
                      {err("nom")}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="f-email" className="eyebrow block text-mute">
                    Adresse électronique *
                  </label>
                  <input
                    id="f-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={180}
                    required
                    aria-required="true"
                    aria-invalid={!!err("email")}
                    aria-describedby={err("email") ? "e-email" : undefined}
                    value={values.email}
                    onChange={(e) => set("email", e.target.value)}
                    onBlur={() => blur("email")}
                    placeholder="vous@entreprise.fr"
                    className={fieldClass(!!err("email"))}
                  />
                  {err("email") && (
                    <p id="e-email" className="mt-2 text-xs text-red-800">
                      {err("email")}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="f-telephone" className="eyebrow block text-mute">
                    Téléphone (facultatif, pour être rappelé)
                  </label>
                  <input
                    id="f-telephone"
                    name="telephone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    maxLength={25}
                    aria-invalid={!!err("telephone")}
                    aria-describedby={err("telephone") ? "e-telephone" : undefined}
                    value={values.telephone}
                    onChange={(e) => set("telephone", e.target.value)}
                    onBlur={() => blur("telephone")}
                    placeholder="06 00 00 00 00"
                    className={fieldClass(!!err("telephone"))}
                  />
                  {err("telephone") && (
                    <p id="e-telephone" className="mt-2 text-xs text-red-800">
                      {err("telephone")}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="f-societe" className="eyebrow block text-mute">
                    Société (facultatif)
                  </label>
                  <input
                    id="f-societe"
                    name="societe"
                    type="text"
                    autoComplete="organization"
                    maxLength={160}
                    aria-invalid={!!err("societe")}
                    aria-describedby={err("societe") ? "e-societe" : undefined}
                    value={values.societe}
                    onChange={(e) => set("societe", e.target.value)}
                    onBlur={() => blur("societe")}
                    placeholder="Raison sociale"
                    className={fieldClass(!!err("societe"))}
                  />
                  {err("societe") && (
                    <p id="e-societe" className="mt-2 text-xs text-red-800">
                      {err("societe")}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="f-sujet" className="eyebrow block text-mute">
                    Nature du dossier *
                  </label>
                  <div className="relative">
                    <select
                      id="f-sujet"
                      name="sujet"
                      required
                      aria-required="true"
                      aria-invalid={!!err("sujet")}
                      aria-describedby={err("sujet") ? "e-sujet" : undefined}
                      value={values.sujet}
                      onChange={(e) => set("sujet", e.target.value)}
                      onBlur={() => blur("sujet")}
                      className={`${fieldClass(!!err("sujet"))} cursor-pointer appearance-none rounded-none pr-8`}
                    >
                      <option value="">Sélectionnez la nature du dossier…</option>
                      {CONTACT.subjects.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={16}
                      strokeWidth={1.5}
                      aria-hidden="true"
                      className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-mute"
                    />
                  </div>
                  {err("sujet") && (
                    <p id="e-sujet" className="mt-2 text-xs text-red-800">
                      {err("sujet")}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="f-message" className="eyebrow block text-mute">
                    Décrivez brièvement la situation *
                  </label>
                  <textarea
                    id="f-message"
                    name="message"
                    rows={5}
                    maxLength={MAX_MESSAGE}
                    required
                    aria-required="true"
                    aria-invalid={!!err("message")}
                    aria-describedby={err("message") ? "e-message h-message" : "h-message"}
                    value={values.message}
                    onChange={(e) => set("message", e.target.value)}
                    onBlur={() => blur("message")}
                    placeholder="Qui sont les parties ? Que s'est-il passé ? Une échéance est-elle en cours (mise en demeure, assignation, audience) ?"
                    className={`${fieldClass(!!err("message"))} resize-y`}
                  />
                  <p id="h-message" className="mt-2 text-xs text-mute">
                    {values.message.trim().length} caractères — 20 minimum.
                  </p>
                  {err("message") && (
                    <p id="e-message" className="mt-2 text-xs text-red-800">
                      {err("message")}
                    </p>
                  )}
                </div>

                {/* Honeypot — hidden from human visitors and assistive technologies */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="f-siteWeb">Ne pas remplir ce champ</label>
                  <input
                    id="f-siteWeb"
                    name="siteWeb"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="sm:col-span-2">
                  <div className="flex items-start gap-3">
                    <input
                      id="f-consent"
                      name="consent"
                      type="checkbox"
                      required
                      aria-required="true"
                      aria-invalid={!!err("consent")}
                      aria-describedby={err("consent") ? "e-consent" : undefined}
                      checked={values.consent}
                      onChange={(e) => set("consent", e.target.checked)}
                      onBlur={() => blur("consent")}
                      className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-[#101D2B]"
                    />
                    <label
                      htmlFor="f-consent"
                      className="cursor-pointer text-sm leading-relaxed text-ink/85"
                    >
                      J&apos;accepte que les informations renseignées soient utilisées par le
                      cabinet pour examiner ma demande, conformément à la{" "}
                      <Link
                        href="/politique-de-confidentialite"
                        className="link-underline text-navy underline-offset-2"
                      >
                        politique de confidentialité
                      </Link>
                      . *
                    </label>
                  </div>
                  {err("consent") && (
                    <p id="e-consent" className="mt-2 text-xs text-red-800">
                      {err("consent")}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-5 border-t border-rule pt-7">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end">
                  <button
                    type="submit"
                    className="eyebrow group inline-flex shrink-0 cursor-pointer items-center justify-center gap-3 bg-navy px-7 py-4 text-ivory transition-colors duration-300 hover:bg-navytint"
                  >
                    <span>Préparer ma demande</span>
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </button>
                </div>
                <p id="form-note" className="text-xs leading-relaxed text-mute">
                  {CONTACT.formNote}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
