const GalleryCTA = () => {
  return (
    <div className="mt-32 relative rounded-[2rem] overflow-hidden bg-card border border-border shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent"></div>
      <div className="absolute -right-32 -top-32 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
      <div className="relative z-10 px-8 py-16 md:px-20 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-xl text-center md:text-left">
          <span className="text-primary font-bold text-xs tracking-widest uppercase mb-3 block">
            Available for hire
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            Interested in <br />
            collaborating?
          </h2>
          <p className="text-muted-foreground text-lg">
            Whether it's a scouting event, a journalism piece, or a professional
            project, I'm always open to new opportunities.
          </p>
        </div>
        <a
          href="#"
          className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white bg-primary hover:bg-blue-500 rounded-full transition-all shadow-xl shadow-blue-500/20 hover:scale-105"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default GalleryCTA;
