'use client';

import type { ReactNode } from 'react';

interface RainbowCtaButtonProps {
  children: ReactNode;
  onPress: () => void;
  className?: string;
}

export default function RainbowCtaButton({
  children,
  onPress,
  className,
}: RainbowCtaButtonProps): React.JSX.Element {
  return (
    <span className={['reboot-cta-wrap', className ?? ''].join(' ')}>
      <span aria-hidden className="reboot-cta-glow" />
      <button className="reboot-cta" type="button" onClick={onPress}>
        {children}
      </button>
    </span>
  );
}
