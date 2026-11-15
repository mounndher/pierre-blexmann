"use client";

import { AlertCircle, CheckCircle2, ChevronDown, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { CONTACT, SITE } from "@/content/site";
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

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (values.nom.trim().length < 2) errors.nom = "Veuillez indiquer votre nom et votre prénom.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "Veuillez indiquer une adresse électronique valide.";
  if (values.telephone.trim() && !/^[+()\d\s.-]{6,20}$/.test(values.telephone.trim()))
    errors.telephone = "Veuillez indiquer un numéro de téléphone valide.";
  if (!values.sujet) errors.sujet = "Veuillez sélectionner l'objet de votre demande.";
  if (values.message.trim().length < 20)
    errors.message = "Veuillez décrire brièvement votre situation (20 caractères minimum).";
  if (!values.consent)
    errors.consent =
      "Votre accord au traitement de ces informations est requis pour transmettre la demande.";
  return errors;
}

const fieldClass = (invalid: boolean) =>
  `w-full border-0 border-b bg-transparent px-0 py-3 text-[1rem] text-ink outline-none transition-colors placeholder:text-mute/85 focus:border-gold ${
    invalid ? "border-red-700/70" : "border-ink/25 hover:border-ink/50"
  }`;

export default function Contact() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState<string>("");

  useEffect(() => {
    const onSelectSubject = (event: Event) => {
      const subject = (event as CustomEvent<string>).detail;
      if (
        typeof subject === "string" &&
        CONTACT.subjects.includes(subject as (typeof CONTACT.subjects)[number])
      ) {
        setValues((prev) => ({ ...prev, sujet: subject }));
        setErrors((prev) => ({ ...prev, sujet: undefined }));
      }
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

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
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
      const first = document.getElementById(`f-${Object.keys(found)[0]}`);
      first?.focus();
      return;
    }

    setStatus("sending");
    setServerMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json()) as { ok?: boolean; message?: string; errors?: Errors };

      if (!res.ok) {
        if (data.errors) setErrors(data.errors);
        setStatus("error");
        setServerMessage(
          data.message ??
            `Votre message n'a pas pu être transmis. Vous pouvez réessayer ou joindre le cabinet au ${SITE.phone}.`,
        );
        return;
      }

      setStatus("success");
      setServerMessage(
        data.message ??
          "Après réception de votre demande, le cabinet en prend connaissance et vous indique les suites envisageables.",
      );
      setValues(EMPTY);
      setTouched({});
    } catch {
      setStatus("error");
      setServerMessage(
        `Connexion impossible. Veuillez réessayer ultérieurement ou écrire directement à ${SITE.email}.`,
      );
    }
  }

  const err = (key: keyof Fields) => (touched[key] ? errors[key] : undefined);

  return (
    <Section id="contact" index="06" label="Contact">
      <div className="grid grid-cols-12 gap-x-6 gap-y-14">
        {/* Left — verified coordinates */}
        <div className="col-span-12 lg:col-span-4">
          <Reveal>
            <h2 id="contact-title" className="display-lg font-display text-navy">
              {CONTACT.title}
            </h2>
            <p className="mt-7 text-[1.0625rem] leading-[1.75] text-ink/80">{CONTACT.body}</p>
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
                <dd className="mt-2 font-display text-lg text-navy">
                  {SITE.barreau} · Toque {SITE.toque}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        {/* Right — the form */}
        <div className="col-span-12 lg:col-span-7 lg:col-start-6">
          <Reveal delay={0.08}>
            <form
              onSubmit={onSubmit}
              noValidate
              aria-describedby="form-note"
              className="bg-paper/60 p-6 sm:p-9"
            >
              <p className="eyebrow text-bronze">Présenter votre situation</p>
              <p className="mt-3 text-sm leading-relaxed text-mute">
                Décrivez l&apos;essentiel en quelques lignes&nbsp;; il n&apos;est pas nécessaire de
                transmettre de documents sensibles à ce stade.
              </p>

              <div aria-live="polite" className="mt-5">
                {status === "success" && (
                  <p
                    role="status"
                    className="flex items-start gap-3 border border-navy/20 bg-ivory px-4 py-4 text-sm leading-relaxed text-navy"
                  >
                    <CheckCircle2
                      size={17}
                      strokeWidth={1.5}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0"
                    />
                    <span>
                      {serverMessage}
                      <br />
                      <span className="text-mute">
                        Cet envoi ne crée pas automatiquement de relation avocat-client.
                      </span>
                    </span>
                  </p>
                )}
                {status === "error" && (
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
                    <span>{serverMessage}</span>
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
                    Téléphone
                  </label>
                  <input
                    id="f-telephone"
                    name="telephone"
                    type="tel"
                    autoComplete="tel"
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
                    Société
                  </label>
                  <input
                    id="f-societe"
                    name="societe"
                    type="text"
                    autoComplete="organization"
                    value={values.societe}
                    onChange={(e) => set("societe", e.target.value)}
                    placeholder="Raison sociale ou fonction"
                    className={fieldClass(false)}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="f-sujet" className="eyebrow block text-mute">
                    Objet de la demande *
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
                      className={`${fieldClass(!!err("sujet"))} appearance-none rounded-none pr-8`}
                    >
                      <option value="">Sélectionnez un objet…</option>
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
                    Votre situation *
                  </label>
                  <textarea
                    id="f-message"
                    name="message"
                    rows={5}
                    required
                    aria-required="true"
                    aria-invalid={!!err("message")}
                    aria-describedby={err("message") ? "e-message" : "h-message"}
                    value={values.message}
                    onChange={(e) => set("message", e.target.value)}
                    onBlur={() => blur("message")}
                    placeholder="Contexte du différend, parties concernées, éventuelles échéances procédurales (assignation, référé, mise en demeure)…"
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
                      className="mt-1 h-4 w-4 shrink-0 accent-[#101D2B]"
                    />
                    <label htmlFor="f-consent" className="text-sm leading-relaxed text-ink/80">
                      J&apos;accepte que les informations transmises soient traitées par le cabinet
                      pour examiner ma demande, conformément à la{" "}
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
                    <p id="e-consent" className="mt-2 text-xs text-red-800">
                      {err("consent")}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-5 border-t border-rule pt-7 sm:flex-row sm:items-center sm:justify-between">
                <p id="form-note" className="max-w-[44ch] text-xs leading-relaxed text-mute">
                  {CONTACT.formNote}
                </p>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="eyebrow group inline-flex shrink-0 items-center justify-center gap-3 bg-navy px-7 py-4 text-ivory transition-colors duration-300 hover:bg-navytint disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2
                        size={15}
                        strokeWidth={1.75}
                        aria-hidden="true"
                        className="animate-spin"
                      />
                      Envoi en cours
                    </>
                  ) : (
                    <>
                      Envoyer ma demande
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
