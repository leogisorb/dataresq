import { RESCUED_DATASETS } from '@/lib/team';

const metrics = [
  { value: '95%', label: 'Erfolgsquote' },
  { value: `${RESCUED_DATASETS}+`, label: 'Gerettete Datensätze' },
  { value: '24h', label: 'Express möglich' },
  { value: '0€', label: 'Diagnosekosten' },
];

export default function Metrics() {
  return (
    <section className="bg-bg-subtle py-24 md:py-36">
      <div className="site-container grid grid-cols-2 gap-8 text-center md:grid-cols-4 md:gap-12">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <p className="text-4xl font-semibold text-text md:text-6xl">{metric.value}</p>
            <p className="mt-2 text-sm uppercase tracking-wide text-text">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
