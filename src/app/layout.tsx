import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { Inter } from 'next/font/google';

import ConsentRoot from '@/components/consent/ConsentRoot';
import SiteChrome from '@/components/layout/SiteChrome';
import HashScrollOnNavigate from '@/components/navigation/HashScrollOnNavigate';
import { defaultMetadata } from '@/lib/metadata';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#ffffff',
  colorScheme: 'light',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${inter.variable} ${inter.className} min-h-screen bg-bg text-text antialiased`}
      >
        <ConsentRoot>
          <HashScrollOnNavigate />
          <SiteChrome>{children}</SiteChrome>
          <Analytics />
        </ConsentRoot>
      </body>
    </html>
  );
}
