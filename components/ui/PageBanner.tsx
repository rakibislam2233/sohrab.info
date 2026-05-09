"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Reveal from "./Reveal";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  image: string;
  overlayOpacity?: string;
}

export default function PageBanner({ title, subtitle, image, overlayOpacity = "bg-black/40" }: PageBannerProps) {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover"
        />
        <div className={`absolute inset-0 ${overlayOpacity}`} />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <Reveal>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.2}>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-medium drop-shadow-lg">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>

      {/* Bottom Curve/Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent" />
    </section>
  );
}
