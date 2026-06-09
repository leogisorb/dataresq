import { createClient, type SanityClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import type { PortableTextBlock } from '@portabletext/types';

export const RATGEBER_CATEGORIES = [
  'Festplatte',
  'SSD',
  'RAID',
  'NAS',
  'Allgemein',
  'Prävention',
] as const;

export type RatgeberCategory = (typeof RATGEBER_CATEGORIES)[number];

export interface RatgeberFaqItem {
  question: string;
  answer: string;
}

export interface RatgeberListItem {
  title: string;
  slug: { current: string };
  excerpt: string | null;
  publishedAt: string | null;
  author: string | null;
  category: RatgeberCategory | string | null;
}

export interface RatgeberArticle extends RatgeberListItem {
  metaTitle: string | null;
  metaDesc: string | null;
  body: PortableTextBlock[] | null;
  faq: RatgeberFaqItem[] | null;
}

export interface RatgeberSlug {
  slug: string;
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';

export function isSanityConfigured(): boolean {
  return Boolean(projectId && projectId !== 'placeholder');
}

function createSanityClient(): SanityClient | null {
  if (!isSanityConfigured()) {
    return null;
  }

  return createClient({
    projectId: projectId!,
    dataset,
    apiVersion: '2026-01-01',
    useCdn: true,
  });
}

export const client = createSanityClient();

export function urlFor(source: Parameters<ReturnType<typeof imageUrlBuilder>['image']>[0]) {
  if (!client) {
    return null;
  }
  return imageUrlBuilder(client).image(source);
}

export const RATGEBER_LIST_QUERY = `
  *[_type == "ratgeber"] | order(publishedAt desc) {
    title, slug, excerpt, publishedAt, author, category
  }
`;

export const RATGEBER_DETAIL_QUERY = `
  *[_type == "ratgeber" && slug.current == $slug][0] {
    title, slug, metaTitle, metaDesc, excerpt, publishedAt,
    author, category, body, faq
  }
`;

export const RATGEBER_SLUGS_QUERY = `
  *[_type == "ratgeber"] { "slug": slug.current }
`;

export const RATGEBER_RELATED_QUERY = `
  *[_type == "ratgeber" && category == $category && slug.current != $slug]
    | order(publishedAt desc)[0...3] {
    title, slug, excerpt, publishedAt, author, category
  }
`;

export async function fetchRatgeberList(): Promise<RatgeberListItem[]> {
  if (!client) {
    return [];
  }
  return client.fetch<RatgeberListItem[]>(RATGEBER_LIST_QUERY);
}

export async function fetchRatgeberBySlug(slug: string): Promise<RatgeberArticle | null> {
  if (!client) {
    return null;
  }
  return client.fetch<RatgeberArticle | null>(RATGEBER_DETAIL_QUERY, { slug });
}

export async function fetchRatgeberSlugs(): Promise<RatgeberSlug[]> {
  if (!client) {
    return [];
  }
  return client.fetch<RatgeberSlug[]>(RATGEBER_SLUGS_QUERY);
}

export async function fetchRelatedRatgeber(
  category: string | null,
  slug: string,
): Promise<RatgeberListItem[]> {
  if (!client || !category) {
    return [];
  }
  return client.fetch<RatgeberListItem[]>(RATGEBER_RELATED_QUERY, { category, slug });
}
