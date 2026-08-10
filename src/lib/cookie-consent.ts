export const COOKIE_CONSENT_STORAGE_KEY = 'rsqdata-cookie-consent-v1' as const;

export const COOKIE_CONSENT_EVENT = 'rsqdata:cookie-consent-open' as const;

export type ConsentCategory = 'analytics' | 'marketing';

export interface CookieConsentState {
  /** ISO timestamp of last decision */
  decidedAt: string;
  analytics: boolean;
  marketing: boolean;
}

export const DEFAULT_CONSENT_DENIED: CookieConsentState = {
  decidedAt: '',
  analytics: false,
  marketing: false,
};

export function isCookieConsentState(value: unknown): value is CookieConsentState {
  if (!value || typeof value !== 'object') return false;
  const record = value as Record<string, unknown>;
  return (
    typeof record.decidedAt === 'string' &&
    typeof record.analytics === 'boolean' &&
    typeof record.marketing === 'boolean'
  );
}

export function readCookieConsent(): CookieConsentState | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    return isCookieConsentState(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function writeCookieConsent(state: Omit<CookieConsentState, 'decidedAt'>): CookieConsentState {
  const next: CookieConsentState = {
    ...state,
    decidedAt: new Date().toISOString(),
  };
  window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(next));
  return next;
}

export function openCookieSettings(): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT));
}

export function getGaMeasurementId(): string | undefined {
  const id = process.env.NEXT_PUBLIC_GA_ID?.trim();
  return id && id.length > 0 ? id : undefined;
}
