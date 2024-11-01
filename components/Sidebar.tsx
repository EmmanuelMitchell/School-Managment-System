"use client";
import Link from "next/link";
import React from "react";
import {
  User,
  Users,
  GraduationCap,
  UserCheck,
  Settings,
  LogOut,
} from "lucide-react";
import { role } from "@/lib/data";

const menuItems = [
  {
    items: [
      {
        icon: GraduationCap,
        label: "Home",
        href: "/admin",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: Users,
        label: "Teachers",
        href: "/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: GraduationCap,
        label: "Students",
        href: "/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: UserCheck,
        label: "Parents",
        href: "/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: GraduationCap,
        label: "Subjects",
        href: "/subjects",
        visible: ["admin"],
      },
      {
        icon: GraduationCap,
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: GraduationCap,
        label: "Lessons",
        href: "/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: GraduationCap,
        label: "Exams",
        href: "/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: GraduationCap,
        label: "Assignments",
        href: "/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: GraduationCap,
        label: "Results",
        href: "/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: GraduationCap,
        label: "Attendance",
        href: "/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: GraduationCap,
        label: "Events",
        href: "/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: GraduationCap,
        label: "Messages",
        href: "/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: GraduationCap,
        label: "Announcements",
        href: "/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    items: [
      {
        icon: User,
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: Settings,
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: LogOut,
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

export default function Sidebar() {
  const userRole = role;

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-blue-950 text-white shadow-md flex flex-col overflow-y-auto">
      {/* Logo */}
      <div className="flex items-center justify-between p-6 font-bold text-xl">
        <span>School Dashboard</span>
      </div>

      {/* Navigation */}
      <nav className="mt-6 flex-1">
        {menuItems.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <ul className="space-y-4 px-2">
              {section.items
                .filter((item) => item.visible.includes(userRole))
                .map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      href={item.href}
                      className="flex items-center p-2 hover:bg-blue-700 rounded"
                    >
                      <item.icon className="mr-2" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
