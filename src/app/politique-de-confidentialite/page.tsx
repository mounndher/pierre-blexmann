import type { Metadata } from "next";
import LegalArticle from "@/components/LegalArticle";
import { OG_IMAGE, SITE } from "@/content/site";

const TITLE = "Politique de confidentialité";
const DESCRIPTION =
  "Politique de confidentialité du Cabinet Blexmann Avocats : traitement des demandes de contact, bases légales RGPD, secret professionnel et vos droits.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/politique-de-confidentialite" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: `${SITE.url}/politique-de-confidentialite`,
    siteName: SITE.legalName,
    title: `${TITLE} — ${SITE.legalName}`,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalArticle title={TITLE} slug="politique-de-confidentialite">
      <h2>1. Responsable du traitement</h2>
      <p>
        Le responsable du traitement des données personnelles communiquées au cabinet est&nbsp;:
        <br />
        <strong>{SITE.legalName}</strong>, {SITE.address.street}, {SITE.address.postalCode}{" "}
        {SITE.address.locality} — {SITE.registration}
        <br />
        Contact&nbsp;:{" "}
        <a href={`mailto:${SITE.email}`} className="link-underline">
          {SITE.email}
        </a>{" "}
        —{" "}
        <a href={SITE.phoneHref} className="link-underline">
          {SITE.phone}
        </a>
      </p>

      <h2>2. Données communiquées</h2>
      <p>
        Lors d&apos;une prise de contact via le formulaire du Site, seules les informations que vous
        renseignez sont utilisées&nbsp;: nom et prénom, adresse électronique, numéro de téléphone
        (facultatif), société (facultative), nature du dossier et exposé synthétique de la
        situation.
      </p>
      <p>
        Aucune donnée particulière au sens de l&apos;article&nbsp;9 du RGPD ni pièce confidentielle
        n&apos;est sollicitée à ce stade. Nous vous invitons à ne pas en faire figurer dans votre
        premier message.
      </p>

      <h2>3. Finalités et bases légales</h2>
      <ul>
        <li>
          <strong>Examen de votre demande, vérification de l&apos;absence de conflit d&apos;intérêts et réponse à votre sollicitation</strong>
          &nbsp;: exécution de mesures précontractuelles prises à votre demande
          (article&nbsp;6.1.b du RGPD), intérêt légitime du cabinet à répondre aux demandes reçues
          (article&nbsp;6.1.f du RGPD) et consentement exprimé lors de l&apos;envoi du formulaire
          (article&nbsp;6.1.a du RGPD).
        </li>
      </ul>
      <p>
        L&apos;envoi d&apos;une demande ne crée pas, en soi, de relation avocat-client&nbsp;;
        celle-ci suppose l&apos;acceptation expresse du dossier par le cabinet. Les échanges avec un
        avocat sont couverts par le secret professionnel dans les conditions prévues par
        l&apos;article&nbsp;66-5 de la loi du 31&nbsp;décembre&nbsp;1971 et le Règlement intérieur
        national (RIN).
      </p>

      <h2>4. Site statique et destinataires</h2>
      <p>
        Le Site est conçu en architecture statique&nbsp;: il ne comporte ni base de données, ni
        compte utilisateur, ni service tiers de collecte de formulaire. Votre demande est préparée
        localement dans votre messagerie électronique, puis adressée à votre initiative au
        cabinet&nbsp;; aucune donnée issue du formulaire n&apos;est conservée sur ce Site.
      </p>
      <p>
        Les courriels adressés au cabinet sont destinés exclusivement à Maître Pierre Blexmann et,
        le cas échéant, aux personnes habilitées au sein du cabinet. Les données ne font
        l&apos;objet d&apos;aucune cession ni exploitation commerciale. L&apos;hébergement statique
        du Site est assuré par Vercel Inc.
      </p>

      <h2>5. Durée de conservation</h2>
      <p>
        Les données relatives à une demande de contact sont conservées pendant la durée strictement
        nécessaire à son examen et aux échanges précontractuels, puis supprimées lorsqu&apos;aucune
        suite n&apos;est donnée. En cas d&apos;ouverture d&apos;un dossier, elles sont conservées
        conformément aux durées légales de prescription et aux règles déontologiques de la
        profession d&apos;avocat.
      </p>

      <h2>6. Vos droits</h2>
      <p>
        Conformément au RGPD et à la loi «&nbsp;Informatique et Libertés&nbsp;», vous disposez
        d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de limitation du
        traitement, d&apos;opposition et, lorsque applicable, de portabilité de vos données, ainsi
        que du droit de retirer votre consentement à tout moment sans porter atteinte à la licéité
        du traitement antérieur. Vous pouvez également définir des directives relatives au sort de
        vos données après votre décès.
      </p>
      <p>
        Pour exercer ces droits, adressez votre demande à{" "}
        <a href={`mailto:${SITE.email}`} className="link-underline">
          {SITE.email}
        </a>{" "}
        ou par courrier postal au {SITE.address.street}, {SITE.address.postalCode}{" "}
        {SITE.address.locality}. Un justificatif d&apos;identité pourra être demandé uniquement en
        cas de doute raisonnable sur l&apos;identité du demandeur.
      </p>
      <p>
        Vous disposez enfin du droit d&apos;introduire une réclamation auprès de la Commission
        nationale de l&apos;informatique et des libertés (CNIL) — 3&nbsp;place de Fontenoy,
        TSA&nbsp;80715, 75334 Paris Cedex&nbsp;07 —{" "}
        <a
          href="https://www.cnil.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline"
        >
          www.cnil.fr
          <span className="sr-only"> (nouvel onglet)</span>
        </a>
        .
      </p>

      <h2>7. Cookies</h2>
      <p>
        Le Site n&apos;installe aucun cookie publicitaire ni traceur de mesure d&apos;audience.
        Seuls les éléments techniques strictement nécessaires à l&apos;affichage des pages peuvent
        être utilisés.
      </p>

      <h2>8. Sécurité</h2>
      <p>
        Le cabinet met en œuvre des mesures techniques et organisationnelles appropriées (dont le
        chiffrement HTTPS des communications) afin de protéger les informations échangées contre la
        perte, l&apos;altération ou l&apos;accès non autorisé.
      </p>
    </LegalArticle>
  );
}
