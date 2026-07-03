import Link from 'next/link';
import type { ReactElement } from 'react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps): ReactElement {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-text-muted">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 ? (
                <span aria-hidden="true" className="text-text-dim">
                  ›
                </span>
              ) : null}
              {item.href && !isLast ? (
                <Link className="transition-colors hover:text-text" href={item.href}>
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? 'text-text' : undefined}>{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
