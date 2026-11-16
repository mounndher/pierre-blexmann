import type { Metadata } from "next";
import ExpertisePage, { type ExpertisePageData } from "@/components/ExpertisePage";
import { SITE } from "@/content/site";

// NOTE: aucun document de travail joint à la demande — le contenu ci-dessous est rédigé
// à partir des informations publiées sur le site existant, dans le respect du RIN art. 10.
const TITLE = "Avocat conflit entre associés à Paris | Cabinet Blexmann";
const DESCRIPTION =
  "Blocage entre associés, exclusion ou sortie impossible à Paris : le Cabinet Blexmann Avocats sécurise la gouvernance. Exposez votre situation.";
const PATH = "/conflits-entre-associes";

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
  breadcrumbLabel: "Conflits entre associés",
  eyebrow: "Conflits entre associés et actionnaires — Paris",
  h1: "Avocat en conflits entre associés à Paris",
  intro: [
    "Un désaccord entre associés dépasse vite le cadre personnel : décisions bloquées, assemblées contestées, comptes courants gelés. La gouvernance se grippe et la valeur de l'entreprise s'érode.",
    "Maître Pierre Blexmann, avocat au Barreau de Paris, assiste associés, actionnaires et dirigeants dans leurs différends sociétaires, qu'il s'agisse de rétablir un fonctionnement normal ou d'organiser une sortie.",
  ],
  situationsTitle: "Les situations traitées",
  situationsText:
    "L'examen porte sur les statuts, le pacte d'associés s'il existe, les procès-verbaux d'assemblées et la réalité du blocage. L'objectif — reprendre la main, rééquilibrer ou sortir — détermine la voie retenue.",
  situationsBullets: [
    "Abus de majorité ou de minorité, révocation de mandataires : décisions contestées, information des associés, responsabilités encourues.",
    "Exclusion, retrait et cession de droits sociaux : conditions statutaires, valorisation des titres, sortie organisée.",
    "Contestation d'assemblées et de décisions de gestion : irrégularités de convocation, de vote ou de pouvoirs.",
  ],
  conduiteTitle: "La conduite du dossier",
  conduiteParagraphs: [
    "Le cabinet cadre la négociation lorsqu'un accord demeure envisageable et porte le différend devant les tribunaux lorsque la situation l'exige. À chaque étape, la continuité de la société — trésorerie, contrats, salariés — est prise en compte.",
    "Vous décidez en connaissance de cause, sur la base d'une analyse claire et motivée des fondements, des risques et des coûts de chaque option.",
  ],
  faqs: [
    {
      q: "Que faire lorsqu'une décision d'associés est bloquée ?",
      a: "Il convient d'abord de vérifier les règles de majorité et les clauses statutaires applicables, puis d'évaluer les voies de déblocage : négociation encadrée, médiation ou saisine du juge. Agir tôt évite que le blocage ne contamine l'exploitation.",
    },
    {
      q: "Peut-on contraindre un associé à céder ses titres ?",
      a: "En principe, nul ne peut être contraint de rester associé, mais nul ne peut non plus être exclu sans texte : l'exclusion suppose une clause statutaire et le respect des droits de la défense. À défaut, la sortie passe par la négociation ou, dans certains cas, par une décision de justice.",
    },
    {
      q: "La négociation reste-t-elle possible après une assignation ?",
      a: "Oui. Une transaction peut intervenir à tout stade de la procédure, y compris après l'ouverture des débats. Le juge peut également proposer une médiation. Chaque étape procédurale peut donc servir un accord.",
    },
    {
      q: "Que préparer avant le premier échange ?",
      a: "Les statuts, le pacte d'associés, les derniers procès-verbaux, les échanges relatifs au différend et un résumé chronologique des faits.",
    },
  ],
  related: [
    { label: "Responsabilité des dirigeants à Paris", href: "/responsabilite-des-dirigeants" },
    { label: "Contentieux commercial et contractuel à Paris", href: "/contentieux-commercial" },
    { label: "Contentieux commercial international à Paris", href: "/contentieux-international" },
    { label: "Maître Pierre Blexmann, avocat au Barreau de Paris", href: "/le-cabinet" },
  ],
  contactSubject: "Conflits entre associés ou actionnaires",
};

export default function Page() {
  return <ExpertisePage data={DATA} />;
}
