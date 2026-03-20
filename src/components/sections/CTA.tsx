"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BRAND, getWhatsAppUrl } from "@/lib/constants";
import Image from "next/image";

export default function CTA() {
  return (
    <section id="cta" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-brand-pink/10 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-brand-orange/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heart className="w-12 h-12 text-brand-pink mx-auto mb-6" />

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Rayakan Setiap Momen Berharga Bersama Keluarga.
            <br className="hidden md:block" /> dengan Sarimbit Nibras.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Tampil kompak dan percaya diri dengan koleksi busana muslim terbaik. Temukan kehangatan dalam balutan desain yang elegan dan nyaman dipakai sepanjang hari.
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col items-center justify-center gap-4 mb-4">
            <Button
              variant="whatsapp"
              size="lg"
              href={getWhatsAppUrl(BRAND.whatsapp.orderMessage)}
              target="_blank"
              className="w-full sm:w-auto shadow-lg shadow-[#25D366]/30 text-base"
            >
              <MessageCircle className="w-5 h-5" />
              Hubungi Admin Palembang (Klik di Sini)
            </Button>
          </div>

          {/* Trust Element */}
          <div className="flex items-center justify-center gap-1.5 mb-10 text-sm font-medium text-gray-600">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <p>Telah melayani Ribuan+++ Keluarga</p>
          </div>

          {/* Marketplace buttons */}
          <p className="text-sm font-medium text-gray-500 mb-4">Temukan kami juga di platform favorit Anda:</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              {
                name: "Shopee",
                href: BRAND.social.shopee,
                logo: "/images/brand/shopee-logo.svg",
                color: "hover:border-[#EE4D2D]/30"
              },
              {
                name: "TikTok Shop",
                href: BRAND.social.tiktokShop,
                logo: "/images/brand/tiktok-logo.svg",
                color: "hover:border-[#000000]/30"
              },
            ].map((marketplace) => (
              <a
                key={marketplace.name}
                href={marketplace.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-3 bg-white border border-gray-100 shadow-sm text-gray-700 px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${marketplace.color}`}
              >
                <div className="relative w-6 h-6">
                  <Image
                    src={marketplace.logo}
                    alt={`${marketplace.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                {marketplace.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
