import type { Metadata } from 'next';
import { MENU_ITEMS, SMOOTHIE_ITEMS } from '@/lib/constants';
import MenuPageHeader from '@/components/ui/MenuPageHeader';
import MenuCategory from '@/components/ui/MenuCategory';
import { HiFire, HiLightningBolt, HiBeaker } from 'react-icons/hi';

export const metadata: Metadata = {
  title: 'Menu',
  description:
    'Explore our fresh bowls, burritos, and smoothies. Build your own or choose from our signature creations at The Green Buffet.',
  openGraph: {
    title: 'Menu | The Green Buffet',
    description:
      'Explore our fresh bowls, burritos, and smoothies. Build your own or choose from our signature creations.',
  },
};

export default function MenuPage() {
  const bowls = MENU_ITEMS.filter((item) => item.category === 'bowls');
  const burritos = MENU_ITEMS.filter((item) => item.category === 'burritos');

  return (
    <main>
      <MenuPageHeader
        title="Our Menu"
        description="Every bowl, burrito, and smoothie is crafted with fresh, quality ingredients. Healthy eating never tasted this good."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Bowls */}
        <MenuCategory
          title="Signature Bowls"
          description="Build your own or try one of our chef-crafted combinations"
          icon={<HiFire className="w-6 h-6" />}
          items={bowls}
        />

        {/* Burritos */}
        <MenuCategory
          title="Large Burritos"
          description="Packed with flavor and wrapped to perfection"
          icon={<HiLightningBolt className="w-6 h-6" />}
          items={burritos}
        />

        {/* Smoothies */}
        <MenuCategory
          title="Healthy Smoothies"
          description="Blended fresh with real fruits and no artificial sweeteners"
          icon={<HiBeaker className="w-6 h-6" />}
          items={SMOOTHIE_ITEMS}
        />
      </div>

      {/* Bottom CTA */}
      <div className="bg-brand-forest py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Order?
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-5 text-lg">
            Build your perfect bowl or burrito. Fresh, fast, and made just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <a
              href="/location"
              className="bg-brand-warm hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors"
            >
              Find Location
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}