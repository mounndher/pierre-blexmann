import type { Metadata } from "next";
import ExpertisePage, { type ExpertisePageData } from "@/components/ExpertisePage";
import { SITE } from "@/content/site";

// NOTE: aucun document de travail joint à la demande — le contenu ci-dessous est rédigé
// à partir des informations publiées sur le site existant, dans le respect du RIN art. 10.
const TITLE = "Rupture brutale de relations commerciales | Avocat Paris";
const DESCRIPTION =
  "Rupture brutale de relation commerciale ou concurrence déloyale à Paris : le Cabinet Blexmann Avocats chiffre le préjudice. Exposez votre situation.";
const PATH = "/rupture-brutale-concurrence-deloyale";

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
  breadcrumbLabel: "Rupture brutale & concurrence",
  eyebrow: "Rupture brutale et concurrence déloyale — Paris",
  h1: "Rupture brutale et concurrence déloyale : avocat à Paris",
  intro: [
    "Une relation commerciale ancienne interrompue sans préavis écrit suffisant, une clientèle captée par des moyens déloyaux : ces pratiques causent un préjudice économique qui se chiffre et se répare, à condition d'agir avec méthode.",
    "Maître Pierre Blexmann, avocat au Barreau de Paris, assiste les entreprises victimes de ruptures brutales ou d'actes déloyaux, comme celles auxquelles de tels faits sont reprochés.",
  ],
  situationsTitle: "Les situations traitées",
  situationsText:
    "L'article L. 442-1 du Code de commerce sanctionne la rupture brutale d'une relation commerciale établie sans préavis écrit suffisant. La concurrence déloyale, elle, se démontre par des faits précis : dénigrement, désorganisation, parasitisme.",
  situationsBullets: [
    "Rupture brutale de relations commerciales établies (art. L. 442-1 C. com.) : ancienneté de la relation, préavis exigible, marge perdue.",
    "Concurrence déloyale, dénigrement et parasitisme : actes fautifs, lien avec le préjudice, cessation du trouble.",
    "Débauchage fautif et détournement de clientèle : départs organisés, violation d'obligations, réparation.",
  ],
  conduiteTitle: "La conduite du dossier",
  conduiteParagraphs: [
    "Le cabinet apprécie le préavis qui aurait dû être respecté, documente les faits et le préjudice économique, puis agit en réparation — ou organise la défense de l'entreprise mise en cause.",
    "La préservation des preuves dès les premiers signes — échanges, chiffres, constats — conditionne l'issue : elle est engagée avec méthode, en demande comme en défense.",
  ],
  faqs: [
    {
      q: "Qu'est-ce qu'une rupture brutale de relation commerciale ?",
      a: "C'est l'interruption sans préavis écrit suffisant d'une relation commerciale établie. Le caractère établi s'apprécie à l'ancienneté et à la régularité des échanges ; le préavis exigible dépend notamment de la durée de la relation et de la dépendance économique.",
    },
    {
      q: "Comment démontrer une concurrence déloyale ?",
      a: "Par des faits précis et datés : actes de dénigrement, manœuvres de désorganisation, reprise parasitaire d'investissements. Constats, attestations et pièces comptables permettent d'établir la faute et le préjudice.",
    },
    {
      q: "Que faire si une rupture vous est reprochée ?",
      a: "Faire examiner la notification adressée, la durée du préavis accordé et les motifs de la décision : une rupture motivée par des manquements graves du partenaire ou accompagnée d'un préavis suffisant peut être défendue.",
    },
    {
      q: "Que préparer avant le premier échange ?",
      a: "L'historique de la relation (contrats, commandes, chiffres d'affaires), la notification de rupture et tout élément relatif au préjudice allégué.",
    },
  ],
  related: [
    { label: "Contentieux commercial et contractuel à Paris", href: "/contentieux-commercial" },
    { label: "Référé et procédures d'urgence à Paris", href: "/procedures-d-urgence" },
    { label: "Contentieux commercial international à Paris", href: "/contentieux-international" },
    { label: "Maître Pierre Blexmann, avocat au Barreau de Paris", href: "/le-cabinet" },
  ],
};

export default function Page() {
  return <ExpertisePage data={DATA} />;
}
