"use client";
import React from "react";
import {
  ArrowLeft,
  Calendar,
  Building2,
  MapPin,
  Share2,
  Heart,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "../ui/Reveal";

interface Work {
  title: string;
  organization: string;
  date: string;
  location: string;
  image: string;
  content: string;
}

interface VoluntaryDetailClientProps {
  work: Work;
}

const VoluntaryDetailClient: React.FC<VoluntaryDetailClientProps> = ({ work }) => {
  return (
    <main className="min-h-screen bg-white pb-24">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
        <Image
          src={work.image}
          alt={work.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex flex-col justify-end container mx-auto px-4 pb-12">
          <Reveal>
            <Link
              href="/voluntary-work"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6 text-sm font-medium"
            >
              <ArrowLeft size={16} /> Back to Voluntary Work
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex items-center gap-2 px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 w-fit">
              <Heart size={12} fill="white" /> Impact Project
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-4xl leading-tight">
              {work.title}
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm">
              <span className="flex items-center gap-2">
                <Building2 size={16} className="text-gray-400" />{" "}
                {work.organization}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} className="text-gray-400" /> {work.date}
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-gray-400" /> {work.location}
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
              dangerouslySetInnerHTML={{ __html: work.content }}
            />
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-black font-bold">
                <Heart size={20} fill="currentColor" />
                Making a difference, one step at a time.
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

export default VoluntaryDetailClient;
