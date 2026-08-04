import { CONTENT_LAST_UPDATED } from '@/lib/constants';

interface LastUpdatedBadgeProps {
  dateIso?: string;
  className?: string;
}

function formatDeDate(dateIso: string): string {
  const date = new Date(dateIso);
  if (Number.isNaN(date.getTime())) {
    return dateIso;
  }
  return date.toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function LastUpdatedBadge({
  dateIso = CONTENT_LAST_UPDATED,
  className = '',
}: LastUpdatedBadgeProps): React.JSX.Element {
  return (
    <p className={`text-sm text-text-muted ${className}`.trim()}>
      <span className="font-medium text-text">Zuletzt aktualisiert:</span> {formatDeDate(dateIso)}
    </p>
  );
}
