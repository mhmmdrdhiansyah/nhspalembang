import React from "react";
import Image from "next/image";
import { ShoppingBag, MessageCircle, Instagram, Mail } from "lucide-react";
import { BRAND, getWhatsAppUrl } from "@/lib/constants";

const quickLinks = [
  { label: "Tentang Kami", href: "#value-props" },
  { label: "Cara Order", href: "#cta" },
  { label: "Kategori Produk", href: "#categories" },
  { label: "Testimoni", href: "#testimonials" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-purple-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-[140px] h-[45px]">
                <Image
                  src="/images/brand/Logo 1.png"
                  alt={`${BRAND.name} Logo`}
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {BRAND.description}
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                {
                  icon: () => <Instagram className="w-5 h-5" />,
                  href: BRAND.social.instagram,
                  label: "Instagram",
                },
                {
                  icon: () => (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.18a8.16 8.16 0 004.77 1.52V7.25a4.82 4.82 0 01-1-.56z" />
                    </svg>
                  ),
                  href: BRAND.social.tiktok,
                  label: "TikTok",
                },
                {
                  icon: () => (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                  href: BRAND.social.facebook,
                  label: "Facebook",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-brand-pink transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  {social.icon()}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm hover:text-brand-pink transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={getWhatsAppUrl(BRAND.whatsapp.generalMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 text-sm hover:text-brand-pink transition-colors duration-300"
                >
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  +62 821-7517-5810
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-3 text-white/60 text-sm hover:text-brand-pink transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  {BRAND.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Cara Order */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Cara Order</h3>
            <ol className="space-y-3 text-white/60 text-sm">
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-pink/20 text-brand-pink text-xs flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </span>
                Pilih produk yang diinginkan
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-pink/20 text-brand-pink text-xs flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </span>
                Klik tombol Order WhatsApp
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-pink/20 text-brand-pink text-xs flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </span>
                Konfirmasi pesanan & transfer
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-pink/20 text-brand-pink text-xs flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </span>
                Pesanan dikirim ke alamat Anda
              </li>
            </ol>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <p className="text-sm text-white/40">
            Made with ❤️ di Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
