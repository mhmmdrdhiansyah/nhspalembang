"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/lib/constants";

const images = [
  "/images/hero/7-084608.jpeg",
  "/images/hero/6-015024.jpg",
  "/images/hero/7-015026.jpg",
  "/images/hero/3-084616.jpeg",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-gray-100 overflow-hidden"
    >
      {/* Background Image Slider */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={images[currentIndex]}
            alt="Hero Background"
            fill
            className="object-cover object-center lg:object-[center_top]"
            priority
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        {/* Floating White Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white mt-16 sm:mt-20 w-full max-w-sm sm:max-w-lg h-[80vh] min-h-[550px] max-h-[750px] flex flex-col justify-between p-8 sm:p-12 md:ml-0 shadow-2xl rounded-sm"
        >
          {/* Top Line Indicators */}
          <div className="flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1 transition-all duration-300 ${index === currentIndex
                  ? "w-12 bg-brand-pink"
                  : "w-12 bg-brand-purple/20 hover:bg-brand-purple/40"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Bottom Content Area */}
          <div className="mt-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl sm:text-[43px] lg:text-[49px] font-bold text-brand-purple leading-[1.1] mb-6 tracking-tight"
            >
              Tampil Syar'i & Berkelas Disetiap Momen
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-brand-purple/70 mb-10 text-lg max-w-[280px]"
            >
              Koleksi busana Muslim eksklusif dari NBRS House Palembang yang memadukan kenyamanan premium dengan desain modern yang timeless.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                size="lg"
                href="#products"
                className="bg-brand-pink text-white hover:bg-brand-pink-dark rounded-full px-10 py-6 text-sm font-medium transition-all shadow-xl hover:-translate-y-0.5"
              >
                Jelajahi Koleksi
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
