"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { Play, ArrowRight, Video } from "lucide-react";
import Reveal from "../ui/Reveal";

const galleryImages = [
  "https://lh3.googleusercontent.com/sitesv/AA5AbUA8r1-w-qKkLg6V0U2-M1G-v39_z8f9z8f9z8f9z8f9z8f9z8f9z8f9z8f9z8f9z8f9z8f9z8f9z=w1280",
  "https://lh3.googleusercontent.com/sitesv/AA5AbUAVxk0gLpJKeeGL2iOivcsWizHT8T1crl7Fcet-S6SnwX4VJT8G3HWv8OQLBjhT6y3DYBO0aVfu_xrbJ00VCy8_WlZhucnOj7A0Fe_H0Ar7afV4hRMq_PkbOFrOnf3f1dQI7mdy-aPAggfoULnaJsxfclii6vwA3AFEQHFBy5-m7vqHjq4RMS_a0wOy4R_SppZI18NUwH2CUT75_CvNuUGUscvAJEw8czpI=w1280",
  "https://lh3.googleusercontent.com/sitesv/AA5AbUBC3eDX-izt7AFNwcnl1yMjiL0xDONAbxgxWGftORflHuqlp2xxN7gkS0rIDBYyNxLBuqVAMsgZfIUNZjyIkNNoBgHl4l24jRbRA2rsdO8pjq0I2plYhpTCkZmOiDzMns1Onp4ttUy2fxKF2Kqu9u3m-gb5ygDrZWVyR0tYEbeI4LCq9kJO0aNtZx1foPBrj_Z-HNL9r1uCkK02eOzcaco_OFEUmoj8vuCW3k=w1280",
  "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=1000"
];

const videos = [
  { 
    id: 1, 
    title: "Boga Lake Tour Vlog | Exploring the Beauty of Bandarban", 
    category: "LAKE", 
    duration: "10:41", 
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1600",
    isFeatured: true 
  },
  { 
    id: 2, 
    title: "The Keokradong | Exploring the Highest Peak", 
    category: "MOUNTAIN", 
    duration: "22:13", 
    thumbnail: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000",
    isFeatured: false 
  },
  { 
    id: 3, 
    title: "Sonargaon | A Day Trip to the Ancient Capital", 
    category: "HISTORY", 
    duration: "11:46", 
    thumbnail: "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=1000",
    isFeatured: false 
  }
];

export default function MediaHighlights() {
  return (
    <section className="bg-white py-12 text-black">
      <div className="container mx-auto px-6">
        
        {/* Gallery Grid */}
        <div className="mb-12">
          <Reveal>
            <div className="flex justify-between items-end mb-6">
              <div>
                <h2 className="text-2xl md:text-4xl font-black mb-1 uppercase tracking-tighter">Action Moments</h2>
                <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">Capturing stories through the lens.</p>
              </div>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className={`relative rounded overflow-hidden group cursor-pointer border border-gray-100 ${
                  i === 0 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-square"
                }`}>
                  <Image src={img} alt="Gallery" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
