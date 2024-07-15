import { SearchResult } from "../lib/definitions";
import { roboto } from "../lib/fonts";

type Props = {
  history: SearchResult[];
}

export default function SearchHistory({history}: Props) {
  return (
    <div className="w-full flex flex-col gap-4 border border-gray-800 text-sm rounded-md p-4">
      <h5 className={`${roboto.className} text-slate-500 font-bold`}>Búsquedas</h5>
      <div className="flex flex-col-reverse gap-2">
        {history.map(({query}, i) => (
          <div key={i}>{query}</div>
        ))}
      </div>
    </div>
  );
}