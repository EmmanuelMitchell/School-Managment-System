"use client";
import { MoreHorizontal, Users } from "lucide-react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";

const data = [
  { name: "Total", count: 106, fill: "white" },
  { name: "Girls", count: 53, fill: "#FAE27C" },
  { name: "Boys", count: 53, fill: "#C3EBFA" },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg w-full h-full p-6 space-y-4">
      {/* TITLE */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold text-gray-800">Students</h1>
        <MoreHorizontal size={20} className="cursor-pointer" />
      </div>

      {/* CHART */}
      <div className="relative w-full h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="20%"
            outerRadius="90%"
            barSize={15}
            data={data}
            startAngle={180}
            endAngle={0}
          >
            <RadialBar dataKey="count" cornerRadius={5} />
          </RadialBarChart>
        </ResponsiveContainer>
        {/* Center Icon */}
        <Users
          size={50}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-800"
        />
      </div>

      {/* BOTTOM LEGEND */}
      <div className="flex justify-around items-center mt-4">
        {/* Boys Legend */}
        <div className="flex flex-col items-center text-center">
          <div
            className="w-5 h-5 rounded-full"
            style={{ backgroundColor: "#C3EBFA" }}
          />
          <h1 className="text-lg font-bold text-gray-800">1,234</h1>
          <h2 className="text-sm text-gray-500">Boys (55%)</h2>
        </div>

        {/* Girls Legend */}
        <div className="flex flex-col items-center text-center">
          <div
            className="w-5 h-5 rounded-full"
            style={{ backgroundColor: "#FAE27C" }}
          />
          <h1 className="text-lg font-bold text-gray-800">1,234</h1>
          <h2 className="text-sm text-gray-500">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
