import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Gilda_Display } from "next/font/google";
import { Footer } from "./_components/footer";
import { Navigation } from "./_components/navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "Austin + Emily Creative",
  description: "Capture your love story.",
};

const gildaDisplay = Gilda_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gildaDisplay.className}>
        <Navigation />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
