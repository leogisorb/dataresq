'use client';

import { useState } from 'react';

interface StandortMapConsentProps {
  embedUrl: string;
  mapsUrl: string;
  locationName: string;
}

export default function StandortMapConsent({
  embedUrl,
  mapsUrl,
  locationName,
}: StandortMapConsentProps): React.JSX.Element {
  const [loaded, setLoaded] = useState(false);

  return (
    <section aria-label={`Karte ${locationName}`} className="mt-8">
      <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl border border-border bg-bg-subtle md:aspect-[3/1]">
        {loaded ? (
          <iframe
            allowFullScreen
            className="absolute inset-0 size-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={embedUrl}
            title={`Google Maps – ${locationName}`}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
            <p className="max-w-md text-sm leading-relaxed text-text-muted md:text-base">
              Zum Schutz Ihrer Daten wird Google Maps erst nach Ihrer Zustimmung geladen.
              Dabei werden Daten (u. a. Ihre IP-Adresse) an Google übermittelt.
            </p>
            <button
              className="min-h-11 rounded-full bg-accent px-6 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
              onClick={() => setLoaded(true)}
              type="button"
            >
              Karte laden
            </button>
            <a
              className="text-sm text-accent underline-offset-2 hover:underline"
              href={mapsUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              In Google Maps öffnen
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
