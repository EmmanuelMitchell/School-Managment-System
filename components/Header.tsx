import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-white shadow-md flex items-center justify-between px-6">
      <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">Username</span>
        {/* Profile or Notifications can go here */}
      </div>
    </header>
  );
}
