/**
 * Content and SEO metadata for the dedicated inner pages.
 *
 * Each entry drives a static route (App Router `generateStaticParams`) and
 * provides: <title> (< 60 chars), meta description (< 155 chars), one H1,
 * H2 sections, 3–5 FAQ items, a final CTA and internal links.
 */

export type PageSection = {
  heading: string;
  paragraphs: string[];
  /** Optional bullet list of situations handled (procedural, not results). */
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
  /** Descriptive internal links shown at the end of the page. */
  related: { label: string; href: string }[];
  contactSubject: ContactSubject;
};

import type { ContactSubject } from "./site";

export const INNER_PAGES: InnerPage[] = [
  {
    slug: "contentieux-commercial",
    kind: "expertise",
    index: "01",
    label: "Contentieux commercial",
    title: "Avocat litige commercial Paris | Impayés et contrats",
    description:
      "Factures impayées, inexécution de contrat, résiliation contestée : examen de votre litige commercial à Paris et des voies d'action possibles.",
    h1: "Avocat en litiges commerciaux et contractuels à Paris",
    lead: "Les différends commerciaux touchent d'abord la trésorerie : un impayé qui s'installe ou un contrat mal exécuté se répercute sur l'exploitation bien avant d'être jugé. Le dossier se traite dès les premiers échanges écrits.",
    sections: [
      {
        heading: "Les situations les plus fréquentes",
        paragraphs: [
          "Un client qui ne règle pas ses factures, un fournisseur qui livre en retard ou hors spécifications, un contrat résilié sans que les clauses soient respectées : ces différends naissent rarement d'un désaccord de droit, mais d'une exécution défaillante. La difficulté consiste ensuite à rapporter la preuve du manquement et à chiffrer ce qu'il a réellement coûté.",
        ],
        points: [
          "Recouvrement de créances et de factures impayées",
          "Inexécution, résolution et résiliation de contrats commerciaux",
          "Litiges fournisseurs, sous-traitance et livraisons non conformes",
          "Conditions générales, bons de commande et clauses limitatives",
        ],
      },
      {
        heading: "Comment le dossier est examiné",
        paragraphs: [
          "L'examen commence par les écrits : contrat ou conditions générales, bons de commande, correspondances, mises en demeure, éléments comptables. La qualification du manquement et la mesure du préjudice dépendent directement de la qualité de ces pièces.",
          "Le dialogue avec l'adversaire est ensuite mis en forme : une mise en demeure précise sur les faits et les fondements juridiques ouvre souvent une négociation sérieuse là où des échanges informels restaient sans effet.",
        ],
      },
      {
        heading: "Les voies d'action possibles",
        paragraphs: [
          "Selon l'enjeu, la nature de la créance et l'urgence, plusieurs voies peuvent être envisagées : injonction de payer pour une créance contractuelle liquide, assignation au fond devant la juridiction compétente, référé lorsqu'une mesure provisoire s'impose, ou protocole transactionnel lorsque les parties cherchent à clore le différend.",
          "Le choix est présenté avec ses conséquences concrètes : durée, coûts prévisibles, risques procéduraux et incidence sur la relation commerciale.",
        ],
      },
    ],
    faqs: [
      {
        question: "Faut-il impérativement un contrat écrit pour agir ?",
        answer:
          "Non. Un accord commercial peut se démontrer par des échanges, des bons de commande ou un comportement constant des parties. L'écrit facilite toutefois la preuve du contenu des obligations et de leur étendue.",
      },
      {
        question: "Que faire face à un impayé ancien ?",
        answer:
          "La vérification de la prescription et des pièces justificatives précède toute action. Selon le cas, une mise en demeure, une injonction de payer ou une assignation au fond peuvent être envisagées.",
      },
      {
        question: "La procédure est-elle toujours nécessaire ?",
        answer:
          "Non. Un protocole transactionnel, négocié avec un cadre clair, met fin au différend et peut être plus adapté lorsque la relation commerciale doit se poursuivre ou se terminer proprement.",
      },
      {
        question: "Quels documents préparer pour un premier échange ?",
        answer:
          "Le contrat ou les conditions générales applicables, les factures et livraisons concernées, les échanges avec l'adversaire et, si possible, les éléments chiffrés du préjudice. Aucun document sensible n'est nécessaire pour un premier contact.",
      },
    ],
    related: [
      { label: "Conflits entre associés et actionnaires", href: "/conflits-entre-associes" },
      {
        label: "Rupture brutale de relations commerciales et concurrence déloyale",
        href: "/rupture-brutale-concurrence-deloyale",
      },
      { label: "Procédures d'urgence et référés", href: "/procedures-d-urgence" },
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
      "Blocage de gouvernance, exclusion, contestation de décisions : traitement du conflit entre associés à Paris et organisation d'une sortie sécurisée.",
    h1: "Avocat en conflits entre associés et actionnaires à Paris",
    lead: "Un désaccord entre associés ne reste jamais purement juridique : il bloque les décisions ordinaires, se voit par les banques et les salariés, et peut détruire rapidement la valeur construite par l'entreprise.",
    sections: [
      {
        heading: "Reconnaître le blocage",
        paragraphs: [
          "Convocations contestées, décisions prises sans information d'un associé, comptes courants bloqués, révocations préparées sans concertation : ces signaux annoncent un conflit de gouvernance. Plus l'intervention est précoce, plus les options restent nombreuses.",
          "Un contrôle des formalités permet souvent de rétablir une base saine avant d'engager une action : convocations réglementaires, procès-verbaux, conventions réglementées, information des associés.",
        ],
      },
      {
        heading: "Les différentes voies de traitement",
        paragraphs: [
          "La négociation encadrée par les conseils reste la première voie à explorer : elle aboutit, lorsque les positions restent compatibles, à un protocole organisant la poursuite de la relation ou la séparation.",
          "L'action judiciaire s'impose lorsque des abus doivent être sanctionnés ou des décisions annulées : abus de majorité ou de minorité, contestation d'assemblées, révocation de mandataire, exclusion contestée, désignation d'un mandataire ad hoc ou d'une expertise de gestion. Un référé peut être nécessaire pour faire cesser un trouble manifeste ou obtenir la communication de documents sociaux.",
        ],
      },
      {
        heading: "Organiser une sortie",
        paragraphs: [
          "Beaucoup de conflits se terminent par une sortie : rachat de droits sociaux, retrait, exclusion lorsque les statuts la prévoient. La valorisation des titres et sa méthode, les garanties et ajustements de prix, le calendrier et la confidentialité vis-à-vis des salariés et des partenaires décident de la solidité de l'accord.",
          "La rédaction du protocole demande la même rigueur qu'un acte de cession : clauses de non-concurrence proportionnées, sort des comptes courants, libération réciproque des griefs, calendrier de paiement.",
        ],
      },
    ],
    faqs: [
      {
        question: "Peut-on empêcher une assemblée de se tenir ?",
        answer:
          "Des irrégularités de convocation ou d'information peuvent être invoquées avant ou après la réunion, selon les cas. La voie retenue dépend des statuts et de la nature du vice allégué.",
      },
      {
        question: "Un associé peut-il être exclu ?",
        answer:
          "L'exclusion suppose une base dans les statuts ou le pacte d'associés et le respect des procédures prévues. Son absence ou sa mauvaise exécution exposent la mesure à contestation.",
      },
      {
        question: "Comment est fixée la valeur des titres ?",
        answer:
          "La méthode retenue dépend des statuts, du pacte et de la négociation. Elle doit être précisée dans le protocole, avec les garanties et les modalités de paiement associées.",
      },
      {
        question: "Le conflit doit-il rester confidentiel ?",
        answer:
          "Les voies négociées, médiation en tête, protègent la confidentialité des échanges. La voie judiciaire, elle, comporte une part de publicité des audiences et des décisions.",
      },
    ],
    related: [
      { label: "Responsabilité des dirigeants", href: "/responsabilite-des-dirigeants" },
      { label: "Contentieux post-acquisition", href: "/contentieux-post-acquisition" },
      { label: "Procédures d'urgence et référés", href: "/procedures-d-urgence" },
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
      "Faute de gestion alléguée, action en responsabilité, procédure collective : défense du dirigeant à Paris, du premier grief à l'audience.",
    h1: "Avocat en responsabilité des dirigeants à Paris",
    lead: "Exercer un mandat social expose personnellement : la responsabilité civile du dirigeant peut être recherchée sur son patrimoine propre, parfois dans des délais procéduraux contraints.",
    sections: [
      {
        heading: "Les mises en cause les plus courantes",
        paragraphs: [
          "Action en responsabilité pour faute de gestion dirigée contre le mandataire social, demandes formées par un associé ou par un créancier, mise en cause dans le cadre d'une procédure collective : ces situations se caractérisent par des griefs formalisés et des délais de réaction courts.",
          "La première étape consiste à vérifier le fondement réel des griefs, la qualité de leur auteur et le délai dont dispose le dirigeant pour répondre.",
        ],
        points: [
          "Actions en responsabilité pour faute de gestion",
          "Défense du dirigeant dans le cadre d'une procédure collective",
          "Mise en cause personnelle et enjeux patrimoniaux",
          "Contestation de décisions prises en qualité de mandataire",
        ],
      },
      {
        heading: "Organiser la réponse",
        paragraphs: [
          "La réponse se prépare dès la première notification : rassemblement des délibérations, procès-verbaux, comptes, attestations et correspondances utiles, puis mise en forme d'un argumentaire qui distingue les faits reprochés et les décisions de gestion relevant du pouvoir discrétionnaire du dirigeant.",
          "La défense est conduite jusqu'à l'audience et, le cas échéant, jusqu'à l'exécution de la décision.",
        ],
      },
      {
        heading: "Confidentialité et incidence sur l'entreprise",
        paragraphs: [
          "Une mise en cause du dirigeant retentit sur la gouvernance et sur la perception de l'entreprise par ses partenaires. Les voies négociées peuvent, selon les cas, limiter cette exposition ; la voie judiciaire comporte une part de publicité.",
          "Les échanges avec l'avocat sont couverts par le secret professionnel.",
        ],
      },
    ],
    faqs: [
      {
        question: "Qu'est-ce qu'une faute de gestion ?",
        answer:
          "Il s'agit d'une gestion contraire à l'intérêt social, appréciée au cas par cas par le juge. Toute décision délicate n'est pas fautive : la distinction se fait selon les circonstances et les informations dont disposait le dirigeant.",
      },
      {
        question: "Qui peut agir contre un dirigeant ?",
        answer:
          "Selon les cas : la société, un associé agissant individuellement, un créancier, ou l'organe de la procédure collective. Les conditions et délais varient selon l'auteur de l'action.",
      },
      {
        question: "Mon patrimoine personnel est-il exposé ?",
        answer:
          "Une condamnation peut, dans certains cas, être prononcée à titre personnel. L'analyse porte sur le fondement de l'action, la qualité du demandeur et l'étendue du préjudice allégué.",
      },
      {
        question: "Que faire dès réception d'une notification de griefs ?",
        answer:
          "Réagir dans les délais, sans répondre directement à l'adversaire : identifier les pièces, dresser la chronologie des faits et faire examiner les griefs avant toute réponse écrite.",
      },
    ],
    related: [
      { label: "Conflits entre associés et actionnaires", href: "/conflits-entre-associes" },
      { label: "Procédures d'urgence et référés", href: "/procedures-d-urgence" },
      { label: "Contentieux post-acquisition", href: "/contentieux-post-acquisition" },
    ],
    contactSubject: "Responsabilité des dirigeants",
  },
  {
    slug: "contentieux-post-acquisition",
    kind: "expertise",
    index: "04",
    label: "Post-acquisition",
    title: "Avocat contentieux post-acquisition Paris | Blexmann",
    description:
      "Garantie d'actif et de passif, prix et earn-out, comptes discutés : traitement du contentieux post-acquisition à Paris après une cession.",
    h1: "Avocat en contentieux post-acquisition à Paris",
    lead: "Les suites d'une cession donnent lieu à des différends techniques : garantie d'actif et de passif, ajustement de prix, complément de prix, engagements de non-concurrence. La rédaction des actes commande l'analyse.",
    sections: [
      {
        heading: "Les différends qui suivent une cession",
        paragraphs: [
          "Une garantie d'actif et de passif est activée, des passifs non révélés apparaissent, des comptes provisionnés sont discutés, un complément de prix est contesté ou un engagement de non-concurrence est méconnu : ces différends se jouent sur la lecture des actes et des pièces comptables.",
        ],
        points: [
          "Mise en œuvre et contestation de garanties d'actif et de passif",
          "Litiges de prix, d'ajustement comptable et d'earn-out",
          "Exécution des engagements post-cession et de non-concurrence",
          "Contestation de la consistance du passif garanti",
        ],
      },
      {
        heading: "L'instruction du dossier",
        paragraphs: [
          "L'examen part des actes de cession et de leurs annexes : périmètre de la garantie, exclusions, plafonds et franchises, clauses de procédure de mise en œuvre, délais de réclamation et de forclusion. Les pièces comptables et les éléments d'expertise viennent ensuite étayer ou contredire le chiffrage.",
          "Le respect des formalités de notification prévues au contrat conditionne souvent la recevabilité de la réclamation.",
        ],
      },
      {
        heading: "Négociation ou procédure",
        paragraphs: [
          "Selon les clauses et l'enjeu, la discussion entre conseils, une expertise amiable contradictoire, une procédure au fond ou un référé peuvent être envisagés. Lorsque les actes prévoient une clause d'arbitrage, celle-ci doit être vérifiée avant toute assignation.",
        ],
      },
    ],
    faqs: [
      {
        question: "Dans quel délai activer une garantie de passif ?",
        answer:
          "Les actes fixent généralement des délais de réclamation et des formalités de notification. Leur respect conditionne la recevabilité de la mise en œuvre de la garantie.",
      },
      {
        question: "Le vendeur peut-il contester le chiffrage ?",
        answer:
          "Oui : la discussion porte sur la consistance du passif, sur son caractère garanti et sur l'existence d'exclusions, de plafonds ou de franchises prévus aux actes.",
      },
      {
        question: "Le complément de prix peut-il être contesté ?",
        answer:
          "Le différend porte le plus souvent sur la réalisation des critères fixés au contrat ou sur la méthode de calcul des éléments retenus.",
      },
      {
        question: "Faut-il respecter une clause d'arbitrage ?",
        answer:
          "Lorsque les actes comportent une clause compromissoire, elle doit être vérifiée avant toute assignation, sous peine d'irrecevabilité.",
      },
    ],
    related: [
      { label: "Conflits entre associés et actionnaires", href: "/conflits-entre-associes" },
      { label: "Responsabilité des dirigeants", href: "/responsabilite-des-dirigeants" },
      { label: "Contentieux commercial et contractuel", href: "/contentieux-commercial" },
    ],
    contactSubject: "Contentieux post-acquisition",
  },
  {
    slug: "rupture-brutale-concurrence-deloyale",
    kind: "expertise",
    index: "05",
    label: "Rupture et concurrence",
    title: "Rupture brutale de relations commerciales | Avocat Paris",
    description:
      "Rupture brutale de relations commerciales établies, concurrence déloyale et parasitisme : appréciation du préavis et du préjudice avec un avocat à Paris.",
    h1: "Rupture brutale et concurrence déloyale : avocat à Paris",
    lead: "Une relation commerciale ancienne interrompue sans préavis écrit suffisant, ou un concurrent qui capte votre clientèle : ces agissements engagent la responsabilité de leur auteur dès lors que les preuves sont réunies à temps.",
    sections: [
      {
        heading: "La rupture brutale de relations commerciales établies",
        paragraphs: [
          "Interrompre brutalement une relation commerciale établie, sans préavis écrit tenant compte de sa durée et des circonstances, engage la responsabilité de son auteur sur le fondement de l'article L. 442-1 du code de commerce. Le texte vise les relations suivies entre partenaires commerciaux présentant ancienneté, régularité et volume d'affaires significatifs.",
          "La protection ne dépend pas de l'existence d'un contrat écrit : un courant d'affaires durable, même non formalisé, peut constituer une relation établie. À l'inverse, des commandes ponctuelles ne suffisent généralement pas.",
        ],
        points: [
          "Rupture brutale de relations commerciales établies (art. L. 442-1 C. com.)",
          "Concurrence déloyale, dénigrement et parasitisme",
          "Débauchage fautif et détournement de clientèle",
          "Défense de l'entreprise à laquelle une rupture est reprochée",
        ],
      },
      {
        heading: "Préavis et préjudice",
        paragraphs: [
          "Aucune durée de préavis n'est fixée une fois pour toutes : les juges apprécient au cas par cas l'ancienneté de la relation, la part du chiffre d'affaires concerné, les investissements spécifiques, l'état de dépendance économique et les usages du secteur. Le préavis doit être écrit, daté et non équivoque.",
          "Le préjudice réparable correspond, en pratique, au gain manqué pendant la durée du préavis qui aurait dû être respecté, établi à partir de comptes documentés.",
        ],
      },
      {
        heading: "Concurrence déloyale et preuve",
        paragraphs: [
          "La concurrence déloyale suppose la démonstration d'un agissement fautif — confusion, dénigrement, désorganisation, parasitisme — et d'un préjudice qui en résulte. La constitution du dossier dans le temps utile est déterminante : contrats, statistiques de chiffre d'affaires, échanges, attestations et, le cas échéant, constats.",
          "La même rigueur s'impose à l'entreprise à laquelle une rupture ou un acte déloyal est reproché : formaliser le préavis, en expliquer les motifs et conserver la trace des difficultés objectives.",
        ],
      },
    ],
    faqs: [
      {
        question: "Qu'est-ce qu'une relation commerciale établie ?",
        answer:
          "Un courant d'affaires ancien, régulier et significatif entre deux partenaires, qu'il soit ou non formalisé par un contrat écrit.",
      },
      {
        question: "Le préavis doit-il être écrit ?",
        answer:
          "Oui. Une rupture notifiée oralement ou par un courriel ambigu peut rester brutale, même si un délai a été matériellement laissé.",
      },
      {
        question: "Comment le préjudice est-il chiffré ?",
        answer:
          "Le plus souvent par la marge escomptée pendant la durée du préavis qui aurait dû être respecté, à partir de comptes documentés.",
      },
      {
        question: "Existe-t-il des cas où le préavis peut être réduit ?",
        answer:
          "Des manquements graves et objectivement établis du partenaire peuvent, selon les cas, justifier une réduction ou une dispense de préavis. Leur preuve doit être conservée.",
      },
    ],
    related: [
      { label: "Contentieux commercial et contractuel", href: "/contentieux-commercial" },
      { label: "Procédures d'urgence et référés", href: "/procedures-d-urgence" },
      { label: "Contentieux à dimension internationale", href: "/contentieux-international" },
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
      "Référé, mesures conservatoires et protection des preuves : intervention rapide devant les juridictions parisiennes pour un litige d'affaires.",
    h1: "Avocat en référés et procédures d'urgence à Paris",
    lead: "Lorsque la situation évolue vite, attendre une procédure au fond peut rendre le préjudice difficilement réversible : preuve menacée de disparition, actifs en voie de dissipation, trouble manifestement illicite.",
    sections: [
      {
        heading: "Les situations qui appellent une mesure d'urgence",
        paragraphs: [
          "Trouble manifestement illicite, disparition imminente d'une preuve, organisation d'actifs rendant une condamnation ultérieure illusoire, créance en péril : ces configurations justifient une saisine rapide du juge des référés ou une requête adaptée.",
        ],
        points: [
          "Référés, mesures provisoires et mesures d'instruction in futurum",
          "Saisies et mesures conservatoires",
          "Séquestre et conservation de pièces",
          "Exécution provisoire et cessation d'un trouble",
        ],
      },
      {
        heading: "Ce qui détermine l'issue du référé",
        paragraphs: [
          "Le référé se décide sur des pièces : il faut démontrer l'urgence ou le caractère manifestement illicite, et justifier de la mesure sollicitée. La qualité du dossier au dépôt est donc déterminante, davantage que la longueur des écritures.",
          "La demande doit rester proportionnée : le juge des référés n'a pas vocation à trancher un litige qui relève du fond lorsque la contestation sérieuse est sérieusement discutée.",
        ],
      },
      {
        heading: "Préparer la suite du dossier",
        paragraphs: [
          "Une mesure obtenue en référé n'est qu'une étape. La préparation du fond — pièces, qualification, chiffrage du préjudice — se conduit en parallèle afin de ne pas subir la suite de la procédure.",
        ],
      },
    ],
    faqs: [
      {
        question: "Qu'est-ce qu'un référé ?",
        answer:
          "Une procédure rapide permettant d'obtenir du juge une mesure provisoire, sans trancher au fond les questions qui présentent une contestation sérieuse.",
      },
      {
        question: "Peut-on conserver une preuve avant tout procès ?",
        answer:
          "Des mesures d'instruction in futurum peuvent être sollicitées avant tout procès, lorsqu'il existe un motif légitime de conserver ou d'établir la preuve de faits dont dépend la solution du litige.",
      },
      {
        question: "Une ordonnance de référé est-elle définitive ?",
        answer:
          "Elle tranche la mesure sollicitée et est, selon les cas, assortie de l'exécution provisoire, mais elle ne préjuge pas nécessairement de l'issue du litige au fond.",
      },
      {
        question: "Que faire dès réception d'une assignation ?",
        answer:
          "Vérifier le délai de comparution figurant sur l'acte et faire examiner le dossier sans attendre : ce délai conditionne la possibilité de comparoir et de solliciter des mesures.",
      },
    ],
    related: [
      { label: "Contentieux commercial et contractuel", href: "/contentieux-commercial" },
      { label: "Responsabilité des dirigeants", href: "/responsabilite-des-dirigeants" },
      { label: "Rupture brutale et concurrence déloyale", href: "/rupture-brutale-concurrence-deloyale" },
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
      "Compétence juridictionnelle, loi applicable, exécution à l'étranger : traitement d'un litige commercial international depuis Paris.",
    h1: "Avocat en contentieux commercial international à Paris",
    lead: "Un litige qui traverse les frontières ajoute des questions qui pèsent directement sur l'issue : quelle juridiction est compétente, quelle loi s'applique, et comment la décision sera-t-elle exécutée ?",
    sections: [
      {
        heading: "Les questions propres aux litiges transfrontaliers",
        paragraphs: [
          "Contrat régi par un droit étranger, contrepartie établie hors de France, clause d'arbitrage ou de juridiction étrangère, décision à faire exécuter à l'étranger : chaque question doit être traitée avant d'engager une action, car elle détermine la voie disponible et le coût du dossier.",
        ],
        points: [
          "Litiges commerciaux et contractuels internationaux",
          "Compétence juridictionnelle et loi applicable",
          "Clause d'arbitrage et clause d'élection de for",
          "Exécution des décisions et sentences à l'étranger",
        ],
      },
      {
        heading: "Arbitrage ou juridiction étatique",
        paragraphs: [
          "L'arbitrage offre une décision contraignante, rendue par des arbitres souvent choisis pour leur connaissance technique du secteur, dans un cadre généralement confidentiel. Les juridictions étatiques demeurent nécessaires lorsqu'une mesure conservatoire ou une décision exécutoire immédiate s'impose.",
          "La présence d'une clause compromissoire ou d'une clause d'élection de for dans les actes doit être vérifiée avant toute assignation, sous peine d'irrecevabilité.",
        ],
      },
      {
        heading: "Coordination des dossiers",
        paragraphs: [
          "Lorsque le différend implique plusieurs juridictions, la cohérence des écritures et des positions défendues devient un enjeu en soi. Le cabinet s'appuie, pour ces dossiers, sur des avocats exerçant dans les juridictions concernées afin de maintenir une ligne de défense unique.",
        ],
      },
    ],
    faqs: [
      {
        question: "Quelle juridiction est compétente dans un litige international ?",
        answer:
          "La réponse dépend des règles de compétence applicables, de la présence d'une clause d'élection de for et du lieu d'établissement des parties. Elle doit être analysée avant toute action.",
      },
      {
        question: "Quelle loi s'applique au contrat ?",
        answer:
          "La loi choisie par les parties s'applique en priorité. À défaut de choix, les règles de conflit de lois permettent de désigner la loi applicable.",
      },
      {
        question: "Une sentence arbitrale est-elle exécutable à l'étranger ?",
        answer:
          "Les sentences bénéficient de mécanismes de reconnaissance internationaux, sous réserve de conditions propres à chaque État et d'éventuelles causes de refus.",
      },
      {
        question: "Faut-il respecter une clause d'arbitrage ?",
        answer:
          "Lorsqu'une clause compromissoire existe, elle doit être vérifiée avant toute assignation : son mépris peut entraîner l'irrecevabilité de l'action.",
      },
    ],
    related: [
      { label: "Contentieux commercial et contractuel", href: "/contentieux-commercial" },
      { label: "Contentieux post-acquisition", href: "/contentieux-post-acquisition" },
      { label: "Procédures d'urgence et référés", href: "/procedures-d-urgence" },
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
      "Cabinet Blexmann Avocats, Paris 16ᵉ : contentieux des affaires, conflits entre associés, responsabilité des dirigeants. Présentation du cabinet.",
    h1: "Maître Pierre Blexmann, avocat au Barreau de Paris",
    lead: "Avocat au Barreau de Paris, Maître Pierre Blexmann consacre sa pratique aux litiges qui engagent la valeur, la gouvernance et la continuité de l'entreprise.",
    sections: [
      {
        heading: "Parcours",
        paragraphs: [
          "Inscrit au Barreau de Paris depuis sa prestation de serment le 4 janvier 2006, Maître Pierre Blexmann fonde en 2013 le cabinet établi au 53 avenue Victor Hugo, à Paris 16ᵉ. Il exerce en forme individuelle, en conseil et en contentieux.",
          "Il a par ailleurs publié une série d'articles sur Village de la Justice consacrée à la preuve de la discrimination dans les relations de travail.",
        ],
      },
      {
        heading: "Champ de pratique",
        paragraphs: [
          "Le cabinet assiste entreprises, dirigeants, actionnaires et investisseurs dans leurs principaux contentieux commerciaux, contractuels, sociétaires, économiques et transfrontaliers : litiges commerciaux et contractuels, conflits entre associés, responsabilité des dirigeants, contentieux post-acquisition, rupture brutale et concurrence déloyale, procédures d'urgence et litiges à dimension internationale.",
          "La pratique du procès s'accompagne de celle des modes alternatifs de règlement des différends — négociation, médiation, conciliation, arbitrage — selon l'objectif poursuivi.",
        ],
      },
      {
        heading: "Méthode",
        paragraphs: [
          "Un litige d'affaires se conduit comme un projet — diagnostic précis, choix assumés, calendrier tenu. Chaque dossier commence par l'analyse des faits et des pièces, avant la définition de la voie à suivre.",
          "Les échanges sont couverts par le secret professionnel. Les modalités d'honoraires sont présentées avant toute intervention.",
        ],
      },
    ],
    faqs: [
      {
        question: "Quels clients le cabinet assiste-t-il ?",
        answer:
          "Entreprises de tailles diverses, dirigeants, actionnaires et investisseurs, pour leurs contentieux commerciaux, sociétaires et transfrontaliers.",
      },
      {
        question: "Où se trouve le cabinet ?",
        answer:
          "Au 53 avenue Victor Hugo, 75116 Paris. Sur rendez-vous.",
      },
      {
        question: "Comment sont fixés les honoraires ?",
        answer:
          "Les modalités d'honoraires sont présentées avant toute intervention, afin que leur champ et leur coût soient clairement définis.",
      },
      {
        question: "Le cabinet traite-t-il les litiges du travail ?",
        answer:
          "La pratique est centrée sur le contentieux des affaires. Exposez votre situation : si le dossier relève d'un autre champ, le cabinet vous orientera.",
      },
    ],
    related: [
      { label: "Publications du cabinet", href: "/publications" },
      { label: "Contentieux commercial et contractuel", href: "/contentieux-commercial" },
      { label: "Conflits entre associés et actionnaires", href: "/conflits-entre-associes" },
    ],
    contactSubject: "Autre litige d'entreprise",
  },
  {
    slug: "publications",
    kind: "publications",
    index: "—",
    label: "Publications",
    title: "Publications — Cabinet Blexmann Avocats, Paris",
    description:
      "Publications externes de Maître Pierre Blexmann : série consacrée à la preuve de la discrimination dans les relations de travail, sur Village de la Justice.",
    h1: "Publications",
    lead: "Les contenus réunis ici ont une portée strictement informative : ils ne constituent ni une consultation juridique ni un conseil personnalisé.",
    sections: [
      {
        heading: "Publications externes — droit du travail",
        paragraphs: [
          "Série de trois articles publiés par Maître Pierre Blexmann sur Village de la Justice, consacrée à la preuve de la discrimination dans les relations de travail : régime de preuve allégé, modes et moyens de preuve recevables, puis apport des différents acteurs à l'établissement de la preuve.",
        ],
      },
    ],
    faqs: [
      {
        question: "Ces contenus constituent-ils un conseil juridique ?",
        answer:
          "Non. Ils ont une portée strictement informative et ne remplacent pas l'examen d'une situation particulière par un avocat.",
      },
      {
        question: "Les articles sont-ils accessibles en ligne ?",
        answer:
          "Oui, ils sont publiés sur le site Village de la Justice et accessibles par les liens indiqués dans la liste.",
      },
      {
        question: "Le cabinet publie-t-il d'autres contenus ?",
        answer:
          "D'autres notes peuvent être publiées ultérieurement. Seules les publications effectivement parues figurent sur cette page.",
      },
      {
        question: "Peut-on citer ou reprendre ces contenus ?",
        answer:
          "Ces contenus sont protégés par le droit de la propriété intellectuelle ; toute reprise suppose l'autorisation préalable de leur auteur et du support de publication.",
      },
    ],
    related: [
      { label: "Le Cabinet — Maître Pierre Blexmann", href: "/le-cabinet" },
      { label: "Contact et premier échange", href: "/contact" },
    ],
    contactSubject: "Autre litige d'entreprise",
  },
];
