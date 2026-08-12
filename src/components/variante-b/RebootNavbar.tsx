'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import HashLink from '@/components/navigation/HashLink';
import { SITE } from '@/lib/constants';
import { VARIANTE_B_COPY, VARIANTE_B_NAV } from '@/lib/variante-b';

const MobileCircleMenu = dynamic(() => import('@/components/navigation/MobileCircleMenu'), {
  ssr: false,
});

function isNavActive(pathname: string, href: string): boolean {
  if (href.startsWith('/#')) return false;
  return pathname === href || (href !== '/' && pathname.startsWith(href));
}

export default function RebootNavbar(): React.JSX.Element {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="site-header reboot-site-header">
        <nav
          aria-label="Hauptnavigation"
          className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:justify-center md:gap-7 md:px-10 md:py-5"
        >
          <Link className="flex shrink-0 items-center" href="/">
            <Image
              alt={VARIANTE_B_COPY.logoLabel}
              className="h-6 w-auto md:h-[26px]"
              height={26}
              priority
              src="/images/logo_2.svg"
              width={78}
            />
          </Link>

          <ul className="hidden items-center gap-7 md:flex">
            {VARIANTE_B_NAV.map((item) => {
              const active = isNavActive(pathname, item.href);
              const className =
                'text-[13px] font-normal text-[#1a1a1a] transition-opacity hover:opacity-60';

              return (
                <li key={item.label}>
                  {item.href.includes('#') ? (
                    <HashLink
                      aria-current={active ? 'page' : undefined}
                      className={className}
                      href={item.href}
                    >
                      {item.label}
                    </HashLink>
                  ) : (
                    <Link
                      aria-current={active ? 'page' : undefined}
                      className={className}
                      href={item.href}
                      prefetch
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3 md:ml-2 md:gap-5">
            <a
              className="hidden text-[13px] font-medium tracking-tight text-[#111111] transition-opacity hover:opacity-60 sm:inline"
              href={`tel:${SITE.phoneTel}`}
            >
              {SITE.phone}
            </a>

            <button
              aria-controls="mobile-circle-menu"
              aria-expanded={menuOpen}
              aria-label="Menü öffnen"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[#111111] md:hidden"
              type="button"
              onClick={() => setMenuOpen(true)}
            >
              <span aria-hidden className="flex flex-col gap-1.5">
                <span className="block h-px w-4 bg-current" />
                <span className="block h-px w-4 bg-current" />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {menuOpen ? (
        <MobileCircleMenu
          activeHref={pathname}
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
        />
      ) : null}
    </>
  );
}
