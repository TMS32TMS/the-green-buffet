import { MENU_ITEMS } from '@/lib/constants';
import MenuCard from '@/components/ui/MenuCard';

export default function MenuSection() {
  const bowls = MENU_ITEMS.filter((item) => item.category === 'bowls');
  const burritos = MENU_ITEMS.filter((item) => item.category === 'burritos');

  return (
    <section className="py-16 md:py-20 bg-brand-cream" id="menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            Our Menu
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Fresh ingredients, bold flavors. Build your perfect bowl or enjoy
            our signature burritos — every bite is made to order.
          </p>
        </div>

        {/* Bowls Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-forest">
              Bowls
            </h3>
            <div className="h-px flex-1 bg-brand-forest/20" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {bowls.map((item, index) => (
              <MenuCard
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                dietary={item.dietary}
                popular={item.popular}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Burritos Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-forest">
              Burritos
            </h3>
            <div className="h-px flex-1 bg-brand-forest/20" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {burritos.map((item, index) => (
              <MenuCard
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                dietary={item.dietary}
                popular={item.popular}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}