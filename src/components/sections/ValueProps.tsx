"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionContainer, SectionHeading } from "@/components/ui/SectionContainer";
import { valueProps } from "@/data/valueProps";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function ValueProps() {
  return (
    <SectionContainer id="value-props" background="support">
      <SectionHeading
        title="Kenapa Memilih NBRS?"
        subtitle="Kualitas terbaik, desain fungsional, dan kepercayaan yang sudah terbukti"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {valueProps.map((prop) => (
          <motion.div
            key={prop.id}
            variants={cardVariants}
            className="group relative bg-white rounded-3xl p-8 text-center hover:shadow-2xl hover:shadow-brand-pink/15 transition-all duration-500 hover:-translate-y-3 border border-brand-pink/10 hover:border-brand-pink/30 overflow-hidden"
          >
            {/* Decorative gradient blob */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-brand-pink/5 to-brand-purple/5 rounded-full group-hover:from-brand-pink/10 group-hover:to-brand-purple/10 transition-all duration-500" />

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-brand-pink/10 to-brand-purple/10 mb-5 group-hover:from-brand-pink/20 group-hover:to-brand-purple/20 group-hover:scale-110 transition-all duration-500">
                <span className="text-4xl" role="img">
                  {prop.emoji}
                </span>
              </div>

              <h3 className="font-heading text-lg md:text-xl font-bold text-brand-purple mb-3 leading-tight">
                {prop.title}
              </h3>

              <p className="text-sm md:text-base text-brand-text-muted leading-relaxed">
                {prop.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
