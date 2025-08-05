import { defineField, defineType } from 'sanity';
import { LayoutTemplate } from 'lucide-react';

export default defineType({
  name: 'hero-1',
  title: 'Hero 1',
  type: 'object',
  icon: LayoutTemplate,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The big text in the headline of the hero',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
      description: 'The small text under the title',
    }),
    defineField({
      name: 'images',
      type: 'array',
      title: 'Images',
      description: 'The images to display in the hero',
      of: [{ type: 'image' }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: 'Hero 1',
        subtitle: title,
      };
    },
  },
});
