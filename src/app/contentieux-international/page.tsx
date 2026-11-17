import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import ExpertisePage, { type ExpertisePageData } from "@/components/ExpertisePage";
import { SITE } from "@/content/site";

// NOTE: aucun document de travail joint à la demande — le contenu ci-dessous est rédigé
// à partir des informations publiées sur le site existant, dans le respect du RIN art. 10.
const TITLE = "Avocat contentieux commercial international | Paris";
const DESCRIPTION =
  "Contrat international, compétence ou exécution à l'étranger : le Cabinet Blexmann Avocats définit la voie adaptée. Premier échange confidentiel.";
const PATH = "/contentieux-international";

export const metadata: Metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

const DATA: ExpertisePageData = {
  path: PATH,
  breadcrumbLabel: "Contentieux international",
  eyebrow: "Contentieux international — Paris",
  h1: "Avocat en contentieux commercial international à Paris",
  intro: [
    "Contrat régi par un droit étranger, contrepartie établie hors de France, décision à faire exécuter à l'étranger : la dimension transfrontalière ajoute aux questions de fond des enjeux de compétence, de loi applicable et d'exécution.",
    "Maître Pierre Blexmann, avocat au Barreau de Paris, assiste les entreprises françaises et étrangères dans leurs litiges commerciaux internationaux, devant les juridictions comme par les modes amiables.",
  ],
  situationsTitle: "Les situations traitées",
  situationsText:
    "L'analyse commence par les stipulations du contrat — clauses de juridiction, de droit applicable, d'arbitrage — puis examine les instruments applicables : règlements européens, conventions internationales, droit commun.",
  situationsBullets: [
    "Litiges commerciaux et contractuels internationaux : inexécution, impayés et ruptures entre partenaires de pays différents.",
    "Compétence juridictionnelle et loi applicable : clauses du contrat, règlements européens, stratégies de forum.",
    "Exécution des décisions et sentences à l'étranger : exequatur, arbitrage international, mesures conservatoires transfrontalières.",
  ],
  conduiteTitle: "La conduite du dossier",
  conduiteParagraphs: [
    "Le cabinet définit avec vous la voie adaptée — juridiction étatique, médiation ou arbitrage — au regard des objectifs, des coûts et des perspectives d'exécution dans les pays concernés.",
    "Chaque étape vous est expliquée, y compris les particularités procédurales liées à la dimension internationale : notifications, traductions, délais allongés.",
  ],
  faqs: [
    {
      q: "Quel tribunal est compétent pour un litige international ?",
      a: "En premier lieu, la clause de juridiction du contrat, si elle est valable. À défaut, les règlements européens ou les règles de compétence du for saisi désignent le juge compétent. Cette analyse précède toute assignation.",
    },
    {
      q: "Quelle loi s'applique à un contrat international ?",
      a: "La loi choisie par les parties, à défaut celle désignée par les règles de conflit de lois, notamment le règlement Rome I pour les contrats. Le choix de la loi applicable influence directement l'issue.",
    },
    {
      q: "Une décision française peut-elle être exécutée à l'étranger ?",
      a: "Au sein de l'Union européenne, les décisions circulent selon des procédures simplifiées. Hors Union, une procédure d'exequatur est généralement nécessaire. Les perspectives d'exécution doivent être évaluées avant d'agir.",
    },
    {
      q: "Que préparer avant le premier échange ?",
      a: "Le contrat et ses conditions générales, les échanges avec la contrepartie, les éléments de localisation des actifs et un résumé chronologique.",
    },
  ],
  related: [
    { label: "Contentieux commercial et contractuel à Paris", href: "/contentieux-commercial" },
    { label: "Contentieux post-acquisition à Paris", href: "/contentieux-post-acquisition" },
    {
      label: "Rupture brutale et concurrence déloyale à Paris",
      href: "/rupture-brutale-concurrence-deloyale",
    },
    { label: "Maître Pierre Blexmann, avocat au Barreau de Paris", href: "/le-cabinet" },
  ],
};

export default function Page() {
  return <ExpertisePage data={DATA} />;
}
