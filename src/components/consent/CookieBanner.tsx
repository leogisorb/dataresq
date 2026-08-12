'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '@heroui/react';

import { useCookieConsent } from '@/components/consent/CookieConsentProvider';
import { BTN_BRAND, BTN_BRAND_SM } from '@/lib/button-styles';

export default function CookieBanner(): React.JSX.Element | null {
  const {
    bannerOpen,
    consent,
    hasDecided,
    acceptAll,
    rejectOptional,
    savePreferences,
    closeBanner,
  } = useCookieConsent();
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (bannerOpen) {
      setAnalytics(consent.analytics);
      setMarketing(consent.marketing);
      setShowDetails(false);
    }
  }, [bannerOpen, consent.analytics, consent.marketing]);

  if (!bannerOpen) return null;

  return (
    <div
      aria-describedby="cookie-banner-desc"
      aria-labelledby="cookie-banner-title"
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-border bg-bg p-4 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] md:p-6"
      role="dialog"
    >
      <div className="site-container flex max-w-4xl flex-col gap-4">
        <div>
          <h2 className="text-base font-semibold text-text md:text-lg" id="cookie-banner-title">
            Cookie-Einstellungen
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-text-muted" id="cookie-banner-desc">
            Wir verwenden technisch notwendige Cookies sowie — nur mit Ihrer Einwilligung —
            optionale Analyse-Cookies (Google Analytics 4) und Marketing-Cookies (z. B. Google Ads).
            Details in der{' '}
            <Link className="text-accent underline-offset-2 hover:underline" href="/datenschutz">
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>

        {showDetails ? (
          <div className="flex flex-col gap-3 rounded-xl border border-border bg-bg-subtle p-4">
            <label className="flex items-start gap-3 text-sm text-text">
              <input
                checked
                className="mt-1 size-4 accent-accent"
                disabled
                readOnly
                type="checkbox"
              />
              <span>
                <span className="font-medium">Notwendig</span>
                <span className="mt-0.5 block text-text-muted">
                  Für Betrieb und Sicherheit der Website — immer aktiv.
                </span>
              </span>
            </label>
            <label className="flex items-start gap-3 text-sm text-text">
              <input
                checked={analytics}
                className="mt-1 size-4 accent-accent"
                type="checkbox"
                onChange={(event) => setAnalytics(event.target.checked)}
              />
              <span>
                <span className="font-medium">Analyse (Google Analytics 4)</span>
                <span className="mt-0.5 block text-text-muted">
                  Hilft uns, Nutzung und Preisrechner zu verstehen. Wird erst nach Einwilligung
                  geladen.
                </span>
              </span>
            </label>
            <label className="flex items-start gap-3 text-sm text-text">
              <input
                checked={marketing}
                className="mt-1 size-4 accent-accent"
                type="checkbox"
                onChange={(event) => setMarketing(event.target.checked)}
              />
              <span>
                <span className="font-medium">Marketing (Google Ads)</span>
                <span className="mt-0.5 block text-text-muted">
                  Conversion-Messung und Remarketing — Einwilligung wird gespeichert; Ads-Tags
                  folgen bei Kampagnenstart.
                </span>
              </span>
            </label>
            <div className="flex flex-wrap gap-2 pt-1">
              <Button
                className={`${BTN_BRAND_SM} rounded-full`}
                type="button"
                onPress={() => savePreferences({ analytics, marketing })}
              >
                Auswahl speichern
              </Button>
              <Button
                className="min-h-9 rounded-full border border-border bg-bg px-4 text-xs font-semibold !text-text"
                type="button"
                variant="outline"
                onPress={() => setShowDetails(false)}
              >
                Zurück
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
            <Button className={`${BTN_BRAND} rounded-full`} type="button" onPress={acceptAll}>
              Alle akzeptieren
            </Button>
            <Button
              className="min-h-11 rounded-full border border-border bg-bg px-5 text-sm font-semibold !text-text"
              type="button"
              variant="outline"
              onPress={rejectOptional}
            >
              Nur notwendige
            </Button>
            <Button
              className="min-h-11 rounded-full px-5 text-sm font-semibold !text-accent"
              type="button"
              variant="ghost"
              onPress={() => setShowDetails(true)}
            >
              Einstellungen
            </Button>
            {hasDecided ? (
              <Button
                className="min-h-11 rounded-full px-5 text-sm font-medium !text-text-muted"
                type="button"
                variant="ghost"
                onPress={closeBanner}
              >
                Schließen
              </Button>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
