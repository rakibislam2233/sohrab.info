"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface LightboxProps {
  images: string[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageLightbox({ images, initialIndex = 0, isOpen, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-100 bg-black/95 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-pink-500 transition-colors z-110"
            onClick={onClose}
          >
            <X size={32} />
          </button>

          <button 
            className="absolute left-6 text-white hover:text-pink-500 transition-colors z-110"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft size={48} />
          </button>

          <motion.div 
            key={currentIndex}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              fill
              className="object-contain"
            />
          </motion.div>

          <button 
            className="absolute right-6 text-white hover:text-pink-500 transition-colors z-110"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight size={48} />
          </button>

          <div className="absolute bottom-6 text-white/50 text-sm font-medium">
            {currentIndex + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
