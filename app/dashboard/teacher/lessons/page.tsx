import Link from "next/link";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  ArrowLeft,
  BookOpen,
  FileText,
  PlusCircle,
  Video,
  Trash2,
  Eye,
  EyeOff,
} from "lucide-react";
import { createClient } from "@/utils/supabase/server";

async function addLesson(formData: FormData) {
  "use server";

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const title = String(formData.get("title") || "").trim();
  const category = String(formData.get("category") || "").trim();
  const description = String(formData.get("description") || "").trim();
  const videoUrl = String(formData.get("video_url") || "").trim();

  if (!title || !category) {
    return;
  }

  await supabase.from("teacher_lessons").insert({
    teacher_id: user.id,
    title,
    category,
    description,
    video_url: videoUrl,
    is_published: false,
  });

  revalidatePath("/dashboard/teacher/lessons");
}

async function deleteLesson(formData: FormData) {
  "use server";

  const supabase = await createClient();

  const id = String(formData.get("id") || "");

  if (!id) {
    return;
  }

  await supabase.from("teacher_lessons").delete().eq("id", id);

  revalidatePath("/dashboard/teacher/lessons");
}

async function togglePublish(formData: FormData) {
  "use server";

  const supabase = await createClient();

  const id = String(formData.get("id") || "");
  const currentStatus = String(formData.get("is_published")) === "true";

  if (!id) {
    return;
  }

  await supabase
    .from("teacher_lessons")
    .update({ is_published: !currentStatus })
    .eq("id", id);

  revalidatePath("/dashboard/teacher/lessons");
}

const lessonTools = [
  {
    title: "Create Lesson",
    description:
      "Prepare beginner Japanese lessons for Hiragana, Katakana, vocabulary, and grammar.",
    icon: PlusCircle,
  },
  {
    title: "Lesson Materials",
    description:
      "Organise notes, examples, explanations, and practice tasks for students.",
    icon: FileText,
  },
  {
    title: "Video Resources",
    description:
      "Connect video-based learning materials to support student understanding.",
    icon: Video,
  },
];

export default async function TeacherLessonsPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: lessons, error } = await supabase
    .from("teacher_lessons")
    .select("*")
    .eq("teacher_id", user.id)
    .order("created_at", { ascending: false });

  const teacherLessons = lessons ?? [];

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
          <BookOpen className="h-7 w-7" />
        </div>

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#a54a5c]">
          Teacher Panel
        </p>

        <h1 className="text-3xl font-extrabold text-[#202c5c]">
          Manage Lessons
        </h1>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-500">
          Teachers can create, organise, publish, and remove Japanese learning
          materials for beginner students.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {lessonTools.map((tool) => {
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
            Add New Lesson
          </h2>

          <form action={addLesson} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-bold text-[#202c5c]">
                Lesson Title
              </label>
              <input
                name="title"
                required
                placeholder="Example: Hiragana Basics"
                className="w-full rounded-2xl border border-pink-100 px-4 py-3 text-sm outline-none focus:border-[#a54a5c]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#202c5c]">
                Category
              </label>
              <select
                name="category"
                required
                className="w-full rounded-2xl border border-pink-100 px-4 py-3 text-sm outline-none focus:border-[#a54a5c]"
              >
                <option value="">Select category</option>
                <option value="Hiragana">Hiragana</option>
                <option value="Katakana">Katakana</option>
                <option value="Vocabulary">Vocabulary</option>
                <option value="Grammar">Grammar</option>
                <option value="Culture">Culture</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#202c5c]">
                Description / Notes
              </label>
              <textarea
                name="description"
                rows={5}
                placeholder="Write lesson notes, examples, or practice instructions..."
                className="w-full rounded-2xl border border-pink-100 px-4 py-3 text-sm outline-none focus:border-[#a54a5c]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#202c5c]">
                Video URL
              </label>
              <input
                name="video_url"
                placeholder="YouTube / resource link"
                className="w-full rounded-2xl border border-pink-100 px-4 py-3 text-sm outline-none focus:border-[#a54a5c]"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-[#a54a5c] px-5 py-3 text-sm font-extrabold text-white shadow-sm transition hover:bg-[#8f3d4e]"
            >
              Add Lesson
            </button>
          </form>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl font-extrabold text-[#202c5c]">
                My Lessons
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Manage your created lesson materials.
              </p>
            </div>

            <span className="rounded-full bg-pink-50 px-4 py-2 text-sm font-bold text-[#a54a5c]">
              {teacherLessons.length} Lessons
            </span>
          </div>

          {error && (
            <div className="mb-4 rounded-2xl bg-red-50 p-4 text-sm font-semibold text-red-600">
              Failed to load lessons. Check Supabase table or policies.
            </div>
          )}

          {teacherLessons.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-pink-200 p-8 text-center">
              <h3 className="text-lg font-extrabold text-[#202c5c]">
                No lessons yet
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Add your first Japanese lesson using the form.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {teacherLessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className="rounded-3xl border border-pink-100 p-5"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-bold text-[#a54a5c]">
                          {lesson.category}
                        </span>

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-bold ${
                            lesson.is_published
                              ? "bg-green-50 text-green-700"
                              : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {lesson.is_published ? "Published" : "Draft"}
                        </span>
                      </div>

                      <h3 className="text-xl font-extrabold text-[#202c5c]">
                        {lesson.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-500">
                        {lesson.description || "No description added."}
                      </p>

                      {lesson.video_url && (
                        <a
                          href={lesson.video_url}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-3 inline-flex text-sm font-bold text-[#a54a5c] hover:underline"
                        >
                          Open video resource
                        </a>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <form action={togglePublish}>
                        <input type="hidden" name="id" value={lesson.id} />
                        <input
                          type="hidden"
                          name="is_published"
                          value={String(lesson.is_published)}
                        />
                        <button
                          type="submit"
                          className="inline-flex items-center gap-2 rounded-2xl bg-pink-50 px-4 py-2 text-sm font-bold text-[#a54a5c] hover:bg-pink-100"
                        >
                          {lesson.is_published ? (
                            <>
                              <EyeOff className="h-4 w-4" />
                              Unpublish
                            </>
                          ) : (
                            <>
                              <Eye className="h-4 w-4" />
                              Publish
                            </>
                          )}
                        </button>
                      </form>

                      <form action={deleteLesson}>
                        <input type="hidden" name="id" value={lesson.id} />
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
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}