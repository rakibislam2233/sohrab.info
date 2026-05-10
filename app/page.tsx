import Footer from "../components/Footer";
import AchievementSection from "../components/sections/AchievementSection";
import GallerySection from "../components/sections/GallerySection";
import Hero from "../components/sections/Hero";
import MediaHighlights from "../components/sections/MediaHighlights";
import NewsMediaTimeline from "../components/sections/NewsMediaTimeline";
import HomeAboutUs from "../components/sections/HomeAboutUs";
import TravelHighlights from "../components/sections/TravelHighlights";
import VoluntaryWorkSection from "../components/sections/VoluntaryWorkSection";
import EducationSection from "../components/sections/EducationSection";
import SkillsSection from "../components/sections/SkillsSection";

export default async function Home() {
  return (
    <main>
      <Hero />
      <HomeAboutUs />
      <SkillsSection />
      <EducationSection />
      <AchievementSection />
      <VoluntaryWorkSection />
      <NewsMediaTimeline />
      <MediaHighlights />
      <Footer />
    </main>
  );
}
