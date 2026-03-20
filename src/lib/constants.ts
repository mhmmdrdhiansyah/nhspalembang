export const BRAND = {
  name: "Cantik & Unik",
  tagline: "Fashion Muslim Keluarga yang Cantik & Unik",
  description:
    "Brand fashion Muslim Indonesia dengan koleksi family matching — koko dan gamis yang cantik, syar'i, dan terjangkau untuk seluruh keluarga.",
  whatsapp: {
    number: "6282175175810",
    generalMessage:
      "Halo kak, saya tertarik melihat koleksi family matching. Bisa dibantu?",
    orderMessage: "Halo kak, saya ingin order. Bisa dibantu?",
    productMessage: (productName: string) =>
      `Halo kak, saya tertarik dengan ${productName}. Apakah masih tersedia?`,
  },
  social: {
    instagram: "https://instagram.com/",
    tiktok: "https://tiktok.com/",
    facebook: "https://facebook.com/",
    shopee: "https://shopee.co.id/",
    tokopedia: "https://tokopedia.com/",
    tiktokShop: "https://tiktok.com/",
  },
  email: "info@cantikdanunik.com",
} as const;

export const COLORS = {
  primary: "#D11977",
  secondary: "#502A7E",
  accent: "#F1905E",
  background: "#FFFFFF",
  backgroundAlt: "#FAFAFA",
  support: "#F8F4F9",
  textDark: "#2D2D2D",
  textMuted: "#666666",
} as const;

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${BRAND.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
