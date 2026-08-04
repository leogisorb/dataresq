interface CitationAnswerBlockProps {
  question: string;
  answer: string;
  facts?: Array<{ label: string; value: string }>;
}

export default function CitationAnswerBlock({
  question,
  answer,
  facts,
}: CitationAnswerBlockProps): React.JSX.Element {
  return (
    <div className="mt-6 max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-wide text-accent">{question}</p>
      <p className="mt-2 text-base leading-relaxed text-text md:text-lg">{answer}</p>
      {facts && facts.length > 0 ? (
        <dl className="mt-4 grid gap-3 sm:grid-cols-2">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-xs font-medium uppercase tracking-wide text-text-muted">
                {fact.label}
              </dt>
              <dd className="mt-1 text-sm font-medium text-text md:text-base">{fact.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
    </div>
  );
}
