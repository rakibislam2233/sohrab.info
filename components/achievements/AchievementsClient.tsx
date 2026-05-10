"use client";
import React from "react";
import { Award, Star, Medal, CheckCircle, GraduationCap } from "lucide-react";
import PageBanner from "../ui/PageBanner";
import Reveal from "../ui/Reveal";

interface Achievement {
  id: string;
  title: string;
  issuedBy: string;
  issuedDate: string;
  description: string;
  category: string;
}

interface AchievementsClientProps {
  achievements: Achievement[];
}

const AchievementsClient: React.FC<AchievementsClientProps> = ({ achievements }) => {
  return (
    <main className="min-h-screen bg-white pb-24">
      <PageBanner
        title="Achievements"
        subtitle="Celebrating milestones and recognition. A journey of dedication, excellence, and impactful contributions."
        badge="Hall of Fame"
        icon={Star}
      />

      <div className="container mx-auto px-4 mt-16">
        <section>
          <Reveal>
            <div className="flex flex-col items-start mb-10">
              <span className="text-black font-bold uppercase tracking-[0.2em] text-[10px] mb-2 border-l-2 border-black pl-3">
                Milestones
              </span>
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                <Medal className="text-black" size={20} />
                Awards & Recognition
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, i) => (
              <Reveal key={achievement.id} delay={i * 0.1}>
                <div className="bg-white p-6 rounded-xl border border-gray-100 flex flex-col h-full hover:border-black transition-all duration-500">
                  <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center mb-5 border border-black">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-6">
                    {achievement.description}
                  </p>
                  <div className="pt-5 border-t border-gray-50 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-black">
                      <CheckCircle className="w-4 h-4 text-black" />
                      {achievement.issuedBy}
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      {achievement.issuedDate}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default AchievementsClient;
