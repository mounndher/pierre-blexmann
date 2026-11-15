import type { Metadata } from "next";
import LegalArticle from "@/components/LegalArticle";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du Cabinet BLEXMANN AVOCATS, avocat inscrit au Barreau de Paris, 53 avenue Victor Hugo, 75116 Paris.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: true, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <LegalArticle title="Mentions légales" updated="Mise à jour en cours de validation par le cabinet">
      <h2>1. Éditeur du site</h2>
      <p>Le présent site internet (le «&nbsp;Site&nbsp;») est édité par&nbsp;:</p>
      <p>
        <strong>{SITE.legalName}</strong>
        <br />
        Cabinet d&apos;avocats inscrit au {SITE.barreau} (Toque {SITE.toque})
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
        {SITE.siren}
        <br />
        Directeur de la publication&nbsp;: Maître Pierre {SITE.wordmark}, avocat inscrit au{" "}
        {SITE.barreau}
      </p>

      <h2>2. Statut professionnel</h2>
      <p>
        Les avocats membres du cabinet exercent leur profession conformément aux dispositions
        légales et réglementaires applicables, notamment&nbsp;:
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
        <li>les règles déontologiques applicables à la profession d&apos;avocat.</li>
      </ul>
      <p>
        <strong>Autorité de tutelle</strong>
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
        </a>
      </p>
      <p>
        <strong>Titre professionnel</strong>&nbsp;: Avocat, titre délivré en France.
      </p>

      <h2>3. Hébergement du site</h2>
      <p>
        Selon les mentions légales du site existant du cabinet, l&apos;hébergement est assuré par
        OVH, SAS au capital de 10&nbsp;000&nbsp;000&nbsp;€, RCS Lille Métropole 424&nbsp;761&nbsp;419,
        2&nbsp;rue Kellermann, 59100 Roubaix, France (coordonnées à confirmer lors de la mise en
        production définitive).
      </p>

      <h2>4. Objet et contenu du site</h2>
      <p>
        Le Site a pour objet de présenter le cabinet, ses activités et ses domaines
        d&apos;intervention en contentieux des affaires. Les informations qui y figurent sont
        fournies à titre purement informatif et général&nbsp;; elles ne constituent ni une
        consultation juridique, ni un conseil personnalisé, ni l&apos;établissement d&apos;une
        relation avocat-client.
      </p>
      <p>
        La consultation du Site ne saurait se substituer à une consultation juridique adaptée à la
        situation particulière de l&apos;utilisateur.
      </p>

      <h2>5. Absence de relation avocat-client</h2>
      <p>
        L&apos;utilisation du Site ou l&apos;envoi d&apos;un message au cabinet via le formulaire de
        contact ou par courrier électronique ne crée pas, en soi, de relation avocat-client. Une
        telle relation ne peut être établie qu&apos;après acceptation expresse du dossier par le
        cabinet.
      </p>

      <h2>6. Responsabilité</h2>
      <p>
        Le cabinet s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des
        informations diffusées sur le Site, sans pouvoir garantir leur exhaustivité ni leur
        actualité. L&apos;utilisateur reconnaît utiliser ces informations sous sa responsabilité
        exclusive.
      </p>

      <h2>7. Liens hypertextes</h2>
      <p>
        Le Site peut contenir des liens vers des sites tiers (tels que des publications externes),
        fournis à titre informatif. Le cabinet ne dispose d&apos;aucun contrôle sur ces sites et
        décline toute responsabilité quant à leur contenu ou à leurs politiques de protection des
        données.
      </p>

      <h2>8. Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des éléments composant le Site — textes, documents, images, graphismes,
        logos et structure générale — est protégé par le Code de la propriété intellectuelle. Toute
        reproduction, représentation, modification ou exploitation, sans autorisation préalable et
        écrite du cabinet, est interdite.
      </p>

      <h2>9. Protection des données personnelles</h2>
      <p>
        Les traitements de données réalisés via le Site sont effectués dans le respect du Règlement
        (UE) 2016/679 du 27&nbsp;avril&nbsp;2016 (RGPD) et de la loi «&nbsp;Informatique et
        Libertés&nbsp;». Les modalités détaillées figurent dans la{" "}
        <a href="/politique-de-confidentialite" className="link-underline">
          politique de confidentialité
        </a>
        .
      </p>

      <h2>10. Cookies</h2>
      <p>
        Le Site ne dépose aucun cookie publicitaire ni traceur de mesure d&apos;audience sans
        consentement préalable. Seuls les éléments techniques strictement nécessaires au
        fonctionnement du Site peuvent être utilisés.
      </p>

      <h2>11. Médiation de la consommation</h2>
      <p>
        Conformément aux articles L.&nbsp;612-1 et suivants du Code de la consommation, tout client
        consommateur peut recourir gratuitement au médiateur de la consommation de la profession
        d&apos;avocat&nbsp;: Conseil national des barreaux (CNB), 180&nbsp;boulevard Haussmann,
        75008 Paris —{" "}
        <a
          href="https://mediateur-consommation-avocat.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline"
        >
          mediateur-consommation-avocat.fr
        </a>
        .
      </p>

      <h2>12. Droit applicable</h2>
      <p>
        Le Site est régi par le droit français. Tout litige relatif à son usage relève de la
        compétence des juridictions françaises.
      </p>
    </LegalArticle>
  );
}
