import type { Metadata } from "next";
import LegalArticle from "@/components/LegalArticle";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité du Cabinet Blexmann Avocats : données transmises via le formulaire de contact, finalités, bases légales RGPD et vos droits.",
  alternates: { canonical: "/politique-de-confidentialite" },
  robots: { index: true, follow: true },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalArticle title="Politique de confidentialité" updated="Politique de confidentialité">
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

      <h2>2. Données collectées</h2>
      <p>
        Le formulaire de contact collecte uniquement les informations que vous saisissez&nbsp;: nom
        et prénom, adresse électronique, numéro de téléphone (facultatif), société (facultative),
        nature du dossier et description brève de la situation.
      </p>
      <p>
        Aucune donnée particulière au sens de l&apos;article&nbsp;9 du RGPD ni document confidentiel
        n&apos;est demandé lors de ce premier contact. Nous vous invitons à ne pas en inclure dans
        votre message initial.
      </p>

      <h2>3. Finalités et bases légales</h2>
      <ul>
        <li>
          <strong>Examen de votre demande et réponse à votre prise de contact</strong>&nbsp;:
          mesures précontractuelles prises à votre demande (article&nbsp;6.1.b du RGPD) et intérêt
          légitime du cabinet à traiter les sollicitations reçues (article&nbsp;6.1.f du RGPD),
          accompagnés de votre accord exprimé lors de l&apos;envoi du formulaire
          (article&nbsp;6.1.a du RGPD).
        </li>
      </ul>
      <p>
        L&apos;envoi du formulaire ne crée pas automatiquement de relation avocat-client&nbsp;;
        celle-ci suppose l&apos;acceptation expresse du dossier par le cabinet. Les échanges conduits
        avec un avocat relèvent du secret professionnel dans les conditions prévues par
        l&apos;article&nbsp;66-5 de la loi du 31&nbsp;décembre&nbsp;1971 et le Règlement intérieur
        national (RIN).
      </p>

      <h2>4. Site statique, destinataires et sous-traitants</h2>
      <p>
        Ce site est un site statique&nbsp;: il ne comporte ni base de données, ni compte
        utilisateur, ni stockage de messages sur ses propres serveurs. Les informations saisies dans
        le formulaire sont transmises depuis votre navigateur à un service tiers de formulaire, qui
        les achemine par courrier électronique au cabinet, en qualité de sous-traitant, sur
        instruction du cabinet et sous obligation de confidentialité.
      </p>
      {/* [À CONFIRMER] TODO: nommer le prestataire de formulaire retenu, son lieu d'hébergement
          des données et la signature d'un accord de sous-traitance (article 28 du RGPD). */}
      <p>
        Les messages sont destinés exclusivement au cabinet en charge de leur examen. Ils ne sont ni
        cédés ni vendus à des tiers. Le Site est hébergé par Vercel Inc.
      </p>

      <h2>5. Durée de conservation</h2>
      <p>
        Les données issues du formulaire de contact sont conservées le temps strictement nécessaire
        à l&apos;examen de votre demande et au suivi des échanges précontractuels, puis supprimées
        si aucune suite n&apos;est donnée, ou archivées selon les durées légales et déontologiques
        applicables en cas d&apos;ouverture d&apos;un dossier client.
      </p>

      <h2>6. Vos droits</h2>
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

      <h2>7. Cookies</h2>
      <p>
        Le Site n&apos;installe aucun cookie publicitaire ni traceur de mesure d&apos;audience sans
        votre consentement préalable. Seuls les mécanismes techniques strictement nécessaires au
        fonctionnement du service peuvent être utilisés.
      </p>

      <h2>8. Sécurité</h2>
      <p>
        Le cabinet met en œuvre des mesures techniques et organisationnelles appropriées afin de
        protéger les données transmises contre la perte, l&apos;accès non autorisé ou la divulgation
        accidentelle.
      </p>
    </LegalArticle>
  );
}
