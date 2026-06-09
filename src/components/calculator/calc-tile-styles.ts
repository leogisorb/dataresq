export function calcTileClasses(isSelected: boolean): string {
  return [
    'rounded-xl border bg-bg-card text-left transition-colors',
    isSelected
      ? 'border-text text-text'
      : 'border-border text-text-muted hover:border-text-dim',
  ].join(' ');
}

export function calcStepHeadingClasses(): string {
  return 'text-2xl font-semibold tracking-tight text-text md:text-3xl';
}
