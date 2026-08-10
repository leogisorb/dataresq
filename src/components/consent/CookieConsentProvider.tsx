'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

import {
  COOKIE_CONSENT_EVENT,
  DEFAULT_CONSENT_DENIED,
  readCookieConsent,
  writeCookieConsent,
  type CookieConsentState,
} from '@/lib/cookie-consent';

interface CookieConsentContextValue {
  consent: CookieConsentState;
  hasDecided: boolean;
  bannerOpen: boolean;
  acceptAll: () => void;
  rejectOptional: () => void;
  savePreferences: (prefs: { analytics: boolean; marketing: boolean }) => void;
  openSettings: () => void;
  closeBanner: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

interface CookieConsentProviderProps {
  children: ReactNode;
}

export function CookieConsentProvider({
  children,
}: CookieConsentProviderProps): React.JSX.Element {
  const [consent, setConsent] = useState<CookieConsentState>(DEFAULT_CONSENT_DENIED);
  const [hasDecided, setHasDecided] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = readCookieConsent();
    if (stored) {
      setConsent(stored);
      setHasDecided(true);
      setBannerOpen(false);
    } else {
      setBannerOpen(true);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    const onOpen = () => setBannerOpen(true);
    window.addEventListener(COOKIE_CONSENT_EVENT, onOpen);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, onOpen);
  }, []);

  const persist = useCallback((prefs: { analytics: boolean; marketing: boolean }) => {
    const next = writeCookieConsent(prefs);
    setConsent(next);
    setHasDecided(true);
    setBannerOpen(false);
  }, []);

  const acceptAll = useCallback(() => {
    persist({ analytics: true, marketing: true });
  }, [persist]);

  const rejectOptional = useCallback(() => {
    persist({ analytics: false, marketing: false });
  }, [persist]);

  const savePreferences = useCallback(
    (prefs: { analytics: boolean; marketing: boolean }) => {
      persist(prefs);
    },
    [persist],
  );

  const openSettings = useCallback(() => setBannerOpen(true), []);
  const closeBanner = useCallback(() => {
    if (hasDecided) setBannerOpen(false);
  }, [hasDecided]);

  const value = useMemo(
    () => ({
      consent,
      hasDecided: hydrated && hasDecided,
      bannerOpen: hydrated && bannerOpen,
      acceptAll,
      rejectOptional,
      savePreferences,
      openSettings,
      closeBanner,
    }),
    [
      consent,
      hydrated,
      hasDecided,
      bannerOpen,
      acceptAll,
      rejectOptional,
      savePreferences,
      openSettings,
      closeBanner,
    ],
  );

  return (
    <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>
  );
}

export function useCookieConsent(): CookieConsentContextValue {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error('useCookieConsent must be used within CookieConsentProvider');
  }
  return ctx;
}
