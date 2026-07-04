'use client';

import { motion } from 'framer-motion';
import MenuCard from './MenuCard';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  dietary?: string[];
  popular?: boolean;
}

interface MenuCategoryProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  items: MenuItem[];
}

export default function MenuCategory({ title, description, icon, items }: MenuCategoryProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      {/* Category header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-brand-forest/10 p-3 rounded-xl text-brand-forest">
          {icon}
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark">
            {title}
          </h2>
          <p className="text-gray-500 text-sm mt-1">{description}</p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-brand-forest/30 via-brand-forest/10 to-transparent mb-8" />

      {/* Items grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
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
    </motion.section>
  );
}