
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function RoomNavigation({ rooms, currentRoom, onRoomChange }) {
  const [isExpanded, setIsExpanded] = useState(true);

  if (!rooms || rooms.length === 0) return null;

  return (
    <div className="nav-overlay">
      <div className={`transition-all duration-300 ${isExpanded ? 'w-80' : 'w-16'}`}>
        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute top-4 -right-4 z-50 glass rounded-full p-2 hover:bg-white/20 transition-colors"
        >
          {isExpanded ? (
            <ChevronLeft className="w-4 h-4 text-white" />
          ) : (
            <ChevronRight className="w-4 h-4 text-white" />
          )}
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="p-6 h-screen overflow-y-auto"
            >
              <div className="mb-6">
                <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Room Navigation
                </h2>
                <p className="text-blue-200 text-sm">
                  Explore different rooms and spaces
                </p>
              </div>

              <div className="space-y-3">
                {rooms.map((room) => (
                  <motion.button
                    key={room.id}
                    onClick={() => onRoomChange(room.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                      currentRoom?.id === room.id
                        ? 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-blue-400/50'
                        : 'bg-white/10 hover:bg-white/20 border border-transparent'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        currentRoom?.id === room.id
                          ? 'bg-blue-500/30'
                          : 'bg-white/10'
                      }`}>
                        <Eye className="w-4 h-4 text-white" />
                      </div>
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
                  className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10"
                >
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
  );
}
