"use client";
import { useEffect, useState } from "react";
import { getLastQuery, getSearchHistory, saveLastQuery } from "../lib/utils";
import { AddressLatLong, SearchResult } from "../lib/definitions";
import Header from "../components/Header";
import Search from "../components/Search";
import SearchHistory from "../components/SearchHistory";
import GoogleMap from "../components/GoogleMap";


export default function Page() {
  const [location, setLocation] = useState<AddressLatLong>({lat: 41.3969, lng: 2.1616});
  const [history, setHistory] = useState<SearchResult[]>([]);

  useEffect(() => {
    const lastQuery = getLastQuery();
    
    if(lastQuery){
      setLocation(lastQuery.location);
    }

    setHistory(getSearchHistory());
  }, []);


  async function handleSubmit(searchResult: SearchResult) {
    setHistory(saveLastQuery(searchResult));
    setLocation(searchResult.location);
  };

  return (
    <main className="max-w-screen-lg flex flex-col items-center gap-6 px-8 py-4 m-auto">
      <Header logoAlignment="start" />
      <Search onQuerySubmit={handleSubmit} />
      <GoogleMap location={location}/>
      <SearchHistory history={history}/>
    </main>
  );
}
