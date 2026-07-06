import VideoCarousel from '@/features/video/VideoCarousel';
//import MenuSection from '@/components/sections/MenuSection';
import FeaturedSection from '@/components/sections/FeaturedSection';
import LocationSection from '@/components/sections/LocationSection';

export default function HomePage() {
  return (
    <main>
      <VideoCarousel />
      {/* <MenuSection /> */}
      <FeaturedSection />
      <LocationSection />
    </main>
  );
}