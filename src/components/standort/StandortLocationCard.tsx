import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

import { getLocationPartnerLabel, type Location } from '@/lib/locations';

interface StandortLocationCardProps {
  location: Location;
  index: number;
  total: number;
  className?: string;
}

function getLocationTags(location: Location): string[] {
  if (location.kind === 'abgabe') {
    return ['HDD / SSD', 'RAID / NAS', 'USB / SD', 'Smartphone', 'Notebook & PC'];
  }
  if (location.kind === 'buero') {
    return ['Beratung', 'Koordination', 'Kundenportal'];
  }
  return ['Reinraumlabor', 'Partner Fields', 'Keine Abgabe'];
}

function getLocationCardNote(location: Location): string {
  if (location.kind === 'abgabe') {
    return 'Persönliche Abgabe ohne Termin — Zustand wird vor Ort dokumentiert.';
  }
  if (location.kind === 'buero') {
    return 'Büro & Kundenbetreuung — keine Medien-Abgabe vor Ort.';
  }
  return 'Partner-Reinraumlabor — technische Analyse und Rettung, keine Abgabe vor Ort.';
}

export default function StandortLocationCard({
  location,
  index,
  total,
  className,
}: StandortLocationCardProps): React.JSX.Element {
  const tags = getLocationTags(location);

  return (
    <article
      aria-label={`${location.name} (${index + 1} von ${total})`}
      className={[
        'relative flex flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#1c1c1e] text-white shadow-[0_12px_40px_rgba(0,0,0,0.22)] md:rounded-[2rem]',
        className ?? '',
      ].join(' ')}
    >
      {/* Soft photo wash in the background — keeps deck readable */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          alt=""
          className="object-cover opacity-[0.28]"
          fill
          sizes="100vw"
          src={location.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1e] via-[#1c1c1e]/70 to-[#1c1c1e]/55" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between gap-8 p-6 md:p-9 lg:p-10">
        <div className="flex flex-col gap-4">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/45">
            {getLocationPartnerLabel(location)}
          </p>
          <h3 className="max-w-xl text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.1] tracking-tight">
            <span className="text-white">{location.name}</span>
          </h3>
          <p className="text-sm text-white/55 md:text-[15px]">
            {location.street}, {location.zip} {location.name}
          </p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1.5 pt-1">
            {tags.map((tag) => (
              <li key={tag} className="text-xs text-white/50 md:text-[13px]">
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <p className="max-w-lg text-sm leading-relaxed text-white/70 md:text-[15px]">
            {getLocationCardNote(location)}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
              href={location.mapsUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <MapPin aria-hidden="true" className="size-4 shrink-0" strokeWidth={1.5} />
              Google Maps
            </a>
            <Link
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-[#111111] transition-opacity hover:opacity-90"
              href={`/standort/${location.slug}`}
            >
              Mehr erfahren
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
