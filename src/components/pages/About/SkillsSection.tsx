import { Brain, Badge } from "lucide-react";

const SkillsSection = () => {
  return (
    <div className="w-full">
      <div className="bg-card rounded-2xl p-8 border border-border">
        <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
          <Brain className="w-6 h-6 text-primary" />
          Interpersonal Skills
        </h2>
        <ul className="space-y-4">
          {[
            "Strong communication skills",
            "Leadership & Team management",
            "Problem-solving aptitude",
            "Quick learner & Adaptable",
            "Time management",
          ].map((skill) => (
            <li key={skill} className="flex items-center gap-3">
              <span className="shrink-0 h-2 w-2 rounded-full bg-primary"></span>
              <span className="text-muted-foreground">{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillsSection;
