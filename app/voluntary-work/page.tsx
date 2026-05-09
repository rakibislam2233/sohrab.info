import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import Image from "next/image";
import { Heart, Calendar, Building2 } from "lucide-react";

export const metadata: Metadata = { title: "Voluntary Work — Sohrab Hossan" };

export default async function VoluntaryWorkPage() {
  const works = await prisma.voluntaryWork.findMany({
    orderBy: { date: "desc" },
  });

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">Voluntary Work</h1>
          <p className="text-xl text-gray-500">
            Dedicated to making a positive impact through social service, environmental conservation, and humanitarian aid.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {works.map((work) => (
            <div key={work.id} className="group">
              <div className="relative aspect-video mb-8 overflow-hidden rounded-3xl bg-gray-100 border border-gray-100">
                {work.image && (
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-sm text-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    <Heart className="w-3 h-3 text-red-500" />
                    Service
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-6 mb-4 text-sm text-gray-400 font-medium">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(work.date).getFullYear()}
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4" />
                  {work.organization}
                </div>
              </div>

              <h2 className="text-3xl font-bold text-black mb-4 group-hover:text-red-500 transition-colors">
                {work.title}
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                {work.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
