import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about The Green Buffet — our story, our mission, and our commitment to fresh, healthy food in Lusaka.',
  openGraph: {
    title: 'About | The Green Buffet',
    description:
      'Learn about The Green Buffet — our story, our mission, and our commitment to fresh, healthy food in Lusaka.',
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutClient />
    </main>
  );
}