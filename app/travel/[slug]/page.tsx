"use client";
import React from "react";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Camera,
  Share2,
  Compass,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "../../../components/ui/Reveal";

const TravelDetail = () => {
  const { slug } = useParams();

  // Demo data matching the slugs in TravelPage
  const story = {
    title:
      slug === "suryapuri-mango-tree"
        ? "The Ancient Suryapuri Mango Tree"
        : slug === "dinajpur-temples"
          ? "Historical Temples of Dinajpur"
          : "Serene Tea Gardens of Sylhet",
    destination:
      slug === "suryapuri-mango-tree"
        ? "Thakurgaon, BD"
        : slug === "dinajpur-temples"
          ? "Dinajpur, BD"
          : "Sylhet, BD",
    date: slug === "suryapuri-mango-tree" ? "Nov 2023" : "May 2023",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200",
    content: `
      <p className="mb-6">Traveling is not just about reaching a destination; it's about the stories we collect along the way. My journey to northern Bangladesh brought me face to face with history and nature in its purest form.</p>
      
      <h2 className="text-2xl font-bold mb-4 text-gray-900">A Living Legend</h2>
      <p className="mb-6">The Suryapuri Mango Tree in Baliadangi is more than just a tree. It's a colossal living entity that spans over two bighas of land. Walking under its massive canopy feels like stepping into a different world where time has stood still for over 200 years.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="relative aspect-video rounded-xl overflow-hidden shadow-md">
          <Image src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=800" alt="Tree Detail" fill className="object-cover" />
        </div>
        <div className="relative aspect-video rounded-xl overflow-hidden shadow-md">
          <Image src="https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=800" alt="Temple Art" fill className="object-cover" />
        </div>
      </div>

      <p className="mb-6">The intricate network of branches creates a natural cathedral. Local legends say the tree was planted during the British era, and it continues to bear thousands of mangoes every season, serving as a vital part of the local economy and culture.</p>

      <h2 className="text-2xl font-bold mb-4 text-gray-900">Through the Lens</h2>
      <p className="mb-6">Capturing the scale of this natural wonder was a challenge. I spent hours waiting for the right light to filter through the leaves, hoping to translate even a fraction of its majesty into a photograph.</p>
    `,
  };

  return (
    <main className="min-h-screen bg-white pb-24">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <Image
          src={story.image}
          alt={story.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        <div className="absolute inset-0 flex flex-col justify-end container mx-auto px-4 pb-12">
          <Reveal>
            <Link
              href="/travel"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6 text-sm font-medium"
            >
              <ArrowLeft size={16} /> Back to Travel Stories
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex items-center gap-2 px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 w-fit">
              <Compass size={12} className="animate-spin-slow" /> Adventure Log
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-4xl leading-tight">
              {story.title}
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-gray-400" />{" "}
                {story.destination}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} className="text-gray-400" /> {story.date}
              </span>
              <span className="flex items-center gap-2">
                <Camera size={16} className="text-gray-400" /> Photography
                Journey
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 mt-12 md:mt-20">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div
              className="prose prose-lg prose-neutral max-w-none text-gray-600 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: story.content }}
            />
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between">
              <div className="text-gray-400 text-sm italic">
                Published in Travel Diaries, {story.date}
              </div>
              <button className="p-2 rounded-full bg-gray-100 text-black hover:bg-black hover:text-white transition-all duration-300">
                <Share2 size={20} />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
};

export default TravelDetail;
