interface ExpertQuoteProps {
  quote: string;
  attribution: string;
  role: string;
}

export default function ExpertQuote({
  quote,
  attribution,
  role,
}: ExpertQuoteProps): React.JSX.Element {
  return (
    <figure className="max-w-3xl border-l-2 border-accent pl-6">
      <blockquote className="text-lg leading-relaxed text-text md:text-xl">
        „{quote}“
      </blockquote>
      <figcaption className="mt-4 text-sm text-text-muted">
        <span className="font-medium text-text">{attribution}</span>
        {' — '}
        {role}
      </figcaption>
    </figure>
  );
}
