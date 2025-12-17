const GalleryHero = () => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-20">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card/50 border border-border text-xs font-semibold text-primary mb-8 backdrop-blur-sm">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
        <span className="tracking-wide uppercase">Portfolio Gallery</span>
      </div>
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-8 leading-tight">
        Visual{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-300">
          Chronicles
        </span>
      </h1>
      <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light">
        A curated selection of moments from scouting expeditions, journalism
        assignments, and professional events.
      </p>
    </div>
  );
};

export default GalleryHero;
