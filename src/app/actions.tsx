'use server';

import { SearchResult } from "./lib/definitions";


/**
 * Converts an address into latitude and longitude coordinates
 * 
 * @param address the address to be converted
 * @returns a SearchResult with the formatted address and its Lat-Long coordinates
 */
export const getAddressData = async (address: string) : Promise<SearchResult | null> => {
  const base_url = "https://maps.googleapis.com/maps/api/geocode";
  const encodedQuery = encodeURIComponent(address);

  try {
    const response = await fetch(`${base_url}/json?address=${encodedQuery}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`);
    
    if(!response.ok){
      throw new Error("There was a problem with your request");
    }
    
    const data = await response.json();
    if(data.status === "ZERO_RESULTS") return null;
        
    const { formatted_address, geometry: { location } } = data.results[0];  
    return { query: formatted_address, location };

  } catch (error) {
    console.error("Error fetching the location:", error);
    return null;
  }

}

