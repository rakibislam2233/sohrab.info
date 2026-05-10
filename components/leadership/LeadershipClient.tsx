"use client";
import React from "react";
import { Users, Calendar, Award, Trophy, ArrowRight } from "lucide-react";
import Image from "next/image";
import PageBanner from "../ui/PageBanner";
import Reveal from "../ui/Reveal";
import PhotoGallery from "../ui/PhotoGallery";

interface LeadershipRole {
  id: string;
  title: string;
  organization: string;
  description: string;
  eventDate: string;
  location: string;
  rank: string;
  image: string;
}

interface GalleryImage {
  url: string;
  caption: string;
  category: string;
}

interface LeadershipClientProps {
  leadershipRoles: LeadershipRole[];
  galleryImages: GalleryImage[];
}

const LeadershipClient: React.FC<LeadershipClientProps> = ({ leadershipRoles, galleryImages }) => {
  return (
    <main className="min-h-screen bg-white pb-24">
      <PageBanner
        title="Leadership"
        subtitle="Leading by example. Empowering youth and coordinating social impact across regional and national platforms."
        badge="Strategic Leader"
        icon={Trophy}
      />

      <div className="container mx-auto px-4 mt-16">
        {/* Gallery Section */}
        <section className="mb-20">
          <Reveal>
            <div className="flex flex-col items-start mb-10">
              <span className="text-black font-bold uppercase tracking-[0.2em] text-[10px] mb-2 border-l-2 border-black pl-3">
                Roles in Action
              </span>
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                <Users className="text-black" size={20} />
                Leadership Gallery
              </h2>
            </div>
          </Reveal>

          <PhotoGallery images={galleryImages} />
        </section>

        {/* Roles Section */}
        <section>
          <Reveal>
            <div className="flex flex-col items-start mb-10">
              <span className="text-black font-bold uppercase tracking-[0.2em] text-[10px] mb-2 border-l-2 border-black pl-3">
                Core Roles
              </span>
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                <Trophy className="text-black" size={20} />
                Major Responsibilities
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadershipRoles.map((role, i) => (
              <Reveal key={role.id} delay={i * 0.1}>
                <div className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-none transition-all duration-500 hover:border-black flex flex-col h-full">
                  <div className="relative aspect-21/9 overflow-hidden">
                    <Image
                      src={role.image}
                      alt={role.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute bottom-4 left-6">
                      <span className="px-2 py-0.5 bg-black text-white text-[8px] font-bold uppercase tracking-wider rounded-md shadow-none">
                        {role.rank}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col grow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-black transition-colors">
                          {role.title}
                        </h3>
                        <p className="text-black font-medium text-xs">
                          {role.organization}
                        </p>
                      </div>
                      <div className="p-2 bg-black rounded-xl text-white border border-black">
                        <Users size={18} />
                      </div>
                    </div>

                    <p className="text-gray-500 text-xs leading-relaxed mb-6">
                      {role.description}
                    </p>

                    <div className="mt-auto pt-6 border-t border-gray-50 flex flex-wrap gap-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      <span className="flex items-center gap-2">
                        <Calendar size={12} className="text-gray-400" />
                        {role.eventDate}
                      </span>
                      <span className="flex items-center gap-2">
                        <Award size={12} className="text-gray-400" />
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

export default LeadershipClient;
