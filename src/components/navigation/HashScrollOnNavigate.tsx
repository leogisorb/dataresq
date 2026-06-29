'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

import { scrollToHash } from '@/lib/hash-navigation';

export default function HashScrollOnNavigate() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const frame = requestAnimationFrame(() => {
      scrollToHash(hash, { updateHistory: false });
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
