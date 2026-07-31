'use client';

import Link from 'next/link';

import HeroDecryptHeadline from '@/components/sections/HeroDecryptHeadline';
import RainbowCtaButton from '@/components/variante-b/RainbowCtaButton';
import { CALCULATOR_SECTION_ID } from '@/lib/calculator-section';
import { VARIANTE_B_COPY } from '@/lib/variante-b';

export default function RebootHeroContent(): React.JSX.Element {
  return (
    <div className="relative z-10 mx-auto flex max-w-[800px] flex-col items-center px-6 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/85 blur-2xl"
      />

      <HeroDecryptHeadline
        className="relative text-[clamp(2.5rem,5.625vw,4.375rem)] leading-[1.15] tracking-[-0.02em]"
        lines={[VARIANTE_B_COPY.headlineLine1, VARIANTE_B_COPY.headlineLine2]}
        resolvedLineClassNames={['font-normal text-[#B5B5B5]', 'font-semibold text-[#111111]']}
        scrambledClassName="text-[#c7c7cc]"
      />

      <p className="relative mt-5 max-w-[35rem] text-[1.09375rem] leading-normal text-[#8a8a8a]">
        {VARIANTE_B_COPY.subline}
      </p>

      <div className="relative mt-10 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
        <RainbowCtaButton href={`/#${CALCULATOR_SECTION_ID}`}>
          {VARIANTE_B_COPY.ctaLabel}
        </RainbowCtaButton>
        <Link
          className="inline-flex min-h-[3.25rem] w-full items-center justify-center rounded-full border border-[#111111]/15 bg-white/80 px-[35px] text-[17.5px] font-medium leading-[1.2] text-[#111111] backdrop-blur-sm transition-colors hover:border-[#111111]/35 hover:bg-white sm:w-auto"
          href="/standort"
        >
          {VARIANTE_B_COPY.secondaryCtaLabel}
        </Link>
      </div>
    </div>
  );
}
