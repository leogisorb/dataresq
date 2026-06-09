const BRANDS = [
  { name: 'Apple', src: '/images/Apple_Logo_0.svg' },
  { name: 'LaCie', src: '/images/LaCie_idLci2C7-__1.svg' },
  { name: 'Samsung', src: '/images/Samsung_idLNQNZGf5_0.svg' },
  { name: 'Seagate', src: '/images/Seagate_idsCmr5TeW_1.svg' },
  { name: 'Toshiba', src: '/images/Toshiba_idUntBByXp_0.svg' },
  { name: 'Western Digital', src: '/images/Western_Digital_idiaGcEimZ_0.svg' },
] as const;

export default function BrandCarousel() {
  const loopItems = [...BRANDS, ...BRANDS];

  return (
    <div
      aria-label="Marken und Hersteller"
      className="relative overflow-hidden py-8 md:py-10"
      role="region"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg-subtle to-transparent md:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg-subtle to-transparent md:w-24" />

      <div className="brand-carousel-track flex w-max items-center gap-12 px-8 md:gap-20">
        {loopItems.map((brand, index) => (
          <div
            key={`${brand.name}-${index}`}
            className="flex h-10 w-28 shrink-0 items-center justify-center md:h-12 md:w-36"
          >
            <img
              alt={`${brand.name} Logo`}
              className="h-full w-auto max-w-full object-contain brightness-0 opacity-70"
              height={48}
              src={brand.src}
              width={144}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
