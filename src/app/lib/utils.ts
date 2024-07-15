import { SearchResult } from "./definitions";

/**
 * Saves the last search result (query made by the user and its LatLong) to the browser's sessionStorage
 * 
 * @param result - the search result which will be added to the history
 * @returns the updated array of queries made in this session
 */
export function saveLastQuery(result: SearchResult): SearchResult[] {
  const history = getSearchHistory();
  history.push(result);

  sessionStorage.setItem("lastQuery", JSON.stringify(result));
  sessionStorage.setItem("searchHistory", JSON.stringify(history));
  return history;
}

/**
 * 
 * @returns last query saved in sessionStorage
 */
export function getLastQuery(): SearchResult | null {
  const lastQuery = sessionStorage.getItem("lastQuery");
  return lastQuery ? JSON.parse(lastQuery) : null;
}


export function deleteLastQuery() {
  sessionStorage.removeItem("lastQuery");
}

/**
 * 
 * @returns the array of queries made in this session or an empty array if there's none
 */
export function getSearchHistory(){ 
  return JSON.parse(sessionStorage.getItem("searchHistory") ?? "[]") as SearchResult[];
}
