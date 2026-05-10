import { Heart, Newspaper, Users } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import PageBanner from "../../components/ui/PageBanner";

export const metadata: Metadata = { title: "About Me — Sohrab Hossan" };

const personalInfo = {
  bio: "Journalist, Scout Leader, and Social Worker dedicated to community development and humanitarian service in Thakurgaon. With over 8 years of experience in leadership and field reporting, I strive to bridge the gap between information and action.",
  avatar:
    "https://lh3.googleusercontent.com/sitesv/AA5AbUA8r1-w-qKkLg6V0U2-M1G-v39_z8f9z8f9z8f9z8f9z8f9z8f9z8f9z8f9z8f9z8f9z8f9z8f9z=w1280",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-0 pb-20">
      <PageBanner
        title="My Story"
        badge="Journalist & Scout"
        themeColor="bg-[#fafafa]"
        textColor="text-[#1a1a1a]"
      />
      <div className="container mx-auto px-4 sm:px-6 mt-10 sm:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 sm:gap-12 items-center">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-black mb-4 uppercase tracking-tighter italic">
              MD. Sohrab Hossan
            </h1>
            <p className="text-sm text-gray-400 leading-relaxed mb-6 font-medium max-w-prose">
              {personalInfo?.bio}
            </p>
            <div className="space-y-4">
              <ProfilePoint
                icon={<Newspaper className="w-4 h-4 text-pink-600" />}
                title="Journalist"
                desc="Staff Reporter at Protidiner Bangladesh, specializing in Education and Current Affairs."
              />
              <ProfilePoint
                icon={<Users className="w-4 h-4 text-blue-600" />}
                title="Scout Leader"
                desc="Dedicated Rover Scout Leader and Team Coordinator at Thakurgaon Govt. College."
              />
              <ProfilePoint
                icon={<Heart className="w-4 h-4 text-red-600" />}
                title="Social Volunteer"
                desc="Committed to environmental conservation and humanitarian aid programs."
              />
            </div>
          </div>

          <div className="relative max-w-sm mx-auto lg:mx-0">
            <div className="aspect-square relative rounded overflow-hidden bg-gray-100 border border-gray-100 shadow-sm">
              <Image
                src={
                  personalInfo?.avatar ||
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800"
                }
                alt="Sohrab Hossan"
                fill
                className="object-cover"
              />
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-pink-50 rounded -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-50 rounded -z-10" />
          </div>
        </div>
      </div>
    </main>
  );
}

function ProfilePoint({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-3 items-start sm:items-center">
      <div className="w-10 h-10 bg-[#fafafa] rounded flex items-center justify-center shrink-0 border border-gray-100">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-black text-base leading-tight">
          {title}
        </h4>
        <p className="text-gray-400 text-xs mt-0.5 max-w-prose">{desc}</p>
      </div>
    </div>
  );
}
