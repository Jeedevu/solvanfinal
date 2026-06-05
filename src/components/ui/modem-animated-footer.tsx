"use client";
import React from "react";
import {
  NotepadTextDashed,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterLink {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface FooterProps {
  brandName?: string;
  brandDescription?: string;
  socialLinks?: SocialLink[];
  navLinks?: FooterLink[];
  creatorName?: string;
  creatorUrl?: string;
  brandIcon?: React.ReactNode;
  className?: string;
}

export const Footer = ({
  brandName = "YourBrand",
  brandDescription = "Your description here",
  socialLinks = [],
  navLinks = [],
  creatorName,
  creatorUrl,
  brandIcon,
  className,
}: FooterProps) => {
  return (
    <section className={cn("relative w-full mt-0 overflow-hidden", className)}>
      <footer className="border-t border-border bg-background mt-12 sm:mt-20 relative transition-colors duration-300">
        <div className="max-w-7xl flex flex-col justify-between mx-auto min-h-[26rem] sm:min-h-[35rem] md:min-h-[40rem] relative p-4 py-8 sm:py-10">
          <div className="flex flex-col mb-8 sm:mb-20 md:mb-0 w-full">
            <div className="w-full flex flex-col items-center">
              <div className="space-y-2 flex flex-col items-center flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-foreground text-2xl sm:text-3xl font-bold">
                    {brandName}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm sm:text-base font-semibold text-center w-full max-w-sm sm:w-96 px-4 sm:px-0">
                  {brandDescription}
                </p>
              </div>

              {socialLinks.length > 0 && (
                <div className="flex mb-6 mt-4 gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-5 h-5 sm:w-6 sm:h-6 hover:scale-110 duration-300">
                        {link.icon}
                      </div>
                      <span className="sr-only">{link.label}</span>
                    </a>
                  ))}
                </div>
              )}

              {navLinks.length > 0 && (
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm font-medium text-muted-foreground max-w-full px-4">
                  {navLinks.map((link, index) => (
                    <a
                      key={index}
                      className="hover:text-foreground duration-300 hover:font-semibold"
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mt-16 md:mt-24 flex flex-col gap-2 md:gap-1 items-center justify-center md:flex-row md:items-center md:justify-between px-4 md:px-0 z-20">
            <p className="text-sm sm:text-base text-muted-foreground text-center md:text-left">
              ©{new Date().getFullYear()} {brandName}. All rights reserved.
            </p>
            {creatorName && creatorUrl && (
              <nav className="flex gap-4">
                <a
                  href={creatorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors duration-300 hover:font-medium"
                >
                  Crafted by {creatorName}
                </a>
              </nav>
            )}
          </div>
        </div>

        {/* Large background text - FIXED */}
        <div 
          className="bg-gradient-to-b from-foreground/15 via-foreground/5 to-transparent bg-clip-text text-transparent leading-none absolute left-1/2 -translate-x-1/2 bottom-32 sm:bottom-40 md:bottom-32 font-extrabold tracking-tighter pointer-events-none select-none text-center px-4"
          style={{
            fontSize: 'clamp(2.5rem, 12vw, 10rem)',
            maxWidth: '95vw'
          }}
        >
          {brandName.toUpperCase()}
        </div>

        {/* Bottom logo */}
        <div className="absolute hover:border-foreground duration-400 drop-shadow-[0_0px_10px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_0px_20px_rgba(255,255,255,0.25)] bottom-20 sm:bottom-24 md:bottom-20 backdrop-blur-sm rounded-3xl bg-background/60 left-1/2 border border-border flex items-center justify-center p-2 sm:p-3 -translate-x-1/2 z-10">
          <div className="w-10 sm:w-16 md:w-24 h-10 sm:h-16 md:h-24 bg-gradient-to-br from-foreground to-foreground/80 rounded-2xl flex items-center justify-center shadow-lg">
            {brandIcon || (
              <NotepadTextDashed className="w-6 sm:w-10 md:w-14 h-6 sm:h-10 md:h-14 text-background drop-shadow-lg" />
            )}
          </div>
        </div>

        {/* Bottom line */}
        <div className="absolute bottom-28 sm:bottom-32 md:bottom-32 backdrop-blur-sm h-px bg-gradient-to-r from-transparent via-border to-transparent w-full left-1/2 -translate-x-1/2"></div>

        {/* Bottom shadow */}
        <div className="bg-gradient-to-t from-background via-background/80 blur-[1em] to-background/40 absolute bottom-24 w-full h-20"></div>
      </footer>
    </section>
  );
};
