'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { HiFire } from 'react-icons/hi';

interface MenuCardProps {
  name: string;
  description: string;
  price: number;
  image?: string;
  dietary?: string[];
  popular?: boolean;
  index?: number;
}

export default function MenuCard({
  name,
  description,
  price,
  image,
  dietary,
  popular,
  index = 0,
}: MenuCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden group cursor-pointer"
    >
      {/* Image section */}
      <div className="h-48 bg-gradient-to-br from-brand-forest/20 to-brand-leaf/30 relative overflow-hidden">
        {image && !imageError ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-brand-forest/30">
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
            </svg>
          </div>
        )}

        {/* Popular badge */}
        {popular && (
          <div className="absolute top-3 left-3 bg-brand-warm text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 z-10">
            <HiFire className="w-3.5 h-3.5" />
            Popular
          </div>
        )}

        {/* Dietary badges */}
        {dietary && dietary.length > 0 && (
          <div className="absolute top-3 right-3 flex flex-wrap gap-1 justify-end z-10">
            {dietary.map((diet) => (
              <span
                key={diet}
                className="bg-white/90 text-brand-forest text-xs px-2 py-1 rounded-full font-medium"
              >
                {diet}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-forest transition-colors">
            {name}
          </h3>
          <span className="text-lg font-bold text-brand-warm whitespace-nowrap">
            k{price.toFixed(2)}
          </span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </motion.div>
  );
}