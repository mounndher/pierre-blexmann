/**
 * Editorial content for the publications section.
 *
 * Strict editorial integrity:
 * - Only verified external publications actually authored and published by
 *   Maître Pierre Blexmann are listed, each with its publication date and
 *   destination URL. No forthcoming or planned item is displayed.
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
