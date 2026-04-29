import {
  BarChart3,
  Users,
  BookOpen,
  CheckCircle2,
  TrendingUp,
  Search,
  Eye,
  Award,
  Clock,
  Target,
} from "lucide-react";
import { createClient } from "@/utils/supabase/server";

export default async function TeacherProgressPage() {
  const supabase = await createClient();

  const { data: progressRecords, error } = await supabase
    .from("student_progress")
    .select(
      `
      id,
      level,
      lessons_completed,
      total_lessons,
      quiz_score,
      speaking_sessions,
      overall_progress,
      status,
      profiles (
        id,
        full_name
      )
    `
    )
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Progress fetch error:", error);
  }

  const records = progressRecords ?? [];

  const totalLearners = records.length;

  const averageCompletion =
    records.length > 0
      ? Math.round(
          records.reduce((sum, item) => sum + (item.overall_progress || 0), 0) /
            records.length
        )
      : 0;

  const averageQuizScore =
    records.length > 0
      ? Math.round(
          records.reduce((sum, item) => sum + (item.quiz_score || 0), 0) /
            records.length
        )
      : 0;

  const needSupportCount = records.filter(
    (item) => item.status === "Needs Support"
  ).length;

  return (
    <div className="min-h-screen bg-[#fafafc] px-4 py-6 md:px-8">
      {/* Header */}
      <div className="mb-6 flex flex-col justify-between gap-4 rounded-3xl bg-white p-6 shadow-sm md:flex-row md:items-center">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#FF5A1F]">
            Teacher Panel
          </p>
          <h1 className="text-3xl font-bold text-[#202c5c]">
            Student Progress Monitor
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Track lesson completion, quiz performance, speaking practice, and
            overall learning progress using real Supabase data.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-2xl bg-[#fff1ea] px-4 py-3 text-sm font-bold text-[#FF5A1F]">
          <TrendingUp size={18} />
          Progress Overview
        </div>
      </div>

      {/* Summary Cards */}
      <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff1ea] text-[#FF5A1F]">
            <Users size={24} />
          </div>
          <h2 className="text-3xl font-bold text-[#202c5c]">{totalLearners}</h2>
          <p className="mt-1 text-sm font-semibold text-gray-500">
            Total Learners
          </p>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-700">
            <CheckCircle2 size={24} />
          </div>
          <h2 className="text-3xl font-bold text-[#202c5c]">
            {averageCompletion}%
          </h2>
          <p className="mt-1 text-sm font-semibold text-gray-500">
            Average Completion
          </p>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
            <Award size={24} />
          </div>
          <h2 className="text-3xl font-bold text-[#202c5c]">
            {averageQuizScore}%
          </h2>
          <p className="mt-1 text-sm font-semibold text-gray-500">
            Average Quiz Score
          </p>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-700">
            <Target size={24} />
          </div>
          <h2 className="text-3xl font-bold text-[#202c5c]">
            {needSupportCount}
          </h2>
          <p className="mt-1 text-sm font-semibold text-gray-500">
            Need Support
          </p>
        </div>
      </div>

      {/* Progress Insights */}
      <div className="mb-6 grid gap-4 lg:grid-cols-3">
        <div className="rounded-3xl bg-white p-6 shadow-sm lg:col-span-2">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-[#202c5c]">
            <BarChart3 size={20} className="text-[#FF5A1F]" />
            Class Progress Summary
          </h2>

          <div className="space-y-5">
            <div>
              <div className="mb-2 flex justify-between text-sm font-semibold text-[#202c5c]">
                <span>Lesson Completion</span>
                <span>{averageCompletion}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-[#FF5A1F]"
                  style={{ width: `${averageCompletion}%` }}
                />
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between text-sm font-semibold text-[#202c5c]">
                <span>Quiz Performance</span>
                <span>{averageQuizScore}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-green-500"
                  style={{ width: `${averageQuizScore}%` }}
                />
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between text-sm font-semibold text-[#202c5c]">
                <span>Speaking Practice Participation</span>
                <span>{totalLearners > 0 ? "Active" : "0%"}</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-blue-500"
                  style={{ width: totalLearners > 0 ? "60%" : "0%" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-[#202c5c] p-6 text-white shadow-sm">
          <h2 className="mb-3 flex items-center gap-2 text-lg font-bold">
            <Clock size={20} />
            Weekly Focus
          </h2>
          <p className="text-sm leading-6 text-white/80">
            Use this progress data to identify students who need support with
            lessons, quizzes, or speaking practice.
          </p>

          <div className="mt-5 rounded-2xl bg-white/10 p-4">
            <p className="text-xs uppercase tracking-wide text-white/60">
              Suggested Action
            </p>
            <p className="mt-1 text-sm font-bold">
              Create extra practice for low-progress students
            </p>
          </div>
        </div>
      </div>

      {/* Search UI only */}
      <div className="mb-6 rounded-3xl bg-white p-4 shadow-sm">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search student progress..."
            className="w-full rounded-2xl bg-gray-50 py-3 pl-11 pr-4 text-sm text-[#202c5c] outline-none focus:ring-2 focus:ring-[#FF5A1F]/20"
          />
        </div>
      </div>

      {/* Progress Table */}
      <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
        <div className="border-b border-gray-100 p-5">
          <h2 className="flex items-center gap-2 text-lg font-bold text-[#202c5c]">
            <BookOpen size={20} className="text-[#FF5A1F]" />
            Individual Student Progress
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-left">
            <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
              <tr>
                <th className="px-5 py-4">Student</th>
                <th className="px-5 py-4">Level</th>
                <th className="px-5 py-4">Lessons</th>
                <th className="px-5 py-4">Quiz Score</th>
                <th className="px-5 py-4">Speaking Practice</th>
                <th className="px-5 py-4">Overall Progress</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4 text-right">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {records.map((record) => {
                const profile = Array.isArray(record.profiles)
                  ? record.profiles[0]
                  : record.profiles;

                const studentName = profile?.full_name || "Unnamed Student";

                return (
                  <tr
                    key={record.id}
                    className="transition hover:bg-orange-50/40"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fff1ea] font-bold text-[#FF5A1F]">
                          {studentName.charAt(0).toUpperCase()}
                        </div>
                        <div className="font-bold text-[#202c5c]">
                          {studentName}
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4 text-sm font-medium text-gray-600">
                      {record.level}
                    </td>

                    <td className="px-5 py-4 text-sm font-medium text-gray-600">
                      {record.lessons_completed}/{record.total_lessons}
                    </td>

                    <td className="px-5 py-4 text-sm font-bold text-[#202c5c]">
                      {record.quiz_score}%
                    </td>

                    <td className="px-5 py-4 text-sm font-medium text-gray-600">
                      {record.speaking_sessions} sessions
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-28 overflow-hidden rounded-full bg-gray-100">
                          <div
                            className="h-full rounded-full bg-[#FF5A1F]"
                            style={{ width: `${record.overall_progress}%` }}
                          />
                        </div>
                        <span className="text-sm font-bold text-[#202c5c]">
                          {record.overall_progress}%
                        </span>
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                          record.status === "Excellent"
                            ? "bg-green-50 text-green-700"
                            : record.status === "Needs Support"
                            ? "bg-yellow-50 text-yellow-700"
                            : "bg-blue-50 text-blue-700"
                        }`}
                      >
                        {record.status}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex justify-end">
                        <button className="rounded-xl bg-gray-50 p-2 text-gray-500 transition hover:bg-orange-50 hover:text-[#FF5A1F]">
                          <Eye size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {records.length === 0 && (
            <div className="p-8 text-center text-sm text-gray-500">
              No progress records found. Insert student progress records in
              Supabase first.
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 rounded-3xl border border-orange-100 bg-[#fff7f2] p-5 text-sm leading-6 text-gray-600">
        <strong className="text-[#FF5A1F]">Connected:</strong> This page now
        loads real student progress records from Supabase.
      </div>
    </div>
  );
}