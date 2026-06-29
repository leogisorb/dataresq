import HashLink from '@/components/navigation/HashLink';

import { BTN_BRAND_LG } from '@/lib/button-styles';

export default function FooterCta() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
      <HashLink className={`${BTN_BRAND_LG} w-full sm:w-auto`} href="/#kostenrechner">
        Jetzt Kosten berechnen
      </HashLink>
      <HashLink className={`${BTN_BRAND_LG} w-full sm:w-auto`} href="/#kontakt">
        Kontakt aufnehmen
      </HashLink>
    </div>
  );
}
