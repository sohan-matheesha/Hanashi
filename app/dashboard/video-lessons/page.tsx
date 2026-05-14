import Link from "next/link";
import {
  BookOpen,
  Clock,
  Lock,
  PlayCircle,
  Sparkles,
  Star,
  Video,
} from "lucide-react";

const videos = [
  {
    title: "Hiragana Basics for Beginners",
    category: "HIRAGANA",
    level: "Beginner",
    duration: "20 min",
    description:
      "Learn the basic Hiragana characters step by step. This video helps beginner Japanese learners understand Hiragana sounds, writing style, and simple examples.",
  },
  {
    title: "Katakana Introduction for Beginners",
    category: "KATAKANA",
    level: "Beginner",
    duration: "20 min",
    description:
      "Learn the basic Katakana characters and how they are used in Japanese. This video explains Katakana sounds, writing style, and common foreign words.",
  },
  {
    title: "Basic Japanese Vocabulary",
    category: "VOCABULARY",
    level: "N5",
    duration: "Pending",
    description:
      "Learn simple Japanese vocabulary used in daily life, greetings, food, school, travel, and basic conversations. This video will help students build confidence.",
  },
];

export default function VideoLessonsPage() {
  return (
    <div className="min-h-screen bg-[#fff7fb] px-4 py-8 md:px-10">
      <section className="rounded-3xl border border-pink-100 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold tracking-[0.35em] text-[#c3829e]">
              WATCH & LEARN
            </p>

            <h1 className="mt-3 text-4xl font-extrabold text-[#202c5c]">
              Video Lessons
            </h1>

            <p className="mt-4 max-w-3xl text-gray-600">
              Learn Japanese through beginner-friendly video lessons. These
              premium lessons are available after upgrading your Hanashi account.
            </p>
          </div>

          <div className="rounded-3xl bg-[#faf7ff] px-6 py-5">
            <div className="flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-[#c3829e]" />
              <div>
                <p className="font-bold text-[#202c5c]">Premium Access</p>
                <p className="text-sm text-gray-500">
                  Hiragana • Katakana • Vocabulary
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-3">
        <div className="rounded-3xl border border-pink-100 bg-white p-6 shadow-sm">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100">
            <Video className="h-7 w-7 text-[#c3829e]" />
          </div>
          <p className="text-gray-500">Premium Video Lessons</p>
          <h2 className="mt-2 text-3xl font-extrabold text-[#202c5c]">3</h2>
        </div>

        <div className="rounded-3xl border border-pink-100 bg-white p-6 shadow-sm">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
            <BookOpen className="h-7 w-7 text-[#202c5c]" />
          </div>
          <p className="text-gray-500">Learning Level</p>
          <h2 className="mt-2 text-3xl font-extrabold text-[#202c5c]">N5</h2>
        </div>

        <div className="rounded-3xl border border-pink-100 bg-white p-6 shadow-sm">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100">
            <Star className="h-7 w-7 text-orange-500" />
          </div>
          <p className="text-gray-500">Premium Price</p>
          <h2 className="mt-2 text-3xl font-extrabold text-[#202c5c]">
            Rs.5000
          </h2>
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-3">
        {videos.map((video) => (
          <div
            key={video.title}
            className="overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="relative flex h-56 items-center justify-center bg-gradient-to-br from-[#202c5c] via-[#7b466b] to-[#ff5f8f]">
              <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-[#202c5c]">
                {video.level}
              </div>

              <div className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-[#c3829e]">
                Premium
              </div>

              <Lock className="h-16 w-16 text-white" />

              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1 text-sm font-semibold text-white">
                <Clock className="h-4 w-4" />
                {video.duration}
              </div>
            </div>

            <div className="p-6">
              <p className="text-sm font-bold tracking-[0.35em] text-[#c3829e]">
                {video.category}
              </p>

              <h3 className="mt-3 text-2xl font-extrabold text-[#202c5c]">
                {video.title}
              </h3>

              <p className="mt-4 min-h-[96px] text-gray-600">
                {video.description}
              </p>

              <div className="mt-6 rounded-2xl bg-[#fff7fb] p-4">
                <div className="flex items-center gap-3 text-sm font-semibold text-[#32253a]">
                  <Lock className="h-5 w-5 text-[#c3829e]" />
                  This lesson is locked. Upgrade to unlock this premium video.
                </div>
              </div>

              <Link
                href="/dashboard/upgrade"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#c3829e] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#ad6f8b]"
              >
                <PlayCircle className="h-5 w-5" />
                Buy Premium - Rs.5000
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}