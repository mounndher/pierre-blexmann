import type { Faq } from "./pages";

/**
 * [À CONFIRMER] TODO: validation finale par Maître Blexmann des réponses juridiques,
 * du périmètre de mission et des modalités d’honoraires avant mise en production.
 * Sources de contrôle : Service-Public (F38156), CPC art. 873, RIN art. 11.
 * Aucune estimation tarifaire ou durée de procédure n’est promise.
 */
export const HOME_FAQS: readonly Faq[] = [
  {
    question: "Combien coûte un contentieux commercial ?",
    answer:
      "Le coût dépend des pièces à examiner, du montant en jeu, de la complexité du litige et de la voie retenue. Honoraires du cabinet et frais éventuels de procédure doivent être distingués. Le périmètre de la mission et les modalités financières sont présentés avant toute intervention ; aucun prix standard ne convient à tous les dossiers.",
    link: { label: "Comprendre le traitement d’un litige commercial", href: "/contentieux-commercial" },
  },
  {
    question: "Combien de temps prend une injonction de payer ?",
    answer:
      "Il n’existe pas de délai de traitement identique dans toutes les juridictions. La qualité du dossier, l’examen par le juge, la signification de l’ordonnance et une éventuelle opposition influent sur la suite. Il faut distinguer le temps d’obtention de l’ordonnance du temps nécessaire au recouvrement effectif.",
    link: { label: "Examiner les voies de recouvrement", href: "/contentieux-commercial" },
  },
  {
    question: "Dans quel cas envisager un référé-provision ?",
    answer:
      "Cette voie permet de demander une provision lorsque l’existence de l’obligation n’est pas sérieusement contestable. Contrat, factures, preuve d’exécution et objections du débiteur doivent être rapprochés avant de choisir la procédure. Il ne s’agit ni d’un paiement automatique ni d’une décision définitive sur tout le litige.",
    link: { label: "Distinguer les différents référés", href: "/procedures-d-urgence" },
  },
  {
    question: "Que faire si un associé bloque les décisions de la société ?",
    answer:
      "Il convient d’identifier la décision empêchée, de relire les statuts et le pacte éventuel, puis de réunir convocations, votes et correspondances. Selon les faits, une négociation sur la gouvernance, une médiation ou une demande judiciaire peut être envisagée. Le maintien du fonctionnement de l’entreprise reste un point central de l’analyse.",
    link: { label: "Examiner un conflit entre associés", href: "/conflits-entre-associes" },
  },
  {
    question: "Comment préparer un premier échange avec le cabinet ?",
    answer:
      "Indiquez les parties concernées, les faits essentiels, ce que vous souhaitez obtenir et toute échéance figurant sur un acte reçu. Ne transmettez pas de pièce sensible à ce stade. Le formulaire prépare un courriel dans votre messagerie : vous devez ensuite en valider l’envoi. Le cabinet examine la demande avant d’accepter ou non le dossier.",
    link: { label: "Préparer ma demande de contact", href: "/contact" },
  },
];
