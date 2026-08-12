import Link from 'next/link';

import { SECTION_PADDING } from '@/lib/section-styles';

export interface RatgeberTeaserLink {
  href: string;
  title: string;
  excerpt: string;
}

interface RatgeberTeaserProps {
  title?: string;
  links: readonly RatgeberTeaserLink[];
}

export default function RatgeberTeaser({
  title = 'Ratgeber',
  links,
}: RatgeberTeaserProps): React.JSX.Element | null {
  if (links.length === 0) return null;

  return (
    <section className={`border-t border-black/5 bg-bg ${SECTION_PADDING}`}>
      <div className="site-container">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-2xl font-bold text-text md:text-3xl">{title}</h2>
          <Link
            className="text-sm font-medium text-accent underline-offset-2 hover:underline"
            href="/ratgeber"
          >
            Alle Artikel
          </Link>
        </div>
        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                className="block rounded-xl border border-black/5 bg-bg-card p-5 transition-colors hover:border-neon"
                href={link.href}
              >
                <p className="text-base font-semibold text-text">{link.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{link.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
