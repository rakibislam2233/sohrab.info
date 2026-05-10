"use client";
import React, { useState } from "react";
import { Award, Camera, CheckCircle } from "lucide-react";
import Image from "next/image";
import PageBanner from "../../components/ui/PageBanner";
import Reveal from "../../components/ui/Reveal";
import PhotoGallery from "../../components/ui/PhotoGallery";

const achievements = [
  {
    id: "1",
    title: "National Service Award",
    description:
      "Highest recognition from Bangladesh Scouts for outstanding voluntary service.",
    issuedBy: "Bangladesh Scouts",
    issuedDate: "Aug 2020",
  },
  {
    id: "2",
    title: "Best Unit Leader Award",
    description:
      "Recognized for exceptional leadership of the Thakurgaon Govt. College Rover Scout Group.",
    issuedBy: "Thakurgaon Govt. College",
    issuedDate: "Jan 2020",
  },
];

const galleryImages = [
  {
    url: "https://lh3.googleusercontent.com/sitesv/AA5AbUA9cYkr2P43vNM2jN1qDBBB4KeMBPvJHEy5fg3vLKV1b6c2II6E3XQKTmRgjuqcRVJVIUGSV23-j6Ddo0ye3kXQfpsptNNgFNOcqm0IPyZBkc58yOXUuenRx523Pi1PsKzIVWQnt5gyrb70dkZT_N9hvBCyP7Z09_qcvG8y-2tPUwVXPj2LrpVT=w16383",
    caption: "Receiving National Award",
    category: "Scout",
  },
  {
    url: "https://images.unsplash.com/photo-1578574515318-de9205d6a9a4?auto=format&fit=crop&q=80&w=1000",
    caption: "Certificate presentation ceremony",
    category: "Academic",
  },
  {
    url: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=1000",
    caption: "Best Unit Leader trophy",
    category: "Leadership",
  },
  {
    url: "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?auto=format&fit=crop&q=80&w=1000",
    caption: "Honorary badge distribution",
    category: "Service",
  },
  {
    url: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=1000",
    caption: "Community recognition event",
    category: "Public",
  },
];

const AchievementsPage = () => {
  return (
    <main className="min-h-screen bg-white pb-24">
      <PageBanner
        title="Achievements"
        subtitle="Recognition of excellence. A collection of awards and honors for social service, scouting, and professional impact."
        badge="Honored & Recognized"
        icon={Award}
      />

      <div className="container mx-auto px-4 mt-16">
        {/* Gallery Section - Vertical Layout */}
        <section className="mb-24">
          <Reveal>
            <div className="flex flex-col items-start mb-10">
              <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-2">
                Honor Gallery
              </span>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <Camera className="text-amber-600" size={20} />
                Moments of Pride
              </h2>
            </div>
          </Reveal>

          <PhotoGallery images={galleryImages} />
        </section>

        {/* Award Cards Section */}
        <section>
          <Reveal>
            <div className="flex flex-col items-start mb-10">
              <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-2">
                Recognition
              </span>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <Award className="text-amber-600" size={20} />
                Major Awards
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, i) => (
              <Reveal key={achievement.id} delay={i * 0.1}>
                <div className="bg-white p-6 rounded border border-gray-100 flex flex-col h-full hover:border-amber-500 transition-all duration-500">
                  <div className="w-12 h-12 bg-amber-50 rounded flex items-center justify-center mb-5 border border-amber-100">
                    <Award className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 grow">
                    {achievement.description}
                  </p>

                  <div className="pt-5 border-t border-gray-50 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-amber-600">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      {achievement.issuedBy}
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                      {achievement.issuedDate}
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

export default AchievementsPage;
