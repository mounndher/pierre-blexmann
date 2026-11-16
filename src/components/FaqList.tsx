export type FaqItem = { q: string; a: string };

export default function FaqList({
  items,
  maxWidth = false,
}: {
  items: FaqItem[];
  maxWidth?: boolean;
}) {
  return (
    <div
      className={`rule-double mt-6 border-b border-rule ${maxWidth ? "max-w-[68ch]" : ""}`}
    >
      {items.map((faq) => (
        <details key={faq.q.slice(0, 32)} className="group border-t border-rule py-5">
          <summary className="cursor-pointer list-none font-display text-[1.1rem] leading-snug text-navy transition-colors marker:hidden hover:text-bronze [&::-webkit-details-marker]:hidden">
            <span className="flex items-baseline justify-between gap-4">
              {faq.q}
              <span
                aria-hidden="true"
                className="shrink-0 text-bronze transition-transform duration-300 group-open:rotate-45"
              >
                +
              </span>
            </span>
          </summary>
          <p className="measure mt-3 text-[0.95rem] leading-[1.75] text-ink/80">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
