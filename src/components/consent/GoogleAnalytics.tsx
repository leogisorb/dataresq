'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';

import { useCookieConsent } from '@/components/consent/CookieConsentProvider';
import { getGaMeasurementId } from '@/lib/cookie-consent';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function ensureGtag(): void {
  window.dataLayer = window.dataLayer ?? [];
  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
  }
}

function sendPageView(measurementId: string, pagePath: string): void {
  window.gtag?.('event', 'page_view', {
    send_to: measurementId,
    page_path: pagePath,
    page_location: window.location.href,
    page_title: document.title,
  });
}

export default function GoogleAnalytics(): React.JSX.Element | null {
  const { consent } = useCookieConsent();
  const measurementId = getGaMeasurementId();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [scriptReady, setScriptReady] = useState(false);

  const enabled = Boolean(measurementId && consent.analytics);

  useEffect(() => {
    if (!enabled) {
      setScriptReady(false);
    }
  }, [enabled]);

  useEffect(() => {
    if (!enabled || !measurementId || !scriptReady) return;
    const query = searchParams.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;
    sendPageView(measurementId, pagePath);
  }, [enabled, measurementId, scriptReady, pathname, searchParams]);

  if (!enabled || !measurementId) {
    return null;
  }

  return (
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      strategy="afterInteractive"
      onLoad={() => {
        ensureGtag();
        window.gtag?.('js', new Date());
        window.gtag?.('config', measurementId, {
          anonymize_ip: true,
          send_page_view: false,
        });
        setScriptReady(true);
      }}
    />
  );
}
