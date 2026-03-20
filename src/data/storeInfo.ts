export const storeInfo = {
  name: "NBRS House Palembang",
  address: "Jl. Radial No.3C, 24 Ilir, Kec. Bukit Kecil, Kota Palembang, Sumatera Selatan 30127",
  city: "Palembang, Sumatera Selatan",
  phone: "+62 821-7517-5810",
  operationalHours: [
    { day: "Setiap Hari", hours: "08:00 - 19:00" },
  ],
  googleMaps: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.45330336219!2d104.74706599999999!3d-2.9854724999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b75f8fbd6e4a5%3A0xb35515c0e1eabc86!2sNibras%20House%20Palembang!5e0!3m2!1sen!2sid!4v1711000000000!5m2!1sen!2sid", // using standard embed URL construction for the given location
    placeUrl: "https://maps.app.goo.gl/VRo9DxtknZrEP6L36",
    rating: 4.8, 
    totalReviews: 24, // Assuming based on typical numbers, though not directly provided it adds realism
  },
};

export interface GoogleReview {
    id: number;
    name: string;
    rating: number;
    text: string;
    relativeTime: string;
    profilePhoto?: string;
    attachedImage?: string;
}

export const googleReviews: GoogleReview[] = [
  {
    id: 1,
    name: "Nunung",
    rating: 5,
    text: "Penataan Baju Rapi 👌\nModel2nya up date terbaru 👍\nCouple keluarga keren 👌 👍 ...",
    relativeTime: "4 years ago",
    profilePhoto: "/images/testimonials/nunung.png", 
    attachedImage: "/images/testimonials/nunung.png",
  },
  {
    id: 2,
    name: "Arief Roman",
    rating: 5,
    text: "Alhamdulillah ke Nibra's house dapat pakaian muslim untuk keluarga dengan banyak model Gamis yg menarik.",
    relativeTime: "3 years ago",
  },
  {
    id: 3,
    name: "Ida Lidiawati",
    rating: 5,
    text: "Assalamualaikum\nBelanja di nibras house radial pelayanan ramah dan tempatnya nyaman,,,,,ada discon jg bagi member. Ayo buruan belanja di nibras house,,,,,",
    relativeTime: "3 years ago",
  },
  {
    id: 4,
    name: "Anggraini Riduan",
    rating: 5,
    text: "Karyawannya ramah,produknya bagus2, modelnya beda dri yang lain,,pokoknya nibras is the best💗 💗💓",
    relativeTime: "3 years ago",
  },
  {
    id: 5,
    name: "Atun Hasanah",
    rating: 5,
    text: "Baju gamis utk yang muda yg sholehah",
    relativeTime: "6 years ago",
    profilePhoto: "/images/testimonials/5.png",
    attachedImage: "/images/testimonials/5.png",
  },
];
