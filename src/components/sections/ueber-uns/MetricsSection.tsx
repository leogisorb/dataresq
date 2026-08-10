import { FOUNDING_YEAR, RESCUED_DATASETS, YEARS_EXPERIENCE } from '@/lib/team';

const metrics = [
  { value: 'hoch', label: 'Rettungsquote Partnerlabor (interne Statistik)' },
  { value: `${RESCUED_DATASETS}+`, label: 'Gerettete Datensätze (intern erfasst)' },
  { value: `${YEARS_EXPERIENCE}+`, label: 'Jahre Erfahrung' },
];

export default function MetricsSection() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:gap-8">
      {metrics.map((metric) => (
        <div key={metric.label} className="text-center">
          <p className="text-3xl font-bold text-accent md:text-4xl">{metric.value}</p>
          <p className="mt-2 text-sm text-text md:text-base">{metric.label}</p>
        </div>
      ))}
      <p className="mt-2 text-center text-xs text-text-muted md:col-span-3">
        Gegründet {FOUNDING_YEAR}. Prozentangaben ohne unabhängige Prüfung — Orientierung aus
        Partnerlabor-Erfahrung.
      </p>
    </div>
  );
}
