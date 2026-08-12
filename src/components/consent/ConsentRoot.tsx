'use client';

import { Suspense } from 'react';

import CookieBanner from '@/components/consent/CookieBanner';
import { CookieConsentProvider } from '@/components/consent/CookieConsentProvider';
import GoogleAnalytics from '@/components/consent/GoogleAnalytics';
import VercelAnalytics from '@/components/consent/VercelAnalytics';

interface ConsentRootProps {
  children: React.ReactNode;
}

export default function ConsentRoot({ children }: ConsentRootProps): React.JSX.Element {
  return (
    <CookieConsentProvider>
      {children}
      <CookieBanner />
      <Suspense fallback={null}>
        <GoogleAnalytics />
      </Suspense>
      <VercelAnalytics />
    </CookieConsentProvider>
  );
}
