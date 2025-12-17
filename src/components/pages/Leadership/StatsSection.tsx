const StatsSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-y border-border py-8 bg-card/50 backdrop-blur-sm rounded-2xl">
        {[
          { value: "7+", label: "Years Active" },
          { value: "15+", label: "Camps Led" },
          { value: "2", label: "National Awards" },
          { value: "100%", label: "Dedication" },
        ].map((stat, i) => (
          <div
            key={i}
            className={`text-center ${i !== 0 ? "border-l border-border" : ""}`}
          >
            <div className="text-3xl font-bold text-foreground mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
