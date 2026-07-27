import StandortStack from '@/components/standort/StandortStack';
import { getIambulanzLocations } from '@/lib/locations';

export default function IambulanzPartnerSection(): React.JSX.Element {
  const locations = getIambulanzLocations();

  return (
    <div className="flex flex-col gap-8">
      <p className="max-w-3xl text-base leading-relaxed text-text md:text-lg">
        RSQDATA arbeitet mit <strong className="font-semibold">iAmbulanz</strong> als offiziellem
        Partner zusammen. An allen iAmbulanz-Abgabestellen nehmen wir{' '}
        <strong className="font-semibold">jeden Datenträgertyp</strong> entgegen — Festplatte,
        SSD, RAID, USB, Smartphone, Notebook & PC und mehr — ohne Termin, mit persönlicher
        Kundenbetreuung und dokumentiertem Übergabeprotokoll.
      </p>

      <StandortStack locations={locations} />
    </div>
  );
}
