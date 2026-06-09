import Link from 'next/link';

const cards = [
  {
    label: 'Festplatten & HDD',
    title: 'HDD Datenrettung',
    description: 'Headcrash, Elektronik, nicht erkannt',
    href: '/datenrettung',
    gradient: 'from-[#dceeff] via-[#f0f6ff] to-white',
  },
  {
    label: 'Solid State',
    title: 'SSD Datenrettung',
    description: 'Controller, Firmware, gelöschte Partitionen',
    href: '/datenrettung',
    gradient: 'from-[#e8e4ff] via-[#f3f0ff] to-white',
  },
  {
    label: 'Server & Storage',
    title: 'RAID / NAS',
    description: 'RAID-Rekonstruktion, NAS-Recovery, Unternehmen',
    href: '/datenrettung',
    gradient: 'from-[#d4f0fd] via-[#edf9ff] to-white',
  },
];

export default function ExpertiseCards() {
  return (
    <section className="py-16 md:py-24">
      <div className="site-container text-center">
        <h2 className="mb-3 text-2xl font-semibold tracking-tight text-text md:text-4xl">
          Unsere Expertise
        </h2>
        <p className="mb-12 text-text">Jedes Medium. Jeder Schaden.</p>

        <div className="grid grid-cols-1 gap-4 text-left md:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.title}
              className="group relative flex min-h-[280px] cursor-pointer flex-col justify-end overflow-hidden rounded-2xl p-8 shadow-md transition-shadow hover:shadow-lg md:min-h-[320px]"
              href={card.href}
            >
              <div
                aria-hidden="true"
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient}`}
              />
              <div
                aria-hidden="true"
                className="absolute -right-8 -top-8 size-40 rounded-full bg-white/60 blur-2xl"
              />
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-white/80 to-transparent"
              />
              <div className="relative">
                <span className="text-xs uppercase tracking-widest text-text">{card.label}</span>
                <h3 className="mt-1 text-xl font-semibold text-text">{card.title}</h3>
                <p className="mt-2 text-sm text-text">{card.description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm text-text transition-all group-hover:gap-2">
                  Mehr erfahren →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
