'use client';

import dynamic from 'next/dynamic';

const WiderrufsButton = dynamic(() => import('./WiderrufsButtonClient'), {
  ssr: false,
  loading: () => (
    <span
      aria-hidden="true"
      className="inline-block h-8 w-44 animate-pulse rounded-full bg-black/5"
    />
  ),
});

export default WiderrufsButton;
