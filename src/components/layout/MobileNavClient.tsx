'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useOverlayState } from '@heroui/react';

import HashLink from '@/components/navigation/HashLink';
import { mainNavItems } from '@/lib/navigation';
import { siteConfig } from '@/lib/metadata';

const MobileCircleMenu = dynamic(() => import('@/components/navigation/MobileCircleMenu'), {
  ssr: false,
});

function HamburgerIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
    >
      <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function MobileNavClient() {
  const pathname = usePathname();
  const menuState = useOverlayState();

  const isActive = (href: string) => {
    if (href.startsWith('/#')) return false;
    return pathname === href || (href !== '/' && pathname.startsWith(href));
  };

  return (
    <>
      <header className="site-header">
        <div className="site-container flex h-11 items-center justify-between md:grid md:h-12 md:grid-cols-[1fr_auto_1fr] md:gap-4">
          <div className="flex items-center">
            <Link className="touch-target flex shrink-0 items-center" href="/">
              <img
                alt={siteConfig.name}
                className="h-7 w-auto md:h-8"
                height={32}
                src="/images/logo_2.svg"
                width={97}
              />
            </Link>
          </div>

          <nav aria-label="Hauptnavigation" className="hidden justify-center md:flex">
            <ul className="flex items-center gap-8">
              {mainNavItems.map((item) => (
                <li key={item.href}>
                  {item.href.includes('#') ? (
                    <HashLink
                      aria-current={isActive(item.href) ? 'page' : undefined}
                      className="site-header-nav-link touch-target inline-flex items-center"
                      href={item.href}
                    >
                      {item.label}
                    </HashLink>
                  ) : (
                    <Link
                      aria-current={isActive(item.href) ? 'page' : undefined}
                      className="site-header-nav-link touch-target inline-flex items-center"
                      href={item.href}
                      prefetch
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center justify-end">
            <button
              aria-controls="mobile-circle-menu"
              aria-expanded={menuState.isOpen}
              aria-label="Menü öffnen"
              className="touch-target inline-flex items-center justify-center rounded-lg p-2 text-text md:hidden"
              type="button"
              onClick={menuState.open}
            >
              <HamburgerIcon />
            </button>
          </div>
        </div>
      </header>

      {menuState.isOpen ? (
        <MobileCircleMenu
          activeHref={pathname}
          isOpen={menuState.isOpen}
          onClose={menuState.close}
        />
      ) : null}
    </>
  );
}
