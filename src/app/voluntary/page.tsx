import ImpactInitiatives from "@/components/pages/Voluntary/ImpactInitiatives";
import ScoutingSection from "@/components/pages/Voluntary/ScoutingSection";
import VoluntaryHero from "@/components/pages/Voluntary/VoluntaryHero";

const VoluntaryPage = () => {
  return (
    <main className="relative z-10 pt-24 pb-16">
      <VoluntaryHero />
      <ScoutingSection />
      <ImpactInitiatives />
    </main>
  );
};

export default VoluntaryPage;
