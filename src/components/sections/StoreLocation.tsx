"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, ExternalLink } from "lucide-react";
import { SectionContainer, SectionHeading } from "@/components/ui/SectionContainer";
import { Button } from "@/components/ui/Button";
import { storeInfo } from "@/data/storeInfo";

export default function StoreLocation() {
  return (
    <SectionContainer id="location" background="support">
      <SectionHeading
        title="Lokasi Toko Kami"
        subtitle="Kunjungi toko kami untuk melihat dan mencoba langsung koleksi terbaru NBRS"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Kolom Kiri: Info Toko */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-brand-purple/5 border border-brand-pink/10"
        >
          <div className="mb-8">
            <h3 className="font-heading text-2xl font-bold text-brand-purple mb-4">
              {storeInfo.name}
            </h3>
            <div className="flex items-start gap-4 text-brand-text-muted">
              <MapPin className="w-6 h-6 text-brand-pink shrink-0 mt-1" />
              <p className="leading-relaxed">
                {storeInfo.address}
              </p>
            </div>
          </div>

          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-brand-pink shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-brand-text mb-1">Jam Operasional</h4>
                <ul className="space-y-2 text-brand-text-muted">
                  {storeInfo.operationalHours.map((schedule, idx) => (
                    <li key={idx} className="flex justify-between w-48">
                      <span>{schedule.day}</span>
                      <span>{schedule.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-brand-pink shrink-0" />
              <div>
                <h4 className="font-bold text-brand-text mb-1">Telepon / WhatsApp</h4>
                <p className="text-brand-text-muted">{storeInfo.phone}</p>
              </div>
            </div>
          </div>

          <Button
            href={storeInfo.googleMaps.placeUrl}
            target="_blank"
            variant="primary"
            className="w-full sm:w-auto flex items-center justify-center gap-2"
          >
            Buka di Google Maps
            <ExternalLink className="w-4 h-4" />
          </Button>
        </motion.div>

        {/* Kolom Kanan: Peta */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-full min-h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-brand-purple/10 border-4 border-white"
        >
          <iframe
            src={storeInfo.googleMaps.embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, position: "absolute", top: 0, left: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi NBRS House Palembang"
          />
        </motion.div>
      </div>
    </SectionContainer>
  );
}
