/**
 * Single source of truth for all editorial content and verified factual data.
 *
 * Factual sources:
 * - blexmann-avocats.fr (accueil, mentions légales)
 * - Public registries (INSEE / Barreau de Paris / Village de la Justice)
 *
 * Points explicitly flagged for manual confirmation by the firm:
 * 1. Registration identifier: the existing site mentions "RCS Paris n° 489 346 007 00052".
 *    An individual lawyer (exercice individuel) is not registered at the RCS; 489 346 007 is
 *    the verified SIREN, while 00052 was the former SIRET (227 bd Pereire) and public INSEE
 *    records show active SIRET 489 346 007 00060 for 53 avenue Victor Hugo. Only the verified
 *    SIREN is displayed here pending firm confirmation of the exact SIRET to publish.
 *    TODO [À CONFIRMER] SIRET exact à faire valider par le cabinet.
 * 2. Oath date (4 janvier 2006) & Toque (E0140): sourced from public bar directories.
 *    TODO [À CONFIRMER] Date de serment et toque à faire valider par le cabinet.
 * 3. Direct involvement "de la première consultation à l'audience": softened in published copy.
 *    TODO [À CONFIRMER] Formulation d'origine à valider : « L'avocat qui analyse votre dossier
 *    en assure le suivi et la défense, de la première consultation à l'audience ».
 * 4. Correspondents network in France and abroad: softened in published copy.
 *    TODO [À CONFIRMER] Réseau de correspondants : existence et modalités à confirmer par le
 *    cabinet avant toute mention publique.
 * 5. Contact subject "Autre litige d'entreprise": scope to confirm with the lawyer.
 *    TODO [À CONFIRMER] Périmètre du sujet « Autre litige d'entreprise » à confirmer.
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
  /** SIREN vérifié (exercice individuel — voir note d'audit en en-tête sur RCS/SIRET). */
  siren: "SIREN 489 346 007",
  /** Serment et toque issus des annuaires professionnels publics — à confirmer par le cabinet. */
  oathDate: "4 janvier 2006",
  toque: "E0140",
  founded: 2013,
  linkedin: null as string | null,
} as const;

export const CTA = {
  primary: "Exposer ma situation",
  secondary: "Découvrir nos expertises",
} as const;

/** Anchors are prefixed with "/" so navigation works from any route. */
export const NAV = [
  { label: "Accueil", href: "/" },
  { label: "Expertises", href: "/#expertises" },
  { label: "Approche", href: "/#approche" },
  { label: "Pourquoi le cabinet", href: "/#pourquoi" },
  { label: "Le Cabinet", href: "/le-cabinet" },
  { label: "Actualités", href: "/publications" },
  { label: "Contact", href: "/contact" },
] as const;

export const CONTACT_SUBJECTS = [
  "Contentieux commercial et contractuel",
  "Conflits entre associés ou actionnaires",
  "Responsabilité des dirigeants",
  "Contentieux post-acquisition",
  "Rupture brutale ou concurrence déloyale",
  "Procédure d'urgence",
  "Contentieux international",
  // TODO [À CONFIRMER] Périmètre du sujet « Autre litige d'entreprise » à confirmer avec l'avocat.
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
 * Practice areas — grounded in blexmann-avocats.fr.
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
      "Nous qualifions vos droits, consolidons les preuves et engageons la voie la plus adaptée — mise en demeure motivée, injonction de payer, assignation ou négociation encadrée — en demande comme en défense devant les juridictions commerciales et civiles.",
    points: [
      "Recouvrement de créances et de factures impayées",
      "Inexécution, résolution et résiliation de contrats",
      "Litiges fournisseurs, sous-traitance et livraisons défectueuses",
    ],
    cta: "Exposer un litige contractuel",
    contactSubject: "Contentieux commercial et contractuel",
    href: "/contentieux-commercial",
    pageLinkText: "En savoir plus sur les litiges commerciaux à Paris",
  },
  {
    id: "associes-actionnaires",
    index: "02",
    domain: "Conflits entre associés et actionnaires",
    title: "Quand le capital se divise, c'est l'entreprise qui se bloque.",
    problem:
      "Désaccord profond sur la gestion, décision contestée, éviction brutale ou sortie bloquée : un conflit entre associés paralyse la gouvernance et fragilise la valeur construite par l'entreprise, parfois en quelques mois.",
    intervention:
      "Nous cadrons la négociation lorsqu'un accord demeure envisageable, portons le différend devant les tribunaux lorsque la situation l'exige, et sécurisons la continuité de la société jusqu'au dénouement — rééquilibrage ou sortie organisée.",
    points: [
      "Abus de majorité ou de minorité, révocation de mandataires",
      "Exclusion, retrait et cession de droits sociaux",
      "Contestation d'assemblées et de décisions de gestion",
    ],
    cta: "Exposer un conflit d'associés",
    contactSubject: "Conflits entre associés ou actionnaires",
    href: "/conflits-entre-associes",
    pageLinkText: "En savoir plus sur les conflits entre associés",
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
      "Nous analysons le fondement juridique des griefs, préparons la réponse dès la première notification ou assignation et assurons votre défense jusqu'à l'audience puis l'exécution, dans le strict respect du secret professionnel.",
    points: [
      "Actions en responsabilité pour faute de gestion",
      "Défense du dirigeant dans le cadre d'une procédure collective",
      "Mise en cause personnelle et enjeux patrimoniaux",
    ],
    cta: "Évoquer une mise en cause de dirigeant",
    contactSubject: "Responsabilité des dirigeants",
    href: "/responsabilite-des-dirigeants",
    pageLinkText: "En savoir plus sur la responsabilité des dirigeants",
  },
  {
    id: "post-acquisition",
    index: "04",
    domain: "Contentieux post-acquisition",
    title: "Après la signature, un passif caché peut tout remettre en jeu.",
    problem:
      "Garantie d'actif et de passif mise en œuvre, comptes discutés, complément de prix contesté ou clause de non-concurrence méconnue : les suites d'une cession donnent lieu à des différends techniques où la rédaction des actes commande l'analyse.",
    intervention:
      "Nous instruisons le dossier à partir des actes de cession et des pièces comptables, évaluons le préjudice allégué ou subi, et conduisons la négociation ou la procédure prévue au contrat — juridiction étatique, référé ou arbitrage.",
    points: [
      "Mise en œuvre et contestation de garanties d'actif et de passif",
      "Litiges de prix, d'ajustement comptable et d'earn-out",
      "Exécution des engagements post-cession et non-concurrence",
    ],
    cta: "Faire examiner un dossier post-acquisition",
    contactSubject: "Contentieux post-acquisition",
    href: "/contentieux-post-acquisition",
    pageLinkText: "En savoir plus sur le contentieux post-acquisition",
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
      "Nous apprécions la durée de préavis exigible, documentons les faits et le préjudice économique, et agissons en réparation — ou organisons la défense de l'entreprise à laquelle une rupture ou un acte déloyal est reproché.",
    points: [
      "Rupture brutale de relations commerciales établies (art. L. 442-1 C. com.)",
      "Concurrence déloyale, dénigrement et parasitisme",
      "Débauchage fautif et détournement de clientèle",
    ],
    cta: "Évaluer un préjudice commercial",
    contactSubject: "Rupture brutale ou concurrence déloyale",
    href: "/rupture-brutale-concurrence-deloyale",
    pageLinkText: "En savoir plus sur la rupture brutale et la concurrence déloyale",
  },
  {
    id: "urgence",
    index: "06",
    domain: "Procédures d'urgence",
    title: "Certaines situations ne souffrent aucun délai.",
    problem:
      "Trouble manifestement illicite, preuve menacée de disparition, actifs en voie de dissipation ou créance en péril : lorsque la situation évolue vite, attendre une procédure au fond expose à un préjudice difficilement réversible.",
    intervention:
      "Nous engageons les référés et requêtes appropriés — mesure conservatoire, séquestre, mesure d'instruction, cessation d'un trouble — tout en structurant la défense au fond afin de maîtriser la suite de la procédure.",
    points: [
      "Référés, mesures provisoires et d'instruction in futurum",
      "Saisies et mesures conservatoires",
      "Exécution provisoire et préservation des preuves",
    ],
    cta: "Signaler une urgence procédurale",
    contactSubject: "Procédure d'urgence",
    href: "/procedures-d-urgence",
    pageLinkText: "En savoir plus sur le référé et les procédures d'urgence",
  },
  {
    id: "international",
    index: "07",
    domain: "Contentieux à dimension internationale",
    title: "Un litige qui traverse les frontières ne s'improvise pas.",
    problem:
      "Contrat régi par un droit étranger, contrepartie établie hors de France ou décision à faire exécuter à l'étranger : la dimension transfrontalière soulève des enjeux de compétence, de loi applicable et d'exécution qui pèsent directement sur l'issue.",
    // TODO [À CONFIRMER] Toute mention d'un réseau de correspondants en France et à l'étranger
    // reste suspendue à la confirmation du cabinet ; le texte publié ci-dessous est volontairement neutre.
    intervention:
      "Nous analysons les questions de compétence, de loi applicable et d'exécution propres à votre dossier, et définissons avec vous la voie adaptée — juridiction étatique, médiation ou arbitrage — au regard de vos objectifs.",
    points: [
      "Litiges commerciaux et contractuels internationaux",
      "Compétence juridictionnelle et loi applicable",
      "Exécution des décisions et sentences à l'étranger",
    ],
    cta: "Exposer un dossier transfrontalier",
    contactSubject: "Contentieux international",
    href: "/contentieux-international",
    pageLinkText: "En savoir plus sur le contentieux international",
  },
];

export const APPROACH_INTRO = {
  title: "Un litige se traite. Une stratégie se choisit.",
  body: "Chaque dossier commence par une question concrète : quelle issue sert réellement votre entreprise ? Vos objectifs, les coûts, les risques procéduraux, l'état des preuves et la continuité de votre activité déterminent la voie retenue — judiciaire ou amiable — et non l'inverse.",
  principle:
    "Vous décidez en connaissance de cause, sur la base d'une analyse claire et motivée.",
} as const;

export const APPROACH = [
  {
    index: "I",
    title: "Comprendre les enjeux économiques et opérationnels",
    body: "Un contentieux n'est jamais purement abstrait. Avant d'engager une action, nous analysons votre activité, vos contraintes, vos délais et ce que le différend expose concrètement : trésorerie, gouvernance, partenaires clés ou continuité d'exploitation.",
  },
  {
    index: "II",
    title: "Définir la stratégie juridique adaptée",
    body: "Action au fond, référé, négociation, médiation ou arbitrage : chaque option est comparée au regard des éléments de preuve disponibles, des risques procéduraux, des coûts prévisibles et de vos objectifs opérationnels.",
  },
  {
    index: "III",
    title: "Défendre vos intérêts à chaque étape",
    body: "De la mise en demeure jusqu'à l'exécution de la décision ou la signature d'un protocole transactionnel, chaque échéance est anticipée et chaque acte vous est expliqué, afin de préserver la conduite de votre entreprise pendant toute la durée du litige.",
  },
] as const;

export const MARD = {
  kicker: "Juridictions étatiques & modes alternatifs",
  title: "Choisir la voie, pas seulement la procédure.",
  body: "Le cabinet pratique aussi bien le contentieux devant les juridictions étatiques que les modes alternatifs de règlement des différends — négociation, médiation, conciliation et arbitrage. Cette double pratique permet d'orienter le dossier selon votre priorité : obtenir une décision exécutoire, préserver une relation commerciale ou conclure un accord confidentiel maîtrisé.",
} as const;

/**
 * « Pourquoi le cabinet » — four differentiating commitments grounded in
 * the firm's published positioning. No comparative or unverifiable claims.
 */
export const WHY = {
  eyebrow: "Pourquoi le cabinet",
  title: "Pourquoi confier ce contentieux à Maître Pierre Blexmann ?",
  body: "Parce qu'un litige d'affaires ne se gagne pas seulement au tribunal : il se conduit. Quatre engagements structurent le traitement de chaque dossier, de la première analyse jusqu'à son issue.",
  commitments: [
    {
      index: "01",
      title: "Implication directe",
      // TODO [À CONFIRMER] Formulation d'origine à valider par le cabinet : « L'avocat qui
      // analyse votre dossier en assure le suivi et la défense, de la première consultation
      // à l'audience ». Texte publié volontairement adouci ci-dessous.
      body: "L'avocat qui analyse votre dossier en assure le suivi. Vous disposez d'un interlocuteur constant, informé des pièces, du calendrier et des choix successifs de la procédure.",
    },
    {
      index: "02",
      title: "Pragmatisme économique",
      body: "Un contentieux mobilise du temps, des ressources financières et l'attention des dirigeants. Avant toute procédure, les voies judiciaires et amiables sont comparées selon leur coût, leurs aléas et leur utilité concrète pour votre activité.",
    },
    {
      index: "03",
      title: "Transparence",
      body: "À chaque étape — mise en demeure, assignation, négociation, audience ou exécution — vous recevez une information claire sur l'avancement, les risques identifiés et les conditions d'intervention du cabinet.",
    },
    {
      index: "04",
      title: "Coordination nationale et internationale",
      // TODO [À CONFIRMER] Réseau de correspondants en France et à l'étranger : existence et
      // modalités à confirmer par le cabinet avant toute mention publique.
      body: "Établi à Paris 16ᵉ, le cabinet agit devant les juridictions françaises. Lorsque le différend dépasse les frontières, les correspondances utiles sont examinées au cas par cas.",
    },
  ],
  closing: "Une conduite de dossier lisible, fondée sur les faits et les intérêts de l'entreprise.",
  cta: CTA.primary,
} as const;

export const ABOUT = {
  eyebrow: "Le Cabinet",
  name: "Maître Pierre Blexmann",
  role: "Avocat au Barreau de Paris",
  lead: "Avocat au Barreau de Paris, Maître Pierre Blexmann consacre sa pratique aux litiges qui engagent la valeur, la gouvernance et la continuité de l'entreprise.",
  paragraphs: [
    "Inscrit au Barreau de Paris depuis sa prestation de serment le 4 janvier 2006, il fonde en 2013 le cabinet établi au 53 avenue Victor Hugo (Paris 16ᵉ) : un litige d'affaires se conduit comme un projet — diagnostic précis, choix assumés, calendrier tenu.",
    // TODO [À CONFIRMER] Réseau de correspondants : ne pas publier de mention d'un réseau
    // avant confirmation du cabinet (voir note d'audit en en-tête).
    "Il assiste PME, ETI, grands groupes, dirigeants, actionnaires et investisseurs dans leurs principaux contentieux commerciaux, sociétaires, économiques et transfrontaliers, devant les juridictions étatiques comme dans le cadre de négociations, médiations, conciliations ou arbitrages.",
    "Chaque dossier repose sur l'écoute, la précision factuelle et le dialogue, dans le respect des règles déontologiques et du secret professionnel applicables à la profession d'avocat. Maître Pierre Blexmann a également publié une série d'articles sur Village de la Justice consacrée à la preuve de la discrimination dans les relations de travail.",
  ],
  facts: [
    { label: "Barreau", value: "Barreau de Paris — serment du 4 janvier 2006" },
    { label: "Toque", value: "E0140" },
    { label: "Fondation", value: "Cabinet fondé en 2013" },
    { label: "Adresse", value: "53 avenue Victor Hugo, Paris 16ᵉ" },
    { label: "Pratique", value: "Conseil et contentieux des affaires" },
    { label: "Rendez-vous", value: "Au cabinet, Paris 16ᵉ" },
  ],
} as const;

export const NEWS = {
  eyebrow: "Actualités",
  title: "Publications et analyses.",
  body: "Retrouvez les publications externes de Maître Pierre Blexmann sur Village de la Justice. Ces contenus ont une portée strictement informative et ne constituent pas une consultation juridique.",
} as const;

export const CONTACT = {
  eyebrow: "Contact",
  title: "Commençons par les faits.",
  body: "Quelques lignes suffisent pour engager un premier échange : le contexte du différend, les parties concernées et vos éventuelles échéances procédurales. Après réception de votre demande, le cabinet en prend connaissance et vous indique les suites envisageables. Vous pouvez également joindre directement le cabinet par téléphone ou par courriel.",
  formNote:
    "Le site est statique : ce formulaire prépare un courriel dans votre propre messagerie et aucune donnée n'est enregistrée sur ce site. L'envoi ne crée pas, en soi, de relation avocat-client : celle-ci suppose l'acceptation expresse du dossier par le cabinet, après vérification notamment de l'absence de conflit d'intérêts.",
  subjects: CONTACT_SUBJECTS,
} as const;

export const CONVERSION = {
  eyebrow: "Premier échange",
  title: "Un enjeu juridique mérite une réponse adaptée.",
  body: "Litige commercial, blocage entre associés ou échéance procédurale : quelques lignes sur les faits et les parties concernées suffisent pour engager un premier examen confidentiel avec le cabinet.",
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
        { label: "Procédures d'urgence", href: "/procedures-d-urgence" },
        { label: "Contentieux international", href: "/contentieux-international" },
      ],
    },
    {
      title: "Informations",
      items: [
        { label: "Actualités & publications", href: "/publications" },
        { label: "Mentions légales", href: "/mentions-legales" },
        { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
      ],
    },
  ],
  disclaimer:
    "Les informations diffusées sur ce site ont un caractère strictement général et informatif : elles ne constituent ni une consultation juridique ni un conseil personnalisé, et leur lecture ne crée aucune relation avocat-client.",
} as const;
