/**
 * Editorial content for the Actualités section.
 *
 * Strict editorial integrity:
 * - Only verified external publications actually authored and published by
 *   Maître Pierre Blexmann carry a publication date and destination URL.
 * - Editorial notes not yet written/published by the firm are presented
 *   exclusively as forthcoming topics (« À paraître »), with no fake link
 *   and no fabricated publication date.
 */

export type ExternalPublication = {
  id: string;
  status: "Publication externe";
  venue: string;
  publishedDate: string;
  title: string;
  author: string;
  excerpt: string;
  href: string;
};

export type ForthcomingTopic = {
  id: string;
  status: "À paraître";
  domain: string;
  title: string;
  summary: string;
};

/**
 * Verified external publications authored by Maître Pierre Blexmann
 * and published on Village de la Justice (avril–juin 2020).
 */
export const EXTERNAL_PUBLICATIONS: ExternalPublication[] = [
  {
    id: "village-justice-discrimination-1",
    status: "Publication externe",
    venue: "Village de la Justice",
    publishedDate: "8 avril 2020",
    title:
      "Comment prouver la discrimination dans le cadre des relations de travail ? (1re partie)",
    author: "Pierre Blexmann, avocat",
    excerpt:
      "Présentation du régime légal de preuve allégé (art. L. 1134-1 du Code du travail) : motifs prohibés, éléments de fait laissant supposer une discrimination et obligation de justification objective de l'employeur.",
    href: "https://www.village-justice.com/articles/comment-prouver-discrimination-dans-cadre-des-relations-travail-1ere-partie,34583.html",
  },
  {
    id: "village-justice-discrimination-2",
    status: "Publication externe",
    venue: "Village de la Justice",
    publishedDate: "26 mai 2020",
    title:
      "Comment prouver la discrimination dans le cadre des relations de travail ? (2e partie)",
    author: "Pierre Blexmann, avocat",
    excerpt:
      "Examen des modes et moyens de preuve recevables devant le juge : preuve directe, éléments comparatifs, recevabilité des attestations et exigences procédurales.",
    href: "https://www.village-justice.com/articles/comment-prouver-discrimination-dans-cadre-des-relations-travail-2eme-partie,35197.html",
  },
  {
    id: "village-justice-discrimination-3",
    status: "Publication externe",
    venue: "Village de la Justice",
    publishedDate: "9 juin 2020",
    title:
      "Comment prouver la discrimination dans le cadre des relations de travail ? (3e partie)",
    author: "Pierre Blexmann, avocat",
    excerpt:
      "Analyse du rôle des différents acteurs et institutions susceptibles de concourir à l'apport des éléments de preuve dans le contentieux de la discrimination au travail.",
    href: "https://www.village-justice.com/articles/comment-prouver-discrimination-dans-cadre-des-relations-travail-3eme-partie,35663.html",
  },
];

/**
 * Planned editorial topics — not yet published by the firm.
 * Displayed without fabricated dates or links.
 */
export const FORTHCOMING_TOPICS: ForthcomingTopic[] = [
  {
    id: "rupture-brutale-preavis",
    status: "À paraître",
    domain: "Droit économique",
    title: "Rupture brutale d'une relation commerciale établie : apprécier le préavis et le préjudice",
    summary:
      "Critères d'ancienneté, dépendance économique, formalisation écrite et réflexes probatoires dès l'annonce de la rupture.",
  },
  {
    id: "conflit-associes-gouvernance",
    status: "À paraître",
    domain: "Droit des sociétés",
    title: "Conflit entre associés : sortir du blocage tout en préservant l'entreprise",
    summary:
      "Arbitrage entre négociation encadrée, médiation et voie judiciaire pour sécuriser la gouvernance ou organiser une séparation.",
  },
  {
    id: "proces-ou-mard",
    status: "À paraître",
    domain: "Résolution des litiges",
    title: "Procédure judiciaire ou modes alternatifs : choisir la voie adaptée à l'enjeu",
    summary:
      "Coût, délais, exécution et confidentialité : les critères pratiques pour orienter un contentieux d'affaires.",
  },
];
