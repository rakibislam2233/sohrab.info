import { Target } from "lucide-react";

const CareerObjective = () => {
  return (
    <div className="bg-card rounded-2xl p-8 border border-border relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Target className="w-32 h-32 text-primary" />
      </div>
      <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
        <span className="w-1.5 h-6 bg-primary rounded-full"></span>
        Career Objective
      </h2>
      <p className="text-muted-foreground leading-relaxed text-lg">
        To obtain a challenging position in a high-quality engineering
        environment where my resourceful experience and academic skills will add
        value to organizational operations. I am eager to leverage my background
        in science and technology to solve complex problems and contribute to
        innovative projects.
      </p>
    </div>
  );
};

export default CareerObjective;
