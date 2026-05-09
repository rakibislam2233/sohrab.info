"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Newspaper, Play, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "../../components/ui/PageBanner";
import Reveal from "../../components/ui/Reveal";
import ImageLightbox from "../../components/ui/ImageLightbox";

const articles = [
  { id: '1', title: 'Transformation of Primary Education', slug: 'primary-education', category: 'Education', publishedAt: '2023-11-10', image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1000' },
  { id: '2', title: 'Commercial Mango Farming Success', slug: 'mango-farming', category: 'Agriculture', publishedAt: '2023-09-15', image: 'https://images.unsplash.com/photo-1553134839-89d81d421da1?auto=format&fit=crop&q=80&w=1000' },
  { id: '3', title: 'Relief Distribution to 4,700 Families', slug: 'relief-2020', category: 'Social', publishedAt: '2020-05-06', image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000' },
];

const galleryImages = [
  "https://lh3.googleusercontent.com/sitesv/AA5AbUCY_v3Y0eY8m74xK4Y93m5I_v39_z8f9z8f9z8f9z8f9z8f9z8f9z8f9z8f9z8f9z8f9z8f9z8f9z=w1280",
  "https://lh3.googleusercontent.com/sitesv/AA5AbUBC3eDX-izt7AFNwcnl1yMjiL0xDONAbxgxWGftORflHuqlp2xxN7gkS0rIDBYyNxLBuqVAMsgZfIUNZjyIkNNoBgHl4l24jRbRA2rsdO8pjq0I2plYhpTCkZmOiDzMns1Onp4ttUy2fxKF2Kqu9u3m-gb5ygDrZWVyR0tYEbeI4LCq9kJO0aNtZx1foPBrj_Z-HNL9r1uCkK02eOzcaco_OFEUmoj8vuCW3k=w1280",
  "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1476242906366-d8eb64c2f661?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1585829365234-7547076d338e?auto=format&fit=crop&q=80&w=1000"
];

export default function JournalismPage() {
  const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 });

  return (
    <main className="min-h-screen bg-white pt-0 pb-20">
      <PageBanner 
        title="Journalism" 
        badge="Staff Reporter"
        themeColor="bg-[#fff0f0]"
        textColor="text-[#721c24]"
      />
      <div className="container mx-auto px-6 mt-24">
        {/* Dynamic Grid Layout */}
        <div className="mb-32">
          <Reveal>
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
              <ImageIcon className="text-pink-600" />
              Field Gallery
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {galleryImages.map((img, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div 
                  className={`relative overflow-hidden rounded-3xl cursor-pointer group ${
                    i === 0 ? "md:col-span-2 md:row-span-2 aspect-4/5" : "aspect-square"
                  }`}
                  onClick={() => setLightbox({ isOpen: true, index: i })}
                >
                  <Image
                    src={img}
                    alt="Journalism moment"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-sm font-bold uppercase tracking-widest">View Image</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* News Articles */}
        <div>
          <Reveal>
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
              <Newspaper className="text-pink-600" />
              Featured Articles
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {articles.map((a, i) => (
              <Reveal key={a.id} delay={i * 0.1}>
                <Link href={`/journalism/${a.slug}`} className="group block">
                  <div className="relative aspect-16/10 mb-6 overflow-hidden rounded-3xl bg-gray-100">
                    <Image src={a.image} alt={a.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                    <span className="text-pink-600">{a.category}</span>
                    <span>{a.publishedAt}</span>
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-pink-600 transition-colors leading-tight">{a.title}</h3>
                </Link>
              </Reveal>
            ))}
          </div>
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
