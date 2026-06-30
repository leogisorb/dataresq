'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Drawer, useOverlayState } from '@heroui/react';

import HashLink from '@/components/navigation/HashLink';
import { CALCULATOR_PAGE_PATH } from '@/lib/calculator-section';
import { BTN_BRAND_HEADER, BTN_BRAND_LG } from '@/lib/button-styles';
import { mainNavItems } from '@/lib/navigation';
import { siteConfig } from '@/lib/metadata';

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
  const drawerState = useOverlayState();

  const handleNavClick = () => {
    drawerState.close();
  };

  const isActive = (href: string) => {
    if (href.startsWith('/#')) return false;
    return pathname === href || (href !== '/' && pathname.startsWith(href));
  };

  return (
    <header className="site-header">
      <div className="site-container grid h-11 grid-cols-[1fr_auto_1fr] items-center gap-4 md:h-12">
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
                <HashLink
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className="site-header-nav-link touch-target inline-flex items-center"
                  href={item.href}
                >
                  {item.label}
                </HashLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-end gap-3">
          <Link
            className={`${BTN_BRAND_HEADER} hidden md:inline-flex`}
            href={CALCULATOR_PAGE_PATH}
          >
            Kostenlos anfragen
          </Link>

          <button
            aria-label="Menü öffnen"
            aria-controls="mobile-nav-drawer"
            aria-expanded={drawerState.isOpen}
            className="touch-target inline-flex items-center justify-center rounded-lg p-2 text-text md:hidden"
            type="button"
            onClick={drawerState.open}
          >
            <HamburgerIcon />
          </button>
        </div>
      </div>

      {drawerState.isOpen ? (
        <Drawer.Backdrop isOpen={drawerState.isOpen} onOpenChange={drawerState.setOpen}>
          <Drawer.Content placement="left">
            <Drawer.Dialog className="bg-bg-card" id="mobile-nav-drawer">
              <Drawer.CloseTrigger />
              <Drawer.Header>
                <Drawer.Heading className="text-text">{siteConfig.name}</Drawer.Heading>
              </Drawer.Header>
              <Drawer.Body>
                <nav aria-label="Mobile Navigation">
                  <ul className="flex flex-col">
                    {mainNavItems.map((item) => (
                      <li key={item.href}>
                        <HashLink
                          aria-current={isActive(item.href) ? 'page' : undefined}
                          className="site-header-nav-link touch-target block py-3 text-base"
                          href={item.href}
                          onClick={handleNavClick}
                        >
                          {item.label}
                        </HashLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              </Drawer.Body>
              <Drawer.Footer>
                <Link
                  className={`${BTN_BRAND_LG} touch-target w-full`}
                  href={CALCULATOR_PAGE_PATH}
                  onClick={handleNavClick}
                >
                  Jetzt Kosten berechnen
                </Link>
              </Drawer.Footer>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      ) : null}
    </header>
  );
}
