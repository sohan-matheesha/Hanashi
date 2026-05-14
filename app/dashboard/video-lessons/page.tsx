import Link from "next/link";
import { redirect } from "next/navigation";
import {
  PlayCircle,
  Clock,
  BookOpen,
  Star,
  Video,
  Sparkles,
  ExternalLink,
  Lock,
} from "lucide-react";
import { createClient } from "@/utils/supabase/server";

type VideoLesson = {
  id: string;
  title: string;
  description: string;
  category: string;
  level: string;
  duration: string;
  video_url: string | null;
  thumbnail_url: string | null;
  status?: "available" | "pending";
  created_at: string;
};

const defaultVideoLessons: VideoLesson[] = [
  {
    id: "hiragana-video",
    title: "Hiragana Basics for Beginners",
    description:
      "Learn the basic Hiragana characters step by step. This video helps beginner Japanese learners understand Hiragana sounds, writing style, and simple examples.",
    category: "Hiragana",
    level: "Beginner",
    duration: "20 min",
    video_url: "PASTE_HIRAGANA_YOUTUBE_LINK_HERE",
    thumbnail_url: null,
    status: "available",
    created_at: new Date().toISOString(),
  },
  {
    id: "katakana-video",
    title: "Katakana Introduction for Beginners",
    description:
      "Learn the basic Katakana characters and how they are used in Japanese. This video explains Katakana sounds, examples, and common foreign words used in Japan.",
    category: "Katakana",
    level: "Beginner",
    duration: "20 min",
    video_url: "PASTE_KATAKANA_YOUTUBE_LINK_HERE",
    thumbnail_url: null,
    status: "available",
    created_at: new Date().toISOString(),
  },
  {
    id: "vocabulary-video",
    title: "Basic Japanese Vocabulary",
    description:
      "This vocabulary video is coming soon. It will help students learn simple Japanese words used in daily life, greetings, food, school, travel, and basic conversations.",
    category: "Vocabulary",
    level: "N5",
    duration: "Pending",
    video_url: null,
    thumbnail_url: null,
    status: "pending",
    created_at: new Date().toISOString(),
  },
];

function getYouTubeEmbedUrl(url: string | null) {
  if (!url) return null;

  if (
    url.includes("PASTE_HIRAGANA_YOUTUBE_LINK_HERE") ||
    url.includes("PASTE_KATAKANA_YOUTUBE_LINK_HERE")
  ) {
    return null;
  }

  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtube.com")) {
      const videoId = parsedUrl.searchParams.get("v");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    }

    if (parsedUrl.hostname.includes("youtu.be")) {
      const videoId = parsedUrl.pathname.replace("/", "");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    }

    return null;
  } catch {
    return null;
  }
}

function isValidVideoUrl(url: string | null) {
  if (!url) return false;

  return (
    !url.includes("PASTE_HIRAGANA_YOUTUBE_LINK_HERE") &&
    !url.includes("PASTE_KATAKANA_YOUTUBE_LINK_HERE")
  );
}

export default async function VideoLessonsPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data, error } = await supabase
    .from("video_lessons")
    .select(
      "id, title, description, category, level, duration, video_url, thumbnail_url, created_at",
    )
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  const databaseVideos = (data ?? []) as VideoLesson[];

  const videoLessons =
    databaseVideos.length > 0
      ? [
          ...databaseVideos.map((video) => ({
            ...video,
            status: "available" as const,
          })),
          defaultVideoLessons[2],
        ]
      : defaultVideoLessons;

  return (
    <div className="min-h-screen bg-[#fafafc] px-6 py-8 md:px-10">
      <div className="mb-8 rounded-3xl bg-white p-6 shadow-sm md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c77d9b]">
              Watch & Learn
            </p>

            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-[#202c5c]">
              Video Lessons
            </h1>

            <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-500">
              Learn Japanese through beginner-friendly video lessons. Start with
              Hiragana, continue with Katakana, and practise vocabulary when the
              next video is available.
            </p>
          </div>

          <div className="rounded-3xl bg-[#fafafc] p-5">
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-[#c77d9b]" />
              <div>
                <p className="text-sm font-extrabold text-[#202c5c]">
                  Beginner Friendly
                </p>
                <p className="text-xs text-gray-500">
                  Hiragana • Katakana • Vocabulary
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-pink-100 bg-white p-5 shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f8e9ed] text-[#c77d9b]">
            <Video className="h-6 w-6" />
          </div>
          <p className="mt-4 text-sm text-gray-500">Video Lessons</p>
          <h2 className="mt-1 text-3xl font-extrabold text-[#202c5c]">
            {videoLessons.length}
          </h2>
        </div>

        <div className="rounded-3xl border border-pink-100 bg-white p-5 shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef1ff] text-[#202c5c]">
            <BookOpen className="h-6 w-6" />
          </div>
          <p className="mt-4 text-sm text-gray-500">Learning Level</p>
          <h2 className="mt-1 text-3xl font-extrabold text-[#202c5c]">N5</h2>
        </div>

        <div className="rounded-3xl border border-pink-100 bg-white p-5 shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
            <Star className="h-6 w-6" />
          </div>
          <p className="mt-4 text-sm text-gray-500">Mode</p>
          <h2 className="mt-1 text-3xl font-extrabold text-[#202c5c]">
            Self Study
          </h2>
        </div>
      </div>

      {error && (
        <div className="mb-6 rounded-3xl bg-red-50 p-5 text-sm font-bold text-red-600">
          Failed to load Supabase videos. Showing default video lesson cards.
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {videoLessons.map((lesson) => {
          const embedUrl = getYouTubeEmbedUrl(lesson.video_url);
          const hasVideo = isValidVideoUrl(lesson.video_url);
          const isPending = lesson.status === "pending";

          return (
            <article
              key={lesson.id}
              className={`group overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                isPending ? "border-dashed border-orange-200" : "border-gray-100"
              }`}
            >
              <div className="relative h-56 overflow-hidden bg-[#101827]">
                {embedUrl ? (
                  <iframe
                    src={embedUrl}
                    title={lesson.title}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : lesson.thumbnail_url ? (
                  <img
                    src={lesson.thumbnail_url}
                    alt={lesson.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className={`flex h-full w-full items-center justify-center bg-linear-to-br text-white ${
                      isPending
                        ? "from-orange-400 to-pink-500"
                        : "from-[#202c5c] to-[#a54a5c]"
                    }`}
                  >
                    {isPending ? (
                      <Lock className="h-16 w-16" />
                    ) : (
                      <PlayCircle className="h-16 w-16" />
                    )}
                  </div>
                )}

                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#202c5c]">
                  {lesson.level}
                </div>

                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                  <Clock className="h-3.5 w-3.5" />
                  {lesson.duration}
                </div>

                {isPending && (
                  <div className="absolute right-4 top-4 rounded-full bg-orange-100 px-3 py-1 text-xs font-extrabold text-orange-700">
                    Coming Soon
                  </div>
                )}
              </div>

              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c77d9b]">
                  {lesson.category}
                </p>

                <h2 className="mt-3 text-xl font-extrabold text-[#202c5c]">
                  {lesson.title}
                </h2>

                <p className="mt-3 min-h-[96px] text-sm leading-6 text-gray-500">
                  {lesson.description}
                </p>

                {hasVideo ? (
                  <a
                    href={lesson.video_url || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#202c5c] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#c77d9b]"
                  >
                    Open Video
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : (
                  <button
                    disabled
                    className="mt-5 inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-full bg-gray-100 px-5 py-3 text-sm font-bold text-gray-400"
                    type="button"
                  >
                    {isPending ? "Video Pending" : "Add Video Link"}
                    <Lock className="h-4 w-4" />
                  </button>
                )}
              </div>
            </article>
          );
        })}
      </div>

      <section className="mt-8 rounded-3xl border border-dashed border-pink-200 bg-white p-6 text-center">
        <h3 className="text-xl font-extrabold text-[#202c5c]">
          Learning Order
        </h3>

        <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-gray-500">
          Start with Hiragana, continue with Katakana, and then practise
          vocabulary after the next video lesson is published.
        </p>

        <Link
          href="/dashboard"
          className="mt-5 inline-flex rounded-full bg-[#202c5c] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#c77d9b]"
        >
          Back to Dashboard
        </Link>
      </section>
    </div>
  );
}