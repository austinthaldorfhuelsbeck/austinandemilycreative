import { type SchemaTypeDefinition } from 'sanity';
// documents
import page from './schemas/documents/page';

// shared objects
import blockContent from './schemas/blocks/shared/block-content';
import link from './schemas/blocks/shared/link';
import { colorVariant } from './schemas/blocks/shared/color-variant';
import { buttonVariant } from './schemas/blocks/shared/button-variant';
import sectionPadding from './schemas/blocks/shared/section-padding';

// blocks
import hero1 from './schemas/blocks/hero/hero-1';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // documents
    page,
    // shared objects
    blockContent,
    link,
    colorVariant,
    buttonVariant,
    sectionPadding,
    // blocks
    hero1,
  ],
};
