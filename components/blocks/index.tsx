import { PAGE_QUERYResult } from '@/sanity.types';
import Hero1 from '@/components/blocks/hero/hero-1';

type Block = NonNullable<NonNullable<PAGE_QUERYResult>['blocks']>[number];

const componentMap: {
  [K in Block['_type']]: React.ComponentType<Extract<Block, { _type: K }>>;
} = {
  'hero-1': Hero1,
};

export default function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks?.map((block) => {
        const Component = componentMap[block._type];
        if (!Component) {
          // Fallback for development/debugging of new component types
          console.warn(
            `No component implemented for block type: ${block._type}`
          );
          return <div data-type={block._type} key={block._key} />;
        }
        return <Component {...(block as any)} key={block._key} />;
      })}
    </>
  );
}
