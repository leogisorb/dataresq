'use client';

import { Analytics } from '@vercel/analytics/next';

import { useCookieConsent } from '@/components/consent/CookieConsentProvider';

/** First-party Web Analytics — only after analytics consent (aligned with GA4). */
export default function VercelAnalytics(): React.JSX.Element | null {
  const { consent } = useCookieConsent();

  if (!consent.analytics) return null;

  return <Analytics />;
}
