import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import ExpertisePage, { type ExpertisePageData } from "@/components/ExpertisePage";
import { SITE } from "@/content/site";

// NOTE: aucun document de travail joint à la demande — le contenu ci-dessous est rédigé
// à partir des informations publiées sur le site existant, dans le respect du RIN art. 10.
const TITLE = "Avocat garantie de passif Paris | Contentieux post-cession";
const DESCRIPTION =
  "Garantie d'actif et de passif, prix ou comptes contestés après une cession : le Cabinet Blexmann Avocats instruit votre dossier à Paris. Premier échange confidentiel.";
const PATH = "/contentieux-post-acquisition";

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const DATA: ExpertisePageData = {
  path: PATH,
  breadcrumbLabel: "Contentieux post-acquisition",
  eyebrow: "Contentieux post-acquisition — Paris",
  h1: "Avocat en garantie de passif et contentieux post-acquisition à Paris",
  intro: [
    "Après une cession, les engagements souscrits se mesurent à l'épreuve des faits : garantie d'actif et de passif mise en œuvre, comptes discutés, complément de prix contesté. Ces différends techniques se tranchent d'abord à la lecture des actes.",
    "Maître Pierre Blexmann, avocat au Barreau de Paris, assiste cédants et acquéreurs dans leurs litiges post-cession, par la négociation ou devant la juridiction prévue au contrat.",
  ],
  situationsTitle: "Les situations traitées",
  situationsText:
    "L'instruction du dossier repose sur les actes de cession, la documentation comptable et les notifications échangées. La rédaction des clauses — garantie, ajustement de prix, non-concurrence — commande l'analyse.",
  situationsBullets: [
    "Mise en œuvre et contestation de garanties d'actif et de passif : déclarations, notifications, chiffrage du préjudice.",
    "Litiges de prix, d'ajustement comptable et d'earn-out : méthodes de calcul, comptes de référence, compléments contestés.",
    "Exécution des engagements post-cession et non-concurrence : portée des clauses, manquements allégués, sanctions.",
  ],
  conduiteTitle: "La conduite du dossier",
  conduiteParagraphs: [
    "Le cabinet chiffre le préjudice allégué ou subi à partir des pièces comptables et conduit la négociation ou la procédure prévue au contrat — juridiction étatique, référé ou arbitrage.",
    "Vous décidez en connaissance de cause, sur la base d'une analyse claire et motivée des stipulations contractuelles et de leur interprétation probable.",
  ],
  faqs: [
    {
      q: "Qu'est-ce qu'une garantie d'actif et de passif ?",
      a: "C'est l'engagement par lequel le cédant garantit l'exactitude de la situation de la société cédée à une date de référence. Sa mise en œuvre obéit aux conditions et délais fixés par l'acte, qu'il faut relire attentivement.",
    },
    {
      q: "Que faire si le prix ou les comptes sont contestés ?",
      a: "Faire examiner sans tarder les clauses d'ajustement, les comptes de référence et les notifications adressées. Les délais contractuels de contestation sont souvent brefs et leur non-respect peut faire perdre des droits.",
    },
    {
      q: "Une clause de non-concurrence peut-elle être discutée ?",
      a: "Sa validité et sa portée dépendent de sa rédaction : activité visée, zone géographique, durée et contrepartie. Chaque élément peut être analysé, en demande comme en défense.",
    },
    {
      q: "Que préparer avant le premier échange ?",
      a: "L'acte de cession et ses annexes, les comptes concernés, les notifications échangées et un résumé chronologique du différend.",
    },
  ],
  related: [
    { label: "Contentieux commercial et contractuel à Paris", href: "/contentieux-commercial" },
    { label: "Conflits entre associés et actionnaires à Paris", href: "/conflits-entre-associes" },
    { label: "Contentieux commercial international à Paris", href: "/contentieux-international" },
    { label: "Maître Pierre Blexmann, avocat au Barreau de Paris", href: "/le-cabinet" },
  ],
};

export default function Page() {
  return <ExpertisePage data={DATA} />;
}
