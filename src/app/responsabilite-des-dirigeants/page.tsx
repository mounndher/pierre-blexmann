import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import ExpertisePage, { type ExpertisePageData } from "@/components/ExpertisePage";
import { SITE } from "@/content/site";

// NOTE: aucun document de travail joint à la demande — le contenu ci-dessous est rédigé
// à partir des informations publiées sur le site existant, dans le respect du RIN art. 10.
const TITLE = "Avocat responsabilité dirigeant Paris | Cabinet Blexmann";
const DESCRIPTION =
  "Faute de gestion alléguée ou mise en cause personnelle à Paris : le Cabinet Blexmann Avocats prépare votre défense. Premier échange confidentiel.";
const PATH = "/responsabilite-des-dirigeants";

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const DATA: ExpertisePageData = {
  path: PATH,
  breadcrumbLabel: "Responsabilité des dirigeants",
  eyebrow: "Responsabilité des dirigeants — Paris",
  h1: "Avocat en responsabilité des dirigeants à Paris",
  intro: [
    "Faute de gestion alléguée, décision sociale contestée, procédure collective : la mise en cause d'un dirigeant engage potentiellement son patrimoine personnel et se joue souvent dans des délais contraints.",
    "Maître Pierre Blexmann, avocat au Barreau de Paris, analyse le fondement des griefs et assure la défense des dirigeants mis en cause, dans le strict respect du secret professionnel.",
  ],
  situationsTitle: "Les situations traitées",
  situationsText:
    "L'examen porte sur les actes reprochés, les décisions sociales concernées, les pièces comptables et le respect des obligations du mandat. La réponse se construit dès la première notification.",
  situationsBullets: [
    "Actions en responsabilité pour faute de gestion : griefs allégués, lien avec le préjudice, moyens de défense.",
    "Défense du dirigeant dans le cadre d'une procédure collective : déclarations, vérifications, auditions.",
    "Mise en cause personnelle et enjeux patrimoniaux : étendue des demandes, conséquences financières, coordination avec les conseils.",
  ],
  conduiteTitle: "La conduite du dossier",
  conduiteParagraphs: [
    "Le cabinet prépare la réponse dès la première mise en demeure ou assignation, réunit les pièces justificatives de la gestion et assure la défense jusqu'à l'audience puis l'exécution.",
    "Lorsque la société et son dirigeant sont attraits ensemble, la question d'un éventuel conflit d'intérêts est examinée avant toute défense commune. Vous êtes informé de chaque étape et de ses enjeux.",
  ],
  faqs: [
    {
      q: "Dans quels cas la responsabilité d'un dirigeant peut-elle être recherchée ?",
      a: "Notamment en cas de faute de gestion, de violation des statuts ou des dispositions légales, ou dans le cadre d'une procédure collective. Chaque fondement obéit à des conditions propres qu'il convient d'analyser au regard des pièces.",
    },
    {
      q: "Que faire après réception d'une assignation ?",
      a: "Ne pas laisser passer les délais de procédure, réunir sans tarder les pièces de gestion concernées et faire examiner le dossier : la qualité de la réponse initiale conditionne souvent la suite.",
    },
    {
      q: "La société et le dirigeant peuvent-ils être défendus ensemble ?",
      a: "Ce n'est possible qu'en l'absence de conflit d'intérêts entre eux. Cette vérification préalable est systématique : si les intérêts divergent, des défenses distinctes s'imposent.",
    },
    {
      q: "Que préparer avant le premier échange ?",
      a: "L'acte de mise en cause, les décisions et pièces de gestion concernées, le calendrier procédural et un résumé chronologique des faits.",
    },
  ],
  related: [
    { label: "Conflits entre associés et actionnaires à Paris", href: "/conflits-entre-associes" },
    { label: "Contentieux commercial et contractuel à Paris", href: "/contentieux-commercial" },
    { label: "Référé et procédures d'urgence à Paris", href: "/procedures-d-urgence" },
    { label: "Maître Pierre Blexmann, avocat au Barreau de Paris", href: "/le-cabinet" },
  ],
};

export default function Page() {
  return <ExpertisePage data={DATA} />;
}
