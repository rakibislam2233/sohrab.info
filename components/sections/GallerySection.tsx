"use client";
import Image from 'next/image';
import Marquee from "react-fast-marquee";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface GalleryItem {
  id: string;
  imageUrl: string;
  caption: string | null;
  category: string;
}

export default function GallerySection() {
  const [items, setItems] = useState<GalleryItem[]>([]);

  useEffect(() => {
    fetch('/api/gallery')
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error(err));
  }, []);

  if (items.length === 0) return null;

  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Moments in Action
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          A glimpse into my journey as a journalist, scout, and traveler. 
          Capturing stories that matter across Bangladesh.
        </motion.p>
      </div>

      <Marquee gradient={false} speed={50} pauseOnHover={true}>
        {items.map((item) => (
          <div key={item.id} className="mx-4 relative group">
            <div className="w-80 h-96 overflow-hidden rounded-2xl border border-white/10 relative">
              <Image
                src={item.imageUrl}
                alt={item.caption || 'gallery image'}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-white font-bold text-lg mb-1">{item.caption}</span>
                <span className="text-pink-500 text-sm font-medium uppercase tracking-wider">{item.category}</span>
              </div>
            </div>
          </div>
        ))}
      </Marquee>

      <Marquee gradient={false} speed={40} direction="right" pauseOnHover={true} className="mt-8">
        {[...items].reverse().map((item) => (
          <div key={item.id + '-rev'} className="mx-4 relative group">
            <div className="w-80 h-96 overflow-hidden rounded-2xl border border-white/10 relative">
              <Image
                src={item.imageUrl}
                alt={item.caption || 'gallery image'}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-white font-bold text-lg mb-1">{item.caption}</span>
                <span className="text-pink-500 text-sm font-medium uppercase tracking-wider">{item.category}</span>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
