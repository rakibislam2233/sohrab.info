"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Calendar, Building2, Play, Camera } from "lucide-react";
import Image from "next/image";
import Reveal from "../../components/ui/Reveal";
import ImageLightbox from "../../components/ui/ImageLightbox";
import PageBanner from "../../components/ui/PageBanner";

const works = [
  { id: '1', title: 'Winter Relief Distribution', description: 'Organized and participated in a large-scale blanket distribution for the elderly and underprivileged people in Thakurgaon.', organization: 'Thakurgaon Govt. College Rover Scout Group', date: '2020-01-14', image: 'https://lh3.googleusercontent.com/sitesv/AA5AbUBC3eDX-izt7AFNwcnl1yMjiL0xDONAbxgxWGftORflHuqlp2xxN7gkS0rIDBYyNxLBuqVAMsgZfIUNZjyIkNNoBgHl4l24jRbRA2rsdO8pjq0I2plYhpTCkZmOiDzMns1Onp4ttUy2fxKF2Kqu9u3m-gb5ygDrZWVyR0tYEbeI4LCq9kJO0aNtZx1foPBrj_Z-HNL9r1uCkK02eOzcaco_OFEUmoj8vuCW3k=w1280' },
  { id: '2', title: 'Environmental Service Campaign', description: 'Actively involved in tree plantation campaigns across Thakurgaon district to promote ecological balance.', organization: 'Bangladesh Scouts', date: '2020-07-20', image: 'https://lh3.googleusercontent.com/sitesv/AA5AbUAVxk0gLpJKeeGL2iOivcsWizHT8T1crl7Fcet-S6SnwX4VJT8G3HWv8OQLBjhT6y3DYBO0aVfu_xrbJ00VCy8_WlZhucnOj7A0Fe_H0Ar7afV4hRMq_PkbOFrOnf3f1dQI7mdy-aPAggfoULnaJsxfclii6vwA3AFEQHFBy5-m7vqHjq4RMS_a0wOy4R_SppZI18NUwH2CUT75_CvNuUGUscvAJEw8czpI=w1280' },
];

const galleryImages = [
  "https://lh3.googleusercontent.com/sitesv/AA5AbUBC3eDX-izt7AFNwcnl1yMjiL0xDONAbxgxWGftORflHuqlp2xxN7gkS0rIDBYyNxLBuqVAMsgZfIUNZjyIkNNoBgHl4l24jRbRA2rsdO8pjq0I2plYhpTCkZmOiDzMns1Onp4ttUy2fxKF2Kqu9u3m-gb5ygDrZWVyR0tYEbeI4LCq9kJO0aNtZx1foPBrj_Z-HNL9r1uCkK02eOzcaco_OFEUmoj8vuCW3k=w1280",
  "https://lh3.googleusercontent.com/sitesv/AA5AbUAVxk0gLpJKeeGL2iOivcsWizHT8T1crl7Fcet-S6SnwX4VJT8G3HWv8OQLBjhT6y3DYBO0aVfu_xrbJ00VCy8_WlZhucnOj7A0Fe_H0Ar7afV4hRMq_PkbOFrOnf3f1dQI7mdy-aPAggfoULnaJsxfclii6vwA3AFEQHFBy5-m7vqHjq4RMS_a0wOy4R_SppZI18NUwH2CUT75_CvNuUGUscvAJEw8czpI=w1280",
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1000"
];

export default function VoluntaryWorkPage() {
  const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 });

  return (
    <main className="min-h-screen bg-white pt-0 pb-20">
      <PageBanner 
        title="Voluntary Work" 
        badge="A Member of Bangladesh Scouts"
        themeColor="bg-[#fff0f0]"
        textColor="text-[#721c24]"
      />
      <div className="container mx-auto px-6 mt-24">

        {/* Featured Service Moment */}
        <Reveal delay={0.2}>
          <div className="relative aspect-video mb-32 rounded-[40px] overflow-hidden group bg-gray-100">
            <Image 
              src="https://lh3.googleusercontent.com/sitesv/AA5AbUBC3eDX-izt7AFNwcnl1yMjiL0xDONAbxgxWGftORflHuqlp2xxN7gkS0rIDBYyNxLBuqVAMsgZfIUNZjyIkNNoBgHl4l24jRbRA2rsdO8pjq0I2plYhpTCkZmOiDzMns1Onp4ttUy2fxKF2Kqu9u3m-gb5ygDrZWVyR0tYEbeI4LCq9kJO0aNtZx1foPBrj_Z-HNL9r1uCkK02eOzcaco_OFEUmoj8vuCW3k=w1280"
              alt="Service in Action"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <button className="w-24 h-24 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl">
                <Play className="w-8 h-8 text-black fill-black ml-1" />
              </button>
            </div>
            <div className="absolute bottom-10 left-10 text-white">
              <span className="text-xs font-bold bg-pink-600 px-4 py-2 rounded-full mb-4 inline-block">Humanitarian Service</span>
              <h2 className="text-3xl font-bold">Relief Distribution 2020</h2>
            </div>
          </div>
        </Reveal>

        {/* Masonry Grid */}
        <div className="mb-32">
          <Reveal>
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
              <Camera className="text-pink-600" />
              Impact Gallery
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div 
                  className={`relative overflow-hidden rounded-3xl cursor-pointer group ${
                    i === 2 ? "md:col-span-2 aspect-video" : "aspect-square"
                  }`}
                  onClick={() => setLightbox({ isOpen: true, index: i })}
                >
                  <Image src={img} alt="Voluntary moment" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-sm font-bold uppercase tracking-widest">Preview</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Work Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {works.map((work, i) => (
            <Reveal key={work.id} delay={i * 0.1}>
              <div className="group border border-gray-100 rounded-[40px] overflow-hidden bg-white hover:border-pink-600 transition-colors">
                <div className="relative aspect-16/10">
                  <Image src={work.image} alt={work.title} fill className="object-cover" />
                </div>
                <div className="p-10">
                  <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
                    <span className="flex items-center gap-2"><Building2 size={14} /> {work.organization}</span>
                    <span className="flex items-center gap-2"><Calendar size={14} /> {work.date}</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{work.title}</h3>
                  <p className="text-gray-500 text-lg leading-relaxed">{work.description}</p>
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
