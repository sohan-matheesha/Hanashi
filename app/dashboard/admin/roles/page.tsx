import Link from "next/link";
import {
  ArrowLeft,
  GraduationCap,
  ShieldCheck,
  UserRound,
  Users,
} from "lucide-react";
import { createClient } from "@/utils/supabase/server";

const roleCards = [
  {
    role: "student",
    title: "Student",
    description:
      "Students can access lessons, quizzes, AI tutor support, cultural content, video lessons, and conversation practice.",
    icon: UserRound,
    color: "bg-blue-50 text-blue-700",
    href: "/dashboard/admin/users?role=student",
  },
  {
    role: "teacher",
    title: "Teacher",
    description:
      "Teachers can manage lessons, video resources, live sessions, student support, and progress review.",
    icon: GraduationCap,
    color: "bg-green-50 text-green-700",
    href: "/dashboard/admin/users?role=teacher",
  },
  {
    role: "admin",
    title: "Admin",
    description:
      "Admins can manage users, update roles, review platform areas, and control system-level management sections.",
    icon: ShieldCheck,
    color: "bg-purple-50 text-purple-700",
    href: "/dashboard/admin/users?role=admin",
  },
];

export default async function AdminRolesPage() {
  const supabase = await createClient();

  const { data: profiles, error } = await supabase
    .from("profiles")
    .select("id, role");

  const users = profiles ?? [];

  const getRoleCount = (role: string) => {
    return users.filter((user) => user.role === role).length;
  };

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
          and admin features. Admins can update user roles from the users table.
        </p>
      </section>

      {error && (
        <div className="mb-6 rounded-3xl border border-red-100 bg-red-50 p-5 text-sm font-semibold text-red-700">
          Could not load role counts from Supabase. Please check the profiles
          table.
        </div>
      )}

      <section className="grid gap-5 md:grid-cols-3">
        {roleCards.map((role) => {
          const Icon = role.icon;
          const count = getRoleCount(role.role);

          return (
            <div key={role.title} className="rounded-3xl bg-white p-6 shadow-sm">
              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${role.color}`}
              >
                <Icon className="h-7 w-7" />
              </div>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400">
                {count} Users
              </p>

              <h2 className="mt-2 text-xl font-extrabold text-[#202c5c]">
                {role.title}
              </h2>

              <p className="mt-3 min-h-[120px] text-sm leading-7 text-gray-500">
                {role.description}
              </p>

              <Link
                href={role.href}
                className="mt-5 inline-flex w-full justify-center rounded-2xl bg-[#202c5c] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#a54a5c]"
              >
                View {role.title}s
              </Link>
            </div>
          );
        })}
      </section>

      <section className="mt-8 rounded-3xl border border-dashed border-pink-200 bg-white p-6 text-center">
        <h3 className="text-xl font-extrabold text-[#202c5c]">
          Update user roles
        </h3>

        <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-gray-500">
          To change a user role, open the users table and select student,
          teacher, or admin from the dropdown.
        </p>

        <Link
          href="/dashboard/admin/users"
          className="mt-5 inline-flex rounded-2xl bg-[#a54a5c] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#913f50]"
        >
          Go to Users Table
        </Link>
      </section>
    </div>
  );
}