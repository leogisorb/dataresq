import type { Metadata } from 'next';

import RebootHeroCard from '@/components/variante-b/RebootHeroCard';
import { createContentMetadata } from '@/lib/metadata';
import { VARIANTE_B_COPY } from '@/lib/variante-b';

export const metadata: Metadata = {
  ...createContentMetadata({
    title: 'Datenrettung — Design-Variante B',
    description: VARIANTE_B_COPY.subline,
    path: '/variante-b',
  }),
  robots: {
    index: false,
    follow: false,
  },
};

export default function VarianteBPage(): React.JSX.Element {
  return (
    <main className="min-h-dvh bg-white">
      <RebootHeroCard />
    </main>
  );
}
