import { Search } from "lucide-react";

const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex items-center gap-2 text-sm rounded-full border border-gray-300 px-3 py-2 bg-white shadow-sm focus-within:ring-2 focus-within:ring-indigo-500">
      <Search size={16} className="text-gray-400" />
      <input
        type="text"
        placeholder="Search..."
        className="w-[200px] bg-transparent outline-none placeholder-gray-400 text-gray-700"
      />
    </div>
  );
};

export default TableSearch;
