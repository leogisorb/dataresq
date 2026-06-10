import Link from 'next/link';

import DatenrettungCta from '@/components/sections/datenrettung/DatenrettungCta';
import { DIAGNOSIS_FEE_FORMATTED } from '@/lib/constants';
import type { Location } from '@/lib/locations';
import { trustBadges } from '@/lib/datenrettung-services';
import { getStandortFaqs } from '@/lib/standort-faq';
import {
  generateBreadcrumbJsonLd,
  generateLocalBusinessLocationJsonLd,
  generateRatgeberFaqPageJsonLd,
} from '@/lib/structured-data';
import { siteConfig } from '@/lib/metadata';

const services = [
  {
    icon: '💾',
    title: 'HDD Datenrettung',
    description: 'Mechanische und logische Festplattenrettung — Preisrahmen 899 – 1.799 € (Standard).',
    href: '/datenrettung',
  },
  {
    icon: '⚡',
    title: 'SSD Datenrettung',
    description: 'Controller-Defekte, Firmware-Probleme und gelöschte Partitionen auf SSDs.',
    href: '/datenrettung',
  },
  {
    icon: '🖥️',
    title: 'RAID / NAS',
    description: 'RAID-Rekonstruktion und NAS-Recovery — Preis individuell nach Voranfrage.',
    href: '/datenrettung',
  },
  {
    icon: '🔌',
    title: 'USB & SD-Karte',
    description: 'Abgebrochene Stecker, defekte Chips und gelöschte Fotos — Preisrahmen 699 – 999 €.',
    href: '/datenrettung/usb-sd',
  },
];

const processSteps = [
  {
    step: '①',
    title: 'Abholung oder Abgabe',
    description:
      'DHL Express holt kostenlos an Ihrer Haustür ab — oder Sie geben Ihren Datenträger ohne Termin an unserer Abgabestelle ab.',
  },
  {
    step: '②',
    title: 'Laboranalyse',
    description: `Vollständige technische Analyse für ${DIAGNOSIS_FEE_FORMATTED} — bei Beauftragung voll verrechnet, bei erfolgloser Rettung entfällt die Pauschale.`,
  },
  {
    step: '③',
    title: 'Sichere Übergabe',
    description:
      'Dateiliste im Kundenportal, Festpreis-Bestätigung, verschlüsselter Download oder neuer Datenträger — 14 Tage Sicherheitskopie.',
  },
];

interface StandortContentProps {
  loc: Location;
}

export default function StandortContent({ loc }: StandortContentProps) {
  const faqs = getStandortFaqs(loc);
  const localBusinessJsonLd = generateLocalBusinessLocationJsonLd(loc);
  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Startseite', url: siteConfig.url },
    { name: 'Standorte', url: `${siteConfig.url}/standort` },
    { name: loc.name, url: `${siteConfig.url}/standort/${loc.slug}` },
  ]);
  const faqJsonLd = generateRatgeberFaqPageJsonLd(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-text">
        <Link className="active:text-accent md:hover:text-accent" href="/">
          Startseite
        </Link>
        <span className="mx-2">›</span>
        <Link className="active:text-accent md:hover:text-accent" href="/standort">
          Standorte
        </Link>
        <span className="mx-2">›</span>
        <span>{loc.name}</span>
      </nav>

      <h1 className="text-3xl font-bold text-text md:text-4xl">
        Datenrettung {loc.name}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-text">{loc.description}</p>
      <p className="mt-3 text-sm text-text-muted">{loc.serviceNote}</p>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-text">Leistungen in {loc.name}</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.title}
              className="rounded-lg border border-black/5 bg-bg-card p-6 transition-colors active:border-accent md:hover:border-accent"
              href={service.href}
            >
              <span className="text-2xl">{service.icon}</span>
              <h3 className="mt-3 font-semibold text-text">{service.title}</h3>
              <p className="mt-2 text-sm text-text">{service.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-text">So funktioniert es</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {processSteps.map((step) => (
            <div key={step.title}>
              <p className="text-2xl font-bold text-accent">{step.step}</p>
              <h3 className="mt-2 font-semibold text-text">{step.title}</h3>
              <p className="mt-2 text-sm text-text">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-text">Warum RSQDATA in {loc.name}?</h2>
        <ul className="mt-4 space-y-2 text-text">
          {trustBadges.map((badge) => (
            <li key={badge}>✓ {badge}</li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-text">
          Häufige Fragen zur Datenrettung in {loc.name}
        </h2>
        <div className="mt-6 space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="font-semibold text-text">{faq.question}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-lg border border-black/5 bg-bg-card p-8 text-text">
        <h2 className="text-2xl font-bold text-text">
          Jetzt Datenrettung in {loc.name} beauftragen
        </h2>
        <div className="mt-6">
          <DatenrettungCta />
        </div>
      </section>
    </>
  );
}
