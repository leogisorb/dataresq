import FestpreisIcon from '@/components/icons/FestpreisIcon';
import InternalIcon from '@/components/icons/InternalIcon';
import NoCureIcon from '@/components/icons/NoCureIcon';
import ReinraumIcon from '@/components/icons/ReinraumIcon';

const features = [
  {
    icon: ReinraumIcon,
    title: 'Reinraum ISO 5',
    description: 'Staubfreie Umgebung für mechanische Rettung',
  },
  {
    icon: FestpreisIcon,
    title: 'Festpreis',
    description: 'Verbindliches Angebot vor Beauftragung',
  },
  {
    icon: NoCureIcon,
    title: 'Kein Befund = 0€',
    description: 'Sie zahlen nur bei Erfolg',
  },
  {
    icon: InternalIcon,
    title: '100% Intern',
    description: 'Kein Outsourcing, alles in Deutschland',
  },
];

export default function Features() {
  return (
    <section className="py-20 md:py-28">
      <div className="site-container">
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4 md:gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center gap-3">
              <feature.icon className="size-8 text-accent" />
              <p className="text-sm font-semibold text-text">{feature.title}</p>
              <p className="text-xs leading-relaxed text-text">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
