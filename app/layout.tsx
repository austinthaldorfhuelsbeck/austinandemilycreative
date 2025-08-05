import { Toaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';
import { Gilda_Display as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Austin + Emily Creative',
  description: 'Capture your love story.',
};

const fontSerif = FontSans({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-serif',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/favicon.ico" />
      <body
        className={cn(
          'min-h-screen bg-background font-serif antialiased overscroll-none',
          fontSerif.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
