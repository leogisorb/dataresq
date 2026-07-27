import Link from 'next/link';

import HashLink from '@/components/navigation/HashLink';

const primaryCtaClass =
  'btn-brand min-h-11 w-full min-w-0 rounded-full px-[18px] text-center text-sm font-semibold leading-snug sm:min-h-12 sm:w-fit sm:min-w-[37.5%] sm:max-w-full sm:text-[15px] md:min-h-[52px] md:px-5 md:text-base';

const secondaryCtaClass =
  'inline-flex min-h-11 w-full min-w-0 items-center justify-center rounded-full border border-border bg-bg-card px-[18px] text-center text-sm font-semibold leading-snug text-text transition-colors hover:border-neon hover:bg-neon/20 sm:min-h-12 sm:w-fit sm:min-w-[37.5%] sm:max-w-full sm:text-[15px] md:min-h-[52px] md:px-5 md:text-base';

export default function HeroCtas() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
      <HashLink className={primaryCtaClass} href="/#kostenrechner">
        Jetzt Kosten berechnen
      </HashLink>
      <Link className={secondaryCtaClass} href="/standort">
        Abgabestelle finden
      </Link>
    </div>
  );
}
