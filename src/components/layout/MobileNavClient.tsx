'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Drawer, useOverlayState } from '@heroui/react';

import { BTN_BRAND_LG, BTN_BRAND_SM } from '@/lib/button-styles';
import { SITE } from '@/lib/constants';
import { mainNavItems } from '@/lib/navigation';
import { siteConfig } from '@/lib/metadata';

function HamburgerIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
    <header className="sticky top-0 z-50 bg-white/72 shadow-sm backdrop-blur-xl">
      <div className="site-container flex min-h-[56px] items-center justify-between gap-4">
        <Link className="touch-target flex shrink-0 items-center" href="/">
          <img
            alt={siteConfig.name}
            className="h-8 w-auto md:h-9"
            height={36}
            src="/images/LOGO.svg"
            width={109}
          />
        </Link>

        <nav
          aria-label="Hauptnavigation"
          className="hidden items-center gap-8 md:inline-flex"
        >
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              className={[
                'touch-target flex items-center text-sm text-text transition-colors hover:text-text',
                isActive(item.href) ? 'font-semibold' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            className="touch-target hidden items-center gap-1.5 whitespace-nowrap text-sm font-medium text-text sm:flex"
            href={SITE.phoneTel}
          >
            <PhoneIcon />
            {SITE.phone}
          </a>

          <Link
            className={`${BTN_BRAND_SM} touch-target hidden md:inline-flex`}
            href="/#kostenrechner"
          >
            Kostenlos anfragen
          </Link>

          <button
            aria-label="Menü öffnen"
            className="touch-target inline-flex items-center justify-center rounded-lg p-2 text-text md:hidden"
            type="button"
            onClick={drawerState.open}
          >
            <HamburgerIcon />
          </button>
        </div>
      </div>

      <Drawer.Backdrop isOpen={drawerState.isOpen} onOpenChange={drawerState.setOpen}>
        <Drawer.Content placement="left">
          <Drawer.Dialog className="bg-white">
            <Drawer.CloseTrigger />
            <Drawer.Header>
              <Drawer.Heading className="text-text">{siteConfig.name}</Drawer.Heading>
            </Drawer.Header>
            <Drawer.Body>
              <nav aria-label="Mobile Navigation" className="flex flex-col">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.href}
                    className="touch-target border-b border-black/5 py-3 text-lg text-text active:text-text"
                    href={item.href}
                    onClick={handleNavClick}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </Drawer.Body>
            <Drawer.Footer>
              <Link
                className={`${BTN_BRAND_LG} touch-target w-full`}
                href="/#kostenrechner"
                onClick={handleNavClick}
              >
                Jetzt Kosten berechnen
              </Link>
            </Drawer.Footer>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </header>
  );
}
