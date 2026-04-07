export function SearchBar() {
    return (
        <div className="flex w-full">
            <input
                type="text"
                placeholder="Search..."
                className="flex-1 w-full border-none text-gray-700 font-medium rounded-md pl-2 pr-7 focus:outline-none"
            />
              <button
                className="border-none text-bold bg-gray-600 hover:bg-gradient-to-r hover:from-blue-400 hover:to-red-500 text-white px-3 hover:text-black py-1.5 rounded-4xl transition-colors duration-300 transform hover:scale-105 focus:outline-none"
            >
                →
            </button>
        </div>
    );
}