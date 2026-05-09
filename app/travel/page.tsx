"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { Compass, MapPin, Calendar, Camera } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../../components/ui/Reveal";
import ImageLightbox from "../../components/ui/ImageLightbox";
import PageBanner from "../../components/ui/PageBanner";

const stories = [
  { id: '1', title: 'Baliadangi Suryapuri Mango Tree', destination: 'Thakurgaon', travelDate: '2023-11-15', coverImage: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=1000' },
  { id: '2', title: 'Historical Temples of the North', destination: 'Dinajpur', travelDate: '2023-05-20', coverImage: 'https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=1000' },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1000"
];

export default function TravelPage() {
  const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 });

  return (
    <main className="min-h-screen bg-white pt-0 pb-20">
      <PageBanner 
        title="Travel" 
        badge="Explorer & Photographer"
        themeColor="bg-[#f0f7ff]"
        textColor="text-[#1c3d5a]"
      />
      <div className="container mx-auto px-6 mt-12">
        {/* Masonry Grid */}
        <div className="mb-16">
          <Reveal>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
              <Camera className="text-pink-600" size={20} />
              Visual Journey
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {galleryImages.map((img, i) => (
              <Reveal key={i} delay={i * 0.1} className={
                i === 0 ? "md:col-span-8" : 
                i === 1 ? "md:col-span-4" : 
                i === 2 ? "md:col-span-4" : 
                i === 3 ? "md:col-span-4" :
                "md:col-span-4"
              }>
                <div 
                  className={`relative overflow-hidden rounded cursor-pointer group border border-gray-100 aspect-video md:aspect-auto md:h-64`}
                  onClick={() => setLightbox({ isOpen: true, index: i })}
                >
                  <Image src={img} alt="Travel moment" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest">Preview</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Stories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stories.map((story, i) => (
            <Reveal key={story.id} delay={i * 0.1}>
              <div className="group bg-[#fafafa] rounded overflow-hidden border border-gray-100 hover:border-pink-500 transition-colors">
                <div className="relative aspect-16/10">
                  <Image src={story.coverImage} alt={story.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-2"><MapPin size={12} /> {story.destination}</span>
                    <span className="flex items-center gap-2"><Calendar size={12} /> {story.travelDate}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-pink-600 transition-colors leading-tight">{story.title}</h3>
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
