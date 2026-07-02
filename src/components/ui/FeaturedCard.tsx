'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface FeaturedCardProps {
  title: string;
  subtitle: string;
  description: string;
  price: string;
  imageSide: 'left' | 'right';
  href: string;
}

export default function FeaturedCard({
  title,
  subtitle,
  description,
  price,
  imageSide,
  href,
}: FeaturedCardProps) {
  const imageContent = (
    <div className="relative h-64 md:h-full min-h-[300px] bg-gradient-to-br from-brand-forest/30 to-brand-leaf/40 overflow-hidden">
      {/* Placeholder food image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-brand-forest/30">
          <svg className="w-24 h-24 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
            {imageSide === 'left' ? (
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v2h-2zm0-10h2v8h-2z" />
            ) : (
              <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 21H7v-1h10v1zm0-3H7V6h10v12zm0-14H7V3h10v1z" />
            )}
          </svg>
        </div>
      </div>

      {/* Overlay label */}
      <div className="absolute top-4 left-4 bg-brand-warm text-white px-4 py-2 rounded-full text-sm font-bold">
        {subtitle}
      </div>

      {/* Price tag */}
      <div className="absolute bottom-4 right-4 bg-white text-brand-forest px-4 py-2 rounded-full text-lg font-bold shadow-lg">
        {price}
      </div>
    </div>
  );

  const textContent = (
    <div className="p-8 md:p-12 flex flex-col justify-center">
      <span className="text-brand-fresh font-semibold text-sm uppercase tracking-wider mb-2">
        {subtitle}
      </span>
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark mb-4">
        {title}
      </h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center gap-2 bg-brand-forest text-white px-6 py-3 rounded-full font-medium hover:bg-brand-leaf transition-colors self-start"
      >
        Order This
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-3xl shadow-lg overflow-hidden group"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        {imageSide === 'left' ? (
          <>
            {imageContent}
            {textContent}
          </>
        ) : (
          <>
            {textContent}
            {imageContent}
          </>
        )}
      </div>
    </motion.div>
  );
}