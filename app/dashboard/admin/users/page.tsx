import Link from "next/link";
import { ArrowLeft, Users } from "lucide-react";
import { createClient } from "@/utils/supabase/server";

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

  const { data: profiles } = await query;
  const users = profiles ?? [];

  return (
    <div className="min-h-screen bg-[#fafafc] px-4 py-6 md:px-8">
      <div className="mb-6 rounded-3xl bg-white p-6 shadow-sm">
        <Link
          href="/dashboard/admin"
          className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#202c5c] px-5 py-2 text-sm font-bold text-white transition hover:bg-[#FF5A1F]"
        >
          <ArrowLeft size={16} />
          Back to Admin Panel
        </Link>

        <h1 className="text-3xl font-bold text-[#202c5c]">
          {selectedRole
            ? `${
                selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)
              } Users`
            : "User Management"}
        </h1>

        <p className="mt-2 text-gray-500">
          {users.length} user{users.length === 1 ? "" : "s"} found.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/dashboard/admin/users"
            className="rounded-full bg-gray-100 px-5 py-2 text-sm font-bold text-[#202c5c]"
          >
            All
          </Link>

          <Link
            href="/dashboard/admin/users?role=student"
            className="rounded-full bg-blue-50 px-5 py-2 text-sm font-bold text-blue-700"
          >
            Students
          </Link>

          <Link
            href="/dashboard/admin/users?role=teacher"
            className="rounded-full bg-green-50 px-5 py-2 text-sm font-bold text-green-700"
          >
            Teachers
          </Link>

          <Link
            href="/dashboard/admin/users?role=admin"
            className="rounded-full bg-purple-50 px-5 py-2 text-sm font-bold text-purple-700"
          >
            Admins
          </Link>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
        <div className="border-b border-gray-100 p-5">
          <h2 className="flex items-center gap-2 text-lg font-bold text-[#202c5c]">
            <Users size={20} />
            User List
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[750px] text-left">
            <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
              <tr>
                <th className="px-5 py-4">User</th>
                <th className="px-5 py-4">Role</th>
                <th className="px-5 py-4">Joined Date</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {users.map((user) => {
                const role = user.role || "student";

                return (
                  <tr key={user.id} className="transition hover:bg-orange-50/40">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fff1ea] font-bold text-[#FF5A1F]">
                          {(user.full_name || "U").charAt(0).toUpperCase()}
                        </div>

                        <div>
                          <p className="font-bold text-[#202c5c]">
                            {user.full_name || "Unnamed User"}
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

                    <td className="px-5 py-4 text-sm text-gray-600">
                      {user.created_at
                        ? new Date(user.created_at).toLocaleDateString()
                        : "N/A"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {users.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              No users found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}