"use client";
import React from "react";
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
import Reveal from "../ui/Reveal";

interface Story {
  title: string;
  destination: string;
  date: string;
  image: string;
  content: string;
}

interface TravelDetailClientProps {
  story: Story;
}

const TravelDetailClient: React.FC<TravelDetailClientProps> = ({ story }) => {
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

export default TravelDetailClient;
