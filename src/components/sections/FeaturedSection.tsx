import FeaturedCard from '@/components/ui/FeaturedCard';

const bowlVariants = [
  {
    name: 'Chicken Teriyaki Bowl',
    description: 'Sauteed spicy teriyaki chicken, toppings & signature sauces.',
    price: 'K75.00',
  },
  {
    name: 'Garden Salad',
    description: 'Veggies only.',
    price: 'K60.00',
  },
  {
    name: 'Beef Birria Bowl',
    description: 'Slow-cooked birria beef, rice, toppings, & signature sauces.',
    price: 'K75.00',
  },
];

const burritoVariants = [
  {
    name: 'Spicy Chicken Teriyaki Burrito',
    description: 'Sauteed spicy teriyaki chicken, toppings & signature sauces wrapped in a warm tortilla.',
    price: 'k100.00',
  },
  {
    name: 'Beef Birria Burrito',
    description: 'Slow-cooked birria beef, rice, toppings, & signature sauces wrapped in a warm tortilla.',
    price: 'K100.00',
  },
];

export default function FeaturedSection() {
  return (
    <section className="py-16 md:py-20 bg-white" id="featured">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="space-y-8">
          <FeaturedCard
            title="The Signature Bowl"
            subtitle="Most Popular"
            description="Choose from our chef-curated signature bowls. Each one packed with fresh ingredients and bold flavors."
            price="From k75.00"
            image="/videos/17.jpg"
            imageSide="left"
            variants={bowlVariants}
          />

          <FeaturedCard
            title="The Signature Burrito"
            subtitle="Fan Favorite"
            description="Choose from our signature burritos. Wrapped tight and packed with the good stuff."
            price="From k100.00"
            image="/videos/13.jpg"
            imageSide="right"
            variants={burritoVariants}
          />
        </div>
      </div>
    </section>
  );
}