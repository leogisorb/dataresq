import Image from 'next/image';

import { VARIANTE_B_BRANDS } from '@/lib/variante-b';

interface BrandLogoProps {
  name: string;
  src: string;
  monochrome: boolean;
  imgClass?: string;
  setIndex: number;
}

function BrandLogo({
  name,
  src,
  monochrome,
  imgClass,
  setIndex,
}: BrandLogoProps): React.JSX.Element {
  return (
    <div className="flex h-5 w-24 shrink-0 items-center justify-center md:h-[18px] md:w-28">
      <Image
        alt={setIndex === 0 ? `${name} Logo` : ''}
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

interface BrandSetProps {
  ariaHidden?: boolean;
  setIndex: number;
}

function BrandSet({ ariaHidden = false, setIndex }: BrandSetProps): React.JSX.Element {
  return (
    <div
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center gap-10 md:gap-14"
    >
      {VARIANTE_B_BRANDS.map((brand) => (
        <BrandLogo
          key={`${setIndex}-${brand.name}`}
          imgClass={brand.imgClass}
          monochrome={brand.monochrome}
          name={brand.name}
          setIndex={setIndex}
          src={brand.src}
        />
      ))}
    </div>
  );
}

export default function RebootBrandBar(): React.JSX.Element {
  return (
    <div
      aria-label="Unterstützte Hersteller"
      className="brand-carousel-viewport relative z-10 w-full max-w-full overflow-hidden py-5 md:py-6"
      role="region"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-white to-transparent md:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-white to-transparent md:w-20" />

      <div className="brand-carousel-track flex w-max flex-nowrap will-change-transform">
        <BrandSet setIndex={0} />
        <BrandSet ariaHidden setIndex={1} />
        <BrandSet ariaHidden setIndex={2} />
        <BrandSet ariaHidden setIndex={3} />
      </div>
    </div>
  );
}
