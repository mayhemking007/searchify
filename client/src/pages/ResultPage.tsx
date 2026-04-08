import { SearchBar } from "../components/SearchBar";

interface Props {
  query: string;
  setQuery: (q: string) => void;
  onSearch: (q : string) => Promise<void>;
  result: any;
  setResults: (results: any) => void;

}

export default function ResultsPage({
  query,
  setQuery,
  onSearch,
  result,
  setResults
}: Props) {
  return (
    <div className="min-h-screen bg-[#212121] text-white px-6 py-6">
        <div className="cursor-pointer text-center absolute left-12 top-2" onClick={() => setResults(null)}>
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

      <div className="max-w-3xl mx-auto mt-6 bg-gradient-to-r from-blue-600 to-red-700 border border-gray-700 p-5 rounded-xl">
        <h2 className="text-sm text-white mb-2">AI Answer</h2>
        <p className="text-gray-200 whitespace-pre-line">
          {result ? result.aiSummary : ""}
        </p>
      </div>

      {result.critique && (
        <div className="max-w-3xl mx-auto mt-4 bg-yellow-900/30 border border-yellow-600 p-4 rounded-xl">
          <p className="text-yellow-300 text-sm">
            ⚠ {result.critique}
          </p>
        </div>
      )}

      <div className="max-w-3xl mx-auto mt-8">
        <h2 className="text-gray-400 mb-3">Results</h2>

        <div className="space-y-6">
          {result.data.map((s: any) => (
            <div key={s.url}>
              <a
                href={s.url}
                target="_blank"
                className="text-blue-400 text-lg hover:underline"
              >
                {s.title || s.url}
              </a>

              <p className="text-gray-500 text-sm">{s.url}</p>
                <p className="text-gray-300 mt-1">{s.content}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}