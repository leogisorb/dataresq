import type { LucideIcon } from 'lucide-react';

interface SummaryPill {
  icon: LucideIcon;
  label: string;
}

interface CalcSummaryBarProps {
  pills: SummaryPill[];
}

export default function CalcSummaryBar({ pills }: CalcSummaryBarProps) {
  if (pills.length === 0) return null;

  return (
    <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-text-muted">
      {pills.map((pill, index) => (
        <span key={pill.label} className="inline-flex items-center gap-1.5">
          {index > 0 && (
            <span aria-hidden="true" className="text-border">
              /
            </span>
          )}
          <pill.icon aria-hidden="true" className="size-3.5" strokeWidth={1.75} />
          <span>{pill.label}</span>
        </span>
      ))}
    </div>
  );
}
