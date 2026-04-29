import {
  BookOpen,
  Plus,
  Pencil,
  Trash2,
  Eye,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { createClient } from "@/utils/supabase/server";
import { createLesson, deleteLesson } from "./actions";

export default async function TeacherLessonsPage() {
  const supabase = await createClient();

  const { data: lessons, error } = await supabase
    .from("lessons")
    .select("id, title, level, category, duration, status, description, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Lessons fetch error:", error);
  }

  return (
    <div className="min-h-screen bg-[#fafafc] px-4 py-6 md:px-8">
      {/* Header */}
      <div className="mb-6 flex flex-col justify-between gap-4 rounded-3xl bg-white p-6 shadow-sm md:flex-row md:items-start">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#FF5A1F]">
            Teacher Panel
          </p>
          <h1 className="text-3xl font-bold text-[#202c5c]">
            Manage Lessons
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Create, edit, publish, and organize Japanese learning lessons for students.
          </p>
        </div>

        <form
          action={createLesson}
          className="grid w-full gap-3 md:max-w-2xl md:grid-cols-2"
        >
          <input
            name="title"
            type="text"
            placeholder="Lesson title"
            required
            className="rounded-2xl bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#FF5A1F]/20"
          />

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

          <select
            name="category"
            required
            className="rounded-2xl bg-gray-50 px-4 py-3 text-sm text-[#202c5c] outline-none focus:ring-2 focus:ring-[#FF5A1F]/20"
          >
            <option value="">Select category</option>
            <option value="Characters">Characters</option>
            <option value="Vocabulary">Vocabulary</option>
            <option value="Grammar">Grammar</option>
            <option value="Conversation">Conversation</option>
            <option value="Culture">Culture</option>
          </select>

          <input
            name="duration"
            type="text"
            placeholder="Duration e.g. 25 min"
            className="rounded-2xl bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#FF5A1F]/20"
          />

          <select
            name="status"
            required
            defaultValue="Draft"
            className="rounded-2xl bg-gray-50 px-4 py-3 text-sm text-[#202c5c] outline-none focus:ring-2 focus:ring-[#FF5A1F]/20"
          >
            <option value="Draft">Draft</option>
            <option value="Published">Published</option>
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
            Add New Lesson
          </button>
        </form>
      </div>

      {/* Lessons Table */}
      <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
        <div className="border-b border-gray-100 p-5">
          <h2 className="flex items-center gap-2 text-lg font-bold text-[#202c5c]">
            <BookOpen size={20} className="text-[#FF5A1F]" />
            Lesson Content
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-left">
            <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
              <tr>
                <th className="px-5 py-4">Lesson Title</th>
                <th className="px-5 py-4">Level</th>
                <th className="px-5 py-4">Category</th>
                <th className="px-5 py-4">Duration</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {(lessons ?? []).map((lesson) => (
                <tr key={lesson.id} className="transition hover:bg-orange-50/40">
                  <td className="px-5 py-4">
                    <div className="font-bold text-[#202c5c]">
                      {lesson.title}
                    </div>
                    <div className="mt-1 text-xs text-gray-400">
                      {lesson.description || "Japanese learning material"}
                    </div>
                  </td>

                  <td className="px-5 py-4 text-sm font-medium text-gray-600">
                    {lesson.level}
                  </td>

                  <td className="px-5 py-4 text-sm font-medium text-gray-600">
                    {lesson.category}
                  </td>

                  <td className="px-5 py-4">
                    <span className="flex items-center gap-1 text-sm text-gray-600">
                      <Clock size={14} />
                      {lesson.duration || "N/A"}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold ${
                        lesson.status === "Published"
                          ? "bg-green-50 text-green-700"
                          : "bg-yellow-50 text-yellow-700"
                      }`}
                    >
                      <CheckCircle2 size={13} />
                      {lesson.status}
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

                      <form action={deleteLesson}>
                        <input type="hidden" name="lessonId" value={lesson.id} />

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

          {(lessons ?? []).length === 0 && (
            <div className="p-8 text-center text-sm text-gray-500">
              No lessons found. Add your first lesson from the teacher panel.
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 rounded-3xl border border-orange-100 bg-[#fff7f2] p-5 text-sm leading-6 text-gray-600">
        <strong className="text-[#FF5A1F]">Connected:</strong> This page now loads
        real lesson records from the Supabase lessons table.
      </div>
    </div>
  );
}