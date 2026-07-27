import Link from 'next/link';

import { SITE } from '@/lib/constants';

export default function NotFound(): React.JSX.Element {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-sm font-medium tracking-wide text-text-muted uppercase">404</p>
      <h1 className="mt-3 text-3xl font-bold text-text md:text-4xl">Seite nicht gefunden</h1>
      <p className="mt-4 max-w-md text-base text-text-muted">
        Die gewünschte Seite existiert nicht oder wurde verschoben. Zurück zur Startseite oder
        direkt eine Datenrettung anfragen.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          href="/"
        >
          Zur Startseite
        </Link>
        <Link
          className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-medium text-text transition-colors hover:bg-bg-subtle"
          href="/datenrettung"
        >
          Datenrettung
        </Link>
      </div>
      <p className="mt-10 text-sm text-text-muted">
        Fragen?{' '}
        <a className="text-accent hover:underline" href={`tel:${SITE.phoneTel}`}>
          {SITE.phone}
        </a>
      </p>
    </main>
  );
}
