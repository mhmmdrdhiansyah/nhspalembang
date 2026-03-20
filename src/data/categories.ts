export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  count: number;
  description: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: "Sarimbit Keluarga",
    slug: "family-collection",
    image: "/images/categories/sarimbit.jpeg",
    count: 24,
    description: "Koleksi koko & gamis matching untuk seluruh keluarga",
  },
  {
    id: 2,
    name: "Gamis Wanita",
    slug: "gamis-wanita",
    image: "/images/categories/gamis.jpeg",
    count: 18,
    description: "Gamis syar'i dengan desain modern dan elegan",
  },
  {
    id: 3,
    name: "Koko Pria",
    slug: "koko-pria",
    image: "/images/categories/koko.jpg",
    count: 15,
    description: "Koko premium dengan bahan nyaman dan stylish",
  },
  {
    id: 4,
    name: "Hijab & Scarf",
    slug: "hijab",
    image: "/images/categories/hijab.jpg",
    count: 20,
    description: "Hijab cantik dan nyaman untuk aktivitas sehari-hari",
  },
];
