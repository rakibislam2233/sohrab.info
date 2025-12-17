import ImpactInitiatives from "@/components/pages/Voluntary/ImpactInitiatives";
import ScoutingSection from "@/components/pages/Voluntary/ScoutingSection";
import StatsGrid from "@/components/pages/Voluntary/StatsGrid";
import VoluntaryHero from "@/components/pages/Voluntary/VoluntaryHero";

const VoluntaryPage = () => {
  return (
    <main className="relative z-10 pt-24 pb-16">
      <VoluntaryHero />
      <StatsGrid />
      <ScoutingSection />
      <ImpactInitiatives />
    </main>
  );
};

export default VoluntaryPage;
