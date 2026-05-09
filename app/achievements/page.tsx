"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Calendar, CheckCircle, Play, Camera } from "lucide-react";
import Image from "next/image";
import Reveal from "../../components/ui/Reveal";
import ImageLightbox from "../../components/ui/ImageLightbox";
import PageBanner from "../../components/ui/PageBanner";

const achievements = [
  { id: '1', title: 'National Service Award', description: 'Highest recognition from Bangladesh Scouts for outstanding voluntary service.', issuedBy: 'Bangladesh Scouts', issuedDate: '2020-08-16' },
  { id: '2', title: 'Best Unit Leader Award', description: 'Recognized for exceptional leadership of the Thakurgaon Govt. College Rover Scout Group.', issuedBy: 'Thakurgaon Govt. College', issuedDate: '2020-01-20' },
];

const galleryImages = [
  "https://lh3.googleusercontent.com/sitesv/AA5AbUA9cYkr2P43vNM2jN1qDBBB4KeMBPvJHEy5fg3vLKV1b6c2II6E3XQKTmRgjuqcRVJVIUGSV23-j6Ddo0ye3kXQfpsptNNgFNOcqm0IPyZBkc58yOXUuenRx523Pi1PsKzIVWQnt5gyrb70dkZT_N9hvBCyP7Z09_qcvG8y-2tPUwVXPj2LrpVT=w16383",
  "https://images.unsplash.com/photo-1578574515318-de9205d6a9a4?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?auto=format&fit=crop&q=80&w=1000"
];

export default function AchievementsPage() {
  const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 });

  return (
    <main className="min-h-screen bg-white pt-0 pb-20">
      <PageBanner 
        title="Achievements" 
        badge="Honored & Recognized"
        themeColor="bg-[#fffdf0]"
        textColor="text-[#856404]"
      />
      <div className="container mx-auto px-6 mt-24">

        {/* Featured Achievement Moment */}
        <Reveal delay={0.2}>
          <div className="relative aspect-video mb-32 rounded-[40px] overflow-hidden group bg-gray-100">
            <Image 
              src="https://lh3.googleusercontent.com/sitesv/AA5AbUA9cYkr2P43vNM2jN1qDBBB4KeMBPvJHEy5fg3vLKV1b6c2II6E3XQKTmRgjuqcRVJVIUGSV23-j6Ddo0ye3kXQfpsptNNgFNOcqm0IPyZBkc58yOXUuenRx523Pi1PsKzIVWQnt5gyrb70dkZT_N9hvBCyP7Z09_qcvG8y-2tPUwVXPj2LrpVT=w16383"
              alt="Achievement Moment"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <button className="w-24 h-24 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl">
                <Play className="w-8 h-8 text-black fill-black ml-1" />
              </button>
            </div>
            <div className="absolute bottom-10 left-10 text-white">
              <span className="text-xs font-bold bg-amber-600 px-4 py-2 rounded-full mb-4 inline-block">Milestone</span>
              <h2 className="text-3xl font-bold">National Service Award Ceremony</h2>
            </div>
          </div>
        </Reveal>

        {/* Masonry Grid */}
        <div className="mb-32">
          <Reveal>
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
              <Camera className="text-amber-600" />
              Honor Gallery
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {galleryImages.map((img, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div 
                  className={`relative overflow-hidden rounded-3xl cursor-pointer group ${
                    i === 0 ? "md:col-span-2 aspect-video" : "aspect-square"
                  }`}
                  onClick={() => setLightbox({ isOpen: true, index: i })}
                >
                  <Image src={img} alt="Achievement moment" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-sm font-bold uppercase tracking-widest">Preview</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Award Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, i) => (
            <Reveal key={achievement.id} delay={i * 0.1}>
              <div className="bg-[#fafafa] p-10 rounded-[40px] border border-gray-100 flex flex-col h-full hover:border-amber-500 transition-colors">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                  <Award className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-3xl font-bold text-black mb-4">{achievement.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-8 grow">{achievement.description}</p>
                <div className="pt-8 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm font-bold text-gray-400 uppercase tracking-widest">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    {achievement.issuedBy}
                  </div>
                  <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                    {achievement.issuedDate}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <ImageLightbox 
        images={galleryImages} 
        isOpen={lightbox.isOpen} 
        initialIndex={lightbox.index} 
        onClose={() => setLightbox({ ...lightbox, isOpen: false })} 
      />
    </main>
  );
}
