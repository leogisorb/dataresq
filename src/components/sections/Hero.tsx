import HeroCtas from '@/components/sections/HeroCtas';

export default function Hero() {
  return (
    <section className="relative min-h-[95dvh] overflow-hidden bg-bg">
      <div className="site-container relative z-10 flex min-h-[95dvh] flex-col justify-center py-24 md:py-32">
        <span className="mb-6 text-xs font-medium uppercase tracking-widest text-text md:text-sm">
          Reinraum · Festpreis · 24h Express
        </span>

        <h1 className="mb-6 text-4xl font-semibold leading-[1.05] tracking-tight text-text md:text-6xl lg:text-7xl">
          Daten verloren.
          <br />
          Wir holen sie zurück.
        </h1>

        <p className="mb-10 max-w-xl text-base leading-relaxed text-text md:text-lg">
          Professionelle Datenrettung für Festplatten, SSD, RAID und NAS. Kostenlose Diagnose —
          kein Befund, keine Kosten.
        </p>

        <HeroCtas />

        <div className="mt-10 flex flex-wrap gap-6 text-sm text-text">
          <span>✓ 95% Erfolgsquote</span>
          <span>✓ Kein Befund = 0€</span>
          <span>✓ ISO Reinraum</span>
          <span>✓ DSGVO</span>
        </div>
      </div>
    </section>
  );
}
