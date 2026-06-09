import PriceCalculatorSection from '@/components/calculator/PriceCalculatorSection';
import BrandCarousel from '@/components/sections/BrandCarousel';

export default function CalculatorSection() {
  return (
    <>
      <PriceCalculatorSection />

      <div className="bg-bg pb-16 md:pb-24">
        <BrandCarousel />
      </div>
    </>
  );
}
