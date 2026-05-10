"use client";
import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
}

interface VideoCarouselProps {
  videos: Video[];
}

export default function VideoCarousel({ videos }: VideoCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  // Extract YouTube ID
  const getYouTubeId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  return (
    <div className="relative w-full">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold text-gray-900 uppercase tracking-widest flex items-center gap-3">
          <div className="size-8 rounded-xl bg-black flex items-center justify-center text-white border border-black">
            <Play size={16} fill="currentColor" />
          </div>
          Action Moments
        </h2>
        <div className="flex gap-2">
          <button
            onClick={scrollPrev}
            className="size-10 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-none"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            className="size-10 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-none"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0"
            >
              <div
                onClick={() => setSelectedVideo(video)}
                className="group relative aspect-video rounded-xl overflow-hidden border border-gray-100 bg-gray-50 cursor-pointer"
              >
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="size-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Play size={24} fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/60 to-transparent">
                  <p className="text-white text-xs font-bold uppercase tracking-widest truncate">
                    {video.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-150 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setSelectedVideo(null)}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-6 right-6 size-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all z-160"
            >
              <X size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden bg-black shadow-none"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${getYouTubeId(selectedVideo.videoUrl)}?autoplay=1`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
