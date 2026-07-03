'use client';

import { useCallback, useEffect, useRef, useState, type ReactElement } from 'react';

import HashLink from '@/components/navigation/HashLink';
import { mobileNavItems, type MobileNavItem } from '@/lib/navigation';

const RADIUS = 280;
const CENTER_X = -RADIUS;
const DOT_RADIUS = RADIUS;
const LABEL_RADIUS = RADIUS + 34;
const ANGLE_STEP = 20 * (Math.PI / 180);
const SCROLL_SENSITIVITY = 64;
const VISIBLE_ARC_START = -54 * (Math.PI / 180);
const VISIBLE_ARC_END = 54 * (Math.PI / 180);

interface MobileCircleMenuProps {
  isOpen: boolean;
  activeHref: string;
  onClose: () => void;
}

function getActiveIndex(href: string): number {
  const exact = mobileNavItems.findIndex((item) => item.href === href);
  if (exact >= 0) return exact;

  const prefix = mobileNavItems.findIndex(
    (item) => !item.href.startsWith('/#') && item.href !== '/' && href.startsWith(item.href),
  );
  return prefix >= 0 ? prefix : 0;
}

function clampPosition(value: number): number {
  return Math.max(0, Math.min(mobileNavItems.length - 1, value));
}

function polarToCartesian(
  angle: number,
  centerY: number,
  radius: number,
): { x: number; y: number } {
  return {
    x: CENTER_X + radius * Math.cos(angle),
    y: centerY + radius * Math.sin(angle),
  };
}

function describeArc(centerY: number): string {
  const start = polarToCartesian(VISIBLE_ARC_START, centerY, RADIUS);
  const end = polarToCartesian(VISIBLE_ARC_END, centerY, RADIUS);
  return `M ${start.x} ${start.y} A ${RADIUS} ${RADIUS} 0 0 1 ${end.x} ${end.y}`;
}

export default function MobileCircleMenu({
  isOpen,
  activeHref,
  onClose,
}: MobileCircleMenuProps): ReactElement | null {
  const wheelRef = useRef<HTMLDivElement>(null);
  const [centerY, setCenterY] = useState(360);
  const [position, setPosition] = useState(() => getActiveIndex(activeHref));
  const [isDragging, setIsDragging] = useState(false);
  const dragStartY = useRef(0);
  const dragStartPosition = useRef(0);

  const snappedIndex = Math.round(position);
  const activeItem: MobileNavItem = mobileNavItems[snappedIndex] ?? mobileNavItems[0];

  const syncCenterY = useCallback((): void => {
    if (!wheelRef.current) return;
    setCenterY(wheelRef.current.clientHeight / 2);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    setPosition(getActiveIndex(activeHref));
    syncCenterY();
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, activeHref, syncCenterY]);

  useEffect(() => {
    if (!isOpen) return;
    const onResize = (): void => syncCenterY();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [isOpen, syncCenterY]);

  const snapToNearest = useCallback((): void => {
    setPosition((current) => Math.round(current));
  }, []);

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>): void => {
    event.preventDefault();
    setPosition((current) => clampPosition(current + event.deltaY / SCROLL_SENSITIVITY));
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>): void => {
    setIsDragging(true);
    dragStartY.current = event.touches[0].clientY;
    dragStartPosition.current = position;
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>): void => {
    const deltaY = event.touches[0].clientY - dragStartY.current;
    setPosition(clampPosition(dragStartPosition.current + deltaY / SCROLL_SENSITIVITY));
  };

  const handleTouchEnd = (): void => {
    setIsDragging(false);
    snapToNearest();
  };

  const selectIndex = (index: number): void => {
    setPosition(index);
  };

  if (!isOpen) return null;

  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-[60] flex flex-col bg-bg md:hidden"
      id="mobile-circle-menu"
      role="dialog"
    >
      <div className="flex items-center justify-end px-5 py-4">
        <button
          aria-label="Menü schließen"
          className="touch-target inline-flex size-10 items-center justify-center text-neon"
          type="button"
          onClick={onClose}
        >
          <svg aria-hidden="true" className="size-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className="relative min-h-0 flex-1">
        <div
          ref={wheelRef}
          aria-label="Navigation Karussell"
          className="relative h-full w-full touch-none select-none overflow-hidden"
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
          onTouchStart={handleTouchStart}
          onWheel={handleWheel}
        >
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible"
          >
            <path
              d={describeArc(centerY)}
              fill="none"
              stroke="currentColor"
              strokeWidth={1}
              className="text-border"
            />
          </svg>

          {mobileNavItems.map((item, index) => {
            const offset = index - position;
            if (Math.abs(offset) > 2.2) return null;

            const angle = offset * ANGLE_STEP;
            const dot = polarToCartesian(angle, centerY, DOT_RADIUS);
            const label = polarToCartesian(angle, centerY, LABEL_RADIUS);
            const isActive = Math.abs(offset) < 0.35;
            const scale = isActive ? 1 : Math.max(0.5, 1 - Math.abs(offset) * 0.2);
            const opacity = Math.max(0.25, 1 - Math.abs(offset) * 0.3);
            const rotationDeg = (angle * 180) / Math.PI;

            return (
              <div key={item.href}>
                <span
                  aria-hidden="true"
                  className={[
                    'pointer-events-none absolute z-10 block -translate-x-1/2 -translate-y-1/2 rounded-full',
                    isActive ? 'size-2 bg-text' : 'size-1.5 bg-text-dim',
                  ].join(' ')}
                  style={{
                    left: dot.x,
                    top: dot.y,
                    opacity,
                    transition: isDragging ? 'none' : 'opacity 0.35s ease, top 0.45s ease, left 0.45s ease',
                  }}
                />

                <button
                  aria-current={isActive ? 'true' : undefined}
                  aria-label={`${item.label}${isActive ? ', aktiv' : ''}`}
                  className="absolute z-20 origin-center tabular-nums slashed-zero"
                  style={{
                    left: label.x,
                    top: label.y,
                    transform: `translate(-50%, -50%) rotate(${rotationDeg}deg) scale(${scale})`,
                    opacity,
                    transition: isDragging
                      ? 'none'
                      : 'transform 0.45s cubic-bezier(.25,.46,.45,.94), opacity 0.35s ease, top 0.45s ease, left 0.45s ease',
                  }}
                  type="button"
                  onClick={() => {
                    if (isActive) return;
                    selectIndex(index);
                  }}
                >
                  <span
                    className={[
                      'block text-[clamp(2.25rem,11vw,4rem)] font-bold leading-none tracking-tight',
                      isActive ? 'text-text' : 'text-text-muted',
                    ].join(' ')}
                  >
                    {String(index).padStart(2, '0')}
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        <div className="pointer-events-none absolute inset-y-0 right-0 z-30 flex w-[50%] items-center px-6">
          <div className="pointer-events-auto max-w-xs">
            <h2 className="text-2xl font-semibold tracking-tight text-text">{activeItem.label}</h2>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">{activeItem.description}</p>
            <HashLink
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-text transition-opacity hover:opacity-70"
              href={activeItem.href}
              prefetch={false}
              onClick={onClose}
            >
              Öffnen
              <span aria-hidden="true">→</span>
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
}
