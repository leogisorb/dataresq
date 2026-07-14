import Image from 'next/image';

import { labPartnerBullets, labPartnerIntro } from '@/lib/ueber-uns-content';

export default function ReinraumSection() {
  return (
    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
      <div>
        <p className="text-base leading-relaxed text-text md:text-lg">{labPartnerIntro}</p>
        <ul className="mt-6 space-y-3">
          {labPartnerBullets.map((bullet) => (
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
        alt="Partner-Reinraumlabor Fields — technische Datenrettung"
        className="rounded-lg object-cover"
        height={500}
        src="/images/reinraum.svg"
        unoptimized
        width={800}
      />
    </div>
  );
}
