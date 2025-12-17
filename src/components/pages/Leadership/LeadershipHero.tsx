const LeadershipHero = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border text-primary text-xs font-semibold mb-8 shadow-xl shadow-black/20">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_currentColor]"></span>
          Scouting Journey Since 2017
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
          Leadership Through <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
            Service & Impact
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted leading-relaxed mb-12">
          A chronicle of unwavering dedication to the Scouting movement,
          showcasing national accolades, leadership roles, and a commitment to
          community development in Bangladesh.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            "7+ Years Active",
            "15+ Camps Led",
            "2 National Awards",
            "100% Dedication",
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-card/50 border border-border rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className="text-3xl font-bold text-white mb-1">
                {stat.split(" ")[0]}
              </div>
              <div className="text-xs text-muted font-bold uppercase tracking-widest">
                {stat.split(" ").slice(1).join(" ")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipHero;
