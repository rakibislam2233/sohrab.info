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
        className="flex items-center gap-0.5 p-1 bg-white/90 backdrop-blur-2xl rounded border border-gray-100 shadow-lg pointer-events-auto overflow-x-auto no-scrollbar max-w-full sm:max-w-max"
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.href} 
              href={link.href}
              className="relative group"
            >
              <div className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded transition-all duration-300 ${isActive ? 'bg-amber-50 text-amber-600' : 'text-gray-500 hover:text-black hover:bg-gray-50'}`}>
                {isActive ? <div className="text-amber-600">{link.icon}</div> : link.icon}
                <span className="text-[8px] font-black tracking-widest uppercase hidden md:block">
                  {link.name}
                </span>
                
                {isActive && (
                  <motion.div 
                    layoutId="dock-active"
                    className="absolute inset-0 border border-amber-500/20 rounded shadow-[0_0_10px_rgba(251,191,36,0.1)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </div>
              
              {/* Tooltip for mobile/compact */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-black text-[8px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-gray-100 shadow-lg md:hidden">
                {link.name}
              </div>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
}
