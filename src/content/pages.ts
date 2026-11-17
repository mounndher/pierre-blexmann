/**
 * Content and SEO metadata for all nine dedicated inner pages.
 *
 * Each entry drives a static route (`generateStaticParams`) and guarantees:
 * - unique <title> under 60 characters
 * - unique meta description under 155 characters
 * - exactly one H1 + structured H2 sections
 * - 4 substantive FAQ items (rendered with native <details> + FAQPage JSON-LD)
 * - contextual CTA (pre-selecting the matching dossier nature) and descriptive internal links
 */

import type { ContactSubject } from "./site";

export type PageSection = {
  /** Short rail label shown in the editorial left margin. */
  rail: string;
  /** Full H2 heading shown above the section body. */
  heading: string;
  paragraphs: string[];
  /** Optional list of situations handled (factual and procedural). */
  points?: string[];
};

export type Faq = { question: string; answer: string };

export type InnerPage = {
  slug: string;
  kind: "expertise" | "cabinet" | "publications";
  index: string;
  label: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  sections: PageSection[];
  faqs: Faq[];
  relatedHeading: string;
  /** Descriptive internal links shown at the bottom of the page. */
  related: { label: string; href: string }[];
  contactSubject: ContactSubject;
};

export const INNER_PAGES: InnerPage[] = [
  {
    slug: "contentieux-commercial",
    kind: "expertise",
    index: "01",
    label: "Contentieux commercial",
    title: "Avocat litige commercial Paris | Impayés et contrats",
    description:
      "Factures impayées, inexécution de contrat, résiliation contestée : analyse de votre litige commercial à Paris et des voies d'action adaptées.",
    h1: "Avocat en litiges commerciaux et contractuels à Paris",
    lead: "Les différends commerciaux pèsent d'abord sur la trésorerie : un impayé qui perdure ou un contrat inexécuté affecte l'exploitation bien avant d'être soumis au juge. La solidité du dossier se construit dès les premiers échanges écrits.",
    sections: [
      {
        rail: "Situations fréquentes",
        heading: "Les situations les plus fréquentes",
        paragraphs: [
          "Client défaillant dans le règlement de ses factures, fournisseur livrant avec retard ou hors cahier des charges, contrat résilié en méconnaissance de ses stipulations : ces litiges naissent le plus souvent d'un défaut d'exécution concret. L'enjeu consiste à établir précisément le manquement et à documenter le préjudice financier qui en découle.",
        ],
        points: [
          "Recouvrement de créances commerciales et de factures impayées",
          "Inexécution, résolution judiciaire et résiliation unilatérale de contrats",
          "Litiges fournisseurs, sous-traitance, distribution et livraisons non conformes",
          "Application et opposabilité des conditions générales, clauses pénales et clauses limitatives de responsabilité",
        ],
      },
      {
        rail: "Analyse du dossier",
        heading: "Comment le dossier est examiné",
        paragraphs: [
          "L'analyse débute par les pièces : contrat ou conditions générales, bons de commande, procès-verbaux de réception, échanges écrits, mises en demeure et justificatifs comptables. La qualification du manquement et l'évaluation du préjudice reposent directement sur la cohérence de ce dossier.",
          "La prise de position face au cocontractant est ensuite formalisée : une mise en demeure circonstanciée, articulant les faits et les fondements juridiques, permet régulièrement d'ouvrir une discussion sérieuse là où les relances informelles demeuraient sans suite.",
        ],
      },
      {
        rail: "Voies d'action",
        heading: "Les voies d'action envisageables",
        paragraphs: [
          "Selon le montant en jeu, la certitude de la créance et le calendrier de l'entreprise, plusieurs leviers existent : requête en injonction de payer pour une créance contractuelle déterminée, référé-provision en l'absence de contestation sérieuse, assignation au fond devant le tribunal des activités économiques ou protocole transactionnel.",
          "Chaque option est présentée avec ses implications pratiques : délais procéduraux, coûts prévisibles, risques identifiés, solvabilité du débiteur et incidence sur la poursuite éventuelle de la relation d'affaires.",
        ],
      },
    ],
    faqs: [
      {
        question: "Faut-il impérativement un contrat signé pour agir ?",
        answer:
          "Non. En matière commerciale, la preuve est libre : l'existence et le contenu de l'accord peuvent résulter de bons de commande, de factures acceptées, de correspondances ou d'une exécution suivie. Un contrat écrit facilite néanmoins la démonstration précise des obligations convenues.",
      },
      {
        question: "Dans quel délai agir face à une facture impayée ?",
        answer:
          "Par principe, les actions entre commerçants se prescrivent par cinq ans (article L. 110-4 du Code de commerce), sous réserve de délais spéciaux plus courts dans certains secteurs (comme le transport). Vérifier la prescription et les éventuels actes interruptifs constitue le premier réflexe.",
      },
      {
        question: "Un procès est-il toujours indispensable ?",
        answer:
          "Non. Une négociation encadrée entre conseils, formalisée par un protocole transactionnel, permet souvent de solder le différend dans un cadre confidentiel et maîtrisé, notamment lorsqu'un échéancier sécurisé ou une sortie ordonnée du contrat est préférable.",
      },
      {
        question: "Quels éléments réunir pour un premier échange ?",
        answer:
          "Une chronologie synthétique des faits, le contrat ou les conditions générales, les principales factures concernées et les derniers courriers échangés. Aucune pièce sensible n'a besoin d'être jointe au formulaire de premier contact.",
      },
    ],
    relatedHeading: "Autres domaines d'intervention",
    related: [
      {
        label: "Rupture brutale de relations commerciales et concurrence déloyale",
        href: "/rupture-brutale-concurrence-deloyale",
      },
      { label: "Procédures d'urgence et référés à Paris", href: "/procedures-d-urgence" },
      { label: "Conflits entre associés et actionnaires", href: "/conflits-entre-associes" },
      { label: "Contentieux commercial international", href: "/contentieux-international" },
    ],
    contactSubject: "Litige commercial ou contractuel",
  },
  {
    slug: "conflits-entre-associes",
    kind: "expertise",
    index: "02",
    label: "Conflits entre associés",
    title: "Avocat conflit entre associés à Paris | Cabinet Blexmann",
    description:
      "Blocage de gouvernance, exclusion, contestation d'assemblée : traitement du conflit entre associés à Paris et organisation d'une sortie encadrée.",
    h1: "Avocat en conflits entre associés et actionnaires à Paris",
    lead: "Une mésentente entre associés dépasse rapidement la sphère juridique : elle bloque les décisions courantes, fragilise la relation avec les banques et les équipes, et peut entamer durablement la valeur de la société.",
    sections: [
      {
        rail: "Signes de blocage",
        heading: "Identifier le blocage avant la paralysie sociale",
        paragraphs: [
          "Convocations irrégulières, résolutions adoptées sans information loyale d'un associé, remboursement de compte courant refusé, révocation préparée sans débat contradictoire : ces signaux traduisent une crise de gouvernance. Plus le dossier est examiné tôt, plus les marges de manœuvre demeurent larges.",
          "La relecture attentive des statuts et du pacte d'associés, assortie d'une vérification du formalisme social (convocations, droit de communication, procès-verbaux, conventions réglementées), permet d'évaluer immédiatement la position de chaque partie.",
        ],
        points: [
          "Abus de majorité, abus de minorité ou d'égalité",
          "Contestation de délibérations d'assemblées générales et d'actes de gestion",
          "Révocation de dirigeants et litiges relatifs à la rémunération",
          "Mise en œuvre de clauses de pacte, exclusion, retrait et rachat de titres",
        ],
      },
      {
        rail: "Voies de résolution",
        heading: "Arbitrer entre négociation, médiation et action judiciaire",
        paragraphs: [
          "La discussion structurée entre conseils demeure la première voie à envisager lorsque les intérêts peuvent encore être conciliés : elle débouche sur un protocole réaménageant la gouvernance ou organisant une cession de titres, à l'abri de la publicité des débats. La médiation offre également un cadre confidentiel adapté aux sociétés fermées ou familiales.",
          "La saisine du juge s'impose lorsqu'un abus doit être sanctionné, une délibération annulée ou le fonctionnement social préservé : demande de communication de pièces en référé, désignation d'un mandataire ad hoc ou d'un administrateur provisoire, ou encore mesure d'instruction portant sur une ou plusieurs opérations de gestion.",
        ],
      },
      {
        rail: "Sortie du capital",
        heading: "Sécuriser la séparation et la cession des droits sociaux",
        paragraphs: [
          "Nombre de conflits d'associés se dénouent par une sortie du capital. Trois paramètres conditionnent la solidité de l'opération : la méthode de valorisation des titres (statutaire, conventionnelle ou judiciaire au titre de l'article 1843-4 du Code civil), le sort des comptes courants et cautions personnelles, et le calendrier d'exécution.",
          "Le protocole transactionnel et les actes de cession exigent une rédaction rigoureuse : engagements de non-concurrence et de non-débauchage proportionnés, garanties éventuelles, renonciation réciproque aux instances et confidentialité vis-à-vis des tiers.",
        ],
      },
    ],
    faqs: [
      {
        question: "Peut-on contester une assemblée générale irrégulièrement convoquée ?",
        answer:
          "Oui, selon la forme sociale et la nature de l'irrégularité constatée (défaut de convocation, violation du droit d'information, non-respect des règles de quorum ou de majorité), la nullité des délibérations peut être poursuivie dans les délais légaux.",
      },
      {
        question: "Un associé peut-il être contraint de céder ses titres ?",
        answer:
          "En dehors d'hypothèses légales strictes, l'exclusion d'un associé suppose une clause expresse des statuts ou une promesse de cession stipulée au pacte d'associés, ainsi que le respect scrupuleux de la procédure et des motifs prévus.",
      },
      {
        question: "Comment est déterminé le prix des parts ou actions en cas de désaccord ?",
        answer:
          "Les parties appliquent d'abord la formule éventuellement prévue par les statuts ou le pacte, ou recherchent un accord négocié. En cas de contestation dans les cas prévus par la loi ou les statuts, un tiers évaluateur peut être désigné sur le fondement de l'article 1843-4 du Code civil.",
      },
      {
        question: "Comment préserver la confidentialité du différend ?",
        answer:
          "Les pourparlers entre avocats sont couverts par la confidentialité des correspondances, et la médiation comme le protocole transactionnel préservent la discrétion des échanges, à la différence d'une audience publique.",
      },
    ],
    relatedHeading: "Autres domaines d'intervention",
    related: [
      { label: "Responsabilité des dirigeants à Paris", href: "/responsabilite-des-dirigeants" },
      { label: "Contentieux post-acquisition et garanties de passif", href: "/contentieux-post-acquisition" },
      { label: "Procédures d'urgence et référés", href: "/procedures-d-urgence" },
      { label: "Contentieux commercial et contractuel", href: "/contentieux-commercial" },
    ],
    contactSubject: "Conflit entre associés ou actionnaires",
  },
  {
    slug: "responsabilite-des-dirigeants",
    kind: "expertise",
    index: "03",
    label: "Responsabilité des dirigeants",
    title: "Avocat responsabilité des dirigeants Paris | Blexmann",
    description:
      "Faute de gestion alléguée, action en responsabilité, procédure collective : défense du dirigeant à Paris, de la première notification à l'audience.",
    h1: "Avocat en responsabilité des dirigeants à Paris",
    lead: "L'exercice d'un mandat social expose son titulaire : la responsabilité du dirigeant de droit ou de fait peut être recherchée à titre personnel, avec des incidences directes sur son patrimoine et sa réputation professionnelle.",
    sections: [
      {
        rail: "Mises en cause",
        heading: "Les hypothèses de mise en cause les plus courantes",
        paragraphs: [
          "Violation des statuts ou des dispositions légales, faute de gestion invoquée par la société ou un associé, faute séparable des fonctions alléguée par un tiers, ou action en responsabilité pour insuffisance d'actif en liquidation judiciaire : chaque régime obéit à des conditions de recevabilité et de preuve distinctes.",
          "La première étape consiste à qualifier précisément le fondement invoqué, à vérifier la qualité à agir du demandeur ainsi que la prescription, et à mesurer l'exposition réelle du mandataire — y compris au regard d'une éventuelle assurance responsabilité des dirigeants (RCMS).",
        ],
        points: [
          "Actions sociales (ut universi ou ut singuli) et actions individuelles en responsabilité",
          "Défense du dirigeant dans le cadre d'une procédure collective (insuffisance d'actif, sanctions personnelles)",
          "Litiges liés à la révocation brutale, vexatoire ou sans juste motif du mandataire social",
          "Mise en cause personnelle, engagements de caution et protection patrimoniale",
        ],
      },
      {
        rail: "Stratégie de défense",
        heading: "Structurer la réponse dès la première notification",
        paragraphs: [
          "La défense se construit sur les pièces contemporaines de la décision critiquée : procès-verbaux des organes sociaux, rapports de gestion, situations comptables, délégations de pouvoirs et avis recueillis à l'époque des faits. L'objectif est de distinguer l'aléa normal de la vie des affaires d'un manquement fautif caractérisé.",
          "Le cabinet assure la rédaction des réponses et conclusions ainsi que la représentation du dirigeant tout au long de l'instance, jusqu'à la décision et à son exécution.",
        ],
      },
      {
        rail: "Discrétion & gouvernance",
        heading: "Maîtriser l'incidence du litige sur l'entreprise",
        paragraphs: [
          "La mise en cause d'un dirigeant rejaillit sur la gouvernance et sur la confiance des partenaires financiers ou commerciaux. Lorsqu'une issue transactionnelle est pertinente et juridiquement recevable, elle permet d'encadrer les conséquences du différend dans la discrétion.",
          "L'ensemble des échanges avec l'avocat est protégé par le secret professionnel.",
        ],
      },
    ],
    faqs: [
      {
        question: "Toute erreur d'appréciation constitue-t-elle une faute de gestion ?",
        answer:
          "Non. Les juridictions apprécient le comportement du dirigeant au regard de l'intérêt social et des informations dont il disposait au moment de sa décision, sans juger a posteriori la seule opportunité économique d'un choix. En matière d'insuffisance d'actif, la simple négligence est en outre écartée par la loi.",
      },
      {
        question: "Qui a qualité pour engager la responsabilité civile d'un dirigeant ?",
        answer:
          "La société elle-même (par ses représentants légaux ou par un associé exerçant l'action sociale ut singuli), un associé justifiant d'un préjudice personnel distinct du préjudice social, un tiers démontrant une faute séparable des fonctions, ou le liquidateur judiciaire dans les cas prévus par le Code de commerce.",
      },
      {
        question: "Le patrimoine personnel du dirigeant peut-il être atteint ?",
        answer:
          "Oui, lorsqu'une condamnation personnelle est prononcée ou qu'un engagement de caution est appelé. L'analyse porte à la fois sur la contestation des griefs, le lien de causalité, le quantum réclamé et la mobilisation éventuelle d'une police d'assurance RCMS.",
      },
      {
        question: "Quel réflexe adopter à réception d'une mise en demeure ou d'une assignation ?",
        answer:
          "Éviter toute réponse improvisée, relever immédiatement la date de signification et les délais impartis, rassembler les documents sociaux et comptables afférents aux faits visés, et faire examiner l'acte avant toute prise de position écrite.",
      },
    ],
    relatedHeading: "Autres domaines d'intervention",
    related: [
      { label: "Conflits entre associés et actionnaires", href: "/conflits-entre-associes" },
      { label: "Contentieux post-acquisition", href: "/contentieux-post-acquisition" },
      { label: "Procédures d'urgence et référés", href: "/procedures-d-urgence" },
      { label: "Contentieux commercial et contractuel", href: "/contentieux-commercial" },
    ],
    contactSubject: "Responsabilité des dirigeants",
  },
  {
    slug: "contentieux-post-acquisition",
    kind: "expertise",
    index: "04",
    label: "Contentieux post-acquisition",
    title: "Avocat contentieux post-acquisition Paris | Blexmann",
    description:
      "Garantie d'actif et de passif, ajustement de prix, earn-out et comptes de cession : gestion de vos contentieux post-acquisition à Paris.",
    h1: "Avocat en contentieux post-acquisition à Paris",
    lead: "La réalisation d'une cession ne clôt pas toujours le dossier : appel en garantie d'actif et de passif, désaccord sur les comptes de référence, complément de prix ou non-concurrence donnent lieu à des contentieux exigeants où chaque clause compte.",
    sections: [
      {
        rail: "Typologie des litiges",
        heading: "Les différends survenant après une cession de titres ou de fonds",
        paragraphs: [
          "Apparition d'un passif fiscal, social ou litigieux ayant une origine antérieure à la cession, inexactitude des déclarations du cédant, contestation de certaines provisions ou écritures comptables, calcul d'un complément de prix (earn-out) ou violation d'un engagement de non-concurrence : ces litiges conjuguent droit des contrats, droit des sociétés et analyse financière.",
        ],
        points: [
          "Mise en jeu et contestation de conventions de garantie d'actif et de passif (GAP)",
          "Litiges d'ajustement de prix, de comptes de cession et de clauses d'earn-out",
          "Actions fondées sur le dol, la réticence dolosive ou le manquement au devoir d'information",
          "Violation des clauses de non-concurrence, de non-sollicitation et d'accompagnement post-cession",
        ],
      },
      {
        rail: "Lecture des actes",
        heading: "L'instruction contractuelle et comptable du dossier",
        paragraphs: [
          "L'étude part du protocole de cession, de la convention de garantie et des annexes de data room : étendue des déclarations, exclusions, seuils de déclenchement, franchises, plafonds, garanties de la garantie (séquestre, caution bancaire) et délais contractuels de réclamation.",
          "Une attention particulière est portée au formalisme de notification et au droit d'information ou de participation du cédant en cas de réclamation d'un tiers : leur inobservation constitue un moyen de défense fréquent.",
        ],
      },
      {
        rail: "Résolution du différend",
        heading: "Négociation, évaluation contradictoire ou contentieux",
        paragraphs: [
          "Selon l'architecture contractuelle et les montants discutés, le différend peut se traiter par voie transactionnelle, par le recours à un tiers évaluateur prévu pour l'arrêté du prix, en référé (notamment sur le sort d'un séquestre) ou au fond. Lorsqu'une clause de conciliation préalable ou une clause compromissoire est stipulée, son respect conditionne la recevabilité de l'action.",
        ],
      },
    ],
    faqs: [
      {
        question: "Dans quel délai notifier une réclamation au titre d'une garantie de passif ?",
        answer:
          "La convention de garantie fixe à la fois la durée globale de couverture (souvent alignée sur les prescriptions fiscales et sociales pour ces risques) et un délai bref de notification à compter de la connaissance du fait générateur. Les formes et délais prévus au contrat doivent être vérifiés immédiatement.",
      },
      {
        question: "Sur quels terrains le cédant peut-il contester un appel en garantie ?",
        answer:
          "La discussion porte notamment sur le respect des délais et formes de notification, la connaissance préalable du risque révélé dans les annexes, le rattachement du passif à la période antérieure, le jeu de la franchise ou du plafond et la réalité du préjudice net subi.",
      },
      {
        question: "Comment se nouent les litiges relatifs au complément de prix (earn-out) ?",
        answer:
          "Ils portent le plus souvent sur l'interprétation des agrégats comptables retenus (EBITDA, chiffre d'affaires, trésorerie nette), sur les retraitements opérés après la reprise ou sur la gestion de la société cible durant la période de référence.",
      },
      {
        question: "Que vérifier avant de saisir le tribunal ?",
        answer:
          "La présence éventuelle d'une clause de règlement amiable préalable, d'une clause de désignation d'un tiers calculateur du prix, d'une clause attributive de juridiction ou d'une clause d'arbitrage, dont la méconnaissance expose la demande à une fin de non-recevoir.",
      },
    ],
    relatedHeading: "Autres domaines d'intervention",
    related: [
      { label: "Conflits entre associés et actionnaires", href: "/conflits-entre-associes" },
      { label: "Responsabilité des dirigeants à Paris", href: "/responsabilite-des-dirigeants" },
      { label: "Contentieux commercial et contractuel", href: "/contentieux-commercial" },
      { label: "Contentieux commercial international", href: "/contentieux-international" },
    ],
    contactSubject: "Contentieux post-acquisition",
  },
  {
    slug: "rupture-brutale-concurrence-deloyale",
    kind: "expertise",
    index: "05",
    label: "Rupture brutale & concurrence",
    title: "Rupture brutale de relations commerciales | Avocat Paris",
    description:
      "Rupture brutale de relations commerciales établies, concurrence déloyale et parasitisme : évaluation du préavis et du préjudice à Paris.",
    h1: "Rupture brutale et concurrence déloyale : avocat à Paris",
    lead: "Qu'il s'agisse de l'interruption soudaine d'un courant d'affaires ancien ou d'agissements déloyaux détournant votre clientèle, la défense de vos intérêts repose sur la rapidité de constitution des preuves et la rigueur du chiffrage.",
    sections: [
      {
        rail: "Rupture brutale",
        heading: "La rupture brutale de relations commerciales établies",
        paragraphs: [
          "Rompre, même partiellement, une relation commerciale établie sans préavis écrit tenant compte notamment de sa durée engage la responsabilité de son auteur sur le fondement de l'article L. 442-1, II du Code de commerce. Sont visées les relations d'affaires présentant une stabilité, une régularité et une intensité permettant raisonnablement d'anticiper leur continuité.",
          "La protection légale s'applique même en l'absence de contrat-cadre écrit, dès lors qu'un flux d'affaires suivi est démontré. À l'inverse, des prestations ponctuelles ou le recours systématique à des appels d'offres concurrentiels peuvent écarter le caractère établi de la relation.",
        ],
        points: [
          "Action en indemnisation ou en défense pour rupture brutale (art. L. 442-1, II C. com., juridictions spécialisées dont Paris)",
          "Sécurisation en amont de la notification et de la durée d'un préavis de rupture",
          "Concurrence déloyale : confusion, dénigrement, désorganisation et parasitisme",
          "Débauchage fautif, détournement de fichiers ou de clientèle",
        ],
      },
      {
        rail: "Préavis & indemnisation",
        heading: "Apprécier le préavis suffisant et chiffrer la marge perdue",
        paragraphs: [
          "Le préavis raisonnable s'apprécie à la date de notification de la rupture au regard de l'ancienneté des relations, du volume d'affaires, des investissements dédiés non amortis, d'une éventuelle dépendance économique et des usages professionnels — tout en tenant compte du plafond légal de dix-huit mois prévu par l'article L. 442-1, II du Code de commerce. Il doit faire l'objet d'un écrit clair et non équivoque.",
          "Le préjudice indemnisable correspond non pas à la perte de chiffre d'affaires, mais au gain manqué durant la période de préavis qui a fait défaut — en règle générale la marge sur coûts variables — justifié par des éléments comptables attestés.",
        ],
      },
      {
        rail: "Concurrence déloyale",
        heading: "Établir ou contester des actes de concurrence déloyale",
        paragraphs: [
          "Sur le fondement de la responsabilité civile délictuelle (article 1240 du Code civil), l'action en concurrence déloyale ou en parasitisme suppose la preuve de faits fautifs caractérisés, d'un préjudice et d'un lien de causalité. Constats de commissaire de justice, pièces commerciales, attestations, données comptables et, lorsque nécessaire, mesures d'instruction in futurum permettent d'étayer la demande.",
          "En défense, le cabinet accompagne également les entreprises assignées à tort afin de rappeler le principe de la liberté du commerce et de la concurrence ou de justifier une rupture sans préavis en présence d'inexécutions graves du partenaire.",
        ],
      },
    ],
    faqs: [
      {
        question: "Qu'entend-on par relation commerciale établie ?",
        answer:
          "Une relation d'affaires suivie, stable et habituelle entre partenaires économiques, qu'elle résulte d'un contrat à durée indéterminée, d'une succession de contrats à durée déterminée ou de commandes régulières non formalisées par un contrat-cadre.",
      },
      {
        question: "Une baisse significative des commandes peut-elle constituer une rupture brutale ?",
        answer:
          "Oui, l'article L. 442-1, II du Code de commerce vise aussi la rupture partielle : un déréférencement partiel, une chute soudaine du volume confié ou une modification substantielle imposée sans préavis écrit peuvent caractériser une rupture brutale.",
      },
      {
        question: "Quelle juridiction est compétente pour une rupture brutale ?",
        answer:
          "Ce contentieux relève de juridictions commerciales spécialement désignées par le Code de commerce (dont le tribunal des activités économiques de Paris et, en appel, exclusivement la cour d'appel de Paris), ce qui impose de vérifier la compétence avant toute assignation.",
      },
      {
        question: "Peut-on rompre sans préavis en cas de faute du cocontractant ?",
        answer:
          "Oui, la loi réserve la faculté de résiliation sans préavis en cas d'inexécution par l'autre partie de ses obligations d'une gravité suffisante, ou en cas de force majeure. Ces manquements doivent être soigneusement documentés par écrit.",
      },
    ],
    relatedHeading: "Autres domaines d'intervention",
    related: [
      { label: "Contentieux commercial et contractuel", href: "/contentieux-commercial" },
      { label: "Procédures d'urgence et conservation des preuves", href: "/procedures-d-urgence" },
      { label: "Contentieux commercial international", href: "/contentieux-international" },
      { label: "Conflits entre associés et actionnaires", href: "/conflits-entre-associes" },
    ],
    contactSubject: "Rupture brutale ou concurrence déloyale",
  },
  {
    slug: "procedures-d-urgence",
    kind: "expertise",
    index: "06",
    label: "Procédures d'urgence",
    title: "Avocat référé et procédures d'urgence | Paris",
    description:
      "Référé commercial ou civil, mesures conservatoires et préservation des preuves : saisine des juridictions parisiennes en matière d'affaires.",
    h1: "Avocat en référés et procédures d'urgence à Paris",
    lead: "Lorsque la situation se dégrade rapidement — dépérissement d'une preuve, risque d'insolvabilité organisée, trouble manifestement illicite — les procédures provisoires et conservatoires permettent de préserver vos droits sans attendre l'issue d'un procès au fond.",
    sections: [
      {
        rail: "Cas de recours",
        heading: "Les situations relevant d'une procédure rapide ou conservatoire",
        paragraphs: [
          "Atteinte illicite nécessitant une mesure de cessation, éléments de preuve risquant de disparaître avant tout débat contradictoire, créance paraissant fondée en son principe mais menacée dans son recouvrement, ou obligation contractuelle non sérieusement contestable : chacune de ces situations dispose d'un instrument procédural dédié.",
        ],
        points: [
          "Référé d'urgence, référé conservatoire ou de remise en état (trouble manifestement illicite, dommage imminent)",
          "Référé-provision et injonction de faire",
          "Mesures d'instruction in futurum sur requête ou en référé (article 145 du Code de procédure civile)",
          "Saisies conservatoires, nantissements et sûretés judiciaires provisoires",
        ],
      },
      {
        rail: "Exigences probatoires",
        heading: "Ce qui conditionne l'efficacité de la demande",
        paragraphs: [
          "Juge de l'évidence, le juge des référés statue au vu de pièces immédiatement lisibles et probantes : la démonstration de l'urgence, du trouble manifestement illicite ou du motif légitime doit ressortir clairement du dossier constitué dès la saisine.",
          "Le périmètre des demandes doit être calibré avec précision : le juge des référés ne peut trancher une demande qui se heurte à une contestation sérieuse au fond, et une mesure obtenue sur requête non contradictoire doit pouvoir résister à un éventuel référé-rétractation.",
        ],
      },
      {
        rail: "Articulation au fond",
        heading: "Articuler la mesure provisoire et la suite du litige",
        paragraphs: [
          "Une ordonnance de référé ou une saisie conservatoire constitue souvent le premier acte d'un dossier plus large. Les délais de validité des mesures conservatoires, l'introduction de l'instance au fond pour obtenir un titre exécutoire ou l'ouverture d'une négociation sur des bases rééquilibrées sont anticipés dès le départ.",
        ],
      },
    ],
    faqs: [
      {
        question: "Quelle est la différence entre un référé et une procédure au fond ?",
        answer:
          "Le référé est une procédure contradictoire accélérée aboutissant à une ordonnance provisoire, exécutoire de plein droit à titre provisoire. Elle n'a pas, au principal, l'autorité de la chose jugée et ne tranche pas les questions relevant d'une contestation sérieuse.",
      },
      {
        question: "Comment préserver une preuve avant d'engager un procès ?",
        answer:
          "L'article 145 du Code de procédure civile permet de solliciter du juge, en référé ou sur requête lorsque les circonstances exigent que la mesure ne soit pas prise contradictoirement, toute mesure d'instruction légalement admissible s'il existe un motif légitime de conserver ou d'établir la preuve de faits dont pourrait dépendre la solution d'un litige.",
      },
      {
        question: "Dans quelles conditions pratiquer une saisie conservatoire ?",
        answer:
          "Hors les cas de dispense d'autorisation prévus par la loi, le créancier doit justifier auprès du juge d'une créance paraissant fondée en son principe et de circonstances susceptibles d'en menacer le recouvrement, puis respecter les délais stricts de dénonciation et de saisine au fond.",
      },
      {
        question: "Que faire à réception d'une assignation en référé ou d'une ordonnance ?",
        answer:
          "Relever immédiatement la date d'audience ou le délai de recours mentionné sur l'acte de signification, réunir les pièces essentielles et consulter un avocat afin d'organiser votre défense, solliciter un renvoi motivé si nécessaire ou envisager une demande de rétractation.",
      },
    ],
    relatedHeading: "Autres domaines d'intervention",
    related: [
      { label: "Contentieux commercial et recouvrement", href: "/contentieux-commercial" },
      {
        label: "Rupture brutale et concurrence déloyale",
        href: "/rupture-brutale-concurrence-deloyale",
      },
      { label: "Conflits entre associés et actionnaires", href: "/conflits-entre-associes" },
      { label: "Responsabilité des dirigeants", href: "/responsabilite-des-dirigeants" },
    ],
    contactSubject: "Procédure d'urgence (référé)",
  },
  {
    slug: "contentieux-international",
    kind: "expertise",
    index: "07",
    label: "Contentieux international",
    title: "Avocat contentieux commercial international | Paris",
    description:
      "Compétence juridictionnelle, loi applicable, arbitrage et exequatur : conduite de vos litiges commerciaux internationaux depuis Paris.",
    h1: "Avocat en contentieux commercial international à Paris",
    lead: "Dès qu'un contrat ou un différend franchit une frontière, trois questions préalables commandent toute décision : quel juge ou quel tribunal arbitral est compétent, quel droit régit le litige et où la décision devra-t-elle être exécutée ?",
    sections: [
      {
        rail: "Enjeux préalables",
        heading: "Les questions propres aux litiges d'affaires transfrontaliers",
        paragraphs: [
          "Contrat de distribution, de fourniture ou de cession conclu avec une société étrangère, clause attributive de juridiction ou clause d'arbitrage, pluralité de procédures ou actifs situés hors de France : le cadrage de droit international privé précède toute mise en demeure ou assignation, car il détermine le forum pertinent, les règles de preuve et le budget procédural.",
        ],
        points: [
          "Contentieux des contrats commerciaux internationaux (vente, distribution, prestation, cession)",
          "Conflits de juridictions, clauses d'élection de for et exceptions d'incompétence",
          "Détermination et mise en œuvre de la loi applicable au contrat ou au délit",
          "Reconnaissance et exécution (exequatur) de jugements étrangers et de sentences arbitrales",
        ],
      },
      {
        rail: "Juges ou arbitres",
        heading: "Juridictions étatiques, arbitrage et médiation internationale",
        paragraphs: [
          "L'arbitrage permet d'obtenir une sentence définitive dans un cadre confidentiel et neutre, souvent recherché dans les opérations internationales. Les juridictions étatiques — notamment les chambres commerciales internationales à Paris — demeurent quant à elles incontournables en l'absence de convention d'arbitrage ou lorsqu'une mesure provisoire ou conservatoire s'impose.",
          "Avant d'introduire une instance, l'existence, la validité et la portée de toute clause compromissoire, de médiation ou d'élection de for sont systématiquement vérifiées afin d'éviter une irrecevabilité ou un déclinatoire de compétence.",
        ],
      },
      {
        rail: "Coordination",
        heading: "Cohérence de la défense sur plusieurs juridictions",
        paragraphs: [
          "Lorsqu'un différend comporte des ramifications dans plusieurs États — obtention de preuves, signification internationale d'actes, exécution sur des actifs étrangers — la cohérence des positions soutenues dans chaque pays est essentielle. Le cabinet veille à l'articulation d'ensemble du dossier avec les conseils locaux concernés.",
        ],
      },
    ],
    faqs: [
      {
        question: "Comment savoir si les tribunaux français sont compétents ?",
        answer:
          "L'analyse dépend d'abord de l'existence d'une clause attributive de juridiction valable, puis des règlements européens (notamment Bruxelles I bis au sein de l'Union européenne), des conventions internationales applicables ou, à défaut, des règles françaises de compétence internationale.",
      },
      {
        question: "Quelle loi s'applique en l'absence de choix exprès dans le contrat ?",
        answer:
          "À défaut de clause de droit applicable, le juge détermine la loi régissant le contrat selon les règles de conflit de lois (notamment le règlement Rome I en matière contractuelle, qui retient en général la loi de la résidence habituelle du débiteur de la prestation caractéristique) ou les conventions matérielles comme la Convention de Vienne sur la vente internationale de marchandises.",
      },
      {
        question: "Comment faire exécuter un jugement étranger ou une sentence en France ?",
        answer:
          "Les décisions rendues dans un État membre de l'Union européenne bénéficient d'un régime simplifié de circulation ; celles émanant d'États tiers requièrent en principe une procédure d'exequatur. Les sentences arbitrales internationales circulent notamment dans le cadre de la Convention de New York de 1958.",
      },
      {
        question: "Que risque-t-on à assigner malgré une clause compromissoire ?",
        answer:
          "En vertu du principe compétence-compétence, la juridiction étatique saisie d'un litige couvert par une convention d'arbitrage doit en principe se déclarer incompétente si une partie le soulève, sauf si le tribunal arbitral n'est pas encore saisi et que la convention est manifestement nulle ou inapplicable. Sa méconnaissance peut donc retarder et renchérir l'action.",
      },
    ],
    relatedHeading: "Autres domaines d'intervention",
    related: [
      { label: "Contentieux commercial et contractuel", href: "/contentieux-commercial" },
      { label: "Contentieux post-acquisition", href: "/contentieux-post-acquisition" },
      {
        label: "Rupture brutale et concurrence déloyale",
        href: "/rupture-brutale-concurrence-deloyale",
      },
      { label: "Procédures d'urgence et mesures conservatoires", href: "/procedures-d-urgence" },
    ],
    contactSubject: "Litige à dimension internationale",
  },
  {
    slug: "le-cabinet",
    kind: "cabinet",
    index: "—",
    label: "Le Cabinet",
    title: "Maître Pierre Blexmann, avocat au Barreau de Paris",
    description:
      "Cabinet Blexmann Avocats à Paris 16ᵉ (53 avenue Victor Hugo) : pratique dédiée au contentieux des affaires, parcours et méthode de travail.",
    h1: "Maître Pierre Blexmann, avocat au Barreau de Paris",
    lead: "Maître Pierre Blexmann consacre sa pratique aux contentieux qui engagent la valeur, la gouvernance et la continuité de l’entreprise.",
    sections: [
      {
        rail: "Parcours",
        heading: "Parcours et implantation parisienne",
        paragraphs: [
          /* [À CONFIRMER] TODO: date de prestation de serment (4 janvier 2006) et toque (E0140) à reconfirmer par l'avocat. */
          "Après avoir prêté serment le 4 janvier 2006, Maître Pierre Blexmann a fondé en 2013 le Cabinet Blexmann Avocats, établi au 53 avenue Victor Hugo, dans le 16ᵉ arrondissement de Paris. Il y exerce à titre individuel, en conseil précontentieux comme en contentieux.",
          "Il est également l'auteur d'une série de trois articles publiés en 2020 sur Village de la Justice, consacrée au régime probatoire de la discrimination dans les relations de travail.",
        ],
      },
      {
        rail: "Pratique",
        heading: "Un exercice dédié aux litiges d'entreprises et de dirigeants",
        paragraphs: [
          "Le cabinet accompagne PME, ETI, groupes, dirigeants, actionnaires et investisseurs dans leurs principaux différends économiques, commerciaux et sociétaires : inexécution contractuelle et impayés, conflits entre associés, responsabilité des dirigeants, contentieux post-acquisition, rupture brutale de relations commerciales et concurrence déloyale, procédures d'urgence et litiges transfrontaliers.",
          "La représentation devant les juridictions étatiques s'articule avec la pratique des modes alternatifs de règlement des différends — négociation encadrée, médiation, conciliation et arbitrage — afin de retenir la voie la plus cohérente avec les objectifs économiques du client.",
        ],
      },
      {
        rail: "Méthode",
        heading: "Méthode de travail et déontologie",
        paragraphs: [
          "Un litige d’affaires se conduit avec méthode : diagnostic précis, choix assumés, calendrier tenu. Chaque dossier débute par l’examen des faits et des pièces, avant la définition de la voie procédurale ou amiable retenue.",
          /* [À CONFIRMER] TODO: modalités détaillées d'honoraires à compléter après validation de l'avocat. */
          "L'ensemble des échanges avec le cabinet est couvert par le secret professionnel de l'avocat. Les modalités d'honoraires sont présentées avant toute intervention.",
        ],
      },
    ],
    faqs: [
      {
        question: "Quels profils de clients le cabinet accompagne-t-il ?",
        answer:
          "Des entreprises françaises et étrangères (PME, ETI et groupes), ainsi que des dirigeants, mandataires sociaux, associés, actionnaires et investisseurs confrontés à un précontentieux ou à un contentieux d'affaires.",
      },
      {
        question: "Où est situé le Cabinet Blexmann Avocats ?",
        answer:
          "Le cabinet est situé au 53 avenue Victor Hugo, 75116 Paris, et reçoit sur rendez-vous.",
      },
      {
        question: "Comment sont déterminés les honoraires ?",
        answer:
          "Les modalités d'honoraires sont présentées avant toute intervention, afin que le périmètre de la mission et ses conditions financières soient clairement convenus en amont.",
      },
      {
        question: "Comment se déroule une première prise de contact ?",
        answer:
          "Vous pouvez exposer brièvement les faits, les parties concernées et les éventuelles échéances via le formulaire de contact ou par téléphone. Après examen de votre demande et vérification de l'absence de conflit d'intérêts, le cabinet vous indique les suites envisageables.",
      },
    ],
    relatedHeading: "Découvrir également",
    related: [
      { label: "Contentieux commercial et contractuel", href: "/contentieux-commercial" },
      { label: "Conflits entre associés et actionnaires", href: "/conflits-entre-associes" },
      { label: "Responsabilité des dirigeants", href: "/responsabilite-des-dirigeants" },
      { label: "Publications externes de Maître Pierre Blexmann", href: "/publications" },
    ],
    contactSubject: "Autre litige d'entreprise",
  },
  {
    slug: "publications",
    kind: "publications",
    index: "—",
    label: "Publications",
    title: "Publications | Cabinet Blexmann Avocats, Paris",
    description:
      "Publications externes vérifiées de Maître Pierre Blexmann sur Village de la Justice : preuve de la discrimination dans les relations de travail.",
    h1: "Publications de Maître Pierre Blexmann",
    lead: "Contenus à portée strictement informative. Les publications référencées ci-dessous ne constituent ni une consultation juridique ni un conseil personnalisé et ne créent aucune relation avocat-client.",
    sections: [
      {
        rail: "Droit du travail",
        heading: "Publications externes — droit du travail",
        paragraphs: [
          "Série en trois volets rédigée par Maître Pierre Blexmann et parue sur la revue juridique en ligne Village de la Justice (avril à juin 2020), consacrée à l'administration de la preuve en matière de discrimination au travail : aménagement légal de la charge de la preuve, recevabilité des modes de preuve et rôle des différents acteurs.",
        ],
      },
    ],
    faqs: [
      {
        question: "Ces publications ont-elles valeur de consultation juridique ?",
        answer:
          "Non. Il s'agit d'articles de doctrine pratique à portée strictement générale et informative, qui ne sauraient remplacer l'analyse personnalisée d'un dossier au regard du droit positif en vigueur.",
      },
      {
        question: "Où consulter le texte intégral des articles ?",
        answer:
          "Chaque article est accessible gratuitement en texte intégral sur le site de Village de la Justice via les liens figurant dans la rubrique ci-dessus.",
      },
      {
        question: "D'autres analyses figurent-elles sur le site ?",
        answer:
          "Par souci de rigueur éditoriale, seuls les articles effectivement publiés et vérifiables sont référencés sur cette page.",
      },
      {
        question: "Peut-on reproduire tout ou partie de ces articles ?",
        answer:
          "Ces textes sont protégés par le Code de la propriété intellectuelle ; toute reproduction ou représentation suppose l'autorisation préalable de leur auteur et de l'éditeur concerné.",
      },
    ],
    relatedHeading: "Découvrir également",
    related: [
      { label: "Le Cabinet — Maître Pierre Blexmann", href: "/le-cabinet" },
      { label: "Contentieux commercial et contractuel", href: "/contentieux-commercial" },
      { label: "Conflits entre associés et actionnaires", href: "/conflits-entre-associes" },
      { label: "Contacter le Cabinet Blexmann Avocats", href: "/contact" },
    ],
    contactSubject: "Autre litige d'entreprise",
  },
];
