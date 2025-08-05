import { Footer } from '@/components/footer';
import { Navigation } from '@/components/navigation';
import { DisableDraftMode } from '@/components/disable-draft-mode';
import { VisualEditing } from 'next-sanity';
import { draftMode } from 'next/headers';
import { SanityLive } from '@/sanity/lib/live';

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <SanityLive />
      {(await draftMode()).isEnabled && (
        <>
          <DisableDraftMode />
          <VisualEditing />
        </>
      )}
      <Footer />
    </>
  );
}
