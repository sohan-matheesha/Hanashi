import Link from "next/link";
import { ArrowLeft, Users, CheckCircle2 } from "lucide-react";
import { createClient } from "@/utils/supabase/server";
import { updateUserRole } from "../actions";

export default async function AdminUsersPage({
  searchParams,
}: {
  searchParams: Promise<{ role?: string }>;
}) {
  const params = await searchParams;
  const selectedRole = params.role;

  const supabase = await createClient();

  let query = supabase
    .from("profiles")
    .select("id, full_name, role, created_at")
    .order("created_at", { ascending: false });

  if (selectedRole) {
    query = query.eq("role", selectedRole);
  }

  const { data: profiles, error } = await query;
  const users = profiles ?? [];

  const filters = [
    { label: "All", href: "/dashboard/admin/users", role: undefined },
    {
      label: "Students",
      href: "/dashboard/admin/users?role=student",
      role: "student",
    },
    {
      label: "Teachers",
      href: "/dashboard/admin/users?role=teacher",
      role: "teacher",
    },
    {
      label: "Admins",
      href: "/dashboard/admin/users?role=admin",
      role: "admin",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafafc] px-4 py-6 md:px-8">
      <section className="mb-6 rounded-3xl bg-white p-6 shadow-sm">
        <Link
          href="/dashboard/admin"
          className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#202c5c] px-5 py-2 text-sm font-bold text-white transition hover:bg-[#a54a5c]"
        >
          <ArrowLeft size={16} />
          Back to Admin Panel
        </Link>

        <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#a54a5c]">
          Admin Users
        </p>

        <h1 className="text-3xl font-extrabold text-[#202c5c]">
          {selectedRole
            ? `${
                selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)
              } Users`
            : "User Management"}
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          {users.length} user{users.length === 1 ? "" : "s"} found.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          {filters.map((filter) => {
            const isActive = selectedRole === filter.role;

            return (
              <Link
                key={filter.label}
                href={filter.href}
                className={`rounded-full px-5 py-2 text-sm font-bold transition ${
                  isActive
                    ? "bg-[#a54a5c] text-white"
                    : "bg-gray-100 text-[#202c5c] hover:bg-pink-100"
                }`}
              >
                {filter.label}
              </Link>
            );
          })}
        </div>
      </section>

      {error && (
        <div className="mb-6 rounded-3xl border border-red-100 bg-red-50 p-5 text-sm font-semibold text-red-700">
          Could not load users from Supabase. Please check the profiles table.
        </div>
      )}

      <section className="overflow-hidden rounded-3xl bg-white shadow-sm">
        <div className="border-b border-gray-100 p-5">
          <h2 className="flex items-center gap-2 text-lg font-extrabold text-[#202c5c]">
            <Users size={20} className="text-[#a54a5c]" />
            User List
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            View registered users, filter them by role, and update account
            access.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[950px] text-left">
            <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
              <tr>
                <th className="px-5 py-4">User</th>
                <th className="px-5 py-4">Role</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Joined Date</th>
                <th className="px-5 py-4">Change Role</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {users.map((user) => {
                const role = user.role || "student";
                const displayName = user.full_name || "Unnamed User";

                return (
                  <tr key={user.id} className="transition hover:bg-pink-50/40">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-100 font-bold text-[#a54a5c]">
                          {displayName.charAt(0).toUpperCase()}
                        </div>

                        <div>
                          <p className="font-bold text-[#202c5c]">
                            {displayName}
                          </p>
                          <p className="text-xs text-gray-400">
                            ID: {user.id.slice(0, 8)}...
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold capitalize ${
                          role === "admin"
                            ? "bg-purple-50 text-purple-700"
                            : role === "teacher"
                              ? "bg-green-50 text-green-700"
                              : "bg-blue-50 text-blue-700"
                        }`}
                      >
                        {role}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
                        <CheckCircle2 size={13} />
                        Active
                      </span>
                    </td>

                    <td className="px-5 py-4 text-sm text-gray-600">
                      {user.created_at
                        ? new Date(user.created_at).toLocaleDateString()
                        : "N/A"}
                    </td>

                    <td className="px-5 py-4">
                      <form action={updateUserRole} className="flex gap-2">
                        <input type="hidden" name="userId" value={user.id} />

                        <select
                          name="role"
                          defaultValue={role}
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
              No users found.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}