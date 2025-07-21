export const campusBuildings = [
  {
    id: "outdoor",
    name: "Area Luar Gedung",
    description: "Area luar dan lingkungan sekitar kampus FEB.",
    type: "outdoor",
    thumbnail: "/images/original/Parkiran.jpg",
    // subBuildings: [],
    rooms: [
      {
        id: "parkiran",
        name: "Parkiran FEB",
        panorama: "/images/original/Parkiran.jpg",
        hotspots: [
          {
            id: "to-danau",
            position: { x: 80, y: 0, z: 60 },
            targetRoom: "danau-feb",
            label: "Danau FEB",
          },
          {
            id: "to-dekanat",
            position: { x: -60, y: 0, z: 80 },
            targetRoom: "dekanat-feb",
            label: "Dekanat FEB",
          },
        ],
      },
      {
        id: "danau-feb",
        name: "Danau FEB",
        panorama: "/images/original/Danau-FEB.jpg",
        hotspots: [
          {
            id: "to-parkiran",
            position: { x: -80, y: 0, z: -60 },
            targetRoom: "parkiran",
            label: "Parkiran FEB",
          },
          {
            id: "to-masjid",
            position: { x: 60, y: 0, z: 80 },
            targetRoom: "masjid",
            label: "Masjid FEB",
          },
        ],
      },
      {
        id: "masjid",
        name: "Masjid FEB",
        panorama: "/images/original/Masjid.jpg",
        hotspots: [
          {
            id: "to-danau",
            position: { x: 80, y: 0, z: 60 },
            targetRoom: "danau-feb",
            label: "Danau FEB",
          },
          {
            id: "to-masjid-bawah",
            position: { x: -60, y: 0, z: 80 },
            targetRoom: "masjid-tampak-bawah",
            label: "Masjid Tampak Bawah",
          },
        ],
      },
      {
        id: "masjid-tampak-bawah",
        name: "Masjid Tampak Bawah",
        panorama: "/images/original/Masjid-Tampak-Bawah.jpg",
        hotspots: [
          {
            id: "to-masjid",
            position: { x: 80, y: 0, z: 60 },
            targetRoom: "masjid",
            label: "Masjid FEB",
          },
        ],
      },
      {
        id: "pakardo",
        name: "Pakardo",
        panorama: "/images/original/Pakardo.jpg",
        hotspots: [
          {
            id: "to-parkiran",
            position: { x: 80, y: 0, z: 60 },
            targetRoom: "parkiran",
            label: "Parkiran FEB",
          },
        ],
      },
      {
        id: "lapangan-olahraga",
        name: "Lapangan Olahraga",
        panorama: "/images/original/Lapangan-Olahraga.jpg",
        hotspots: [
          {
            id: "to-parkiran",
            position: { x: 80, y: 0, z: 60 },
            targetRoom: "parkiran",
            label: "Parkiran FEB",
          },
        ],
      },
    ],
  },
  {
    id: "dekanat-feb",
    name: "Dekanat FEB",
    description: "Gedung utama dekanat Fakultas Ekonomika dan Bisnis.",
    type: "main",
    thumbnail: "/images/original/Dekanat-FEB.jpg",
    // subBuildings: [],
    rooms: [
      {
        id: "dekanat-feb",
        name: "Dekanat FEB",
        panorama: "/images/original/Dekanat-FEB.jpg",
        hotspots: [
          {
            id: "to-parkiran",
            position: { x: 80, y: 0, z: 60 },
            targetRoom: "parkiran",
            label: "Parkiran FEB",
          },
          {
            id: "to-gedung-a",
            position: { x: -60, y: 0, z: 80 },
            targetRoom: "gedung-a",
            label: "Gedung A",
          },
        ],
      },
    ],
  },
  {
    id: "gedung-a",
    name: "Gedung A",
    description: "Gedung A FEB dengan berbagai ruang kelas dan fasilitas.",
    type: "main",
    thumbnail: "/images/original/Gedung-A.jpg",
    // subBuildings: [],
    rooms: [
      {
        id: "gedung-a",
        name: "Gedung A",
        panorama: "/images/original/Gedung-A.jpg",
        hotspots: [
          {
            id: "to-dekanat",
            position: { x: 80, y: 0, z: 60 },
            targetRoom: "dekanat-feb",
            label: "Dekanat FEB",
          },
          {
            id: "to-gedung-b",
            position: { x: -60, y: 0, z: 80 },
            targetRoom: "gedung-b",
            label: "Gedung B",
          },
        ],
      },
    ],
  },
  {
    id: "gedung-b",
    name: "Gedung B",
    description: "Gedung B FEB dengan fasilitas ruang kelas dan laboratorium.",
    type: "main",
    thumbnail: "/images/original/Gedung-B.jpg",
    // subBuildings: [],
    rooms: [
      {
        id: "gedung-b",
        name: "Gedung B",
        panorama: "/images/original/Gedung-B.jpg",
        hotspots: [
          {
            id: "to-gedung-a",
            position: { x: 80, y: 0, z: 60 },
            targetRoom: "gedung-a",
            label: "Gedung A",
          },
          {
            id: "to-gedung-c",
            position: { x: -60, y: 0, z: 80 },
            targetRoom: "gedung-c",
            label: "Gedung C",
          },
        ],
      },
    ],
  },
  {
    id: "gedung-c",
    name: "Gedung C",
    description: "Gedung C FEB dengan berbagai fasilitas ruang kelas, hall, dan kantin.",
    type: "main",
    thumbnail: "/images/original/Gedung-C.jpg",
    // subBuildings: [],
    rooms: [
      {
        id: "gedung-c",
        name: "Gedung C",
        panorama: "/images/original/Gedung-C.jpg",
        hotspots: [
          {
            id: "to-gedung-b",
            position: { x: 80, y: 0, z: 60 },
            targetRoom: "gedung-b",
            label: "Gedung B",
          },
          {
            id: "to-hall-c",
            position: { x: -60, y: 0, z: 80 },
            targetRoom: "hall-gedung-c",
            label: "Hall Gedung C",
          },
          {
            id: "to-kantin-c",
            position: { x: 60, y: 0, z: -80 },
            targetRoom: "kantin-gedung-c",
            label: "Kantin Gedung C",
          },
        ],
      },
      {
        id: "hall-gedung-c",
        name: "Hall Gedung C",
        panorama: "/images/original/Hall-Gedung-C.jpg",
        hotspots: [
          {
            id: "to-gedung-c",
            position: { x: 80, y: 0, z: 60 },
            targetRoom: "gedung-c",
            label: "Gedung C",
          },
        ],
      },
      {
        id: "kantin-gedung-c",
        name: "Kantin Gedung C",
        panorama: "/images/original/Kantin-Gedung-C.jpg",
        hotspots: [
          {
            id: "to-gedung-c",
            position: { x: 80, y: 0, z: 60 },
            targetRoom: "gedung-c",
            label: "Gedung C",
          },
        ],
      },
      {
        id: "selasar-gedung-c",
        name: "Selasar Gedung C",
        panorama: "/images/original/Selasar-Gedung-C.jpg",
        hotspots: [
          {
            id: "to-gedung-c",
            position: { x: 80, y: 0, z: 60 },
            targetRoom: "gedung-c",
            label: "Gedung C",
          },
        ],
      },
    ],
  },
  {
    id: "gedung-iup",
    name: "Gedung IUP",
    description: "Gedung IUP dengan fasilitas ruang kelas, lab komputer, dan digilib.",
    type: "main",
    thumbnail: "/images/original/Gedung-IUP.jpg",
    // subBuildings: [],
    rooms: [
      {
        id: "gedung-iup",
        name: "Gedung IUP",
        panorama: "/images/original/Gedung-IUP.jpg",
        hotspots: [
          {
            id: "to-lab-komputer",
            position: { x: 80, y: 0, z: 60 },
            targetRoom: "lab-komputer-iup",
            label: "Lab Komputer IUP",
          },
          {
            id: "to-digilib",
            position: { x: -60, y: 0, z: 80 },
            targetRoom: "digilib-iup",
            label: "Digilib IUP",
          },
        ],
      },
      {
        id: "lab-komputer-iup",
        name: "Lab Komputer IUP",
        panorama: "/images/original/Lab-Komputer-IUP.jpg",
        hotspots: [
          {
            id: "to-gedung-iup",
            position: { x: 80, y: 0, z: 60 },
            targetRoom: "gedung-iup",
            label: "Gedung IUP",
          },
        ],
      },
      {
        id: "digilib-iup",
        name: "Digilib Gedung IUP",
        panorama: "/images/original/Digilib-Gedung-IUP.jpg",
        hotspots: [
          {
            id: "to-gedung-iup",
            position: { x: 80, y: 0, z: 60 },
            targetRoom: "gedung-iup",
            label: "Gedung IUP",
          },
        ],
      },
      {
        id: "bloomberg-iup",
        name: "Bloomberg IUP",
        panorama: "/images/original/Bloomberg-IUP.jpg",
        hotspots: [
          {
            id: "to-gedung-iup",
            position: { x: 80, y: 0, z: 60 },
            targetRoom: "gedung-iup",
            label: "Gedung IUP",
          },
        ],
      },
    ],
  },
  {
    id: "gedung-kwu",
    name: "Gedung KWU",
    description: "Gedung Kewirausahaan dengan ruang inspirasi dan fasilitas lainnya.",
    type: "main",
    thumbnail: "/images/original/Gedung-KWU.jpg",
    // subBuildings: [],
    rooms: [
      {
        id: "gedung-kwu",
        name: "Gedung KWU",
        panorama: "/images/original/Gedung-KWU.jpg",
        hotspots: [
          {
            id: "to-inspiration-space",
            position: { x: 80, y: 0, z: 60 },
            targetRoom: "inspiration-space-kwu",
            label: "Inspiration Space KWU",
          },
        ],
      },
      {
        id: "inspiration-space-kwu",
        name: "Inspiration Space KWU",
        panorama: "/images/original/Inspiration-Space-KWU.jpg",
        hotspots: [
          {
            id: "to-gedung-kwu",
            position: { x: 80, y: 0, z: 60 },
            targetRoom: "gedung-kwu",
            label: "Gedung KWU",
          },
        ],
      },
    ],
  },
  {
    id: "perpustakaan",
    name: "Perpustakaan FEB",
    description: "Perpustakaan utama FEB dengan koleksi buku dan ruang baca.",
    type: "main",
    thumbnail: "/images/original/Perpustakaan.jpg",
    // subBuildings: [],
    rooms: [
      {
        id: "perpustakaan",
        name: "Perpustakaan FEB",
        panorama: "/images/original/Perpustakaan.jpg",
        hotspots: [
          {
            id: "to-ruang-kelas",
            position: { x: 80, y: 0, z: 60 },
            targetRoom: "ruang-kelas",
            label: "Ruang Kelas",
          },
        ],
      },
    ],
  },
  {
    id: "ruang-kelas",
    name: "Ruang Kelas",
    description: "Contoh ruang kelas di lingkungan FEB.",
    type: "main",
    thumbnail: "/images/original/Ruang-Kelas.jpg",
    // subBuildings: [],
    rooms: [
      {
        id: "ruang-kelas",
        name: "Ruang Kelas",
        panorama: "/images/original/Ruang-Kelas.jpg",
        hotspots: [
          {
            id: "to-perpustakaan",
            position: { x: 80, y: 0, z: 60 },
            targetRoom: "perpustakaan",
            label: "Perpustakaan FEB",
          },
        ],
      },
    ],
  },
];

export const subBuildingData = {};