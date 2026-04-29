import {
  Video,
  CalendarDays,
  Clock,
  Users,
  Plus,
  Link2,
  Pencil,
  Trash2,
  PlayCircle,
} from "lucide-react";

const sessions = [
  {
    title: "N5 Grammar Practice",
    date: "2026-05-02",
    time: "7:00 PM",
    students: 24,
    status: "Upcoming",
    platform: "Jitsi Meet",
  },
  {
    title: "Hiragana Speaking Practice",
    date: "2026-05-04",
    time: "6:30 PM",
    students: 18,
    status: "Upcoming",
    platform: "Jitsi Meet",
  },
  {
    title: "Japanese Greeting Conversation",
    date: "2026-04-28",
    time: "8:00 PM",
    students: 31,
    status: "Completed",
    platform: "Jitsi Meet",
  },
];

export default function TeacherLiveSessionsPage() {
  return (
    <div className="min-h-screen bg-[#fafafc] px-4 py-6 md:px-8">
      {/* Header */}
      <div className="mb-6 flex flex-col justify-between gap-4 rounded-3xl bg-white p-6 shadow-sm md:flex-row md:items-center">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#FF5A1F]">
            Teacher Panel
          </p>
          <h1 className="text-3xl font-bold text-[#202c5c]">Live Sessions</h1>
          <p className="mt-2 text-sm text-gray-500">
            Schedule and manage real-time Japanese learning sessions for students.
          </p>
        </div>

        <button className="flex w-fit items-center gap-2 rounded-2xl bg-[#FF5A1F] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:scale-105">
          <Plus size={18} />
          Create Session
        </button>
      </div>

      {/* Summary */}
      <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff1ea] text-[#FF5A1F]">
            <Video size={24} />
          </div>
          <h2 className="text-3xl font-bold text-[#202c5c]">06</h2>
          <p className="mt-1 text-sm font-semibold text-gray-500">
            Upcoming Sessions
          </p>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
            <Users size={24} />
          </div>
          <h2 className="text-3xl font-bold text-[#202c5c]">86</h2>
          <p className="mt-1 text-sm font-semibold text-gray-500">
            Registered Students
          </p>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-700">
            <PlayCircle size={24} />
          </div>
          <h2 className="text-3xl font-bold text-[#202c5c]">14</h2>
          <p className="mt-1 text-sm font-semibold text-gray-500">
            Completed Sessions
          </p>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-700">
            <Clock size={24} />
          </div>
          <h2 className="text-3xl font-bold text-[#202c5c]">2 hrs</h2>
          <p className="mt-1 text-sm font-semibold text-gray-500">
            Average Duration
          </p>
        </div>
      </div>

      {/* Create Session Form Preview */}
      <div className="mb-6 rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-[#202c5c]">
          <CalendarDays size={20} className="text-[#FF5A1F]" />
          Schedule New Session
        </h2>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <input
            type="text"
            placeholder="Session title"
            className="rounded-2xl bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#FF5A1F]/20"
          />

          <input
            type="date"
            className="rounded-2xl bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#FF5A1F]/20"
          />

          <input
            type="time"
            className="rounded-2xl bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#FF5A1F]/20"
          />

          <input
            type="text"
            placeholder="Meeting link"
            className="rounded-2xl bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#FF5A1F]/20"
          />
        </div>
      </div>

      {/* Sessions Table */}
      <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
        <div className="border-b border-gray-100 p-5">
          <h2 className="flex items-center gap-2 text-lg font-bold text-[#202c5c]">
            <Video size={20} className="text-[#FF5A1F]" />
            Session List
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left">
            <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
              <tr>
                <th className="px-5 py-4">Session</th>
                <th className="px-5 py-4">Date</th>
                <th className="px-5 py-4">Time</th>
                <th className="px-5 py-4">Students</th>
                <th className="px-5 py-4">Platform</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {sessions.map((session) => (
                <tr key={session.title} className="transition hover:bg-orange-50/40">
                  <td className="px-5 py-4">
                    <div className="font-bold text-[#202c5c]">{session.title}</div>
                    <div className="mt-1 text-xs text-gray-400">
                      Real-time learning session
                    </div>
                  </td>

                  <td className="px-5 py-4 text-sm font-medium text-gray-600">
                    {session.date}
                  </td>

                  <td className="px-5 py-4 text-sm font-medium text-gray-600">
                    {session.time}
                  </td>

                  <td className="px-5 py-4 text-sm font-medium text-gray-600">
                    {session.students}
                  </td>

                  <td className="px-5 py-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                      <Link2 size={13} />
                      {session.platform}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                        session.status === "Upcoming"
                          ? "bg-green-50 text-green-700"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {session.status}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-2">
                      <button className="rounded-xl bg-gray-50 p-2 text-gray-500 transition hover:bg-green-50 hover:text-green-700">
                        <PlayCircle size={16} />
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
        <strong className="text-[#FF5A1F]">Note:</strong> This is the teacher live
        session management UI. Later, this can be connected with Jitsi Meet or
        another video meeting service to create real live classrooms.
      </div>
    </div>
  );
}
