"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { Plus, Edit, Trash, X } from "lucide-react"; // Lucide-react icons

const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
  loading: () => <h1>Loading...</h1>,
});
const StudentForm = dynamic(() => import("./forms/StudentForm"), {
  loading: () => <h1>Loading...</h1>,
});

const forms: {
  [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StudentForm type={type} data={data} />,
};

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const [open, setOpen] = useState(false);

  const bgColor =
    type === "create"
      ? "bg-yellow-500"
      : type === "update"
      ? "bg-blue-500"
      : "bg-red-600";

  const Icon = type === "create" ? Plus : type === "update" ? Edit : Trash;

  const Form = () => {
    return type === "delete" && id ? (
      <form className="p-6 flex flex-col gap-4 text-center">
        <span className="font-medium text-lg">
          Are you sure you want to delete this {table}?
        </span>
        <button className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition-colors">
          Confirm Delete
        </button>
      </form>
    ) : type === "create" || type === "update" ? (
      forms[table](type, data)
    ) : (
      <div className="p-4">Form not found!</div>
    );
  };

  return (
    <>
      <button
        className={`w-8 h-8 flex items-center justify-center rounded-full ${bgColor} text-white hover:opacity-90 transition-opacity`}
        onClick={() => setOpen(true)}
      >
        <Icon size={16} />
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] relative">
            <Form />
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setOpen(false)}
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
