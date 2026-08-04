import Image from 'next/image';

import { VARIANTE_B_BRANDS } from '@/lib/variante-b';

interface BrandLogoProps {
  name: string;
  src: string;
  monochrome: boolean;
  imgClass?: string;
  /** Empty alt for decorative duplicates in the marquee */
  decorative?: boolean;
  /** Fixed-width tile for marquee; fluid for desktop single line */
  layout?: 'marquee' | 'row';
}

function BrandLogo({
  name,
  src,
  monochrome,
  imgClass,
  decorative = false,
  layout = 'marquee',
}: BrandLogoProps): React.JSX.Element {
  return (
    <div
      className={
        layout === 'row'
          ? 'flex h-5 min-w-0 flex-1 items-center justify-center'
          : 'flex h-5 w-24 shrink-0 items-center justify-center'
      }
    >
      <Image
        alt={decorative ? '' : `${name} Logo`}
        className={[
          'h-full w-auto max-w-full object-contain',
          monochrome ? 'brightness-0 opacity-80' : 'opacity-90',
          imgClass ?? '',
        ].join(' ')}
        height={20}
        src={src}
        width={112}
      />
    </div>
  );
}

function BrandSet({
  ariaHidden = false,
  decorative = false,
  setIndex,
}: {
  ariaHidden?: boolean;
  decorative?: boolean;
  setIndex: number;
}): React.JSX.Element {
  return (
    <div
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center gap-10 md:gap-14"
    >
      {VARIANTE_B_BRANDS.map((brand) => (
        <BrandLogo
          key={`${setIndex}-${brand.name}`}
          decorative={decorative}
          imgClass={brand.imgClass}
          monochrome={brand.monochrome}
          name={brand.name}
          src={brand.src}
        />
      ))}
    </div>
  );
}

/** Mobile: scrolling marquee. Desktop: static single-line row in the hero. */
export default function RebootBrandBar(): React.JSX.Element {
  return (
    <>
      {/* Mobile carousel */}
      <div
        aria-label="Unterstützte Hersteller"
        className="brand-carousel-viewport relative z-10 w-full max-w-full overflow-hidden py-5 md:hidden"
        role="region"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-white to-transparent" />

        <div className="brand-carousel-track flex w-max flex-nowrap will-change-transform">
          <BrandSet setIndex={0} />
          <BrandSet ariaHidden decorative setIndex={1} />
          <BrandSet ariaHidden decorative setIndex={2} />
          <BrandSet ariaHidden decorative setIndex={3} />
        </div>
      </div>

      {/* Desktop: one line, no wrap, no carousel */}
      <div
        aria-label="Unterstützte Hersteller"
        className="relative z-10 hidden w-full py-6 md:block"
        role="region"
      >
        <div className="mx-auto flex w-full max-w-5xl flex-nowrap items-center gap-3 px-6 lg:gap-6 lg:px-10">
          {VARIANTE_B_BRANDS.map((brand) => (
            <BrandLogo
              key={brand.name}
              imgClass={brand.imgClass}
              layout="row"
              monochrome={brand.monochrome}
              name={brand.name}
              src={brand.src}
            />
          ))}
        </div>
      </div>
    </>
  );
}
