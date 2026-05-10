"use client";
import React, { useState, useEffect, useCallback } from "react";
import { RowsPhotoAlbum, RenderImageProps, RenderImageContext } from "react-photo-album";
import "react-photo-album/rows.css";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import Reveal from "./Reveal";

interface PhotoGalleryProps {
  images: {
    url: string;
    caption?: string;
    category?: string;
  }[];
}

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext,
) {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
      className="group overflow-hidden rounded-xl border border-gray-100 bg-gray-50 cursor-pointer shadow-none"
    >
      <Image
        fill
        src={photo.src}
        alt={alt}
        title={title}
        sizes={sizes}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
        <Maximize2 className="text-white mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0" size={24} />
        <p className="text-white font-bold text-[10px] uppercase tracking-widest truncate px-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 delay-75">
          {alt}
        </p>
      </div>
    </div>
  );
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ images }) => {
  const [index, setIndex] = useState(-1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const photos = images.map((img) => ({
    src: img.url,
    width: 1200,
    height: 800,
    alt: img.caption || "Gallery image",
    title: img.caption,
  }));

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIndex((prev) => (prev + 1) % photos.length);
  }, [photos.length]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIndex((prev) => (prev - 1 + photos.length) % photos.length);
  }, [photos.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (index === -1) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setIndex(-1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index, handleNext, handlePrev]);

  if (!mounted)
    return <div className="w-full aspect-video bg-gray-50 rounded-xl" />;

  return (
    <div className="w-full">
      <Reveal>
        <RowsPhotoAlbum
          photos={photos}
          onClick={({ index }) => setIndex(index)}
          spacing={12}
          padding={0}
          render={{ image: renderNextImage }}
          defaultContainerWidth={1200}
        />
      </Reveal>

      {/* Manual Premium Lightbox */}
      <AnimatePresence>
        {index >= 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 backdrop-blur-sm px-4 py-10"
            onClick={() => setIndex(-1)}
          >
            {/* Close Button */}
            <button
              onClick={() => setIndex(-1)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-110"
            >
              <X size={24} />
            </button>

            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-6 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-110"
            >
              <ChevronLeft className="size-6 sm:size-8" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-6 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-110"
            >
              <ChevronRight className="size-6 sm:size-8" />
            </button>

            {/* Main Image Container */}
            <div className="relative w-full max-w-5xl aspect-video flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={photos[index].src}
                    alt={photos[index].alt}
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Caption & Dots */}
              <div className="absolute -bottom-20 left-0 right-0 flex flex-col items-center gap-6">
                <motion.div 
                  key={`caption-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center"
                >
                  <p className="text-white font-bold text-sm tracking-widest uppercase mb-1">
                    {photos[index].alt}
                  </p>
                  <p className="text-gray-400 text-[10px] uppercase tracking-[0.3em]">
                    Story {index + 1} of {photos.length}
                  </p>
                </motion.div>

                {/* Pagination Dots */}
                <div className="flex gap-2">
                  {photos.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`h-1.5 transition-all duration-500 rounded-full ${
                        i === index ? "bg-white w-8" : "bg-white/20 w-1.5"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotoGallery;
