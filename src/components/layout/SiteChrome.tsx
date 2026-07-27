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
  // Homepage uses Reboot hero with its own navbar; /variante-b redirects but keep safe.
  const hideNav = pathname === '/' || pathname === '/variante-b';
  const hideFooter = pathname === '/variante-b';

  return (
    <>
      {!hideNav ? <MobileNav /> : null}
      {children}
      {!hideFooter ? <Footer /> : null}
    </>
  );
}
