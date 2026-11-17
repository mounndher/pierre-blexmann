import Link from "next/link";
import { Reveal, Section } from "@/components/ui";
import type { Faq } from "@/content/pages";
import { SITE } from "@/content/site";

/** Static, keyboard-accessible FAQ. JSON-LD is derived from the exact visible answers. */
export default function FaqSection({
  questions,
  path,
  id = "faq",
  index = "FAQ",
  title = "Questions fréquentes",
}: {
  questions: readonly Faq[];
  path: string;
  id?: string;
  index?: string;
  title?: string;
}) {
  if (questions.length === 0) return null;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE.url}${path}#${id}`,
    url: `${SITE.url}${path}`,
    inLanguage: "fr-FR",
    mainEntity: questions.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <Section id={id} index={index} label="Questions fréquentes" tone="paper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <Reveal>
        <h2 id={`${id}-title`} className="display-md font-display text-navy">
          {title}
        </h2>
        <p className="measure mt-5 text-sm leading-relaxed text-mute">
          Ces repères sont généraux : le choix d’une démarche dépend des faits, des pièces et des
          règles applicables à votre dossier.
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <div className="rule-double mt-8 border-b border-rule">
          {questions.map((faq) => (
            <details key={faq.question} className="group border-t border-rule first:border-t-0">
              <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 py-5 font-display text-[1.15rem] leading-snug text-navy transition-colors hover:text-bronze">
                <span>{faq.question}</span>
                <span
                  aria-hidden="true"
                  className="shrink-0 font-display text-xl text-bronze transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="pb-6">
                <p className="measure text-[1rem] leading-[1.75] text-ink/80">{faq.answer}</p>
                {faq.link && (
                  <Link
                    href={faq.link.href}
                    className="mt-4 inline-flex min-h-8 items-center border-b border-gold text-sm text-navy transition-colors hover:text-bronze"
                  >
                    {faq.link.label}<span aria-hidden="true" className="ml-2">→</span>
                  </Link>
                )}
              </div>
            </details>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
