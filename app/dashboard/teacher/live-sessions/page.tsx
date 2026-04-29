import {
  Video,
  CalendarDays,
  Clock,
  Users,
  Plus,
  Link2,
  Trash2,
  PlayCircle,
} from "lucide-react";
import { createClient } from "@/utils/supabase/server";
import { createLiveSession, deleteLiveSession } from "./actions";

export default async function TeacherLiveSessionsPage() {
  const supabase = await createClient();

  const { data: sessions, error } = await supabase
    .from("live_sessions")
    .select(
      "id, title, session_date, session_time, meeting_link, platform, status, students_count, created_at"
    )
    .order("session_date", { ascending: true });

  if (error) {
    console.error("Live sessions fetch error:", error);
  }

  const liveSessions = sessions ?? [];
  const upcomingCount = liveSessions.filter(
    (session) => session.status === "Upcoming"
  ).length;
  const completedCount = liveSessions.filter(
    (session) => session.status === "Completed"
  ).length;
  const totalStudents = liveSessions.reduce(
    (total, session) => total + (session.students_count || 0),
    0
  );

  return (
    <div className="min-h-screen bg-[#fafafc] px-4 py-6 md:px-8">
      {/* Header */}
      <div className="mb-6 flex flex-col justify-between gap-4 rounded-3xl bg-white p-6 shadow-sm md:flex-row md:items-start">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#FF5A1F]">
            Teacher Panel
          </p>
          <h1 className="text-3xl font-bold text-[#202c5c]">Live Sessions</h1>
          <p className="mt-2 text-sm text-gray-500">
            Schedule and manage real-time Japanese learning sessions for students.
          </p>
        </div>

        <form
          action={createLiveSession}
          className="grid w-full gap-3 md:max-w-2xl md:grid-cols-2"
        >
          <input
            name="title"
            type="text"
            placeholder="Session title"
            required
            className="rounded-2xl bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#FF5A1F]/20"
          />

          <input
            name="sessionDate"
            type="date"
            required
            className="rounded-2xl bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#FF5A1F]/20"
          />

          <input
            name="sessionTime"
            type="time"
            required
            className="rounded-2xl bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#FF5A1F]/20"
          />

          <input
            name="meetingLink"
            type="url"
            placeholder="Meeting link"
            className="rounded-2xl bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#FF5A1F]/20"
          />

          <select
            name="platform"
            defaultValue="Jitsi Meet"
            required
            className="rounded-2xl bg-gray-50 px-4 py-3 text-sm text-[#202c5c] outline-none focus:ring-2 focus:ring-[#FF5A1F]/20"
          >
            <option value="Jitsi Meet">Jitsi Meet</option>
            <option value="Google Meet">Google Meet</option>
            <option value="Zoom">Zoom</option>
          </select>

          <select
            name="status"
            defaultValue="Upcoming"
            required
            className="rounded-2xl bg-gray-50 px-4 py-3 text-sm text-[#202c5c] outline-none focus:ring-2 focus:ring-[#FF5A1F]/20"
          >
            <option value="Upcoming">Upcoming</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-2xl bg-[#FF5A1F] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:scale-105 md:col-span-2"
          >
            <Plus size={18} />
            Create Session
          </button>
        </form>
      </div>

      {/* Summary */}
      <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff1ea] text-[#FF5A1F]">
            <Video size={24} />
          </div>
          <h2 className="text-3xl font-bold text-[#202c5c]">
            {upcomingCount}
          </h2>
          <p className="mt-1 text-sm font-semibold text-gray-500">
            Upcoming Sessions
          </p>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
            <Users size={24} />
          </div>
          <h2 className="text-3xl font-bold text-[#202c5c]">
            {totalStudents}
          </h2>
          <p className="mt-1 text-sm font-semibold text-gray-500">
            Registered Students
          </p>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-700">
            <PlayCircle size={24} />
          </div>
          <h2 className="text-3xl font-bold text-[#202c5c]">
            {completedCount}
          </h2>
          <p className="mt-1 text-sm font-semibold text-gray-500">
            Completed Sessions
          </p>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-700">
            <Clock size={24} />
          </div>
          <h2 className="text-3xl font-bold text-[#202c5c]">
            {liveSessions.length}
          </h2>
          <p className="mt-1 text-sm font-semibold text-gray-500">
            Total Sessions
          </p>
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
              {liveSessions.map((session) => (
                <tr key={session.id} className="transition hover:bg-orange-50/40">
                  <td className="px-5 py-4">
                    <div className="font-bold text-[#202c5c]">
                      {session.title}
                    </div>
                    <div className="mt-1 text-xs text-gray-400">
                      {session.meeting_link || "No meeting link added"}
                    </div>
                  </td>

                  <td className="px-5 py-4 text-sm font-medium text-gray-600">
                    {session.session_date}
                  </td>

                  <td className="px-5 py-4 text-sm font-medium text-gray-600">
                    {session.session_time}
                  </td>

                  <td className="px-5 py-4 text-sm font-medium text-gray-600">
                    {session.students_count}
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
                          : session.status === "Completed"
                          ? "bg-gray-100 text-gray-500"
                          : "bg-red-50 text-red-600"
                      }`}
                    >
                      {session.status}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex justify-end gap-2">
                      {session.meeting_link && (
                        <a
                          href={session.meeting_link}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-xl bg-gray-50 p-2 text-gray-500 transition hover:bg-green-50 hover:text-green-700"
                        >
                          <PlayCircle size={16} />
                        </a>
                      )}

                      <form action={deleteLiveSession}>
                        <input
                          type="hidden"
                          name="sessionId"
                          value={session.id}
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

          {liveSessions.length === 0 && (
            <div className="p-8 text-center text-sm text-gray-500">
              No live sessions found. Create your first session from the teacher panel.
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 rounded-3xl border border-orange-100 bg-[#fff7f2] p-5 text-sm leading-6 text-gray-600">
        <strong className="text-[#FF5A1F]">Connected:</strong> This page now loads
        and creates real live session records from Supabase.
      </div>
    </div>
  );
}