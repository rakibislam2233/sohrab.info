import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import Image from "next/image";
import { Newspaper, Users, Compass, Heart } from "lucide-react";

export const metadata: Metadata = { title: "About Me — Sohrab Hossan" };

export default async function AboutPage() {
  const personalInfo = await prisma.personalInfo.findUnique({ where: { id: "primary" } });

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-8">MD. Sohrab Hossan</h1>
            <p className="text-xl text-gray-500 leading-relaxed mb-8">
              {personalInfo?.bio}
            </p>
            <div className="space-y-6">
              <ProfilePoint 
                icon={<Newspaper className="w-5 h-5 text-pink-600" />} 
                title="Journalist" 
                desc="Staff Reporter at Protidiner Bangladesh, specializing in Education and Current Affairs."
              />
              <ProfilePoint 
                icon={<Users className="w-5 h-5 text-blue-600" />} 
                title="Scout Leader" 
                desc="Dedicated Rover Scout Leader and Team Coordinator at Thakurgaon Govt. College."
              />
              <ProfilePoint 
                icon={<Heart className="w-5 h-5 text-red-600" />} 
                title="Social Volunteer" 
                desc="Committed to environmental conservation and humanitarian aid programs."
              />
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-4/5 relative rounded-[40px] overflow-hidden bg-gray-100">
              <Image 
                src={personalInfo?.avatar || "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800"}
                alt="Sohrab Hossan"
                fill
                className="object-cover"
              />
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-50 rounded-full -z-10" />
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-50 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </main>
  );
}

function ProfilePoint({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 bg-[#fafafa] rounded-2xl flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-black text-lg">{title}</h4>
        <p className="text-gray-500">{desc}</p>
      </div>
    </div>
  );
}
