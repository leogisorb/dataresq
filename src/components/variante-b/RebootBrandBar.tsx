import Image from 'next/image';

import { VARIANTE_B_BRANDS } from '@/lib/variante-b';

interface BrandLogoProps {
  name: string;
  src: string;
  monochrome: boolean;
  imgClass?: string;
}

function BrandLogo({ name, src, monochrome, imgClass }: BrandLogoProps) {
  return (
    <div className="flex h-5 w-24 shrink-0 items-center justify-center md:h-[18px] md:w-28">
      <Image
        alt={`${name} Logo`}
        className={[
          'h-full w-auto max-w-full object-contain',
          // White mono SVGs → black on light bg; colored SVGs keep brand colors
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

function BrandSet({ setIndex, ariaHidden = false }: { setIndex: number; ariaHidden?: boolean }) {
  return (
    <div
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center gap-12 px-6 md:gap-16 md:px-8"
    >
      {VARIANTE_B_BRANDS.map((brand) => (
        <BrandLogo
          key={`${setIndex}-${brand.name}`}
          imgClass={brand.imgClass}
          monochrome={brand.monochrome}
          name={brand.name}
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
      className="brand-carousel-viewport relative z-10 w-full overflow-hidden py-5 md:py-6"
      role="region"
    >
      <div className="brand-carousel-track flex w-max flex-nowrap will-change-transform">
        <BrandSet setIndex={0} />
        <BrandSet ariaHidden setIndex={1} />
        <BrandSet ariaHidden setIndex={2} />
        <BrandSet ariaHidden setIndex={3} />
      </div>
    </div>
  );
}
