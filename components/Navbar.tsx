"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";


const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Journalism", href: "/journalism" },
  { name: "Scouting", href: "/scout" },
  { name: "Travel", href: "/travel" },
  { name: "Leadership", href: "/leadership" },
  { name: "Achievements", href: "/achievements" },
  { name: "Voluntary", href: "/voluntary-work" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-12 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto flex justify-center items-center gap-1.5 px-2 py-3 bg-white/90 backdrop-blur-md rounded-full border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-x-auto no-scrollbar"
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.href} 
              href={link.href}
              className="relative group"
            >
              <div className={`flex items-center px-4 py-2.5 rounded-full transition-all duration-300 ${isActive ? 'bg-black text-white shadow-lg' : 'text-gray-500 hover:text-black hover:bg-gray-50'}`}>
                <span className="text-xs font-semibold tracking-[0.09em] whitespace-nowrap">
                  {link.name}
                </span>
                
                {isActive && (
                  <motion.div 
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-black rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                  />
                )}
              </div>
            </Link>
          );
        })}
      </motion.nav>
    </div>
  );
}
