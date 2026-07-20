import StandortLocationCard from '@/components/standort/StandortLocationCard';
import { getIambulanzLocations } from '@/lib/locations';

export default function IambulanzPartnerSection() {
  const locations = getIambulanzLocations();

  return (
    <div className="flex flex-col gap-8">
      <p className="max-w-3xl text-base leading-relaxed text-text md:text-lg">
        RSQDATA arbeitet mit <strong className="font-semibold">iAmbulanz</strong> als offiziellem
        Partner zusammen. An allen iAmbulanz-Abgabestellen nehmen wir{' '}
        <strong className="font-semibold">jeden Datenträgertyp</strong> entgegen — Festplatte,
        SSD, RAID, USB, Smartphone, Notebook und mehr — ohne Termin, mit persönlicher
        Kundenbetreuung und dokumentiertem Übergabeprotokoll.
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        {locations.map((location) => (
          <StandortLocationCard key={location.slug} location={location} />
        ))}
      </div>
    </div>
  );
}
