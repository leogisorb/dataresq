import { defineField, defineType } from 'sanity';

const categories = ['Festplatte', 'SSD', 'RAID', 'NAS', 'Allgemein', 'Prävention'] as const;

export const ratgeber = defineType({
  name: 'ratgeber',
  title: 'Ratgeber-Artikel',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Titel',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'URL-Slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'metaTitle',
      type: 'string',
      title: 'SEO Title (max 60 Zeichen)',
    }),
    defineField({
      name: 'metaDesc',
      type: 'string',
      title: 'SEO Description (max 160 Zeichen)',
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Veröffentlicht am',
    }),
    defineField({
      name: 'author',
      type: 'string',
      title: 'Autor (Name + Rolle)',
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Kategorie',
      options: { list: [...categories] },
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      title: 'Teaser (2 Sätze)',
      rows: 3,
    }),
    defineField({
      name: 'body',
      type: 'array',
      title: 'Inhalt',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } },
      ],
    }),
    defineField({
      name: 'faq',
      title: 'FAQ-Sektion',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'question', type: 'string', title: 'Frage' }),
            defineField({ name: 'answer', type: 'text', title: 'Antwort' }),
          ],
        },
      ],
    }),
  ],
  orderings: [
    {
      title: 'Neueste zuerst',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
});
