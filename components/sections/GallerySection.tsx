"use client";
import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Reveal from "../ui/Reveal";

interface GalleryItem {
  id: string;
  imageUrl: string;
  caption: string | null;
  category: string;
}

const items: GalleryItem[] = [
  {
    id: "1",
    imageUrl: "https://lh3.googleusercontent.com/sitesv/AA5AbUA49r2u2zriZ8SwgDWca3Pn_Ssq5qcxjyI5Z-VRjqPfVFnO9oticCL6Fo_fYESwiC436s6hMvT09u2L7FVd7K9ke3c0l8YjAVBas7JTEC_ssTNMsAF-gVqx0m6fCpuJNjgi8LbkDyPtJJpSg6ueoJ0FKF2ZF4JAZHixVLF1XrocQMM3_BzTRjp-=w16383",
    caption: "Leadership Session",
    category: "Leadership",
  },
  {
    id: "2",
    imageUrl: "https://lh3.googleusercontent.com/sitesv/AA5AbUA9cYkr2P43vNM2jN1qDBBB4KeMBPvJHEy5fg3vLKV1b6c2II6E3XQKTmRgjuqcRVJVIUGSV23-j6Ddo0ye3kXQfpsptNNgFNOcqm0IPyZBkc58yOXUuenRx523Pi1PsKzIVWQnt5gyrb70dkZT_N9hvBCyP7Z09_qcvG8y-2tPUwVXPj2LrpVT=w16383",
    caption: "Achievement Ceremony",
    category: "Achievement",
  },
  {
    id: "3",
    imageUrl: "https://lh3.googleusercontent.com/sitesv/AA5AbUBC3eDX-izt7AFNwcnl1yMjiL0xDONAbxgxWGftORflHuqlp2xxN7gkS0rIDBYyNxLBuqVAMsgZfIUNZjyIkNNoBgHl4l24jRbRA2rsdO8pjq0I2plYhpTCkZmOiDzMns1Onp4ttUy2fxKF2Kqu9u3m-gb5ygDrZWVyR0tYEbeI4LCq9kJO0aNtZx1foPBrj_Z-HNL9r1uCkK02eOzcaco_OFEUmoj8vuCW3k=w1280",
    caption: "Voluntary Work",
    category: "Voluntary",
  },
  {
    id: "4",
    imageUrl: "https://lh3.googleusercontent.com/sitesv/AA5AbUAVxk0gLpJKeeGL2iOivcsWizHT8T1crl7Fcet-S6SnwX4VJT8G3HWv8OQLBjhT6y3DYBO0aVfu_xrbJ00VCy8_WlZhucnOj7A0Fe_H0Ar7afV4hRMq_PkbOFrOnf3f1dQI7mdy-aPAggfoULnaJsxfclii6vwA3AFEQHFBy5-m7vqHjq4RMS_a0wOy4R_SppZI18NUwH2CUT75_CvNuUGUscvAJEw8czpI=w1280",
    caption: "Tree Plantation",
    category: "Scout",
  },
  {
    id: "5",
    imageUrl: "https://lh3.googleusercontent.com/sitesv/AA5AbUBxdVSDn9YJmMgfPL02h6HV6tUYfi9wk9b1mlm1bhHjMq9I0mvS5mPO_r8ON9mUVzhpqHQHgYakFgxJgjxcfQBhx_EkcVYFu2IFLI4HUVUOATAkzWar3MxTOWFZ16eaRB5tw4wLWkpjDKH3aEtnQBDH4y8KvTmQd_jVpRGw52OvOY2I2ssPTzWd=w1280",
    caption: "Portrait Moment",
    category: "Professional",
  },
];

const GallerySection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 mb-12">
        <Reveal>
          <div className="flex flex-col items-start">
            <span className="text-pink-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-2">Visual Archive</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black uppercase tracking-tighter">
              Moments in Action
            </h2>
          </div>
        </Reveal>
      </div>

      <Marquee gradient={false} speed={40} pauseOnHover={true}>
        {items.map((item) => (
          <div key={item.id} className="mx-3 relative group">
            <div className="w-64 h-80 overflow-hidden rounded border border-gray-100 relative bg-gray-50">
              <Image
                src={item.imageUrl}
                alt={item.caption || "gallery image"}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-pink-600 bg-white/90 px-2 py-0.5 text-[8px] font-black uppercase tracking-widest rounded-sm w-fit mb-2">
                  {item.category}
                </span>
                <span className="text-white font-bold text-sm leading-tight">
                  {item.caption}
                </span>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default GallerySection;
