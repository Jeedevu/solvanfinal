"use client";
import { Footer } from "./modem-animated-footer";
import {
  Twitter,
  Linkedin,
  Github,
  Mail,
  Film,
} from "lucide-react";

export default function FooterDemo() {
  const socialLinks = [
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com",
      label: "GitHub",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:hello@slovanmedia.com",
      label: "Email",
    },
  ];

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#about" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <Footer
      brandName="Slovan Media"
      brandDescription="Premium production, digital design, and cinematic storytelling crafted to grow your brand and elevate your visual presence."
      socialLinks={socialLinks}
      navLinks={navLinks}
      creatorName="Jeevan "
      creatorUrl="https://www.instagram.com/jeevan__1434/"
      brandIcon={<Film className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 text-background drop-shadow-lg" />}
    />
  );
}
