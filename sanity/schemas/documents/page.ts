import { defineField, defineType } from 'sanity';
import { Files } from 'lucide-react';
import { orderRankField } from '@sanity/orderable-document-list';
import { metaFields } from '@/sanity/schemas/blocks/shared/meta';

export default defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  icon: Files,
  groups: [
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'meta',
      title: 'Meta',
    },
    {
      name: 'settings',
      title: 'Settings',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      group: 'content',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      group: 'content',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'blocks',
      type: 'array',
      group: 'content',
      of: [{ type: 'hero-1' }],
      options: {
        insertMenu: {
          groups: [
            {
              name: 'hero',
              title: 'Hero',
              of: ['hero-1'],
            },
          ],
          views: [
            {
              name: 'grid',
              previewImageUrl: (block) => `/sanity/preview/${block}.jpg`,
            },
            { name: 'list' },
          ],
        },
      },
    }),
    ...metaFields,
    orderRankField({ type: 'page' }),
  ],
});
