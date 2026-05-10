"use client";
import { motion } from "framer-motion";
import { Leaf, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  badge?: string;
  themeColor?: string; // e.g., "bg-[#e8f5e9]"
  textColor?: string; // e.g., "text-[#1b5e20]"
}

export default function PageBanner({
  title,
  subtitle,
  badge,
  themeColor = "bg-[#f0f9f1]",
  textColor = "text-[#2d4a31]",
}: PageBannerProps) {
  return (
    <section className="w-full h-96 relative overflow-hidden flex items-center bg-[#fafafa] pt-28 sm:pt-32 pb-16 sm:pb-20 lg:py-0">
      {/* Enhanced Dot Background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      {/* Decorative Leaves - Left */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-20 -top-10 text-green-200/50 opacity-40 select-none pointer-events-none hidden lg:block"
      >
        <Leaf size={300} fill="currentColor" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-10 bottom-0 text-green-200/40 opacity-30 select-none pointer-events-none hidden lg:block"
      >
        <Leaf size={250} fill="currentColor" />
      </motion.div>

      {/* Decorative Leaves - Right */}
      <motion.div
        animate={{ y: [0, -25, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-20 -top-20 text-green-200/50 opacity-40 select-none pointer-events-none rotate-180 hidden lg:block"
      >
        <Leaf size={350} fill="currentColor" />
      </motion.div>

      {/* Sparkles */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 text-yellow-400 hidden md:block"
      >
        <Sparkles size={24} fill="currentColor" />
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute bottom-1/3 right-1/4 text-yellow-400 hidden md:block"
      >
        <Sparkles size={32} fill="currentColor" />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <Reveal>
          <h1
            className={`text-2xl sm:text-3xl md:text-5xl font-bold ${textColor} uppercase tracking-tighter mb-4`}
          >
            {title}
          </h1>
        </Reveal>
      </div>
    </section>
  );
}
