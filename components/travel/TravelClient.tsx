"use client";
import React from "react";
import { Camera, MapPin, Calendar, Compass, ArrowRight, Map } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "../ui/PageBanner";
import Reveal from "../ui/Reveal";
import PhotoGallery from "../ui/PhotoGallery";
import VideoCarousel from "../sections/VideoCarousel";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
}

interface TravelStory {
  id: string;
  title: string;
  slug: string;
  destination: string;
  travelDate: string;
  excerpt: string;
  coverImage: string;
}

interface GalleryImage {
  url: string;
  caption: string;
  category: string;
}

interface TravelClientProps {
  videos: Video[];
  travelStories: TravelStory[];
  galleryImages: GalleryImage[];
}

const TravelClient: React.FC<TravelClientProps> = ({ videos, travelStories, galleryImages }) => {
  return (
    <main className="min-h-screen bg-white pb-24">
      <PageBanner
        title="Travel"
        subtitle="Exploring the beauty of 64 districts. Capturing the diverse landscapes and cultures of Bangladesh."
        badge="Avid Explorer"
        icon={Map}
      />

      <div className="container mx-auto px-4 mt-16">
        {/* Gallery Section */}
        <section className="mb-20">
          <Reveal>
            <div className="flex flex-col items-start mb-10">
              <span className="text-black font-bold uppercase tracking-[0.2em] text-[10px] mb-2 border-l-2 border-black pl-3">
                Through My Lens
              </span>
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                <Camera className="text-black" size={20} />
                Visual Journey
              </h2>
            </div>
          </Reveal>

          <PhotoGallery images={galleryImages} />
        </section>

        {/* Video Section */}
        <section className="mb-20">
          <Reveal>
            <VideoCarousel videos={videos} />
          </Reveal>
        </section>

        {/* Story Cards Section */}
        <section>
          <Reveal>
            <div className="flex flex-col items-start mb-10">
              <span className="text-black font-bold uppercase tracking-[0.2em] text-[10px] mb-2 border-l-2 border-black pl-3">
                Travel Logs
              </span>
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                <Compass className="text-black" size={20} />
                Recent Explorations
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {travelStories.map((story, i) => (
              <Reveal key={story.id} delay={i * 0.1}>
                <Link
                  href={`/travel/${story.slug}`}
                  className="group block h-full"
                >
                  <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-none transition-all duration-500 hover:border-black flex flex-col h-full">
                    <div className="relative aspect-16/10 overflow-hidden">
                      <Image
                        src={story.coverImage}
                        alt={story.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-2 py-0.5 bg-white/90 backdrop-blur-md text-black text-[8px] font-bold uppercase tracking-wider rounded-md border border-gray-100">
                          <MapPin size={10} /> {story.destination}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col grow">
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <Calendar size={12} /> {story.travelDate}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-black transition-colors leading-tight">
                        {story.title}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed mb-6 line-clamp-2">
                        {story.excerpt}
                      </p>

                      <div className="mt-auto pt-4 border-t border-gray-50 flex items-center text-black text-[10px] font-bold group-hover:gap-3 gap-2 transition-all uppercase tracking-widest">
                        Read Story <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default TravelClient;
