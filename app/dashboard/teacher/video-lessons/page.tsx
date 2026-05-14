import Link from "next/link";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  PlusCircle,
  Trash2,
  Video,
} from "lucide-react";
import { createClient } from "@/utils/supabase/server";

type VideoLesson = {
  id: string;
  created_by: string;
  title: string;
  description: string | null;
  category: string;
  level: string | null;
  duration: string | null;
  video_url: string;
  thumbnail_url: string | null;
  created_at: string;
};

async function addVideoLesson(formData: FormData) {
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
  const level = String(formData.get("level") || "Beginner").trim();
  const duration = String(formData.get("duration") || "5 min").trim();
  const videoUrl = String(formData.get("video_url") || "").trim();
  const thumbnailUrl = String(formData.get("thumbnail_url") || "").trim();
  const description = String(formData.get("description") || "").trim();

  if (!title || !category || !videoUrl) {
    return;
  }

  await supabase.from("video_lessons").insert({
    created_by: user.id,
    title,
    category,
    level,
    duration,
    video_url: videoUrl,
    thumbnail_url: thumbnailUrl || null,
    description,
    is_published: true,
  });

  revalidatePath("/dashboard/teacher/video-lessons");
  revalidatePath("/dashboard/video-lessons");
}

async function deleteVideoLesson(formData: FormData) {
  "use server";

  const supabase = await createClient();

  const id = String(formData.get("id") || "").trim();

  if (!id) {
    return;
  }

  await supabase.from("video_lessons").delete().eq("id", id);

  revalidatePath("/dashboard/teacher/video-lessons");
  revalidatePath("/dashboard/video-lessons");
}

export default async function TeacherVideoLessonsPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  const role = profile?.role;

  if (role !== "teacher" && role !== "admin") {
    redirect("/dashboard");
  }

  let query = supabase
    .from("video_lessons")
    .select(
      "id, created_by, title, description, category, level, duration, video_url, thumbnail_url, created_at",
    )
    .order("created_at", { ascending: false });

  if (role === "teacher") {
    query = query.eq("created_by", user.id);
  }

  const { data, error } = await query;

  const videos = (data ?? []) as VideoLesson[];

  return (
    <div className="min-h-screen bg-[#fafafc] px-4 py-8 md:px-8">
      <Link
        href={role === "admin" ? "/dashboard/admin" : "/dashboard/teacher"}
        className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-[#a54a5c]"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to {role === "admin" ? "Admin Panel" : "Teacher Panel"}
      </Link>

      <div className="mb-8 rounded-3xl bg-white p-8 shadow-sm">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-[#a54a5c]">
          <Video className="h-7 w-7" />
        </div>

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#a54a5c]">
          {role === "admin" ? "Admin Panel" : "Teacher Panel"}
        </p>

        <h1 className="text-3xl font-extrabold text-[#202c5c]">
          Manage Video Lessons
        </h1>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-500">
          Add YouTube or external video lesson links for students. Teachers can
          manage their own videos. Admins can manage all videos.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[420px_1fr]">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 text-[#a54a5c]">
              <PlusCircle className="h-6 w-6" />
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-[#202c5c]">
                Add Video
              </h2>
              <p className="text-sm text-gray-500">
                Paste a YouTube video link or external video URL.
              </p>
            </div>
          </div>

          <form action={addVideoLesson} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-bold text-[#202c5c]">
                Video Title
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
                <option value="Speaking">Speaking</option>
                <option value="Culture">Culture</option>
              </select>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-bold text-[#202c5c]">
                  Level
                </label>
                <select
                  name="level"
                  className="w-full rounded-2xl border border-pink-100 px-4 py-3 text-sm outline-none focus:border-[#a54a5c]"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="N5">N5</option>
                  <option value="N4">N4</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#202c5c]">
                  Duration
                </label>
                <input
                  name="duration"
                  placeholder="Example: 12 min"
                  defaultValue="5 min"
                  className="w-full rounded-2xl border border-pink-100 px-4 py-3 text-sm outline-none focus:border-[#a54a5c]"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#202c5c]">
                Video URL
              </label>
              <input
                name="video_url"
                required
                placeholder="YouTube link / video URL"
                className="w-full rounded-2xl border border-pink-100 px-4 py-3 text-sm outline-none focus:border-[#a54a5c]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#202c5c]">
                Thumbnail URL
              </label>
              <input
                name="thumbnail_url"
                placeholder="Optional image URL"
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
                placeholder="Write what students will learn from this video..."
                className="w-full rounded-2xl border border-pink-100 px-4 py-3 text-sm outline-none focus:border-[#a54a5c]"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-[#a54a5c] px-5 py-3 text-sm font-extrabold text-white shadow-sm transition hover:bg-[#8f3d4e]"
            >
              Add Video Lesson
            </button>
          </form>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl font-extrabold text-[#202c5c]">
                Video Lesson List
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Added video lessons shown to students.
              </p>
            </div>

            <span className="rounded-full bg-pink-50 px-4 py-2 text-sm font-bold text-[#a54a5c]">
              {videos.length} Videos
            </span>
          </div>

          {error && (
            <div className="mb-4 rounded-2xl bg-red-50 p-4 text-sm font-semibold text-red-600">
              Failed to load videos. Check Supabase table and policies.
            </div>
          )}

          {videos.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-pink-200 p-8 text-center">
              <h3 className="text-lg font-extrabold text-[#202c5c]">
                No videos yet
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Add your first video lesson using the form.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="rounded-3xl border border-pink-100 p-5"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="mb-2 flex flex-wrap gap-2">
                        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-bold text-[#a54a5c]">
                          {video.category}
                        </span>
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-500">
                          {video.level || "Beginner"}
                        </span>
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-500">
                          {video.duration || "5 min"}
                        </span>
                      </div>

                      <h3 className="text-xl font-extrabold text-[#202c5c]">
                        {video.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-500">
                        {video.description || "No description added."}
                      </p>

                      <a
                        href={video.video_url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#a54a5c] hover:underline"
                      >
                        Open video
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>

                    <form action={deleteVideoLesson}>
                      <input type="hidden" name="id" value={video.id} />
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