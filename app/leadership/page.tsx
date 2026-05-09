import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import Image from "next/image";
import { Users, Award, Calendar } from "lucide-react";

export const metadata: Metadata = { title: "Leadership — Sohrab Hossan" };

export default async function LeadershipPage() {
  const scoutActivities = await prisma.scoutActivity.findMany({
    where: { rank: { not: null } },
    orderBy: { eventDate: "desc" },
  });

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">Leadership</h1>
          <p className="text-xl text-gray-500">
            Dedicated to fostering team spirit and community development through organizational leadership roles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {scoutActivities.map((activity) => (
            <div key={activity.id} className="group border border-gray-100 rounded-3xl p-8 hover:border-blue-600 transition-colors">
              <div className="flex items-start justify-between mb-8">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  {activity.rank}
                </span>
              </div>
              
              <h3 className="text-3xl font-bold text-black mb-4">{activity.title}</h3>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                {activity.description}
              </p>
              
              <div className="flex items-center gap-6 text-sm text-gray-400 font-medium pt-6 border-t border-gray-50">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(activity.eventDate).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  {activity.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
