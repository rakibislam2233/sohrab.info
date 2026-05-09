"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
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
        className={`flex items-center justify-between w-full max-w-4xl px-6 py-2 rounded-full border border-white/20 backdrop-blur-md bg-white/80 transition-all duration-300`}
      >
        {/* Logo */}
        <Link href="/" className="font-bold text-xl tracking-tight text-black flex items-center gap-2">
          Sohrab
        </Link>

        {/* Menu Items */}
        <nav className="hidden md:flex items-center gap-6 text-[13px] font-medium text-gray-500">
          <Link href="/about" className="hover:text-black transition-colors">
            About
          </Link>
          <Link href="/journalism" className="hover:text-black transition-colors">
            Journalism
          </Link>
          <Link href="/travel" className="hover:text-black transition-colors">
            Travel
          </Link>
          <Link href="/scout" className="hover:text-black transition-colors">
            Scouting
          </Link>
          <Link href="/leadership" className="hover:text-black transition-colors">
            Leadership
          </Link>
          <Link href="/achievements" className="hover:text-black transition-colors">
            Achievements
          </Link>
          <Link href="/voluntary-work" className="hover:text-black transition-colors">
            Voluntary
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
