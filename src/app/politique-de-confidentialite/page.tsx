import type { Metadata } from "next";
import LegalArticle from "@/components/LegalArticle";
import { SITE } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

const TITLE = "Politique de confidentialité";
export const metadata: Metadata = pageMetadata({
  title: `${TITLE} — ${SITE.name}`,
  description:
    "Données de contact, préparation du courriel, secret professionnel et droits RGPD : la politique de confidentialité du Cabinet Blexmann Avocats.",
  path: "/politique-de-confidentialite",
});

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalArticle title={TITLE} slug="politique-de-confidentialite">
      <h2>1. Responsable du traitement</h2>
      <p>
        Maître Pierre Blexmann, exerçant à titre individuel sous la dénomination
        <strong> {SITE.name}</strong>, est responsable des traitements liés aux demandes qui lui
        sont adressées : {SITE.address.street}, {SITE.address.postalCode} {SITE.address.locality}
        &nbsp;— {SITE.registration}.
      </p>
      <p>
        Pour toute question : <a href={`mailto:${SITE.email}`} className="link-underline">{SITE.email}</a>
        {" "}ou <a href={SITE.phoneHref} className="link-underline">{SITE.phone}</a>.
      </p>

      <h2>2. Ce que fait le formulaire</h2>
      <p>
        Les champs servent uniquement à préparer, dans votre navigateur, un courriel destiné au
        cabinet : nom et prénom, adresse électronique, téléphone et société facultatifs, nature du
        dossier et résumé de la situation. Le contenu n’est ni transmis à un serveur de formulaire,
        ni conservé dans une base de données du Site, ni enregistré dans son stockage local.
      </p>
      <p>
        Le bouton « Préparer ma demande » sollicite l’ouverture de votre logiciel de messagerie.
        Vous devez vérifier et envoyer vous-même le courriel. En l’absence de messagerie configurée,
        vous pouvez copier le texte préparé dans votre service habituel. Le traitement et la
        conservation de ce brouillon par votre fournisseur de messagerie relèvent de ses propres
        conditions.
      </p>
      <p>
        Ne joignez aucun document sensible lors du premier contact et limitez le résumé aux faits
        nécessaires. Les données particulières visées à l’article 9 du RGPD, notamment les données
        de santé, ne sont pas demandées à ce stade.
      </p>

      <h2>3. Finalités et bases légales</h2>
      {/* [À CONFIRMER] TODO: valider le registre des traitements et les bases par finalité avec
          l’avocat. La case du formulaire confirme la lecture de cette notice : elle n’est pas
          présentée comme une base de consentement cumulée avec le contrat et l’intérêt légitime. */}
      <ul>
        <li>
          <strong>Étudier une mission demandée pour votre propre compte</strong> : mesures
          précontractuelles prises à votre demande (article 6, paragraphe 1, b du RGPD).
        </li>
        <li>
          <strong>Répondre à une sollicitation professionnelle, notamment pour une société</strong> :
          intérêt légitime du cabinet à examiner et à suivre les demandes reçues (article 6,
          paragraphe 1, f du RGPD).
        </li>
      </ul>
      <p>
        La case à cocher du formulaire atteste que vous avez pris connaissance de ces informations ;
        elle ne crée pas de relation avocat-client. Celle-ci suppose l’acceptation expresse du
        dossier après les vérifications nécessaires, notamment l’absence de conflit d’intérêts.
      </p>

      <h2>4. Destinataires et hébergement</h2>
      <p>
        Les courriels effectivement reçus sont destinés à Maître Pierre Blexmann et aux seules
        personnes habilitées à en connaître. Ils sont examinés dans le respect des obligations
        déontologiques de l’avocat, notamment du secret professionnel dans les conditions prévues
        par l’article 66-5 de la loi du 31 décembre 1971 et le Règlement intérieur national.
      </p>
      {/* [À CONFIRMER] TODO: confirmer les prestataires de messagerie, leurs contrats, lieux de
          traitement et éventuels transferts hors UE ; ne pas affirmer une localisation européenne. */}
      <p>
        Le Site statique est hébergé par Vercel Inc. L’hébergeur peut traiter des données techniques
        de connexion nécessaires à la fourniture et à la sécurité du service. Les champs du
        formulaire ne lui sont pas envoyés. Aucun service tiers de collecte de formulaire ni outil
        publicitaire n’est intégré à cette version.
      </p>

      <h2>5. Conservation</h2>
      {/* [À CONFIRMER] TODO: fixer les durées chiffrées et le calendrier d’effacement/archivage
          des courriels et journaux techniques ; aucune purge automatique n’est mise en œuvre par le Site. */}
      <p>
        Le Site ne conserve pas le texte préparé. Après envoi par votre messagerie, la conservation
        du courriel par le cabinet doit rester limitée au temps nécessaire à l’examen de la demande
        et au suivi des échanges. En cas d’ouverture d’un dossier, les obligations professionnelles,
        les délais de prescription et les nécessités d’archivage doivent être pris en compte. Vous
        pouvez contacter le cabinet pour connaître les modalités applicables à votre demande.
      </p>

      <h2>6. Vos droits</h2>
      <p>
        Dans les conditions prévues par le RGPD, vous disposez de droits d’accès, de rectification,
        d’effacement et de limitation du traitement. Le droit d’opposition s’applique notamment aux
        traitements fondés sur l’intérêt légitime ; le droit à la portabilité dépend de la base
        légale et des modalités du traitement. Le cas échéant, un consentement donné pour une autre
        finalité peut être retiré. Vous pouvez également définir des directives relatives au sort
        de vos données après votre décès.
      </p>
      <p>
        Pour exercer vos droits, écrivez à <a href={`mailto:${SITE.email}`} className="link-underline">{SITE.email}</a>
        {" "}ou au {SITE.address.street}, {SITE.address.postalCode} {SITE.address.locality}. Un
        justificatif d’identité n’est susceptible d’être demandé qu’en cas de doute raisonnable
        sur l’identité du demandeur.
      </p>
      <p>
        Vous pouvez adresser une réclamation à la Commission nationale de l’informatique et des
        libertés : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="link-underline">
          www.cnil.fr<span className="sr-only"> (nouvel onglet)</span>
        </a>.
      </p>

      <h2>7. Cookies et stockage</h2>
      <p>
        Aucun cookie publicitaire, outil de mesure d’audience ou stockage persistant des champs du
        formulaire n’est intégré au Site. Des mécanismes techniques de l’hébergeur peuvent être
        nécessaires au fonctionnement et à la sécurité de la navigation.
      </p>

      <h2>8. Navigation et courrier électronique</h2>
      <p>
        HTTPS protège les échanges de navigation avec le Site. Il ne constitue pas une garantie de
        chiffrement de bout en bout des courriels envoyés depuis votre messagerie. Ce formulaire
        n’est ni une messagerie sécurisée ni un espace de transfert de documents. Si des pièces
        sensibles sont nécessaires, le cabinet conviendra avec vous d’un mode de communication adapté.
      </p>
    </LegalArticle>
  );
}
