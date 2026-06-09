import { type ButtonHTMLAttributes } from 'react';

import { BTN_BRAND } from '@/lib/button-styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: BTN_BRAND,
  secondary: BTN_BRAND,
  ghost: 'bg-transparent text-text border border-transparent active:bg-surface-muted md:hover:bg-surface-muted',
};

const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'min-h-[44px] px-4 text-sm rounded-full',
  md: 'min-h-[44px] px-6 text-base rounded-full',
  lg: 'min-h-[48px] px-8 text-lg rounded-full',
};

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  type = 'button',
  children,
  ...props
}: ButtonProps) {
  const widthClass = fullWidth ? 'w-full' : 'w-full md:w-auto';

  return (
    <button
      type={type}
      className={[
        'inline-flex items-center justify-center font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
        'touch-target',
        variantStyles[variant],
        sizeStyles[size],
        widthClass,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </button>
  );
}
