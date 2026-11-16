/**
 * Single source of truth for editorial content and factual data.
 *
 * Sources: blexmann-avocats.fr (accueil, mentions légales), registres publics
 * (INSEE / Barreau de Paris) et publications externes vérifiées.
 *
 * [À CONFIRMER] items are kept as TODO comments in this file and MUST be
 * validated by Maître Blexmann before publication (see QA report).
 */

export const SITE = {
  name: "Cabinet Blexmann Avocats",
  wordmark: "Blexmann",
  wordmarkSuffix: "Avocat",
  legalName: "Cabinet Blexmann Avocats",
  domain: "blexmann-avocats.fr",
  url: "https://blexmann-avocats.fr",
  tagline: "Contentieux des affaires",
  phone: "+33 (0)1 89 86 48 60",
  phoneHref: "tel:+33189864860",
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
   *  Le site actuel affiche « RCS Paris n° 489 346 007 00052 » ; les registres publics
   *  indiquent un SIREN 489 346 007 (exercice individuel, activité 6910Z) et un SIRET
   *  de siège social 489 346 007 00060 pour le 53 avenue Victor Hugo. */
  registration: "SIREN 489 346 007",
  /** [À CONFIRMER] TODO: date de prestation de serment et numéro de toque à valider. */
  oathDate: "4 janvier 2006",
  toque: "E0140",
  founded: 2013,
} as const;

/** Primary and secondary CTAs — used consistently across the whole site. */
export const CTA = {
  primary: "Exposer ma situation",
  secondary: "Découvrir nos expertises",
  /** [À CONFIRMER] TODO: disponibilité des rendez-vous par visioconférence/téléphone. */
  call: "Appeler le cabinet",
  heroNote: "Premier échange confidentiel. Quelques lignes sur les faits suffisent.",
} as const;

/** Navigation — homepage sections and dedicated inner pages. */
export const NAV = [
  { label: "Accueil", href: "/" },
  { label: "Contentieux commercial", href: "/contentieux-commercial" },
  { label: "Conflits entre associés", href: "/conflits-entre-associes" },
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
  /** [À CONFIRMER] TODO: intitulé à valider avec l'avocat (remplace « Contentieux social et prud'homal »). */
  "Autre litige d'entreprise",
] as const;

export type ContactSubject = (typeof CONTACT_SUBJECTS)[number];

export type Expertise = {
  id: string;
  index: string;
  domain: string;
  /** Client-oriented headline shown in the accordion. */
  title: string;
  /** The real business problem. */
  problem: string;
  /** How the firm can assist. */
  intervention: string;
  /** Examples of situations handled. */
  points: string[];
  /** Deep-link to the dedicated page. */
  href: string;
  /** Pre-selects the contact form subject. */
  contactSubject: ContactSubject;
};

/**
 * Practice areas — grounded in blexmann-avocats.fr. Each card links to its
 * dedicated page with descriptive anchor text.
 */
export const EXPERTISES: Expertise[] = [
  {
    id: "commercial-contractuel",
    index: "01",
    domain: "Contentieux commercial et contractuel",
    title: "Un contrat inexécuté coûte bien plus que son montant.",
    problem:
      "Impayé durable, livraison non conforme, prestation interrompue ou résiliation contestée : le manquement d'un partenaire pèse immédiatement sur la trésorerie et l'exploitation. Sans réponse structurée, le préjudice s'installe et le rapport de force se dégrade.",
    intervention:
      "Qualification des droits, consolidation des pièces et choix de la voie la plus adaptée : mise en demeure motivée, injonction de payer, assignation ou négociation encadrée, en demande comme en défense.",
    points: [
      "Recouvrement de créances et de factures impayées",
      "Inexécution, résolution et résiliation de contrats",
      "Litiges fournisseurs, sous-traitance et livraisons défectueuses",
    ],
    href: "/contentieux-commercial",
    contactSubject: "Litige commercial ou contractuel",
  },
  {
    id: "associes-actionnaires",
    index: "02",
    domain: "Conflits entre associés et actionnaires",
    title: "Quand le capital se divise, c'est l'entreprise qui se bloque.",
    problem:
      "Désaccord profond sur la gestion, décision contestée, éviction brutale ou sortie bloquée : un conflit entre associés paralyse la gouvernance et fragilise la valeur construite par l'entreprise, parfois en quelques mois.",
    intervention:
      "Cadre de la négociation lorsqu'un accord demeure envisageable, portée du différend devant les tribunaux lorsque la situation l'exige, et sécurisation de la continuité de la société jusqu'au dénouement.",
    points: [
      "Abus de majorité ou de minorité, révocation de mandataires",
      "Exclusion, retrait et cession de droits sociaux",
      "Contestation d'assemblées et de décisions de gestion",
    ],
    href: "/conflits-entre-associes",
    contactSubject: "Conflit entre associés ou actionnaires",
  },
  {
    id: "responsabilite-dirigeants",
    index: "03",
    domain: "Responsabilité des dirigeants",
    title:
      "Votre responsabilité personnelle peut être engagée. Votre défense doit être à la hauteur des enjeux.",
    problem:
      "Faute de gestion alléguée, décision sociale contestée ou procédure collective : la responsabilité civile — parfois pénale — d'un dirigeant peut être recherchée sur son patrimoine personnel, souvent dans des délais procéduraux serrés.",
    intervention:
      "Analyse du fondement juridique des griefs, préparation de la réponse dès la première notification ou assignation, puis défense jusqu'à l'audience et à l'exécution, dans le respect du secret professionnel.",
    points: [
      "Actions en responsabilité pour faute de gestion",
      "Défense du dirigeant dans le cadre d'une procédure collective",
      "Mise en cause personnelle et enjeux patrimoniaux",
    ],
    href: "/responsabilite-des-dirigeants",
    contactSubject: "Responsabilité des dirigeants",
  },
  {
    id: "post-acquisition",
    index: "04",
    domain: "Contentieux post-acquisition",
    title: "Après la signature, un passif caché peut tout remettre en jeu.",
    problem:
      "Garantie d'actif et de passif mise en œuvre, comptes discutés, complément de prix contesté ou clause de non-concurrence méconnue : les suites d'une cession donnent lieu à des différends techniques où la rédaction des actes commande l'analyse.",
    intervention:
      "Instruction du dossier à partir des actes de cession et des pièces comptables, évaluation du préjudice allégué ou subi, puis conduite de la négociation ou de la procédure prévue au contrat.",
    points: [
      "Mise en œuvre et contestation de garanties d'actif et de passif",
      "Litiges de prix, d'ajustement comptable et d'earn-out",
      "Exécution des engagements post-cession et non-concurrence",
    ],
    href: "/contentieux-post-acquisition",
    contactSubject: "Contentieux post-acquisition",
  },
  {
    id: "rupture-concurrente",
    index: "05",
    domain: "Rupture brutale et concurrence déloyale",
    title:
      "Un partenaire écarté sans préavis, une clientèle détournée : cela se chiffre et se répare.",
    problem:
      "Une relation commerciale ancienne interrompue sans préavis écrit suffisant, un concurrent qui capte votre clientèle ou désorganise votre activité : ces agissements engagent la responsabilité de leur auteur dès lors que les preuves sont réunies à temps.",
    intervention:
      "Appréciation de la durée de préavis exigible, documentation des faits et du préjudice économique, puis action en réparation — ou défense de l'entreprise à laquelle une rupture ou un acte déloyal est reproché.",
    points: [
      "Rupture brutale de relations commerciales établies (art. L. 442-1 C. com.)",
      "Concurrence déloyale, dénigrement et parasitisme",
      "Débauchage fautif et détournement de clientèle",
    ],
    href: "/rupture-brutale-concurrence-deloyale",
    contactSubject: "Rupture brutale ou concurrence déloyale",
  },
  {
    id: "urgence",
    index: "06",
    domain: "Procédures d'urgence",
    title: "Certaines situations ne souffrent aucun délai.",
    problem:
      "Trouble manifestement illicite, preuve menacée de disparition, actifs en voie de dissipation ou créance en péril : lorsque la situation évolue vite, attendre une procédure au fond expose à un préjudice difficilement réversible.",
    intervention:
      "Engagement des référés et requêtes appropriés — mesure conservatoire, séquestre, mesure d'instruction, cessation d'un trouble — tout en structurant la défense au fond.",
    points: [
      "Référés, mesures provisoires et d'instruction in futurum",
      "Saisies et mesures conservatoires",
      "Exécution provisoire et préservation des preuves",
    ],
    href: "/procedures-d-urgence",
    contactSubject: "Procédure d'urgence (référé)",
  },
  {
    id: "international",
    index: "07",
    domain: "Contentieux à dimension internationale",
    title: "Un litige qui traverse les frontières ne s'improvise pas.",
    problem:
      "Contrat régi par un droit étranger, contrepartie établie hors de France ou décision à faire exécuter à l'étranger : la dimension transfrontalière soulève des enjeux de compétence, de loi applicable et d'exécution qui pèsent directement sur l'issue.",
    intervention:
      "Analyse des règles de compétence et de loi applicable, coordination des écritures et, lorsque le différend dépasse les frontières, mise en relation avec des avocats exerçant dans les juridictions concernées.",
    points: [
      "Litiges commerciaux et contractuels internationaux",
      "Compétence juridictionnelle et loi applicable",
      "Exécution des décisions et sentences à l'étranger",
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
  body: "Six situations reviennent régulièrement dans les dossiers d'entreprises et de dirigeants. Si l'une d'elles correspond à la vôtre, un examen rapide du dossier permet de clarifier les options.",
  items: [
    {
      title: "Une mise en demeure restée sans réponse",
      body: "Votre adversaire a formalisé ses griefs par écrit et aucun échange n'a permis de clore le désaccord.",
    },
    {
      title: "Un partenaire qui cesse de payer ou rompt sans préavis",
      body: "Factures impayées qui s'accumulent, ou relation commerciale ancienne interrompue sans préavis écrit suffisant.",
    },
    {
      title: "Une décision d'associés bloquée",
      body: "Assemblée qui ne se tient pas, vote empêché, ou gestion devenue impossible à cause d'un désaccord durable.",
    },
    {
      title: "Une responsabilité de dirigeant invoquée",
      body: "Faute de gestion alléguée, notification de griefs ou action dirigée contre vous en votre qualité de mandataire.",
    },
    {
      title: "Un différend après une cession",
      body: "Discussion sur le prix, sur les comptes ou mise en œuvre d'une garantie d'actif et de passif après la signature.",
    },
    {
      title: "Une assignation ou une ordonnance reçue",
      body: "Un acte de procédure vous a été signifié et un délai court à compter de sa notification.",
    },
  ],
  closing:
    "Plus le dossier est examiné tôt, plus les options restent ouvertes, qu'il s'agisse d'agir, de négocier ou de préserver des preuves.",
} as const;

/** Homepage — « Approche » : 3 étapes puis 4 cartes. */
export const APPROACH_INTRO = {
  index: "03",
  eyebrow: "Approche",
  title: "Un litige se traite. Une stratégie se choisit.",
  body: "Chaque dossier commence par une question concrète : quelle issue sert réellement votre entreprise ? Vos objectifs, les coûts, les risques procéduraux, l'état des preuves et la continuité de votre activité déterminent la voie retenue — judiciaire ou amiable.",
  principle:
    "Vous décidez en connaissance de cause, sur la base d'une analyse claire et motivée.",
} as const;

export const APPROACH_STEPS = [
  {
    index: "I",
    title: "Comprendre les enjeux économiques et opérationnels",
    body: "Avant d'engager une action, analyse de votre activité, de vos contraintes et de ce que le différend expose : trésorerie, gouvernance, partenaires clés, continuité d'exploitation.",
  },
  {
    index: "II",
    title: "Définir la voie juridique adaptée",
    body: "Action au fond, référé, négociation, médiation ou arbitrage : chaque option est comparée au regard des éléments de preuve disponibles, des risques procéduraux et des coûts prévisibles.",
  },
  {
    index: "III",
    title: "Défendre vos intérêts à chaque étape",
    body: "De la mise en demeure jusqu'à l'exécution de la décision ou la signature d'un protocole transactionnel, chaque échéance est anticipée et chaque acte vous est expliqué.",
  },
] as const;

export const WHY = {
  eyebrow: "Pourquoi ce cabinet",
  title: "Quatre engagements pour la conduite de votre dossier",
  commitments: [
    {
      index: "01",
      title: "Implication directe",
      body: "Un interlocuteur constant qui maîtrise les pièces et le calendrier.",
      /** [À CONFIRMER] TODO: préciser l'étendue de l'implication (de la première consultation à l'audience) avant de publier cette formulation. */
      detail:
        "L'avocat qui analyse votre dossier en assure le suivi et la défense, de la première consultation à l'audience.",
    },
    {
      index: "02",
      title: "Pragmatisme économique",
      body: "Les voies judiciaires et amiables comparées avant d'engager une procédure.",
      detail:
        "Un contentieux mobilise du temps et des ressources : chaque option est mise en balance avec son coût, ses délais et son utilité pour votre activité.",
    },
    {
      index: "03",
      title: "Transparence",
      body: "Une information claire à chaque étape de la procédure.",
      detail:
        "Mise en demeure, assignation, négociation, audience ou exécution : vous êtes informé de l'avancement, des risques identifiés et des conditions d'intervention.",
    },
    {
      index: "04",
      title: "Coordination nationale et internationale",
      body: "Paris 16ᵉ, avec des relations professionnelles à l'étranger lorsque le dossier l'exige.",
      /** [À CONFIRMER] TODO: valider l'existence et l'étendue du réseau de correspondants avant publication. */
      detail:
        "Le cabinet exerce devant les juridictions françaises et s'appuie, pour les litiges transfrontaliers, sur un réseau d'avocats correspondants en France et à l'étranger.",
    },
  ],
  closing:
    "Les modalités d'honoraires sont présentées avant toute intervention.",
  /** [À CONFIRMER] TODO: page « Honoraires » à créer/valider avec l'avocat. */
  cta: CTA.primary,
} as const;

/** Homepage — bandeau de conversion avant le formulaire. */
export const CONVERSION = {
  eyebrow: "Premier échange",
  title: "Un enjeu juridique mérite une réponse adaptée.",
  body: "Litige commercial, blocage entre associés ou échéance procédurale : quelques lignes sur les faits et les parties concernées suffisent pour engager un premier examen confidentiel avec le cabinet.",
  cta: CTA.primary,
} as const;

export const CONTACT = {
  eyebrow: "Contact",
  title: "Commençons par les faits.",
  body: "Quelques lignes suffisent pour engager un premier échange : le contexte du différend, les parties concernées et vos éventuelles échéances procédurales. Après réception de votre demande, le cabinet en prend connaissance et vous indique les suites envisageables.",
  formNote:
    "L'envoi de ce formulaire ne crée pas, en soi, de relation avocat-client : celle-ci suppose l'acceptation expresse du dossier par le cabinet, après vérification notamment de l'absence de conflit d'intérêts.",
  /** [À CONFIRMER] TODO: liste des objets à valider avec l'avocat. */
  subjects: CONTACT_SUBJECTS,
} as const;

export const FOOTER = {
  disclaimer:
    "Les informations diffusées sur ce site ont un caractère strictement général et informatif : elles ne constituent ni une consultation juridique ni un conseil personnalisé, et leur lecture ne crée aucune relation avocat-client.",
} as const;
