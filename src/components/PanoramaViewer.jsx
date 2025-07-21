
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, Info } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

export default function PanoramaViewer({ room, onHotspotClick }) {
  const containerRef = useRef(null);
  const viewerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!room || !containerRef.current) return;

    const loadPanolens = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Use global PANOLENS and THREE from CDN scripts
        const PANOLENS = window.PANOLENS;
        const THREE = window.THREE;
        if (!PANOLENS || !THREE) {
          throw new Error('PANOLENS or THREE is not loaded.');
        }

        // Clear previous viewer
        if (viewerRef.current) {
          viewerRef.current.dispose();
          viewerRef.current = null;
        }

        // Clear container
        containerRef.current.innerHTML = '';

        // Create panorama
        const panorama = new PANOLENS.ImagePanorama(room.panorama);

        // Add hotspots
        if (room.hotspots && room.hotspots.length > 0) {
          room.hotspots.forEach((hotspot) => {
            const hotspotElement = new PANOLENS.Infospot(5, 'images/hotspot-arrow-up.png');
            hotspotElement.position.set(hotspot.position.x, hotspot.position.y, hotspot.position.z);
            hotspotElement.addHoverText(hotspot.label);
            
            hotspotElement.addEventListener('click', () => {
              if (onHotspotClick) {
                onHotspotClick(hotspot.targetRoom);
              }
            });

            panorama.add(hotspotElement);
          });
        }

        // Create viewer
        const viewer = new PANOLENS.Viewer({
          container: containerRef.current,
          autoRotate: true,
          autoRotateSpeed: 0.5,
          controlBar: true,
        });

        viewer.add(panorama);
        viewerRef.current = viewer;

        // Handle loading completion
        panorama.addEventListener('load', () => {
          setIsLoading(false);
        });

        panorama.addEventListener('error', () => {
          setError('Failed to load panorama');
          setIsLoading(false);
        });

      } catch (err) {
        console.error('Error loading Panolens:', err);
        setError('Failed to initialize panorama viewer');
        setIsLoading(false);
        
        // Fallback: Show static image
        showFallbackImage();
      }
    };

    const showFallbackImage = () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = `
          <div class="w-full h-full relative overflow-hidden rounded-lg">
            <img 
              src="${room.panorama}" 
              alt="${room.name} panoramic view"
              class="w-full h-full object-cover"
              style="object-position: center;"
            />
            <div class="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div class="glass rounded-lg p-4 text-center">
                <p class="text-white text-sm mb-2">360° Viewer Loading...</p>
                <p class="text-blue-200 text-xs">Click and drag to explore</p>
              </div>
            </div>
          </div>
        `;
      }
    };

    loadPanolens();

    return () => {
      if (viewerRef.current) {
        viewerRef.current.dispose();
        viewerRef.current = null;
      }
    };
  }, [room, onHotspotClick]);

  const handleInfoClick = () => {
    toast({
      title: `📍 ${room.name}`,
      description: `You're currently viewing the ${room.name}. Use the navigation panel to explore other rooms or click on hotspots within the panorama! 🚀`
    });
  };

  return (
    <div className="panorama-container">
      {/* Loading Overlay */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 z-30 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        >
          <div className="glass rounded-2xl p-8 text-center">
            <Loader2 className="w-12 h-12 text-blue-400 animate-spin mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Loading Panorama</h3>
            <p className="text-blue-200">Preparing your 360° experience...</p>
          </div>
        </motion.div>
      )}

      {/* Error Overlay */}
      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 z-30 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        >
          <div className="glass rounded-2xl p-8 text-center max-w-md mx-4">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Info className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Panorama Unavailable</h3>
            <p className="text-blue-200 mb-4">{error}</p>
            <p className="text-sm text-blue-300">Showing static view instead</p>
          </div>
        </motion.div>
      )}

      {/* Room Info Button */}
      <button
        onClick={handleInfoClick}
        className="absolute bottom-6 right-6 z-40 glass rounded-full p-3 hover:bg-white/20 transition-colors"
      >
        <Info className="w-5 h-5 text-white" />
      </button>

      {/* Panorama Container */}
      <div
        ref={containerRef}
        className="panorama-viewer w-full h-full"
      />
    </div>
  );
}
