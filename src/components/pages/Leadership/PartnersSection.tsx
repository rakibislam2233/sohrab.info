import { Verified, School } from "lucide-react";
import { MdPublic, MdVolunteerActivism } from "react-icons/md";

const PartnersSection = () => {
  return (
    <section className="border-t border-border bg-card/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8">
          Proudly Associated With
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2">
            <Verified className="w-8 h-8 text-green-600" />
            <span className="font-bold text-xl text-foreground">
              Bangladesh Scouts
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MdPublic className="w-8 h-8 text-purple-600" />
            <span className="font-bold text-xl text-foreground">WOSM</span>
          </div>
          <div className="flex items-center gap-2">
            <MdVolunteerActivism className="w-8 h-8 text-red-600" />
            <span className="font-bold text-xl text-foreground">
              Red Crescent
            </span>
          </div>
          <div className="flex items-center gap-2">
            <School className="w-8 h-8 text-blue-600" />
            <span className="font-bold text-xl text-foreground">
              Ministry of Ed.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
