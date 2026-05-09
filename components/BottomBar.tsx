"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, User, BookOpen, Shield, Compass, Users, Award, Heart, Mail } from "lucide-react";

const navLinks = [
  { name: "HOME", href: "/", icon: <Home size={20} /> },
  { name: "ABOUT", href: "/about", icon: <User size={20} /> },
  { name: "JOURNALISM", href: "/journalism", icon: <BookOpen size={20} /> },
  { name: "SCOUTING", href: "/scout", icon: <Shield size={20} /> },
  { name: "TRAVEL", href: "/travel", icon: <Compass size={20} /> },
  { name: "LEADERSHIP", href: "/leadership", icon: <Users size={20} /> },
  { name: "ACHIEVEMENTS", href: "/achievements", icon: <Award size={20} /> },
  { name: "VOLUNTARY", href: "/voluntary-work", icon: <Heart size={20} /> },
  { name: "CONTACT", href: "/contact", icon: <Mail size={20} /> },
];

export default function BottomBar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-1 p-2 bg-black/90 backdrop-blur-2xl rounded-[32px] border border-white/10 shadow-2xl pointer-events-auto overflow-x-auto no-scrollbar max-w-full sm:max-w-max"
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.href} 
              href={link.href}
              className="relative group"
            >
              <div className={`flex flex-col items-center justify-center gap-1.5 px-4 py-3 rounded-2xl transition-all duration-300 ${isActive ? 'bg-white/10 text-amber-400' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
                {link.icon}
                <span className="text-[9px] font-black tracking-widest uppercase hidden md:block">
                  {link.name}
                </span>
                
                {isActive && (
                  <motion.div 
                    layoutId="dock-active"
                    className="absolute inset-0 border border-amber-400/30 rounded-2xl shadow-[0_0_15px_rgba(251,191,36,0.2)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </div>
              
              {/* Tooltip for mobile/compact */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black text-white text-[10px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10 md:hidden">
                {link.name}
              </div>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
}
