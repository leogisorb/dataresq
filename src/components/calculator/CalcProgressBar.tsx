interface CalcProgressBarProps {
  step: 1 | 2 | 3 | 4;
}

export default function CalcProgressBar({ step }: CalcProgressBarProps) {
  return (
    <div
      aria-label="Fortschritt"
      aria-valuemax={4}
      aria-valuenow={step}
      className="mb-8 flex items-center justify-center gap-2"
      role="progressbar"
    >
      {([1, 2, 3, 4] as const).map((s) => {
        const isActive = s === step;
        const isDone = s < step;

        return (
          <div
            key={s}
            aria-current={isActive ? 'step' : undefined}
            aria-hidden={!isActive}
            className={[
              'h-1.5 rounded-full transition-all duration-300 ease-out',
              isActive ? 'w-10 bg-text' : 'w-2',
              !isActive && isDone ? 'bg-text' : '',
              !isActive && !isDone ? 'bg-border' : '',
            ].join(' ')}
          />
        );
      })}
    </div>
  );
}
