'use client';

import type { ReactNode } from 'react';

import HashLink from '@/components/navigation/HashLink';

interface RainbowCtaButtonProps {
  children: ReactNode;
  href: string;
  className?: string;
}

export default function RainbowCtaButton({
  children,
  href,
  className,
}: RainbowCtaButtonProps): React.JSX.Element {
  return (
    <span className={['reboot-cta-wrap', className ?? ''].join(' ')}>
      <span aria-hidden className="reboot-cta-glow" />
      <HashLink className="reboot-cta" href={href}>
        {children}
      </HashLink>
    </span>
  );
}
