"use client";
import React from "react";
import { Camera, MapPin, Calendar, Compass, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "../../components/ui/PageBanner";
import Reveal from "../../components/ui/Reveal";
import MasonryGallery from "../../components/ui/MasonryGallery";

const travelStories = [
  {
    id: "1",
    title: "The Ancient Suryapuri Mango Tree",
    slug: "suryapuri-mango-tree",
    destination: "Thakurgaon, BD",
    travelDate: "Nov 2023",
    excerpt:
      "Visiting the largest and oldest mango tree in Asia, a living monument of nature.",
    coverImage:
      "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "2",
    title: "Historical Temples of Dinajpur",
    slug: "dinajpur-temples",
    destination: "Dinajpur, BD",
    travelDate: "May 2023",
    excerpt:
      "Exploring the intricate terracotta art and spiritual history of northern Bangladesh.",
    coverImage:
      "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "3",
    title: "Serene Tea Gardens of Sylhet",
    slug: "sylhet-tea-gardens",
    destination: "Sylhet, BD",
    travelDate: "Feb 2024",
    excerpt:
      "A peaceful retreat into the emerald hills and refreshing tea estates of the northeast.",
    coverImage:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000",
  },
];

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=1000",
    caption: "Oldest mango tree in Asia",
    category: "Nature",
  },
  {
    url: "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=1000",
    caption: "Terracotta temple details",
    category: "History",
  },
  {
    url: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=1000",
    caption: "Local market vibes",
    category: "Street",
  },
  {
    url: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000",
    caption: "Sylhet tea gardens at dawn",
    category: "Landscape",
  },
  {
    url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1000",
    caption: "Road trip through the hills",
    category: "Travel",
  },
  {
    url: "https://images.unsplash.com/photo-1500835595327-8307e77032a3?auto=format&fit=crop&q=80&w=1000",
    caption: "Sunset at the river",
    category: "Nature",
  },
  {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1000",
    caption: "Camping in the wild",
    category: "Adventure",
  },
];

const TravelPage = () => {
  return (
    <main className="min-h-screen bg-white pb-24">
      <PageBanner
        title="Travel Stories"
        badge="Explorer & Storyteller"
        themeColor="bg-pink-50"
        textColor="text-pink-900"
      />

      <div className="container mx-auto px-4 mt-16">
        {/* Gallery Section */}
        <section className="mb-24">
          <Reveal>
            <div className="flex flex-col items-start mb-12">
              <span className="text-pink-600 font-bold uppercase tracking-[0.2em] text-xs mb-3">
                Through My Lens
              </span>
              <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Camera className="text-pink-600" size={24} />
                Visual Journey
              </h2>
            </div>
          </Reveal>

          <MasonryGallery images={galleryImages} />
        </section>

        {/* Story Cards Section */}
        <section>
          <Reveal>
            <div className="flex flex-col items-start mb-12">
              <span className="text-pink-600 font-bold uppercase tracking-[0.2em] text-xs mb-3">
                Travel Logs
              </span>
              <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Compass className="text-pink-600" size={24} />
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
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 flex flex-col h-full">
                    <div className="relative aspect-16/10 overflow-hidden">
                      <Image
                        src={story.coverImage}
                        alt={story.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-pink-600 text-[10px] font-bold uppercase tracking-wider rounded-lg border border-pink-100 flex items-center gap-1">
                          <MapPin size={10} /> {story.destination}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col grow">
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <Calendar size={12} /> {story.travelDate}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors leading-tight">
                        {story.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                        {story.excerpt}
                      </p>

                      <div className="mt-auto pt-4 border-t border-gray-50 flex items-center text-pink-600 text-sm font-bold group-hover:gap-3 gap-2 transition-all">
                        Read Story <ArrowRight size={16} />
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

export default TravelPage;
