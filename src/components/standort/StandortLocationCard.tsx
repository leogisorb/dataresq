import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

import { TILE_HOVER_BORDER } from '@/lib/button-styles';
import { getLocationPartnerLabel, type Location } from '@/lib/locations';

interface StandortLocationCardProps {
  location: Location;
}

function getLocationCardNote(location: Location): string {
  if (location.kind === 'abgabe') {
    return 'Alle Datenträgertypen — HDD, SSD, RAID/NAS, USB/SD, Smartphone, Notebook';
  }
  if (location.kind === 'buero') {
    return 'Büro & Kundenbetreuung — keine Medien-Abgabe vor Ort';
  }
  return 'Partner-Reinraumlabor — keine Abgabe vor Ort';
}

export default function StandortLocationCard({ location }: StandortLocationCardProps) {
  return (
    <article
      className={[
        'flex flex-col overflow-hidden rounded-xl border border-border bg-bg-card',
        TILE_HOVER_BORDER,
      ].join(' ')}
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
            {getLocationPartnerLabel(location)}
          </p>
          <h2 className="text-xl font-semibold text-text">{location.name}</h2>
          <p className="text-sm leading-relaxed text-text-muted">
            {location.street}, {location.zip} {location.name}
          </p>
          <p className="text-sm leading-relaxed text-text-muted">
            {getLocationCardNote(location)}
          </p>
        </div>

        <div className="mt-auto flex flex-col gap-3 sm:flex-row">
          <a
            className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-medium text-text transition-colors active:border-neon md:hover:border-neon"
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
  );
}
