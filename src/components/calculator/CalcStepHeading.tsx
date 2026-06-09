import { calcStepHeadingClasses } from '@/components/calculator/calc-tile-styles';

interface CalcStepHeadingProps {
  id: string;
  children: string;
}

export default function CalcStepHeading({ id, children }: CalcStepHeadingProps) {
  return (
    <h3 className={calcStepHeadingClasses()} id={id}>
      {children}
    </h3>
  );
}
