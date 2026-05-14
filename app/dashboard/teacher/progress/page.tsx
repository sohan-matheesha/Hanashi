import Link from "next/link";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  ArrowLeft,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  LineChart,
  Pencil,
  Trash2,
  Trophy,
  UserRound,
} from "lucide-react";
import { createClient } from "@/utils/supabase/server";
import build from "next/dist/build";

type StudentProfile = {
  id: string;
  full_name: string | null;
  role: string | null;
  created_at: string | null;
};

type ProgressRecord = {
  id: string;
  teacher_id: string;
  student_id: string;
  quiz_score: number | null;
  lessons_completed: number | null;
  practice_minutes: number | null;
  current_level: string | null;
  progress_note: string | null;
  created_at: string;
  updated_at: string | null;
};

async function addProgressRecord(formData: FormData) {
  "use server";

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const studentId = String(formData.get("student_id") || "").trim();
  const quizScore = Number(formData.get("quiz_score") || 0);
  const lessonsCompleted = Number(formData.get("lessons_completed") || 0);
  const practiceMinutes = Number(formData.get("practice_minutes") || 0);
  const currentLevel = String(formData.get("current_level") || "Beginner").trim();
  const progressNote = String(formData.get("progress_note") || "").trim();

  if (!studentId) {
    return;
  }

  await supabase.from("teacher_student_progress").insert({
    teacher_id: user.id,
    student_id: studentId,
    quiz_score: quizScore,
    lessons_completed: lessonsCompleted,
    practice_minutes: practiceMinutes,
    current_level: currentLevel,
    progress_note: progressNote,
    updated_at: new Date().toISOString(),
  });

  revalidatePath("/dashboard/teacher/progress");
}

async function deleteProgressRecord(formData: FormData) {
  "use server";

  const supabase = await createClient();

  const id = String(formData.get("id") || "").trim();

  if (!id) {
    return;
  }

  await supabase.from("teacher_student_progress").delete().eq("id", id);

  revalidatePath("/dashboard/teacher/progress");
}

const progressTools = [
  {
    title: "Quiz Performance",
    description:
      "Review student quiz attempts and identify areas where learners need support.",
    icon: CheckCircle2,
  },
  {
    title: "Learning Progress",
    description:
      "Track how students move through lessons, vocabulary, grammar, and practice tasks.",
    icon: LineChart,
  },
  {
    title: "Achievement Review",
    description:
      "Review badges, milestones, and practice achievements as the platform improves.",
    icon: Trophy,
  },
];

export default async function TeacherProgressPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profiles, error: studentsError } = await supabase
    .from("profiles")
    .select("id, full_name, role, created_at")
    .eq("role", "student")
    .order("created_at", { ascending: false });

  const students = (profiles ?? []) as StudentProfile[];

  const { data: progressData, error: progressError } = await supabase
    .from("teacher_student_progress")
    .select("*")
    .eq("teacher_id", user.id)
    .order("created_at", { ascending: false });

  const progressRecords = (progressData ?? []) as ProgressRecord[];

  const studentNameMap = new Map(
    students.map((student) => [
      student.id,
      student.full_name || "Unnamed Student",
    ]),
  );

  const totalStudents = students.length;
  const totalRecords = progressRecords.length;

  const averageQuizScore =
    progressRecords.length > 0
      ? Math.round(
          progressRecords.reduce(
            (sum, record) => sum + Number(record.quiz_score || 0),
            0,
          ) / progressRecords.length,
        )
      : 0;

  const totalCompletedLessons = progressRecords.reduce(
    (sum, record) => sum + Number(record.lessons_completed || 0),
    0,
  );

  const totalPracticeMinutes = progressRecords.reduce(
    (sum, record) => sum + Number(record.practice_minutes || 0),
    0,
  );

  return (
    <div className="min-h-screen bg-[#fafafc] px-4 py-8 md:px-8">
      <Link
        href="/dashboard/teacher"
        className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-[#a54a5c]"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Teacher Panel
      </Link>

      <div className="mb-8 rounded-3xl bg-white p-8 shadow-sm">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-[#a54a5c]">
          <BarChart3 className="h-7 w-7" />
        </div>

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#a54a5c]">
          Teacher Panel
        </p>

        <h1 className="text-3xl font-extrabold text-[#202c5c]">
          Progress Review
        </h1>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-500">
          Teachers can review student learning progress, quiz results, lesson
          completion, and speaking practice activity.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {progressTools.map((tool) => {
          const Icon = tool.icon;

          return (
            <div key={tool.title} className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 text-[#a54a5c]">
                <Icon className="h-6 w-6" />
              </div>

              <h2 className="text-xl font-extrabold text-[#202c5c]">
                {tool.title}
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                {tool.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-4">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-sm font-bold text-gray-400">Students</p>
          <h3 className="mt-2 text-3xl font-extrabold text-[#202c5c]">
            {totalStudents}
          </h3>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-sm font-bold text-gray-400">Progress Records</p>
          <h3 className="mt-2 text-3xl font-extrabold text-[#202c5c]">
            {totalRecords}
          </h3>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-sm font-bold text-gray-400">Avg Quiz Score</p>
          <h3 className="mt-2 text-3xl font-extrabold text-[#202c5c]">
            {averageQuizScore}%
          </h3>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-sm font-bold text-gray-400">Practice Time</p>
          <h3 className="mt-2 text-3xl font-extrabold text-[#202c5c]">
            {totalPracticeMinutes}m
          </h3>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[420px_1fr]">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 text-[#a54a5c]">
              <Pencil className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-[#202c5c]">
                Add Progress
              </h2>
              <p className="text-sm text-gray-500">
                Add quiz, lesson, and practice progress.
              </p>
            </div>
          </div>

          {studentsError && (
            <div className="mb-4 rounded-2xl bg-red-50 p-4 text-sm font-semibold text-red-600">
              Failed to load students. Check profiles table and role values.
            </div>
          )}

          {students.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-pink-200 p-6 text-center">
              <h3 className="text-lg font-extrabold text-[#202c5c]">
                No students found
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Register a student account first, then add progress records.
              </p>
            </div>
          ) : (
            <form action={addProgressRecord} className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-bold text-[#202c5c]">
                  Select Student
                </label>
                <select
                  name="student_id"
                  required
                  className="w-full rounded-2xl border border-pink-100 px-4 py-3 text-sm outline-none focus:border-[#a54a5c]"
                >
                  <option value="">Choose student</option>
                  {students.map((student) => (
                    <option key={student.id} value={student.id}>
                      {student.full_name || "Unnamed Student"}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#202c5c]">
                  Current Level
                </label>
                <select
                  name="current_level"
                  className="w-full rounded-2xl border border-pink-100 px-4 py-3 text-sm outline-none focus:border-[#a54a5c]"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="N5">N5</option>
                  <option value="N4">N4</option>
                  <option value="Improving">Improving</option>
                  <option value="Needs Support">Needs Support</option>
                </select>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label className="mb-2 block text-sm font-bold text-[#202c5c]">
                    Quiz %
                  </label>
                  <input
                    name="quiz_score"
                    type="number"
                    min="0"
                    max="100"
                    defaultValue="0"
                    className="w-full rounded-2xl border border-pink-100 px-4 py-3 text-sm outline-none focus:border-[#a54a5c]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#202c5c]">
                    Lessons
                  </label>
                  <input
                    name="lessons_completed"
                    type="number"
                    min="0"
                    defaultValue="0"
                    className="w-full rounded-2xl border border-pink-100 px-4 py-3 text-sm outline-none focus:border-[#a54a5c]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#202c5c]">
                    Minutes
                  </label>
                  <input
                    name="practice_minutes"
                    type="number"
                    min="0"
                    defaultValue="0"
                    className="w-full rounded-2xl border border-pink-100 px-4 py-3 text-sm outline-none focus:border-[#a54a5c]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#202c5c]">
                  Teacher Note
                </label>
                <textarea
                  name="progress_note"
                  rows={5}
                  placeholder="Example: Student improved Hiragana reading but needs more speaking practice."
                  className="w-full rounded-2xl border border-pink-100 px-4 py-3 text-sm outline-none focus:border-[#a54a5c]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#a54a5c] px-5 py-3 text-sm font-extrabold text-white shadow-sm transition hover:bg-[#8f3d4e]"
              >
                <ClipboardList className="h-4 w-4" />
                Save Progress
              </button>
            </form>
          )}
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl font-extrabold text-[#202c5c]">
                Student Progress Table
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Review progress records created by teacher.
              </p>
            </div>

            <span className="rounded-full bg-pink-50 px-4 py-2 text-sm font-bold text-[#a54a5c]">
              {totalCompletedLessons} Lessons
            </span>
          </div>

          {progressError && (
            <div className="mb-4 rounded-2xl bg-red-50 p-4 text-sm font-semibold text-red-600">
              Failed to load progress records. Check Supabase table or policies.
            </div>
          )}

          {progressRecords.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-pink-200 p-8 text-center">
              <h3 className="text-lg font-extrabold text-[#202c5c]">
                No progress records yet
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Add a student progress record using the form.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-separate border-spacing-y-3">
                <thead>
                  <tr className="text-left text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                    <th className="px-4 py-2">Student</th>
                    <th className="px-4 py-2">Level</th>
                    <th className="px-4 py-2">Quiz</th>
                    <th className="px-4 py-2">Lessons</th>
                    <th className="px-4 py-2">Practice</th>
                    <th className="px-4 py-2">Note</th>
                    <th className="px-4 py-2">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {progressRecords.map((record) => (
                    <tr key={record.id} className="bg-[#fafafc]">
                      <td className="rounded-l-2xl px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-[#a54a5c]">
                            <UserRound className="h-4 w-4" />
                          </div>

                          <div>
                            <p className="font-extrabold text-[#202c5c]">
                              {studentNameMap.get(record.student_id) ||
                                "Unknown Student"}
                            </p>
                            <p className="text-xs font-semibold text-gray-400">
                              Student progress
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-4">
                        <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#a54a5c]">
                          {record.current_level || "Beginner"}
                        </span>
                      </td>

                      <td className="px-4 py-4">
                        <span className="font-extrabold text-[#202c5c]">
                          {record.quiz_score ?? 0}%
                        </span>
                      </td>

                      <td className="px-4 py-4">
                        <span className="font-extrabold text-[#202c5c]">
                          {record.lessons_completed ?? 0}
                        </span>
                      </td>

                      <td className="px-4 py-4">
                        <span className="font-extrabold text-[#202c5c]">
                          {record.practice_minutes ?? 0}m
                        </span>
                      </td>

                      <td className="px-4 py-4">
                        <p className="max-w-[220px] text-sm leading-6 text-gray-500">
                          {record.progress_note || "No note added."}
                        </p>
                      </td>

                      <td className="rounded-r-2xl px-4 py-4">
                        <form action={deleteProgressRecord}>
                          <input type="hidden" name="id" value={record.id} />
                          <button
                            type="submit"
                            className="inline-flex items-center gap-2 rounded-2xl bg-red-50 px-4 py-2 text-sm font-bold text-red-600 hover:bg-red-100"
                          >
                            <Trash2 className="h-4 w-4" />
                            Delete
                          </button>
                        </form>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}