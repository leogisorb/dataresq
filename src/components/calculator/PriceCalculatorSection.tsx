import PriceCalculator from '@/components/calculator/PriceCalculator';
import type { DeviceKey } from '@/lib/constants';

interface PriceCalculatorSectionProps {
  defaultDevice?: DeviceKey;
}

export default function PriceCalculatorSection({
  defaultDevice,
}: PriceCalculatorSectionProps) {
  return (
    <section
      aria-labelledby="calc-heading"
      className="bg-bg px-4 pt-16 pb-32 md:pt-24 md:pb-48"
      id="kostenrechner"
    >
      <div className="site-container">
        <div className="text-center">
          <h2
            className="text-3xl font-semibold tracking-tight text-text md:text-4xl"
            id="calc-heading"
          >
            Was kostet Datenrettung?
          </h2>
        </div>

        <div className="mt-10 md:mt-12">
          <PriceCalculator defaultDevice={defaultDevice} />
        </div>
      </div>
    </section>
  );
}
