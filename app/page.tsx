import Footer from "../components/Footer";
import AchievementSection from "../components/sections/AchievementSection";
import Hero from "../components/sections/Hero";
import NewsMediaTimeline from "../components/sections/NewsMediaTimeline";
import HomeAboutUs from "../components/sections/HomeAboutUs";
import EducationSection from "../components/sections/EducationSection";
import SkillsSection from "../components/sections/SkillsSection";
import BlogCarousel from "../components/sections/BlogCarousel";
import ContactSection from "../components/sections/ContactSection";

export default async function Home() {
  return (
    <main>
      <Hero />
      <HomeAboutUs />
      <SkillsSection />
      <EducationSection />
      <BlogCarousel />
      <AchievementSection />
      <NewsMediaTimeline />
      <ContactSection />
      <Footer />
    </main>
  );
}
