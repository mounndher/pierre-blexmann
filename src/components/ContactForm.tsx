"use client";

import { AlertCircle, CheckCircle2, ChevronDown, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { CONTACT, SITE } from "@/content/site";

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

const SUCCESS_MESSAGE =
  "Votre message a bien été préparé dans votre logiciel de messagerie. Le cabinet en prend connaissance et vous répondra à l'adresse indiquée. En cas d'échéance imminente, vous pouvez aussi appeler le +33 (0)1 89 86 48 60.";
const ERROR_MESSAGE =
  "Votre message n'a pas pu être préparé. Vous pouvez réessayer ou écrire directement à pblexmann@blexmann-avocats.com.";

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (values.nom.trim().length < 2) errors.nom = "Veuillez indiquer votre nom et votre prénom.";
  if (values.nom.trim().length > 100) errors.nom = "Ce champ est trop long (100 caractères maximum).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "Veuillez indiquer une adresse électronique valide.";
  if (values.telephone.trim() && !/^[+()\d\s.-]{6,30}$/.test(values.telephone.trim()))
    errors.telephone = "Veuillez indiquer un numéro de téléphone valide.";
  if (values.societe.trim().length > 150)
    errors.societe = "Ce champ est trop long (150 caractères maximum).";
  if (!values.sujet) errors.sujet = "Veuillez sélectionner la nature de votre dossier.";
  if (values.message.trim().length < 20)
    errors.message = "Veuillez décrire brièvement votre situation (20 caractères minimum).";
  if (values.message.trim().length > 5000)
    errors.message = "Votre message est trop long (5 000 caractères maximum).";
  if (!values.consent)
    errors.consent =
      "Votre accord au traitement de ces informations est requis pour transmettre la demande.";
  return errors;
}

const fieldClass = (invalid: boolean) =>
  `w-full border-0 border-b bg-transparent px-0 py-3 text-[1rem] text-ink outline-none transition-colors placeholder:text-mute/85 focus:border-gold ${
    invalid ? "border-red-700/70" : "border-ink/25 hover:border-ink/50"
  }`;

/**
 * Site 100 % statique : aucun serveur, aucune base de données.
 * Le formulaire compose un courriel dans la messagerie du visiteur.
 */
function buildMailtoUrl(values: Fields): string {
  const subject = `Demande de contact — ${values.sujet}`;
  const lines = [
    `Nom et prénom : ${values.nom}`,
    `Adresse électronique : ${values.email}`,
    values.telephone.trim() ? `Téléphone : ${values.telephone}` : "",
    values.societe.trim() ? `Société : ${values.societe}` : "",
    `Nature du dossier : ${values.sujet}`,
    "",
    "Situation :",
    values.message,
    "",
    `— Message préparé depuis le site ${SITE.domain}`,
  ].filter(Boolean);

  return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    lines.join("\n"),
  )}`;
}

export default function ContactForm({ formId = "f" }: { formId?: string }) {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [composedHref, setComposedHref] = useState<string>("");

  useEffect(() => {
    const applySubject = (subject: unknown) => {
      if (
        typeof subject === "string" &&
        CONTACT.subjects.includes(subject as (typeof CONTACT.subjects)[number])
      ) {
        setValues((prev) => ({ ...prev, sujet: subject }));
        setErrors((prev) => ({ ...prev, sujet: undefined }));
      }
    };
    // Preselect from inner-page links: /contact?sujet=…
    try {
      const param = new URLSearchParams(window.location.search).get("sujet");
      if (param) applySubject(param);
    } catch {
      /* ignore malformed query strings */
    }
    const onSelectSubject = (event: Event) => {
      applySubject((event as CustomEvent<string>).detail);
    };
    window.addEventListener("blexmann:select-subject", onSelectSubject);
    return () => window.removeEventListener("blexmann:select-subject", onSelectSubject);
  }, []);

  const set = <K extends keyof Fields>(key: K, value: Fields[K]) => {
    const next = { ...values, [key]: value };
    setValues(next);
    if (touched[key]) {
      const err = validate(next);
      setErrors((prev) => ({ ...prev, [key]: err[key] }));
    }
  };

  const blur = (key: keyof Fields) => {
    setTouched((t) => ({ ...t, [key]: true }));
    const err = validate(values);
    setErrors((prev) => ({ ...prev, [key]: err[key] }));
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

    if (Object.keys(found).length > 0) {
      setStatus("idle");
      const first = document.getElementById(`${formId}-${Object.keys(found)[0]}`);
      first?.focus();
      return;
    }

    const href = buildMailtoUrl(values);
    setComposedHref(href);
    setStatus("success");
    // Opens the visitor's mail client — nothing is transmitted to this site.
    window.location.href = href;
  }

  const err = (key: keyof Fields) => (touched[key] ? errors[key] : undefined);
  const describedBy = (key: keyof Fields, fallback?: string) =>
    err(key) ? `${formId}-e-${key}` : fallback;

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-describedby={`${formId}-form-note`}
      className="bg-paper/60 p-6 sm:p-9"
    >
      <p className="eyebrow text-bronze">Votre demande</p>
      <p className="mt-3 text-sm leading-relaxed text-mute">
        Décrivez l&apos;essentiel en quelques lignes&nbsp;; il n&apos;est pas nécessaire de
        transmettre de documents sensibles à ce stade.
      </p>

      <div aria-live="polite" className="mt-5">
        {status === "success" && (
          <div
            role="status"
            className="flex items-start gap-3 border border-navy/20 bg-ivory px-4 py-4 text-sm leading-relaxed text-navy"
          >
            <CheckCircle2 size={17} strokeWidth={1.5} aria-hidden="true" className="mt-0.5 shrink-0" />
            <div>
              <p>{SUCCESS_MESSAGE}</p>
              <p className="mt-2 text-mute">
                Rien ne s&apos;est ouvert&nbsp;?{" "}
                <a href={composedHref} className="link-underline text-navy">
                  Ouvrir le message dans ma messagerie
                </a>{" "}
                ou écrivez à{" "}
                <a href={`mailto:${SITE.email}`} className="link-underline text-navy">
                  {SITE.email}
                </a>
                .
              </p>
            </div>
          </div>
        )}
        {status === "error" && (
          <p
            role="alert"
            className="flex items-start gap-3 border border-red-800/30 bg-red-50 px-4 py-4 text-sm leading-relaxed text-red-900"
          >
            <AlertCircle size={17} strokeWidth={1.5} aria-hidden="true" className="mt-0.5 shrink-0" />
            <span>{ERROR_MESSAGE}</span>
          </p>
        )}
      </div>

      <div className="mt-7 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label htmlFor={`${formId}-nom`} className="eyebrow block text-mute">
            Nom et prénom *
          </label>
          <input
            id={`${formId}-nom`}
            name="nom"
            type="text"
            autoComplete="name"
            required
            aria-required="true"
            maxLength={100}
            aria-invalid={!!err("nom")}
            aria-describedby={describedBy("nom")}
            value={values.nom}
            onChange={(e) => set("nom", e.target.value)}
            onBlur={() => blur("nom")}
            placeholder="Jean Dupont"
            className={fieldClass(!!err("nom"))}
          />
          {err("nom") && (
            <p id={`${formId}-e-nom`} className="mt-2 text-xs text-red-800">
              {err("nom")}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={`${formId}-email`} className="eyebrow block text-mute">
            Adresse électronique *
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-required="true"
            maxLength={254}
            aria-invalid={!!err("email")}
            aria-describedby={describedBy("email")}
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            onBlur={() => blur("email")}
            placeholder="vous@entreprise.fr"
            className={fieldClass(!!err("email"))}
          />
          {err("email") && (
            <p id={`${formId}-e-email`} className="mt-2 text-xs text-red-800">
              {err("email")}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={`${formId}-telephone`} className="eyebrow block text-mute">
            Téléphone (facultatif, pour être rappelé)
          </label>
          <input
            id={`${formId}-telephone`}
            name="telephone"
            type="tel"
            autoComplete="tel"
            maxLength={30}
            aria-invalid={!!err("telephone")}
            aria-describedby={describedBy("telephone")}
            value={values.telephone}
            onChange={(e) => set("telephone", e.target.value)}
            onBlur={() => blur("telephone")}
            placeholder="06 00 00 00 00"
            className={fieldClass(!!err("telephone"))}
          />
          {err("telephone") && (
            <p id={`${formId}-e-telephone`} className="mt-2 text-xs text-red-800">
              {err("telephone")}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={`${formId}-societe`} className="eyebrow block text-mute">
            Société (facultatif)
          </label>
          <input
            id={`${formId}-societe`}
            name="societe"
            type="text"
            autoComplete="organization"
            maxLength={150}
            aria-invalid={!!err("societe")}
            aria-describedby={describedBy("societe")}
            value={values.societe}
            onChange={(e) => set("societe", e.target.value)}
            onBlur={() => blur("societe")}
            placeholder="Raison sociale ou fonction"
            className={fieldClass(!!err("societe"))}
          />
          {err("societe") && (
            <p id={`${formId}-e-societe`} className="mt-2 text-xs text-red-800">
              {err("societe")}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={`${formId}-sujet`} className="eyebrow block text-mute">
            Nature du dossier *
          </label>
          <div className="relative">
            <select
              id={`${formId}-sujet`}
              name="sujet"
              required
              aria-required="true"
              aria-invalid={!!err("sujet")}
              aria-describedby={describedBy("sujet")}
              value={values.sujet}
              onChange={(e) => set("sujet", e.target.value)}
              onBlur={() => blur("sujet")}
              className={`${fieldClass(!!err("sujet"))} appearance-none rounded-none pr-8`}
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
            <p id={`${formId}-e-sujet`} className="mt-2 text-xs text-red-800">
              {err("sujet")}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={`${formId}-message`} className="eyebrow block text-mute">
            Décrivez brièvement la situation *
          </label>
          <textarea
            id={`${formId}-message`}
            name="message"
            rows={5}
            required
            aria-required="true"
            maxLength={5000}
            aria-invalid={!!err("message")}
            aria-describedby={describedBy("message", `${formId}-h-message`)}
            value={values.message}
            onChange={(e) => set("message", e.target.value)}
            onBlur={() => blur("message")}
            placeholder="Qui sont les parties ? Que s'est-il passé ? Une échéance est-elle en cours (mise en demeure, assignation, audience) ?"
            className={`${fieldClass(!!err("message"))} resize-y`}
          />
          <p id={`${formId}-h-message`} className="mt-2 text-xs text-mute">
            {values.message.trim().length} caractères — 20 minimum.
          </p>
          {err("message") && (
            <p id={`${formId}-e-message`} className="mt-2 text-xs text-red-800">
              {err("message")}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <div className="flex items-start gap-3">
            <input
              id={`${formId}-consent`}
              name="consent"
              type="checkbox"
              required
              aria-required="true"
              aria-invalid={!!err("consent")}
              aria-describedby={describedBy("consent")}
              checked={values.consent}
              onChange={(e) => set("consent", e.target.checked)}
              onBlur={() => blur("consent")}
              className="mt-1 h-4 w-4 shrink-0 accent-[#101D2B]"
            />
            <label htmlFor={`${formId}-consent`} className="text-sm leading-relaxed text-ink/80">
              J&apos;accepte que les informations transmises soient traitées par le cabinet pour
              examiner ma demande, conformément à la{" "}
              <a
                href="/politique-de-confidentialite"
                className="link-underline text-navy underline-offset-2"
              >
                politique de confidentialité
              </a>
              .
            </label>
          </div>
          {err("consent") && (
            <p id={`${formId}-e-consent`} className="mt-2 text-xs text-red-800">
              {err("consent")}
            </p>
          )}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-5 border-t border-rule pt-7 sm:flex-row sm:items-center sm:justify-between">
        <p id={`${formId}-form-note`} className="max-w-[44ch] text-xs leading-relaxed text-mute">
          {CONTACT.formNote}
        </p>
        <button
          type="submit"
          className="eyebrow group inline-flex shrink-0 items-center justify-center gap-3 bg-navy px-7 py-4 text-ivory transition-colors duration-300 hover:bg-navytint"
        >
          <Mail size={15} strokeWidth={1.75} aria-hidden="true" />
          Envoyer ma demande par courriel
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </button>
      </div>
    </form>
  );
}
