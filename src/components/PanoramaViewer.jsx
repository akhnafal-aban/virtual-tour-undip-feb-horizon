import React, { useEffect, useRef, useState } from "react";
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";
import { Loader2, Info } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "@/components/ui/use-toast";

// Hotspot type
// x: longitude (0-1), y: latitude (0-1)
function convertHotspots(hotspots) {
  if (!hotspots) return [];
  // Fallback: jika ada x/y/z, konversi ke longitude/latitude kasar
  return hotspots
    .map((h, i) => {
      // Jika sudah ada x/y (0-1), gunakan langsung
      if (typeof h.x === "number" && typeof h.y === "number") {
        const longitude = h.x * 2 * Math.PI;
        const latitude = (h.y - 0.5) * Math.PI;
        return {
          id: `hotspot-${i}`,
          longitude,
          latitude,
          tooltip: h.label,
          data: { target: h.targetRoom || h.target },
          html: `
            <svg width="64" height="64" viewBox="0 0 64 64" style="display:block;">
              <circle cx="32" cy="32" r="30" fill="rgba(220,220,220,0.7)" stroke="#fff" stroke-width="4"/>
              <path d="M20 38 L32 26 L44 38 Q32 34 20 38 Z" fill="#222" stroke="#222" stroke-width="2" stroke-linejoin="round"/>
            </svg>
          `,
          width: 64,
          height: 64,
          anchor: "center center",
        };
      }
      // Jika x/y/z (THREE), konversi ke spherical
      if (h.position) {
        const { x, y, z } = h.position;
        const r = Math.sqrt(x * x + y * y + z * z);
        if (!r || isNaN(r)) {
          return null;
        }
        const longitude = Math.atan2(x, z);
        const latitude = Math.acos(y / r) - Math.PI / 2;
        return {
          id: `hotspot-${i}`,
          longitude,
          latitude,
          tooltip: h.label,
          data: { target: h.targetRoom || h.target },
          html: `
            <svg width="64" height="64" viewBox="0 0 64 64" style="display:block;">
              <circle cx="32" cy="32" r="30" fill="rgba(220,220,220,0.7)" stroke="#fff" stroke-width="4"/>
              <path d="M20 38 L32 26 L44 38 Q32 34 20 38 Z" fill="#222" stroke="#222" stroke-width="2" stroke-linejoin="round"/>
            </svg>
          `,
          width: 64,
          height: 64,
          anchor: "center center",
        };
      }
      return null;
    })
    .filter(Boolean);
}

const PanoramaViewer = ({ room, onHotspotClick, height = "100%" }) => {
  const viewerRef = useRef(null);
  const psvInstance = useRef(null);
  const markersPluginRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    let PSV, Markers;
    setIsLoading(true);
    setError(null);
    Promise.all([
      import("photo-sphere-viewer"),
      import("photo-sphere-viewer/dist/plugins/markers"),
    ]).then(([_PSV, _Markers]) => {
      if (!isMounted || !viewerRef.current || !room) return;
      PSV = _PSV.default || _PSV;
      const MarkersPlugin = _Markers.MarkersPlugin || _Markers.default;
      psvInstance.current = new PSV.Viewer({
        container: viewerRef.current,
        panorama: room.panorama,
        navbar: "zoom move fullscreen",
        defaultLong: Math.PI,
        plugins: [MarkersPlugin],
      });
      markersPluginRef.current =
        psvInstance.current.getPlugin(MarkersPlugin) || null;
      if (
        markersPluginRef.current &&
        room.hotspots &&
        room.hotspots.length > 0
      ) {
        markersPluginRef.current.setMarkers(convertHotspots(room.hotspots));
        markersPluginRef.current.on("select-marker", (e, marker) => {
          if (onHotspotClick && marker.data && marker.data.target) {
            onHotspotClick(marker.data.target);
          }
        });
      }
      // Loading and error events
      psvInstance.current.on("ready", () => {
        setIsLoading(false);
      });
      psvInstance.current.on("panorama-load-fail", () => {
        setError("Failed to load panorama");
        setIsLoading(false);
      });
    }).catch((err) => {
      setError("Failed to initialize panorama viewer");
      setIsLoading(false);
    });
    return () => {
      isMounted = false;
      if (psvInstance.current) {
        psvInstance.current.destroy();
        psvInstance.current = null;
      }
      markersPluginRef.current = null;
    };
    // Only run on mount/unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [room]);

  // Update panorama and markers when image or hotspots change
  useEffect(() => {
    if (psvInstance.current && room) {
      psvInstance.current.setPanorama(room.panorama);
    }
    if (markersPluginRef.current && room && room.hotspots) {
      markersPluginRef.current.setMarkers(convertHotspots(room.hotspots));
    }
  }, [room]);

  // Info button di-nonaktifkan sesuai permintaan
  // const handleInfoClick = () => {
  //   toast({
  //     title: `📍 ${room.name}`,
  //     description: `You're currently viewing the ${room.name}. Use the navigation panel to explore other rooms or click on hotspots within the panorama! 🚀`,
  //   });
  // };

  return (
    <div className="panorama-container">
      {/* Loading Overlay */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 z-30 flex items-center justify-center bg-black/90 backdrop-blur-sm"
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

      {/* Room Info Button (dinonaktifkan) */}
      {/* <button
        onClick={handleInfoClick}
        className="absolute bottom-6 right-6 z-40 glass rounded-full p-3 hover:bg-white/20 transition-colors"
      >
        <Info className="w-5 h-5 text-white" />
      </button> */}

      {/* Panorama Container */}
      <div
        ref={viewerRef}
        style={{
          width: "100%",
          height,
          // borderRadius removed so canvas is not rounded
          overflow: "hidden",
          zIndex: 20, // ensure above overlays
          position: "relative",
        }}
      />
    </div>
  );
};

export default PanoramaViewer;
