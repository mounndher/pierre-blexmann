import type { Metadata } from "next";
import LegalArticle from "@/components/LegalArticle";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité du Cabinet BLEXMANN AVOCATS : site statique sans base de données, formulaire de contact par messagerie, finalités et droits RGPD.",
  alternates: { canonical: "/politique-de-confidentialite" },
  robots: { index: true, follow: true },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalArticle
      title="Politique de confidentialité"
      updated="Mise à jour en cours de validation par le cabinet"
    >
      <h2>1. Responsable du traitement</h2>
      <p>
        Le responsable du traitement des données personnelles est&nbsp;:
        <br />
        <strong>{SITE.legalName}</strong>, {SITE.address.street}, {SITE.address.postalCode}{" "}
        {SITE.address.locality} — {SITE.siren}
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

      <h2>2. Absence de collecte automatisée sur le Site</h2>
      <p>
        Le Site est entièrement statique et ne comporte ni base de données, ni espace client, ni
        formulaire transmettant des données à un serveur. Le formulaire de contact fonctionne
        localement dans votre navigateur&nbsp;: il prépare un courriel dans votre propre logiciel de
        messagerie, que vous restez libre d&apos;envoyer, de modifier ou d&apos;abandonner.
      </p>
      <p>
        Aucune donnée saisie dans ce formulaire n&apos;est enregistrée, transmise ou lue par le
        cabinet tant que vous n&apos;avez pas vous-même envoyé le message depuis votre messagerie.
      </p>

      <h2>3. Données effectivement reçues par le cabinet</h2>
      <p>
        Si vous envoyez le courriel ainsi préparé, le cabinet reçoit uniquement les informations que
        vous avez choisi d&apos;y faire figurer&nbsp;: nom et prénom, adresse électronique, numéro de
        téléphone et société le cas échéant, objet de la demande et description de votre situation.
      </p>
      <p>
        Aucune donnée particulière au sens de l&apos;article&nbsp;9 du RGPD (données de santé,
        opinions, etc.) n&apos;est demandée lors de ce premier contact. Nous vous invitons à ne pas
        joindre de document confidentiel à ce stade.
      </p>

      <h2>4. Finalités et bases légales</h2>
      <ul>
        <li>
          <strong>Examen de votre demande et réponse à votre prise de contact</strong>&nbsp;:
          exécution de mesures précontractuelles prises à votre demande (article&nbsp;6.1.b du RGPD)
          et intérêt légitime du cabinet à traiter les sollicitations reçues (article&nbsp;6.1.f du
          RGPD).
        </li>
      </ul>
      <p>
        La prise de contact ne crée pas automatiquement de relation avocat-client&nbsp;: celle-ci
        suppose l&apos;acceptation expresse du dossier par le cabinet. Les échanges conduits avec un
        avocat relèvent ensuite du secret professionnel dans les conditions prévues par
        l&apos;article&nbsp;66-5 de la loi du 31&nbsp;décembre&nbsp;1971 et le Règlement intérieur
        national (RIN).
      </p>

      <h2>5. Destinataires</h2>
      <p>
        Les informations reçues par courriel sont destinées exclusivement aux avocats et personnels
        habilités du cabinet en charge de l&apos;examen de votre demande. Elles ne sont ni cédées ni
        vendues à des tiers.
      </p>

      <h2>6. Durée de conservation</h2>
      <p>
        Les demandes reçues sont conservées pendant la durée strictement nécessaire à leur examen et
        au suivi des échanges précontractuels, puis supprimées si aucune suite n&apos;est donnée, ou
        archivées selon les durées légales et déontologiques applicables en cas d&apos;ouverture
        d&apos;un dossier client.
      </p>

      <h2>7. Vos droits</h2>
      <p>
        Conformément au RGPD et à la loi «&nbsp;Informatique et Libertés&nbsp;», vous disposez
        d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de limitation du
        traitement, d&apos;opposition et, le cas échéant, de portabilité de vos données. Vous pouvez
        également définir des directives relatives au sort de vos données après votre décès.
      </p>
      <p>
        Pour exercer ces droits, écrivez à{" "}
        <a href={`mailto:${SITE.email}`} className="link-underline">
          {SITE.email}
        </a>{" "}
        en précisant l&apos;objet de votre demande. Un justificatif d&apos;identité pourra être
        demandé uniquement en cas de doute raisonnable sur l&apos;identité du demandeur.
      </p>
      <p>
        Vous disposez également du droit d&apos;introduire une réclamation auprès de la CNIL —
        3&nbsp;place de Fontenoy, TSA&nbsp;80715, 75334 Paris Cedex&nbsp;07 —{" "}
        <a
          href="https://www.cnil.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline"
        >
          www.cnil.fr
        </a>
        .
      </p>

      <h2>8. Cookies et mesure d&apos;audience</h2>
      <p>
        Le Site ne dépose aucun cookie publicitaire, aucun traceur tiers et aucun outil de mesure
        d&apos;audience. Les polices de caractères et les images sont servies depuis le site lui-même
        ; aucun service externe n&apos;est sollicité lors de votre navigation, à l&apos;exception des
        liens vers des publications externes que vous choisissez d&apos;ouvrir.
      </p>

      <h2>9. Sécurité</h2>
      <p>
        Le cabinet met en œuvre des mesures techniques et organisationnelles appropriées afin de
        protéger les informations qu&apos;il reçoit contre la perte, l&apos;accès non autorisé ou la
        divulgation accidentelle.
      </p>
    </LegalArticle>
  );
}
