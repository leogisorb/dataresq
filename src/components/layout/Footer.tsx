import Link from 'next/link';

import CookieSettingsLink from '@/components/consent/CookieSettingsLink';
import FooterContactSection from '@/components/layout/FooterContactSection';
import WiderrufsButton from '@/components/ui/WiderrufsButton';
import { SITE } from '@/lib/constants';
import { siteConfig } from '@/lib/metadata';

const leistungenLinks = [
  { label: 'Festplatte HDD', href: '/datenrettung/festplatte-hdd' },
  { label: 'SSD & NVMe', href: '/datenrettung/ssd' },
  { label: 'RAID / NAS', href: '/datenrettung/raid-nas' },
  { label: 'USB & SD-Karte', href: '/datenrettung/usb-sd' },
  { label: 'Server', href: '/datenrettung/server' },
  { label: 'Smartphone', href: '/datenrettung/smartphone' },
  { label: 'Preisrechner', href: '/preisrechner' },
  { label: 'Ratgeber', href: '/ratgeber' },
];

const standortLinks = [
  { label: 'Alle Standorte', href: '/standort' },
  { label: 'Grevenbroich', href: '/standort/grevenbroich' },
  { label: 'Mönchengladbach', href: '/standort/moenchengladbach' },
  { label: 'Köln (Büro)', href: '/standort/koeln' },
  { label: 'Labor (UK)', href: '/standort/labor-fields' },
];

const rechtlichesLinks = [
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
  { label: 'AGB', href: '/agb' },
  { label: 'Auftragsverarbeitung', href: '/auftragsverarbeitung' },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-wide text-text">{title}</p>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              className="touch-target inline-flex items-center text-sm text-text transition-colors hover:text-text active:text-text"
              href={link.href}
              prefetch
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <>
      <FooterContactSection />

      <footer className="bg-bg-subtle py-12 text-text">
        <div className="site-container">
          <div className="flex flex-col gap-10 md:grid md:grid-cols-4 md:gap-8">
            <div>
              <Link className="text-lg font-semibold text-text" href="/">
                {siteConfig.name}
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-text">
                Professionelle Datenrettung für Festplatten, SSD, RAID und NAS. Abgabe an
                iAmbulanz in Grevenbroich und Mönchengladbach — kostenlose DHL Express-Abholung
                bundesweit.
              </p>
              <p className="mt-3 text-sm text-text-muted">
                Büro: {SITE.address.street}, {SITE.address.zip} {SITE.address.city}
              </p>
              <p className="mt-2 text-sm text-text-muted">
                <a
                  className="transition-colors hover:text-text"
                  href={`tel:${SITE.phoneTel}`}
                >
                  {SITE.phone}
                </a>
              </p>
            </div>

            <FooterColumn title="Leistungen" links={leistungenLinks} />

            <FooterColumn title="Standorte" links={standortLinks} />

            <FooterColumn title="Rechtliches" links={rechtlichesLinks} />
          </div>

          <div className="mt-8 pt-6">
            <p className="text-xs text-text">
              © 2026 {siteConfig.name} · Alle Angaben ohne Gewähr ·{' '}
              <a
                className="text-text underline-offset-2 hover:underline"
                href={`mailto:${SITE.email}`}
              >
                {SITE.email}
              </a>
              {' · '}
              <CookieSettingsLink />
            </p>

            <div className="mt-4">
              <WiderrufsButton />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
