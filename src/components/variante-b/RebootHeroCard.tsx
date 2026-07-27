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

const DEFAULT_THEME: AsciiShapeId = 'logo';

export default function RebootHeroCard(): React.JSX.Element {
  const [shape, setShape] = useState<AsciiShapeId>(DEFAULT_THEME);
  /** Defer ASCII canvas until after first paint — lighter LCP / TBT */
  const [showAscii, setShowAscii] = useState(false);

  useEffect(() => {
    const stored = readStoredAsciiTheme();
    if (stored) {
      setShape(stored);
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let cancelled = false;
    const enable = () => {
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
      if (usedIdleCallback && typeof window.cancelIdleCallback === 'function') {
        window.cancelIdleCallback(idleId);
      } else {
        window.clearTimeout(idleId);
      }
    };
  }, []);

  return (
    <div className="relative flex h-dvh min-h-dvh w-full flex-col overflow-hidden bg-white">
      {showAscii ? <DataRecoveryBackground shape={shape} /> : null}

      <RebootNavbar />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center py-16 md:py-24">
        <RebootHeroContent />
      </div>

      <AsciiThemeRail value={shape} onChange={setShape} />

      <div className="relative z-10 mt-auto w-full pt-10 md:pt-16">
        <RebootBrandBar />
      </div>
    </div>
  );
}
