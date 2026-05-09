import { prisma } from "@/lib/prisma";
import Reveal from "../ui/Reveal";
import { Award, CheckCircle } from "lucide-react";

export default async function AchievementSection() {
  const achievements = await prisma.achievement.findMany({
    take: 3,
    orderBy: { issuedDate: "desc" },
  });

  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Key Achievements</h2>
            <p className="text-lg text-gray-500">
              Recognition for professional excellence in journalism and dedicated service in scouting.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Reveal key={achievement.id} delay={index * 0.1}>
              <div className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col h-full">
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{achievement.title}</h3>
                <p className="text-gray-500 text-sm mb-6 grow">{achievement.description}</p>
                <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                  <CheckCircle className="w-3 h-3 text-emerald-500" />
                  {achievement.issuedBy}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
