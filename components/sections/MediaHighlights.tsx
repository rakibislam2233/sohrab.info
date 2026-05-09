"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { Play, ArrowRight, Video } from "lucide-react";
import Reveal from "../ui/Reveal";

const galleryImages = [
  "https://lh3.googleusercontent.com/sitesv/AA5AbUA8r1-w-qKkLg6V0U2-M1G-v39_z8f9z8f9z8f9z8f9z8f9z8f9z8f9z8f9z8f9z8f9z8f9z8f9z=w1280",
  "https://lh3.googleusercontent.com/sitesv/AA5AbUAVxk0gLpJKeeGL2iOivcsWizHT8T1crl7Fcet-S6SnwX4VJT8G3HWv8OQLBjhT6y3DYBO0aVfu_xrbJ00VCy8_WlZhucnOj7A0Fe_H0Ar7afV4hRMq_PkbOFrOnf3f1dQI7mdy-aPAggfoULnaJsxfclii6vwA3AFEQHFBy5-m7vqHjq4RMS_a0wOy4R_SppZI18NUwH2CUT75_CvNuUGUscvAJEw8czpI=w1280",
  "https://lh3.googleusercontent.com/sitesv/AA5AbUBC3eDX-izt7AFNwcnl1yMjiL0xDONAbxgxWGftORflHuqlp2xxN7gkS0rIDBYyNxLBuqVAMsgZfIUNZjyIkNNoBgHl4l24jRbRA2rsdO8pjq0I2plYhpTCkZmOiDzMns1Onp4ttUy2fxKF2Kqu9u3m-gb5ygDrZWVyR0tYEbeI4LCq9kJO0aNtZx1foPBrj_Z-HNL9r1uCkK02eOzcaco_OFEUmoj8vuCW3k=w1280",
  "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=1000"
];

const videos = [
  { 
    id: 1, 
    title: "Boga Lake Tour Vlog | Exploring the Beauty of Bandarban", 
    category: "LAKE", 
    duration: "10:41", 
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1600",
    isFeatured: true 
  },
  { 
    id: 2, 
    title: "The Keokradong | Exploring the Highest Peak", 
    category: "MOUNTAIN", 
    duration: "22:13", 
    thumbnail: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000",
    isFeatured: false 
  },
  { 
    id: 3, 
    title: "Sonargaon | A Day Trip to the Ancient Capital", 
    category: "HISTORY", 
    duration: "11:46", 
    thumbnail: "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=1000",
    isFeatured: false 
  }
];

export default function MediaHighlights() {
  return (
    <section className="bg-white py-16 text-black">
      <div className="container mx-auto px-6">
        
        {/* Gallery Grid */}
        <div className="mb-20">
          <Reveal>
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-2xl md:text-4xl font-black mb-2 uppercase tracking-tighter">Action Moments</h2>
                <p className="text-gray-500 text-sm">Capturing stories through the lens.</p>
              </div>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className={`relative rounded overflow-hidden group cursor-pointer border border-gray-100 ${
                  i === 0 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-square"
                }`}>
                  <Image src={img} alt="Gallery" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Video Section */}
        <div>
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
              <div className="max-w-xl">
                <h2 className="text-2xl md:text-4xl font-black mb-4 italic tracking-tight">Filmed instead.</h2>
                <p className="text-gray-500 text-base leading-relaxed">
                  Some places are better understood in motion. A few of those made it to the edit.
                </p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded hover:bg-black hover:text-white transition-all group">
                <Video size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">Watch more on YouTube</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Featured Video */}
            <div className="lg:col-span-2">
              {videos.filter(v => v.isFeatured).map(video => (
                <Reveal key={video.id}>
                  <div className="relative aspect-16/10 rounded overflow-hidden group cursor-pointer bg-gray-50 border border-gray-100 shadow-sm">
                    <Image src={video.thumbnail} alt={video.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                    
                    {/* Overlays */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 bg-amber-500/20 backdrop-blur-md border border-amber-500/30 text-amber-500 text-[9px] font-black uppercase tracking-[0.2em] rounded">Featured</span>
                      <span className="px-3 py-1 bg-white/40 backdrop-blur-md border border-white/20 text-black text-[9px] font-black uppercase tracking-[0.2em] rounded">{video.category}</span>
                    </div>

                    <div className="absolute top-4 right-4 px-2 py-0.5 bg-white/60 backdrop-blur-md rounded text-[10px] font-mono font-bold tracking-widest text-black">
                      {video.duration}
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-white/30 shadow-2xl">
                        <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                      </div>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-xl md:text-3xl font-black mb-2 text-white group-hover:text-amber-400 transition-colors leading-tight">
                        {video.title}
                      </h3>
                      <div className="flex items-center gap-3 text-white/60 text-[10px] font-bold tracking-widest uppercase">
                        <span>Sohrab Hossan</span>
                        <div className="w-1 h-1 rounded-full bg-white/30" />
                        <span>2023</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Small Videos */}
            <div className="flex flex-col gap-6">
              {videos.filter(v => !v.isFeatured).map((video, i) => (
                <Reveal key={video.id} delay={i * 0.2}>
                  <div className="relative aspect-video rounded overflow-hidden group cursor-pointer bg-gray-50 border border-gray-100 shadow-sm">
                    <Image src={video.thumbnail} alt={video.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-0.5 bg-white/20 backdrop-blur-md text-white text-[8px] font-black uppercase tracking-widest rounded">{video.category}</span>
                    </div>

                    <div className="absolute top-3 right-3 text-[9px] font-mono font-bold text-white/60">
                      {video.duration}
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-white/30 opacity-0 group-hover:opacity-100">
                        <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-tight">
                        {video.title}
                      </h4>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
