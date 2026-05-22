import Link from "next/link";
import {
  BookOpen,
  FileText,
  Languages,
  GraduationCap,
  RefreshCw,
  Sparkles,
  ChevronRight,
  PenLine,
} from "lucide-react";

const lessonItems = [
  {
    title: "Hiragana",
    japanese: "ひらがな",
    description: "Learn the basic Japanese Hiragana writing system with simple character practice.",
    href: "/dashboard/lessons/hiragana",
    icon: BookOpen,
    tag: "Start here",
  },
  {
    title: "Katakana",
    japanese: "カタカナ",
    description: "Practice Katakana characters used for foreign words, names, and loanwords.",
    href: "/dashboard/lessons/katakana",
    icon: FileText,
    tag: "Beginner",
  },
  {
    title: "Vocabulary",
    japanese: "ことば",
    description: "Build useful beginner Japanese vocabulary for daily communication.",
    href: "/dashboard/lessons/vocabulary",
    icon: PenLine,
    tag: "N5",
  },
  {
    title: "Grammar",
    japanese: "ぶんぽう",
    description: "Study simple Japanese grammar patterns with beginner-friendly examples.",
    href: "/dashboard/lessons/grammar",
    icon: Languages,
    tag: "Basic",
  },
  {
    title: "Kanji",
    japanese: "かんじ",
    description: "Learn beginner Kanji characters with meanings and examples.",
    href: "/dashboard/lessons/kanji",
    icon: GraduationCap,
    tag: "Practice",
  },
];

export default function LessonsPage() {
  return (
    <div className="min-h-screen bg-[#fbf8fb] px-5 py-8 text-[#202c5c] lg:px-12 xl:px-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-6 text-xs font-bold uppercase tracking-[0.45em] text-slate-400">
          Dashboard <span className="mx-2">/</span>
          <span className="text-[#b74b6b]">Lessons</span>
        </div>

        {/* HERO CARD */}
        <section className="rounded-4xl border border-slate-100 bg-white p-8 shadow-sm md:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.7fr_1fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.45em] text-[#b74b6b]">
                Hanashi Learning Path
              </p>

              <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-[#202c5c] md:text-5xl">
                Learn Japanese step by step
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
                Start with Japanese writing systems, then continue with vocabulary,
                grammar, quizzes, cultural learning, video lessons, and conversation
                practice. This path is designed for beginner learners.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/dashboard/lessons/hiragana"
                  className="inline-flex items-center gap-2 rounded-2xl bg-[#b74b6b] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#9f3f5b]"
                >
                  Start Hiragana
                  <ChevronRight size={17} />
                </Link>

                <Link
                  href="/dashboard/quizzes"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-[#202c5c] transition hover:bg-slate-50"
                >
                  Try Quizzes
                </Link>
              </div>
            </div>

            <div className="rounded-4xl bg-[#fbf8fb] p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#202c5c] text-white">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-[#202c5c]">
                    Beginner Focus
                  </h3>
                  <p className="text-sm text-slate-500">
                    Suitable for new Japanese learners
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  "Start with Hiragana characters",
                  "Continue with Katakana characters",
                  "Learn beginner vocabulary",
                  "Study basic grammar patterns",
                  "Practise using quizzes",
                  "Improve through conversation practice",
                ].map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-4 rounded-2xl bg-white px-4 py-4 text-sm font-semibold text-slate-600"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ffe5ef] text-sm font-extrabold text-[#b74b6b]">
                      {index + 1}
                    </span>
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* LESSON CARDS */}
        <section className="mt-10">
          <div className="mb-3">
            <h2 className="text-2xl font-extrabold text-[#202c5c]">
              Beginner Lessons
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Choose a topic and continue your Japanese learning journey.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {lessonItems.map((lesson) => {
              const Icon = lesson.icon;

              return (
                <Link
                  key={lesson.title}
                  href={lesson.href}
                  className="group rounded-[1.7rem] border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-6 flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ffe5ef] text-[#b74b6b]">
                      <Icon size={26} />
                    </div>

                    <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-bold text-slate-500">
                      {lesson.tag}
                    </span>
                  </div>

                  <p className="mb-2 text-sm font-extrabold text-[#b74b6b]">
                    {lesson.japanese}
                  </p>

                  <h3 className="text-2xl font-extrabold text-[#202c5c]">
                    {lesson.title}
                  </h3>

                  <p className="mt-4 min-h-16 text-sm leading-7 text-slate-500">
                    {lesson.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#b74b6b]">
                    Open lesson
                    <ChevronRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}