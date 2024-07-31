"use client";
import { createContext, ReactNode, useState } from "react";
import { SearchResult } from "../types/searchResult";

interface SearchHistoryContextType {
  history: SearchResult[];
  setHistory: (history: SearchResult[]) => void;
}

const initialState: SearchHistoryContextType = {
  history: [],
  setHistory: () => {},
};


export const SearchHistoryContext = createContext(initialState);

export const SearchHistoryProvider = ({ children }: { children: ReactNode }) => {
  const [history, setHistory] = useState<SearchResult[]>([]);

  return (
    <SearchHistoryContext.Provider value={{ history, setHistory }}>
      {children}
    </SearchHistoryContext.Provider>
  );
};
