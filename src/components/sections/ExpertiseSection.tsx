'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { DIAGNOSIS_FEE_FORMATTED } from '@/lib/constants';

interface ExpertiseBadge {
  text: string;
  hint: string;
}

interface ExpertiseCardData {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  gradient: string;
  glowColor: string;
  brands: string[];
  badges: ExpertiseBadge[];
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
    badges: [
      { text: '95%', hint: 'Erfolgsquote' },
      { text: '899 – 1.799 €', hint: 'Preisrahmen Standard HDD/SSD' },
      { text: DIAGNOSIS_FEE_FORMATTED, hint: 'Analysepauschale' },
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
    badges: [
      { text: '92%', hint: 'Erfolgsquote' },
      { text: '3–5 Tage', hint: 'Standardbearbeitung' },
      { text: '899 – 1.799 €', hint: 'Preisrahmen Standard HDD/SSD' },
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
    badges: [
      { text: '89%', hint: 'Erfolgsquote' },
      { text: 'SLA', hint: 'B2B-Vertrag' },
      { text: 'NDA', hint: 'Verfügbar' },
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
        className="text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-tight tracking-[-0.02em] text-text"
      >
        Unsere Expertise
      </h2>
      <p className="mt-1.5 text-base leading-snug text-text-muted md:mt-2">
        Jedes Medium. Jeder Schaden.
      </p>
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
      <h3 className="mb-0.5 whitespace-pre-line text-[clamp(1.5rem,2.5vw,2rem)] font-bold leading-tight tracking-[-0.02em] text-text">
        {card.title}
      </h3>
      <p className="text-sm leading-snug text-text-muted">{card.subtitle}</p>
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
  compact = false,
}: {
  card: ExpertiseCardData;
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={[
        'relative w-full max-w-[340px] shrink-0 overflow-hidden rounded-3xl',
        compact
          ? 'h-[351px]'
          : 'h-[468px] min-[1512px]:h-[520px]',
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
        <div className={['flex flex-wrap gap-2', compact ? 'justify-start' : ''].join(' ')}>
          {card.badges.map((badge) => (
            <span
              key={badge.text}
              aria-label={badge.hint}
              title={badge.hint}
              className="rounded-full border border-white/15 bg-white/[0.08] px-3 py-1 text-xs font-semibold tracking-wide text-white/90"
            >
              {badge.text}
            </span>
          ))}
        </div>

        <ul className={['w-full space-y-2.5', compact ? 'text-left' : ''].join(' ')}>
          {card.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2.5 text-left text-sm leading-snug text-white/75"
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

function MobileExpertiseStack({
  card,
  className,
}: {
  card: ExpertiseCardData;
  className?: string;
}) {
  return (
    <div
      className={[
        'mx-auto flex w-full max-w-[340px] origin-top scale-[0.9] flex-col items-stretch gap-4',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <ExpertiseCardMedium card={card} className="w-full text-center" />
      <ExpertiseCardTile card={card} className="pointer-events-auto w-full" compact />
      <ExpertiseCardBrands card={card} className="w-full text-center" />
    </div>
  );
}

function MobileExpertiseSlide({
  card,
  state,
  direction,
}: {
  card: ExpertiseCardData;
  state: CardState;
  direction: SlideDirection;
}) {
  const opacities: Record<CardState, number> = { active: 1, exit: 0, hidden: 0 };
  const zIndexes: Record<CardState, number> = { active: 10, exit: 5, hidden: 0 };

  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        opacity: opacities[state],
        zIndex: zIndexes[state],
        transition: 'opacity 0.5s ease',
      }}
    >
      <div
        className="pointer-events-none"
        style={{
          transform: getSlideTransform(state, direction),
          transition: 'transform 0.6s cubic-bezier(.25,.46,.45,.94)',
        }}
      >
        <MobileExpertiseStack
          card={card}
          className={state === 'active' ? 'pointer-events-auto' : undefined}
        />
      </div>
    </div>
  );
}

function ProgressDots({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="flex gap-2">
      {CARDS.map((_, index) => (
        <div
          key={index}
          aria-hidden={index !== activeIndex}
          className={[
            'h-1.5 rounded-full transition-all duration-500',
            index === activeIndex ? 'w-6 bg-text' : 'w-1.5 bg-text/20',
          ].join(' ')}
        />
      ))}
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

    const getViewportHeight = (): number =>
      window.visualViewport?.height ?? window.innerHeight;

    const onScroll = (): void => {
      if (!outerRef.current) return;

      const rect = outerRef.current.getBoundingClientRect();
      const outerHeight = outerRef.current.offsetHeight;
      const viewportHeight = getViewportHeight();
      const scrollRange = outerHeight - viewportHeight;
      if (scrollRange <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollRange));
      const idx = Math.min(CARDS.length - 1, Math.floor(progress * CARDS.length));

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

    const handleViewportResize = (): void => {
      onScroll();
    };

    rafId = requestAnimationFrame(tick);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.visualViewport?.addEventListener('resize', handleViewportResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.visualViewport?.removeEventListener('resize', handleViewportResize);
    };
  }, []);

  return (
    <section aria-labelledby="expertise-heading">
      <div ref={outerRef} className="relative h-[300vh] touch-pan-y">
        <ExpertiseSectionHeading className="px-6 pb-6 pt-12 text-center md:hidden" />

        <div className="sticky top-[var(--site-header-height)] h-[calc(100dvh-var(--site-header-height))] overflow-hidden md:top-0 md:h-screen">
          {/* Desktop — original layout & full-size tiles */}
          <div className="relative hidden h-full items-center justify-center px-6 md:flex">
            <ExpertiseSectionHeading className="absolute left-0 right-0 top-16 text-center" />

            <div className="relative h-[468px] w-full max-w-5xl min-[1512px]:h-[520px]">
              {CARDS.map((card, index) => {
                const state: CardState =
                  index === activeIndex ? 'active' : index === prevIndex ? 'exit' : 'hidden';

                return (
                  <ExpertiseSlide key={card.id} card={card} direction={direction} state={state} />
                );
              })}
            </div>

            <div className="absolute bottom-20 left-0 right-0 flex justify-center">
              <ProgressDots activeIndex={activeIndex} />
            </div>
          </div>

          {/* Mobile — stacked: medium → tile → hersteller → pagination (fixed) */}
          <div className="flex h-full flex-col items-center px-4 pt-[10vh] md:hidden">
            <div className="relative w-full max-w-[340px] shrink-0">
              <div aria-hidden="true" className="invisible">
                <MobileExpertiseStack card={CARDS[activeIndex]} />
              </div>

              <div className="absolute inset-0">
                {CARDS.map((card, index) => {
                  const state: CardState =
                    index === activeIndex ? 'active' : index === prevIndex ? 'exit' : 'hidden';

                  return (
                    <MobileExpertiseSlide
                      key={card.id}
                      card={card}
                      direction={direction}
                      state={state}
                    />
                  );
                })}
              </div>
            </div>

            <div className="mt-4 shrink-0 pb-8">
              <ProgressDots activeIndex={activeIndex} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
