"use client"
import Reveal from "../ui/Reveal";
import { motion } from "framer-motion";
import { Compass, MapPin } from "lucide-react";
import Image from "next/image";

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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Travel Diaries</h2>
              <p className="text-lg text-gray-500">
                Exploring the hidden gems of Northern Bangladesh, capturing stories of nature and heritage.
              </p>
            </div>
            <div className="flex items-center gap-2 text-pink-600 font-bold uppercase tracking-widest text-sm cursor-pointer hover:translate-x-2 transition-transform">
              View All Stories <Compass className="w-5 h-5" />
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((dest, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="group cursor-pointer">
                <div className="relative aspect-4/3 mb-6 overflow-hidden rounded-3xl bg-gray-100">
                  <Image 
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-pink-600" />
                      {dest.name}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">{dest.name}</h3>
                <p className="text-gray-500">{dest.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
