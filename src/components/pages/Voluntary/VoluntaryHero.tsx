import Image from "next/image";

const VoluntaryHero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-20 lg:py-28 px-4 md:px-10">
      <div className="layout-content-container flex flex-col max-w-7xl w-full">
        <div className="relative w-full overflow-hidden rounded-2xl bg-card-dark border border-border-dark shadow-2xl group">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuChhPQwJgeXi8FsFA7UdNXJ2buWa9i44pkUM0ucP7o4ytvZg9cgKahmbPChj12lFb0a94EGdfFSey4sWEO5fVp4ywcBbrv6vPqEK96v4dL2y-ovjGSj4iL_jxETA10Q2qd0pC1ooCqymd9lVr400kN-I7G7tP-JcenyOiSggVvNGCd2hOXjJA7bHQ8iAhZgnY0sVgOp4ml3c2Q13wTwInCGSOmA-Av51P-jgGX1woT2UugZcErHvuh2D-w-QE6zK7-0kiCyEK5J2IM"
              alt="Group of volunteers working together in a field during a relief mission"
              fill
              className="object-cover transition-transform duration-1000 "
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/95 to-background-dark/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
          </div>
          <div className="relative z-20 flex flex-col items-start justify-center gap-8 px-6 py-16 md:px-16 md:py-24 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-bold text-primary uppercase tracking-widest">
                Humanitarian
              </span>
            </div>
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Serving with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-text-secondary">
                Purpose & Heart
              </span>
            </h1>
            <p className="text-text-muted text-lg font-light leading-relaxed max-w-xl border-l-2 border-primary/50 pl-6">
              Dedicated to humanitarian aid, disaster management, and community
              development. Over 8 years of defining my journey through action,
              empathy, and sustainable impact.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <button className="flex h-12 items-center justify-center rounded-lg bg-primary hover:bg-primary-hover px-8 text-sm font-bold text-background-dark transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40">
                View Impact
              </button>
              <button className="flex h-12 items-center justify-center rounded-lg border border-border-dark bg-card-dark/50 px-8 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-card-dark hover:border-primary/50">
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
