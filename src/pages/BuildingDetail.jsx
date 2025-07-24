import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, Building2, MapPin, Eye, Menu, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { campusBuildings } from '@/data/campusData';
import PanoramaViewer from '@/components/PanoramaViewer';
import RoomNavigation from '@/components/RoomNavigation';

export default function BuildingDetail() {
  const { buildingId } = useParams();
  const navigate = useNavigate();
  const [building, setBuilding] = useState(null);
  const [currentRoom, setCurrentRoom] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const foundBuilding = campusBuildings.find(b => b.id === buildingId);
    if (foundBuilding) {
      setBuilding(foundBuilding);
      if (foundBuilding.rooms && foundBuilding.rooms.length > 0) {
        setCurrentRoom(foundBuilding.rooms[0]);
      }
    }
    setIsLoading(false);
  }, [buildingId]);

  const handleRoomChange = (roomId) => {
    const room = building.rooms.find(r => r.id === roomId);
    if (room) {
      setCurrentRoom(room);
    } else {
      for (const b of campusBuildings) {
        const targetRoom = b.rooms.find(r => r.id === roomId);
        if (targetRoom) {
          navigate(`/building/${b.id}`);
          setTimeout(() => {
            setCurrentRoom(targetRoom);
          }, 100);
          return;
        }
      }
      toast({
        title: "Room tidak ditemukan",
        description: "Hotspot mengarah ke ruangan yang tidak tersedia.",
      });
    }
  };

  const handleSubBuildingClick = (subBuildingId) => {
    navigate(`/building/${buildingId}/sub/${subBuildingId}`);
  };

  if (!building) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Building not found</h1>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Campus
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Journey Of Economics</title>
        <meta name="description" content="Take an immersive virtual tour of our beautiful Faculty of Economics and Business. Explore buildings, facilities, and spaces in stunning 360° panoramic views." />
      </Helmet>

      <div className="min-h-screen relative">
        {/* Header */}
        <header className="absolute top-0 left-0 right-0 z-50 p-4 flex items-center justify-between">
          {/* Hamburger (Menu) icon for mobile */}
          <div className="flex items-center gap-2">
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)} className="glass bg-black/50">
                <Menu className="w-6 h-6 text-white" />
              </Button>
            </div>
            <div className="hidden md:block">
              <Button
                variant="ghost"
                onClick={() => navigate('/')}
                className="glass bg-black/80 text-white hover:bg-white/20"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Campus
              </Button>
            </div>
          </div>
          <div className="glass bg-black/50 rounded-lg px-4 py-2">
            <h1 className="text-lg font-bold text-white">{building.name}</h1>
          </div>
          {/* Home icon for mobile (show only if sidebar is closed) */}
          <div className="md:hidden">
            {!sidebarOpen && (
              <Button variant="ghost" size="icon" onClick={() => navigate('/')} className="glass bg-black/50">
                <Home className="w-6 h-6 text-white" />
              </Button>
            )}
          </div>
        </header>

        {/* Sub-buildings Section (if any) */}
        {building.subBuildings && building.subBuildings.length > 0 && (
          <div className="absolute top-20 left-4 right-4 z-40">
            <div className="glass bg-black/50 rounded-lg p-4 max-w-sm">
              <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                Sub-buildings
              </h3>
              <div className="space-y-2">
                {building.subBuildings.map((subBuilding) => (
                  <button
                    key={subBuilding.id}
                    onClick={() => handleSubBuildingClick(subBuilding.id)}
                    className="w-full text-left p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white text-sm"
                  >
                    <div className="font-medium">{subBuilding.name}</div>
                    <div className="text-blue-200 text-xs mt-1">{subBuilding.description}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Room Navigation */}
        {building.rooms && building.rooms.length > 0 && (
          <RoomNavigation
            rooms={building.rooms}
            currentRoom={currentRoom}
            onRoomChange={handleRoomChange}
            isOpen={sidebarOpen || window.innerWidth >= 768}
            onClose={() => setSidebarOpen(false)}
          />
        )}

        {/* Room Content: Video or Panorama */}
        {currentRoom ? (
          currentRoom.video ? (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black">
              <video
                width="100%"
                height="100%"
                controls
                style={{ maxHeight: '100vh', maxWidth: '100vw', background: 'black' }}
                poster={currentRoom.panorama || undefined}
              >
                <source src={currentRoom.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <div className="absolute inset-0 z-10">
              <PanoramaViewer
                room={currentRoom}
                onHotspotClick={handleRoomChange}
              />
            </div>
          )
        ) : (
          <div className="min-h-screen flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center glass rounded-2xl p-8 max-w-md mx-4"
            >
              <Eye className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">
                {building.name}
              </h2>
              <p className="text-blue-200 mb-6">
                {building.description}
              </p>
              {building.subBuildings && building.subBuildings.length > 0 ? (
                <p className="text-sm text-blue-300">
                  This building contains sub-buildings. Use the navigation panel to explore them.
                </p>
              ) : (
                <Button
                  onClick={() => toast({
                    title: "🚧 Feature Coming Soon!",
                    description: "Panoramic views for this building will be available soon. Stay tuned! 🚀"
                  })}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Explore Building
                </Button>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </>
  );
}
