export interface Photo {
  id: string;
  url: string;
  caption: string;
  width?: number; // for grid layout
  height?: number; // for grid layout
}

export const galleryPhotos: Photo[] = [
  {
    id: "1",
    url: "/gallery/1.jpg",
    caption: "ga ada rencana, ujung-ujungnya malah ini yang paling seru 😭",
  },
  {
    id: "2",
    url: "/gallery/2.png",
    caption: "senyumnya beda kalau lagi seneng beneran.",
  },
  {
    id: "3",
    url: "/gallery/3.jpg",
    caption: "nunggu kopi sambil ngobrol ngalor-ngidul. biasa aja tapi ngangenin.",
  },
  {
    id: "4",
    url: "/gallery/4.jpg",
    caption: "lupa ngobrolin apa, tapi ketawanya masih inget.",
  },
  {
    id: "5",
    url: "/gallery/5.jpg",
    caption: "perjalanannya singkat tapi fotonya banyak banget lol",
  },
  {
    id: "6",
    url: "/gallery/6.jpg",
    caption: "tempat ini udah jadi langganan tanpa pernah direncanain.",
  },
  {
    id: "7",
    url: "/gallery/7.jpg",
    caption: "literally ga nyangka hari itu bakal segitu serunya.",
  },
  {
    id: "8",
    url: "/gallery/8.jpg",
    caption: "ini mah singkat banget tapi tetep disimpen 🤍",
  },
  {
    id: "9",
    url: "/gallery/9.jpg",
    caption: "ngobrol sampai lupa waktu lagi. udah biasa.",
  },
  {
    id: "10",
    url: "/gallery/10.jpg",
    caption: "diem-dieman tapi ga canggung sama sekali.",
  },
  {
    id: "11",
    url: "/gallery/11.jpg",
    caption: "salah satu hari terbaik yang ga pake effort buat jadi bagus.",
  }
];

export const highlightMoments = [
  {
    id: "h1",
    title: "Santai Tanpa Rencana",
    desc: "Bukan ke mana-mana yang spesial, cuma duduk bareng dan tiba-tiba waktunya udah habis aja. Ga canggung, ga bosen.",
    url: "/highlights/1.jpg",
    align: "left"
  },
  {
    id: "h2",
    title: "Ngobrolin Apapun",
    desc: "Topiknya random banget, dari yang ga penting banget sampai yang ujungnya malah ngomongin soal masa depan. Jenis obrolan yang ga pengen berhenti.",
    url: "/highlights/2.jpg",
    align: "right"
  }
];
