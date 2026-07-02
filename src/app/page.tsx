import VideoCarousel from '@/features/video/VideoCarousel';
import MenuSection from '@/components/sections/MenuSection';
import FeaturedSection from '@/components/sections/FeaturedSection';

export default function HomePage() {
  return (
    <main>
      <VideoCarousel />
      <MenuSection />
      <FeaturedSection />
    </main>
  );
}