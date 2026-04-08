interface Props {
  value: string;
  onChange : (q : string) => void
  onSearch: (q : string) => Promise<void>;
}
export function SearchBar({value, onChange, onSearch} : Props) {
    return (
        <div className="flex w-full">
            <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                type="text"
                placeholder="Search..."
                className="flex-1 w-full border-none text-gray-700 font-medium rounded-md pl-2 pr-7 focus:outline-none"
                onKeyDown={(e) => {
                    if (e.key === "Enter") onSearch(value);
                }}
            />
              <button
                onClick={() => onSearch(value)}
                className="border-none text-bold bg-gray-600 hover:bg-gradient-to-r hover:from-blue-400 hover:to-red-500 text-white px-3 hover:text-black py-1.5 rounded-4xl transition-colors duration-300 transform hover:scale-105 focus:outline-none"
            >
                →
            </button>
        </div>
    );
}