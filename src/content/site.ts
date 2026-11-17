/**
 * Single source of truth for all editorial content and client data — Blexmann Avocats.
 *
 * Unified editorial voice:
 * - Strict institutional third-person singular ("Le cabinet" / "Blexmann Avocats").
 * - No mixing of "nous", "je", and "il".
 *
 * TODO: Verify with lawyer: Phone, Toque number, SIREN, Founding year 2013, and replace 2020 labor law articles with recent commercial litigation articles.
 */

export const SITE = {
  name: "Blexmann Avocats",
  wordmark: "Blexmann",
  wordmarkSuffix: "Avocats",
  legalName: "Blexmann Avocats",
  domain: "blexmann-avocats.fr",
  url: "https://blexmann-avocats.fr",
  tagline: "Contentieux des affaires",
  // TODO: Verify with lawyer: Phone (+33 (0)1 89 86 48 60)
  phone: "+33 (0)1 89 86 48 60",
  phoneE164: "+33189864860",
  phoneHref: "tel:+33189864860",
  email: "pblexmann@blexmann-avocats.com",
  address: {
    street: "53 avenue Victor Hugo",
    postalCode: "75116",
    locality: "Paris",
    arrondissement: "Paris 16ᵉ",
    country: "France",
    countryCode: "FR",
  },
  barreau: "Barreau de Paris",
  // TODO: Verify with lawyer: SIREN (489 346 007) and exact active SIRET
  siren: "SIREN 489 346 007",
  // TODO: Verify with lawyer: Oath date (4 janvier 2006) and Toque number (E0140)
  oathDate: "4 janvier 2006",
  toque: "E0140",
  // TODO: Verify with lawyer: Founding year 2013
  founded: 2013,
  heroQuote:
    "Anticiper le risque judiciaire et défendre vos intérêts commerciaux avec méthode et réactivité.",
  confidentialityNotice:
    "Votre demande est traitée avec discrétion et dans le respect du secret professionnel.",
  appointmentOptions: ["Au cabinet (Paris)", "En visioconférence", "Par téléphone"] as const,
  linkedin: null as string | null,
} as const;

export const CTA = {
  primary: "Exposer ma situation",
  secondary: "Voir les domaines d’intervention",
  submitMailto: "Préparer ma demande",
} as const;

/**
 * Primary navigation — zero conflict between in-page section anchors and standalone routes.
 * Contact is served by a single unambiguous destination per page context (#contact on homepage,
 * /contact on inner pages).
 */
export const NAV = [
  { label: "Accueil", href: "/" },
  { label: "Expertises", href: "/#expertises" },
  { label: "Approche", href: "/#approche" },
  { label: "Le Cabinet", href: "/le-cabinet" },
  { label: "Publications", href: "/publications" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const CONTACT_SUBJECTS = [
  "Contentieux commercial et contractuel",
  "Conflits entre associés ou actionnaires",
  "Responsabilité des dirigeants",
  "Contentieux post-acquisition",
  "Rupture brutale ou concurrence déloyale",
  "Procédure d'urgence",
  "Contentieux international",
  "Autre litige d'entreprise",
] as const;

export type ContactSubject = (typeof CONTACT_SUBJECTS)[number];

export type Expertise = {
  id: string;
  index: string;
  domain: string;
  title: string;
  problem: string;
  intervention: string;
  points: string[];
  cta: string;
  contactSubject: ContactSubject;
  /** Dedicated page route for this practice area. */
  href: string;
  /** Descriptive link text toward the dedicated page. */
  pageLinkText: string;
};

/**
 * Seven core practice areas — consistent institutional third-person voice ("Le cabinet").
 */
export const EXPERTISES: Expertise[] = [
  {
    id: "commercial-contractuel",
    index: "01",
    domain: "Contentieux commercial et contractuel",
    title: "Un contrat inexécuté coûte bien plus que son montant.",
    problem:
      "Impayé durable, livraison non conforme, prestation interrompue ou résiliation contestée : le manquement d’un partenaire pèse immédiatement sur la trésorerie et l’exploitation. Sans réaction structurée, le préjudice s’aggrave et la position contractuelle se fragilise.",
    intervention:
      "Le cabinet qualifie les droits en présence, consolide les pièces probantes et engage la voie la plus adaptée — mise en demeure motivée, injonction de payer, référé-provision, assignation au fond ou négociation encadrée — en demande comme en défense devant les juridictions commerciales et civiles.",
    points: [
      "Recouvrement de créances et de factures impayées",
      "Inexécution, résolution et résiliation de contrats commerciaux",
      "Litiges fournisseurs, sous-traitance et prestations non conformes",
    ],
    cta: "Exposer un litige commercial",
    contactSubject: "Contentieux commercial et contractuel",
    href: "/contentieux-commercial",
    pageLinkText: "Consulter la page sur les litiges commerciaux à Paris",
  },
  {
    id: "associes-actionnaires",
    index: "02",
    domain: "Conflits entre associés et actionnaires",
    title: "Quand le capital se divise, c’est l’entreprise qui se bloque.",
    problem:
      "Désaccord persistant sur la gestion, décision sociale contestée, éviction ou sortie bloquée : un conflit entre associés paralyse la gouvernance et entame rapidement la valeur de la société ainsi que la confiance de ses partenaires.",
    intervention:
      "Le cabinet examine les statuts et pactes applicables, encadre la négociation lorsqu’un accord demeure envisageable, ou saisit la juridiction compétente lorsque la situation l’exige, en veillant à préserver le fonctionnement de la société jusqu’au dénouement.",
    points: [
      "Abus de majorité ou de minorité, révocation de mandataires sociaux",
      "Exclusion statutaire, retrait et cession de droits sociaux",
      "Contestation d’assemblées générales et désignation d’un mandataire",
    ],
    cta: "Exposer un conflit entre associés",
    contactSubject: "Conflits entre associés ou actionnaires",
    href: "/conflits-entre-associes",
    pageLinkText: "Consulter la page sur les conflits entre associés",
  },
  {
    id: "responsabilite-dirigeants",
    index: "03",
    domain: "Responsabilité des dirigeants",
    title:
      "Votre responsabilité personnelle peut être engagée. Votre défense doit être à la hauteur des enjeux.",
    problem:
      "Faute de gestion alléguée, violation statutaire reprochée ou action liée à une procédure collective : la responsabilité d’un dirigeant peut être recherchée sur son patrimoine personnel, souvent dans un calendrier procédural contraint.",
    intervention:
      "Le cabinet analyse le fondement exact de chaque grief, réunit les éléments justifiant les décisions de gestion et structure la défense dès la première mise en demeure ou assignation, dans le respect du secret professionnel et des règles relatives aux conflits d’intérêts.",
    points: [
      "Actions en responsabilité civile pour faute de gestion",
      "Défense du dirigeant dans le cadre d’une procédure collective",
      "Mise en cause personnelle, révocation et enjeux patrimoniaux",
    ],
    cta: "Exposer une mise en cause de dirigeant",
    contactSubject: "Responsabilité des dirigeants",
    href: "/responsabilite-des-dirigeants",
    pageLinkText: "Consulter la page sur la responsabilité des dirigeants",
  },
  {
    id: "post-acquisition",
    index: "04",
    domain: "Contentieux post-acquisition",
    title: "Après la signature, un passif révélé peut remettre l’équilibre en cause.",
    problem:
      "Garantie d’actif et de passif appelée, comptes de cession discutés, complément de prix (earn-out) contesté ou clause de non-concurrence méconnue : les suites d’une opération de cession font naître des différends techniques où le formalisme contractuel est déterminant.",
    intervention:
      "Le cabinet audite les actes de cession, les délais de notification et les pièces comptables, évalue le préjudice invoqué ou subi, et conduit la négociation ou la procédure prévue au contrat — juridiction étatique, référé ou arbitrage.",
    points: [
      "Mise en œuvre et contestation de garanties d’actif et de passif",
      "Litiges d’ajustement de prix, de comptes de référence et d’earn-out",
      "Inexécution des engagements post-cession et clauses de non-concurrence",
    ],
    cta: "Exposer un différend post-acquisition",
    contactSubject: "Contentieux post-acquisition",
    href: "/contentieux-post-acquisition",
    pageLinkText: "Consulter la page sur le contentieux post-acquisition",
  },
  {
    id: "rupture-concurrente",
    index: "05",
    domain: "Rupture brutale et concurrence déloyale",
    title:
      "Un partenaire écarté sans préavis, une clientèle détournée : cela se démontre et se chiffre.",
    problem:
      "Relation commerciale établie interrompue sans préavis écrit suffisant, dénigrement, désorganisation ou détournement de clientèle : ces pratiques pèsent directement sur la marge et la part de marché de l’entreprise qui les subit — ou exposent celle qui est mise en cause.",
    intervention:
      "Le cabinet évalue la durée de préavis exigible, rassemble les preuves factuelles et comptables du préjudice, et engage l’action en réparation devant les juridictions compétentes — ou assure la défense de l’entreprise assignée.",
    points: [
      "Rupture brutale de relations commerciales établies (art. L. 442-1, II C. com.)",
      "Concurrence déloyale, dénigrement et parasitisme (art. 1240 C. civ.)",
      "Débauchage désorganisateur et captation fautive de clientèle",
    ],
    cta: "Exposer un litige de rupture ou concurrence",
    contactSubject: "Rupture brutale ou concurrence déloyale",
    href: "/rupture-brutale-concurrence-deloyale",
    pageLinkText: "Consulter la page sur la rupture brutale et la concurrence déloyale",
  },
  {
    id: "urgence",
    index: "06",
    domain: "Procédures d'urgence",
    title: "Lorsque la preuve ou la trésorerie est menacée, le choix procédural est décisif.",
    problem:
      "Trouble manifestement illicite, éléments de preuve risquant de disparaître, actifs en voie de dissipation ou créance incontestable impayée : attendre l’issue d’une instance au fond peut priver une décision future de son utilité pratique.",
    intervention:
      "Le cabinet vérifie les conditions de recevabilité et engage les référés ou requêtes appropriés — provision, cessation de trouble, mesure d’instruction in futurum (art. 145 CPC), saisie conservatoire — tout en préparant la suite éventuelle au fond.",
    points: [
      "Référé-provision, dommage imminent et trouble manifestement illicite",
      "Mesures d’instruction in futurum et préservation des preuves",
      "Saisies et sûretés conservatoires sur autorisation judiciaire",
    ],
    cta: "Exposer une situation procédurale urgente",
    contactSubject: "Procédure d'urgence",
    href: "/procedures-d-urgence",
    pageLinkText: "Consulter la page sur le référé et les procédures d’urgence",
  },
  {
    id: "international",
    index: "07",
    domain: "Contentieux à dimension internationale",
    title: "Un litige transfrontalier exige de sécuriser d’abord le juge et la loi applicables.",
    problem:
      "Contrat international, cocontractant établi hors de France ou décision à faire exécuter dans un autre État : l’élément d’extranéité ajoute au litige commercial des questions préalables de compétence, de droit applicable et d’exécution effective.",
    intervention:
      "Le cabinet représente ses clients devant les juridictions françaises et analyse dès l’origine les enjeux transfrontaliers — clauses attributives de juridiction ou d’arbitrage, loi applicable et perspectives d’exécution — pour orienter le dossier vers la voie la plus pertinente.",
    points: [
      "Litiges contractuels et commerciaux comportant un élément d’extranéité",
      "Détermination de la juridiction compétente et de la loi applicable",
      "Reconnaissance, exequatur et exécution des décisions ou sentences",
    ],
    cta: "Exposer un litige international",
    contactSubject: "Contentieux international",
    href: "/contentieux-international",
    pageLinkText: "Consulter la page sur le contentieux commercial international",
  },
];

export const APPROACH_INTRO = {
  title: "Un litige se traite. Une stratégie se choisit.",
  body: "Chaque dossier commence par une question concrète : quelle issue sert réellement l’entreprise ? Les objectifs poursuivis, les coûts prévisibles, les risques procéduraux, l’état des preuves et la continuité de l’exploitation déterminent la voie retenue — judiciaire ou amiable — et non l’inverse.",
  principle:
    "Vous décidez en connaissance de cause, sur la base d’une analyse claire et motivée.",
} as const;

export const APPROACH = [
  {
    index: "I",
    title: "Comprendre les enjeux économiques et opérationnels",
    body: "Un contentieux d’affaires ne se lit jamais hors contexte. Avant toute initiative, le cabinet examine l’activité de l’entreprise, ses contraintes, ses échéances et ce que le différend expose concrètement : trésorerie, gouvernance, partenaires clés ou continuité d’exploitation.",
  },
  {
    index: "II",
    title: "Définir la stratégie juridique adaptée",
    body: "Mise en demeure, référé, action au fond, négociation, médiation ou arbitrage : le cabinet compare chaque option au regard de la solidité des preuves, des aléas procéduraux, des délais prévisibles et du coût global pour l’entreprise.",
  },
  {
    index: "III",
    title: "Défendre vos intérêts à chaque étape",
    body: "De la première notification jusqu’à la signature d’un protocole transactionnel ou à l’exécution de la décision, le cabinet anticipe les échéances et explique chaque acte en amont afin de protéger la marche de l’entreprise pendant le litige.",
  },
] as const;

export const MARD = {
  kicker: "Juridictions étatiques & modes alternatifs",
  title: "Choisir la voie, pas seulement la procédure.",
  body: "Le cabinet intervient devant les juridictions étatiques françaises comme dans le cadre des modes alternatifs de règlement des différends — négociation, médiation, conciliation et arbitrage. Cette double pratique permet d’orienter le dossier selon l’objectif prioritaire : obtenir un titre exécutoire, préserver une relation d’affaires ou encadrer une issue amiable par un protocole confidentiel.",
} as const;

export const WHY = {
  eyebrow: "Engagements du cabinet",
  title: "Pourquoi confier votre contentieux à Blexmann Avocats ?",
  body: "Parce qu’un litige d’affaires ne se joue pas uniquement à l’audience : sa préparation et sa conduite sont déterminantes. Quatre engagements structurent le traitement de chaque dossier, du premier diagnostic jusqu’à son dénouement.",
  commitments: [
    {
      index: "01",
      title: "Implication directe",
      body: "Le cabinet assure un suivi personnel et continu de chaque dossier. Vous échangez avec un interlocuteur unique, qui maîtrise les pièces, le calendrier et les arbitrages successifs de la procédure.",
    },
    {
      index: "02",
      title: "Pragmatisme économique",
      body: "Une procédure mobilise du temps, de la trésorerie et l’attention des dirigeants. Avant d’assigner, le cabinet met en balance les voies judiciaires et amiables selon leur coût, leurs risques et leur intérêt réel pour l’activité.",
    },
    {
      index: "03",
      title: "Transparence",
      body: "À chaque étape — mise en demeure, assignation, pourparlers, audience ou exécution — le cabinet délivre une information lisible sur l’état du dossier, les risques identifiés et les modalités d’honoraires convenues.",
    },
    {
      index: "04",
      title: "Un périmètre clair, un regard international",
      body: "Établi à Paris 16ᵉ, le cabinet représente ses clients devant les juridictions françaises tout en traitant les enjeux transfrontaliers. Lorsqu’un litige comporte un élément d’extranéité (partie étrangère, contrat international, exécution à l’étranger), la juridiction compétente, la loi applicable et les conditions d’exécution sont analysées dès le départ.",
    },
  ],
  closing: "Une conduite de dossier lisible, fondée sur les pièces et l’intérêt économique du client.",
  cta: CTA.primary,
} as const;

export const ABOUT = {
  eyebrow: "Fondateur — Blexmann Avocats",
  name: "Maître Pierre Blexmann",
  role: "Avocat au Barreau de Paris",
  lead: "Dirigeants, associés et entreprises confrontés à des litiges commerciaux : le cabinet consacre sa pratique aux différends qui engagent la trésorerie, la gouvernance et la continuité de l’activité.",
  paragraphs: [
    "Fondé en 2013 par Maître Pierre Blexmann au 53 avenue Victor Hugo (Paris 16ᵉ), Blexmann Avocats applique une ligne constante : chaque dossier est conduit avec méthode — diagnostic précis, choix assumés, calendrier maîtrisé.",
    "Le cabinet accompagne dirigeants, associés et entreprises confrontés à des litiges commerciaux, contractuels, sociétaires ou comportant une dimension internationale, devant les juridictions françaises ainsi que dans le cadre de négociations, médiations, conciliations et arbitrages.",
    "La relation nouée par le cabinet repose sur l’écoute, l’examen rigoureux des faits et la clarté des échanges, dans le respect des règles déontologiques et du secret professionnel. Des contributions juridiques signées par Maître Pierre Blexmann ont par ailleurs été publiées sur la revue Village de la Justice.",
  ],
  /** Concise facts for the homepage Cabinet section (avoids repeating Barreau/Toque next to Hero & Footer). */
  homeFacts: [
    { label: "Fondation", value: "2013 — exercice individuel" },
    { label: "Adresse", value: "53 avenue Victor Hugo, 75116 Paris" },
    { label: "Pratique", value: "Contentieux des affaires et modes amiables" },
    { label: "Consultations", value: "Au cabinet (Paris), visioconférence, téléphone" },
  ],
  /** Full profile facts for the dedicated /le-cabinet page. */
  facts: [
    { label: "Fondation du cabinet", value: "2013 — exercice individuel" },
    { label: "Prestation de serment", value: "4 janvier 2006" },
    { label: "Adresse", value: "53 avenue Victor Hugo, 75116 Paris" },
    { label: "Pratique", value: "Contentieux des affaires et modes amiables" },
    { label: "Consultations", value: "Au cabinet (Paris), en visioconférence ou par téléphone" },
  ],
} as const;

export const NEWS = {
  eyebrow: "Publications",
  title: "Publications externes.",
  body: "Cette rubrique réunit des contributions publiées à titre externe par Maître Pierre Blexmann sur la revue juridique Village de la Justice. Rédigées en 2020 sur le régime de la preuve en droit du travail, ces publications antérieures sont présentées à titre documentaire, l’activité principale de Blexmann Avocats étant dédiée au contentieux des affaires.",
} as const;

/**
 * Five SEO-optimized homepage FAQ entries covering commercial litigation in Paris.
 */
export const HOME_FAQS = [
  {
    q: "Quels sont les délais et le coût d’une procédure d’injonction de payer ?",
    a: "La requête en injonction de payer est déposée sans frais de greffe élevés pour les créances commerciales certaines, liquides et exigibles ; s’y ajoutent les honoraires de rédaction convenus avec le cabinet et les frais de commissaire de justice pour signifier l’ordonnance. Les délais varient selon la juridiction saisie et la complétude des pièces justificatives ; à compter de la signification, le débiteur dispose d’un délai légal d’un mois pour former opposition, ce qui ouvre alors un débat contradictoire devant le tribunal.",
  },
  {
    q: "Comment agir face à un associé qui bloque les décisions de l’entreprise ?",
    a: "Le cabinet examine en priorité les statuts, le pacte d’associés et les procès-verbaux afin d’identifier les règles de majorité ainsi que les éventuelles clauses de sortie ou d’exclusion. Selon la gravité de la paralysie et son impact sur l’exploitation, le cabinet engage des pourparlers encadrés ou une médiation, sollicite en justice la désignation d’un mandataire ad hoc, agit sur le fondement de l’abus de minorité ou d’égalité, ou structure une séparation amiable sécurisée.",
  },
  {
    q: "Combien coûte l’intervention d’un avocat en contentieux des affaires ?",
    a: "Les honoraires du cabinet sont libres et déterminés en toute transparence avant toute diligence, dans le cadre d’une convention d’honoraires écrite. Selon la nature du dossier, la technicité du litige et la voie retenue (mise en demeure, négociation, référé ou procédure au fond), la facturation peut être fixée au temps passé selon un taux horaire convenu ou sous forme de forfait par étape procédurale, complété le cas échéant par un honoraire de résultat.",
  },
  {
    q: "Faut-il privilégier une mise en demeure ou une assignation directe ?",
    a: "Dans la majorité des litiges commerciaux, une mise en demeure rédigée par le cabinet constitue un préalable utile — et souvent juridiquement nécessaire — pour constater formellement le manquement, faire courir les intérêts moratoires et ouvrir une fenêtre de règlement amiable rapide. Une saisine judiciaire immédiate (assignation en référé, mesure probatoire ou saisie conservatoire) est en revanche privilégiée lorsqu’une preuve risque de disparaître, qu’un trouble manifestement illicite doit cesser ou que le recouvrement d’une créance est menacé.",
  },
  {
    q: "Comment se déroule le premier rendez-vous ?",
    a: "Après réception d’un bref exposé des faits et vérification de l’absence de conflit d’intérêts, le premier rendez-vous peut se tenir au cabinet (Paris 16ᵉ), en visioconférence ou par téléphone. Cet échange permet au cabinet d’analyser les pièces essentielles, d’évaluer les options amiables et judiciaires, de préciser le calendrier prévisible et de présenter les modalités d’honoraires avant toute intervention. Votre demande est traitée avec discrétion et dans le respect du secret professionnel.",
  },
] as const;

export const CONTACT = {
  eyebrow: "Contact",
  title: "Commençons par les faits.",
  body: "Quelques lignes suffisent pour solliciter un premier rendez-vous — au cabinet (Paris), en visioconférence ou par téléphone : indiquez le contexte du différend, les parties concernées et toute échéance en cours. Votre demande est traitée avec discrétion et dans le respect du secret professionnel.",
  formHelper:
    "En cliquant sur « Préparer ma demande », votre messagerie électronique s’ouvre automatiquement avec votre message pré-rempli afin de vous permettre de le relire et de l’envoyer en toute maîtrise depuis votre propre boîte de réception. Merci de ne joindre aucune pièce sensible lors de ce premier envoi.",
  formNote:
    "Votre demande est traitée avec discrétion et dans le respect du secret professionnel. L’envoi de ce courriel ne crée pas, en soi, de relation avocat-client : celle-ci suppose l’acceptation expresse du dossier par le cabinet, après vérification notamment de l’absence de conflit d’intérêts.",
  subjects: CONTACT_SUBJECTS,
} as const;

export const CONVERSION = {
  eyebrow: "Premier échange",
  title: "Un enjeu juridique mérite une réponse adaptée.",
  body: "Litige commercial, blocage entre associés, garantie de passif ou échéance procédurale : exposez l’essentiel des faits en quelques lignes. Votre demande est traitée avec discrétion et dans le respect du secret professionnel.",
  cta: CTA.primary,
} as const;

export const FOOTER = {
  columns: [
    { title: "Navigation", items: NAV.map((n) => ({ label: n.label, href: n.href })) },
    {
      title: "Expertises",
      items: [
        { label: "Contentieux commercial", href: "/contentieux-commercial" },
        { label: "Conflits entre associés", href: "/conflits-entre-associes" },
        { label: "Responsabilité des dirigeants", href: "/responsabilite-des-dirigeants" },
        { label: "Contentieux post-acquisition", href: "/contentieux-post-acquisition" },
        { label: "Rupture brutale & concurrence", href: "/rupture-brutale-concurrence-deloyale" },
        { label: "Procédures d’urgence", href: "/procedures-d-urgence" },
        { label: "Contentieux international", href: "/contentieux-international" },
      ],
    },
    {
      title: "Informations",
      items: [
        { label: "Publications externes", href: "/publications" },
        { label: "Questions fréquentes", href: "/#faq" },
        { label: "Mentions légales", href: "/mentions-legales" },
        { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
      ],
    },
  ],
  disclaimer:
    "Les informations diffusées sur ce site ont un caractère strictement général et informatif : elles ne constituent ni une consultation juridique ni un conseil personnalisé, et leur lecture ne crée aucune relation avocat-client.",
} as const;
