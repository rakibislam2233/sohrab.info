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

        {/* Featured Video Section - "Filmed instead" design */}
        <div className="mb-32">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-black mb-6 italic tracking-tight">Filmed instead.</h2>
                <p className="text-gray-500 text-xl leading-relaxed">
                  Field reports and in-depth investigations, captured in high-definition as they unfolded.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative aspect-16/9 rounded-[40px] overflow-hidden group cursor-pointer bg-gray-50 border border-gray-100 shadow-sm">
              <Image 
                src="https://images.unsplash.com/photo-1585829365234-7547076d338e?auto=format&fit=crop&q=80&w=1600"
                alt="Featured Journalism Report"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute top-8 left-8 flex gap-3">
                <span className="px-4 py-1.5 bg-pink-500/20 backdrop-blur-md border border-pink-500/30 text-pink-500 text-[10px] font-black uppercase tracking-[0.2em] rounded-full">Journalism</span>
                <span className="px-4 py-1.5 bg-white/40 backdrop-blur-md border border-white/20 text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full">Investigation</span>
              </div>

              <div className="absolute top-8 right-8 px-3 py-1 bg-white/60 backdrop-blur-md rounded-lg text-xs font-mono font-bold tracking-widest text-black">
                12:45
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform border border-white/30 shadow-2xl">
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>

              <div className="absolute bottom-10 left-10 right-10">
                <h3 className="text-3xl md:text-5xl font-black mb-4 text-white group-hover:text-pink-400 transition-colors leading-tight">
                  The Future of Agriculture in Thakurgaon
                </h3>
              </div>
            </div>
          </Reveal>
        </div>

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
