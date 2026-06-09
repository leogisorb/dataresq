import PriceCalculator from '@/components/calculator/PriceCalculator';
import {
  CALCULATOR_HEADING,
  CALCULATOR_HEADING_ID,
  CALCULATOR_SECTION_ID,
} from '@/lib/calculator-section';
import {
  SECTION_CONTENT_MT,
  SECTION_HEADING,
  SECTION_NARROW_WIDTH,
  SECTION_PADDING,
} from '@/lib/section-styles';
import type { DeviceKey } from '@/lib/constants';

interface PriceCalculatorSectionProps {
  defaultDevice?: DeviceKey;
  showHeading?: boolean;
}

export default function PriceCalculatorSection({
  defaultDevice,
  showHeading = true,
}: PriceCalculatorSectionProps) {
  return (
    <section
      aria-labelledby={CALCULATOR_HEADING_ID}
      className={[
        'bg-bg',
        SECTION_PADDING,
        showHeading ? '' : 'pt-8 md:pt-10',
      ].join(' ')}
      id={showHeading ? CALCULATOR_SECTION_ID : undefined}
    >
      <div className="site-container">
        {showHeading ? (
          <div className="text-center">
            <h2 className={SECTION_HEADING} id={CALCULATOR_HEADING_ID}>
              {CALCULATOR_HEADING}
            </h2>
          </div>
        ) : null}

        <div className={showHeading ? `${SECTION_CONTENT_MT} ${SECTION_NARROW_WIDTH}` : SECTION_NARROW_WIDTH}>
          <PriceCalculator defaultDevice={defaultDevice} />
        </div>
      </div>
    </section>
  );
}
