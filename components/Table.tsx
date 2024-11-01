const Table = ({
  columns,
  renderRow,
  data,
}: {
  columns: { header: string; accessor: string; className?: string }[];
  renderRow: (item: any) => React.ReactNode;
  data: any[];
}) => {
  return (
    <table className="w-full mt-4 border-collapse shadow-md">
      <thead>
        <tr className="bg-gray-100 text-left text-gray-700 text-sm border-b">
          {columns.map((col) => (
            <th
              key={col.accessor}
              className={`px-4 py-3 font-semibold ${col.className || ""}`}
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((item, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } border-b hover:bg-gray-100`}
            >
              {renderRow(item)}
            </tr>
          ))
        ) : (
          <tr>
            <td
              colSpan={columns.length}
              className="text-center p-4 text-gray-500"
            >
              No data available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
