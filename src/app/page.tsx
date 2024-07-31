"use client";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { SearchHistoryContext } from "./context/searchHistoryContext";
import Header from "./components/header/header";
import SearchAddress from "./components/search/searchAddress";



export default function Home() {
  const router = useRouter();
  const { history } = useContext(SearchHistoryContext);

  useEffect(() => {
    if (history.length > 0) {
      router.push("/map");      
    }  
  }, [history])
  

  return (
      <main className="max-w-screen-lg flex flex-col items-center p-6 gap-6 md:py-12 md:px-24 md:gap-12 m-auto">
        <Header logoAlignment="center"/>
        <SearchAddress />
      </main>
  );
}
