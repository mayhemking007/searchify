import { SearchBar } from "../components/SearchBar";

export function LandingPage() {
    return (
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
        />
      </div>

      <p className="absolute bottom-6 text-xs text-gray-500">
        Hybrid RAG Search • AI + Critical Insight
      </p>
    </div>
    );
}