import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Green Buffet - Fresh, Healthy Bowls & Burritos',
  description:
    'Build your own healthy bowls and burritos with fresh ingredients at The Green Buffet.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-brand-cream text-brand-dark antialiased">
        <Navbar />
        {/* Removed pt-16 since hero is full-screen and navbar overlays it */}
        {children}
      </body>
    </html>
  );
}