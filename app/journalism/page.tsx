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
      <div className="container mx-auto px-6 mt-12">
        {/* Featured Video Section - "Filmed instead" design */}
        <div className="mb-16">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-8">
              <div className="max-w-xl">
                <h2 className="text-2xl md:text-4xl font-black mb-2 italic tracking-tight">Filmed instead.</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Stories that came to life through the lens of professional reporting.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative aspect-video rounded overflow-hidden group cursor-pointer bg-gray-50 border border-gray-100 shadow-sm">
              <Image 
                src="https://images.unsplash.com/photo-1585829365234-7547076d338e?auto=format&fit=crop&q=80&w=1600"
                alt="Journalism Spotlight"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 bg-pink-500/20 backdrop-blur-md border border-pink-500/30 text-pink-600 text-[8px] font-black uppercase tracking-[0.2em] rounded">Journalism</span>
                <span className="px-3 py-1 bg-white/40 backdrop-blur-md border border-white/20 text-black text-[8px] font-black uppercase tracking-[0.2em] rounded">Featured Report</span>
              </div>

              <div className="absolute top-4 right-4 px-2 py-0.5 bg-white/60 backdrop-blur-md rounded text-[10px] font-mono font-bold tracking-widest text-black">
                12:45
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded flex items-center justify-center group-hover:scale-110 transition-transform border border-white/30 shadow-2xl">
                  <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl md:text-3xl font-black mb-2 text-white group-hover:text-pink-400 transition-colors leading-tight tracking-tight">
                  Reporting from the Frontlines of Change
                </h3>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="mb-16">
          <Reveal>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
              <ImageIcon className="text-pink-600" size={20} />
              Field Gallery
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {galleryImages.map((img, i) => (
              <Reveal key={i} delay={i * 0.1} className={
                i % 4 === 0 ? "md:col-span-8" : 
                i % 4 === 1 ? "md:col-span-4" : 
                i % 4 === 2 ? "md:col-span-4" : 
                "md:col-span-8"
              }>
                <div 
                  className={`relative overflow-hidden rounded cursor-pointer group border border-gray-100 aspect-video md:aspect-auto md:h-64`}
                  onClick={() => setLightbox({ isOpen: true, index: i })}
                >
                  <Image
                    src={img}
                    alt="Journalism moment"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest">View Image</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* News Articles */}
        <div className="mb-16">
          <Reveal>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
              <Newspaper className="text-pink-600" size={20} />
              Featured Articles
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((a, i) => (
              <Reveal key={a.id} delay={i * 0.1}>
                <Link href={`/journalism/${a.slug}`} className="group block">
                  <div className="relative aspect-16/10 mb-3 overflow-hidden rounded bg-gray-100 border border-gray-100">
                    <Image src={a.image} alt={a.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex items-center gap-4 text-[8px] font-black uppercase tracking-widest text-gray-400 mb-2">
                    <span className="text-pink-600">{a.category}</span>
                    <span>{a.publishedAt}</span>
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-pink-600 transition-colors leading-tight">{a.title}</h3>
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
