export const campusBuildings = [
  {
    id: "library",
    name: "Central Library",
    description:
      "Modern academic library with study spaces and digital resources",
    thumbnail: "/images/alex-bdnr-GNNoZa8zVwY-unsplash.jpg",
    type: "main",
    rooms: [
      {
        id: "main-hall",
        name: "Main Hall",
        panorama:
          "/images/aerial-drone-panorama-view-chisinau-moldova-sunrise.jpg",
        hotspots: [
          {
            id: "to-reading-room",
            position: { x: 100, y: 0, z: -50 },
            targetRoom: "reading-room",
            label: "Reading Room",
          },
          {
            id: "to-computer-lab",
            position: { x: -80, y: 10, z: 60 },
            targetRoom: "computer-lab",
            label: "Computer Lab",
          },
        ],
      },
      {
        id: "reading-room",
        name: "Reading Room",
        panorama: "/images/aerial-drone-panoramic-view-chisinau-moldova.jpg",
        hotspots: [
          {
            id: "back-to-main",
            position: { x: 0, y: 0, z: 100 },
            targetRoom: "main-hall",
            label: "Main Hall",
          },
        ],
      },
      {
        id: "computer-lab",
        name: "Computer Lab",
        panorama:
          "/images/aerial-drone-panoramic-view-old-brasov-centre-romania.jpg",
        hotspots: [
          {
            id: "back-to-main-2",
            position: { x: 0, y: 0, z: -100 },
            targetRoom: "main-hall",
            label: "Main Hall",
          },
        ],
      },
    ],
  },
  {
    id: "science-complex",
    name: "Science Complex",
    description: "State-of-the-art laboratories and research facilities",
    thumbnail:
      "/images/aerial-drone-view-chisinau-downtown-panorama-view-multiple-buildings-roads.jpg",
    type: "main",
    subBuildings: [
      {
        id: "chemistry-lab",
        name: "Chemistry Laboratory",
        description: "Advanced chemistry research and teaching lab",
        thumbnail:
          "/images/aerial-drone-view-chisinau-downtown-panorama-view-multiple-buildings-roads-park-with-lush.jpg",
      },
      {
        id: "physics-lab",
        name: "Physics Laboratory",
        description: "Modern physics lab with cutting-edge equipment",
        thumbnail:
          "/images/aerial-view-vang-vieng-with-mountains-balloon-sunset.jpg",
      },
    ],
    rooms: [
      {
        id: "main-lobby",
        name: "Main Lobby",
        panorama: "/images/allphoto-bangkok-GfXqtWmiuDI-unsplash.jpg",
        hotspots: [
          {
            id: "to-lecture-hall",
            position: { x: 50, y: 0, z: -80 },
            targetRoom: "lecture-hall",
            label: "Lecture Hall",
          },
        ],
      },
      {
        id: "lecture-hall",
        name: "Lecture Hall",
        panorama: "/images/bryan-goff-IuyhXAia8EA-unsplash.jpg",
        hotspots: [
          {
            id: "back-to-lobby",
            position: { x: 0, y: 0, z: 100 },
            targetRoom: "main-lobby",
            label: "Main Lobby",
          },
        ],
      },
    ],
  },
  {
    id: "student-center",
    name: "Student Center",
    description: "Hub for student activities, dining, and social spaces",
    thumbnail: "/images/kris-guico-rsB-he-ye7w-unsplash.jpg",
    type: "main",
    rooms: [
      {
        id: "cafeteria",
        name: "Cafeteria",
        panorama: "/images/montreal-sunrise-panorama.jpg",
        hotspots: [
          {
            id: "to-lounge",
            position: { x: -60, y: 0, z: 80 },
            targetRoom: "student-lounge",
            label: "Student Lounge",
          },
        ],
      },
      {
        id: "student-lounge",
        name: "Student Lounge",
        panorama: "/images/new-york-city-manhattan.jpg",
        hotspots: [
          {
            id: "back-to-cafeteria",
            position: { x: 80, y: 0, z: -60 },
            targetRoom: "cafeteria",
            label: "Cafeteria",
          },
        ],
      },
    ],
  },
  {
    id: "sports-complex",
    name: "Sports Complex",
    description: "Athletic facilities including gym, pool, and sports fields",
    thumbnail: "/images/new-york-city-panorama.jpg",
    type: "main",
    rooms: [
      {
        id: "gymnasium",
        name: "Gymnasium",
        panorama:
          "/images/panoramic-shot-farm-fields-sunlight-cloudy-sky-countryside.jpg",
        hotspots: [
          {
            id: "to-pool",
            position: { x: 0, y: 0, z: -100 },
            targetRoom: "swimming-pool",
            label: "Swimming Pool",
          },
        ],
      },
      {
        id: "swimming-pool",
        name: "Swimming Pool",
        panorama: "/images/shanghai-morning.jpg",
        hotspots: [
          {
            id: "back-to-gym",
            position: { x: 0, y: 0, z: 100 },
            targetRoom: "gymnasium",
            label: "Gymnasium",
          },
        ],
      },
    ],
  },
];

export const subBuildingData = {
  "chemistry-lab": {
    id: "chemistry-lab",
    name: "Chemistry Laboratory",
    description:
      "Advanced chemistry research and teaching laboratory with modern equipment",
    parentBuilding: "science-complex",
    rooms: [
      {
        id: "main-lab",
        name: "Main Laboratory",
        panorama: "/images/timothy-oldfield-luufnHoChRU-unsplash.jpg",
        hotspots: [
          {
            id: "to-prep-room",
            position: { x: 80, y: 0, z: 60 },
            targetRoom: "prep-room",
            label: "Preparation Room",
          },
        ],
      },
      {
        id: "prep-room",
        name: "Preparation Room",
        panorama:
          "/images/aerial-drone-panorama-view-chisinau-moldova-sunrise (1).jpg",
        hotspots: [
          {
            id: "back-to-main-lab",
            position: { x: -80, y: 0, z: -60 },
            targetRoom: "main-lab",
            label: "Main Laboratory",
          },
        ],
      },
    ],
  },
  "physics-lab": {
    id: "physics-lab",
    name: "Physics Laboratory",
    description:
      "Modern physics laboratory with cutting-edge research equipment",
    parentBuilding: "science-complex",
    rooms: [
      {
        id: "research-lab",
        name: "Research Laboratory",
        panorama:
          "/images/aerial-drone-panorama-view-chisinau-moldova-sunrise.jpg",
        hotspots: [
          {
            id: "to-equipment-room",
            position: { x: -70, y: 0, z: 70 },
            targetRoom: "equipment-room",
            label: "Equipment Room",
          },
        ],
      },
      {
        id: "equipment-room",
        name: "Equipment Room",
        panorama: "/images/aerial-drone-panoramic-view-chisinau-moldova.jpg",
        hotspots: [
          {
            id: "back-to-research",
            position: { x: 70, y: 0, z: -70 },
            targetRoom: "research-lab",
            label: "Research Laboratory",
          },
        ],
      },
    ],
  },
};
