import Link from 'next/link';

import { BTN_BRAND_LG } from '@/lib/button-styles';
import { SITE } from '@/lib/constants';

export default function FooterCta() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
      <Link className={`${BTN_BRAND_LG} w-full sm:w-auto`} href="/#kostenrechner">
        Jetzt Kosten berechnen
      </Link>
      <a className={`${BTN_BRAND_LG} w-full sm:w-auto`} href={SITE.phoneTel}>
        {SITE.phone}
      </a>
    </div>
  );
}
