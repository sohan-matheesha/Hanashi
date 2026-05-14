import Link from "next/link";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  MessageCircle,
  PlusCircle,
  Video,
  Trash2,
  ExternalLink,
  Clock,
} from "lucide-react";
import { createClient } from "@/utils/supabase/server";

async function addLiveSession(formData: FormData) {
  "use server";

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const title = String(formData.get("title") || "").trim();
  const sessionType = String(formData.get("session_type") || "").trim();
  const sessionDate = String(formData.get("session_date") || "").trim();
  const sessionTime = String(formData.get("session_time") || "").trim();
  const meetingLink = String(formData.get("meeting_link") || "").trim();
  const description = String(formData.get("description") || "").trim();

  if (!title || !sessionType || !sessionDate || !sessionTime) {
    return;
  }

  await supabase.from("teacher_live_sessions").insert({
    teacher_id: user.id,
    title,
    session_type: sessionType,
    session_date: sessionDate,
    session_time: sessionTime,
    meeting_link: meetingLink,
    description,
  });

  revalidatePath("/dashboard/teacher/live-sessions");
}

async function deleteLiveSession(formData: FormData) {
  "use server";

  const supabase = await createClient();

  const id = String(formData.get("id") || "");

  if (!id) {
    return;
  }

  await supabase.from("teacher_live_sessions").delete().eq("id", id);

  revalidatePath("/dashboard/teacher/live-sessions");
}

const sessionTools = [
  {
    title: "Schedule Session",
    description:
      "Plan live Japanese learning sessions for speaking practice and lesson discussions.",
    icon: PlusCircle,
  },
  {
    title: "Video Practice",
    description:
      "Prepare video-based sessions for conversation practice and pronunciation support.",
    icon: Video,
  },
  {
    title: "Discussion Support",
    description:
      "Use live sessions to answer learner questions and guide Japanese practice.",
    icon: MessageCircle,
  },
];

export default async function TeacherLiveSessionsPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: sessions, error } = await supabase
    .from("teacher_live_sessions")
    .select("*")
    .eq("teacher_id", user.id)
    .order("session_date", { ascending: true })
    .order("session_time", { ascending: true });

  const liveSessions = sessions ?? [];

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
          <CalendarDays className="h-7 w-7" />
        </div>

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#a54a5c]">
          Teacher Panel
        </p>

        <h1 className="text-3xl font-extrabold text-[#202c5c]">
          Live Sessions
        </h1>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-500">
          Teachers can create scheduled live sessions for Japanese lessons,
          conversation practice, pronunciation support, and student discussions.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {sessionTools.map((tool) => {
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

      <div className="mt-8 grid gap-6 lg:grid-cols-[420px_1fr]">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-extrabold text-[#202c5c]">
            Create Live Session
          </h2>

          <form action={addLiveSession} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-bold text-[#202c5c]">
                Session Title
              </label>
              <input
                name="title"
                required
                placeholder="Example: Hiragana Speaking Practice"
                className="w-full rounded-2xl border border-pink-100 px-4 py-3 text-sm outline-none focus:border-[#a54a5c]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#202c5c]">
                Session Type
              </label>
              <select
                name="session_type"
                required
                className="w-full rounded-2xl border border-pink-100 px-4 py-3 text-sm outline-none focus:border-[#a54a5c]"
              >
                <option value="">Select type</option>
                <option value="Video Class">Video Class</option>
                <option value="Conversation Practice">
                  Conversation Practice
                </option>
                <option value="Pronunciation Support">
                  Pronunciation Support
                </option>
                <option value="Question Discussion">Question Discussion</option>
              </select>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold text-[#202c5c]">
                  Date
                </label>
                <input
                  name="session_date"
                  type="date"
                  required
                  className="w-full rounded-2xl border border-pink-100 px-4 py-3 text-sm outline-none focus:border-[#a54a5c]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#202c5c]">
                  Time
                </label>
                <input
                  name="session_time"
                  type="time"
                  required
                  className="w-full rounded-2xl border border-pink-100 px-4 py-3 text-sm outline-none focus:border-[#a54a5c]"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#202c5c]">
                Meeting Link
              </label>
              <input
                name="meeting_link"
                placeholder="Paste Jitsi / Google Meet / Zoom link"
                className="w-full rounded-2xl border border-pink-100 px-4 py-3 text-sm outline-none focus:border-[#a54a5c]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#202c5c]">
                Description
              </label>
              <textarea
                name="description"
                rows={5}
                placeholder="Write what students will practise in this session..."
                className="w-full rounded-2xl border border-pink-100 px-4 py-3 text-sm outline-none focus:border-[#a54a5c]"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-[#a54a5c] px-5 py-3 text-sm font-extrabold text-white shadow-sm transition hover:bg-[#8f3d4e]"
            >
              Create Session
            </button>
          </form>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl font-extrabold text-[#202c5c]">
                Scheduled Sessions
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Manage your teacher-led live learning sessions.
              </p>
            </div>

            <span className="rounded-full bg-pink-50 px-4 py-2 text-sm font-bold text-[#a54a5c]">
              {liveSessions.length} Sessions
            </span>
          </div>

          {error && (
            <div className="mb-4 rounded-2xl bg-red-50 p-4 text-sm font-semibold text-red-600">
              Failed to load sessions. Check Supabase table or policies.
            </div>
          )}

          {liveSessions.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-pink-200 p-8 text-center">
              <h3 className="text-lg font-extrabold text-[#202c5c]">
                No live sessions yet
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Create your first live Japanese session using the form.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {liveSessions.map((session) => (
                <div
                  key={session.id}
                  className="rounded-3xl border border-pink-100 p-5"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-bold text-[#a54a5c]">
                          {session.session_type}
                        </span>

                        <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-600">
                          <Clock className="h-3 w-3" />
                          {session.session_date} at {session.session_time}
                        </span>
                      </div>

                      <h3 className="text-xl font-extrabold text-[#202c5c]">
                        {session.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-500">
                        {session.description || "No description added."}
                      </p>

                      {session.meeting_link && (
                        <a
                          href={session.meeting_link}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#a54a5c] hover:underline"
                        >
                          Join / Open Meeting
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>

                    <form action={deleteLiveSession}>
                      <input type="hidden" name="id" value={session.id} />
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
  );
}