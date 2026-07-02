import FeaturedCard from '@/components/ui/FeaturedCard';

export default function FeaturedSection() {
  return (
    <section className="py-16 md:py-20 bg-white" id="featured">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-brand-fresh font-semibold text-sm uppercase tracking-wider">
            Customer Favorites
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mt-2 mb-4">
            Our Signatures
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            The bowls and burritos that made us famous. Crafted with the
            freshest ingredients and boldest flavors.
          </p>
        </div>

        {/* Featured cards */}
        <div className="space-y-8">
          <FeaturedCard
            title="The Signature Bowl"
            subtitle="Most Popular"
            description="Brown rice, black beans, grilled chicken, fresh avocado, pico de gallo, corn salsa, and our signature green sauce. The bowl that started it all."
            price="$12.99"
            imageSide="left"
            href="/menu#signature-bowl"
          />

          <FeaturedCard
            title="The Signature Burrito"
            subtitle="Fan Favorite"
            description="A large flour tortilla packed with your choice of protein, Mexican rice, black beans, cheese, sour cream, and fresh salsa. Big enough to satisfy any appetite."
            price="$13.99"
            imageSide="right"
            href="/menu#signature-burrito"
          />
        </div>
      </div>
    </section>
  );
}