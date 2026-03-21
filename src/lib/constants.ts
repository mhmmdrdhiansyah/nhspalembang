export const BRAND = {
  name: "NBRS House Palembang",
  tagline: "Pusat Baju Muslim, Gamis & Koko di Palembang",
  description:
    "NBRS House Palembang (Nibras House) menyediakan rujukan fashion Muslim terlengkap. Temukan berbagai koleksi baju muslim, gamis, koko, dan busana keluarga yang cantik, syar'i, dan premium di Palembang.",
  whatsapp: {
    number: "6282175175810",
    generalMessage:
      "Assalamu'alaikum Admin NBRS House Palembang, saya baru saja lihat website-nya. Koleksinya bagus-bagus! 😍\n\nBoleh tanya-tanya dulu untuk koleksi yang terbaru?",
    orderMessage: 
      "Assalamu'alaikum Admin NBRS House Palembang, saya baru saja lihat website-nya. Koleksinya bagus-bagus! 😍\n\nBoleh tanya-tanya dulu untuk koleksi yang terbaru?",
    productMessage: (productName: string) =>
      `Assalamu'alaikum Admin NBRS House Palembang, saya baru saja lihat website-nya. Koleksinya bagus-bagus! 😍\n\nBoleh tanya-tanya dulu untuk koleksi ${productName}?`,
  },
  social: {
    instagram: "https://www.instagram.com/nibrashouse_palembang?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    tiktok: "https://www.tiktok.com/@nibrashousepalembang?is_from_webapp=1&sender_device=pc",
    facebook: "https://www.facebook.com/nhspalembang",
    shopee: "https://shopee.co.id/nibrashousepalembang",
    tokopedia: "https://tokopedia.com/",
    tiktokShop: "https://www.tiktok.com/@nibrashousepalembang?is_from_webapp=1&sender_device=pc",
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
