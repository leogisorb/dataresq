'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ComponentProps } from 'react';

import { getHashFromHref, getPathFromHref, scrollToHash } from '@/lib/hash-navigation';

type HashLinkProps = ComponentProps<typeof Link>;

export default function HashLink({ href, onClick, ...props }: HashLinkProps) {
  const pathname = usePathname();
  const hrefString = typeof href === 'string' ? href : (href.pathname ?? '');

  return (
    <Link
      href={href}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented) return;

        const hash = getHashFromHref(hrefString);
        if (!hash) return;

        const targetPath = getPathFromHref(hrefString);
        if (targetPath === pathname) {
          event.preventDefault();
          scrollToHash(hash);
        }
      }}
      {...props}
    />
  );
}
