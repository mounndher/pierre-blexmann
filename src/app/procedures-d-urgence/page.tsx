import type { Metadata } from "next";
import ExpertisePage, { type ExpertisePageData } from "@/components/ExpertisePage";
import { SITE } from "@/content/site";

// NOTE: aucun document de travail joint à la demande — le contenu ci-dessous est rédigé
// à partir des informations publiées sur le site existant, dans le respect du RIN art. 10.
const TITLE = "Avocat référé et procédures d'urgence | Paris";
const DESCRIPTION =
  "Référé, mesure conservatoire ou preuve menacée à Paris : le Cabinet Blexmann Avocats saisit le juge compétent. Exposez votre situation.";
const PATH = "/procedures-d-urgence";

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
  breadcrumbLabel: "Procédures d'urgence",
  eyebrow: "Référé et procédures d'urgence — Paris",
  h1: "Avocat en référé et procédures d'urgence à Paris",
  intro: [
    "Trouble manifestement illicite, preuve menacée de disparition, créance en péril : certaines situations relèvent du juge des référés ou des requêtes, qui statue dans des délais resserrés lorsque les conditions sont réunies.",
    "Maître Pierre Blexmann, avocat au Barreau de Paris, prépare et porte les demandes urgentes devant les juridictions parisiennes, tout en structurant la défense au fond.",
  ],
  situationsTitle: "Les situations traitées",
  situationsText:
    "Le référé suppose l'urgence et, selon le fondement, l'évidence ou l'absence de contestation sérieuse. La requête permet d'obtenir une mesure non contradictoire, notamment pour préserver des preuves.",
  situationsBullets: [
    "Référés, mesures provisoires et d'instruction in futurum : cessation d'un trouble, provision, expertise ordonnée avant tout procès.",
    "Saisies et mesures conservatoires : sécurisation d'une créance menacée, séquestre, nantissement judiciaire.",
    "Exécution provisoire et préservation des preuves : effet immédiat des décisions, constats, mesures d'instruction.",
  ],
  conduiteTitle: "La conduite du dossier",
  conduiteParagraphs: [
    "Le cabinet qualifie la voie d'urgence adaptée, réunit les pièces démontrant l'urgence et le bien-fondé apparent, et porte la demande devant le juge compétent.",
    "Parallèlement, la défense au fond est structurée afin de maîtriser la suite : une mesure d'urgence ne préjuge pas de l'issue du litige principal.",
  ],
  faqs: [
    {
      q: "Dans quels cas le juge des référés peut-il être saisi ?",
      a: "En cas d'urgence, pour prévenir un dommage imminent, faire cesser un trouble manifestement illicite ou obtenir une provision lorsque l'obligation n'est pas sérieusement contestable. Le juge apprécie souverainement ces conditions.",
    },
    {
      q: "Qu'est-ce qu'une mesure conservatoire ?",
      a: "C'est une mesure destinée à préserver les droits du créancier avant le jugement au fond : saisie conservatoire, nantissement ou séquestre. Elle suppose en principe une autorisation judiciaire et une créance paraissant fondée.",
    },
    {
      q: "Le référé remplace-t-il le procès au fond ?",
      a: "Non. L'ordonnance de référé, rendue dans des délais resserrés, ne tranche pas définitivement le litige : elle ordonne des mesures provisoires. Le fond du différend relève ensuite, si nécessaire, d'une procédure ordinaire.",
    },
    {
      q: "Que préparer avant de saisir le cabinet ?",
      a: "Les pièces démontrant l'urgence et le trouble allégués, la chronologie resserrée des faits et toute décision ou échéance déjà fixée.",
    },
  ],
  related: [
    { label: "Contentieux commercial et contractuel à Paris", href: "/contentieux-commercial" },
    {
      label: "Rupture brutale et concurrence déloyale à Paris",
      href: "/rupture-brutale-concurrence-deloyale",
    },
    { label: "Conflits entre associés et actionnaires à Paris", href: "/conflits-entre-associes" },
    { label: "Maître Pierre Blexmann, avocat au Barreau de Paris", href: "/le-cabinet" },
  ],
};

export default function Page() {
  return <ExpertisePage data={DATA} />;
}
