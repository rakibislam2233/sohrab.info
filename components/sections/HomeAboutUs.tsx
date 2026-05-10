"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import heroImage from "@/assets/images/hero_image.jpg";
const HomeAboutUs = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-12">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-3 pb-7 sm:pb-8 rounded border border-gray-100 relative z-10 shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.1)]"
          >
            <div className="relative w-full h-96 overflow-hidden bg-gray-50 rounded cursor-pointer">
              <Image
                src={heroImage.src}
                alt="Sohrab Hossan"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute bottom-2 left-0 w-full text-center font-mono text-[9px] text-gray-400 tracking-widest uppercase">
              me.jpg
            </div>
          </motion.div>

          <div>
            <h2 className="text-2xl md:text-4xl font-semibold text-black mb-4 leading-tight uppercase tracking-tighter">
              MD. Sohrab Hossan
            </h2>

            <p className="text-base text-gray-500 mb-6 leading-relaxed font-medium">
              Journalist, Scout Leader, and Social Worker dedicated to community
              development and humanitarian service in Thakurgaon. With over 8
              years of experience in leadership and field reporting, I strive to
              bridge the gap between information and action.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeAboutUs;
