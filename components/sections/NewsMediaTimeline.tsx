"use client"
import { motion } from "framer-motion";
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
    <section className="py-24 bg-[#fafafa]">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Service Timeline</h2>
            <p className="text-lg text-gray-500">
              A record of active participation in national campaigns, humanitarian relief, and scouting service.
            </p>
          </div>
        </Reveal>

        <div className="relative border-l border-gray-200 ml-4 md:ml-0">
          {newsItems.map((item, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="mb-12 relative pl-8 md:pl-24 group">
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 bg-black rounded-full border-4 border-white shadow-sm group-hover:scale-150 transition-transform duration-300" />
                
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-12">
                  <div className="min-w-[120px] text-sm font-bold text-gray-400 uppercase tracking-widest">
                    {item.date}
                  </div>
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-widest mb-3">
                      {item.category}
                    </span>
                    <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-pink-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 max-w-2xl leading-relaxed">
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
