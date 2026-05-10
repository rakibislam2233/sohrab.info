"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Journalism", href: "/journalism" },
  { name: "Scouting", href: "/scout" },
  { name: "Travel", href: "/travel" },
  { name: "Leadership", href: "/leadership" },
  { name: "Achievements", href: "/achievements" },
  { name: "Voluntary", href: "/voluntary-work" },
  { name: "Jobs", href: "/jobs" },
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
        className="w-full sm:w-fit rounded-full border border-gray-100 bg-white/90 px-2 py-1 md:px-3 md:py-2.5 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
      >
        <div className="flex items-center justify-between gap-3 md:hidden">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-black tracking-tight text-black "
          >
            Sohrab.
          </Link>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white size-10 text-gray-700 shadow-none transition hover:border-black hover:text-black"
          >
            <motion.div
              animate={{
                rotate: isMobileMenuOpen ? 90 : 0,
                scale: isMobileMenuOpen ? 1.05 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="size-4" />
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
              className="md:hidden absolute left-3 right-3 top-[4.4rem] overflow-hidden rounded-md border border-gray-100 bg-white/95 shadow-none backdrop-blur-md"
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
                        className={`flex items-center justify-between rounded px-4 py-3 text-sm font-semibold transition ${isActive ? "bg-black text-white" : "text-gray-600 hover:bg-gray-50 hover:text-black"}`}
                      >
                        <span>{link.name}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="hidden md:flex items-center justify-center gap-1 overflow-x-auto no-scrollbar">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-[20px] font-bold tracking-tight text-black "
          >
            Sohrab.
          </Link>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} className="relative group">
                <div
                  className={`flex items-center px-3 lg:px-4 py-2 rounded-full transition-all duration-300 ${isActive ? "bg-black text-white shadow-none" : "text-gray-500 hover:text-black hover:bg-gray-50"}`}
                >
                  <span className="text-[10px] lg:text-[14px] font-semibold tracking-[0.09em] whitespace-nowrap">
                    {link.name}
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-black rounded-full -z-10"
                      transition={{
                        type: "spring",
                        bounce: 0.15,
                        duration: 0.6,
                      }}
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
