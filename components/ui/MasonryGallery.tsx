"use client";
import React, { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import ImageLightbox from "./ImageLightbox";
import { Maximize2 } from "lucide-react";

interface MasonryGalleryProps {
  images: {
    url: string;
    caption?: string;
    category?: string;
  }[];
}

const MasonryGallery: React.FC<MasonryGalleryProps> = ({ images }) => {
  const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 });

  const getGridSpan = (index: number) => {
    // Custom pattern for masonry look
    const pattern = [
      "md:col-span-6 md:row-span-2", // Large square
      "md:col-span-3 md:row-span-1", // Small square
      "md:col-span-3 md:row-span-1", // Small square
      "md:col-span-3 md:row-span-2", // Tall
      "md:col-span-3 md:row-span-1", // Small
      "md:col-span-4 md:row-span-1", // Wide
      "md:col-span-2 md:row-span-1", // Tiny
    ];
    return pattern[index % pattern.length];
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[200px] gap-4">
        {images.map((img, i) => (
          <Reveal key={i} delay={i * 0.05} className={getGridSpan(i)}>
            <div
              className="relative w-full h-full group overflow-hidden rounded-xl cursor-pointer bg-gray-100 border border-gray-200 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
              onClick={() => setLightbox({ isOpen: true, index: i })}
            >
              <Image
                src={img.url}
                alt={img.caption || `Gallery image ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <div className="flex items-center justify-between">
                  <div>
                    {img.category && (
                      <span className="inline-block px-3 py-1 bg-pink-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-full mb-2">
                        {img.category}
                      </span>
                    )}
                    <p className="text-white font-medium text-sm line-clamp-1">
                      {img.caption}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                    <Maximize2 size={18} />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <ImageLightbox
        images={images.map((img) => img.url)}
        isOpen={lightbox.isOpen}
        initialIndex={lightbox.index}
        onClose={() => setLightbox({ ...lightbox, isOpen: false })}
      />
    </div>
  );
};

export default MasonryGallery;
