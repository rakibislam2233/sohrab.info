import { Trophy } from "lucide-react";
import { MdMilitaryTech } from "react-icons/md";

const AwardsGrid = () => {
  return (
    <section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32"
      id="awards"
    >
      <div className="flex items-center gap-4 mb-12">
        <div className="h-px bg-border flex-grow"></div>
        <h2 className="text-3xl font-bold text-white uppercase tracking-widest text-center">
          Top Honors
        </h2>
        <div className="h-px bg-border flex-grow"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="group relative bg-card border border-border rounded-3xl p-1 overflow-hidden hover:border-blue-500/50 transition-colors duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="bg-background/80 rounded-[22px] p-8 h-full relative z-10 backdrop-blur-xl">
            <div className="flex justify-between items-start mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                <Trophy className="w-8 h-8" />
              </div>
              <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-xs font-bold tracking-wide">
                2024
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
              Best Rover Scout
            </h3>
            <div className="text-sm font-medium text-muted mb-4 uppercase tracking-wider">
              Ministry of Education • Rangpur Division
            </div>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Awarded for outstanding leadership, consistent service
              performance, and exemplary conduct within the Rangpur Division
              Rover Scout community.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              View Certificate →
            </a>
          </div>
        </div>

        <div className="group relative bg-card border border-border rounded-3xl p-1 overflow-hidden hover:border-purple-500/50 transition-colors duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="bg-background/80 rounded-[22px] p-8 h-full relative z-10 backdrop-blur-xl">
            <div className="flex justify-between items-start mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
                <MdMilitaryTech className="w-8 h-8" />
              </div>
              <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-full text-xs font-bold tracking-wide">
                2019
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
              National Service Award
            </h3>
            <div className="text-sm font-medium text-muted mb-4 uppercase tracking-wider">
              Bangladesh Scouts • National Level
            </div>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Honored for exceptional dedication to national service projects,
              disaster management support, and community development
              initiatives.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
            >
              View Certificate →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsGrid;
