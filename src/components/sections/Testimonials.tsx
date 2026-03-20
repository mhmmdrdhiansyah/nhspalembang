"use client";

import React, { useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { SectionContainer, SectionHeading } from "@/components/ui/SectionContainer";
import { testimonials } from "@/data/testimonials";

const avatarColors = [
  "from-brand-pink to-brand-purple",
  "from-brand-orange to-brand-pink",
  "from-brand-purple to-brand-pink",
  "from-brand-pink-light to-brand-orange",
  "from-brand-purple-light to-brand-pink",
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", skipSnaps: false },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <SectionContainer id="testimonials" background="white">
      <SectionHeading
        title="Apa Kata Mereka?"
        subtitle="Testimonial dari pelanggan setia kami di seluruh Indonesia"
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-4xl mx-auto"
      >
        {/* Carousel */}
        <div ref={emblaRef} className="overflow-hidden rounded-2xl">
          <div className="flex">
            {testimonials.map((t, index) => (
              <div key={t.id} className="flex-[0_0_100%] min-w-0 px-4">
                <div className="bg-brand-support rounded-2xl p-8 md:p-12 relative">
                  {/* Quote icon */}
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-pink/15" />

                  <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                    {/* Avatar with initials */}
                    <div className="flex-shrink-0">
                      <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br ${avatarColors[index % avatarColors.length]} flex items-center justify-center shadow-lg`}>
                        <span className="text-white font-bold text-2xl md:text-3xl">
                          {t.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center md:text-left flex-1">
                      {/* Stars */}
                      <div className="flex items-center justify-center md:justify-start gap-1 mb-3">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < t.rating
                                ? "text-brand-orange fill-brand-orange"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>

                      <p className="text-brand-text text-base md:text-lg leading-relaxed mb-4 italic">
                        &ldquo;{t.text}&rdquo;
                      </p>

                      <div>
                        <p className="font-heading font-bold text-brand-purple">
                          {t.name}
                        </p>
                        <p className="text-sm text-brand-text-muted">{t.city}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg items-center justify-center text-brand-purple hover:bg-brand-pink hover:text-white transition-all duration-300 hidden md:flex"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg items-center justify-center text-brand-purple hover:bg-brand-pink hover:text-white transition-all duration-300 hidden md:flex"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === selectedIndex
                  ? "bg-brand-pink w-8"
                  : "bg-brand-pink/25 hover:bg-brand-pink/50"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </SectionContainer>
  );
}
