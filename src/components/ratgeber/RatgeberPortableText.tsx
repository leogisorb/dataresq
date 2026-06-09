import Image from 'next/image';
import Link from 'next/link';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';

import { urlFor } from '@/lib/sanity';

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-4 leading-relaxed text-text">{children}</p>,
    h2: ({ children }) => <h2 className="mb-4 mt-8 text-2xl font-bold text-text">{children}</h2>,
    h3: ({ children }) => <h3 className="mb-3 mt-6 text-xl font-semibold text-text">{children}</h3>,
  },
  marks: {
    link: ({ children, value }) => {
      const href = typeof value?.href === 'string' ? value.href : '#';
      const isExternal = href.startsWith('http');
      return (
        <Link
          className="text-accent underline-offset-2 active:text-accent-hover md:hover:underline"
          href={href}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          target={isExternal ? '_blank' : undefined}
        >
          {children}
        </Link>
      );
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) {
        return null;
      }
      const imageBuilder = urlFor(value);
      if (!imageBuilder) {
        return null;
      }
      const imageUrl = imageBuilder.width(800).url();
      if (!imageUrl) {
        return null;
      }
      return (
        <figure className="my-8">
          <Image
            alt={value.alt ?? 'Ratgeber-Bild'}
            className="rounded-lg"
            height={450}
            src={imageUrl}
            unoptimized
            width={800}
          />
        </figure>
      );
    },
  },
};

interface RatgeberPortableTextProps {
  value: PortableTextBlock[] | null;
}

export default function RatgeberPortableText({ value }: RatgeberPortableTextProps) {
  if (!value?.length) {
    return null;
  }

  return (
    <div className="prose prose-invert max-w-none">
      <PortableText components={components} value={value} />
    </div>
  );
}
