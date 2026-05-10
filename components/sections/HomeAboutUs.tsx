"use client";
import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import heroImage from "@/assets/images/hero_image.jpg";
import { Newspaper, Users, Heart } from "lucide-react";
import Reveal from "../ui/Reveal";
import ProfilePoint from "../ui/ProfilePoint";

const HomeAboutUs = () => {
  return (
    <section className="py-24 bg-white overflow-hidden" id="about">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="bg-white p-4 pb-10 rounded-2xl border border-gray-100 relative z-10 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)]">
              <div className="relative w-full h-[500px] overflow-hidden bg-gray-50 rounded-xl cursor-pointer group">
                <Image
                  src={heroImage.src}
                  alt="Sohrab Hossan"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="absolute bottom-4 left-0 w-full text-center font-mono text-[10px] text-gray-400 tracking-[0.3em] uppercase">
                Profile_Portrait.jpg
              </div>
            </div>
            {/* Background elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-50 rounded-full z-0 blur-3xl opacity-60"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-pink-100/50 rounded-full z-0 blur-3xl opacity-60"></div>
          </motion.div>

          <div className="flex flex-col">
            <Reveal>
              <span className="text-pink-600 font-bold uppercase tracking-[0.3em] text-xs mb-4">Who I Am</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-4xl md:text-6xl font-bold text-black mb-8 leading-tight tracking-tighter">
                MD. Sohrab Hossan
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-2xl">
                Journalist, Scout Leader, and Social Worker dedicated to community
                development and humanitarian service in Thakurgaon. With over 8
                years of experience in leadership and field reporting, I strive to
                bridge the gap between information and action.
              </p>
            </Reveal>

            <div className="space-y-8">
              <ProfilePoint
                icon={<Newspaper size={20} />}
                title="Field Journalist"
                desc="Staff Reporter at Protidiner Bangladesh, uncovering stories that matter to the community."
                delay={0.3}
              />
              <ProfilePoint
                icon={<Users size={20} />}
                title="Rover Scout Leader"
                desc="Unit leader at Thakurgaon Govt. College, shaping the next generation of leaders."
                delay={0.4}
              />
              <ProfilePoint
                icon={<Heart size={20} />}
                title="Humanitarian"
                desc="Committed to social impact through voluntary work and environmental service."
                delay={0.5}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutUs;
