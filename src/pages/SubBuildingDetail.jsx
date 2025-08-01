import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Menu, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { subBuildingData } from "@/data/campusData";
import PanoramaViewer from "@/components/PanoramaViewer";
import RoomNavigation from "@/components/RoomNavigation";

export default function SubBuildingDetail() {
  const { buildingId, subBuildingId } = useParams();
  const navigate = useNavigate();
  const [subBuilding, setSubBuilding] = useState(null);
  const [currentRoom, setCurrentRoom] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const foundSubBuilding = subBuildingData[subBuildingId];
    if (foundSubBuilding) {
      setSubBuilding(foundSubBuilding);
      if (foundSubBuilding.rooms && foundSubBuilding.rooms.length > 0) {
        setCurrentRoom(foundSubBuilding.rooms[0]);
      }
    }
    setIsLoading(false);
  }, [subBuildingId]);

  const handleRoomChange = (roomId) => {
    const room = subBuilding.rooms.find((r) => r.id === roomId);
    if (room) {
      setCurrentRoom(room);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (!subBuilding) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-black mb-4">
            Sub-building not found
          </h1>
          <Button onClick={() => navigate(`/building/${buildingId}`)}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Building
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{subBuilding.name} - Virtual Campus Tour</title>
        <meta
          name="description"
          content={`Explore ${subBuilding.name} in 360° panoramic view. ${subBuilding.description}`}
        />
      </Helmet>

      <div className="min-h-screen relative bg-white">
        {/* Header */}
        <header className="absolute top-0 left-0 right-0 z-50 p-4 flex items-center justify-between">
          {/* Hamburger (Menu) icon for mobile */}
          <div className="flex items-center gap-2">
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(true)}
                className="glass"
              >
                <Menu className="w-6 h-6 text-black" />
              </Button>
            </div>
            <div className="hidden md:block">
              <Button
                variant="ghost"
                onClick={() => navigate(`/building/${buildingId}`)}
                className="glass text-black hover:bg-gray-100"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Building
              </Button>
            </div>
          </div>
          <div className="glass rounded-lg px-4 py-2">
            <h1 className="text-lg font-bold text-black">{subBuilding.name}</h1>
          </div>
          {/* Home icon for mobile (show only if sidebar is closed) */}
          <div className="md:hidden">
            {!sidebarOpen && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate("/")}
                className="glass"
              >
                <Home className="w-6 h-6 text-black" />
              </Button>
            )}
          </div>
        </header>

        {/* Room Navigation */}
        {subBuilding.rooms && subBuilding.rooms.length > 0 && (
          <RoomNavigation
            rooms={subBuilding.rooms}
            currentRoom={currentRoom}
            onRoomChange={handleRoomChange}
            isOpen={sidebarOpen || window.innerWidth >= 768}
            onClose={() => setSidebarOpen(false)}
          />
        )}

        {/* Panorama Viewer */}
        {currentRoom && (
          <PanoramaViewer
            room={currentRoom}
            onHotspotClick={handleRoomChange}
          />
        )}
      </div>
    </>
  );
}
