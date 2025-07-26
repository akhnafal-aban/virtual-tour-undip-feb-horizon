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
          {
            id: "to-danau",
            position: { x: 8, y: -5, z: 30 },
            targetRoom: "danau-feb",
            label: "Danau FEB",
          },
        ],
      },
      {
        id: "danau-feb",
        name: "Danau FEB",
        panorama: "/images/original/Danau FEB.jpg",
        hotspots: [
          {
            id: "to-parkiran",
            position: { x: 10, y: -10, z: -30 },
            targetRoom: "parkiran",
            label: "Parkiran",
          },
          {
            id: "to-lapangan-basket",
            position: { x: -2, y: -10, z: 40 },
            targetRoom: "lapangan-basket",
            label: "Lapangan Basket",
          },
        ],
      },
      {
        id: "lapangan-basket",
        name: "Lapangan Basket",
        panorama: "/images/original/Lapangan Olahraga.jpg",
        hotspots: [
          {
            id: "to-danau-feb",
            position: { x: -5, y: -3, z: -10 },
            targetRoom: "danau-feb",
            label: "Danau FEB",
          },
          {
            id: "to-pakardo",
            position: { x: -85, y: -30, z: 30 },
            targetRoom: "pakardo",
            label: "Pakardo",
          },
        ],
      },
      {
        id: "pakardo",
        name: "Pakardo",
        panorama: "/images/original/Pakardo.jpg",
        hotspots: [
          {
            id: "to-lapangan-basket",
            position: { x: 9, y: -3, z: -4 },
            targetRoom: "lapangan-basket",
            label: "Lapangan Basket",
          },
          {
            id: "to-masjid-ekonomi",
            position: { x: 0, y: -80, z: 300 },
            targetRoom: "masjid-ekonomi",
            label: "Masjid",
          },
        ],
      },
      {
        id: "masjid-ekonomi",
        name: "Masjid Ekonomi",
        panorama: "/images/original/Masjid.jpg",
        hotspots: [
          {
            id: "to-pakardo",
            position: { x: 15, y: -3, z:-4 },
            targetRoom: "pakardo",
            label: "Pakardo",
          },
          {
            id: "to-dome-feb",
            position: { x: 20, y: -7, z: -10 },
            targetRoom: "dome-feb",
            label: "Dome FEB",
          },
        ],
      },
      {
        id: "dome-feb",
        name: "Dome FEB",
        panorama: "/images/original/Dome.jpg",
        hotspots: [
          {
            id: "to-masjid-ekonomi",
            position: { x: 20, y: -5, z: 30 },
            targetRoom: "masjid-ekonomi",
            label: "Masjid",
          },
          {
            id: "to-parkiran",
            position: { x: 10, y: -7, z: -20 },
            targetRoom: "parkiran",
            label: "Parkiran",
          },
        ],
      },
    ],
  },
  {
    id: "gedung-a",
    name: "Gedung A",
    description: "Gedung A FEB",
    type: "main",
    thumbnail: "/images/fotoGedung/Gedung A.jpg",
    // subBuildings: [],
    rooms: [
      {
        id: "video-gedung-a",
        name: "Video Gedung A",
        panorama: "/images/fotoGedung/Gedung A(2).jpg",
        hotspots: [
          // {
          //   id: "to-lobby-akuntansi",
          //   position: { x: 160, y: 0, z: 60 },
          //   targetRoom: "lobby-akuntansi",
          //   label: "Gedung B",
          // },
        ],
        video:
          "https://video-guide-bucket.s3.ap-southeast-2.amazonaws.com/Gedung+A.mp4",
      },
      {
        id: "lobby-manajemen",
        name: "Lobby Manajemen",
        panorama: "/images/original/Gedung A.jpg",
        hotspots: [
          {
            id: "to-video-gedung-b",
            position: { x: 25, y: -5, z: 3 },
            targetRoom: "video-gedung-b",
            label: "Gedung B",
          },
        ],
      },
    ],
  },
  {
    id: "gedung-b",
    name: "Gedung B",
    description: "Gedung B FEB",
    type: "main",
    thumbnail: "/images/fotoGedung/Gedung B(1).jpg",
    // subBuildings: [],
    rooms: [
      {
        id: "video-gedung-b",
        name: "Video Gedung B",
        panorama: "/images/fotoGedung/Gedung B(2).jpg",
        hotspots: [],
        video:
          "https://video-guide-bucket.s3.ap-southeast-2.amazonaws.com/Gedung+B.mp4",
      },
      {
        id: "lobby-akuntansi",
        name: "Lobby Akuntansi",
        panorama: "/images/original/Gedung B.jpg",
        hotspots: [
          {
            id: "to-video-gedung-c",
            position: { x: -40, y: -8, z: 0 },
            targetRoom: "video-gedung-c",
            label: "Gedung C",
          },
        ],
      },
    ],
  },
  {
    id: "gedung-c",
    name: "Gedung C",
    description: "Gedung C FEB",
    type: "main",
    thumbnail: "/images/fotoGedung/Gedung C.jpg",
    // subBuildings: [],
    rooms: [
      {
        id: "video-gedung-c",
        name: "Video Gedung C",
        panorama: "/images/fotoGedung/Gedung C(1).jpg",
        hotspots: [
          // {
          //   id: "to-hall",
          //   position: { x: 400, y: 0, z: -180 },
          //   targetRoom: "hall-gedung-c",
          //   label: "Hall Gedung C",
          // },
        ],
        video:
          "https://video-guide-bucket.s3.ap-southeast-2.amazonaws.com/Gedung+C.mp4",
      },
      {
        id: "lobby-ilmu-ekonomi",
        name: "Lobby Ilmu Ekonomi",
        panorama: "/images/original/Gedung C.jpg",
        hotspots: [
          {
            id: "to-hall",
            position: { x: 30, y: -7, z: -5 },
            targetRoom: "hall-gedung-c",
            label: "Hall Gedung C",
          },
        ],
      },
      {
        id: "hall-gedung-c",
        name: "Hall Gedung C",
        panorama: "/images/original/Hall Gedung C.jpg",
        hotspots: [
          {
            id: "to-kelas",
            position: { x: 50, y: -15, z: -50 },
            targetRoom: "kelas-gedung-c",
            label: "Lobby Ilmu Ekonomi",
          },
        ],
      },
      {
        id: "kelas-gedung-c",
        name: "Kelas (360)",
        panorama: "/images/original/Ruang Kelas.jpg", // Ganti jika ada foto kelas 360
        hotspots: [
          {
            id: "to-kantin",
            position: { x: -5, y: -5, z: 30 },
            targetRoom: "kantin-gedung-c",
            label: "Kantin Gedung C",
          },
        ],
      },
      {
        id: "kantin-gedung-c",
        name: "Kantin",
        panorama: "/images/original/Kantin Gedung C.jpg",
        hotspots: [
          {
            id: "to-video-gedung-iup",
            position: { x: -7, y: -5, z: 30 },
            targetRoom: "video-gedung-iup",
            label: "Gedung IUP",
          },
        ],
      },
    ],
  },
  {
    id: "gedung-iup",
    name: "Gedung IUP",
    description: "Gedung IUP FEB",
    type: "main",
    thumbnail: "/images/fotoGedung/Gedung IUP(3).jpg",
    // subBuildings: [],
    rooms: [
      {
        id: "video-gedung-iup",
        name: "Video Gedung IUP",
        panorama: "/images/fotoGedung/Gedung IUP.jpg",
        hotspots: [
          // {
          //   id: "to-digilib",
          //   position: { x: 80, y: 0, z: 60 },
          //   targetRoom: "digilib",
          //   label: "Digilib",
          // },
        ],
        video:
          "https://video-guide-bucket.s3.ap-southeast-2.amazonaws.com/Gedung+IUP.mp4",
      },
      {
        id: "perpustakaan",
        name: "Perpustakaan",
        panorama: "/images/original/Perpustakaan.jpg",
        hotspots: [
          {
            id: "to-digilib",
            position: { x: -3, y: -1, z: -3 },
            targetRoom: "digilib",
            label: "Digilib",
          },
        ],
      },
      {
        id: "digilib",
        name: "Digilib",
        panorama: "/images/original/Digilib Gedung IUP.jpg",
        hotspots: [
          {
            id: "to-bloomberg",
            position: { x: -5, y: -1, z: 3 },
            targetRoom: "bloomberg",
            label: "Bloomberg",
          },
        ],
      },
      {
        id: "bloomberg",
        name: "Bloomberg",
        panorama: "/images/original/Bloomberg IUP .jpg",
        hotspots: [
          {
            id: "to-lab-komputer",
            position: { x: 12, y: -4, z: -6 },
            targetRoom: "lab-komputer",
            label: "Lab Komputer",
          },
        ],
      },
      {
        id: "lab-komputer",
        name: "Lab Komputer",
        panorama: "/images/original/Lab Komputer IUP.jpg",
        hotspots: [
          {
            id: "to-video-gedung-kwu",
            position: { x: -30, y: -10, z:-15 },
            targetRoom: "video-gedung-kwu",
            label: "Gedung KWU",
          },
        ],
      },
    ],
  },
  {
    id: "gedung-kwu",
    name: "Gedung KWU",
    description: "Gedung Kewirausahaan FEB",
    type: "main",
    thumbnail: "/images/fotoGedung/Lab KWU(2).jpg",
    // subBuildings: [],
    rooms: [
      {
        id: "video-gedung-kwu",
        name: "Video Gedung Lab KWU",
        panorama: "/images/fotoGedung/Lab KWU(1).jpg",
        hotspots: [],
        video:
          "https://video-guide-bucket.s3.ap-southeast-2.amazonaws.com/Gedung+Lab+KWU.mp4",
      },
      {
        id: "lab-kwu",
        name: "Gedung KWU",
        panorama: "/images/original/Gedung KWU.jpg",
        hotspots: [
          {
            id: "to-insipiration-space",
            position: { x: -5, y: -4, z: -10 },
            targetRoom: "inspiration-space",
            label: "The Inspiration Space",
          },
        ],
      },
      {
        id: "inspiration-space",
        name: "The Inspiration Space",
        panorama: "/images/original/Inspiration Space KWU.jpg",
        hotspots: [
          {
            id: "to-dekanat",
            position: { x: 2, y: -1, z: -3 },
            targetRoom: "lobby-dekanat",
            label: "Gedung Dekanat",
          },
        ],
      },
    ],
  },
  {
    id: "dekanat",
    name: "Dekanat",
    description: "Gedung Dekanat FEB",
    type: "main",
    thumbnail: "/images/fotoGedung/Dekanat.jpg",
    // subBuildings: [],
    rooms: [
      {
        id: "lobby-dekanat",
        name: "Lobby Dekanat",
        panorama: "/images/original/Dekanat FEB.jpg",
        hotspots: [
          {
            id: "to-gedung-a",
            position: { x: -5, y: -1, z: -3 },
            targetRoom: "video-gedung-a",
            label: "Gedung A",
          },
        ],
      },
    ],
  },
  {
    id: "gedung-pkm",
    name: "Gedung PKM",
    description: "Gedung PKM FEB",
    type: "main",
    thumbnail: "/images/fotoGedung/Gedung PKM ( Fasilitas ).jpg",
    // subBuildings: [],
    rooms: [],
  },
];

export const subBuildingData = {};
