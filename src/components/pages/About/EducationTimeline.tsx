const EducationTimeline = () => {
  return (
    <div className="bg-card rounded-2xl p-8 border border-border">
      <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
        <span className="w-1.5 h-6 bg-primary rounded-full"></span>
        Education
      </h2>
      <div className="relative pl-8 border-l-2 border-border space-y-8">
        <div className="relative">
          <span className="absolute -left-10.25 top-1 h-5 w-5 rounded-full border-4 border-card bg-primary"></span>
          <h3 className="text-xl font-bold text-foreground">
            BSc in Zoology (Honours)
          </h3>
          <div className="text-primary font-medium mb-2">
            National University
          </div>
          <div className="text-sm text-muted-foreground mb-3">
            Passing Year: 2022
          </div>
          <p className="text-muted-foreground">
            Specialized in biological sciences with a strong foundation in
            research methodology and data analysis. Developed critical thinking
            and analytical skills applicable across various domains.
          </p>
        </div>
        <div className="relative">
          <span className="absolute -left-10.25 top-1 h-5 w-5 rounded-full border-4 border-card bg-muted-foreground"></span>
          <h3 className="text-xl font-bold text-foreground">
            Higher Secondary Certificate (HSC)
          </h3>
          <div className="text-primary font-medium mb-2">Science Group</div>
          <div className="text-sm text-muted-foreground mb-3">
            Passing Year: 2017
          </div>
          <p className="text-muted-foreground">
            Completed high school education with a focus on Physics, Chemistry,
            and Biology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationTimeline;
