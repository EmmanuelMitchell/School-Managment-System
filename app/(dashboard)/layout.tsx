import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import React from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <Sidebar />
      {/* Main content area */}
      <div className="flex-1 flex flex-col ml-64">
        {/* Header */}
        <Header />
        {/* Page content */}
        <main className="mt-16 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
