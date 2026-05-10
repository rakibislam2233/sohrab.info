"use client";
import React from "react";
import Reveal from "../ui/Reveal";
import PhotoGallery from "../ui/PhotoGallery";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&q=80&w=1000",
    caption: "Mountain Expedition",
    category: "Adventure",
  },
  {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1000",
    caption: "National Jamboree",
    category: "Scouting",
  },
  {
    url: "https://images.unsplash.com/photo-1551632432-c735e8299291?auto=format&fit=crop&q=80&w=1000",
    caption: "Field Reporting",
    category: "Journalism",
  },
  {
    url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1000",
    caption: "Road Trip",
    category: "Travel",
  },
  {
    url: "https://images.unsplash.com/photo-1526660690293-bcd32dc3b123?auto=format&fit=crop&q=80&w=1000",
    caption: "Strategy Meeting",
    category: "Leadership",
  },
  {
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000",
    caption: "Community Workshop",
    category: "Social Impact",
  },
];

export default function ActionMomentGallery() {
  return (
    <section className="py-20 bg-[#fafafa]">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-gray-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">
              Visual Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Capturing Life's Essence
            </h2>
            <div className="w-12 h-1 bg-black rounded-full"></div>
          </div>
        </Reveal>

        <PhotoGallery images={galleryImages} />

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
