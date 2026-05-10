"use client";
import React from "react";
import { PenTool, TrendingUp, Users, Compass, Globe } from "lucide-react";
import Reveal from "../ui/Reveal";

const skillCategories = [
  {
    title: "Content Writing",
    icon: <PenTool size={24} />,
    skills: ["Storytelling", "Journalistic Writing", "SEO Content", "Editing"],
  },
  {
    title: "Business Development",
    icon: <TrendingUp size={24} />,
    skills: [
      "Market Research",
      "Partnership Management",
      "Strategy",
      "Public Relations",
    ],
  },
  {
    title: "Leadership & Voluntary",
    icon: <Users size={24} />,
    skills: [
      "Team Coordination",
      "Event Planning",
      "Scouting",
      "Community Service",
    ],
  },
  {
    title: "Exploration & Travel",
    icon: <Compass size={24} />,
    skills: [
      "Photography",
      "Route Planning",
      "Cultural Documentation",
      "Solo Travel",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-20 bg-white" id="skills">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="flex flex-col items-center mb-16">
            <span className="text-pink-600 font-bold uppercase tracking-[0.2em] text-xs mb-4">
              Core Competencies
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-3">
              <Globe className="text-pink-600" size={32} />
              Professional Skills
            </h2>
            <div className="w-20 h-1 bg-pink-600 mt-6 rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="bg-gray-50 p-8 rounded border border-gray-100 hover:border-pink-200 hover:bg-white transition-all duration-500 group">
                <div className="w-14 h-14 bg-pink-100 text-pink-600 rounded flex items-center justify-center mb-6 group-hover:bg-pink-600 group-hover:text-white transition-colors duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-pink-400"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
