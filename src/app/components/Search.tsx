"use client";
import { useRef, useState } from "react";
import { getAddressData } from "../actions";
import { SearchResult } from "../lib/definitions";
import Button from "./Button";
import ErrorMessage from "./ErrorMessage";

type Props = {
  onQuerySubmit: (searchResult: SearchResult) => void;
};


export default function Search({ onQuerySubmit }: Props) {
  const [input, setInput] = useState("");
  const [isValidAddress, setIsValidAddress] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => { 
    const searchResult = await getAddressData(input.trim());
    setInput("");

    if (!searchResult) {
      setIsValidAddress(false);
      return;
    }

    setIsValidAddress(true);
    onQuerySubmit(searchResult);
  }


  return (
    <form action={handleSubmit} className="w-full flex flex-wrap items-center justify-center gap-2">
      <div className="relative basis-full sm:basis-3/4-gap-2 grow">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input type="search" 
                  className="bg-gray-200 border-4 border-gray-100 text-gray-900 text-sm focus:border-blue-300 block w-full ps-8 p-2.5 basis-1/4 outline-none" 
                  placeholder="Address" 
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  ref={inputRef}
          />
      </div>
      <div className="basis-1/3-gap-2 sm:basis-1/4-gap-2">
        <Button type="submit" content={"Search"} isDisabled={input.trim() === ""}></Button>   
      </div>
  
      { !isValidAddress && <ErrorMessage message={"La dirección introducida no devolvió resultados"} /> }

    </form>
  );
}