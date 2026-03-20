"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, User, UserCheck, Baby } from "lucide-react";
import { SectionContainer, SectionHeading } from "@/components/ui/SectionContainer";
import { categories } from "@/data/categories";

const iconMap: Record<string, React.ElementType> = {
  "family-collection": Users,
  "gamis-wanita": User,
  "koko-pria": UserCheck,
  "anak-anak": Baby,
};

const gradients = [
  "from-brand-purple to-brand-pink",
  "from-brand-pink to-brand-orange",
  "from-brand-purple-light to-brand-purple",
  "from-brand-orange to-brand-pink",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Categories() {
  return (
    <SectionContainer id="categories" background="support">
      <SectionHeading
        title="Kategori Produk"
        subtitle="Temukan koleksi busana Muslim terbaik untuk seluruh keluarga"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
      >
        {categories.map((category, index) => {
          const IconComponent = iconMap[category.slug] || Users;
          return (
            <motion.a
              key={category.id}
              href="#products"
              variants={cardVariants}
              className="group relative block aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} transition-all duration-500`}>
                {/* Decorative circles */}
                <div className="absolute top-6 right-6 w-20 h-20 rounded-full bg-white/10 group-hover:scale-125 transition-transform duration-500" />
                <div className="absolute bottom-20 left-4 w-12 h-12 rounded-full bg-white/5" />
                
                {/* Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                  <IconComponent className="w-24 h-24 text-white" strokeWidth={1} />
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/40 to-transparent">
                <h3 className="text-white font-heading text-lg md:text-xl font-bold mb-1">
                  {category.name}
                </h3>
                <p className="text-white/80 text-sm hidden md:block mb-2">
                  {category.description}
                </p>
                <span className="inline-flex items-center bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium">
                  {category.count} Produk
                </span>
              </div>
            </motion.a>
          );
        })}
      </motion.div>
    </SectionContainer>
  );
}
