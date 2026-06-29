import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

import { getIambulanzLocations } from '@/lib/locations';

export default function IambulanzPartnerSection() {
  const locations = getIambulanzLocations();

  return (
    <div className="flex flex-col gap-8">
      <p className="max-w-3xl text-base leading-relaxed text-text md:text-lg">
        RSQDATA arbeitet mit <strong className="font-semibold">iAmbulanz</strong> als offiziellem
        Partner zusammen. An allen iAmbulanz-Abgabestellen nehmen wir{' '}
        <strong className="font-semibold">jeden Datenträgertyp</strong> entgegen — Festplatte,
        SSD, RAID, USB, Smartphone, Notebook und mehr — ohne Termin, mit persönlicher
        Kundenbetreuung und dokumentiertem Übergabeprotokoll.
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        {locations.map((location) => (
          <article
            key={location.slug}
            className="flex flex-col overflow-hidden rounded-xl border border-border bg-bg-card"
          >
            <div className="relative aspect-[16/10] w-full bg-bg-subtle">
              <Image
                alt={location.imageAlt}
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                src={location.image}
              />
            </div>

            <div className="flex flex-1 flex-col gap-4 p-6 md:p-8">
              <div className="flex flex-col gap-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                  iAmbulanz Abgabestelle
                </p>
                <h3 className="text-xl font-semibold text-text">{location.name}</h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {location.street}, {location.zip} {location.name}
                </p>
                <p className="text-sm leading-relaxed text-text-muted">
                  Alle Datenträgertypen — HDD, SSD, RAID/NAS, USB/SD, Smartphone, Notebook
                </p>
              </div>

              <div className="mt-auto flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-medium text-text transition-colors hover:border-text-dim hover:text-text"
                  href={location.mapsUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <MapPin aria-hidden="true" className="size-4 shrink-0" strokeWidth={1.5} />
                  Google Maps
                </a>
                <Link
                  className="inline-flex min-h-11 flex-1 items-center justify-center rounded-xl bg-bg-subtle px-4 py-3 text-sm font-medium text-text transition-colors hover:bg-border"
                  href={`/standort/${location.slug}`}
                >
                  Mehr erfahren
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
