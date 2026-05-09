"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="fixed inset-x-0 top-3 sm:top-6 z-50 flex justify-center px-3 sm:px-4">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-[calc(100vw-1rem)] sm:max-w-4xl rounded-full border border-gray-100 bg-white/90 px-3 py-3 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
      >
        <div className="flex items-center justify-between gap-3 md:hidden">
          <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-gray-100 bg-white px-3 py-2 text-sm font-black tracking-tight text-black shadow-sm">
            Sohrab.
          </Link>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white size-12 text-gray-700 shadow-sm transition hover:border-black hover:text-black"
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0, scale: isMobileMenuOpen ? 1.05 : 1 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="h-5 w-5" />
            </motion.div>
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden absolute left-3 right-3 top-[4.4rem] overflow-hidden rounded-3xl border border-gray-100 bg-white/95 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-md"
            >
              <div className="grid gap-1 p-2">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.18, delay: index * 0.03 }}
                    >
                      <Link
                        href={link.href}
                        onClick={handleMobileLinkClick}
                        className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition ${isActive ? "bg-black text-white" : "text-gray-600 hover:bg-gray-50 hover:text-black"}`}
                      >
                        <span>{link.name}</span>
                        {isActive && <span className="text-[10px] uppercase tracking-[0.2em] opacity-70">Active</span>}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="hidden md:flex items-center justify-center gap-1 overflow-x-auto no-scrollbar">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} className="relative group">
                <div className={`flex items-center px-3 lg:px-4 py-2 rounded-full transition-all duration-300 ${isActive ? 'bg-black text-white shadow-lg' : 'text-gray-500 hover:text-black hover:bg-gray-50'}`}>
                  <span className="text-[10px] lg:text-xs font-semibold tracking-[0.09em] whitespace-nowrap">
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
        </div>
      </motion.nav>
    </div>
  );
}
