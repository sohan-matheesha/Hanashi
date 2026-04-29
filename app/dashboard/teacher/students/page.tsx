import {
  Users,
  Search,
  Mail,
  Eye,
  MessageCircle,
  BarChart3,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { createClient } from "@/utils/supabase/server";

export default async function TeacherStudentsPage() {
  const supabase = await createClient();

  const { data: profiles, error } = await supabase
    .from("profiles")
    .select("id, full_name, role, created_at")
    .eq("role", "student")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Students fetch error:", error);
  }

  const students = profiles ?? [];

  return (
    <div className="min-h-screen bg-[#fafafc] px-4 py-6 md:px-8">
      {/* Header */}
      <div className="mb-6 flex flex-col justify-between gap-4 rounded-3xl bg-white p-6 shadow-sm md:flex-row md:items-center">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#FF5A1F]">
            Teacher Panel
          </p>
          <h1 className="text-3xl font-bold text-[#202c5c]">
            Student Management
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            View registered students and support learners during their Japanese
            learning journey.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-2xl bg-[#fff1ea] px-4 py-3 text-sm font-bold text-[#FF5A1F]">
          <Users size={18} />
          {students.length} Students
        </div>
      </div>

      {/* Summary Cards */}
      <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff1ea] text-[#FF5A1F]">
            <Users size={24} />
          </div>
          <h2 className="text-3xl font-bold text-[#202c5c]">
            {students.length}
          </h2>
          <p className="mt-1 text-sm font-semibold text-gray-500">
            Total Students
          </p>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-700">
            <CheckCircle2 size={24} />
          </div>
          <h2 className="text-3xl font-bold text-[#202c5c]">
            {students.length}
          </h2>
          <p className="mt-1 text-sm font-semibold text-gray-500">
            Active Students
          </p>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
            <BarChart3 size={24} />
          </div>
          <h2 className="text-3xl font-bold text-[#202c5c]">0%</h2>
          <p className="mt-1 text-sm font-semibold text-gray-500">
            Average Progress
          </p>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-700">
            <Clock size={24} />
          </div>
          <h2 className="text-3xl font-bold text-[#202c5c]">0</h2>
          <p className="mt-1 text-sm font-semibold text-gray-500">
            Need Attention
          </p>
        </div>
      </div>

      {/* Search UI only */}
      <div className="mb-6 rounded-3xl bg-white p-4 shadow-sm">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search students by name or user ID..."
            className="w-full rounded-2xl bg-gray-50 py-3 pl-11 pr-4 text-sm text-[#202c5c] outline-none focus:ring-2 focus:ring-[#FF5A1F]/20"
          />
        </div>
      </div>

      {/* Students Table */}
      <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
        <div className="border-b border-gray-100 p-5">
          <h2 className="flex items-center gap-2 text-lg font-bold text-[#202c5c]">
            <Users size={20} className="text-[#FF5A1F]" />
            Student List
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left">
            <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
              <tr>
                <th className="px-5 py-4">Student</th>
                <th className="px-5 py-4">Role</th>
                <th className="px-5 py-4">Progress</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Joined Date</th>
                <th className="px-5 py-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {students.map((student) => {
                const displayName = student.full_name || "Unnamed Student";
                const joinedDate = student.created_at
                  ? new Date(student.created_at).toLocaleDateString()
                  : "N/A";

                return (
                  <tr
                    key={student.id}
                    className="transition hover:bg-orange-50/40"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fff1ea] font-bold text-[#FF5A1F]">
                          {displayName.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <div className="font-bold text-[#202c5c]">
                            {displayName}
                          </div>
                          <div className="mt-1 flex items-center gap-1 text-xs text-gray-400">
                            <Mail size={12} />
                            User ID: {student.id.slice(0, 8)}...
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold capitalize text-blue-700">
                        {student.role || "student"}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-28 overflow-hidden rounded-full bg-gray-100">
                          <div className="h-full w-[0%] rounded-full bg-[#FF5A1F]" />
                        </div>
                        <span className="text-sm font-bold text-[#202c5c]">
                          0%
                        </span>
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <span className="inline-flex rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
                        Active
                      </span>
                    </td>

                    <td className="px-5 py-4 text-sm font-medium text-gray-600">
                      {joinedDate}
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex justify-end gap-2">
                        <button className="rounded-xl bg-gray-50 p-2 text-gray-500 transition hover:bg-blue-50 hover:text-blue-600">
                          <Eye size={16} />
                        </button>
                        <button className="rounded-xl bg-gray-50 p-2 text-gray-500 transition hover:bg-orange-50 hover:text-[#FF5A1F]">
                          <MessageCircle size={16} />
                        </button>
                        <button className="rounded-xl bg-gray-50 p-2 text-gray-500 transition hover:bg-green-50 hover:text-green-700">
                          <BarChart3 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {students.length === 0 && (
            <div className="p-8 text-center text-sm text-gray-500">
              No student users found. Use the Admin Panel to assign a user role
              as student.
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 rounded-3xl border border-orange-100 bg-[#fff7f2] p-5 text-sm leading-6 text-gray-600">
        <strong className="text-[#FF5A1F]">Connected:</strong> This page now
        loads real student users from the Supabase profiles table.
      </div>
    </div>
  );
}