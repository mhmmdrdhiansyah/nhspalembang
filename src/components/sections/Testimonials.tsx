"use client";

import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, ExternalLink } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { SectionContainer, SectionHeading } from "@/components/ui/SectionContainer";
import { googleReviews, storeInfo } from "@/data/storeInfo";
import { Button } from "@/components/ui/Button";

const avatarColors = [
  "from-blue-500 to-cyan-400",
  "from-emerald-400 to-teal-500",
  "from-amber-400 to-orange-500",
  "from-rose-400 to-pink-500",
  "from-violet-500 to-purple-500",
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", skipSnaps: false },
    [Autoplay({ delay: 6000, stopOnInteraction: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <SectionContainer id="testimonials" background="white">
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 md:mb-16 gap-6">
        <SectionHeading
          title="Apa Kata Mereka?"
          subtitle="Testimonial asli dari pelanggan setia kami di Google Maps"
          centered={false}
          className="mb-0"
        />

        {/* Google Badge Desktop */}
        <a
          href={storeInfo.googleMaps.placeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-4 bg-white px-6 py-3 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-1 transition-transform duration-300 group"
        >
          {/* Custom G Icon using standard colors temporarily since no Google icon in lucide */}
          <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center font-bold text-xl">
             <span className="text-blue-500">G</span>
          </div>
          <div>
            <div className="flex items-center gap-1 text-sm font-bold">
              <span className="text-gray-900">{storeInfo.googleMaps.rating}</span>
              <div className="flex">
                 {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                 ))}
              </div>
            </div>
            <p className="text-xs text-brand-text-muted hover:text-blue-600 transition-colors">
              Lihat {storeInfo.googleMaps.totalReviews} ulasan
            </p>
          </div>
        </a>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-6xl mx-auto"
      >
        {/* Carousel */}
        <div ref={emblaRef} className="overflow-hidden rounded-2xl pb-4">
          <div className="flex -ml-4">
            {googleReviews.map((review, index) => (
              <div key={review.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-4">
                <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 h-full flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300">
                  
                  {/* Reviewer Header */}
                  <div className="flex items-center gap-4 mb-4">
                    {/* Profile Photo or Initials */}
                    {review.profilePhoto ? (
                      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
                         <img src={review.profilePhoto} alt={review.name} className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${avatarColors[index % avatarColors.length]} flex items-center justify-center shadow-inner flex-shrink-0`}>
                        <span className="text-white font-bold text-lg">
                          {review.name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase()}
                        </span>
                      </div>
                    )}

                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                    </div>
                    {/* Small Google indicator */}
                    <div className="ml-auto w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center">
                       <span className="text-blue-500 font-bold text-xs">G</span>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating ? "text-amber-400 fill-amber-400" : "text-gray-200"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <div className="flex-grow flex flex-col justify-between">
                    <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap mb-4">
                      {review.text}
                    </p>
                    
                    {/* Attached Image Optional */}
                    {review.attachedImage && (
                      <div className="w-full h-32 md:h-40 rounded-xl overflow-hidden mt-2 relative">
                         <img src={review.attachedImage} alt={`Review photo by ${review.name}`} className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-110" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-12 h-12 rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center text-gray-600 hover:text-brand-purple hover:scale-110 transition-all duration-300 z-10"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-12 h-12 rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center text-gray-600 hover:text-brand-purple hover:scale-110 transition-all duration-300 z-10"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Action Button & Dots */}
        <div className="mt-8 flex flex-col items-center gap-6">
           {/* Dots */}
          <div className="flex items-center justify-center gap-2">
            {googleReviews.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === selectedIndex
                    ? "bg-brand-purple w-8"
                    : "bg-gray-300 hover:bg-brand-purple/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          
           {/* Mobile Google Badge */}
          <a
            href={storeInfo.googleMaps.placeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden flex items-center justify-center gap-2 text-sm text-blue-600 font-medium bg-blue-50 px-4 py-2 rounded-full"
          >
             Lihat ulasan di Google Maps
             <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </SectionContainer>
  );
}
