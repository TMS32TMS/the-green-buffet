'use client';

import { useState, useEffect, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { HERO_VIDEOS } from '@/lib/constants';
import { useVideoPlayback } from '@/hooks/useVideoPlayback';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

export default function VideoCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  }, []);

  return (
    <div className="relative w-full h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden bg-brand-dark">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        onSlideChange={handleSlideChange}
        className="w-full h-full"
      >
        {HERO_VIDEOS.map((video, index) => (
          <SwiperSlide key={index}>
            <VideoSlide video={video} isActive={index === activeIndex} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay content */}
      <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Fresh, Healthy,{' '}
            <span className="text-brand-fresh">Delicious</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Build your own bowls and burritos with the freshest ingredients.
            Healthy eating made simple.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/menu"
              className="bg-brand-warm hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors"
            >
              View Our Menu
            </a>
            {/*<a
              href="/order"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-medium transition-colors border border-white/30"
            >
              Order Now
            </a>*/}
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {HERO_VIDEOS.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeIndex
                ? 'bg-brand-fresh w-8'
                : 'bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function VideoSlide({
  video,
  isActive,
}: {
  video: { src: string; poster?: string; alt: string };
  isActive: boolean;
}) {
  const { videoRef, play, pause } = useVideoPlayback();

  useEffect(() => {
    if (isActive) {
      play();
    } else {
      pause();
    }
  }, [isActive, play, pause]);

  return (
    <div className="w-full h-full relative bg-brand-dark">
      {/* Brand gradient background (shows while video loads) */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-forest via-brand-leaf to-brand-dark" />

      {/* Video element */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={video.src}
        poster={video.poster}
        muted
        loop
        playsInline
        preload="auto"
        aria-label={video.alt}
        crossOrigin="anonymous"
      />
    </div>
  );
}