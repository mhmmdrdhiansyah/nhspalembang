"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Star, ShoppingBag, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BRAND, getWhatsAppUrl } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-brand-purple via-brand-pink to-brand-orange"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-20 w-60 h-60 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-float" />
        {/* Pattern dots */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Mini badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <Star className="w-4 h-4 text-brand-orange fill-brand-orange" />
              <span className="text-sm text-white/90 font-medium">
                Family Fashion Terbaik
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
            >
              Tampil <br />
              <span className="text-brand-orange">Cantik & Unik</span>
              <br />
              Bersama Keluarga
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg sm:text-xl text-white/85 max-w-lg mb-8 leading-relaxed"
            >
              Koleksi busana Muslim premium untuk seluruh keluarga. Koko & gamis matching
              yang syar&apos;i, modern, dan terjangkau.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="primary" size="lg" href="#products" className="bg-white text-brand-purple hover:bg-white/90 hover:shadow-white/20">
                <span>Lihat Koleksi</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                href={getWhatsAppUrl(BRAND.whatsapp.generalMessage)}
                target="_blank"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat WhatsApp</span>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex gap-8 mt-12 pt-8 border-t border-white/20"
            >
              {[
                { value: "500+", label: "Pelanggan Puas" },
                { value: "100+", label: "Produk Koleksi" },
                { value: "4.9★", label: "Rating Toko" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image — Rich Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              {/* Image container with glass border */}
              <div className="absolute inset-0 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 overflow-hidden">
                <div className="w-full h-full rounded-3xl flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-white/10 via-white/5 to-transparent">
                  {/* Decorative circles */}
                  <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-brand-orange/20 animate-float" />
                  <div className="absolute bottom-16 left-8 w-12 h-12 rounded-full bg-white/10" />
                  
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className="w-20 h-20 rounded-full bg-white/15 flex items-center justify-center">
                      <ShoppingBag className="w-10 h-10 text-white/70" />
                    </div>
                    <div className="flex gap-2">
                      <Heart className="w-5 h-5 text-brand-orange/60 fill-brand-orange/60 animate-pulse-soft" />
                      <Sparkles className="w-5 h-5 text-white/40" />
                      <Heart className="w-5 h-5 text-white/30 fill-white/30" />
                    </div>
                    <span className="text-white/50 text-sm font-medium tracking-wide">Family Matching</span>
                    <span className="text-white/30 text-xs">Koleksi Terbaru 2026</span>
                  </div>
                </div>
              </div>
              {/* Floating card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 glass rounded-2xl px-5 py-4"
              >
                <div className="text-sm text-white/70">Best Seller 🔥</div>
                <div className="text-white font-bold">Koko Couple Premium</div>
              </motion.div>

              {/* Another floating card */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                className="absolute top-8 -right-4 glass rounded-2xl px-4 py-3"
              >
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-brand-orange fill-brand-orange" />
                  <Star className="w-3 h-3 text-brand-orange fill-brand-orange" />
                  <Star className="w-3 h-3 text-brand-orange fill-brand-orange" />
                  <Star className="w-3 h-3 text-brand-orange fill-brand-orange" />
                  <Star className="w-3 h-3 text-brand-orange fill-brand-orange" />
                </div>
                <div className="text-xs text-white/70 mt-1">500+ Review</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 60C240 20 480 80 720 60C960 40 1200 80 1440 50V100H0V60Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
