import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import Footer from '@/components/layout/Footer';
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
        <HashScrollOnNavigate />
        {children}
        <Footer />
      </body>
    </html>
  );
}
