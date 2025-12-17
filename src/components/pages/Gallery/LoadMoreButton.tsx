import { ChevronDown } from "lucide-react";

const LoadMoreButton = () => {
  return (
    <div className="mt-20 flex justify-center">
      <button className="group flex items-center gap-3 px-10 py-4 rounded-full bg-card border border-border text-foreground hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
        <span className="font-medium tracking-wide">Load More Photos</span>
        <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
      </button>
    </div>
  );
};

export default LoadMoreButton;
