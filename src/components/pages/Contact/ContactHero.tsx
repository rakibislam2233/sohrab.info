const ContactHero = () => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wide uppercase border border-blue-500/20">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
        Available for hire
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
        Let's Start a Conversation
      </h1>
      <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
        I’m currently open to freelance work and collaboration. Connect with me
        via phone, email, or send a message below.
      </p>
    </div>
  );
};

export default ContactHero;
