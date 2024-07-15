"use client";
import { useRouter } from "next/navigation";
import { saveLastQuery } from "./lib/utils";
import { SearchResult } from "./lib/definitions";
import Header from "./components/Header";
import Search from "./components/Search";


export default function Home() {
  const router = useRouter();

  const handleSubmit = (searchResult: SearchResult) => {
    saveLastQuery(searchResult);
    router.push("/map");      
  }

  return (
    <main className="max-w-screen-lg flex flex-col items-center p-6 gap-6 md:py-12 md:px-24 md:gap-12 m-auto">
      <Header logoAlignment="center"/>
      <Search onQuerySubmit={handleSubmit}/>
    </main>
  );
}
