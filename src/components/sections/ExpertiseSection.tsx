'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

interface ExpertiseStat {
  value: string;
  label: string;
}

interface ExpertiseCardData {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  gradient: string;
  glowColor: string;
  brands: string[];
  stats: ExpertiseStat[];
  features: string[];
  href: string;
}

const CARDS: ExpertiseCardData[] = [
  {
    id: 'hdd',
    label: 'Speichermedium',
    title: 'Festplatte\nHDD',
    subtitle: '2.5″ & 3.5″ Laufwerke',
    gradient: 'linear-gradient(135deg, #0a1628 0%, #0d3b5e 45%, #0a6b5e 100%)',
    glowColor: 'rgba(52,211,153,0.15)',
    brands: ['WD', 'Seagate', 'Toshiba', 'Hitachi', 'Samsung', 'Fujitsu'],
    stats: [
      { value: '95%', label: 'Erfolgsquote' },
      { value: '24h', label: 'Express' },
      { value: '0€', label: 'Kein Befund' },
    ],
    features: [
      'Headcrash & mechanische Schäden',
      'Elektronikdefekte, Controller-Ausfall',
      'Gelöschte / überschriebene Partitionen',
      'Reinraum ISO 5 — Class 100',
    ],
    href: '/datenrettung/festplatte-hdd',
  },
  {
    id: 'ssd',
    label: 'Speichermedium',
    title: 'SSD &\nFlash',
    subtitle: 'NVMe · SATA · M.2 · eMMC',
    gradient: 'linear-gradient(135deg, #1a0a3e 0%, #2d1b6e 45%, #1a3a9e 100%)',
    glowColor: 'rgba(129,140,248,0.15)',
    brands: ['Samsung', 'WD', 'Crucial', 'Kingston', 'Corsair', 'Intel'],
    stats: [
      { value: '92%', label: 'Erfolgsquote' },
      { value: '48h', label: 'Standard' },
      { value: '0€', label: 'Kein Befund' },
    ],
    features: [
      'Controller-Ausfall & Firmware-Fehler',
      'NAND-Flash Datenverlust',
      'Physische Beschädigung / Wasserschaden',
      'Gelöschte / formatierte SSDs',
    ],
    href: '/datenrettung/ssd',
  },
  {
    id: 'raid',
    label: 'Speichermedium',
    title: 'RAID\n& NAS',
    subtitle: 'Server · NAS · DAS',
    gradient: 'linear-gradient(135deg, #0a1f12 0%, #0d4a2a 45%, #0a5540 100%)',
    glowColor: 'rgba(16,185,129,0.15)',
    brands: ['Synology', 'QNAP', 'Buffalo', 'Drobo', 'LaCie', 'NetApp'],
    stats: [
      { value: '89%', label: 'Erfolgsquote' },
      { value: 'SLA', label: 'B2B-Vertrag' },
      { value: 'NDA', label: 'Verfügbar' },
    ],
    features: [
      'RAID 0/1/5/6/10 Rekonstruktion',
      'NAS-Gehäuse & Controller-Defekte',
      'Mehrere gleichzeitig ausgefallene Disks',
      'DSGVO-konformes B2B-Handling',
    ],
    href: '/datenrettung/raid-nas',
  },
];

type CardState = 'active' | 'exit' | 'hidden';
type SlideDirection = 'forward' | 'back';

function getSlideTransform(state: CardState, direction: SlideDirection): string {
  if (state === 'active') return 'translateY(0) scale(1)';

  if (state === 'exit') {
    return direction === 'forward'
      ? 'translateY(-48px) scale(0.97)'
      : 'translateY(48px) scale(0.97)';
  }

  return direction === 'forward'
    ? 'translateY(64px) scale(0.97)'
    : 'translateY(-64px) scale(0.97)';
}

function ExpertiseSectionHeading({ className }: { className?: string }) {
  return (
    <div className={className}>
      <h2
        id="expertise-heading"
        className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold tracking-[-0.02em] text-text"
      >
        Unsere Expertise
      </h2>
      <p className="mt-2 text-base text-text-muted">Jedes Medium. Jeder Schaden.</p>
    </div>
  );
}

function ExpertiseCardMedium({
  card,
  className,
}: {
  card: ExpertiseCardData;
  className?: string;
}) {
  return (
    <div
      className={[
        'flex shrink-0 flex-col justify-center md:w-[200px] lg:w-[220px]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <p className="mb-2 text-xs font-medium uppercase tracking-widest text-text-muted">
        {card.label}
      </p>
      <h3 className="mb-1 whitespace-pre-line text-[clamp(1.5rem,2.5vw,2rem)] font-bold leading-tight tracking-[-0.02em] text-text">
        {card.title}
      </h3>
      <p className="text-sm text-text-muted">{card.subtitle}</p>
    </div>
  );
}

function ExpertiseCardBrands({
  card,
  className,
}: {
  card: ExpertiseCardData;
  className?: string;
}) {
  return (
    <div
      className={[
        'flex shrink-0 flex-col justify-center md:w-[200px] lg:w-[220px]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <p className="mb-3 text-xs font-medium uppercase tracking-widest text-text-muted">
        Hersteller
      </p>
      <div className="grid grid-cols-2 gap-1.5">
        {card.brands.map((brand) => (
          <div
            key={brand}
            className="rounded-lg border border-border bg-bg-subtle px-2 py-1.5 text-center text-[10px] font-semibold tracking-wide text-text-muted"
          >
            {brand}
          </div>
        ))}
      </div>
    </div>
  );
}

function ExpertiseCardTile({
  card,
  className,
}: {
  card: ExpertiseCardData;
  className?: string;
}) {
  return (
    <div
      className={[
        'relative h-[520px] w-full max-w-[340px] shrink-0 overflow-hidden rounded-3xl',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ background: card.gradient }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 size-56 rounded-full"
        style={{
          background: `radial-gradient(circle, ${card.glowColor} 0%, transparent 70%)`,
        }}
      />

      <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
        <div className="flex gap-6">
          {card.stats.map((stat) => (
            <div key={stat.label}>
              <p className="mb-1 text-[clamp(1.25rem,2vw,1.75rem)] font-bold leading-none tracking-[-0.03em] text-white">
                {stat.value}
              </p>
              <p className="text-[10px] font-medium uppercase tracking-widest text-white/45">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <ul className="space-y-2.5">
          {card.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2.5 text-sm leading-snug text-white/75"
            >
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-400" />
              {feature}
            </li>
          ))}
        </ul>

        <Link
          href={card.href}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
        >
          Mehr erfahren
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}

function ExpertiseSlide({
  card,
  state,
  direction,
}: {
  card: ExpertiseCardData;
  state: CardState;
  direction: SlideDirection;
}) {
  const opacities: Record<CardState, number> = { active: 1, exit: 0, hidden: 0 };

  return (
    <div
      className="absolute inset-0 flex items-center justify-center gap-12 lg:gap-16"
      style={{
        transform: getSlideTransform(state, direction),
        opacity: opacities[state],
        transition: 'transform 0.6s cubic-bezier(.25,.46,.45,.94), opacity 0.5s ease',
        pointerEvents: state === 'active' ? 'auto' : 'none',
      }}
    >
      <ExpertiseCardMedium card={card} />
      <ExpertiseCardTile card={card} />
      <ExpertiseCardBrands card={card} />
    </div>
  );
}

function MobileExpertiseBlock({ card }: { card: ExpertiseCardData }) {
  return (
    <div className="mx-auto flex w-full max-w-[340px] flex-col items-center gap-5 text-center">
      <ExpertiseCardMedium card={card} className="w-full items-center" />
      <ExpertiseCardTile card={card} className="w-full" />
      <ExpertiseCardBrands card={card} className="w-full items-center" />
    </div>
  );
}

export default function ExpertiseSection() {
  const outerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<SlideDirection>('forward');

  useEffect(() => {
    let rafId: number;
    let lastIndex = 0;

    const onScroll = (): void => {
      if (!outerRef.current) return;
      if (window.innerWidth < 768) return;

      const rect = outerRef.current.getBoundingClientRect();
      const outerHeight = outerRef.current.offsetHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / (outerHeight - window.innerHeight)));
      const idx = Math.min(2, Math.floor(progress * 3));

      if (idx !== lastIndex) {
        setDirection(idx > lastIndex ? 'forward' : 'back');
        setPrevIndex(lastIndex);
        setActiveIndex(idx);
        lastIndex = idx;
      }
    };

    const tick = (): void => {
      onScroll();
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section aria-labelledby="expertise-heading">
      <div className="py-16 md:hidden">
        <ExpertiseSectionHeading className="px-6 text-center" />
        <div className="mt-10 flex flex-col items-center gap-10 px-6">
          {CARDS.map((card) => (
            <MobileExpertiseBlock key={card.id} card={card} />
          ))}
        </div>
      </div>

      <div ref={outerRef} className="relative hidden h-[300vh] md:block">
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden px-6">
          <ExpertiseSectionHeading className="absolute left-0 right-0 top-10 text-center" />

          <div className="relative h-[520px] w-full max-w-5xl">
            {CARDS.map((card, index) => (
              <ExpertiseSlide
                key={card.id}
                card={card}
                direction={direction}
                state={
                  index === activeIndex ? 'active' : index === prevIndex ? 'exit' : 'hidden'
                }
              />
            ))}
          </div>

          <div className="absolute bottom-10 flex gap-2">
            {CARDS.map((_, index) => (
              <div
                key={index}
                className={[
                  'h-1.5 rounded-full transition-all duration-500',
                  index === activeIndex ? 'w-6 bg-text' : 'w-1.5 bg-text/20',
                ].join(' ')}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
