"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, ShoppingBag, Tag, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionContainer";
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
    <section id="products" className="py-16 md:py-24 relative overflow-hidden bg-[#FAFAFA]">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        {/* Ambient Glowing Orbs */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-brand-pink/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-[400px] h-[400px] bg-brand-purple/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 right-1/4 w-[600px] h-[600px] bg-brand-orange-light/10 rounded-full blur-[120px]" />
        
        {/* Subtle Dot Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-40" 
          style={{ 
            backgroundImage: 'radial-gradient(#502A7E 1px, transparent 1px)', 
            backgroundSize: '32px 32px' 
          }}
        />
        
        {/* Soft mask to fade out the pattern at the edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA] via-transparent to-[#FAFAFA] opacity-80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Koleksi Terlaris"
          subtitle="Produk-produk terfavorit pilihan pelanggan kami"
        />

        <div className="flex items-center justify-center gap-3 mb-10 opacity-70">
          <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-brand-pink"></div>
          <Sparkles className="w-5 h-5 text-brand-pink" />
          <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-brand-pink"></div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              className="group product-card-glow bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden border border-white/60 flex flex-col h-full relative"
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
                </div>

                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-3 left-3 z-10">
                    <Badge variant={product.badge === "Best Seller" ? "bestseller" : "new"} className="badge-glow">
                      {product.badge}
                    </Badge>
                  </div>
                )}

                {/* Hover Overlay with WhatsApp CTA sliding up */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-purple/90 via-brand-purple/40 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10 hidden md:flex items-end justify-center h-1/2">
                  <a
                    href={getWhatsAppUrl(BRAND.whatsapp.productMessage(product.name))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex justify-center items-center gap-2 bg-[#25D366] text-white py-2.5 rounded-xl font-semibold text-sm hover:bg-[#20BD5A] transition-colors shadow-lg shadow-[#25D366]/30 mb-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Order WhatsApp
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-4 flex flex-col flex-grow relative z-20 bg-transparent">
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-brand-support text-brand-purple text-[10px] font-semibold uppercase tracking-wider shadow-sm">
                    <Tag className="w-3 h-3" />
                    {product.category}
                  </span>
                </div>
                <h3 className="font-semibold text-brand-text text-sm mb-3 line-clamp-2 group-hover:text-brand-pink transition-colors">
                  {product.name}
                </h3>
                
                <div className="mt-auto">
                  <div className="flex items-baseline gap-2 flex-wrap mb-1">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-purple font-bold text-lg">
                      {formatPrice(product.price)}
                    </span>
                  </div>
                  {product.originalPrice && (
                    <div className="flex items-center justify-between">
                      <span className="text-brand-text-muted text-xs line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                      <span className="text-[10px] bg-brand-orange-light/20 text-brand-orange px-2 py-0.5 rounded-full font-bold">
                        Hemat {formatPrice(product.originalPrice - product.price)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Mobile CTA (visible only on small screens) */}
                <div className="mt-4 md:hidden">
                  <a
                    href={getWhatsAppUrl(BRAND.whatsapp.productMessage(product.name))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex justify-center items-center gap-2 bg-[#25D366]/10 text-[#25D366] py-2 rounded-xl font-semibold text-sm active:bg-[#25D366] active:text-white transition-colors border border-[#25D366]/20"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Beli
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
