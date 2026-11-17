import type { Metadata } from "next";
import Link from "next/link";
import LegalArticle from "@/components/LegalArticle";
import { OG_IMAGE, SITE } from "@/content/site";

const TITLE = "Mentions légales";
const DESCRIPTION =
  "Mentions légales du Cabinet Blexmann Avocats, avocat inscrit au Barreau de Paris, 53 avenue Victor Hugo, 75116 Paris.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/mentions-legales" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: `${SITE.url}/mentions-legales`,
    siteName: SITE.legalName,
    title: `${TITLE} — ${SITE.legalName}`,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function MentionsLegalesPage() {
  return (
    <LegalArticle title={TITLE} slug="mentions-legales">
      <h2>1. Éditeur du site</h2>
      <p>Le présent site internet (le «&nbsp;Site&nbsp;») est édité par&nbsp;:</p>
      <p>
        <strong>{SITE.legalName}</strong>
        <br />
        {/* [À CONFIRMER] TODO: numéro de toque (E0140) et identifiant SIRET exact à valider. */}
        Avocat inscrit au {SITE.barreau} (Toque {SITE.toque})
        <br />
        Forme d&apos;exercice&nbsp;: exercice individuel
        <br />
        Adresse professionnelle&nbsp;: {SITE.address.street}, {SITE.address.postalCode}{" "}
        {SITE.address.locality}
        <br />
        Téléphone&nbsp;:{" "}
        <a href={SITE.phoneHref} className="link-underline">
          {SITE.phone}
        </a>
        <br />
        Adresse électronique&nbsp;:{" "}
        <a href={`mailto:${SITE.email}`} className="link-underline">
          {SITE.email}
        </a>
        <br />
        {SITE.registration}
        <br />
        Directeur de la publication&nbsp;: Maître Pierre {SITE.wordmark}, avocat
      </p>

      <h2>2. Statut professionnel</h2>
      <p>
        Maître Pierre Blexmann exerce la profession d&apos;avocat à titre individuel dans le respect
        des dispositions légales, réglementaires et déontologiques applicables, notamment&nbsp;:
      </p>
      <ul>
        <li>
          la loi n°&nbsp;71-1130 du 31&nbsp;décembre&nbsp;1971 portant réforme de certaines
          professions judiciaires et juridiques&nbsp;;
        </li>
        <li>
          le décret n°&nbsp;91-1197 du 27&nbsp;novembre&nbsp;1991 organisant la profession
          d&apos;avocat&nbsp;;
        </li>
        <li>le Règlement intérieur national de la profession d&apos;avocat (RIN)&nbsp;;</li>
        <li>le Règlement intérieur du {SITE.barreau}.</li>
      </ul>
      <p>
        <strong>Autorité ordinale</strong>
        <br />
        Ordre des avocats au Barreau de Paris
        <br />
        4 boulevard du Palais, 75001 Paris
        <br />
        Tél.&nbsp;: 01 80 27 19 20 —{" "}
        <a
          href="https://www.avocatparis.org"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline"
        >
          www.avocatparis.org
          <span className="sr-only"> (nouvel onglet)</span>
        </a>
      </p>
      <p>
        <strong>Titre professionnel</strong>&nbsp;: Avocat, titre délivré en France.
      </p>

      <h2>3. Hébergement du site</h2>
      {/* [À CONFIRMER] TODO: confirmer l'hébergeur effectif lors de la bascule sur le domaine de production. */}
      <p>
        Le Site est hébergé par Vercel Inc., 440 N Barranca Ave #4171, Covina, CA 91723,
        États-Unis —{" "}
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline"
        >
          vercel.com
          <span className="sr-only"> (nouvel onglet)</span>
        </a>
        .
      </p>

      <h2>4. Objet et contenu du site</h2>
      <p>
        Le Site a pour objet de présenter le cabinet et ses domaines d&apos;intervention en
        contentieux des affaires. Les informations qui y figurent sont fournies à titre purement
        informatif et général&nbsp;; elles ne constituent ni une consultation juridique, ni un
        conseil personnalisé, ni l&apos;établissement d&apos;une relation avocat-client.
      </p>
      <p>
        La consultation du Site ne saurait se substituer à une analyse juridique adaptée à la
        situation particulière de l&apos;utilisateur.
      </p>

      <h2>5. Absence de relation avocat-client</h2>
      <p>
        L&apos;utilisation du Site ou l&apos;envoi d&apos;un message au cabinet via le formulaire de
        contact ou par courrier électronique ne crée pas, en soi, de relation avocat-client. Une
        telle relation ne peut être établie qu&apos;après acceptation expresse du dossier par le
        cabinet, après vérification notamment de l&apos;absence de conflit d&apos;intérêts.
      </p>

      <h2>6. Honoraires</h2>
      {/* [À CONFIRMER] TODO: détail des modalités d'honoraires à valider par l'avocat
          (convention d'honoraires écrite, temps passé, forfait, honoraire de résultat éventuel). */}
      <p>
        Les modalités d&apos;honoraires sont présentées avant toute intervention.
      </p>

      <h2>7. Responsabilité</h2>
      <p>
        Le cabinet veille à l&apos;exactitude et à la mise à jour des informations diffusées sur le
        Site, sans pouvoir assurer leur exhaustivité à tout instant. L&apos;utilisateur reconnaît
        consulter ces informations sous sa seule responsabilité.
      </p>

      <h2>8. Liens hypertextes</h2>
      <p>
        Le Site peut comporter des liens vers des sites tiers, notamment vers des publications
        juridiques externes, fournis à titre informatif. Le cabinet n&apos;exerce aucun contrôle sur
        ces sites et décline toute responsabilité quant à leur contenu ou à leur politique de
        confidentialité.
      </p>

      <h2>9. Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des éléments composant le Site — textes, documents, photographies,
        graphismes, signes distinctifs et structure générale — est protégé par le Code de la
        propriété intellectuelle. Toute reproduction, représentation, adaptation ou exploitation,
        totale ou partielle, sans autorisation écrite préalable du cabinet, est interdite.
      </p>

      <h2>10. Protection des données personnelles</h2>
      <p>
        Les traitements de données personnelles liés aux prises de contact s&apos;effectuent dans le
        respect du Règlement (UE) 2016/679 du 27&nbsp;avril&nbsp;2016 (RGPD) et de la loi
        «&nbsp;Informatique et Libertés&nbsp;» modifiée. Les modalités détaillées figurent dans la{" "}
        <Link href="/politique-de-confidentialite" className="link-underline">
          politique de confidentialité
        </Link>
        .
      </p>

      <h2>11. Cookies</h2>
      <p>
        Le Site ne dépose aucun cookie publicitaire ni traceur de mesure d&apos;audience sans
        consentement préalable. Seuls les éléments techniques strictement nécessaires à son
        fonctionnement peuvent être utilisés.
      </p>

      <h2>12. Médiation de la consommation</h2>
      <p>
        Conformément aux articles L.&nbsp;612-1 et suivants du Code de la consommation, tout client
        ayant la qualité de consommateur a la possibilité, en cas de litige, de recourir
        gratuitement au médiateur de la consommation de la profession d&apos;avocat&nbsp;: Conseil
        national des barreaux (CNB), 180&nbsp;boulevard Haussmann, 75008 Paris —{" "}
        <a
          href="https://mediateur-consommation-avocat.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline"
        >
          mediateur-consommation-avocat.fr
          <span className="sr-only"> (nouvel onglet)</span>
        </a>
        .
      </p>

      <h2>13. Droit applicable</h2>
      <p>
        Le Site est soumis au droit français. Tout différend relatif à son utilisation relève de la
        compétence des juridictions françaises.
      </p>
    </LegalArticle>
  );
}
