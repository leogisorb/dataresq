'use client';

import { useOverlayState } from '@heroui/react';
import { useEffect, useState } from 'react';

import AnfrageFormModal from '@/components/contact/AnfrageFormModal';
import AsciiThemeRail, {
  readStoredAsciiTheme,
} from '@/components/variante-b/AsciiThemeRail';
import DataRecoveryBackground from '@/components/variante-b/DataRecoveryBackground';
import RebootBrandBar from '@/components/variante-b/RebootBrandBar';
import RebootHeroContent from '@/components/variante-b/RebootHeroContent';
import RebootNavbar from '@/components/variante-b/RebootNavbar';
import type { AsciiShapeId } from '@/lib/ascii-shapes';

const DEFAULT_THEME: AsciiShapeId = 'folder';

export default function RebootHeroCard(): React.JSX.Element {
  const anfrageState = useOverlayState();
  const [shape, setShape] = useState<AsciiShapeId>(DEFAULT_THEME);

  useEffect(() => {
    const stored = readStoredAsciiTheme();
    if (stored) {
      setShape(stored);
    }
  }, []);

  return (
    <div className="relative flex h-dvh min-h-dvh w-full flex-col overflow-hidden bg-white">
      <DataRecoveryBackground shape={shape} />

      <RebootNavbar onAnfrage={anfrageState.open} />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center py-16 md:py-24">
        <RebootHeroContent onAnfrage={anfrageState.open} />
      </div>

      <AsciiThemeRail value={shape} onChange={setShape} />

      <div className="relative z-10 mt-auto w-full pt-10 md:pt-16">
        <RebootBrandBar />
      </div>

      <AnfrageFormModal
        hideTrigger
        isOpen={anfrageState.isOpen}
        onOpenChange={anfrageState.setOpen}
      />
    </div>
  );
}
