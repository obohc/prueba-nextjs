import { SearchResult } from "@/app/types/searchResult";
import { roboto } from "../../lib/fonts";

type Props = {
  history: SearchResult[];
  maxRows?: number
}

export default function SearchHistory({history, maxRows = history.length}: Props) {
  return (
    <div className="w-full flex flex-col gap-4 border border-gray-800 text-sm rounded-md p-4">
      <h5 className={`${roboto.className} text-slate-500 font-bold`}>Búsquedas</h5>
      <div className="flex flex-col-reverse gap-2">
        {history.slice(-maxRows).map(({formatted_address}, i) => (
          <div key={i}>{formatted_address}</div>
        ))}
      </div>
    </div>
  );
}