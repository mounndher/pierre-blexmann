import type { Metadata } from "next";
import ExpertisePage, { type ExpertisePageData } from "@/components/ExpertisePage";
import { SITE } from "@/content/site";

// NOTE: aucun document de travail joint à la demande — le contenu ci-dessous est rédigé
// à partir des informations publiées sur le site existant, dans le respect du RIN art. 10.
const TITLE = "Avocat litige commercial Paris | Impayés et contrats";
const DESCRIPTION =
  "Impayés, inexécution et résiliation de contrats à Paris : le Cabinet Blexmann Avocats défend entreprises et dirigeants. Exposez votre situation.";
const PATH = "/contentieux-commercial";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}${PATH}`,
    siteName: SITE.legalName,
    locale: "fr_FR",
    type: "article",
  },
};

const DATA: ExpertisePageData = {
  path: PATH,
  breadcrumbLabel: "Contentieux commercial",
  eyebrow: "Contentieux commercial et contractuel — Paris",
  h1: "Avocat en litiges commerciaux à Paris",
  intro: [
    "Un client qui ne paie plus, un fournisseur qui livre une marchandise non conforme, un partenaire qui interrompt ses prestations : le litige commercial fragilise d'abord la trésorerie et l'exploitation, avant même toute procédure.",
    "Maître Pierre Blexmann, avocat au Barreau de Paris, assiste entreprises et dirigeants dans leurs différends commerciaux et contractuels, en demande comme en défense, devant les juridictions parisiennes.",
  ],
  situationsTitle: "Les situations traitées",
  situationsText:
    "Chaque dossier commence par l'examen des pièces : contrat, conditions générales, bons de commande, échanges écrits et preuves du préjudice. Cette lecture détermine les fondements invocables et la voie à privilégier.",
  situationsBullets: [
    "Recouvrement de créances et de factures impayées : mise en demeure, injonction de payer, assignation en paiement.",
    "Inexécution, résolution et résiliation de contrats : manquement du cocontractant, préjudice subi, sortie encadrée du contrat.",
    "Litiges fournisseurs et sous-traitance : livraisons défectueuses, retards répétés, pénalités et responsabilités en chaîne.",
  ],
  conduiteTitle: "La conduite du dossier",
  conduiteParagraphs: [
    "Le cabinet qualifie vos droits, consolide les éléments de preuve et compare les voies disponibles — négociation encadrée, injonction de payer ou assignation — au regard du montant en jeu, des délais et de la relation commerciale à préserver ou à clore.",
    "Vous décidez en connaissance de cause, sur la base d'une analyse claire et motivée. Chaque étape — mise en demeure, conclusions, audience, exécution — vous est expliquée avant d'être engagée.",
  ],
  faqs: [
    {
      q: "Une mise en demeure est-elle nécessaire avant d'agir en justice ?",
      a: "Elle n'est pas toujours exigée, mais elle reste recommandée : elle constate le manquement, fixe un dernier délai et démontre la tentative de règlement amiable. Sa rédaction conditionne son utilité devant le juge.",
    },
    {
      q: "Que faire face à des factures durablement impayées ?",
      a: "Après relances et mise en demeure, plusieurs voies existent : injonction de payer pour les créances contractuelles non sérieusement contestables, assignation au fond ou négociation d'un échéancier. Le choix dépend du montant, des pièces et de la solvabilité du débiteur.",
    },
    {
      q: "Un contrat oral ou un simple échange de courriels peut-il être invoqué ?",
      a: "Oui, un contrat peut se prouver par tous moyens en matière commerciale, y compris par échanges écrits et commencements d'exécution. La difficulté tient à la preuve : conserver l'ensemble des écrits est essentiel.",
    },
    {
      q: "Que préparer avant le premier échange avec le cabinet ?",
      a: "Le contrat et ses annexes, les factures et relances, la chronologie des faits et toute échéance en cours (mise en demeure reçue, assignation, audience). Quelques lignes de résumé suffisent pour un premier examen.",
    },
  ],
  related: [
    { label: "Contentieux post-acquisition à Paris", href: "/contentieux-post-acquisition" },
    {
      label: "Rupture brutale et concurrence déloyale à Paris",
      href: "/rupture-brutale-concurrence-deloyale",
    },
    { label: "Référé et procédures d'urgence à Paris", href: "/procedures-d-urgence" },
    { label: "Maître Pierre Blexmann, avocat au Barreau de Paris", href: "/le-cabinet" },
  ],
};

export default function Page() {
  return <ExpertisePage data={DATA} />;
}
