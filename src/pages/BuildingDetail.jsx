
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowLeft, Building2, MapPin, Eye } from 'lucide-react';
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
    }
  };

  const handleSubBuildingClick = (subBuildingId) => {
    navigate(`/building/${buildingId}/sub/${subBuildingId}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading-spinner"></div>
      </div>
    );
  }

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
        <title>{building.name} - Virtual Campus Tour</title>
        <meta name="description" content={`Explore ${building.name} in 360° panoramic view. ${building.description}`} />
      </Helmet>

      <div className="min-h-screen relative">
        {/* Header */}
        <header className="absolute top-0 left-0 right-0 z-50 p-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="glass text-white hover:bg-white/20"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Campus
            </Button>
            
            <div className="glass rounded-lg px-4 py-2">
              <h1 className="text-lg font-bold text-white">{building.name}</h1>
            </div>
          </div>
        </header>

        {/* Sub-buildings Section (if any) */}
        {building.subBuildings && building.subBuildings.length > 0 && (
          <div className="absolute top-20 left-4 z-40">
            <div className="glass rounded-lg p-4 max-w-sm">
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
          />
        )}

        {/* Panorama Viewer */}
        {currentRoom ? (
          <PanoramaViewer
            room={currentRoom}
            onHotspotClick={handleRoomChange}
          />
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
