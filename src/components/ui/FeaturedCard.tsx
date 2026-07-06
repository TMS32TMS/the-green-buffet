'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Variant {
  name: string;
  description: string;
  price: string;
}

interface FeaturedCardProps {
  title: string;
  subtitle: string;
  description: string;
  price: string;
  image?: string;
  imageSide: 'left' | 'right';
  variants?: Variant[];
}

export default function FeaturedCard({
  title,
  subtitle,
  description,
  price,
  image,
  imageSide,
  variants,
}: FeaturedCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const imageContent = (
    <div className="relative h-64 md:h-full min-h-[300px] bg-gradient-to-br from-brand-forest/30 to-brand-leaf/40 overflow-hidden">
      {image && !imageError ? (
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-brand-forest/30">
          <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v2h-2zm0-10h2v8h-2z" />
          </svg>
        </div>
      )}

      <div className="absolute top-4 left-4 bg-brand-warm text-white px-4 py-2 rounded-full text-sm font-bold z-10">
        {subtitle}
      </div>

      <div className="absolute bottom-4 right-4 bg-white text-brand-forest px-4 py-2 rounded-full text-lg font-bold shadow-lg z-10">
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

      {variants && variants.length > 0 ? (
        <>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 bg-brand-forest text-white px-6 py-3 rounded-full font-medium hover:bg-brand-leaf transition-colors self-start"
          >
            {isExpanded ? 'Hide Options' : 'View Varieties'}
            <svg
              className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-6 space-y-4">
                  {variants.map((variant) => (
                    <motion.div
                      key={variant.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-brand-cream rounded-xl p-4 border border-brand-forest/10 hover:border-brand-forest/30 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-brand-dark">{variant.name}</h4>
                        <span className="font-bold text-brand-warm">{variant.price}</span>
                      </div>
                      <p className="text-gray-500 text-sm">{variant.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <button className="inline-flex items-center gap-2 bg-brand-forest text-white px-6 py-3 rounded-full font-medium hover:bg-brand-leaf transition-colors self-start">
          View Varieties
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
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