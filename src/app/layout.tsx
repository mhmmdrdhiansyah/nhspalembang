import type { Metadata } from "next";
import "./globals.css";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nibrashousepalembang.com'),
  alternates: {
    canonical: '/',
  },
  title: `${BRAND.name} — Pusat Gamis, Koko & Baju Muslim Palembang`,
  description: BRAND.description,
  keywords: [
    "nibrashouse",
    "nibras",
    "nibras palembang",
    "baju muslim",
    "gamis",
    "koko",
    "koko palembang",
    "gamis palembang",
    "baju muslim palembang",
    "fashion muslim",
    "koko couple",
    "gamis keluarga",
    "busana muslim anak",
  ],
  openGraph: {
    title: `${BRAND.name} — Pusat Gamis, Koko & Baju Muslim Palembang`,
    description: BRAND.description,
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} — Pusat Gamis, Koko & Baju Muslim Palembang`,
    description: BRAND.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ClothingStore',
    name: BRAND.name,
    description: BRAND.description,
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nibrashousepalembang.com',
    telephone: BRAND.whatsapp.number,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Palembang',
      addressRegion: 'Sumatera Selatan',
      addressCountry: 'ID',
    },
    sameAs: [
      BRAND.social.instagram,
      BRAND.social.facebook,
      BRAND.social.tiktok,
      BRAND.social.shopee,
      BRAND.social.tokopedia,
    ],
  };

  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
