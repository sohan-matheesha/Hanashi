import {
  ShieldCheck,
  Users,
  GraduationCap,
  UserRound,
  Settings,
  Search,
  CheckCircle2,
  Clock,
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

  return (
    <div className="min-h-screen bg-[#fafafc] px-4 py-6 md:px-8">
      {/* Header */}
      <div className="mb-8 rounded-3xl bg-linear-to-r from-[#202c5c] to-[#394676] p-6 text-white shadow-sm md:p-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-white/70">
              Admin Section
            </p>
            <h1 className="text-3xl font-bold md:text-4xl">
              Hanashi Admin Panel
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/85 md:text-base">
              Manage users, assign roles, approve teacher access, and control
              platform settings from one place.
            </p>
          </div>

          <div className="flex w-fit items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-[#202c5c] shadow-sm">
            <ShieldCheck size={18} />
            Admin Access
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
            <Users size={24} />
          </div>
          <h2 className="text-3xl font-bold text-[#202c5c]">{totalUsers}</h2>
          <p className="mt-1 font-semibold text-[#202c5c]">Total Users</p>
          <p className="mt-2 text-sm text-gray-500">
            Registered platform users
          </p>
        </div>

        <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff1ea] text-[#FF5A1F]">
            <UserRound size={24} />
          </div>
          <h2 className="text-3xl font-bold text-[#202c5c]">{studentCount}</h2>
          <p className="mt-1 font-semibold text-[#202c5c]">Students</p>
          <p className="mt-2 text-sm text-gray-500">Learning Japanese</p>
        </div>

        <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-700">
            <GraduationCap size={24} />
          </div>
          <h2 className="text-3xl font-bold text-[#202c5c]">{teacherCount}</h2>
          <p className="mt-1 font-semibold text-[#202c5c]">Teachers</p>
          <p className="mt-2 text-sm text-gray-500">
            Approved teaching accounts
          </p>
        </div>

        <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-700">
            <ShieldCheck size={24} />
          </div>
          <h2 className="text-3xl font-bold text-[#202c5c]">{adminCount}</h2>
          <p className="mt-1 font-semibold text-[#202c5c]">Admins</p>
          <p className="mt-2 text-sm text-gray-500">
            Platform administrators
          </p>
        </div>
      </div>

      {/* Admin Tools */}
      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
            <Users size={24} />
          </div>
          <h3 className="text-lg font-bold text-[#202c5c]">User Management</h3>
          <p className="mt-2 text-sm leading-6 text-gray-500">
            View all registered users and manage user accounts.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-700">
            <GraduationCap size={24} />
          </div>
          <h3 className="text-lg font-bold text-[#202c5c]">Role Management</h3>
          <p className="mt-2 text-sm leading-6 text-gray-500">
            Assign student, teacher, or admin roles to users.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff1ea] text-[#FF5A1F]">
            <Settings size={24} />
          </div>
          <h3 className="text-lg font-bold text-[#202c5c]">System Settings</h3>
          <p className="mt-2 text-sm leading-6 text-gray-500">
            Manage platform settings, content approval, and access rules.
          </p>
        </div>
      </div>

      {/* Search UI only */}
      <div className="mb-6 rounded-3xl bg-white p-4 shadow-sm">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search users by name, email, or role..."
            className="w-full rounded-2xl bg-gray-50 py-3 pl-11 pr-4 text-sm text-[#202c5c] outline-none focus:ring-2 focus:ring-[#202c5c]/20"
          />
        </div>
      </div>

      {/* Users Table */}
      <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
        <div className="border-b border-gray-100 p-5">
          <h2 className="flex items-center gap-2 text-lg font-bold text-[#202c5c]">
            <ShieldCheck size={20} className="text-[#FF5A1F]" />
            Users & Roles
          </h2>
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
                  <tr key={user.id} className="transition hover:bg-orange-50/40">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fff1ea] font-bold text-[#FF5A1F]">
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
                          className="rounded-2xl bg-gray-50 px-4 py-2 text-sm font-semibold text-[#202c5c] outline-none focus:ring-2 focus:ring-[#FF5A1F]/20"
                        >
                          <option value="student">student</option>
                          <option value="teacher">teacher</option>
                          <option value="admin">admin</option>
                        </select>

                        <button
                          type="submit"
                          className="rounded-2xl bg-[#FF5A1F] px-4 py-2 text-sm font-bold text-white transition hover:opacity-90"
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
              No users found in profiles table.
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 rounded-3xl border border-orange-100 bg-[#fff7f2] p-5 text-sm leading-6 text-gray-600">
        <strong className="text-[#FF5A1F]">Note:</strong> This admin panel is now
        connected to Supabase. Admins can update user roles directly from the
        website.
      </div>
    </div>
  );
}