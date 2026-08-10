'use client';

import { openCookieSettings } from '@/lib/cookie-consent';

export default function CookieSettingsLink(): React.JSX.Element {
  return (
    <button
      className="text-text underline-offset-2 hover:underline"
      type="button"
      onClick={() => openCookieSettings()}
    >
      Cookie-Einstellungen
    </button>
  );
}
