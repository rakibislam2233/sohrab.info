import AwardsSection from "@/components/pages/Leadership/AwardsSection";
import LeadershipHero from "@/components/pages/Leadership/LeadershipHero";
import PartnersSection from "@/components/pages/Leadership/PartnersSection";
import QuoteBanner from "@/components/pages/Leadership/QuoteBanner";
import LeadershipTimeline from "@/components/pages/Leadership/LeadershipTimeline";
import StatsSection from "@/components/pages/Leadership/StatsSection";
import React from "react";

const LeadershipPage = () => {
  return (
    <main className="relative z-10 pt-24 pb-16">
      <LeadershipHero />
      <StatsSection />
      <AwardsSection />
      <LeadershipTimeline />
      <QuoteBanner />
      <PartnersSection />
    </main>
  );
};

export default LeadershipPage;
