import PriceCalculator from '@/components/calculator/PriceCalculator';
import SectionHeader from '@/components/sections/SectionHeader';
import {
  CALCULATOR_HEADING,
  CALCULATOR_HEADING_ID,
  CALCULATOR_SECTION_ID,
  CALCULATOR_SUBHEADING,
} from '@/lib/calculator-section';
import {
  SECTION_CONTENT_MT,
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
          <SectionHeader
            subline={CALCULATOR_SUBHEADING}
            title={CALCULATOR_HEADING}
            titleId={CALCULATOR_HEADING_ID}
          />
        ) : null}

        <div
          className={
            showHeading ? `${SECTION_CONTENT_MT} ${SECTION_NARROW_WIDTH}` : SECTION_NARROW_WIDTH
          }
        >
          <PriceCalculator defaultDevice={defaultDevice} />
        </div>
      </div>
    </section>
  );
}
