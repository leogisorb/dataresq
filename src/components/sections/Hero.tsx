import Image from 'next/image';

import HeroCtas from '@/components/sections/HeroCtas';

export default function Hero() {
  return (
    <section className="relative min-h-[95dvh] overflow-hidden bg-bg">
      <div className="site-container relative z-10 grid min-h-[95dvh] grid-cols-1 items-center gap-12 py-24 md:py-32 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col justify-center">
          <h1 className="mb-6 text-4xl font-semibold leading-[1.05] tracking-tight text-text md:text-6xl lg:text-7xl">
            Daten verloren.
            <br />
            Wir holen sie zurück.
          </h1>

          <p className="mb-10 max-w-xl text-base leading-relaxed text-text md:text-lg">
            Professionelle Datenrettung für Festplatten, SSD, RAID und NAS. Kostenlose Diagnose mit
            Datenübersicht und unverbindlichem Kostenvoranschlag — bevor Sie entscheiden.
          </p>

          <HeroCtas />

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-text">
            <span>✓ 92% Erfolgsquote</span>
            <span>✓ ISO Reinraum</span>
          </div>
        </div>

        <div className="relative flex items-center justify-center lg:justify-end">
          <Image
            alt="Verschiedene Datenspeicher-Medien: USB-Stick, SD-Karte, SSD, Festplatte"
            className="h-auto w-full max-w-[640px] object-contain"
            height={500}
            priority
            src="/images/hero-storage-devices.png"
            width={750}
          />
        </div>
      </div>
    </section>
  );
}
