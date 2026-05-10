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
  layout?: "default" | "scattered" | "horizontal" | "vertical";
}

const MasonryGallery: React.FC<MasonryGalleryProps> = ({
  images,
  layout = "default",
}) => {
  const [lightbox, setLightbox] = useState({ isOpen: false, index: 0 });

  const getGridSpan = (index: number) => {
    if (layout === "scattered") {
      const pattern = [
        "md:col-span-4 md:row-span-2",
        "md:col-span-4 md:row-span-1",
        "md:col-span-4 md:row-span-1",
        "md:col-span-8 md:row-span-2",
        "md:col-span-4 md:row-span-2",
      ];
      return pattern[index % pattern.length];
    }
    if (layout === "horizontal") {
      const pattern = [
        "md:col-span-8 md:row-span-1",
        "md:col-span-4 md:row-span-1",
        "md:col-span-4 md:row-span-1",
        "md:col-span-8 md:row-span-1",
      ];
      return pattern[index % pattern.length];
    }
    if (layout === "vertical") {
      const pattern = [
        "md:col-span-3 md:row-span-3",
        "md:col-span-6 md:row-span-2",
        "md:col-span-3 md:row-span-3",
        "md:col-span-6 md:row-span-1",
      ];
      return pattern[index % pattern.length];
    }

    // Default pattern
    const pattern = [
      "md:col-span-6 md:row-span-2",
      "md:col-span-3 md:row-span-1",
      "md:col-span-3 md:row-span-1",
      "md:col-span-3 md:row-span-2",
      "md:col-span-3 md:row-span-1",
      "md:col-span-6 md:row-span-1",
    ];
    return pattern[index % pattern.length];
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[200px] gap-3">
        {images.map((img, i) => (
          <Reveal key={i} delay={i * 0.05} className={getGridSpan(i)}>
            <div
              className="relative w-full h-full group overflow-hidden rounded cursor-pointer bg-gray-50 border border-gray-100 transition-all duration-500"
              onClick={() => setLightbox({ isOpen: true, index: i })}
            >
              <Image
                src={img.url}
                alt={img.caption || `Gallery image ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Overlay - Cleaner style */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                <div className="flex items-center justify-between">
                  <div>
                    {img.category && (
                      <span className="inline-block px-2 py-0.5 bg-pink-600 text-white text-[8px] font-bold uppercase tracking-wider rounded-sm mb-1">
                        {img.category}
                      </span>
                    )}
                    <p className="text-white font-bold text-xs line-clamp-1">
                      {img.caption}
                    </p>
                  </div>
                  <Maximize2 size={14} className="text-white" />
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
