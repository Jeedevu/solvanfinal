"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";

interface NavigationProps {
  currentHash: string;
  theme: string;
  toggleTheme: () => void;
}

export function Navigation({ currentHash, theme, toggleTheme }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About us", href: "#about" },
    { name: "Contact us", href: "#contact" }
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${scrolled
            ? "bg-white/70 backdrop-blur-md border-b border-neutral-200/50 shadow-[0_4px_30px_rgba(0,0,0,0.05)] dark:bg-black/60 dark:border-white/5 dark:shadow-[0_4px_30px_rgba(0,0,0,0.4)] py-3"
            : "bg-transparent py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={() => handleLinkClick("#")}
            className="text-xl font-bold tracking-tight text-neutral-900 dark:text-[#E1E0CC] flex items-center gap-2"
          >
            <span>SLOVEN MEDIA</span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-neutral-100/80 backdrop-blur-sm border border-neutral-200/50 dark:bg-white/5 dark:border-white/10 rounded-full px-2 py-1 relative">
            {navItems.map((item) => {
              const isActive =
                item.href === "#about"
                  ? currentHash === "#about"
                  : item.href === "#contact"
                    ? currentHash === "#contact"
                    : currentHash === "" || currentHash === "#";

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleLinkClick(item.href)}
                  className={`relative text-xs uppercase tracking-widest font-semibold px-4 py-2 rounded-full transition-colors duration-300 ${isActive
                      ? "text-white dark:text-black"
                      : "text-neutral-600 hover:text-neutral-900 dark:text-[#E1E0CC]/75 dark:hover:text-[#E1E0CC]"
                    }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeTab"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-neutral-900 dark:bg-[#E1E0CC] rounded-full z-[-1]"
                    />
                  )}
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* CTA & Theme switch */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-neutral-200 dark:border-white/15 bg-white/5 text-neutral-900 dark:text-[#E1E0CC] hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-amber-400" />
              ) : (
                <Moon className="h-4 w-4 text-neutral-700" />
              )}
            </button>

            <a
              href="#contact"
              onClick={() => handleLinkClick("#contact")}
              className="group inline-flex items-center gap-1.5 bg-neutral-900 text-white dark:bg-[#E1E0CC] dark:text-black text-xs uppercase tracking-widest font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:bg-neutral-800 dark:hover:bg-white"
            >
              Start Project
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Theme Toggle & Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-neutral-200 dark:border-white/15 bg-white/5 text-neutral-900 dark:text-[#E1E0CC]"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-amber-400" />
              ) : (
                <Moon className="h-4 w-4 text-neutral-700" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-900 dark:text-[#E1E0CC] hover:text-neutral-700 dark:hover:text-[#E1E0CC]/80 p-2 focus:outline-none"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-lg flex flex-col justify-center px-8 md:hidden"
          >
            <nav className="flex flex-col gap-6 text-left">
              {navItems.map((item, idx) => {
                const isActive =
                  item.href === "#about"
                    ? currentHash === "#about"
                    : item.href === "#contact"
                      ? currentHash === "#contact"
                      : currentHash === "" || currentHash === "#";

                return (
                  <motion.a
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                    key={item.name}
                    href={item.href}
                    onClick={() => handleLinkClick(item.href)}
                    className={`text-4xl font-light tracking-tight ${isActive
                        ? "text-neutral-950 dark:text-[#E1E0CC]"
                        : "text-neutral-400 dark:text-[#E1E0CC]/40"
                      }`}
                  >
                    {item.name}
                  </motion.a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
