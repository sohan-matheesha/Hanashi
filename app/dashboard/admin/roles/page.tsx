import Link from "next/link";
import {
  ArrowLeft,
  GraduationCap,
  ShieldCheck,
  UserRound,
  Users,
} from "lucide-react";

const roles = [
  {
    title: "Student",
    description:
      "Students can access lessons, quizzes, AI tutor support, cultural content, and conversation practice.",
    icon: UserRound,
    color: "bg-blue-50 text-blue-700",
  },
  {
    title: "Teacher",
    description:
      "Teachers can access teacher tools, manage learning content, support students, and review learning activities.",
    icon: GraduationCap,
    color: "bg-green-50 text-green-700",
  },
  {
    title: "Admin",
    description:
      "Admins can manage users, update roles, review platform areas, and control system-level management sections.",
    icon: ShieldCheck,
    color: "bg-purple-50 text-purple-700",
  },
];

export default function AdminRolesPage() {
  return (
    <div className="min-h-screen bg-[#fafafc] px-4 py-8 md:px-8">
      <Link
        href="/dashboard/admin"
        className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-[#a54a5c]"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Admin Panel
      </Link>

      <section className="mb-8 rounded-3xl bg-white p-8 shadow-sm">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-[#a54a5c]">
          <Users className="h-7 w-7" />
        </div>

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#a54a5c]">
          Admin Tools
        </p>

        <h1 className="text-3xl font-extrabold text-[#202c5c]">
          Role Management
        </h1>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-500">
          Hanashi uses role-based access control to separate student, teacher,
          and admin features. Admins can update user roles from the main admin
          users table.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {roles.map((role) => {
          const Icon = role.icon;

          return (
            <div key={role.title} className="rounded-3xl bg-white p-6 shadow-sm">
              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${role.color}`}
              >
                <Icon className="h-7 w-7" />
              </div>

              <h2 className="text-xl font-extrabold text-[#202c5c]">
                {role.title}
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                {role.description}
              </p>
            </div>
          );
        })}
      </section>

      <section className="mt-8 rounded-3xl border border-dashed border-pink-200 bg-white p-6 text-center">
        <h3 className="text-xl font-extrabold text-[#202c5c]">
          Update user roles
        </h3>

        <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-gray-500">
          To change a user role, go to the Admin Panel users table and select
          the required role from the dropdown.
        </p>

        <Link
          href="/dashboard/admin"
          className="mt-5 inline-flex rounded-2xl bg-[#a54a5c] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#913f50]"
        >
          Go to Users Table
        </Link>
      </section>
    </div>
  );
}