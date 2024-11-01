"use client";
import { MoreHorizontal } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", present: 60, absent: 40 },
  { name: "Tue", present: 70, absent: 60 },
  { name: "Wed", present: 90, absent: 75 },
  { name: "Thu", present: 90, absent: 75 },
  { name: "Fri", present: 65, absent: 55 },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full">
      {/* Title Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold text-gray-800">Attendance</h1>
        <MoreHorizontal size={20} className="text-gray-500 cursor-pointer" />
      </div>

      {/* Chart Section */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} barSize={20}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#e5e7eb"
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#6b7280" }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: "#6b7280" }} tickLine={false} />
          <Tooltip
            contentStyle={{
              borderRadius: "10px",
              borderColor: "#e5e7eb",
              backgroundColor: "#fff",
            }}
            itemStyle={{ color: "#374151" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "20px" }}
            iconType="circle"
            iconSize={10}
          />
          <Bar dataKey="present" fill="#FAE27C" radius={[10, 10, 0, 0]} />
          <Bar dataKey="absent" fill="#C3EBFA" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
