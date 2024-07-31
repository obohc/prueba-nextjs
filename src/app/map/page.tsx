"use client";
import React, { useContext, useEffect, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useGoogleMapsLoader } from "../hooks/useGoogleMapsLoader";
import { SearchHistoryContext } from "../context/searchHistoryContext";
import Header from "../components/header/header";
import SearchAddress from "../components/search/searchAddress";
import SearchHistory from "../components/search/searchHistory";
import LoadingSpinner from "../loading";


const spainBounds: google.maps.LatLngBoundsLiteral = { north: 44.0, south: 36.0, west: -10.0, east: 4.0 };
const defaultLocation: google.maps.LatLngLiteral = {lat: 41.3969, lng: 2.1616};

export default function Page() {
  const [ location, setLocation ] = useState(defaultLocation);
  const { history } = useContext(SearchHistoryContext);
  const { isLoaded } = useGoogleMapsLoader();

  useEffect(() => {
    if (history.length > 0) {
      const lastQuery = history.at(-1);
      setLocation(lastQuery!.location); 
    }
  }, [history]);


  return isLoaded ? (
    <main className="max-w-screen-lg flex flex-col items-center gap-6 px-8 py-4 m-auto">
      <Header logoAlignment="start" />
      <SearchAddress />
      <GoogleMap  center={location} 
                  zoom={14} 
                  mapContainerClassName="w-full h-[400px] border-4 border-black"
                  options={{
                    mapId: "MY_MAP_ID",
                    restriction: { 
                      latLngBounds: spainBounds, 
                      strictBounds: false
                    }
                  }
      }>
        <Marker position={location} />
      </GoogleMap>        
      <SearchHistory history={history} maxRows={5}/>
    </main>
  ): <LoadingSpinner/>;
}
