const AboutHero = () => {
  return (
    <div className="text-center mb-16 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
      <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-6">
        <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Biography
        </span>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
        About Sohrab Hossan
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        Passionate about technology, science, and creative problem solving.
        Building the future one line of code at a time.
      </p>
    </div>
  );
};

export default AboutHero;
