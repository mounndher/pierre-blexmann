/**
 * Single source of truth for editorial content and verified factual data.
 *
 * Sources: blexmann-avocats.fr (accueil, mentions légales), registres publics
 * (INSEE / Barreau de Paris) et publications externes vérifiées.
 *
 * [À CONFIRMER] items are kept exclusively as TODO comments in code and must be
 * validated by Maître Pierre Blexmann before publication.
 */

export const SITE = {
  name: "Cabinet Blexmann Avocats",
  wordmark: "Blexmann",
  wordmarkSuffix: "Avocats",
  legalName: "Cabinet Blexmann Avocats",
  domain: "blexmann-avocats.fr",
  url: "https://blexmann-avocats.fr",
  tagline: "Contentieux des affaires",
  phone: "+33 (0)1 89 86 48 60",
  phoneHref: "tel:+33189864860",
  phoneE164: "+33189864860",
  email: "pblexmann@blexmann-avocats.com",
  address: {
    street: "53 avenue Victor Hugo",
    postalCode: "75116",
    locality: "Paris",
    country: "France",
    countryCode: "FR",
  },
  barreau: "Barreau de Paris",
  /** [À CONFIRMER] TODO: identifiant d'immatriculation à valider par le cabinet.
   *  Le site existant mentionne « RCS Paris n° 489 346 007 00052 » ; les registres publics
   *  indiquent un SIREN 489 346 007 (exercice individuel, activité 6910Z) et un SIRET actif
   *  489 346 007 00060 pour le 53 avenue Victor Hugo, 75116 Paris. */
  registration: "SIREN 489 346 007",
  /** [À CONFIRMER] TODO: confirmer la date de prestation de serment (4 janvier 2006)
   *  et le numéro de toque (E0140) issus des annuaires professionnels publics. */
  oathDate: "4 janvier 2006",
  toque: "E0140",
  founded: 2013,
} as const;

/** Shared Open Graph image so inner routes inherit rich social previews. */
export const OG_IMAGE = {
  url: "/images/hero-facade.jpg",
  width: 1248,
  height: 832,
  alt: "Architecture parisienne en pierre de taille — visuel d’illustration du Cabinet Blexmann Avocats",
} as const;

/** Primary and secondary CTAs — consistent across every page. */
export const CTA = {
  primary: "Exposer ma situation",
  secondary: "Voir les domaines d'intervention",
  /** [À CONFIRMER] TODO: confirmer la possibilité de rendez-vous en visioconférence ou par téléphone. */
  call: "Appeler le cabinet",
  heroNote: "Votre demande est examinée avec discrétion, dans le respect des obligations déontologiques de l’avocat.",
} as const;

/** Top-level navigation items (Domaines exposes all 7 practice-area pages). */
export const NAV = [
  { label: "Accueil", href: "/" },
  { label: "Domaines", href: "/#expertises", hasMenu: true },
  { label: "Approche", href: "/#approche" },
  { label: "Le Cabinet", href: "/le-cabinet" },
  { label: "Publications", href: "/publications" },
  { label: "Contact", href: "/contact" },
] as const;

export const CONTACT_SUBJECTS = [
  "Litige commercial ou contractuel",
  "Conflit entre associés ou actionnaires",
  "Responsabilité des dirigeants",
  "Contentieux post-acquisition",
  "Rupture brutale ou concurrence déloyale",
  "Procédure d'urgence (référé)",
  "Litige à dimension internationale",
  /** [À CONFIRMER] TODO: intitulé « Autre litige d'entreprise » à valider avec l'avocat
   *  (remplace « Contentieux social et prud'homal »). */
  "Autre litige d'entreprise",
] as const;

export type ContactSubject = (typeof CONTACT_SUBJECTS)[number];

export type Expertise = {
  id: string;
  index: string;
  domain: string;
  /** Short navigation label for menus and footers. */
  shortLabel: string;
  /** Client-oriented headline shown in the accordion. */
  title: string;
  /** The concrete business problem. */
  problem: string;
  /** How the firm approaches the matter. */
  intervention: string;
  /** Examples of situations handled. */
  points: string[];
  /** Dedicated page URL. */
  href: string;
  /** Pre-selects the contact form subject. */
  contactSubject: ContactSubject;
};

/**
 * Seven practice areas grounded in blexmann-avocats.fr.
 * Every item links to its dedicated page with descriptive anchor text.
 */
export const EXPERTISES: Expertise[] = [
  {
    id: "commercial-contractuel",
    index: "01",
    domain: "Contentieux commercial et contractuel",
    shortLabel: "Contentieux commercial",
    title: "Un contrat inexécuté engage aussi votre trésorerie et votre activité.",
    problem:
      "Impayé persistant, livraison non conforme, prestation interrompue ou résiliation contestée : le manquement d'un partenaire pèse immédiatement sur la trésorerie et l'exploitation. Sans réaction structurée, le préjudice s'aggrave et votre position s'affaiblit.",
    intervention:
      "Qualification juridique des manquements, consolidation des pièces probantes et choix de la voie la plus pertinente : mise en demeure motivée, injonction de payer, assignation au fond ou protocole transactionnel, en demande comme en défense.",
    points: [
      "Recouvrement de créances et de factures impayées",
      "Inexécution, résolution et résiliation de contrats commerciaux",
      "Litiges fournisseurs, sous-traitance et livraisons non conformes",
    ],
    href: "/contentieux-commercial",
    contactSubject: "Litige commercial ou contractuel",
  },
  {
    id: "associes-actionnaires",
    index: "02",
    domain: "Conflits entre associés et actionnaires",
    shortLabel: "Conflits entre associés",
    title: "Quand le capital se divise, c'est l'entreprise qui se bloque.",
    problem:
      "Désaccord profond sur la gestion, délibération contestée, éviction brutale ou sortie paralysée : un conflit entre associés entrave les organes sociaux et fragilise la valeur construite par l'entreprise.",
    intervention:
      "Encadrement de la négociation lorsqu'un accord demeure envisageable, saisine des juridictions compétentes lorsque la situation l'impose et préservation du fonctionnement social jusqu'au dénouement — rééquilibrage ou séparation organisée.",
    points: [
      "Abus de majorité ou de minorité, révocation de mandataires sociaux",
      "Exclusion, retrait et cession de droits sociaux",
      "Contestation d'assemblées générales et d'actes de gestion",
    ],
    href: "/conflits-entre-associes",
    contactSubject: "Conflit entre associés ou actionnaires",
  },
  {
    id: "responsabilite-dirigeants",
    index: "03",
    domain: "Responsabilité des dirigeants",
    shortLabel: "Responsabilité des dirigeants",
    title:
      "Votre responsabilité personnelle peut être engagée. Votre défense doit être à la hauteur des enjeux.",
    problem:
      "Faute de gestion alléguée, décision sociale critiquée ou ouverture d'une procédure collective : la responsabilité civile — parfois pénale — d'un mandataire social peut être recherchée sur son patrimoine personnel, dans des délais souvent contraints.",
    intervention:
      "Examen rigoureux du fondement des griefs, préparation de la réponse dès la première notification ou assignation et conduite de la défense jusqu'à l'audience puis à l'exécution, sous le couvert du secret professionnel.",
    points: [
      "Actions en responsabilité pour faute de gestion",
      "Défense du dirigeant dans le cadre d'une procédure collective",
      "Mise en cause personnelle et protection patrimoniale",
    ],
    href: "/responsabilite-des-dirigeants",
    contactSubject: "Responsabilité des dirigeants",
  },
  {
    id: "post-acquisition",
    index: "04",
    domain: "Contentieux post-acquisition",
    shortLabel: "Contentieux post-acquisition",
    title: "Après la signature, un passif révélé peut tout remettre en question.",
    problem:
      "Garantie d'actif et de passif mise en jeu, comptes de cession discutés, complément de prix contesté ou clause de non-concurrence méconnue : les suites d'une opération donnent lieu à des litiges techniques gouvernés par la lettre des actes.",
    intervention:
      "Instruction du dossier au regard de la documentation de cession et des pièces comptables, chiffrage ou contestation du préjudice allégué et conduite de la négociation ou de la procédure stipulée au contrat.",
    points: [
      "Mise en œuvre et contestation de garanties d'actif et de passif",
      "Litiges d'ajustement de prix, de comptes et de complément de prix (earn-out)",
      "Exécution des engagements post-cession et clauses de non-concurrence",
    ],
    href: "/contentieux-post-acquisition",
    contactSubject: "Contentieux post-acquisition",
  },
  {
    id: "rupture-concurrente",
    index: "05",
    domain: "Rupture brutale et concurrence déloyale",
    shortLabel: "Rupture brutale & concurrence",
    title:
      "Rupture d’une relation d’affaires ou clientèle détournée : établir les faits et mesurer le préjudice.",
    problem:
      "Une relation commerciale interrompue sans préavis adapté, un détournement de clientèle ou des actes de dénigrement peuvent déstabiliser l’entreprise. La qualification des faits, les preuves et leurs conséquences économiques doivent être examinées ensemble.",
    intervention:
      "Évaluation du préavis exigible, constitution du dossier probatoire et chiffrage de la marge perdue en vue d'une indemnisation — ou défense de l'entreprise à laquelle une rupture ou un acte déloyal est imputé.",
    points: [
      "Rupture brutale de relations commerciales établies (art. L. 442-1 C. com.)",
      "Concurrence déloyale, dénigrement et parasitisme économique",
      "Débauchage fautif et captation de clientèle",
    ],
    href: "/rupture-brutale-concurrence-deloyale",
    contactSubject: "Rupture brutale ou concurrence déloyale",
  },
  {
    id: "urgence",
    index: "06",
    domain: "Procédures d'urgence",
    shortLabel: "Procédures d'urgence",
    title: "Certaines situations appellent une mesure juridictionnelle rapide.",
    problem:
      "Trouble manifestement illicite, preuve exposée à un risque de dépérissement, dissipation d'actifs ou créance menacée : lorsque les faits évoluent rapidement, l'attente d'un jugement au fond peut compromettre vos droits.",
    intervention:
      "Saisine du juge des référés ou dépôt de requêtes adaptées — mesures conservatoires, séquestre, mesures d'instruction in futurum, cessation d'un trouble — tout en préparant la stratégie au fond.",
    points: [
      "Référés commerciaux et civils, mesures provisoires et d'instruction in futurum",
      "Saisies conservatoires et sûretés judiciaires",
      "Exécution provisoire et préservation des éléments de preuve",
    ],
    href: "/procedures-d-urgence",
    contactSubject: "Procédure d'urgence (référé)",
  },
  {
    id: "international",
    index: "07",
    domain: "Contentieux à dimension internationale",
    shortLabel: "Contentieux international",
    title: "Un litige qui traverse les frontières exige un cadrage préalable.",
    problem:
      "Contrat soumis à un droit étranger, cocontractant établi hors de France ou décision à faire exécuter dans un autre État : la dimension internationale soulève des questions de compétence, de loi applicable et d'exequatur déterminantes pour l'issue du dossier.",
    intervention:
      "Vérification des clauses de juridiction ou d’arbitrage, détermination du droit applicable et comparaison des voies possibles, en tenant compte des pays concernés et des conditions d’exécution de la décision.",
    points: [
      "Litiges commerciaux et contractuels transfrontaliers",
      "Compétence juridictionnelle, clauses compromissoires et loi applicable",
      "Reconnaissance et exécution des jugements et sentences à l'étranger",
    ],
    href: "/contentieux-international",
    contactSubject: "Litige à dimension internationale",
  },
];

/** Homepage — « Quand faire appel à un avocat en contentieux des affaires ? » */
export const QUAND = {
  index: "02",
  eyebrow: "Quand consulter",
  title: "Quand faire appel à un avocat en contentieux des affaires ?",
  body: "Six situations reviennent fréquemment dans la vie des entreprises et de leurs dirigeants. Si l'une d'elles correspond à votre contexte, un premier examen des faits permet d'identifier les leviers disponibles.",
  items: [
    {
      title: "Une mise en demeure restée sans réponse",
      body: "Vos griefs ont été formalisés par écrit — ou vous avez reçu une mise en demeure — sans qu'un règlement amiable ne se dessine.",
    },
    {
      title: "Un partenaire qui cesse de payer ou rompt sans préavis",
      body: "Factures impayées qui s'accumulent ou relation commerciale suivie interrompue sans préavis écrit suffisant.",
    },
    {
      title: "Une décision d'associés bloquée",
      body: "Assemblée paralysée, vote empêché, défaut d'information sociale ou mésentente durable entravant la gestion.",
    },
    {
      title: "Une responsabilité de dirigeant invoquée",
      body: "Faute de gestion alléguée, notification de griefs ou action engagée contre vous en qualité de mandataire social.",
    },
    {
      title: "Un différend après une cession",
      body: "Contestation portant sur le prix, les comptes de référence ou la mise en jeu d'une garantie d'actif et de passif.",
    },
    {
      title: "Une assignation ou une ordonnance reçue",
      body: "Un acte de procédure vous a été signifié ou notifié et fait courir un délai procédural pour organiser votre défense.",
    },
  ],
  closing:
    "Plus le dossier est examiné tôt, plus les options restent ouvertes, qu'il s'agisse d'agir, de négocier ou de préserver des preuves.",
} as const;

/** Homepage — « Approche » : 3 étapes puis 4 engagements. */
export const APPROACH_INTRO = {
  index: "03",
  eyebrow: "Approche",
  title: "Un litige se traite. Une stratégie se choisit.",
  body: "Chaque dossier débute par une question concrète : quelle issue sert réellement votre entreprise ? Vos objectifs, les coûts prévisibles, les risques procéduraux, la solidité des preuves et la continuité de l'exploitation guident le choix entre voie judiciaire et règlement amiable.",
  principle:
    "Vous décidez en connaissance de cause, sur la base d'une analyse claire et motivée.",
} as const;

export const APPROACH_STEPS = [
  {
    index: "I",
    title: "Comprendre les enjeux économiques et opérationnels",
    body: "Analyse préalable de votre activité, de vos contraintes et de ce que le différend expose concrètement : trésorerie, gouvernance, partenaires commerciaux et continuité d'exploitation.",
  },
  {
    index: "II",
    title: "Définir la voie juridique adaptée",
    body: "Action au fond, référé, négociation, médiation, conciliation ou arbitrage : chaque option est évaluée au regard des pièces disponibles, des aléas procéduraux, des délais et des coûts.",
  },
  {
    index: "III",
    title: "Défendre vos intérêts à chaque étape",
    body: "De la mise en demeure jusqu'à l'exécution de la décision ou à la signature d'un protocole transactionnel, chaque échéance est préparée et chaque acte vous est expliqué.",
  },
] as const;

export type WhyCommitment = {
  index: string;
  title: string;
  body: string;
  detail?: string;
};

export const WHY: {
  eyebrow: string;
  title: string;
  commitments: readonly WhyCommitment[];
  closing: string;
  cta: string;
} = {
  eyebrow: "Pourquoi le cabinet",
  title: "Quatre engagements dans la conduite de votre dossier",
  commitments: [
    {
      index: "01",
      title: "Implication directe",
      body: "Un dossier examiné au regard de ses faits, de ses pièces et de son calendrier.",
      /** [À CONFIRMER] TODO: valider avec Maître Blexmann la formulation exacte sur l'implication
       *  directe « de la première consultation à l'audience » avant de la publier telle quelle. */
      detail:
        "La relation avec le cabinet repose sur des échanges directs avec Maître Blexmann et une compréhension précise de votre situation.",
    },
    {
      index: "02",
      title: "Pragmatisme économique",
      body: "Les voies judiciaires et amiables mises en balance avant d’engager un procès.",
      detail:
        "Un contentieux mobilise du temps et des ressources : chaque option est appréciée selon son coût, ses aléas et son utilité réelle pour l’entreprise.",
    },
    {
      index: "03",
      title: "Transparence",
      body: "Une information lisible sur l’avancement, les risques et les conditions d’intervention.",
      detail:
        "Mise en demeure, assignation, négociation, audience ou exécution : les choix procéduraux sont exposés clairement, sans jargon inutile.",
    },
    {
      index: "04",
      title: "Un périmètre clair, un regard international",
      body: "Établi à Paris 16ᵉ, le cabinet intervient devant les juridictions françaises. Lorsqu’un litige comporte un élément d’extranéité (partie étrangère, contrat international, exécution à l’étranger), la juridiction compétente, la loi applicable et l’exécution de la décision sont analysées dès le départ.",
    },
  ],
  /** [À CONFIRMER] TODO: modalités détaillées d'honoraires (convention écrite, temps passé,
   *  forfait, honoraire de résultat éventuel) à confirmer avec l'avocat. */
  closing: "Les modalités d’honoraires sont présentées avant toute intervention.",
  cta: CTA.primary,
};

export const CABINET_FACTS = [
  { label: "Barreau", value: "Barreau de Paris" },
  { label: "Fondation", value: "Cabinet créé en 2013" },
  { label: "Adresse", value: "53 avenue Victor Hugo, 75116 Paris" },
  { label: "Exercice", value: "Individuel — conseil et contentieux" },
] as const;

export const CONTACT = {
  index: "06",
  eyebrow: "Contact",
  title: "Commençons par les faits.",
  pageH1: "Contacter le Cabinet Blexmann Avocats",
  body: "Exposez brièvement le différend, les parties concernées et les échéances connues. Le formulaire prépare un courriel dans votre propre messagerie ; vous en vérifiez le contenu et décidez de l’envoyer. Après réception, le cabinet vous indique les suites envisageables.",
  formNote:
    "Votre demande est préparée dans votre messagerie électronique, puis adressée au cabinet ; aucune donnée n’est conservée sur ce site. L’envoi d’une demande ne crée pas, en soi, de relation avocat-client : celle-ci suppose l’acceptation expresse du dossier par le cabinet, après vérification notamment de l’absence de conflit d’intérêts.",
  /** [À CONFIRMER] TODO: liste des natures de dossier à valider avec l'avocat. */
  subjects: CONTACT_SUBJECTS,
} as const;
