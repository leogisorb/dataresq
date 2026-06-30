export function calcTileClasses(isSelected: boolean): string {
  return [
    'rounded-xl border bg-bg-card text-left transition-colors',
    isSelected
      ? 'border-neon text-text'
      : 'border-border text-text-muted active:border-neon md:hover:border-neon',
  ].join(' ');
}

export function calcStepHeadingClasses(): string {
  return 'text-2xl font-semibold tracking-tight text-text md:text-3xl';
}
