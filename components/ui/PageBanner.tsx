"use client";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  badge?: string;
  themeColor?: string;
  textColor?: string;
  icon?: LucideIcon;
}

export default function PageBanner({
  title,
  subtitle,
  badge,
  themeColor = "bg-gray-100",
  textColor = "text-black",
  icon: Icon,
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
      {/* Floating Category Icon */}
      {Icon && (
        <>
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-[15%] text-gray-200/30 select-none pointer-events-none hidden xl:block"
          >
            <Icon size={120} />
          </motion.div>
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute bottom-1/4 right-[15%] text-gray-200/30 select-none pointer-events-none hidden xl:block"
          >
            <Icon size={100} />
          </motion.div>
        </>
      )}

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <Reveal>
          {badge && (
            <span
              className={`inline-block px-3 py-1 ${themeColor} ${textColor} text-[10px] font-bold uppercase tracking-[0.2em] rounded-md mb-4 border border-current opacity-70`}
            >
              {badge}
            </span>
          )}
          <h1
            className={`text-2xl sm:text-3xl md:text-5xl font-bold ${textColor} uppercase tracking-tighter mb-4`}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto font-medium opacity-80">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
