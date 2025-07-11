
export const campusBuildings = [
  {
    id: 'library',
    name: 'Central Library',
    description: 'Modern academic library with study spaces and digital resources',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    type: 'main',
    rooms: [
      {
        id: 'main-hall',
        name: 'Main Hall',
        panorama: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=2048&h=1024&fit=crop',
        hotspots: [
          {
            id: 'to-reading-room',
            position: { x: 100, y: 0, z: -50 },
            targetRoom: 'reading-room',
            label: 'Reading Room'
          },
          {
            id: 'to-computer-lab',
            position: { x: -80, y: 10, z: 60 },
            targetRoom: 'computer-lab',
            label: 'Computer Lab'
          }
        ]
      },
      {
        id: 'reading-room',
        name: 'Reading Room',
        panorama: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=2048&h=1024&fit=crop',
        hotspots: [
          {
            id: 'back-to-main',
            position: { x: 0, y: 0, z: 100 },
            targetRoom: 'main-hall',
            label: 'Main Hall'
          }
        ]
      },
      {
        id: 'computer-lab',
        name: 'Computer Lab',
        panorama: 'https://images.unsplash.com/photo-1562774053-701939374585?w=2048&h=1024&fit=crop',
        hotspots: [
          {
            id: 'back-to-main-2',
            position: { x: 0, y: 0, z: -100 },
            targetRoom: 'main-hall',
            label: 'Main Hall'
          }
        ]
      }
    ]
  },
  {
    id: 'science-complex',
    name: 'Science Complex',
    description: 'State-of-the-art laboratories and research facilities',
    thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop',
    type: 'main',
    subBuildings: [
      {
        id: 'chemistry-lab',
        name: 'Chemistry Laboratory',
        description: 'Advanced chemistry research and teaching lab',
        thumbnail: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop'
      },
      {
        id: 'physics-lab',
        name: 'Physics Laboratory',
        description: 'Modern physics lab with cutting-edge equipment',
        thumbnail: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800&h=600&fit=crop'
      }
    ],
    rooms: [
      {
        id: 'main-lobby',
        name: 'Main Lobby',
        panorama: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=2048&h=1024&fit=crop',
        hotspots: [
          {
            id: 'to-lecture-hall',
            position: { x: 50, y: 0, z: -80 },
            targetRoom: 'lecture-hall',
            label: 'Lecture Hall'
          }
        ]
      },
      {
        id: 'lecture-hall',
        name: 'Lecture Hall',
        panorama: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=2048&h=1024&fit=crop',
        hotspots: [
          {
            id: 'back-to-lobby',
            position: { x: 0, y: 0, z: 100 },
            targetRoom: 'main-lobby',
            label: 'Main Lobby'
          }
        ]
      }
    ]
  },
  {
    id: 'student-center',
    name: 'Student Center',
    description: 'Hub for student activities, dining, and social spaces',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    type: 'main',
    rooms: [
      {
        id: 'cafeteria',
        name: 'Cafeteria',
        panorama: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=2048&h=1024&fit=crop',
        hotspots: [
          {
            id: 'to-lounge',
            position: { x: -60, y: 0, z: 80 },
            targetRoom: 'student-lounge',
            label: 'Student Lounge'
          }
        ]
      },
      {
        id: 'student-lounge',
        name: 'Student Lounge',
        panorama: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=2048&h=1024&fit=crop',
        hotspots: [
          {
            id: 'back-to-cafeteria',
            position: { x: 80, y: 0, z: -60 },
            targetRoom: 'cafeteria',
            label: 'Cafeteria'
          }
        ]
      }
    ]
  },
  {
    id: 'sports-complex',
    name: 'Sports Complex',
    description: 'Athletic facilities including gym, pool, and sports fields',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    type: 'main',
    rooms: [
      {
        id: 'gymnasium',
        name: 'Gymnasium',
        panorama: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=2048&h=1024&fit=crop',
        hotspots: [
          {
            id: 'to-pool',
            position: { x: 0, y: 0, z: -100 },
            targetRoom: 'swimming-pool',
            label: 'Swimming Pool'
          }
        ]
      },
      {
        id: 'swimming-pool',
        name: 'Swimming Pool',
        panorama: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=2048&h=1024&fit=crop',
        hotspots: [
          {
            id: 'back-to-gym',
            position: { x: 0, y: 0, z: 100 },
            targetRoom: 'gymnasium',
            label: 'Gymnasium'
          }
        ]
      }
    ]
  }
];

export const subBuildingData = {
  'chemistry-lab': {
    id: 'chemistry-lab',
    name: 'Chemistry Laboratory',
    description: 'Advanced chemistry research and teaching laboratory with modern equipment',
    parentBuilding: 'science-complex',
    rooms: [
      {
        id: 'main-lab',
        name: 'Main Laboratory',
        panorama: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=2048&h=1024&fit=crop',
        hotspots: [
          {
            id: 'to-prep-room',
            position: { x: 80, y: 0, z: 60 },
            targetRoom: 'prep-room',
            label: 'Preparation Room'
          }
        ]
      },
      {
        id: 'prep-room',
        name: 'Preparation Room',
        panorama: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=2048&h=1024&fit=crop',
        hotspots: [
          {
            id: 'back-to-main-lab',
            position: { x: -80, y: 0, z: -60 },
            targetRoom: 'main-lab',
            label: 'Main Laboratory'
          }
        ]
      }
    ]
  },
  'physics-lab': {
    id: 'physics-lab',
    name: 'Physics Laboratory',
    description: 'Modern physics laboratory with cutting-edge research equipment',
    parentBuilding: 'science-complex',
    rooms: [
      {
        id: 'research-lab',
        name: 'Research Laboratory',
        panorama: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=2048&h=1024&fit=crop',
        hotspots: [
          {
            id: 'to-equipment-room',
            position: { x: -70, y: 0, z: 70 },
            targetRoom: 'equipment-room',
            label: 'Equipment Room'
          }
        ]
      },
      {
        id: 'equipment-room',
        name: 'Equipment Room',
        panorama: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=2048&h=1024&fit=crop',
        hotspots: [
          {
            id: 'back-to-research',
            position: { x: 70, y: 0, z: -70 },
            targetRoom: 'research-lab',
            label: 'Research Laboratory'
          }
        ]
      }
    ]
  }
};
