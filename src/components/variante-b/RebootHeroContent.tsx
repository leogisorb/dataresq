'use client';

import RainbowCtaButton from '@/components/variante-b/RainbowCtaButton';
import { VARIANTE_B_COPY } from '@/lib/variante-b';

interface RebootHeroContentProps {
  onAnfrage: () => void;
}

export default function RebootHeroContent({
  onAnfrage,
}: RebootHeroContentProps): React.JSX.Element {
  return (
    <div className="relative z-10 mx-auto flex max-w-[800px] flex-col items-center px-6 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/85 blur-2xl"
      />

      <h1 className="relative text-[clamp(2.5rem,5.625vw,4.375rem)] leading-[1.15] tracking-[-0.02em]">
        <span className="block font-normal text-[#B5B5B5]">
          {VARIANTE_B_COPY.headlineLine1}
        </span>
        <span className="block font-semibold text-[#111111]">
          {VARIANTE_B_COPY.headlineLine2}
        </span>
      </h1>

      <p className="relative mt-5 max-w-[35rem] text-[1.09375rem] leading-normal text-[#8a8a8a]">
        {VARIANTE_B_COPY.subline}
      </p>

      <RainbowCtaButton className="relative mt-10" onPress={onAnfrage}>
        {VARIANTE_B_COPY.ctaLabel}
      </RainbowCtaButton>
    </div>
  );
}
