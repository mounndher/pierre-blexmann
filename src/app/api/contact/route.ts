import { NextResponse } from "next/server";
import { db } from "@/db";
import { contactMessages } from "@/db/schema";
import { CONTACT, SITE } from "@/content/site";

export const runtime = "nodejs";

type Payload = {
  nom?: unknown;
  email?: unknown;
  telephone?: unknown;
  societe?: unknown;
  sujet?: unknown;
  message?: unknown;
  consent?: unknown;
};

type Errors = Record<string, string>;

function validate(body: Payload): { values: Record<string, string | null>; errors: Errors } {
  const errors: Errors = {};
  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");

  const nom = str(body.nom);
  const email = str(body.email);
  const telephone = str(body.telephone);
  const societe = str(body.societe);
  const sujet = str(body.sujet);
  const message = str(body.message);

  if (nom.length < 2) errors.nom = "Veuillez indiquer votre nom et votre prénom.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
    errors.email = "Veuillez indiquer une adresse électronique valide.";
  if (telephone && !/^[+()\d\s.-]{6,20}$/.test(telephone))
    errors.telephone = "Veuillez indiquer un numéro de téléphone valide.";
  if (!CONTACT.subjects.includes(sujet as (typeof CONTACT.subjects)[number]))
    errors.sujet = "Veuillez sélectionner l'objet de votre demande.";
  if (message.length < 20)
    errors.message = "Veuillez décrire brièvement votre situation (20 caractères minimum).";
  if (body.consent !== true)
    errors.consent =
      "Votre accord au traitement de ces informations est requis pour transmettre la demande.";

  return {
    values: {
      nom,
      email,
      telephone: telephone || null,
      societe: societe || null,
      sujet,
      message,
    },
    errors,
  };
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Corps de requête invalide." },
      { status: 400 },
    );
  }

  const { values, errors } = validate(body);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, errors, message: "Certains champs doivent être corrigés." },
      { status: 400 },
    );
  }

  try {
    await db.insert(contactMessages).values({
      nom: values.nom as string,
      email: values.email as string,
      telephone: values.telephone,
      societe: values.societe,
      sujet: values.sujet as string,
      message: values.message as string,
    });
  } catch (error) {
    console.error("[contact] échec d'enregistrement du message", error);
    return NextResponse.json(
      {
        ok: false,
        message: `Le service de messagerie est momentanément indisponible. Vous pouvez écrire directement à ${SITE.email} ou appeler le ${SITE.phone}.`,
      },
      { status: 503 },
    );
  }

  return NextResponse.json({
    ok: true,
    message:
      "Votre message a bien été transmis. Après réception de votre demande, le cabinet en prend connaissance et vous indique les suites envisageables.",
  });
}
