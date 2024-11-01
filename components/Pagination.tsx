const Pagination = () => {
  return (
    <div className="p-4 flex items-center justify-between text-gray-600 bg-white rounded-md shadow-sm">
      <button
        disabled
        className="py-2 px-4 rounded-md bg-slate-100 text-xs font-semibold text-gray-400 hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Prev
      </button>
      <div className="flex items-center gap-1">
        <button className="px-3 py-1 rounded bg-lamaSky text-white font-medium shadow-sm">
          1
        </button>
        <button className="px-3 py-1 rounded text-gray-600 hover:bg-slate-100">
          2
        </button>
        <button className="px-3 py-1 rounded text-gray-600 hover:bg-slate-100">
          3
        </button>
        <span className="px-2 text-gray-400">...</span>
        <button className="px-3 py-1 rounded text-gray-600 hover:bg-slate-100">
          10
        </button>
      </div>
      <button className="py-2 px-4 rounded-md bg-slate-100 text-xs font-semibold text-gray-400 hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed">
        Next
      </button>
    </div>
  );
};

export default Pagination;
