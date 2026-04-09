import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { getResults } from "../api/search.api";
import ResultsPage from "./ResultPage";
import { LoadingPage } from "./LoadingPage";

export function LandingPage() {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<any>(null);

    const handleSearch = async(query: string) => {
      if(!query) return;
        setLoading(true);
        const result = await getResults(query); 
        setQuery("");
        if(!result) {
          setLoading(false);
          return;
        }
        setLoading(false);
        setResults(result);
    }
    if(loading){
      return (<LoadingPage query={query} setQuery={setQuery} onSearch={handleSearch} />)
    }
    return results === null ?(
        <div className="min-h-screen bg-[#212121] text-white flex flex-col items-center px-4">
      
      <div className="text-center mt-40 mb-10">
        <h1 className="text-5xl p-2 font-bold tracking-tight bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-transparent">
          Searchify
        </h1>
        <p className="text-gray-400 mt-4 text-sm">
          Search, but smarter.
        </p>
      </div>

      <div className="w-full max-w-2xl bg-gray-300 p-4 rounded-3xl shadow-lg h-15 items-center flex">
        <SearchBar
            value={query}
            onChange={setQuery}
            onSearch={handleSearch}
        />
      </div>

      <p className="absolute bottom-6 text-xs text-gray-500">
        Hybrid RAG Search • AI + Critical Insight
      </p>
    </div>
    ) : (
      <div className="transition-all duration-300">
        <ResultsPage query={query} setQuery={setQuery} onSearch={handleSearch} result={results} setResults={setResults} />
      </div>
    );
}