"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Flower2, Users, BadgeDollarSign, Truck } from "lucide-react";
import { SectionContainer, SectionHeading } from "@/components/ui/SectionContainer";
import { valueProps } from "@/data/valueProps";

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  Flower2,
  Users,
  BadgeDollarSign,
  Truck,
};

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

export default function ValueProps() {
  return (
    <SectionContainer id="value-props" background="support">
      <SectionHeading
        title="Kenapa Memilih Kami?"
        subtitle="Kami mengutamakan kualitas, kenyamanan, dan kepuasan pelanggan"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
      >
        {valueProps.map((prop) => {
          const IconComponent = iconMap[prop.icon] || Sparkles;
          return (
            <motion.div
              key={prop.id}
              variants={cardVariants}
              className="group bg-white rounded-2xl p-6 text-center hover:shadow-xl hover:shadow-brand-pink/10 transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-brand-pink/20"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-pink/10 to-brand-purple/10 mb-4 group-hover:from-brand-pink group-hover:to-brand-purple transition-all duration-300">
                <IconComponent className="w-7 h-7 text-brand-pink group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-heading text-base md:text-lg font-bold text-brand-purple mb-2">
                {prop.title}
              </h3>
              <p className="text-sm text-brand-text-muted leading-relaxed">
                {prop.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionContainer>
  );
}
