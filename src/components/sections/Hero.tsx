import Image from 'next/image';

import {
  CALCULATOR_HEADING,
  CALCULATOR_HEADING_ID,
  CALCULATOR_SECTION_ID,
} from '@/lib/calculator-section';
import HeroCtas from '@/components/sections/HeroCtas';

export default function Hero() {
  return (
    <section className="relative flex h-[calc(100dvh-3.5rem)] flex-col overflow-hidden bg-bg">
      <div className="site-container relative z-10 grid min-h-0 flex-1 grid-cols-1 items-center gap-6 overflow-hidden py-6 md:gap-10 md:py-10 lg:grid-cols-2 lg:gap-14 lg:py-12">
        <div className="flex flex-col justify-center">
          <h1 className="mb-5 text-4xl font-semibold leading-[1.05] tracking-tight text-text md:mb-6 md:text-6xl lg:text-7xl">
            Daten verloren.
            <br />
            Wir holen sie zurück.
          </h1>

          <p className="mb-8 max-w-xl text-base leading-relaxed text-text md:mb-10 md:text-lg">
            Sie kennen den Preis, bevor Sie uns Ihren Datenträger anvertrauen. Garantierter
            Festpreis, Dateiliste im Kundenportal — und wenn wir nichts retten können, zahlen Sie
            nichts.
          </p>

          <HeroCtas />

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-text md:mt-10">
            <span>✓ Festpreis vor Versand</span>
            <span>✓ No Data, No Fee</span>
          </div>
        </div>

        <div className="relative flex items-center justify-center lg:justify-end">
          <Image
            alt="Datenspeicher-Medien: Festplatte, SSD, Speicherkarten und Smartphone — professionelle Datenrettung"
            className="h-auto max-h-[min(42dvh,420px)] w-full max-w-[640px] object-contain lg:max-h-[min(48dvh,480px)]"
            height={896}
            priority
            src="/images/hero-storage-devices.png"
            width={1200}
          />
        </div>
      </div>

      <div
        className="site-container shrink-0 scroll-mt-24 pb-5 pt-5 text-center md:pb-6 md:pt-6"
        id={CALCULATOR_SECTION_ID}
      >
        <h2
          className="text-3xl font-semibold tracking-tight text-text md:text-4xl"
          id={CALCULATOR_HEADING_ID}
        >
          {CALCULATOR_HEADING}
        </h2>
      </div>
    </section>
  );
}
