"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { categories } from "@/data/categories";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Categories() {
  return (
    <section id="categories" className="py-24 bg-brand-support overflow-hidden lg:px-6">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
        >
          {/* Static Text Block (Top Left) */}
          <motion.div
            variants={cardVariants}
            className="flex flex-col justify-center p-8 lg:p-12 bg-white rounded-2xl md:col-span-1 shadow-sm border border-brand-purple/5 min-h-[400px] lg:min-h-[500px]"
          >
            <div className="inline-block px-4 py-2 border border-brand-pink/20 bg-brand-pink/5 rounded-full text-[11px] sm:text-xs font-bold tracking-widest text-brand-pink uppercase mb-8 self-start">
              Apa yang kami jual?
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-purple mb-5 font-heading leading-tight tracking-tight">
              Solusi Busana Muslim Terlengkap
            </h2>
            <p className="text-brand-text-muted leading-relaxed text-sm lg:text-base max-w-[280px]">
              Mulai dari kebutuhan harian hingga momen formal, jelajahi berbagai kategori mode favorit yang dicintai pelanggan kami. Sentuhan berkelas, bahan yang adem, dan model yang selalu up-to-date untuk seluruh anggota keluarga.</p>
          </motion.div>

          {/* Render Categories */}
          {categories.map((category, index) => {
            // Sarimbit spans 2 columns on large screens
            const isWide = index === 0;

            return (
              <motion.a
                key={category.id}
                href={`#products`}
                variants={cardVariants}
                className={`group relative block rounded-2xl overflow-hidden cursor-pointer h-full min-h-[400px] lg:min-h-[500px] ${isWide ? "md:col-span-1 lg:col-span-2" : "col-span-1"
                  }`}
              >
                <div className="absolute inset-0">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes={isWide ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                  />
                </div>

                {/* Thin dark overlay so the white button pops up elegantly */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-500" />

                {/* Bottom Pill Button */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                  <div className="bg-white/95 backdrop-blur-md px-7 py-3 rounded-full shadow-lg text-sm font-bold text-brand-purple group-hover:text-brand-pink group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1">
                    Lihat Koleksi
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
