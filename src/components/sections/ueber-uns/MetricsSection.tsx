import { FOUNDING_YEAR, RESCUED_DATASETS, YEARS_EXPERIENCE } from '@/lib/team';

const metrics = [
  { value: '95%', label: 'Erfolgsquote' },
  { value: `${RESCUED_DATASETS}+`, label: 'Gerettete Datensätze' },
  { value: `${YEARS_EXPERIENCE}+`, label: 'Jahre Erfahrung' },
  { value: '100%', label: 'Interne Bearbeitung' },
];

export default function MetricsSection() {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
      {metrics.map((metric) => (
        <div key={metric.label} className="text-center">
          <p className="text-3xl font-bold text-accent md:text-4xl">{metric.value}</p>
          <p className="mt-2 text-sm text-text md:text-base">{metric.label}</p>
        </div>
      ))}
      <p className="col-span-2 mt-2 text-center text-xs text-text md:col-span-4">
        Gegründet {FOUNDING_YEAR}
      </p>
    </div>
  );
}
