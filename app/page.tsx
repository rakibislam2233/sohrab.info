import Footer from "../components/Footer";
import AchievementSection from "../components/sections/AchievementSection";
import Hero from "../components/sections/Hero";
import NewsMediaTimeline from "../components/sections/NewsMediaTimeline";
import HomeAboutUs from "../components/sections/HomeAboutUs";
import EducationSection from "../components/sections/EducationSection";
import SkillsSection from "../components/sections/SkillsSection";
import BlogCarousel from "../components/sections/BlogCarousel";
import ContactSection from "../components/sections/ContactSection";
import ActionMomentGallery from "../components/sections/ActionMomentGallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sohrab Hossan — Journalist · Traveller · Scout",
  description:
    "Official portfolio of Sohrab Hossan. Senior Journalist reporting on education and community, passionate traveller exploring Bangladesh, and dedicated Scout Leader.",
};

export default async function Home() {
  return (
    <main>
      <Hero />
      <HomeAboutUs />
      <SkillsSection />
      <ActionMomentGallery />
      <EducationSection />
      <BlogCarousel />
      <AchievementSection />
      <NewsMediaTimeline />
      <ContactSection />
      <Footer />
    </main>
  );
}
