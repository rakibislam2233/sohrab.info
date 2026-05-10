"use client";

import React from "react";
import Image from "next/image";
import { Compass, Calendar, MapPin, Award } from "lucide-react";
import PageBanner from "./ui/PageBanner";
import Reveal from "./ui/Reveal";
import MasonryGallery from "./ui/MasonryGallery";

const scoutActivities = [
  {
    id: "1",
    title: "Rover Scout Leader Training",
    description:
      "Participated in advanced leadership training for Rover Scouts, focusing on community development and emergency response.",
    image:
      "https://images.unsplash.com/photo-1526660690293-bcd32dc3b123?auto=format&fit=crop&q=80&w=1000",
    eventDate: "Nov 2021",
    location: "Dhaka, Bangladesh",
    rank: "Rover Scout Leader",
  },
  {
    id: "2",
    title: "National Scout Jamboree",
    description:
      "Represented Thakurgaon district at the National Scout Jamboree, engaging in various skill-building activities and cultural exchanges.",
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=1000",
    eventDate: "Jan 2019",
    location: "Gazipur, Bangladesh",
    rank: "District Representative",
  },
  {
    id: "3",
    title: "Community Clean-up Initiative",
    description:
      "Led a team of 50 scouts in a city-wide cleaning and waste management awareness campaign.",
    image:
      "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=1000",
    eventDate: "Mar 2020",
    location: "Thakurgaon",
    rank: "Group Leader",
  },
];

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1526660690293-bcd32dc3b123?auto=format&fit=crop&q=80&w=1000",
    caption: "Training camp session",
    category: "Training",
  },
  {
    url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=1000",
    caption: "Camping under the stars",
    category: "Jamboree",
  },
  {
    url: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=1000",
    caption: "Community service day",
    category: "Service",
  },
  {
    url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000",
    caption: "Scout parade at national day",
    category: "Event",
  },
  {
    url: "https://images.unsplash.com/photo-1508873696983-2dfd5898f0c3?auto=format&fit=crop&q=80&w=1000",
    caption: "Knots and pioneering workshop",
    category: "Skills",
  },
  {
    url: "https://images.unsplash.com/photo-1517164850339-61234907996a?auto=format&fit=crop&q=80&w=1000",
    caption: "First aid drill",
    category: "Emergency",
  },
];

const ScoutClient = () => {
  return (
    <main className="min-h-screen bg-white pb-24">
      <PageBanner
        title="Scouting"
        badge="Rover Scout Leader"
        themeColor="bg-pink-50"
        textColor="text-pink-900"
      />

      <div className="container mx-auto px-4 mt-16">
        {/* Gallery Section */}
        <section className="mb-24">
          <Reveal>
            <div className="flex flex-col items-start mb-12">
              <span className="text-pink-600 font-bold uppercase tracking-[0.2em] text-xs mb-3">
                Scout Life
              </span>
              <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Compass className="text-pink-600" size={24} />
                Activity Gallery
              </h2>
            </div>
          </Reveal>

          <MasonryGallery images={galleryImages} />
        </section>

        {/* Highlight Cards Section */}
        <section>
          <Reveal>
            <div className="flex flex-col items-start mb-12">
              <span className="text-pink-600 font-bold uppercase tracking-[0.2em] text-xs mb-3">
                Milestones
              </span>
              <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Award className="text-pink-600" size={24} />
                Scout Highlights
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {scoutActivities.map((activity, i) => (
              <Reveal key={activity.id} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-xl flex flex-col md:flex-row h-full">
                  <div className="relative w-full md:w-2/5 aspect-4/3 md:aspect-auto overflow-hidden">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 md:hidden">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-pink-600 text-[10px] font-bold uppercase tracking-wider rounded-lg border border-pink-100">
                        {activity.rank}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 md:w-3/5 flex flex-col justify-between">
                    <div>
                      <div className="hidden md:block mb-4">
                        <span className="px-3 py-1 bg-pink-50 text-pink-600 text-[10px] font-bold uppercase tracking-wider rounded-lg border border-pink-100">
                          {activity.rank}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors leading-tight">
                        {activity.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-4">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} className="text-pink-400" />{" "}
                          {activity.eventDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} className="text-pink-400" />{" "}
                          {activity.location}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ScoutClient;
