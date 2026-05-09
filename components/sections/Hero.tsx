"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Newspaper, MapPin, Compass, Award, Users, Code, Zap, Bike } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full min-h-[90vh] relative overflow-hidden flex items-center bg-white border-b border-gray-50">
      {/* Dot Background */}
      <div className="absolute inset-0 z-0 opacity-40" 
           style={{ 
             backgroundImage: "radial-gradient(#e5e7eb 1.5px, transparent 1.5px)", 
             backgroundSize: "32px 32px" 
           }}>
      </div>

      <div className="container relative z-10 w-full py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-2"
          >
            <div className="h-8 overflow-hidden flex items-center">
              <motion.div
                animate={{ y: [0, -32, -64, 0] }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: [0.76, 0, 0.24, 1],
                  times: [0, 0.33, 0.66, 1]
                }}
                className="flex flex-col"
              >
                <span className="text-lg font-bold text-amber-600 h-8 flex items-center uppercase tracking-widest">Scout</span>
                <span className="text-lg font-bold text-pink-600 h-8 flex items-center uppercase tracking-widest">Traveler</span>
                <span className="text-lg font-bold text-blue-600 h-8 flex items-center uppercase tracking-widest">Journalist</span>
              </motion.div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-black leading-none pb-2">
              I'm Sohrab.
            </h1>
            <p className="max-w-md text-base text-gray-500 leading-relaxed pt-2 font-medium">
              A Journalist from Bangladesh 🇧🇩 who loves to capture stories 
              and explore the beauty of our world.
            </p>
          </motion.div>

          {/* Right Side - Polaroid Image & Floating Tags */}
          <div className="relative flex justify-center items-center h-[400px]">
            {/* Tilted Polaroid */}
            <motion.div 
              initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
              animate={{ rotate: 6, scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              className="bg-white p-3 pb-8 rounded border border-gray-100 relative z-10"
            >
              <div className="relative w-64 h-72 overflow-hidden bg-gray-100 rounded">
                <Image
                  src="https://lh3.googleusercontent.com/sitesv/AA5AbUBxdVSDn9YJmMgfPL02h6HV6tUYfi9wk9b1mlm1bhHjMq9I0mvS5mPO_r8ON9mUVzhpqHQHgYakFgxJgjxcfQBhx_EkcVYFu2IFLI4HUVUOATAkzWar3MxTOWFZ16eaRB5tw4wLWkpjDKH3aEtnQBDH4y8KvTmQd_jVpRGw52OvOY2I2ssPTzWd=w1280"
                  alt="Sohrab Hossan"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute bottom-2 left-0 w-full text-center font-mono text-[10px] text-gray-400">
                me.webp
              </div>
            </motion.div>

            {/* Floating Tags */}
            <FloatingTag 
              icon={<Zap className="w-3 h-3 text-pink-500" />} 
              text="15K+ Users Served" 
              className="top-10 right-20"
              delay={0.4}
            />
            <FloatingTag 
              icon={<Code className="w-3 h-3 text-orange-500" />} 
              text="Journalist" 
              className="top-1/2 -left-10"
              delay={0.6}
            />
            <FloatingTag 
              icon={<Bike className="w-3 h-3 text-blue-500" />} 
              text="Traveller" 
              className="top-1/2 -right-16"
              delay={0.8}
            />
            <FloatingTag 
              icon={<Award className="w-3 h-3 text-red-500" />} 
              text="3+ Years of Experience" 
              className="bottom-10 left-1/4"
              delay={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingTag({ icon, text, className, delay }: { icon: React.ReactNode, text: string, className: string, delay: number }) {
  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ 
        y: [0, -10, 0],
        opacity: 1 
      }}
      transition={{ 
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay
        },
        opacity: {
          duration: 0.5,
          delay: delay
        }
      }}
      className={`absolute z-20 flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm border border-gray-100 rounded text-[10px] font-bold text-gray-700 ${className}`}
    >
      {icon}
      {text}
    </motion.div>
  );
}
