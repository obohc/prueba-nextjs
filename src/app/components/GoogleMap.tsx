import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";

type Props = {
  location: {
    lat: number;
    lng: number;    
  }
}

export default function GoogleMap({location}: Props) {

  const mapElem = useRef<HTMLDivElement>(null);

  useEffect(() => {  

    async function loadMap() {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
        version: 'weekly',
      });

      const spainBounds = { north: 44.0, south: 36.0, west: -10.0, east: 4.0 };  
      
      const mapOptions: google.maps.MapOptions = {
        center: location,
        zoom: 15,
        gestureHandling: "cooperative",
        mapId: "DEMO_MAP_ID",
        restriction: {
          latLngBounds: spainBounds,
          strictBounds: false 
        }
      };

      try {
        const [{ Map }, { AdvancedMarkerElement }] = await Promise.all([
          loader.importLibrary('maps'), 
          loader.importLibrary('marker'),  
        ]);

        const map = new Map(mapElem.current as HTMLDivElement, mapOptions);
        new AdvancedMarkerElement({ map, position: location });

      } catch (error) {
        console.error('Error loading Google Maps libraries:', error);
      }
    }

    loadMap();    
  });


 
  return (
    <div ref={mapElem} className="w-full h-[400px] border-4 border-black"></div>
  );
}