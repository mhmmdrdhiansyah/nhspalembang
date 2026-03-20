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
    name: "Family Collection",
    slug: "family-collection",
    image: "/images/categories/family.jpg",
    count: 24,
    description: "Koleksi koko & gamis matching untuk seluruh keluarga",
  },
  {
    id: 2,
    name: "Gamis Wanita",
    slug: "gamis-wanita",
    image: "/images/categories/gamis-wanita.jpg",
    count: 18,
    description: "Gamis syar'i dengan desain modern dan elegan",
  },
  {
    id: 3,
    name: "Koko Pria",
    slug: "koko-pria",
    image: "/images/categories/koko-pria.jpg",
    count: 15,
    description: "Koko premium dengan bahan nyaman dan stylish",
  },
  {
    id: 4,
    name: "Anak-Anak",
    slug: "anak-anak",
    image: "/images/categories/anak.jpg",
    count: 20,
    description: "Busana Muslim lucu dan nyaman untuk si kecil",
  },
];
