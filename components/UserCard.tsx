import React from "react";
import { User, UserCheck, Users, GraduationCap } from "lucide-react";

const userRoles = [
  {
    title: "Student",
    id: "61233",
    year: "2024",
    color: "bg-blue-600",
    icon: GraduationCap,
  },
  {
    title: "Teacher",
    id: "61233",
    year: "2024",
    color: "bg-green-600",
    icon: Users,
  },
  {
    title: "Parent",
    id: "61233",
    year: "2024",
    color: "bg-purple-600",
    icon: UserCheck,
  },
  {
    title: "Staff",
    id: "61233",
    year: "2024",
    color: "bg-orange-600",
    icon: User,
  },
];

export default function UserCard() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 p-4">
      {userRoles.map((role, index) => (
        <div
          key={index}
          className={`${role.color} text-white p-6 rounded-lg shadow-lg`}
        >
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold">{role.year}</p>
            <role.icon className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold mt-4">{role.title}</h2>
          <p className="text-lg">ID: {role.id}</p>
        </div>
      ))}
    </div>
  );
}

// import React from "react";
// import { User, UserCheck, Users, GraduationCap } from "lucide-react"; // Icons for each card

// export default function UserCard() {
//   return (
//     <div className="grid grid-cols-1 gap-4 md:grid-cols-4 p-4">
//       {/* Student Card */}
//       <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg">
//         <div className="flex justify-between items-center">
//           <p className="text-lg font-semibold">2024</p>
//           <GraduationCap className="w-6 h-6" /> {/* Icon */}
//         </div>
//         <h2 className="text-xl font-bold mt-4">Student</h2>
//         <p className="text-lg">ID: 61233</p>
//       </div>

//       {/* Teacher Card */}
//       <div className="bg-green-600 text-white p-6 rounded-lg shadow-lg">
//         <div className="flex justify-between items-center">
//           <p className="text-lg font-semibold">2024</p>
//           <Users className="w-6 h-6" /> {/* Icon */}
//         </div>
//         <h2 className="text-xl font-bold mt-4">Teacher</h2>
//         <p className="text-lg">ID: 61233</p>
//       </div>

//       {/* Parent Card */}
//       <div className="bg-purple-600 text-white p-6 rounded-lg shadow-lg">
//         <div className="flex justify-between items-center">
//           <p className="text-lg font-semibold">2024</p>
//           <UserCheck className="w-6 h-6" /> {/* Icon */}
//         </div>
//         <h2 className="text-xl font-bold mt-4">Parent</h2>
//         <p className="text-lg">ID: 61233</p>
//       </div>

//       {/* Staff Card */}
//       <div className="bg-orange-600 text-white p-6 rounded-lg shadow-lg">
//         <div className="flex justify-between items-center">
//           <p className="text-lg font-semibold">2024</p>
//           <User className="w-6 h-6" /> {/* Icon */}
//         </div>
//         <h2 className="text-xl font-bold mt-4">Staff</h2>
//         <p className="text-lg">ID: 61233</p>
//       </div>
//     </div>
//   );
// }
