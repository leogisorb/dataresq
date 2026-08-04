import type { GlossaryTerm } from '@/lib/datenrettung-geo-ui';

interface GlossarySectionProps {
  title?: string;
  terms: GlossaryTerm[];
}

export default function GlossarySection({
  title = 'Begriffsklärung',
  terms,
}: GlossarySectionProps): React.JSX.Element {
  return (
    <section className="border-t border-black/5 bg-bg py-12 md:px-8 md:py-16 lg:px-12">
      <div className="site-container max-w-3xl">
        <h2 className="text-2xl font-bold text-text md:text-3xl">{title}</h2>
        <dl className="mt-8 space-y-6">
          {terms.map((item) => (
            <div key={item.term}>
              <dt className="text-base font-semibold text-text md:text-lg">{item.term}</dt>
              <dd className="mt-2 text-base leading-relaxed text-text-muted">{item.definition}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
