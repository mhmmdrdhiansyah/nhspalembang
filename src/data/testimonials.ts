export interface Testimonial {
  id: number;
  name: string;
  city: string;
  rating: number;
  text: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Siti Aminah",
    city: "Jakarta",
    rating: 5,
    text: "Koko family-nya bagus banget! Bahan adem dan warnanya cantik. Anak-anak juga suka pakai. Pasti repeat order!",
    image: "/images/testimonials/siti.jpg",
  },
  {
    id: 2,
    name: "Rina Wulandari",
    city: "Surabaya",
    rating: 5,
    text: "Gamis matching sama anak perempuan saya. Banyak yang tanya beli dimana. Kualitas oke banget untuk harganya!",
    image: "/images/testimonials/rina.jpg",
  },
  {
    id: 3,
    name: "Ahmad Fauzi",
    city: "Bandung",
    rating: 5,
    text: "Pertama kali beli koko couple sama istri. Bahannya premium, jahitannya rapi. Recommended banget!",
    image: "/images/testimonials/ahmad.jpg",
  },
  {
    id: 4,
    name: "Dewi Kartika",
    city: "Medan",
    rating: 4,
    text: "Suka banget sama desainnya yang syar'i tapi tetap modern. Pelayanannya juga ramah dan fast response!",
    image: "/images/testimonials/dewi.jpg",
  },
  {
    id: 5,
    name: "Budi Santoso",
    city: "Palembang",
    rating: 5,
    text: "Beli set family buat lebaran. Hasilnya keren, foto keluarga jadi makin kompak. Terima kasih!",
    image: "/images/testimonials/budi.jpg",
  },
];
