import { SearchBar } from "../components/SearchBar";

interface Props {
  query: string;
  setQuery: (q: string) => void;
  onSearch: (q : string) => Promise<void>;
}

export function LoadingPage({query, setQuery, onSearch} : Props) {
    return (
        <div className="min-h-screen bg-[#212121] text-white px-6 py-6">
                <div className="text-center absolute left-12 top-2">
                    <h1 className="text-5xl p-2 font-bold tracking-tight bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
                    Searchify
                    </h1>
                </div>
              <div className="bg-gray-300 p-4 rounded-3xl shadow-lg h-15 items-center flex max-w-3xl mx-auto">
                <SearchBar
                   value={query}
                   onChange={setQuery}
                   onSearch={onSearch}
                />
              </div>
              <h1>Loading....</h1>
        </div>    
    );
}