"use client";
import React from "react";
import { PenTool, TrendingUp, Users, Compass, CheckCircle2 } from "lucide-react";
import Reveal from "../ui/Reveal";

const skillCategories = [
  {
    title: "Content & Journalism",
    icon: <PenTool size={22} />,
    description: "Expertise in storytelling and journalistic excellence since 2016.",
    skills: ["Storytelling", "Journalistic Writing", "SEO Content", "Editorial Management"],
  },
  {
    title: "Strategic Growth",
    icon: <TrendingUp size={22} />,
    description: "Driving business results through market research and partnerships.",
    skills: [
      "Market Research",
      "Partnership Management",
      "Strategic Planning",
      "Public Relations",
    ],
  },
  {
    title: "Leadership & Impact",
    icon: <Users size={22} />,
    description: "Dedicated to community service and scout leadership development.",
    skills: [
      "Team Coordination",
      "Event Management",
      "Scout Leadership",
      "Community Outreach",
    ],
  },
  {
    title: "Exploration",
    icon: <Compass size={22} />,
    description: "Documenting diverse cultures and landscapes across 64 districts.",
    skills: [
      "Visual Storytelling",
      "Route Planning",
      "Cultural Documentation",
      "Adventure Travel",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden" id="skills">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 z-0 skew-x-12 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <Reveal>
          <div className="flex flex-col items-start mb-12 max-w-2xl">
            <span className="text-gray-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 border-l-2 border-black pl-4">
              Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Professional <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-black to-gray-400">Core Competencies</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="group relative bg-white p-6 rounded-xl border border-gray-100 hover:border-black transition-all duration-700 hover:shadow-xl hover:shadow-black/5 overflow-hidden flex flex-col h-full">
                {/* Background Number */}
                <span className="absolute top-2 right-4 text-6xl font-black text-gray-50 group-hover:text-gray-100 transition-colors duration-700 pointer-events-none select-none">
                  0{idx + 1}
                </span>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-500">
                    {category.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-black transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-500 text-xs mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="mt-auto space-y-2">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center gap-2 text-[11px] font-bold text-gray-700 group-hover:text-black transition-colors"
                      >
                        <CheckCircle2 size={12} className="text-black opacity-40 group-hover:opacity-100 transition-opacity" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Bottom line animation */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-black group-hover:w-full transition-all duration-700"></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
