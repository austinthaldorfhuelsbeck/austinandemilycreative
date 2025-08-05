import { groq } from 'next-sanity';
import { imageQuery } from '@/sanity/queries/shared/image';

// @sanity-typegen-ignore
export const hero1Query = groq`
  _type == "hero-1" => {
    _type,
    _key,
    title,
    subtitle,
    images[] {
      ${imageQuery}
    }
  }
`;
