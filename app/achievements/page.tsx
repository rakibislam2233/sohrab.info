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
      <div className="container mx-auto px-6 mt-12">
        {/* Featured Video Section - "Filmed instead" design */}
        <div className="mb-16">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-8">
              <div className="max-w-xl">
                <h2 className="text-2xl md:text-4xl font-black mb-2 italic tracking-tight">Filmed instead.</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Moments of honor and recognition, captured as history was made.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative aspect-video rounded overflow-hidden group cursor-pointer bg-gray-50 border border-gray-100 shadow-sm">
              <Image 
                src="https://lh3.googleusercontent.com/sitesv/AA5AbUA9cYkr2P43vNM2jN1qDBBB4KeMBPvJHEy5fg3vLKV1b6c2II6E3XQKTmRgjuqcRVJVIUGSV23-j6Ddo0ye3kXQfpsptNNgFNOcqm0IPyZBkc58yOXUuenRx523Pi1PsKzIVWQnt5gyrb70dkZT_N9hvBCyP7Z09_qcvG8y-2tPUwVXPj2LrpVT=w16383"
                alt="Achievement Moment"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 bg-amber-500/20 backdrop-blur-md border border-amber-500/30 text-amber-500 text-[8px] font-black uppercase tracking-[0.2em] rounded">Honors</span>
                <span className="px-3 py-1 bg-white/40 backdrop-blur-md border border-white/20 text-black text-[8px] font-black uppercase tracking-[0.2em] rounded">Ceremony</span>
              </div>

              <div className="absolute top-4 right-4 px-2 py-0.5 bg-white/60 backdrop-blur-md rounded text-[10px] font-mono font-bold tracking-widest text-black">
                10:30
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded flex items-center justify-center group-hover:scale-110 transition-transform border border-white/30 shadow-2xl">
                  <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl md:text-3xl font-black mb-2 text-white group-hover:text-amber-400 transition-colors leading-tight tracking-tight">
                  National Service Award Ceremony
                </h3>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Masonry Grid */}
        <div className="mb-16">
          <Reveal>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
              <Camera className="text-amber-600" size={20} />
              Honor Gallery
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {galleryImages.map((img, i) => (
              <Reveal key={i} delay={i * 0.1} className={
                i === 0 ? "md:col-span-8" : 
                i === 1 ? "md:col-span-4" : 
                i === 2 ? "md:col-span-4" : 
                "md:col-span-8"
              }>
                <div 
                  className={`relative overflow-hidden rounded cursor-pointer group border border-gray-100 aspect-video md:aspect-auto md:h-64`}
                  onClick={() => setLightbox({ isOpen: true, index: i })}
                >
                  <Image src={img} alt="Achievement moment" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest">Preview</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Award Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, i) => (
            <Reveal key={achievement.id} delay={i * 0.1}>
              <div className="bg-[#fafafa] p-6 rounded border border-gray-100 flex flex-col h-full hover:border-amber-500 transition-colors">
                <div className="w-10 h-10 bg-white rounded flex items-center justify-center mb-4 shadow-sm border border-gray-100">
                  <Award className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{achievement.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 grow">{achievement.description}</p>
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                    {achievement.issuedBy}
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">
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
