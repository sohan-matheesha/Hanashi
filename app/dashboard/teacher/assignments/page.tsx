import {
  ClipboardList,
  Plus,
  Search,
  Pencil,
  Trash2,
  Eye,
  CalendarDays,
  Users,
  CheckCircle2,
  Clock,
  FileQuestion,
} from "lucide-react";

const assignments = [
  {
    title: "Hiragana Reading Practice",
    type: "Practice Task",
    level: "Beginner",
    dueDate: "2026-05-05",
    assignedTo: "Beginner Group",
    submissions: "18/24",
    status: "Active",
  },
  {
    title: "Katakana Vocabulary Quiz",
    type: "Quiz",
    level: "Beginner",
    dueDate: "2026-05-08",
    assignedTo: "N5 Students",
    submissions: "12/30",
    status: "Active",
  },
  {
    title: "Particles は / が Worksheet",
    type: "Homework",
    level: "N5",
    dueDate: "2026-05-10",
    assignedTo: "Grammar Class",
    submissions: "09/20",
    status: "Draft",
  },
  {
    title: "Self Introduction Recording",
    type: "Speaking Task",
    level: "Beginner",
    dueDate: "2026-05-12",
    assignedTo: "All Students",
    submissions: "05/50",
    status: "Active",
  },
];

export default function TeacherAssignmentsPage() {
  return (
    <div className="min-h-screen bg-[#fafafc] px-4 py-6 md:px-8">
      {/* Header */}
      <div className="mb-6 flex flex-col justify-between gap-4 rounded-3xl bg-white p-6 shadow-sm md:flex-row md:items-center">
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

        <button className="flex w-fit items-center gap-2 rounded-2xl bg-[#FF5A1F] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:scale-105">
          <Plus size={18} />
          Create Assignment
        </button>
      </div>

      {/* Summary Cards */}
      <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff1ea] text-[#FF5A1F]">
            <ClipboardList size={24} />
          </div>
          <h2 className="text-3xl font-bold text-[#202c5c]">32</h2>
          <p className="mt-1 text-sm font-semibold text-gray-500">
            Total Assignments
          </p>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-700">
            <CheckCircle2 size={24} />
          </div>
          <h2 className="text-3xl font-bold text-[#202c5c]">18</h2>
          <p className="mt-1 text-sm font-semibold text-gray-500">
            Active Tasks
          </p>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
            <Users size={24} />
          </div>
          <h2 className="text-3xl font-bold text-[#202c5c]">44</h2>
          <p className="mt-1 text-sm font-semibold text-gray-500">
            Submissions
          </p>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-700">
            <Clock size={24} />
          </div>
          <h2 className="text-3xl font-bold text-[#202c5c]">07</h2>
          <p className="mt-1 text-sm font-semibold text-gray-500">
            Pending Review
          </p>
        </div>
      </div>

      {/* Create Assignment Form Preview */}
      <div className="mb-6 rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-[#202c5c]">
          <FileQuestion size={20} className="text-[#FF5A1F]" />
          Quick Create
        </h2>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <input
            type="text"
            placeholder="Assignment title"
            className="rounded-2xl bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#FF5A1F]/20"
          />

          <select className="rounded-2xl bg-gray-50 px-4 py-3 text-sm text-[#202c5c] outline-none focus:ring-2 focus:ring-[#FF5A1F]/20">
            <option>Practice Task</option>
            <option>Quiz</option>
            <option>Homework</option>
            <option>Speaking Task</option>
          </select>

          <select className="rounded-2xl bg-gray-50 px-4 py-3 text-sm text-[#202c5c] outline-none focus:ring-2 focus:ring-[#FF5A1F]/20">
            <option>Beginner</option>
            <option>N5</option>
            <option>N4</option>
          </select>

          <input
            type="date"
            className="rounded-2xl bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#FF5A1F]/20"
          />
        </div>
      </div>

      {/* Search */}
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
              {assignments.map((assignment) => (
                <tr
                  key={assignment.title}
                  className="transition hover:bg-orange-50/40"
                >
                  <td className="px-5 py-4">
                    <div className="font-bold text-[#202c5c]">
                      {assignment.title}
                    </div>
                    <div className="mt-1 text-xs text-gray-400">
                      Japanese learning activity
                    </div>
                  </td>

                  <td className="px-5 py-4 text-sm font-medium text-gray-600">
                    {assignment.type}
                  </td>

                  <td className="px-5 py-4 text-sm font-medium text-gray-600">
                    {assignment.level}
                  </td>

                  <td className="px-5 py-4">
                    <span className="flex items-center gap-1 text-sm text-gray-600">
                      <CalendarDays size={14} />
                      {assignment.dueDate}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-sm font-medium text-gray-600">
                    {assignment.assignedTo}
                  </td>

                  <td className="px-5 py-4 text-sm font-bold text-[#202c5c]">
                    {assignment.submissions}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                        assignment.status === "Active"
                          ? "bg-green-50 text-green-700"
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
                      <button className="rounded-xl bg-gray-50 p-2 text-gray-500 transition hover:bg-orange-50 hover:text-[#FF5A1F]">
                        <Pencil size={16} />
                      </button>
                      <button className="rounded-xl bg-gray-50 p-2 text-gray-500 transition hover:bg-red-50 hover:text-red-600">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 rounded-3xl border border-orange-100 bg-[#fff7f2] p-5 text-sm leading-6 text-gray-600">
        <strong className="text-[#FF5A1F]">Note:</strong> This is the teacher
        assignments UI. Later, this can be connected to Supabase so teachers can
        create quizzes, homework, speaking tasks, and review student submissions.
      </div>
    </div>
  );
}