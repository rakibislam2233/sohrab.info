const timelineData = [
  {
    title: "Senior Rover Mate",
    period: "2022 - Present",
    desc: "Leading the Rover Scout unit, organizing weekly meetings, and mentoring junior scouts.",
    align: "left",
  },
  {
    title: "Camp Director",
    period: "2021 - 2022",
    desc: "Successfully planned and executed the district annual camp for 200+ participants.",
    align: "right",
  },
  {
    title: "Service Team Lead",
    period: "2019 - 2021",
    desc: "Coordinated volunteer efforts during local festivals and emergency response situations.",
    align: "left",
  },
  {
    title: "Patrol Leader",
    period: "2018 - 2019",
    desc: "Guided a patrol of 8 scouts, ensuring participation in all unit activities.",
    align: "right",
  },
  {
    title: "Unit Scribe",
    period: "2017 - 2018",
    desc: "Maintained records of unit meetings, attendance, and financial accounts with high accuracy.",
    align: "left",
  },
];

const LeadershipTimeline = () => {
  return (
    <section
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 relative"
      id="roles"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Leadership Timeline
        </h2>
        <p className="text-muted">
          Key responsibilities and milestones throughout the journey.
        </p>
      </div>

      <div className="timeline-line relative space-y-12">
        {timelineData.map((item, i) => (
          <div key={i} className="relative pl-12 md:pl-0">
            <div className="md:flex items-center justify-between group">
              {item.align === "left" && (
                <div className="hidden md:block md:w-[45%] text-right pr-8">
                  <div className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </div>
                  <div className="text-sm text-muted font-mono mb-2">
                    {item.period}
                  </div>
                  <p className="text-muted text-sm">{item.desc}</p>
                </div>
              )}

              <div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full border-4 border-background bg-primary shadow-[0_0_0_4px_rgba(59,130,246,0.2)] group-hover:bg-white transition-colors z-10"></div>

              {item.align === "right" && (
                <div className="md:w-[45%] pl-0 md:pl-8">
                  <div className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </div>
                  <div className="text-sm text-muted font-mono mb-2">
                    {item.period}
                  </div>
                  <p className="text-muted text-sm">{item.desc}</p>
                </div>
              )}

              <div className="md:hidden">
                <div className="text-xs font-mono text-primary mb-1">
                  {item.period}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-muted text-sm mb-4">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipTimeline;
