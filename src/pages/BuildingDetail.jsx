import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, Building2, MapPin, Eye, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { campusBuildings } from "@/data/campusData";
import PanoramaViewer from "@/components/PanoramaViewer";
import RoomNavigation from "@/components/RoomNavigation";

export default function BuildingDetail() {
  const { buildingId } = useParams();
  const navigate = useNavigate();
  const [building, setBuilding] = useState(null);
  const [currentRoom, setCurrentRoom] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const foundBuilding = campusBuildings.find((b) => b.id === buildingId);
    if (foundBuilding) {
      setBuilding(foundBuilding);
      if (foundBuilding.rooms && foundBuilding.rooms.length > 0) {
        setCurrentRoom(foundBuilding.rooms[0]);
      }
    }
    setIsLoading(false);
  }, [buildingId]);

  const handleRoomChange = (roomId) => {
    const room = building.rooms.find((r) => r.id === roomId);
    if (room) {
      setCurrentRoom(room);
    } else {
      for (const b of campusBuildings) {
        const targetRoom = b.rooms.find((r) => r.id === roomId);
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
          <h1 className="text-2xl font-bold text-black mb-4">
            Gedung tidak ditemukan
          </h1>
          <Button onClick={() => navigate("/")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Kampus
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Jelajahi Ekonomi</title>
        <meta
          name="description"
          content="Ikuti tur virtual interaktif di Fakultas Ekonomika dan Bisnis. Jelajahi gedung, fasilitas, dan ruang dalam panorama 360° yang menakjubkan."
        />
      </Helmet>

      <div className="min-h-screen relative bg-white">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 p-4 flex items-center justify-between bg-transparent">
          {/* Mobile: Home button & Building name */}
          <div className="flex items-center w-full md:w-auto ml-14">
            <div className="glass bg-white/90 rounded-lg px-4 py-2 shadow-sm flex-1 md:flex-none text-center mr-4">
              <h1 className="text-lg font-medium text-white truncate h-[22px] text-base">{building.name}</h1>
            </div>
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate("/")}
                className="glass w-10 h-10 rounded-lg bg-white/90 hover:bg-gray-100 transition-colors"
              >
                <Home className="w-[22px] h-[22px] text-white" />
              </Button>
            </div>
          </div>

          {/* Desktop: Back button */}
          <div className="hidden md:block ml-4">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="glass bg-white/90 text-black hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Kampus
            </Button>
          </div>
        </header>


        {/* Sub-buildings Section (if any) */}
        {building.subBuildings && building.subBuildings.length > 0 && (
          <div className="absolute top-20 left-4 right-4 z-40">
            <div className="glass bg-white/90 rounded-lg p-4 max-w-sm">
              <h3 className="text-black font-semibold mb-3 flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                Subgedung
              </h3>
              <div className="space-y-2">
                {building.subBuildings.map((subBuilding) => (
                  <button
                    key={subBuilding.id}
                    onClick={() => handleSubBuildingClick(subBuilding.id)}
                    className="w-full text-left p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-black text-sm"
                  >
                    <div className="font-medium">{subBuilding.name}</div>
                    <div className="text-gray-600 text-xs mt-1">
                      {subBuilding.description}
                    </div>
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
                preload="metadata"
                style={{
                  maxHeight: "100vh",
                  maxWidth: "100vw",
                  background: "black",
                }}
                poster={currentRoom.panorama || undefined}
              >
                <source src={currentRoom.video} type="video/mp4" />
                Browser Anda tidak mendukung video.
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
          <div className="min-h-screen flex items-center justify-center bg-black/20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center glass rounded-2xl p-8 max-w-md mx-4"
            >
              <Eye className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-black mb-4">
                {building.name}
              </h2>
              <p className="text-gray-600 mb-6">{building.description}</p>
              {building.subBuildings && building.subBuildings.length > 0 ? (
                <p className="text-sm text-gray-500">
                  Gedung ini memiliki subgedung. Gunakan panel navigasi untuk
                  menjelajahinya.
                </p>
              ) : (
                <Button
                  onClick={() =>
                    toast({
                      title: "Fitur Segera Hadir!",
                      description:
                        "Panorama gedung ini akan tersedia segera. Nantikan update selanjutnya! 🚀",
                    })
                  }
                  className="bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 text-white"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Jelajahi Gedung
                </Button>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </>
  );
}
