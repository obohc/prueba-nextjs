import { useContext, useRef } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { SearchResult } from "@/app/types/searchResult";
import { useGoogleMapsLoader } from "@/app/hooks/useGoogleMapsLoader";
import { SearchHistoryContext } from "@/app/context/searchHistoryContext";
import NonFunctionalButton from "../buttons/nonFunctionalButton";
import LoadingSpinner from "@/app/loading";


export default function SearchAddress() {
  const { isLoaded } = useGoogleMapsLoader();
  const autoCompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const { history, setHistory } = useContext(SearchHistoryContext);

  const handlePlaceChanged = () => {    
    const place = (autoCompleteRef.current! as google.maps.places.Autocomplete).getPlace(); 

    if (place && place.geometry) {
      const result: SearchResult = {
        formatted_address: place.formatted_address!,
        location: place.geometry.location?.toJSON()!
      };
      setHistory([...history, result]);
    }    
  }


  return isLoaded ? (
    <div className="w-full flex flex-wrap items-center justify-center gap-2">
      <Autocomplete
          onPlaceChanged={handlePlaceChanged}
          options={{ fields: ["formatted_address", "geometry"] }}
          onLoad={(autocomplete) => autoCompleteRef.current = autocomplete}
          className="relative basis-full sm:basis-3/4-gap-2 grow"
      >
        <>
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>

          <input type="text"
                placeholder="Address"
                className="block bg-gray-200 border-4 border-gray-100 text-gray-900 text-sm 
              focus:border-blue-300 w-full ps-8 p-2.5 outline-none"/>
        </>         
      </Autocomplete>

      <div className="basis-1/3-gap-2 sm:basis-1/4-gap-2">
        <NonFunctionalButton>Search</NonFunctionalButton>
      </div>
  </div>
  ) : <LoadingSpinner/>;
}