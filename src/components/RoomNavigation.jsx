
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin, Eye, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ImageOptimizer from '@/components/ImageOptimizer';

export default function RoomNavigation({ rooms, currentRoom, onRoomChange }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  if (!rooms || rooms.length === 0) return null;

  return (
    <>
      {/* Burger menu for mobile */}
      <button
        className="fixed top-4 left-4 z-[2001] p-2 rounded-lg bg-black/10 backdrop-blur border border-white/10 md:hidden"
        onClick={() => setIsMobileOpen(true)}
        aria-label="Open room navigation"
        style={{ display: isMobileOpen ? 'none' : undefined }}
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      {/* Sidebar for desktop */}
      <div className="nav-overlay hidden md:block">
        <div className={`transition-all duration-300 ${isExpanded ? 'w-80' : 'w-16'}`}>
          {/* Toggle Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="absolute top-4 -right-4 z-50 glass rounded-full p-2 hover:bg-white/20 transition-colors"
          >
            {isExpanded ? (
              <ChevronLeft className="w-4 h-4 text-black" />
            ) : (
              <ChevronRight className="w-4 h-4 text-black" />
            )}
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="p-6 h-screen overflow-y-auto "
              >
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-black mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Navigation
                  </h2>
                </div>

                <div className="space-y-3">
                  {rooms.map((room) => (
                    <motion.button
                      key={room.id}
                      onClick={() => onRoomChange(room.id)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                        currentRoom?.id === room.id
                          ? 'bg-gradient-to-r from-[#40F7B0]/20 to-[#FF8719]/20'
                          : 'bg-white/10 hover:bg-white/20 border border-black/20'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-3">
                        {room.thumbnail || room.image || room.panorama ? (
                          <ImageOptimizer
                            src={room.thumbnail || room.image || room.panorama}
                            alt={room.name}
                            className="w-20 h-16 object-cover rounded-lg border border-black/10"
                          />
                        ) : (
                          <div className="w-20 h-16 bg-blue-400/30 rounded-lg" />
                        )}
                        <div className="flex-1">
                          <h3 className="font-semibold text-black/80 text-sm">
                            {room.name}
                          </h3>
                          {room.hotspots && room.hotspots.length > 0 && (
                            <p className="text-blue-500 text-xs mt-1">
                              {room.hotspots.length} interactive point{room.hotspots.length !== 1 ? 's' : ''}
                            </p>
                          )}
                        </div>
                        {currentRoom?.id === room.id && (
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Current Room Info */}
                {currentRoom && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 p-4 bg-white/5 rounded-xl border border-black/10"
                  >
                    <h4 className="font-semibold text-black mb-2">Current Room</h4>
                    <p className="text-blue-400 text-sm mb-3">{currentRoom.name}</p>
                    {currentRoom.hotspots && currentRoom.hotspots.length > 0 && (
                      <div>
                        <p className="text-black text-xs mb-2">Interactive Points:</p>
                        <div className="space-y-1">
                          {currentRoom.hotspots.map((hotspot) => (
                            <div
                              key={hotspot.id}
                              className="text-blue-300 text-xs flex items-center gap-2"
                            >
                              <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                              {hotspot.label}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Collapsed State */}
          {!isExpanded && (
            <div className="p-4 h-screen flex flex-col items-center gap-4">
              <div className="p-2 glass rounded-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              {rooms.map((room) => (
                <button
                  key={room.id}
                  onClick={() => onRoomChange(room.id)}
                  className={`p-2 rounded-lg transition-colors ${
                    currentRoom?.id === room.id
                      ? 'bg-blue-500/30 border border-blue-400/50'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                  title={room.name}
                >
                  <Eye className="w-4 h-4 text-white" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Sidebar for mobile (slide in) */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 w-4/5 max-w-xs h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 backdrop-blur z-[2002] p-0 m-0 md:hidden shadow-2xl"
          >
            <div className="flex items-center justify-between p-2">
              <h2 className="pl-4 text-xl font-bold text-white flex items-center gap-2 m-0">
                <MapPin className="w-5 h-5" />
                Navigation
              </h2>
              <button
                className="glass rounded-full p-2 hover:bg-white/20 transition-colors"
                onClick={() => setIsMobileOpen(false)}
                aria-label="Close room navigation"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
            <div className="p-6 h-[calc(100vh-3.5rem)] overflow-y-auto">
              <div className="space-y-3">
                {rooms.map((room) => (
                  <button
                    key={room.id}
                    onClick={() => {
                      onRoomChange(room.id);
                      setIsMobileOpen(false);
                    }}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                      currentRoom?.id === room.id
                        ? 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-blue-400/50'
                        : 'bg-white/10 hover:bg-white/20 border border-transparent'
                    }`}
                  >
                    <div className="flex flex-col items-start gap-2">
                      {room.thumbnail || room.image || room.panorama ? (
                        <ImageOptimizer
                          src={room.thumbnail || room.image || room.panorama}
                          alt={room.name}
                          className="w-full h-28 object-cover rounded-xl border border-white/10 mb-2"
                        />
                      ) : (
                        <div className="w-full h-28 bg-blue-400/30 rounded-xl mb-2" />
                      )}
                      <div className="flex items-center w-full">
                        <div className="flex-1">
                          <h3 className="font-semibold text-white text-sm">
                            {room.name}
                          </h3>
                          {room.hotspots && room.hotspots.length > 0 && (
                            <p className="text-blue-200 text-xs mt-1">
                              {room.hotspots.length} interactive point{room.hotspots.length !== 1 ? 's' : ''}
                            </p>
                          )}
                        </div>
                        {currentRoom?.id === room.id && (
                          <div className="w-2 h-2 bg-blue-400 rounded-full ml-2"></div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              {/* Current Room Info */}
              {currentRoom && (
                <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="font-semibold text-white mb-2">Current Room</h4>
                  <p className="text-blue-200 text-sm mb-3">{currentRoom.name}</p>
                  {currentRoom.hotspots && currentRoom.hotspots.length > 0 && (
                    <div>
                      <p className="text-white text-xs mb-2">Interactive Points:</p>
                      <div className="space-y-1">
                        {currentRoom.hotspots.map((hotspot) => (
                          <div
                            key={hotspot.id}
                            className="text-blue-300 text-xs flex items-center gap-2"
                          >
                            <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                            {hotspot.label}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
