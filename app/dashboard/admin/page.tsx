import Link from "next/link";
import {
  ShieldCheck,
  Users,
  GraduationCap,
  UserRound,
  Settings,
  Search,
  CheckCircle2,
  ImagePlus,
} from "lucide-react";
import { createClient } from "@/utils/supabase/server";
import { updateUserRole } from "./actions";

export default async function AdminDashboardPage() {
  const supabase = await createClient();

  const { data: profiles, error } = await supabase
    .from("profiles")
    .select("id, full_name, role, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Profiles fetch error:", error);
  }

  const users = profiles ?? [];

  const totalUsers = users.length;
  const studentCount = users.filter((user) => user.role === "student").length;
  const teacherCount = users.filter((user) => user.role === "teacher").length;
  const adminCount = users.filter((user) => user.role === "admin").length;

  const adminTools = [
    {
      title: "User Management",
      description: "View registered users and manage user accounts.",
      href: "/dashboard/admin/users",
      icon: Users,
      color: "bg-blue-50 text-blue-700",
      button: "Manage Users",
    },
    {
      title: "Role Management",
      description: "Assign student, teacher, or admin roles to users.",
      href: "/dashboard/admin/roles",
      icon: GraduationCap,
      color: "bg-green-50 text-green-700",
      button: "Manage Roles",
    },
    {
      title: "System Settings",
      description: "Review platform settings, access rules, and system notes.",
      href: "/dashboard/admin/settings",
      icon: Settings,
      color: "bg-orange-50 text-orange-600",
      button: "Open Settings",
    },
    {
      title: "Cultural Hub Stories",
      description: "Prepare and manage Japanese culture learning content.",
      href: "/dashboard/admin/cultural-stories",
      icon: ImagePlus,
      color: "bg-pink-50 text-pink-600",
      button: "Manage Stories",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafafc] px-4 py-6 md:px-8">
      {/* Header */}
      <section className="mb-8 rounded-3xl bg-linear-to-r from-[#202c5c] to-[#394676] p-6 text-white shadow-sm md:p-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
              Admin Section
            </p>

            <h1 className="text-3xl font-extrabold md:text-4xl">
              Hanashi Admin Panel
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/85 md:text-base">
              Manage users, assign roles, review teacher access, and control
              platform-level management areas from one place.
            </p>
          </div>

          <div className="flex w-fit items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-[#202c5c] shadow-sm">
            <ShieldCheck size={18} />
            Admin Access
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Link
          href="/dashboard/admin/users"
          className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
            <Users size={24} />
          </div>
          <h2 className="text-3xl font-extrabold text-[#202c5c]">
            {totalUsers}
          </h2>
          <p className="mt-1 font-bold text-[#202c5c]">Total Users</p>
          <p className="mt-2 text-sm text-gray-500">
            Registered platform users
          </p>
        </Link>

        <Link
          href="/dashboard/admin/users?role=student"
          className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
            <UserRound size={24} />
          </div>
          <h2 className="text-3xl font-extrabold text-[#202c5c]">
            {studentCount}
          </h2>
          <p className="mt-1 font-bold text-[#202c5c]">Students</p>
          <p className="mt-2 text-sm text-gray-500">
            Japanese language learners
          </p>
        </Link>

        <Link
          href="/dashboard/admin/users?role=teacher"
          className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-700">
            <GraduationCap size={24} />
          </div>
          <h2 className="text-3xl font-extrabold text-[#202c5c]">
            {teacherCount}
          </h2>
          <p className="mt-1 font-bold text-[#202c5c]">Teachers</p>
          <p className="mt-2 text-sm text-gray-500">
            Teaching role accounts
          </p>
        </Link>

        <Link
          href="/dashboard/admin/users?role=admin"
          className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-700">
            <ShieldCheck size={24} />
          </div>
          <h2 className="text-3xl font-extrabold text-[#202c5c]">
            {adminCount}
          </h2>
          <p className="mt-1 font-bold text-[#202c5c]">Admins</p>
          <p className="mt-2 text-sm text-gray-500">
            Platform administrators
          </p>
        </Link>
      </section>

      {/* Admin Tools */}
      <section className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {adminTools.map((tool) => {
          const Icon = tool.icon;

          return (
            <Link
              key={tool.title}
              href={tool.href}
              className="group rounded-3xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl transition ${tool.color}`}
              >
                <Icon size={24} />
              </div>

              <h3 className="text-lg font-extrabold text-[#202c5c]">
                {tool.title}
              </h3>

              <p className="mt-2 min-h-[72px] text-sm leading-6 text-gray-500">
                {tool.description}
              </p>

              <div className="mt-4 inline-flex rounded-full bg-[#202c5c] px-4 py-2 text-xs font-bold text-white transition group-hover:bg-[#a54a5c]">
                {tool.button} →
              </div>
            </Link>
          );
        })}
      </section>

      {/* Search UI */}
      <section className="mb-6 rounded-3xl bg-white p-4 shadow-sm">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search UI preview: name, role, or user id..."
            className="w-full rounded-2xl bg-gray-50 py-3 pl-11 pr-4 text-sm text-[#202c5c] outline-none focus:ring-2 focus:ring-[#202c5c]/20"
          />
        </div>
      </section>

      {/* Users Table */}
      <section className="overflow-hidden rounded-3xl bg-white shadow-sm">
        <div className="border-b border-gray-100 p-5">
          <h2 className="flex items-center gap-2 text-lg font-extrabold text-[#202c5c]">
            <ShieldCheck size={20} className="text-[#a54a5c]" />
            Users & Roles
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Admins can update user roles directly from this table.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-left">
            <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
              <tr>
                <th className="px-5 py-4">User</th>
                <th className="px-5 py-4">Current Role</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Joined Date</th>
                <th className="px-5 py-4">Change Role</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {users.map((user) => {
                const displayName = user.full_name || "Unnamed User";
                const displayEmail = `User ID: ${user.id.slice(0, 8)}...`;
                const currentRole = user.role || "student";
                const joinedDate = user.created_at
                  ? new Date(user.created_at).toLocaleDateString()
                  : "N/A";

                return (
                  <tr key={user.id} className="transition hover:bg-pink-50/40">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-100 font-bold text-[#a54a5c]">
                          {displayName.charAt(0).toUpperCase()}
                        </div>

                        <div>
                          <div className="font-bold text-[#202c5c]">
                            {displayName}
                          </div>
                          <div className="mt-1 text-xs text-gray-400">
                            {displayEmail}
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-bold capitalize ${
                          currentRole === "admin"
                            ? "bg-purple-50 text-purple-700"
                            : currentRole === "teacher"
                              ? "bg-green-50 text-green-700"
                              : "bg-blue-50 text-blue-700"
                        }`}
                      >
                        {currentRole}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
                        <CheckCircle2 size={13} />
                        Active
                      </span>
                    </td>

                    <td className="px-5 py-4 text-sm font-medium text-gray-600">
                      {joinedDate}
                    </td>

                    <td className="px-5 py-4">
                      <form action={updateUserRole} className="flex gap-2">
                        <input type="hidden" name="userId" value={user.id} />

                        <select
                          name="role"
                          defaultValue={currentRole}
                          className="rounded-2xl bg-gray-50 px-4 py-2 text-sm font-semibold text-[#202c5c] outline-none focus:ring-2 focus:ring-[#a54a5c]/20"
                        >
                          <option value="student">student</option>
                          <option value="teacher">teacher</option>
                          <option value="admin">admin</option>
                        </select>

                        <button
                          type="submit"
                          className="rounded-2xl bg-[#a54a5c] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#913f50]"
                        >
                          Update
                        </button>
                      </form>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {users.length === 0 && (
            <div className="p-8 text-center text-sm text-gray-500">
              No users found in the profiles table.
            </div>
          )}
        </div>
      </section>

      <div className="mt-6 rounded-3xl border border-pink-100 bg-[#fff7f9] p-5 text-sm leading-6 text-gray-600">
        <strong className="text-[#a54a5c]">Note:</strong> This admin panel is
        connected to Supabase. Admins can review users and update user roles
        from the website.
      </div>
    </div>
  );
}