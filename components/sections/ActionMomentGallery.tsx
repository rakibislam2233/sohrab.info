"use client";
import React from "react";
import Image from "next/image";
import { Camera, Maximize2 } from "lucide-react";
import Reveal from "../ui/Reveal";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&q=80&w=1000",
    title: "Mountain Expedition",
    category: "Adventure",
    span: "col-span-1 row-span-2",
  },
  {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1000",
    title: "National Jamboree",
    category: "Scouting",
    span: "col-span-2 row-span-1",
  },
  {
    url: "https://images.unsplash.com/photo-1551632432-c735e8299291?auto=format&fit=crop&q=80&w=1000",
    title: "Field Reporting",
    category: "Journalism",
    span: "col-span-1 row-span-1",
  },
  {
    url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1000",
    title: "Road Trip",
    category: "Travel",
    span: "col-span-1 row-span-1",
  },
];

export default function ActionMomentGallery() {
  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-gray-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">
              Action Moments
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Capturing Life's Essence
            </h2>
            <div className="w-12 h-1 bg-black rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px] md:h-[800px]">
          {galleryImages.map((image, idx) => (
            <Reveal key={idx} delay={idx * 0.1} className={image.span}>
              <div className="group relative w-full h-full overflow-hidden rounded-2xl bg-gray-200 cursor-pointer">
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-2 block">
                      {image.category}
                    </span>
                    <h3 className="text-white text-xl font-bold mb-4">
                      {image.title}
                    </h3>
                    <div className="size-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                      <Maximize2 size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.5}>
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm font-medium italic">
              "Photography is the story I fail to put into words."
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
