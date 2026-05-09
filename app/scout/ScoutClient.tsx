"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, MapPin, Calendar, Camera } from "lucide-react";
import Reveal from "../../components/ui/Reveal";
import ImageLightbox from "../../components/ui/ImageLightbox";
import PageBanner from "../../components/ui/PageBanner";

const scoutActivities = [
  {
    id: "1",
    title: "Rover Scout Leader",
    description:
      "Leading the Rover Scout team in coordinating social service events, awareness campaigns, and community projects.",
    image:
      "https://lh3.googleusercontent.com/sitesv/AA5AbUA49r2u2zriZ8SwgDWca3Pn_Ssq5qcxjyI5Z-VRjqPfVFnO9oticCL6Fo_fYESwiC436s6hMvT09u2L7FVd7K9ke3c0l8YjAVBas7JTEC_ssTNMsAF-gVqx0m6fCpuJNjgi8LbkDyPtJJpSg6ueoJ0FKF2ZF4JAZHixVLF1XrocQMM3_BzTRjp-=w16383",
    eventDate: "2020-08-16",
    location: "Thakurgaon",
    rank: "Rover Scout Leader",
  },
  {
    id: "2",
    title: "National Vitamin A Plus Campaign",
    description:
      "Coordination of student volunteers for the national nutrition program.",
    image:
      "https://lh3.googleusercontent.com/sitesv/AA5AbUBC3eDX-izt7AFNwcnl1yMjiL0xDONAbxgxWGftORflHuqlp2xxN7gkS0rIDBYyNxLBuqVAMsgZfIUNZjyIkNNoBgHl4l24jRbRA2rsdO8pjq0I2plYhpTCkZmOiDzMns1Onp4ttUy2fxKF2Kqu9u3m-gb5ygDrZWVyR0tYEbeI4LCq9kJO0aNtZx1foPBrj_Z-HNL9r1uCkK02eOzcaco_OFEUmoj8vuCW3k=w1280",
    eventDate: "2020-01-11",
    location: "Thakurgaon",
    rank: null,
  },
];

const galleryImages = [
  "https://lh3.googleusercontent.com/sitesv/AA5AbUA49r2u2zriZ8SwgDWca3Pn_Ssq5qcxjyI5Z-VRjqPfVFnO9oticCL6Fo_fYESwiC436s6hMvT09u2L7FVd7K9ke3c0l8YjAVBas7JTEC_ssTNMsAF-gVqx0m6fCpuJNjgi8LbkDyPtJJpSg6ueoJ0FKF2ZF4JAZHixVLF1XrocQMM3_BzTRjp-=w16383",
  "https://lh3.googleusercontent.com/sitesv/AA5AbUAVxk0gLpJKeeGL2iOivcsWizHT8T1crl7Fcet-S6SnwX4VJT8G3HWv8OQLBjhT6y3DYBO0aVfu_xrbJ00VCy8_WlZhucnOj7A0Fe_H0Ar7afV4hRMq_PkbOFrOnf3f1dQI7mdy-aPAggfoULnaJsxfclii6vwA3AFEQHFBy5-m7vqHjq4RMS_a0wOy4R_SppZI18NUwH2CUT75_CvNuUGUscvAJEw8czpI=w1280",
  "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=1000",
];

export default function ScoutClient() {
  const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 });

  return (
    <main className="min-h-screen bg-white pt-0 pb-20">
      <PageBanner
        title="Scouting"
        badge="Rover Scout Leader"
        themeColor="bg-[#f0f9f1]"
        textColor="text-[#2d4a31]"
      />
      <div className="container mx-auto px-6 mt-12">
        {/* Action Moments - Beautiful varied grid */}
        <div className="mb-20">
          <Reveal>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
              <Camera className="text-blue-600" size={20} />
              Action Moments
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {galleryImages.map((img, i) => (
              <Reveal key={i} delay={i * 0.1} className={
                i === 0 ? "md:col-span-7" : 
                i === 1 ? "md:col-span-5" : 
                i === 2 ? "md:col-span-5" : 
                "md:col-span-7"
              }>
                <div
                  className={`relative overflow-hidden rounded cursor-pointer group border border-gray-100 aspect-16/10`}
                  onClick={() => setLightbox({ isOpen: true, index: i })}
                >
                  <Image
                    src={img}
                    alt="Scout moment"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest">
                      Preview
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scoutActivities.map((activity, idx) => (
            <Reveal key={activity.id} delay={idx * 0.1}>
              <div className="group border border-gray-100 rounded overflow-hidden bg-white hover:border-blue-600 transition-colors">
                <div className="relative aspect-16/10">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-2">
                      <MapPin size={12} /> {activity.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar size={12} /> {activity.eventDate}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <ImageLightbox
        images={galleryImages}
        isOpen={lightbox.isOpen}
        initialIndex={lightbox.index}
        onClose={() => setLightbox({ ...lightbox, isOpen: false })}
      />
    </main>
  );
}
