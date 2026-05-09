"use client"
import { Building2, Calendar, Camera } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import ImageLightbox from "../../components/ui/ImageLightbox";
import PageBanner from "../../components/ui/PageBanner";
import Reveal from "../../components/ui/Reveal";

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
      <div className="container mx-auto px-4 sm:px-6 mt-10 sm:mt-12">
        {/* Masonry Grid */}
        <div className="mb-12 sm:mb-16">
          <Reveal>
            <h2 className="text-lg sm:text-xl font-bold mb-5 sm:mb-6 flex items-center gap-3">
              <Camera className="text-pink-600" size={20} />
              Impact Gallery
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {galleryImages.map((img, i) => (
              <Reveal key={i} delay={i * 0.1} className={
                i === 0 ? "md:col-span-4" : 
                i === 1 ? "md:col-span-8" : 
                i === 2 ? "md:col-span-7" : 
                "md:col-span-5"
              }>
                <div 
                  className={`relative overflow-hidden rounded cursor-pointer group border border-gray-100 aspect-video md:aspect-auto md:h-64`}
                  onClick={() => setLightbox({ isOpen: true, index: i })}
                >
                  <Image src={img} alt="Voluntary moment" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest">Preview</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Work Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {works.map((work, i) => (
            <Reveal key={work.id} delay={i * 0.1}>
              <div className="group border border-gray-100 rounded overflow-hidden bg-white hover:border-pink-600 transition-colors">
                <div className="relative aspect-16/10">
                  <Image src={work.image} alt={work.title} fill className="object-cover" />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                    <span className="flex items-center gap-2"><Building2 size={12} /> {work.organization}</span>
                    <span className="flex items-center gap-2"><Calendar size={12} /> {work.date}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 leading-tight">{work.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{work.description}</p>
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
