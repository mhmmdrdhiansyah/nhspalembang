import type { Metadata } from "next";
import "./globals.css";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${BRAND.name} — Fashion Muslim Keluarga`,
  description: BRAND.description,
  keywords: [
    "fashion muslim",
    "koko couple",
    "gamis keluarga",
    "family matching",
    "busana muslim anak",
    "koko pria",
    "gamis syari",
    "cantik dan unik",
  ],
  openGraph: {
    title: `${BRAND.name} — Fashion Muslim Keluarga`,
    description: BRAND.description,
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} — Fashion Muslim Keluarga`,
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
  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
