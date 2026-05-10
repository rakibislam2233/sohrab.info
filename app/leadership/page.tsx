"use client";
import React from "react";
import { Users, Calendar, Award, Trophy, ArrowRight } from "lucide-react";
import Image from "next/image";
import PageBanner from "../../components/ui/PageBanner";
import Reveal from "../../components/ui/Reveal";
import MasonryGallery from "../../components/ui/MasonryGallery";

const leadershipRoles = [
  {
    id: "1",
    title: "Rover Scout Leader",
    organization: "Thakurgaon Govt. College Rover Scout Group",
    description:
      "Serving as the primary lead for the unit, responsible for strategic planning, member training, and coordination with district officials.",
    eventDate: "Aug 2020 - Present",
    location: "Thakurgaon, BD",
    rank: "Rover Scout Leader",
    image:
      "https://images.unsplash.com/photo-1526660690293-bcd32dc3b123?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "2",
    title: "Team Coordinator",
    organization: "District Volunteer Group",
    description:
      "Coordinating large-scale volunteer teams for national health campaigns and disaster relief efforts in the Northern region of Bangladesh.",
    eventDate: "May 2020 - Dec 2021",
    location: "Thakurgaon District",
    rank: "Coordinator",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1000",
  },
];

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1000",
    caption: "Leading a strategy meeting",
    category: "Meeting",
  },
  {
    url: "https://images.unsplash.com/photo-1526660690293-bcd32dc3b123?auto=format&fit=crop&q=80&w=1000",
    caption: "Training session for new scouts",
    category: "Training",
  },
  {
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000",
    caption: "Collaborative project workshop",
    category: "Workshop",
  },
  {
    url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1000",
    caption: "Presenting community impact report",
    category: "Presentation",
  },
  {
    url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1000",
    caption: "Community outreach event",
    category: "Outreach",
  },
  {
    url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000",
    caption: "Team building retreat",
    category: "Team",
  },
];

const LeadershipPage = () => {
  return (
    <main className="min-h-screen bg-white pb-24">
      <PageBanner
        title="Leadership"
        badge="Strategic Leader & Coordinator"
        themeColor="bg-pink-50"
        textColor="text-pink-900"
      />

      <div className="container mx-auto px-4 mt-16">
        {/* Gallery Section */}
        <section className="mb-24">
          <Reveal>
            <div className="flex flex-col items-start mb-12">
              <span className="text-pink-600 font-bold uppercase tracking-[0.2em] text-xs mb-3">
                Roles in Action
              </span>
              <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Users className="text-pink-600" size={24} />
                Leadership Gallery
              </h2>
            </div>
          </Reveal>

          <MasonryGallery images={galleryImages} />
        </section>

        {/* Roles Section */}
        <section>
          <Reveal>
            <div className="flex flex-col items-start mb-12">
              <span className="text-pink-600 font-bold uppercase tracking-[0.2em] text-xs mb-3">
                Core Roles
              </span>
              <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Trophy className="text-pink-600" size={24} />
                Major Responsibilities
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadershipRoles.map((role, i) => (
              <Reveal key={role.id} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-xl flex flex-col h-full">
                  <div className="relative aspect-21/9 overflow-hidden">
                    <Image
                      src={role.image}
                      alt={role.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute bottom-4 left-6">
                      <span className="px-3 py-1 bg-pink-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-lg">
                        {role.rank}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col grow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-pink-600 transition-colors">
                          {role.title}
                        </h3>
                        <p className="text-pink-600 font-medium text-sm">
                          {role.organization}
                        </p>
                      </div>
                      <div className="p-3 bg-pink-50 rounded-xl text-pink-600">
                        <Users size={20} />
                      </div>
                    </div>

                    <p className="text-gray-500 leading-relaxed mb-6">
                      {role.description}
                    </p>

                    <div className="mt-auto pt-6 border-t border-gray-50 flex flex-wrap gap-6 text-xs font-bold text-gray-400 uppercase tracking-widest">
                      <span className="flex items-center gap-2">
                        <Calendar size={14} className="text-pink-400" />
                        {role.eventDate}
                      </span>
                      <span className="flex items-center gap-2">
                        <Award size={14} className="text-pink-400" />
                        {role.location}
                      </span>
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

export default LeadershipPage;
