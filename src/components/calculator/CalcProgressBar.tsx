interface CalcProgressBarProps {
  step: number;
  totalSteps: number;
}

export default function CalcProgressBar({
  step,
  totalSteps,
}: CalcProgressBarProps): React.JSX.Element {
  const steps = Array.from({ length: totalSteps }, (_, index) => index + 1);

  return (
    <div
      aria-label="Fortschritt"
      aria-valuemax={totalSteps}
      aria-valuenow={step}
      className="mb-8 flex items-center justify-center gap-2"
      role="progressbar"
    >
      {steps.map((s) => {
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
