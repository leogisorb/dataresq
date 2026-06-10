import Image from 'next/image';

import { reinraumBullets } from '@/lib/ueber-uns-content';

export default function ReinraumSection() {
  return (
    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
      <div>
        <p className="text-base leading-relaxed text-text md:text-lg">
          Datenrettung von mechanisch beschädigten Medien erfordert eine staubfreie Umgebung. Unser
          Reinraum entspricht Klasse ISO 5 (entspricht US Fed Std 100). Jede Festplatte die geöffnet
          wird, wird ausschließlich in dieser kontrollierten Umgebung bearbeitet.
        </p>
        <ul className="mt-6 space-y-3">
          {reinraumBullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2 text-sm md:text-base">
              <span aria-hidden="true" className="text-accent">
                ✓
              </span>
              <span className="text-text">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
      <Image
        alt="Reinraumlabor RSQDATA"
        className="rounded-lg object-cover"
        height={500}
        src="/images/reinraum.svg"
        unoptimized
        width={800}
      />
    </div>
  );
}
