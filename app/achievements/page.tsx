import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import { Award, Calendar, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export const metadata: Metadata = { title: "Achievements — Sohrab Hossan" };

export default async function AchievementsPage() {
  const achievements = await prisma.achievement.findMany({
    orderBy: { issuedDate: "desc" },
  });

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">Achievements</h1>
          <p className="text-xl text-gray-500">
            A collection of awards and certifications received for excellence in journalism, scouting, and community leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col h-full transition-all hover:border-gray-300">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{achievement.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-8 grow">{achievement.description}</p>
              
              <div className="pt-6 border-t border-gray-50 space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-400 font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  {achievement.issuedBy}
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400 font-medium">
                  <Calendar className="w-4 h-4" />
                  {new Date(achievement.issuedDate).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
