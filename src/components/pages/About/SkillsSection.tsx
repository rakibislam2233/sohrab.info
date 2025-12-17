import { Brain, Badge } from "lucide-react";

const SkillsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

      <div className="bg-card rounded-2xl p-8 border border-border">
        <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
          <Badge className="w-6 h-6 text-primary" />
          Personal Details
        </h2>
        <div className="space-y-4 text-sm">
          <div className="flex justify-between border-b border-border pb-2">
            <span className="text-muted-foreground">Father&apos;s Name</span>
            <span className="text-foreground font-medium">
              Md. Jamal Hossain
            </span>
          </div>
          <div className="flex justify-between border-b border-border pb-2">
            <span className="text-muted-foreground">Mother&apos;s Name</span>
            <span className="text-foreground font-medium">
              Mrs. Fatema Begum
            </span>
          </div>
          <div className="flex justify-between border-b border-border pb-2">
            <span className="text-muted-foreground">Date of Birth</span>
            <span className="text-foreground font-medium">15 August 1998</span>
          </div>
          <div className="flex justify-between border-b border-border pb-2">
            <span className="text-muted-foreground">Nationality</span>
            <span className="text-foreground font-medium">Bangladeshi</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Religion</span>
            <span className="text-foreground font-medium">Islam</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
