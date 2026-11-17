import { CONTACT_SUBJECTS, SITE, type ContactSubject } from "../content/site";

/** Pure browser helpers — no network request, server, database, cookie or persistent storage. */
export type ContactFields = {
  nom: string;
  email: string;
  telephone: string;
  societe: string;
  sujet: string;
  message: string;
  consent: boolean;
};

export type ContactErrors = Partial<Record<keyof ContactFields, string>>;
export const MAX_MESSAGE = 1800;
export const MAILTO_SAFE_LENGTH = 1900;
export const EMPTY_CONTACT: ContactFields = {
  nom: "", email: "", telephone: "", societe: "", sujet: "", message: "", consent: false,
};

export function isContactSubject(value: unknown): value is ContactSubject {
  return typeof value === "string" && CONTACT_SUBJECTS.some((subject) => subject === value);
}

function singleLine(value: string): string {
  return value.trim().replace(/[\r\n\u0000-\u001f\u007f]+/g, " ");
}

export function validateContact(values: ContactFields): ContactErrors {
  const errors: ContactErrors = {};
  const name = values.nom.trim();
  const email = values.email.trim();
  const phone = values.telephone.trim();
  const digits = phone.replace(/\D/g, "").length;
  if (name.length < 2 || name.length > 120 || /[\r\n\u0000-\u001f\u007f]/.test(name)) {
    errors.nom = "Indiquez votre nom et votre prénom (2 à 120 caractères).";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 180) {
    errors.email = "Indiquez une adresse électronique valide.";
  }
  if (phone && (!/^[+()\d\s.-]{6,25}$/.test(phone) || digits < 6 || digits > 15)) {
    errors.telephone = "Indiquez un numéro valide, comprenant de 6 à 15 chiffres.";
  }
  if (values.societe.trim().length > 160 || /[\r\n\u0000-\u001f\u007f]/.test(values.societe)) {
    errors.societe = "Indiquez une dénomination sur une ligne (160 caractères maximum).";
  }
  if (!isContactSubject(values.sujet)) errors.sujet = "Sélectionnez la nature du dossier.";
  if (values.message.trim().length < 20 || values.message.length > MAX_MESSAGE) {
    errors.message = `Décrivez la situation en 20 à ${MAX_MESSAGE} caractères.`;
  }
  if (!values.consent) errors.consent = "Veuillez prendre connaissance des informations de confidentialité.";
  return errors;
}

export function buildContactDraft(values: ContactFields) {
  const subject = `[${SITE.domain}] ${singleLine(values.sujet)} — ${singleLine(values.nom)}`;
  const body = [
    `Nom et prénom : ${singleLine(values.nom)}`,
    `Adresse électronique : ${singleLine(values.email)}`,
    `Téléphone : ${singleLine(values.telephone) || "Non renseigné"}`,
    `Société : ${singleLine(values.societe) || "Non renseignée"}`,
    `Nature du dossier : ${singleLine(values.sujet)}`,
    "", "Situation :", values.message.trim(), "", "—",
    `Demande préparée depuis ${SITE.domain}. Aucun envoi n’a lieu avant validation dans la messagerie.`,
  ].join("\n").replace(/\r\n|\r|\n/g, "\r\n");

  const subjectUrl = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`;
  const completeUrl = `${subjectUrl}&body=${encodeURIComponent(body)}`;
  const copyRequired = completeUrl.length > MAILTO_SAFE_LENGTH;

  // Never truncate a visitor's account of the facts. For long encoded URIs the
  // complete body stays visible and copyable, while the mail client receives only the subject.
  return { subject, body, copyRequired, url: copyRequired ? subjectUrl : completeUrl };
}
