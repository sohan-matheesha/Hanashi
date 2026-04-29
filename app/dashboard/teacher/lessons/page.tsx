import {
  BookOpen,
  Plus,
  Search,
  Pencil,
  Trash2,
  Eye,
  Clock,
  CheckCircle2,
} from "lucide-react";

const lessons = [
  {
    title: "Hiragana Basics",
    level: "Beginner",
    category: "Characters",
    status: "Published",
    duration: "25 min",
  },
  {
    title: "Katakana Practice",
    level: "Beginner",
    category: "Characters",
    status: "Published",
    duration: "30 min",
  },
  {
    title: "Basic Greetings",
    level: "Beginner",
    category: "Vocabulary",
    status: "Draft",
    duration: "15 min",
  },
  {
    title: "Particles は and が",
    level: "N5",
    category: "Grammar",
    status: "Published",
    duration: "35 min",
  },
];

export default function TeacherLessonsPage() {
  return (
    <div className="min-h-screen bg-[#fafafc] px-4 py-6 md:px-8">
      {/* Header */}
      <div className="mb-6 flex flex-col justify-between gap-4 rounded-3xl bg-white p-6 shadow-sm md:flex-row md:items-center">
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

        <button className="flex w-fit items-center gap-2 rounded-2xl bg-[#FF5A1F] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:scale-105">
          <Plus size={18} />
          Add New Lesson
        </button>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 rounded-3xl bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search lessons..."
              className="w-full rounded-2xl bg-gray-50 py-3 pl-11 pr-4 text-sm text-[#202c5c] outline-none focus:ring-2 focus:ring-[#FF5A1F]/20"
            />
          </div>

          <select className="rounded-2xl bg-gray-50 px-4 py-3 text-sm font-medium text-[#202c5c] outline-none focus:ring-2 focus:ring-[#FF5A1F]/20">
            <option>All Levels</option>
            <option>Beginner</option>
            <option>N5</option>
            <option>N4</option>
          </select>

          <select className="rounded-2xl bg-gray-50 px-4 py-3 text-sm font-medium text-[#202c5c] outline-none focus:ring-2 focus:ring-[#FF5A1F]/20">
            <option>All Status</option>
            <option>Published</option>
            <option>Draft</option>
          </select>
        </div>
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
              {lessons.map((lesson) => (
                <tr key={lesson.title} className="transition hover:bg-orange-50/40">
                  <td className="px-5 py-4">
                    <div className="font-bold text-[#202c5c]">{lesson.title}</div>
                    <div className="mt-1 text-xs text-gray-400">
                      Japanese learning material
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
                      {lesson.duration}
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

      {/* Note */}
      <div className="mt-6 rounded-3xl border border-orange-100 bg-[#fff7f2] p-5 text-sm leading-6 text-gray-600">
        <strong className="text-[#FF5A1F]">Note:</strong> This is the teacher lesson
        management UI. Later, these lessons can be connected to Supabase so teachers
        can create, update, publish, and delete lessons dynamically.
      </div>
    </div>
  );
}