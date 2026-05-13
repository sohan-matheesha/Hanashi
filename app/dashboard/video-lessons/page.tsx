import Image from "next/image";
import {
  PlayCircle,
  Clock,
  BookOpen,
  Star,
  Video,
  Sparkles,
} from "lucide-react";

const videoLessons = [
  {
    id: 1,
    title: "Introduction to Hiragana",
    description:
      "Learn the basic idea of Hiragana and how Japanese sounds are written.",
    category: "Hiragana",
    level: "Beginner",
    duration: "12 min",
    thumbnail:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Katakana for Beginners",
    description:
      "Understand Katakana characters and when they are used in Japanese.",
    category: "Katakana",
    level: "Beginner",
    duration: "15 min",
    thumbnail:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Basic Japanese Greetings",
    description:
      "Practice simple greetings such as hello, thank you, and goodbye.",
    category: "Speaking",
    level: "N5",
    duration: "10 min",
    thumbnail:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Particles は, が, を",
    description:
      "Learn how basic Japanese particles work with simple example sentences.",
    category: "Grammar",
    level: "N5",
    duration: "18 min",
    thumbnail:
      "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?auto=format&fit=crop&w=900&q=80",
  },
];

export default function VideoLessonsPage() {
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
              Learn Japanese through structured video-based lesson content.
              These lesson cards can later be connected with teacher-published
              videos or external learning resources.
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
                  Hiragana • Katakana • Grammar
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
          <p className="mt-4 text-sm text-gray-500">Lesson Cards</p>
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

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {videoLessons.map((lesson) => (
          <article
            key={lesson.id}
            className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative h-52 overflow-hidden">
              <Image
                src={lesson.thumbnail}
                alt={lesson.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

              <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#202c5c]">
                {lesson.level}
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-[#202c5c] shadow-lg">
                  <PlayCircle className="h-9 w-9" />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                <Clock className="h-3.5 w-3.5" />
                {lesson.duration}
              </div>
            </div>

            <div className="p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c77d9b]">
                {lesson.category}
              </p>

              <h2 className="mt-3 text-xl font-extrabold text-[#202c5c]">
                {lesson.title}
              </h2>

              <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-500">
                {lesson.description}
              </p>

              <button
                disabled
                className="mt-5 w-full cursor-not-allowed rounded-full bg-gray-100 px-5 py-3 text-sm font-bold text-gray-400"
                type="button"
              >
                Video Preview
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-dashed border-pink-200 bg-white p-6 text-center">
        <h3 className="text-xl font-extrabold text-[#202c5c]">
          Video content area
        </h3>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-gray-500">
          This section is prepared for beginner Japanese video lessons. It can
          be connected with teacher-uploaded video links or Supabase lesson
          content in a future improvement.
        </p>
      </div>
    </div>
  );
}