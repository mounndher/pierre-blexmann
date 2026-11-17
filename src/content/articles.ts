/**
 * Verified external publications authored by Maître Pierre Blexmann
 * and published on Village de la Justice (avril–juin 2020).
 *
 * Strict editorial rule: only verified, actually published articles appear here.
 * No unpublished or forthcoming placeholders are exported.
 */

export type ExternalPublication = {
  id: string;
  status: "Publication externe";
  venue: string;
  publishedDate: string;
  isoDate: string;
  modifiedDate?: string;
  modifiedIsoDate?: string;
  title: string;
  author: string;
  excerpt: string;
  href: string;
};

export const EXTERNAL_PUBLICATIONS: ExternalPublication[] = [
  {
    id: "village-justice-discrimination-1",
    status: "Publication externe",
    venue: "Village de la Justice",
    publishedDate: "8 avril 2020",
    isoDate: "2020-04-08",
    title:
      "Comment prouver la discrimination dans le cadre des relations de travail ? (1re partie)",
    author: "Pierre Blexmann, avocat",
    excerpt:
      "Présentation du régime légal de preuve aménagé (art. L. 1134-1 du Code du travail) : motifs prohibés, éléments de fait laissant supposer une discrimination et justification objective attendue de l'employeur.",
    href: "https://www.village-justice.com/articles/comment-prouver-discrimination-dans-cadre-des-relations-travail-1ere-partie,34583.html",
  },
  {
    id: "village-justice-discrimination-2",
    status: "Publication externe",
    venue: "Village de la Justice",
    publishedDate: "8 mai 2020",
    isoDate: "2020-05-08",
    modifiedDate: "26 mai 2020",
    modifiedIsoDate: "2020-05-26",
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
    isoDate: "2020-06-09",
    title:
      "Comment prouver la discrimination dans le cadre des relations de travail ? (3e partie)",
    author: "Pierre Blexmann, avocat",
    excerpt:
      "Analyse du rôle des différents acteurs et institutions susceptibles de concourir à la réunion des éléments de preuve dans le contentieux de la discrimination au travail.",
    href: "https://www.village-justice.com/articles/comment-prouver-discrimination-dans-cadre-des-relations-travail-3eme-partie,35663.html",
  },
];
