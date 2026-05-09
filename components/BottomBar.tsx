"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, User, BookOpen, Shield, Compass, Users, Award, Heart, Mail } from "lucide-react";

const navLinks = [
  { name: "HOME", href: "/", icon: <Home size={16} /> },
  { name: "ABOUT", href: "/about", icon: <User size={16} /> },
  { name: "JOURNALISM", href: "/journalism", icon: <BookOpen size={16} /> },
  { name: "SCOUTING", href: "/scout", icon: <Shield size={16} /> },
  { name: "TRAVEL", href: "/travel", icon: <Compass size={16} /> },
  { name: "LEADERSHIP", href: "/leadership", icon: <Users size={16} /> },
  { name: "ACHIEVEMENTS", href: "/achievements", icon: <Award size={16} /> },
  { name: "VOLUNTARY", href: "/voluntary-work", icon: <Heart size={16} /> },
  { name: "CONTACT", href: "/contact", icon: <Mail size={16} /> },
];

export default function BottomBar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-center">
          <nav className="flex items-center gap-1 overflow-x-auto no-scrollbar py-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className="relative px-3 py-2 rounded transition-all duration-300 group"
                >
                  <div className={`flex items-center gap-2 ${isActive ? 'text-black' : 'text-gray-400 hover:text-black'}`}>
                    <span className={`${isActive ? 'text-black' : 'group-hover:text-black transition-colors'}`}>
                      {link.icon}
                    </span>
                    <span className="text-[10px] font-black tracking-[0.1em] uppercase whitespace-nowrap">
                      {link.name}
                    </span>
                  </div>
                  
                  {isActive && (
                    <motion.div 
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-black rounded"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
