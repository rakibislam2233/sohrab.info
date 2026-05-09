"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/Button";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed w-full top-6 z-50 flex justify-center px-4">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`flex items-center justify-between w-full max-w-2xl px-6 py-2 rounded-full border border-white/20 shadow-lg backdrop-blur-md bg-white/80 transition-all duration-300`}
      >
        {/* Logo */}
        <Link href="/" className="font-bold text-xl tracking-tight text-black flex items-center gap-2">
          Sohrab
        </Link>

        {/* Menu Items */}
        <nav className="hidden md:flex items-center gap-6 text-[13px] font-medium text-gray-500">
          <Link href="/work" className="hover:text-black transition-colors">
            Work
          </Link>
          <Link href="/experience" className="hover:text-black transition-colors">
            Experience
          </Link>
          <Link href="/off-hours" className="hover:text-black transition-colors">
            Off hours
          </Link>
          <Link href="/youtube" className="hover:text-black transition-colors">
            YouTube
          </Link>
          <Link href="/guestbook" className="hover:text-black transition-colors">
            Guestbook
          </Link>
        </nav>

        {/* Get in Touch Button */}
        <Link href="/contact">
          <button className="bg-black hover:bg-black/80 text-white px-5 py-2 rounded-full text-[13px] font-semibold transition-all">
            Get in Touch
          </button>
        </Link>
      </motion.div>
    </header>
  );
}
