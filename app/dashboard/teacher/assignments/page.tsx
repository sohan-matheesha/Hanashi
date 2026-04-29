import {
  ClipboardList,
  Plus,
  Search,
  Trash2,
  Eye,
  CalendarDays,
  Users,
  CheckCircle2,
  Clock,
  FileQuestion,
} from "lucide-react";
import { createClient } from "@/utils/supabase/server";
import { createAssignment, deleteAssignment } from "./actions";

export default async function TeacherAssignmentsPage() {
  const supabase = await createClient();

  const { data: assignments, error } = await supabase
    .from("assignments")
    .select(
      "id, title, assignment_type, level, due_date, assigned_to, submissions, status, description, created_at"
    )
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Assignments fetch error:", error);
  }

  const assignmentList = assignments ?? [];
  const totalAssignments = assignmentList.length;
  const activeTasks = assignmentList.filter(
    (assignment) => assignment.status === "Active"
  ).length;
  const draftTasks = assignmentList.filter(
    (assignment) => assignment.status === "Draft"
  ).length;

  return (
    <div className="min-h-screen bg-[#fafafc] px-4 py-6 md:px-8">
      {/* Header */}
      <div className="mb-6 flex flex-col justify-between gap-4 rounded-3xl bg-white p-6 shadow-sm md:flex-row md:items-start">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#FF5A1F]">
            Teacher Panel
          </p>
          <h1 className="text-3xl font-bold text-[#202c5c]">
            Assignments & Tasks
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Create quizzes, homework, speaking tasks, and practice activities
            for students.
          </p>
        </div>

        <form
          action={createAssignment}
          className="grid w-full gap-3 md:max-w-2xl md:grid-cols-2"
        >
          <input
            name="title"
            type="text"
            placeholder="Assignment title"
            required
            className="rounded-2xl bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#FF5A1F]/20"
          />

          <select
            name="assignmentType"
            required
            className="rounded-2xl bg-gray-50 px-4 py-3 text-sm text-[#202c5c] outline-none focus:ring-2 focus:ring-[#FF5A1F]/20"
          >
            <option value="">Select type</option>
            <option value="Practice Task">Practice Task</option>
            <option value="Quiz">Quiz</option>
            <option value="Homework">Homework</option>
            <option value="Speaking Task">Speaking Task</option>
          </select>

          <select
            name="level"
            required
            className="rounded-2xl bg-gray-50 px-4 py-3 text-sm text-[#202c5c] outline-none focus:ring-2 focus:ring-[#FF5A1F]/20"
          >
            <option value="">Select level</option>
            <option value="Beginner">Beginner</option>
            <option value="N5">N5</option>
            <option value="N4">N4</option>
            <option value="N3">N3</option>
          </select>

          <input
            name="dueDate"
            type="date"
            className="rounded-2xl bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#FF5A1F]/20"
          />

          <input
            name="assignedTo"
            type="text"
            placeholder="Assigned to e.g. Beginner Group"
            className="rounded-2xl bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#FF5A1F]/20"
          />

          <input
            name="submissions"
            type="text"
            placeholder="Submissions e.g. 0/24"
            defaultValue="0/0"
            className="rounded-2xl bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#FF5A1F]/20"
          />

          <select
            name="status"
            required
            defaultValue="Draft"
            className="rounded-2xl bg-gray-50 px-4 py-3 text-sm text-[#202c5c] outline-none focus:ring-2 focus:ring-[#FF5A1F]/20"
          >
            <option value="Draft">Draft</option>
            <option value="Active">Active</option>
            <option value="Closed">Closed</option>
          </select>

          <input
            name="description"
            type="text"
            placeholder="Short description"
            className="rounded-2xl bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#FF5A1F]/20"
          />

          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-2xl bg-[#FF5A1F] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:scale-105 md:col-span-2"
          >
            <Plus size={18} />
            Create Assignment
          </button>
        </form>
      </div>

      {/* Summary Cards */}
      <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff1ea] text-[#FF5A1F]">
            <ClipboardList size={24} />
          </div>
          <h2 className="text-3xl font-bold text-[#202c5c]">
            {totalAssignments}
          </h2>
          <p className="mt-1 text-sm font-semibold text-gray-500">
            Total Assignments
          </p>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-700">
            <CheckCircle2 size={24} />
          </div>
          <h2 className="text-3xl font-bold text-[#202c5c]">{activeTasks}</h2>
          <p className="mt-1 text-sm font-semibold text-gray-500">
            Active Tasks
          </p>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-700">
            <Clock size={24} />
          </div>
          <h2 className="text-3xl font-bold text-[#202c5c]">{draftTasks}</h2>
          <p className="mt-1 text-sm font-semibold text-gray-500">
            Draft Tasks
          </p>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
            <Users size={24} />
          </div>
          <h2 className="text-3xl font-bold text-[#202c5c]">
            {assignmentList.length}
          </h2>
          <p className="mt-1 text-sm font-semibold text-gray-500">
            Listed Items
          </p>
        </div>
      </div>

      {/* Search UI only */}
      <div className="mb-6 rounded-3xl bg-white p-4 shadow-sm">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search assignments..."
            className="w-full rounded-2xl bg-gray-50 py-3 pl-11 pr-4 text-sm text-[#202c5c] outline-none focus:ring-2 focus:ring-[#FF5A1F]/20"
          />
        </div>
      </div>

      {/* Assignments Table */}
      <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
        <div className="border-b border-gray-100 p-5">
          <h2 className="flex items-center gap-2 text-lg font-bold text-[#202c5c]">
            <ClipboardList size={20} className="text-[#FF5A1F]" />
            Assignment List
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-left">
            <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
              <tr>
                <th className="px-5 py-4">Assignment</th>
                <th className="px-5 py-4">Type</th>
                <th className="px-5 py-4">Level</th>
                <th className="px-5 py-4">Due Date</th>
                <th className="px-5 py-4">Assigned To</th>
                <th className="px-5 py-4">Submissions</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {assignmentList.map((assignment) => (
                <tr
                  key={assignment.id}
                  className="transition hover:bg-orange-50/40"
                >
                  <td className="px-5 py-4">
                    <div className="font-bold text-[#202c5c]">
                      {assignment.title}
                    </div>
                    <div className="mt-1 text-xs text-gray-400">
                      {assignment.description || "Japanese learning activity"}
                    </div>
                  </td>

                  <td className="px-5 py-4 text-sm font-medium text-gray-600">
                    {assignment.assignment_type}
                  </td>

                  <td className="px-5 py-4 text-sm font-medium text-gray-600">
                    {assignment.level}
                  </td>

                  <td className="px-5 py-4">
                    <span className="flex items-center gap-1 text-sm text-gray-600">
                      <CalendarDays size={14} />
                      {assignment.due_date || "N/A"}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-sm font-medium text-gray-600">
                    {assignment.assigned_to || "All Students"}
                  </td>

                  <td className="px-5 py-4 text-sm font-bold text-[#202c5c]">
                    {assignment.submissions || "0/0"}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                        assignment.status === "Active"
                          ? "bg-green-50 text-green-700"
                          : assignment.status === "Closed"
                          ? "bg-gray-100 text-gray-500"
                          : "bg-yellow-50 text-yellow-700"
                      }`}
                    >
                      {assignment.status}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-2">
                      <button className="rounded-xl bg-gray-50 p-2 text-gray-500 transition hover:bg-blue-50 hover:text-blue-600">
                        <Eye size={16} />
                      </button>

                      <form action={deleteAssignment}>
                        <input
                          type="hidden"
                          name="assignmentId"
                          value={assignment.id}
                        />

                        <button
                          type="submit"
                          className="rounded-xl bg-gray-50 p-2 text-gray-500 transition hover:bg-red-50 hover:text-red-600"
                        >
                          <Trash2 size={16} />
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {assignmentList.length === 0 && (
            <div className="p-8 text-center text-sm text-gray-500">
              No assignments found. Create your first assignment from the teacher
              panel.
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 rounded-3xl border border-orange-100 bg-[#fff7f2] p-5 text-sm leading-6 text-gray-600">
        <strong className="text-[#FF5A1F]">Connected:</strong> This page now loads
        and creates real assignment records from Supabase.
      </div>
    </div>
  );
}