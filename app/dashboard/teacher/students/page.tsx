import Link from "next/link";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  ArrowLeft,
  MessageCircle,
  Search,
  Send,
  Trash2,
  UserRound,
  Users,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { createClient } from "@/utils/supabase/server";

type StudentProfile = {
  id: string;
  full_name: string | null;
  role: string | null;
  created_at: string | null;
};

type SupportRecord = {
  id: string;
  teacher_id: string;
  student_id: string;
  support_type: string;
  title: string;
  message: string;
  created_at: string;
};

type StudentQuestion = {
  id: string;
  student_id: string;
  issue_type: string;
  subject: string;
  message: string;
  status: string | null;
  teacher_reply: string | null;
  created_at: string;
};

async function addStudentSupport(formData: FormData) {
  "use server";

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const studentId = String(formData.get("student_id") || "").trim();
  const supportType = String(formData.get("support_type") || "").trim();
  const title = String(formData.get("title") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!studentId || !supportType || !title || !message) {
    return;
  }

  await supabase.from("teacher_student_support").insert({
    teacher_id: user.id,
    student_id: studentId,
    support_type: supportType,
    title,
    message,
  });

  revalidatePath("/dashboard/teacher/students");
}

async function deleteStudentSupport(formData: FormData) {
  "use server";

  const supabase = await createClient();

  const id = String(formData.get("id") || "").trim();

  if (!id) {
    return;
  }

  await supabase.from("teacher_student_support").delete().eq("id", id);

  revalidatePath("/dashboard/teacher/students");
}

async function replyToStudentQuestion(formData: FormData) {
  "use server";

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const requestId = String(formData.get("request_id") || "").trim();
  const teacherReply = String(formData.get("teacher_reply") || "").trim();

  if (!requestId || !teacherReply) {
    return;
  }

  await supabase
    .from("student_teacher_requests")
    .update({
      teacher_reply: teacherReply,
      status: "resolved",
    })
    .eq("id", requestId);

  revalidatePath("/dashboard/teacher/students");
}

const supportItems = [
  {
    title: "Student Questions",
    description:
      "Teachers can review student questions and provide learning guidance.",
    href: "#student-questions",
  },
  {
    title: "Practice Feedback",
    description:
      "Teachers can support learners by giving feedback for lessons and practice tasks.",
    href: null,
  },
  {
    title: "Learning Support",
    description:
      "Teachers can help students improve grammar, vocabulary, and speaking confidence.",
    href: null,
  },
];

export default async function TeacherStudentsPage() {
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

  const { data: supportData, error: supportError } = await supabase
    .from("teacher_student_support")
    .select("*")
    .eq("teacher_id", user.id)
    .order("created_at", { ascending: false });

  const supportRecords = (supportData ?? []) as SupportRecord[];

  const { data: requestsData, error: requestsError } = await supabase
    .from("student_teacher_requests")
    .select(
      "id, student_id, issue_type, subject, message, status, teacher_reply, created_at",
    )
    .order("created_at", { ascending: false });

  const requests = (requestsData ?? []) as StudentQuestion[];

  const studentNameMap = new Map(
    students.map((student) => [
      student.id,
      student.full_name || "Unnamed Student",
    ]),
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
          <Users className="h-7 w-7" />
        </div>

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#a54a5c]">
          Teacher Panel
        </p>

        <h1 className="text-3xl font-extrabold text-[#202c5c]">
          Student Support
        </h1>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-500">
          Teachers can support students by reviewing learning needs, answering
          questions, and providing feedback for Japanese practice activities.
        </p>
      </div>

      <div className="mb-8 rounded-3xl bg-white p-5 shadow-sm">
        <div className="flex items-center gap-3 rounded-2xl bg-[#fafafc] px-4 py-3">
          <Search className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search students or support requests..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {supportItems.map((item) => {
          const cardContent = (
            <>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 text-[#a54a5c]">
                <MessageCircle className="h-6 w-6" />
              </div>

              <h2 className="text-xl font-extrabold text-[#202c5c]">
                {item.title}
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                {item.description}
              </p>
            </>
          );

          if (item.href) {
            return (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                {cardContent}
              </Link>
            );
          }

          return (
            <div key={item.title} className="rounded-3xl bg-white p-6 shadow-sm">
              {cardContent}
            </div>
          );
        })}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[420px_1fr]">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-extrabold text-[#202c5c]">
            Add Feedback / Task
          </h2>

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
                Register a student account first, then come back here.
              </p>
            </div>
          ) : (
            <form action={addStudentSupport} className="space-y-4">
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
                  Support Type
                </label>
                <select
                  name="support_type"
                  required
                  className="w-full rounded-2xl border border-pink-100 px-4 py-3 text-sm outline-none focus:border-[#a54a5c]"
                >
                  <option value="">Select type</option>
                  <option value="Practice Feedback">Practice Feedback</option>
                  <option value="Learning Task">Learning Task</option>
                  <option value="Grammar Support">Grammar Support</option>
                  <option value="Vocabulary Support">Vocabulary Support</option>
                  <option value="Speaking Support">Speaking Support</option>
                  <option value="General Guidance">General Guidance</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#202c5c]">
                  Title
                </label>
                <input
                  name="title"
                  required
                  placeholder="Example: Improve Hiragana reading"
                  className="w-full rounded-2xl border border-pink-100 px-4 py-3 text-sm outline-none focus:border-[#a54a5c]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#202c5c]">
                  Message / Task
                </label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  placeholder="Write feedback, correction, or practice task for the student..."
                  className="w-full rounded-2xl border border-pink-100 px-4 py-3 text-sm outline-none focus:border-[#a54a5c]"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#a54a5c] px-5 py-3 text-sm font-extrabold text-white shadow-sm transition hover:bg-[#8f3d4e]"
              >
                <Send className="h-4 w-4" />
                Send Support
              </button>
            </form>
          )}
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <h2 className="text-2xl font-extrabold text-[#202c5c]">
                  Student List
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Registered student accounts in Hanashi.
                </p>
              </div>

              <span className="rounded-full bg-pink-50 px-4 py-2 text-sm font-bold text-[#a54a5c]">
                {students.length} Students
              </span>
            </div>

            {students.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-pink-200 p-6 text-center">
                <p className="text-sm font-semibold text-gray-500">
                  No student profiles available.
                </p>
              </div>
            ) : (
              <div className="grid gap-4 md:grid-cols-2">
                {students.map((student) => (
                  <div
                    key={student.id}
                    className="rounded-3xl border border-pink-100 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 text-[#a54a5c]">
                        <UserRound className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="font-extrabold text-[#202c5c]">
                          {student.full_name || "Unnamed Student"}
                        </h3>
                        <p className="text-sm font-semibold text-gray-400">
                          Role: {student.role || "student"}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <h2 className="text-2xl font-extrabold text-[#202c5c]">
                  Support History
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Feedback and practice tasks sent by you.
                </p>
              </div>

              <span className="rounded-full bg-pink-50 px-4 py-2 text-sm font-bold text-[#a54a5c]">
                {supportRecords.length} Records
              </span>
            </div>

            {supportError && (
              <div className="mb-4 rounded-2xl bg-red-50 p-4 text-sm font-semibold text-red-600">
                Failed to load support records. Check Supabase table or policies.
              </div>
            )}

            {supportRecords.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-pink-200 p-6 text-center">
                <p className="text-sm font-semibold text-gray-500">
                  No support records yet.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {supportRecords.map((record) => (
                  <div
                    key={record.id}
                    className="rounded-3xl border border-pink-100 p-5"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div>
                        <div className="mb-2 flex flex-wrap gap-2">
                          <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-bold text-[#a54a5c]">
                            {record.support_type}
                          </span>

                          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-500">
                            {studentNameMap.get(record.student_id) ||
                              "Unknown Student"}
                          </span>
                        </div>

                        <h3 className="text-lg font-extrabold text-[#202c5c]">
                          {record.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-gray-500">
                          {record.message}
                        </p>
                      </div>

                      <form action={deleteStudentSupport}>
                        <input type="hidden" name="id" value={record.id} />
                        <button
                          type="submit"
                          className="inline-flex items-center gap-2 rounded-2xl bg-red-50 px-4 py-2 text-sm font-bold text-red-600 hover:bg-red-100"
                        >
                          <Trash2 className="h-4 w-4" />
                          Delete
                        </button>
                      </form>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <section
        id="student-questions"
        className="mt-8 rounded-3xl border border-purple-100 bg-white/95 p-6 shadow-sm"
      >
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-[#202c5c]">
              Student Questions
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Questions sent by students will appear here. Teachers can reply
              and mark questions as resolved.
            </p>
          </div>

          <span className="w-fit rounded-full bg-pink-50 px-4 py-2 text-sm font-bold text-[#a54a5c]">
            {requests.length} Questions
          </span>
        </div>

        {requestsError && (
          <div className="mb-4 rounded-2xl bg-red-50 p-4 text-sm font-semibold text-red-600">
            Failed to load student questions. Check the
            student_teacher_requests table or Supabase policies.
          </div>
        )}

        {requests.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-pink-200 bg-pink-50/40 p-6 text-center">
            <MessageCircle className="mx-auto mb-3 h-8 w-8 text-[#a54a5c]" />
            <p className="text-sm font-semibold text-gray-500">
              No student questions yet.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {requests.map((request) => (
              <div
                key={request.id}
                className="rounded-3xl border border-pink-100 bg-white p-5"
              >
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-bold text-[#a54a5c]">
                    {request.issue_type}
                  </span>

                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-500">
                    {studentNameMap.get(request.student_id) || "Unknown Student"}
                  </span>

                  <span className="inline-flex items-center gap-1 rounded-full bg-purple-50 px-3 py-1 text-xs font-bold text-[#6b5b95]">
                    {request.status === "resolved" ? (
                      <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                    ) : (
                      <Clock className="h-3 w-3 text-orange-500" />
                    )}
                    {request.status || "pending"}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-[#202c5c]">
                  {request.subject}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {request.message}
                </p>

                {request.teacher_reply ? (
                  <div className="mt-4 rounded-2xl bg-emerald-50 p-4">
                    <p className="mb-1 text-xs font-extrabold uppercase tracking-[0.18em] text-emerald-600">
                      Teacher Reply
                    </p>
                    <p className="text-sm leading-6 text-[#4b3c72]">
                      {request.teacher_reply}
                    </p>
                  </div>
                ) : (
                  <form action={replyToStudentQuestion} className="mt-5 space-y-3">
                    <input type="hidden" name="request_id" value={request.id} />

                    <textarea
                      name="teacher_reply"
                      rows={4}
                      required
                      placeholder="Write your reply to the student..."
                      className="w-full resize-none rounded-2xl border border-pink-100 px-4 py-3 text-sm leading-6 outline-none focus:border-[#a54a5c]"
                    />

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#a54a5c] px-5 py-3 text-sm font-extrabold text-white shadow-sm transition hover:bg-[#8f3d4e]"
                    >
                      <Send className="h-4 w-4" />
                      Send Reply
                    </button>
                  </form>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}