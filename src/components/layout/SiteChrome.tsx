'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

import Footer from '@/components/layout/Footer';
import RebootNavbar from '@/components/variante-b/RebootNavbar';

interface SiteChromeProps {
  children: ReactNode;
}

export default function SiteChrome({ children }: SiteChromeProps): React.JSX.Element {
  const pathname = usePathname();
  const hideFooter = pathname === '/variante-b';

  return (
    <>
      <RebootNavbar />
      {children}
      {!hideFooter ? <Footer /> : null}
    </>
  );
}
