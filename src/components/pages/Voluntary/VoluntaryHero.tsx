import Image from "next/image";

const VoluntaryHero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-20 lg:py-28 px-4 md:px-10">
      <div className="layout-content-container flex flex-col max-w-7xl w-full">
        <div className="relative w-full overflow-hidden rounded-2xl bg-[#131C2E] border border-[#1E293B] shadow-2xl group">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuChhPQwJgeXi8FsFA7UdNXJ2buWa9i44pkUM0ucP7o4ytvZg9cgKahmbPChj12lFb0a94EGdfFSey4sWEO5fVp4ywcBbrv6vPqEK96v4dL2y-ovjGSj4iL_jxETA10Q2qd0pC1ooCqymd9lVr400kN-I7G7tP-JcenyOiSggVvNGCd2hOXjJA7bHQ8iAhZgnY0sVgOp4ml3c2Q13wTwInCGSOmA-Av51P-jgGX1woT2UugZcErHvuh2D-w-QE6zK7-0kiCyEK5J2IM"
              alt="Group of volunteers working together"
              fill
              className="object-cover transition-transform duration-1000 "
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/95 to-[#0B1120]/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent"></div>
          </div>

          <div className="relative z-20 flex flex-col items-start justify-center gap-8 px-6 py-16 md:px-16 md:py-24 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/20 px-4 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38bdf8] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38bdf8]"></span>
              </span>
              <span className="text-xs font-bold text-[#38bdf8] uppercase tracking-widest">
                Humanitarian
              </span>
            </div>

            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Serving with <br />
              <span className="text-white">
                Purpose & Heart
              </span>
            </h1>

            <p className="text-[#cbd5e1] text-lg font-light leading-relaxed max-w-xl border-l-2 border-[#38bdf8]/50 pl-6">
              Dedicated to humanitarian aid, disaster management, and community
              development. Over 8 years of defining my journey through action,
              empathy, and sustainable impact.
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <button className="flex h-12 items-center justify-center rounded-lg bg-[#38bdf8] hover:bg-[#0ea5e9] px-8 text-sm font-bold text-[#0B1120] transition-all shadow-lg shadow-[#38bdf8]/20 hover:shadow-[#38bdf8]/40">
                View Impact
              </button>
              <button className="flex h-12 items-center justify-center rounded-lg border border-[#1E293B] bg-[#131C2E]/50 px-8 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-[#131C2E] hover:border-[#38bdf8]/50">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoluntaryHero;
