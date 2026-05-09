import Footer from "../components/Footer";
import FeaturedGrid from "../components/sections/FeaturedGrid";
import GallerySection from "../components/sections/GallerySection";
import Hero from "../components/sections/Hero";
import HomeHighlights from "../components/sections/HomeHighlights";
import AchievementSection from "../components/sections/AchievementSection";
import VoluntaryWorkSection from "../components/sections/VoluntaryWorkSection";
import NewsMediaTimeline from "../components/sections/NewsMediaTimeline";
import ScoutingFocus from "../components/sections/ScoutingFocus";
import TravelHighlights from "../components/sections/TravelHighlights";
import MediaHighlights from "../components/sections/MediaHighlights";
import Reveal from "../components/ui/Reveal";

export default async function Home() {
  return (
    <main>
      <Hero />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="max-w-2xl mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Latest Journalism</h2>
              <p className="text-lg text-gray-500">
                Reporting on the stories that shape our society, with a focus on education and agriculture.
              </p>
            </div>
          </Reveal>
          <FeaturedGrid />
        </div>
      </section>

      <HomeHighlights />
      <ScoutingFocus />
      <TravelHighlights />
      <AchievementSection />
      <VoluntaryWorkSection />
      <NewsMediaTimeline />
      <MediaHighlights />
      <GallerySection />
      <Footer />
    </main>
  );
}
