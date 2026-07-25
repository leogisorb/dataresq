import Image from 'next/image';

import HeroCtas from '@/components/sections/HeroCtas';
import HeroDecryptHeadline from '@/components/sections/HeroDecryptHeadline';
import { HOME_TRUST_ITEMS, HOME_WELCOME_TEXT } from '@/lib/constants';

const HERO_IMAGE = {
  alt: 'Datenspeicher-Medien: Festplatte, SSD, Speicherkarten und Smartphone — professionelle Datenrettung',
  src: '/images/hero-devices-v3-cropped.png',
  width: 1120,
  height: 641,
} as const;

export default function Hero() {
  return (
    <section className="flex h-[calc(100dvh-var(--site-header-height))] items-center overflow-hidden bg-bg">
      {/*
        Mobile: one composition (copy + image), vertically centered.
        Tight gap between text and media — no empty mid-band from stretched rows.
        Image ~φ⁻¹ of the hero band; PNG pre-cropped so devices fill the frame.
      */}
      <div className="site-container flex w-full flex-col justify-center gap-5 py-6 md:grid md:h-full md:grid-cols-2 md:items-center md:gap-10 md:py-10 lg:gap-14 lg:py-12">
        <div className="min-w-0">
          <HeroDecryptHeadline />

          <p className="mb-3 max-w-xl text-[0.9rem] leading-snug text-text md:mb-10 md:text-lg md:leading-relaxed">
            {HOME_WELCOME_TEXT}
          </p>

          <HeroCtas />

          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-text md:mt-10 md:gap-x-6 md:gap-y-2 md:text-sm">
            {HOME_TRUST_ITEMS.map((item) => (
              <span key={item}>✓ {item}</span>
            ))}
          </div>
        </div>

        <div className="mx-auto w-[118%] max-w-none shrink-0 -translate-x-[7.5%] md:w-full md:max-w-none md:translate-x-0">
          <Image
            alt={HERO_IMAGE.alt}
            className="mx-auto h-auto w-full max-h-[min(34dvh,300px)] object-contain object-center md:max-h-[min(42dvh,420px)] lg:max-h-[min(48dvh,480px)]"
            height={HERO_IMAGE.height}
            priority
            sizes="(max-width: 768px) 120vw, 640px"
            src={HERO_IMAGE.src}
            width={HERO_IMAGE.width}
          />
        </div>
      </div>
    </section>
  );
}
