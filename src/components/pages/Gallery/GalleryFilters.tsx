const GalleryFilters = () => {
  const filters = ["All Photos", "Scouting", "Journalism", "Events"];

  return (
    <div className="flex justify-center mb-16">
      <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-card border border-border rounded-full backdrop-blur-md">
        {filters.map((filter, i) => (
          <button
            key={i}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
              i === 0
                ? "bg-primary text-white shadow-lg shadow-primary/20"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GalleryFilters;
