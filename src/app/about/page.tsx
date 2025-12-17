import AboutHero from "@/components/pages/About/AboutHero";
import AboutSidebar from "@/components/pages/About/AboutSidebar";
import CareerObjective from "@/components/pages/About/CareerObjective";
import EducationTimeline from "@/components/pages/About/EducationTimeline";
import SkillsSection from "@/components/pages/About/SkillsSection";
import React from "react";

const AboutPage = () => {
  return (
    <main className="grow pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <AboutHero />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <AboutSidebar />
        <div className="lg:col-span-8 space-y-8">
          <CareerObjective />
          <EducationTimeline />
          <SkillsSection />
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
