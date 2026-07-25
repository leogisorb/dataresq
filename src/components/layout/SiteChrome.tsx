'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

import Footer from '@/components/layout/Footer';
import MobileNav from '@/components/layout/MobileNav';

interface SiteChromeProps {
  children: ReactNode;
}

export default function SiteChrome({ children }: SiteChromeProps): React.JSX.Element {
  const pathname = usePathname();
  const hideChrome = pathname === '/variante-b';

  return (
    <>
      {!hideChrome ? <MobileNav /> : null}
      {children}
      {!hideChrome ? <Footer /> : null}
    </>
  );
}
