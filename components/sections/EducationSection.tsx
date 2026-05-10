"use client";
import React from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import Reveal from "../ui/Reveal";

const educationData = [
  {
    degree: "Bachelor of Business Administration (BBA)",
    institution: "Thakurgaon Govt. College",
    duration: "2018 - 2022",
    location: "Thakurgaon, Bangladesh",
    description:
      "Focused on Business Development and Management. Actively participated in various extracurricular activities including Scouting and Journalism.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Thakurgaon Govt. College",
    duration: "2016 - 2018",
    location: "Thakurgaon, Bangladesh",
    description:
      "Science background with a strong interest in literature and community service.",
  },
];

const EducationSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="education">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-black font-bold uppercase tracking-[0.2em] text-[10px] mb-4 border-b-2 border-black pb-1">
              Academic Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-3">
              <GraduationCap className="text-black" size={24} />
              Education
            </h2>
          </div>
        </Reveal>

        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="relative pl-8 pb-12 border-l-2 border-gray-200 last:pb-0 group">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-black group-hover:bg-black transition-colors duration-300"></div>
                <div className="bg-white p-6 rounded-xl shadow-none border border-gray-100 hover:border-black transition-all duration-300">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-black transition-colors duration-300">
                        {edu.degree}
                      </h3>
                      <p className="text-gray-600 text-sm font-medium">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex flex-col items-end text-sm text-gray-500">
                      <span className="flex items-center gap-1 font-bold text-black bg-gray-100 px-2 py-1 rounded-sm text-[10px]">
                        <Calendar size={12} />
                        {edu.duration}
                      </span>
                      <span className="flex items-center gap-1 mt-2 text-[10px]">
                        <MapPin size={12} />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
