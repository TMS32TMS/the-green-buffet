import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menu',
  description:
    'Explore our fresh bowls, burritos, and more. Build your own or choose from our signature creations at The Green Buffet.',
};

export default function MenuPage() {
  return (
    <div className="min-h-screen pt-24 flex items-center justify-center">
      <h1 className="text-3xl font-bold text-brand-forest">Menu</h1>
    </div>
  );
}