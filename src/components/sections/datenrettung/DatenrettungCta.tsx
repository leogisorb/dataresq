import HashLink from '@/components/navigation/HashLink';
import { BTN_BRAND_LG } from '@/lib/button-styles';
import { SITE } from '@/lib/constants';

interface DatenrettungCtaProps {
  layout?: 'row' | 'column';
}

export default function DatenrettungCta({ layout = 'row' }: DatenrettungCtaProps) {
  const layoutClass =
    layout === 'column'
      ? 'flex flex-col gap-3'
      : 'flex flex-col gap-3 md:flex-row md:gap-4';

  return (
    <div className={layoutClass}>
      <HashLink className={`${BTN_BRAND_LG} w-full md:w-auto`} href="/#kostenrechner">
        Jetzt Kosten berechnen
      </HashLink>
      <a className={`${BTN_BRAND_LG} w-full md:w-auto`} href={`mailto:${SITE.email}`}>
        Per E-Mail anfragen
      </a>
    </div>
  );
}
