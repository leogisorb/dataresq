import { LAB_PARTNER, LAB_PARTNER_NOTE } from '@/lib/constants';

export default function StandortLabPartnerSection() {
  return (
    <section className="rounded-xl border border-border bg-bg-subtle p-6 md:p-8">
      <h2 className="text-xl font-bold text-text md:text-2xl">
        Laborpartner {LAB_PARTNER.name}
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-text-muted md:text-base">
        {LAB_PARTNER_NOTE}
      </p>
      <p className="mt-4 text-sm text-text-muted">
        Genaue Laboranschrift aus Sicherheitsgründen nicht öffentlich — keine Abgabe vor Ort.
      </p>
    </section>
  );
}
