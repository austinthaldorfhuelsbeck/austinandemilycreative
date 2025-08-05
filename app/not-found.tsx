import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Custom404 } from '@/components/404';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page not found',
};

export default function NotFoundPage() {
  return (
    <>
      <Navigation />
      <Custom404 />
      <Footer />
    </>
  );
}
