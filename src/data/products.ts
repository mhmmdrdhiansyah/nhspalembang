export interface Product {
  id: number;
  name: string;
  slug: string;
  image: string;
  price: number;
  originalPrice?: number;
  badge?: "Best Seller" | "New" | "Diskon";
  category: string;
  description: string;
}

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Koko Couple Premium — Cream",
    slug: "koko-couple-cream",
    image: "/images/products/koko-couple-cream.jpg",
    price: 189000,
    originalPrice: 249000,
    badge: "Best Seller",
    category: "Family Collection",
    description: "Set koko couple ayah & anak, bahan katun premium warna cream",
  },
  {
    id: 2,
    name: "Gamis Family Matching — Sage Green",
    slug: "gamis-family-sage",
    image: "/images/products/gamis-family-sage.jpg",
    price: 259000,
    originalPrice: 329000,
    badge: "Best Seller",
    category: "Family Collection",
    description: "Gamis matching ibu & anak, bahan ceruti warna sage green",
  },
  {
    id: 3,
    name: "Koko Pria Modern — Navy",
    slug: "koko-pria-navy",
    image: "/images/products/koko-pria-navy.jpg",
    price: 149000,
    originalPrice: 199000,
    badge: "New",
    category: "Koko Pria",
    description: "Koko pria modern dengan detail bordir, bahan toyobo premium",
  },
  {
    id: 4,
    name: "Gamis Syar'i Elegan — Dusty Pink",
    slug: "gamis-syari-dusty",
    image: "/images/products/gamis-syari-dusty.jpg",
    price: 219000,
    originalPrice: 289000,
    badge: "Best Seller",
    category: "Gamis Wanita",
    description: "Gamis syar'i elegan dengan bahan wolfis premium, warna dusty pink",
  },
  {
    id: 5,
    name: "Set Koko Anak — Putih",
    slug: "koko-anak-putih",
    image: "/images/products/koko-anak-putih.jpg",
    price: 99000,
    originalPrice: 139000,
    category: "Anak-Anak",
    description: "Set koko anak lengkap dengan peci, bahan katun adem",
  },
  {
    id: 6,
    name: "Gamis Anak Lucu — Lavender",
    slug: "gamis-anak-lavender",
    image: "/images/products/gamis-anak-lavender.jpg",
    price: 109000,
    originalPrice: 149000,
    badge: "New",
    category: "Anak-Anak",
    description: "Gamis anak perempuan dengan motif bunga, bahan katun lembut",
  },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
