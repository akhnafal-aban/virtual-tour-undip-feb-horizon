export const campusBuildings = [
  {
    id: "outdoor",
    name: "Area Luar Gedung",
    description: "Fasilitas di luar gedung utama FEB.",
    type: "outdoor",
    thumbnail: "/images/fotoGedung/Parkiran 3.jpg",
    // subBuildings: [],
    rooms: [
      {
        id: "parkiran",
        name: "Parkiran",
        panorama: "/images/original/Parkiran.jpg",
        hotspots: [
          { id: "to-danau", position: { x: 80, y: 0, z: 300 }, targetRoom: "danau-feb", label: "Danau FEB" },
        ],
      },
      {
        id: "danau-feb",
        name: "Danau FEB",
        panorama: "/images/original/Danau FEB.jpg",
        hotspots: [
          { id: "to-parkiran", position: { x: 100, y: -100, z: -300 }, targetRoom: "parkiran", label: "Parkiran" },
          { id: "to-lapangan-basket", position: { x: 0, y: 0, z: 300 }, targetRoom: "lapangan-basket", label: "Lapangan Basket" },
        ],
      },
      {
        id: "lapangan-basket",
        name: "Lapangan Basket",
        panorama: "/images/original/Lapangan Olahraga.jpg",
        hotspots: [
          { id: "to-pakardo", position: { x: -460, y: -30, z: 280 }, targetRoom: "pakardo", label: "Pakardo" },
        ],
      },
      {
        id: "pakardo",
        name: "Pakardo",
        panorama: "/images/original/Pakardo.jpg",
        hotspots: [
          { id: "to-lapangan-basket", position: { x: 360, y: 0, z: -450 }, targetRoom: "lapangan-basket", label: "Lapangan Basket" },
          { id: "to-masjid-ekonomi", position: { x: 0, y: 0, z: 300 }, targetRoom: "masjid-ekonomi", label: "Masjid" },
        ],
      },
      {
        id: "masjid-ekonomi",
        name: "Masjid Ekonomi",
        panorama: "/images/original/Masjid.jpg",
        hotspots: [
          { id: "to-dome-feb", position: { x: 80, y: 0, z: 60 }, targetRoom: "dome-feb", label: "Dome FEB" },
        ],
      },
      {
        id: "dome-feb",
        name: "Dome FEB",
        panorama: "/images/original/Dome.jpg",
        hotspots: [
          { id: "to-parkiran", position: { x: 80, y: 0, z: 60 }, targetRoom: "parkiran", label: "Parkiran" },
        ],
      },
    ],
  },
  {
    id: "gedung-a",
    name: "Gedung A",
    description: "Gedung A FEB",
    type: "main",
    thumbnail: "/images/fotoGedung/gedungA.jpg",
    // subBuildings: [],
    rooms: [
      {
        id: "lobby-manajemen",
        name: "Lobby Manajemen",
        panorama: "/images/original/Gedung A.jpg",
        hotspots: [
          { id: "to-lobby-akuntansi", position: { x: 160, y: 0, z: 60 }, targetRoom: "lobby-akuntansi", label: "Gedung B" },
        ],      },
      {
        id: "video-gedung-a",
        name: "Video Gedung A",
        panorama: "/images/original/Gedung A.jpg",
        hotspots: [
          { id: "to-lobby-akuntansi", position: { x: 160, y: 0, z: 60 }, targetRoom: "lobby-akuntansi", label: "Gedung B" },
        ],
        video: "https://video-guide-bucket.s3.ap-southeast-2.amazonaws.com/Gedung+A.mp4",
      },
    ],
  },
  {
    id: "gedung-b",
    name: "Gedung B",
    description: "Gedung B FEB",
    type: "main",
    thumbnail: "/images/fotoGedung/gedungB.jpg",
    // subBuildings: [],
    rooms: [
      {
        id: "lobby-akuntansi",
        name: "Lobby Akuntansi",
        panorama: "/images/original/Gedung B.jpg",
        hotspots: [
          { id: "to-lobby-manajemen", position: { x: 80, y: 0, z: 60 }, targetRoom: "lobby-manajemen", label: "Gedung A" },
        ],
      },
      {
        id: "kemenkeu",
        name: "Kemenkeu (Video)",
        panorama: null, // Video, tidak ada panorama
        hotspots: [],
        video: "https://video-guide-bucket.s3.ap-southeast-2.amazonaws.com/Gedung+B.mp4",
      },
    ],
  },
  {
    id: "gedung-c",
    name: "Gedung C",
    description: "Gedung C FEB",
    type: "main",
    thumbnail: "/images/fotoGedung/gedungC.jpg",
    // subBuildings: [],
    rooms: [
      {
        id: "lobby-ilmu-ekonomi",
        name: "Lobby Ilmu Ekonomi",
        panorama: "/images/original/Gedung C.jpg",
        hotspots: [
          { id: "to-hall", position: { x: 400, y: 0, z: -180 }, targetRoom: "hall-gedung-c", label: "Hall Gedung C" },
        ],
      },
      {
        id: "video-gedung-c",
        name: "Video Gedung C",
        panorama: "/images/original/Gedung C.jpg",
        hotspots: [
          { id: "to-hall", position: { x: 400, y: 0, z: -180 }, targetRoom: "hall-gedung-c", label: "Hall Gedung C" },
        ],
        video: "https://video-guide-bucket.s3.ap-southeast-2.amazonaws.com/Gedung+C.mp4",
      },
      {
        id: "hall-gedung-c",
        name: "Hall Gedung C",
        panorama: "/images/original/Hall Gedung C.jpg",
        hotspots: [
          { id: "to-kelas", position: { x: 340, y: -100, z: -500 }, targetRoom: "kelas-gedung-c", label: "Lobby Ilmu Ekonomi" },
        ],
      },
      {
        id: "kelas-gedung-c",
        name: "Kelas (360)",
        panorama: "/images/original/Ruang Kelas.jpg", // Ganti jika ada foto kelas 360
        hotspots: [
          { id: "to-kantin", position: { x: 10, y: 0, z: 60 }, targetRoom: "kantin-gedung-c", label: "Kantin Gedung C" },
        ],
      },
      {
        id: "kantin-gedung-c",
        name: "Kantin",
        panorama: "/images/original/Kantin Gedung C.jpg",
        hotspots: [
          { id: "to-lobby", position: { x: 0, y: -50, z: 500 }, targetRoom: "lobby-ilmu-ekonomi", label: "Lobby Ilmu Ekonomi" },
        ],
      },
    ],
  },
  {
    id: "gedung-iup",
    name: "Gedung IUP",
    description: "Gedung IUP FEB",
    type: "main",
    thumbnail: "/images/fotoGedung/IMG_3901.jpg",
    // subBuildings: [],
    rooms: [
      {
        id: "perpustakaan",
        name: "Perpustakaan",
        panorama: "/images/original/Perpustakaan.jpg",
        hotspots: [
          { id: "to-digilib", position: { x: 80, y: 0, z: 60 }, targetRoom: "digilib", label: "Digilib" },
        ],
      },
      {
        id: "video-gedung-iup",
        name: "Video Gedung IUP",
        panorama: "/images/original/Perpustakaan.jpg",
        hotspots: [
          { id: "to-digilib", position: { x: 80, y: 0, z: 60 }, targetRoom: "digilib", label: "Digilib" },
        ],
        video: "https://video-guide-bucket.s3.ap-southeast-2.amazonaws.com/Gedung+IUP.mp4",
      },
      {
        id: "digilib",
        name: "Digilib",
        panorama: "/images/original/Digilib Gedung IUP.jpg",
        hotspots: [
          { id: "to-bloomberg", position: { x: 80, y: 0, z: 60 }, targetRoom: "bloomberg", label: "Bloomberg" },
        ],
      },
      {
        id: "bloomberg",
        name: "Bloomberg",
        panorama: "/images/original/Bloomberg IUP .jpg",
        hotspots: [
          { id: "to-lab-komputer", position: { x: 80, y: 0, z: 60 }, targetRoom: "lab-komputer", label: "Lab Komputer" },
        ],
      },
      {
        id: "lab-komputer",
        name: "Lab Komputer",
        panorama: "/images/original/Lab Komputer IUP.jpg",
        hotspots: [
          { id: "to-perpustakaan", position: { x: 80, y: 0, z: 60 }, targetRoom: "perpustakaan", label: "Perpustakaan" },
        ],
      },
    ],
  },
  {
    id: "gedung-kwu",
    name: "Gedung KWU",
    description: "Gedung Kewirausahaan FEB",
    type: "main",
    thumbnail: "/images/fotoGedung/GedungKWU.jpg",
    // subBuildings: [],
    rooms: [
      {
        id: "auditorium-lab-kwu",
        name: "Auditorium Lab KWU (Video)",
        panorama: null, // Video, tidak ada panorama
        hotspots: [],
      },
      {
        id: "video-gedung-kwu",
        name: "Video Gedung Lab KWU",
        panorama: null,
        hotspots: [],
        video: "https://video-guide-bucket.s3.ap-southeast-2.amazonaws.com/Gedung+Lab+KWU.mp4",
      },
      {
        id: "inspiration-space",
        name: "The Inspiration Space (Video)",
        panorama: null, // Video, tidak ada panorama
        hotspots: [],
      },
    ],
  },
  {
    id: "dekanat",
    name: "Dekanat",
    description: "Gedung Dekanat FEB",
    type: "main",
    thumbnail: "/images/fotoGedung/IMG_3908.jpg",
    // subBuildings: [],
    rooms: [
      {
        id: "lobby-dekanat",
        name: "Lobby Dekanat (360)",
        panorama: "/images/original/Dekanat FEB.jpg",
        hotspots: [
          { id: "to-parkiran", position: { x: 80, y: 0, z: 60 }, targetRoom: "parkiran", label: "Parkiran" },
        ],
      },
    ],
  },
  {
    id: "gedung-pkm",
    name: "Gedung PKM",
    description: "Gedung PKM FEB",
    type: "main",
    thumbnail: "/images/fotoGedung/GedungPKM.jpg",
    // subBuildings: [],
    rooms: [],
  },
];

export const subBuildingData = {};
