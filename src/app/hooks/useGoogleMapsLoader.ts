import { useJsApiLoader } from "@react-google-maps/api";

export function useGoogleMapsLoader() {
  return useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: ['maps', 'places', "marker"],
  });
}