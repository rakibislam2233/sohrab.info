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

        {/* Featured Video Section - "Filmed instead" design */}
        <div className="mb-32">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-black mb-6 italic tracking-tight">Filmed instead.</h2>
                <p className="text-gray-500 text-xl leading-relaxed">
                  Moments of honor and recognition, captured as history was made.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative aspect-video rounded-[40px] overflow-hidden group cursor-pointer bg-gray-50 border border-gray-100 shadow-sm">
              <Image 
                src="https://lh3.googleusercontent.com/sitesv/AA5AbUA9cYkr2P43vNM2jN1qDBBB4KeMBPvJHEy5fg3vLKV1b6c2II6E3XQKTmRgjuqcRVJVIUGSV23-j6Ddo0ye3kXQfpsptNNgFNOcqm0IPyZBkc58yOXUuenRx523Pi1PsKzIVWQnt5gyrb70dkZT_N9hvBCyP7Z09_qcvG8y-2tPUwVXPj2LrpVT=w16383"
                alt="Achievement Moment"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute top-8 left-8 flex gap-3">
                <span className="px-4 py-1.5 bg-amber-500/20 backdrop-blur-md border border-amber-500/30 text-amber-500 text-[10px] font-black uppercase tracking-[0.2em] rounded-full">Honors</span>
                <span className="px-4 py-1.5 bg-white/40 backdrop-blur-md border border-white/20 text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full">Ceremony</span>
              </div>

              <div className="absolute top-8 right-8 px-3 py-1 bg-white/60 backdrop-blur-md rounded-lg text-xs font-mono font-bold tracking-widest text-black">
                10:30
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-white/30 shadow-2xl">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>

              <div className="absolute bottom-10 left-10 right-10">
                <h3 className="text-3xl md:text-5xl font-black mb-4 text-white group-hover:text-amber-400 transition-colors leading-tight">
                  National Service Award Ceremony
                </h3>
              </div>
            </div>
          </Reveal>
        </div>

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
