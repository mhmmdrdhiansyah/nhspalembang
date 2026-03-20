"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, ShoppingCart, ExternalLink, Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BRAND, getWhatsAppUrl } from "@/lib/constants";

export default function CTA() {
  return (
    <section id="cta" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-brand-purple via-brand-pink to-brand-orange">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
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
          <Heart className="w-12 h-12 text-white/40 mx-auto mb-6" />
          
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Siap Tampil Matching
            <br />
            Bersama Keluarga?
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Pesan sekarang dan dapatkan potongan harga spesial untuk pembelian set keluarga!
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button
              variant="whatsapp"
              size="lg"
              href={getWhatsAppUrl(BRAND.whatsapp.orderMessage)}
              target="_blank"
              className="w-full sm:w-auto shadow-lg shadow-[#25D366]/30"
            >
              <MessageCircle className="w-5 h-5" />
              Order via WhatsApp
            </Button>
          </div>

          {/* Marketplace buttons */}
          <p className="text-sm text-white/60 mb-4">Juga tersedia di:</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { name: "Shopee", href: BRAND.social.shopee, icon: ShoppingCart },
              { name: "Tokopedia", href: BRAND.social.tokopedia, icon: ShoppingCart },
              { name: "TikTok Shop", href: BRAND.social.tiktokShop, icon: ExternalLink },
            ].map((marketplace) => (
              <a
                key={marketplace.name}
                href={marketplace.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                <marketplace.icon className="w-4 h-4" />
                {marketplace.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
