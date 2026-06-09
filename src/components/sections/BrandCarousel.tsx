const BRANDS = [
  { name: 'Apple', src: '/images/Apple_Logo_0.svg', monochrome: true },
  { name: 'LaCie', src: '/images/LaCie_idLci2C7-__1.svg', monochrome: false },
  { name: 'Samsung', src: '/images/Samsung_idLNQNZGf5_0.svg', monochrome: true },
  { name: 'Seagate', src: '/images/Seagate_idsCmr5TeW_1.svg', monochrome: false },
  { name: 'Toshiba', src: '/images/Toshiba_idUntBByXp_0.svg', monochrome: true },
  { name: 'Western Digital', src: '/images/Western_Digital_idiaGcEimZ_0.svg', monochrome: false },
] as const;

interface BrandLogoProps {
  name: string;
  src: string;
  monochrome: boolean;
}

function BrandLogo({ name, src, monochrome }: BrandLogoProps) {
  return (
    <div className="flex h-10 w-28 shrink-0 items-center justify-center md:h-12 md:w-36">
      <img
        alt={`${name} Logo`}
        className={[
          'h-full w-auto max-w-full object-contain',
          monochrome ? 'brightness-0 opacity-70' : 'opacity-90',
        ].join(' ')}
        height={48}
        src={src}
        width={144}
      />
    </div>
  );
}

interface BrandSetProps {
  ariaHidden?: boolean;
  setIndex: number;
}

function BrandSet({ ariaHidden = false, setIndex }: BrandSetProps) {
  return (
    <div
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center gap-12 md:gap-20"
    >
      {BRANDS.map((brand) => (
        <BrandLogo
          key={`${setIndex}-${brand.name}`}
          monochrome={brand.monochrome}
          name={brand.name}
          src={brand.src}
        />
      ))}
    </div>
  );
}

export default function BrandCarousel() {
  return (
    <div
      aria-label="Marken und Hersteller"
      className="brand-carousel-viewport relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 overflow-hidden py-8 md:py-10"
      role="region"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-bg to-transparent md:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-bg to-transparent md:w-24" />

      <div className="brand-carousel-track flex w-max flex-nowrap will-change-transform">
        <BrandSet setIndex={0} />
        <BrandSet ariaHidden setIndex={1} />
        <BrandSet ariaHidden setIndex={2} />
        <BrandSet ariaHidden setIndex={3} />
      </div>
    </div>
  );
}
