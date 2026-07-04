import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StructuredData from '@/components/sections/StructuredData';
import PageTransition from '@/components/layout/PageTransition';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'The Green Buffet - Fresh, Healthy Bowls & Burritos',
    template: '%s | The Green Buffet',
  },
  description:
    'Build your own healthy bowls and burritos with fresh, quality ingredients. Visit The Green Buffet in Portland, OR for a delicious and nutritious meal.',
  keywords: [
    'healthy bowls',
    'burritos',
    'fresh ingredients',
    'build your own bowl',
    'healthy eating',
    'Portland restaurant',
    'The Green Buffet',
  ],
  authors: [{ name: 'The Green Buffet' }],
  creator: 'The Green Buffet',
  publisher: 'The Green Buffet',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://thegreenbuffet.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'The Green Buffet - Fresh, Healthy Bowls & Burritos',
    description:
      'Build your own healthy bowls and burritos with fresh, quality ingredients.',
    url: 'https://thegreenbuffet.com',
    siteName: 'The Green Buffet',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Green Buffet - Fresh and Healthy Bowls',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Green Buffet - Fresh, Healthy Bowls & Burritos',
    description:
      'Build your own healthy bowls and burritos with fresh, quality ingredients.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className="bg-brand-cream text-brand-dark antialiased">
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}