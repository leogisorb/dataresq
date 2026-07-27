import Image from 'next/image';

import { VARIANTE_B_BRANDS } from '@/lib/variante-b';

export default function RebootBrandBar(): React.JSX.Element {
  return (
    <div
      aria-label="Unterstützte Hersteller"
      className="relative z-10 w-full px-5 py-5 md:px-10 md:py-6"
      role="region"
    >
      <ul className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-5 md:gap-x-14 md:gap-y-6">
        {VARIANTE_B_BRANDS.map((brand) => (
          <li
            key={brand.name}
            className="flex h-5 w-24 items-center justify-center md:h-[18px] md:w-28"
          >
            <Image
              alt={`${brand.name} Logo`}
              className={[
                'h-full w-auto max-w-full object-contain',
                brand.monochrome ? 'brightness-0 opacity-80' : 'opacity-90',
                brand.imgClass ?? '',
              ].join(' ')}
              height={20}
              src={brand.src}
              width={112}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
