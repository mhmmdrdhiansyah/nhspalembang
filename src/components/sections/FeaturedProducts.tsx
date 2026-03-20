"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, ShoppingBag, Tag, Sparkles } from "lucide-react";
import { SectionContainer, SectionHeading } from "@/components/ui/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { featuredProducts, formatPrice } from "@/data/products";
import { BRAND, getWhatsAppUrl } from "@/lib/constants";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const productGradients = [
  "from-rose-100 via-pink-50 to-purple-50",
  "from-emerald-50 via-teal-50 to-cyan-50",
  "from-blue-50 via-indigo-50 to-purple-50",
  "from-pink-50 via-rose-50 to-orange-50",
  "from-amber-50 via-yellow-50 to-orange-50",
  "from-violet-50 via-purple-50 to-fuchsia-50",
];

const productIconColors = [
  "text-rose-300",
  "text-emerald-300",
  "text-blue-300",
  "text-pink-300",
  "text-amber-300",
  "text-violet-300",
];

export default function FeaturedProducts() {
  return (
    <SectionContainer id="products" background="white">
      <SectionHeading
        title="Koleksi Terlaris"
        subtitle="Produk-produk terfavorit pilihan pelanggan kami"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
      >
        {featuredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            variants={cardVariants}
            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-brand-pink/10 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Image Placeholder */}
            <div className={`relative aspect-[3/4] overflow-hidden bg-gradient-to-br ${productGradients[index % productGradients.length]}`}>
              {/* Decorative elements */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/40" />
                <div className="absolute bottom-8 left-4 w-6 h-6 rounded-full bg-white/30" />
                
                <div className="w-16 h-16 rounded-2xl bg-white/60 flex items-center justify-center shadow-sm">
                  <ShoppingBag className={`w-8 h-8 ${productIconColors[index % productIconColors.length]}`} />
                </div>
                <div className="flex items-center gap-1">
                  <Tag className={`w-3 h-3 ${productIconColors[index % productIconColors.length]}`} />
                  <span className="text-xs font-medium text-gray-400">{product.category}</span>
                </div>
              </div>

              {/* Badge */}
              {product.badge && (
                <div className="absolute top-3 left-3 z-10">
                  <Badge variant={product.badge === "Best Seller" ? "bestseller" : "new"}>
                    {product.badge}
                  </Badge>
                </div>
              )}

              {/* WhatsApp overlay on hover */}
              <div className="absolute inset-0 bg-brand-purple/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                <a
                  href={getWhatsAppUrl(BRAND.whatsapp.productMessage(product.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-xl font-semibold hover:bg-[#20BD5A] transition-colors transform translate-y-2 group-hover:translate-y-0 duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  Order WhatsApp
                </a>
              </div>
            </div>

            {/* Info */}
            <div className="p-4">
              <p className="text-xs text-brand-text-muted uppercase tracking-wide mb-1">
                {product.category}
              </p>
              <h3 className="font-semibold text-brand-text text-sm md:text-base mb-2 line-clamp-2 group-hover:text-brand-pink transition-colors">
                {product.name}
              </h3>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-brand-pink font-bold text-lg">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-brand-text-muted text-sm line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
              {product.originalPrice && (
                <span className="inline-block mt-1 text-xs text-brand-orange font-semibold">
                  Hemat {formatPrice(product.originalPrice - product.price)}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
