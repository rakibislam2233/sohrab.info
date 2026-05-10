"use client"
import Reveal from "../ui/Reveal";

const newsItems = [
  {
    date: "Aug 16, 2020",
    title: "Regional Scout Recognition",
    description: "Honored by the Bangladesh Scouts Rover Region for dedicated voluntary service during challenging times.",
    category: "Scout"
  },
  {
    date: "May 06, 2020",
    title: "Mass Relief Coordination",
    description: "Assisted the Thakurgaon District Administration in distributing relief supplies to over 4,700 families.",
    category: "Community"
  },
  {
    date: "Jan 14, 2020",
    title: "Winter Warmth Initiative",
    description: "Led the blanket distribution campaign for the underprivileged in Thakurgaon Govt. College.",
    category: "Voluntary"
  },
  {
    date: "Jan 11, 2020",
    title: "National Vitamin A Campaign",
    description: "Coordinated volunteer efforts for the National Vitamin A Plus campaign in the Thakurgaon region.",
    category: "Health"
  }
];

export default function NewsMediaTimeline() {
  return (
    <section className="py-12 bg-[#fafafa]">
      <div className="container mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="max-w-xl mb-8">
            <h2 className="text-2xl md:text-4xl font-black text-black mb-2 uppercase tracking-tighter">Service Timeline</h2>
            <p className="text-sm text-gray-500 font-medium">
              A record of active participation in national campaigns, humanitarian relief, and scouting service.
            </p>
          </div>
        </Reveal>

        <div className="relative border-l border-gray-200 ml-2 md:ml-0">
          {newsItems.map((item, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="mb-6 relative pl-5 md:pl-12 group">
                {/* Timeline Dot */}
                <div className="absolute left-[-5.5px] top-1 w-2.5 h-2.5 bg-black rounded-full border-2 border-white shadow-none group-hover:scale-150 transition-transform duration-300" />
                
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                  <div className="md:min-w-[100px] min-w-0 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    {item.date}
                  </div>
                  <div className="flex-1">
                    <span className="inline-block px-2 py-0.5 rounded bg-black text-white text-[8px] font-black uppercase tracking-widest mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-black mb-1 group-hover:text-pink-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm max-w-2xl leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
