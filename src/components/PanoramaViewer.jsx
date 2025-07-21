import React, { useEffect, useRef } from "react";
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";
import { Loader2, Info } from "lucide-react";
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
        return {
          id: `hotspot-${i}`,
          longitude: h.x * 2 * Math.PI,
          latitude: (h.y - 0.5) * Math.PI,
          tooltip: h.label,
          data: { target: h.targetRoom || h.target },
          html: `<div style='font-size:2rem; color:#68da51;'>➔</div>`,
        };
      }
      // Jika x/y/z (THREE), konversi ke spherical
      if (h.position) {
        const { x, y, z } = h.position;
        const r = Math.sqrt(x * x + y * y + z * z);
        const longitude = Math.atan2(x, z);
        const latitude = Math.acos(y / r) - Math.PI / 2;
        return {
          id: `hotspot-${i}`,
          longitude,
          latitude,
          tooltip: h.label,
          data: { target: h.targetRoom || h.target },
          html: `<div style='font-size:2rem; color:#68da51;'>➔</div>`,
        };
      }
      return null;
    })
    .filter(Boolean);
}

const PanoramaViewer = ({ room, onHotspotClick, height = 500 }) => {
  const viewerRef = useRef(null);
  const psvInstance = useRef(null);
  const markersPluginRef = useRef(null);

  useEffect(() => {
    let isMounted = true;
    let PSV, Markers;
    Promise.all([
      import("photo-sphere-viewer"),
      import("photo-sphere-viewer/dist/plugins/markers"),
    ]).then(([_PSV, _Markers]) => {
      if (!isMounted || !viewerRef.current || !room) return;
      PSV = _PSV;
      Markers = _Markers;
      psvInstance.current = new PSV.Viewer({
        container: viewerRef.current,
        panorama: room.panorama,
        navbar: "zoom move fullscreen",
        defaultLong: Math.PI,
        plugins: [Markers.MarkersPlugin],
      });
      markersPluginRef.current =
        psvInstance.current.getPlugin(Markers.MarkersPlugin) || null;
      if (
        markersPluginRef.current &&
        room.hotspots &&
        room.hotspots.length > 0
      ) {
        markersPluginRef.current.setMarkers(convertHotspots(room.hotspots));
        markersPluginRef.current.on("select-marker", (_e, marker) => {
          if (onHotspotClick && marker.data && marker.data.target) {
            onHotspotClick(marker.data.target);
          }
        });
      }
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

  const handleInfoClick = () => {
    toast({
      title: `📍 ${room.name}`,
      description: `You're currently viewing the ${room.name}. Use the navigation panel to explore other rooms or click on hotspots within the panorama! 🚀`,
    });
  };

  return (
    <div className="panorama-container">
      {/* Loading Overlay */}
      {!room && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="glass rounded-2xl p-8 text-center">
            <Loader2 className="w-12 h-12 text-blue-400 animate-spin mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Loading Panorama
            </h3>
            <p className="text-blue-200">Preparing your 360° experience...</p>
          </div>
        </div>
      )}

      {/* Error Overlay */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 z-30 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      >
        <div className="glass rounded-2xl p-8 text-center max-w-md mx-4">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Info className="w-8 h-8 text-red-400" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Panorama Unavailable
          </h3>
          <p className="text-blue-200 mb-4">{error}</p>
          <p className="text-sm text-blue-300">Showing static view instead</p>
        </div>
      </motion.div> */}

      {/* Room Info Button */}
      <button
        onClick={handleInfoClick}
        className="absolute bottom-6 right-6 z-40 glass rounded-full p-3 hover:bg-white/20 transition-colors"
      >
        <Info className="w-5 h-5 text-white" />
      </button>

      {/* Panorama Container */}
      <div
        ref={viewerRef}
        style={{
          width: "100%",
          height,
          borderRadius: "16px",
          overflow: "hidden",
        }}
      />
    </div>
  );
};

export default PanoramaViewer;
