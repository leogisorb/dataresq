import Link from 'next/link';

import FooterContactSection from '@/components/layout/FooterContactSection';
import HashLink from '@/components/navigation/HashLink';
import WiderrufsButton from '@/components/ui/WiderrufsButton';
import { SITE } from '@/lib/constants';
import { siteConfig } from '@/lib/metadata';

const leistungenLinks = [
  { label: 'Festplatte HDD', href: '/datenrettung' },
  { label: 'SSD', href: '/datenrettung' },
  { label: 'RAID / NAS', href: '/datenrettung' },
  { label: 'Preisrechner', href: '/#kostenrechner' },
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
      <h2 className="text-sm font-semibold uppercase tracking-wide text-text">{title}</h2>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <HashLink
              className="touch-target inline-flex items-center text-sm text-text transition-colors hover:text-text active:text-text"
              href={link.href}
            >
              {link.label}
            </HashLink>
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
          <div className="flex flex-col gap-10 md:grid md:grid-cols-3 md:gap-8">
            <div>
              <Link className="text-lg font-semibold text-text" href="/">
                {siteConfig.name}
              </Link>
              <p className="mt-4 text-sm leading-relaxed text-text">
                Professionelle Datenrettung für Festplatten, SSD, RAID und NAS. Abgabestellen in
                Grevenbroich, Mönchengladbach und Köln — kostenlose DHL Express-Abholung bundesweit.
              </p>
              <p className="mt-4 text-xs text-text">[Social-Links Placeholder]</p>
            </div>

            <FooterColumn title="Leistungen" links={leistungenLinks} />

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
