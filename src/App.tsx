import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";

import { Navigation } from "./components/ui/navigation";
import { PrismaHero } from "./components/ui/prisma-hero";
import { CinematicHero } from "./components/ui/cinematic-hero";
import { PointerHighlightDemo } from "./components/ui/pointer-highlight-demo-3";
import { PointerHighlightDemo1 } from "./components/ui/pointer-highlight-demo";
import { LetsWorkTogether } from "./components/ui/lets-work-section";
import { AboutUs } from "./components/ui/about-us";
import { ContactUs } from "./components/ui/contact-us";
import FooterDemo from "./components/ui/footer-demo";

export default function App() {
  const [hash, setHash] = useState(window.location.hash);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
      if (window.location.hash === "" || window.location.hash === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const isAboutPage = hash === "#about";
  const isContactPage = hash === "#contact";

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navigation currentHash={hash} theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {isAboutPage ? (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <AboutUs />
            </motion.div>
          ) : isContactPage ? (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <ContactUs />
            </motion.div>
          ) : (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <PrismaHero />
              <CinematicHero />
              <PointerHighlightDemo />
              <PointerHighlightDemo1 />
              <LetsWorkTogether />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <FooterDemo />
    </div>
  );
}

