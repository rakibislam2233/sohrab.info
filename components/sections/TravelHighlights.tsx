"use client"
import { Compass, MapPin } from "lucide-react";
import Image from "next/image";
import Reveal from "../ui/Reveal";

const destinations = [
  { 
    name: "Baliadangi", 
    desc: "Home to the 200-year-old Suryapuri Mango Tree.",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=600"
  },
  { 
    name: "Kantajew Temple", 
    desc: "A masterpiece of terracotta architecture.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=600"
  },
  { 
    name: "Northern Plains", 
    desc: "Exploring the emerging tea culture of Bangladesh.",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=600"
  }
];

export default function TravelHighlights() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-5 sm:gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black mb-2 uppercase tracking-tighter">Travel Diaries</h2>
              <p className="text-sm text-gray-500 font-medium max-w-prose">
                Exploring the hidden gems of Northern Bangladesh, capturing stories of nature and heritage.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-pink-600 font-black uppercase tracking-widest text-[10px] cursor-pointer hover:translate-x-1 transition-transform">
              View All Stories <Compass className="w-4 h-4" />
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {destinations.map((dest, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="group cursor-pointer">
                <div className="relative aspect-4/3 mb-3 overflow-hidden rounded bg-gray-100 border border-gray-100">
                  <Image 
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[8px] font-bold uppercase tracking-widest inline-flex items-center gap-1.5 border border-gray-100">
                      <MapPin className="w-2.5 h-2.5 text-pink-600" />
                      {dest.name}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-black mb-1">{dest.name}</h3>
                <p className="text-gray-500 text-sm">{dest.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
