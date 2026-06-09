import Link from 'next/link';

import { BTN_BRAND_LG } from '@/lib/button-styles';

export default function FooterCta() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
      <Link className={`${BTN_BRAND_LG} w-full sm:w-auto`} href="/#kostenrechner">
        Jetzt Kosten berechnen
      </Link>
      <Link className={`${BTN_BRAND_LG} w-full sm:w-auto`} href="/#kontakt">
        Kontakt aufnehmen
      </Link>
    </div>
  );
}
