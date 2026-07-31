'use client';

import { useEffect, useState } from 'react';

import AsciiThemeRail, {
  readStoredAsciiTheme,
} from '@/components/variante-b/AsciiThemeRail';
import DataRecoveryBackground from '@/components/variante-b/DataRecoveryBackground';
import RebootBrandBar from '@/components/variante-b/RebootBrandBar';
import RebootHeroContent from '@/components/variante-b/RebootHeroContent';
import RebootNavbar from '@/components/variante-b/RebootNavbar';
import type { AsciiShapeId } from '@/lib/ascii-shapes';

/** Mobile hero uses platter/disc ASCII only — first theme, no picker */
const MOBILE_THEME: AsciiShapeId = 'platter';
const DEFAULT_THEME: AsciiShapeId = 'logo';

export default function RebootHeroCard(): React.JSX.Element {
  const [shape, setShape] = useState<AsciiShapeId>(DEFAULT_THEME);
  const [isMobile, setIsMobile] = useState(false);
  /** Defer ASCII canvas until after first paint — lighter LCP / TBT */
  const [showAscii, setShowAscii] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const syncViewport = (): void => {
      const mobile = mq.matches;
      setIsMobile(mobile);
      if (mobile) {
        setShape(MOBILE_THEME);
        return;
      }
      const stored = readStoredAsciiTheme();
      setShape(stored ?? DEFAULT_THEME);
    };

    syncViewport();
    mq.addEventListener('change', syncViewport);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return () => {
        mq.removeEventListener('change', syncViewport);
      };
    }

    let cancelled = false;
    const enable = (): void => {
      if (!cancelled) {
        setShowAscii(true);
      }
    };

    let idleId = 0;
    let usedIdleCallback = false;

    if (typeof window.requestIdleCallback === 'function') {
      usedIdleCallback = true;
      idleId = window.requestIdleCallback(enable, { timeout: 400 });
    } else {
      idleId = window.setTimeout(enable, 0);
    }

    return () => {
      cancelled = true;
      mq.removeEventListener('change', syncViewport);
      if (usedIdleCallback && typeof window.cancelIdleCallback === 'function') {
        window.cancelIdleCallback(idleId);
      } else {
        window.clearTimeout(idleId);
      }
    };
  }, []);

  return (
    <div className="relative flex h-dvh min-h-dvh w-full flex-col overflow-hidden bg-white pt-[env(safe-area-inset-top,0px)] pb-[env(safe-area-inset-bottom,0px)] pl-[env(safe-area-inset-left,0px)] pr-[env(safe-area-inset-right,0px)]">
      {showAscii ? <DataRecoveryBackground shape={shape} /> : null}

      <RebootNavbar />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center py-16 md:py-24">
        <RebootHeroContent />
      </div>

      {!isMobile ? (
        <AsciiThemeRail value={shape} onChange={setShape} />
      ) : null}

      <div className="relative z-10 mt-auto w-full pt-10 md:pt-16">
        <RebootBrandBar />
      </div>
    </div>
  );
}
