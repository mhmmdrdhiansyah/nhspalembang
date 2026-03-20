"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BRAND, getWhatsAppUrl } from "@/lib/constants";

const navLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Kategori", href: "#categories" },
  { label: "Produk", href: "#products" },
  { label: "Tentang", href: "#value-props" },
  { label: "Testimoni", href: "#testimonials" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when window is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full",
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-brand-purple/5 py-4 border-b border-gray-100"
            : "bg-transparent py-6"
        )}
      >
        <div className="w-full px-6 md:px-12 lg:px-16 mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group relative z-10 shrink-0">
            <div className="relative w-[140px] h-[45px] lg:w-[160px] lg:h-[50px] transition-all duration-300">
              <Image
                src="/images/brand/Logo 1.png"
                alt={`${BRAND.name} Logo`}
                fill
                className={cn(
                  "object-contain transition-all duration-500",
                  !isScrolled && "brightness-0 invert drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
                )}
                priority
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-4 relative z-10" onMouseLeave={() => setHoveredLink(null)}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.href)}
                className={cn(
                  "relative block px-4 py-2 text-sm xl:text-base font-semibold tracking-wide transition-colors duration-300",
                  isScrolled
                    ? hoveredLink === link.href ? "text-brand-pink" : "text-brand-text"
                    : hoveredLink === link.href ? "text-white" : "text-white/85"
                )}
              >
                <span className="relative z-10">{link.label}</span>
                
                {/* Floating pill background on hover */}
                {hoveredLink === link.href && (
                  <motion.div
                    layoutId="header-hover-bg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    className={cn(
                      "absolute inset-0 rounded-xl -z-10",
                      isScrolled ? "bg-brand-pink/5" : "bg-white/15"
                    )}
                  />
                )}

                {/* Animated underline indicator */}
                {hoveredLink === link.href && (
                  <motion.div
                    layoutId="header-hover-line"
                    className={cn(
                      "absolute bottom-0 left-3 right-3 h-[2px] rounded-full",
                      isScrolled ? "bg-brand-pink" : "bg-white"
                    )}
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Right Action (Desktop) */}
          <div className="hidden lg:flex items-center relative z-10 shrink-0">
            <a
              href={getWhatsAppUrl(BRAND.whatsapp.generalMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group relative inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm xl:text-base font-bold transition-all duration-300 overflow-hidden cursor-pointer",
                isScrolled
                  ? "bg-gradient-to-r from-brand-pink to-brand-purple text-white shadow-[0_4px_20px_rgba(209,25,119,0.3)] hover:shadow-[0_8px_25px_rgba(209,25,119,0.5)] hover:-translate-y-1 hover:scale-105"
                  : "bg-white text-brand-purple shadow-[0_4px_20px_rgba(255,255,255,0.2)] hover:shadow-[0_8px_25px_rgba(255,255,255,0.4)] hover:-translate-y-1 hover:scale-105"
              )}
            >
              {/* Refined Shine effect that moves constantly on hover */}
              <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              
              <MessageCircle className={cn(
                "w-5 h-5 relative z-10 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110", 
                isScrolled ? "text-white" : "text-brand-pink"
              )} />
              <span className="relative z-10">Pesan Sekarang</span>
              
              {/* Glowing Notification Dot indicator to increase urgency */}
              <span className="relative z-10 flex h-2.5 w-2.5 ml-0.5">
                <span className={cn(
                  "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
                  isScrolled ? "bg-white" : "bg-brand-pink"
                )}></span>
                <span className={cn(
                  "relative inline-flex rounded-full h-2.5 w-2.5",
                  isScrolled ? "bg-white" : "bg-brand-pink"
                )}></span>
              </span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-2.5 rounded-xl transition-all relative z-50",
              isMobileMenuOpen
                ? "text-brand-text bg-gray-100 rotate-90"
                : isScrolled
                  ? "text-brand-purple hover:bg-brand-support"
                  : "text-white hover:bg-white/20 backdrop-blur-sm bg-white/10"
            )}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[400px] bg-white z-50 lg:hidden shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-brand-support">
                <div className="relative w-[130px] h-[40px]">
                  <Image
                    src="/images/brand/Logo 1.png"
                    alt={`${BRAND.name} Logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.a
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-4 rounded-2xl text-lg font-semibold text-brand-text hover:bg-brand-support hover:text-brand-pink transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <div className="p-6 border-t border-brand-support bg-gray-50 mt-auto">
                <a
                  href={getWhatsAppUrl(BRAND.whatsapp.generalMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-4 rounded-xl font-bold hover:bg-[#20BD5A] transition-colors shadow-lg shadow-[#25D366]/30 hover:-translate-y-1"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat WhatsApp
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
