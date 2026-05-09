"use client";
import { motion } from "framer-motion";
import { Award, Compass, MapPin, X, Zap } from "lucide-react";
import Image from "next/image";
import { LuFacebook, LuInstagram, LuLinkedin } from "react-icons/lu";

export default function Hero() {
  return (
    <section className="w-full min-h-[90svh] relative overflow-hidden flex items-center bg-white pt-28 sm:pt-32 pb-16 sm:pb-20 lg:py-0">
      {/* Enhanced Dot Background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      ></div>
      <div className="absolute inset-0 z-0 bg-linear-to-br from-transparent via-white/50 to-white/80" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="h-7 sm:h-8 overflow-hidden flex items-center">
              <motion.div
                animate={{ y: [0, -32, -64, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: [0.76, 0, 0.24, 1],
                  times: [0, 0.33, 0.66, 1],
                }}
                className="flex flex-col"
              >
                <span className="text-base sm:text-xl font-black text-amber-600 h-7 sm:h-8 flex items-center uppercase tracking-[0.16em] sm:tracking-[0.2em]">
                  Scout Leader
                </span>
                <span className="text-base sm:text-xl font-black text-pink-600 h-7 sm:h-8 flex items-center uppercase tracking-[0.16em] sm:tracking-[0.2em]">
                  Traveler
                </span>
                <span className="text-base sm:text-xl font-black text-blue-600 h-7 sm:h-8 flex items-center uppercase tracking-[0.16em] sm:tracking-[0.2em]">
                  Journalist
                </span>
              </motion.div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-black leading-[0.9] sm:leading-[0.85] italic max-w-[12ch]">
              Sohrab Hossan.
            </h1>

            <div className="max-w-md space-y-5 sm:space-y-6">
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-medium">
                Professional Journalist since 2016 based in Bangladesh.
                Dedicated Scout Leader at Bangladesh Scouts and an environmental
                enthusiast committed to humanitarian aid and social service.
              </p>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                <SocialLink
                  href="#"
                  icon={<LuFacebook size={18} />}
                  label="Facebook"
                />
                <SocialLink
                  href="#"
                  icon={<LuInstagram size={18} />}
                  label="Instagram"
                />
                <SocialLink
                  href="#"
                  icon={<LuLinkedin size={18} />}
                  label="LinkedIn"
                />
                <SocialLink href="#" icon={<X size={18} />} label="X" />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Polaroid Image & Static Tags */}
          <div className="relative flex justify-center items-center h-80 sm:h-95 lg:h-112.5 mt-4 lg:mt-0">
            {/* Tilted Polaroid */}
            <motion.div
              initial={{ rotate: -5, scale: 0.9, opacity: 0 }}
              animate={{ rotate: 3, scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              className="bg-white p-3 pb-7 sm:pb-8 rounded border border-gray-100 relative z-10 shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.1)]"
            >
              <div className="relative w-52 sm:w-64 h-60 sm:h-72 overflow-hidden bg-gray-50 rounded">
                <Image
                  src="https://lh3.googleusercontent.com/sitesv/AA5AbUBxdVSDn9YJmMgfPL02h6HV6tUYfi9wk9b1mlm1bhHjMq9I0mvS5mPO_r8ON9mUVzhpqHQHgYakFgxJgjxcfQBhx_EkcVYFu2IFLI4HUVUOATAkzWar3MxTOWFZ16eaRB5tw4wLWkpjDKH3aEtnQBDH4y8KvTmQd_jVpRGw52OvOY2I2ssPTzWd=w1280"
                  alt="Sohrab Hossan"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute bottom-2 left-0 w-full text-center font-mono text-[9px] text-gray-300 tracking-widest uppercase">
                portrait_v1.jpg
              </div>
            </motion.div>

            {/* Static Information Tags */}
            <FloatingTag
              icon={<Award className="w-3 h-3 text-amber-500" />}
              text="National Service Award"
              className="top-0 right-0 hidden sm:flex"
              delay={0.4}
            />
            <FloatingTag
              icon={<MapPin className="w-3 h-3 text-pink-500" />}
              text="Based in Dhaka"
              className="top-1/4 -left-20 hidden sm:flex"
              delay={0.6}
            />
            <FloatingTag
              icon={<Zap className="w-3 h-3 text-blue-500" />}
              text="Education Reporter"
              className="bottom-1/4 -right-16 hidden sm:flex"
              delay={0.8}
            />
            <FloatingTag
              icon={<Compass className="w-3 h-3 text-emerald-500" />}
              text="64 Districts Traveled"
              className="bottom-0 left-0 hidden sm:flex"
              delay={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center bg-white border border-gray-100 rounded text-gray-400 hover:bg-black hover:text-white hover:border-black transition-all duration-300 shadow-sm"
      title={label}
    >
      {icon}
    </a>
  );
}

function FloatingTag({
  icon,
  text,
  className,
  delay,
}: {
  icon: React.ReactNode;
  text: string;
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        delay: delay,
      }}
      className={`absolute z-20 items-center gap-1.5 px-2 py-1 bg-white/90 backdrop-blur-sm border border-gray-100 rounded text-[9px] font-black text-gray-700 shadow-sm ${className}`}
    >
      {icon}
      <span className="uppercase tracking-widest">{text}</span>
    </motion.div>
  );
}
