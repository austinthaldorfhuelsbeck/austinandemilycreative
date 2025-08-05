import { groq } from 'next-sanity';
import { hero1Query } from './hero/hero-1';

export const PAGE_QUERY = groq`
  *[_type == "page" && slug.current == $slug][0] {
    blocks[] {
      ${hero1Query}
    },
    meta_title,
    meta_description,
    noindex,
    ogImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height
          }
        }
      },
    }
  }
`;

export const PAGES_SLUGS_QUERY = groq`*[_type == "page" && defined(slug)]{slug}`;
