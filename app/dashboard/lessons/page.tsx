"use client";

import PublishedLessons from "@/components/PublishedLessons";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  BookText,
  CheckCircle2,
  FileText,
  GraduationCap,
  Languages,
  Library,
  MessageCircle,
  PlayCircle,
  Sparkles,
} from "lucide-react";

export default function LessonsPage() {
  const beginnerLessons = [
    {
      title: "Hiragana",
      subtitle: "ひらがな",
      description:
        "Learn the basic Japanese Hiragana writing system with simple character practice.",
      href: "/dashboard/lessons/hiragana",
      icon: BookOpen,
      status: "Start here",
    },
    {
      title: "Katakana",
      subtitle: "カタカナ",
      description:
        "Practise Katakana characters used for foreign words, names, and loanwords.",
      href: "/dashboard/lessons/katakana",
      icon: FileText,
      status: "Beginner",
    },
    {
      title: "Vocabulary",
      subtitle: "ことば",
      description:
        "Build useful beginner Japanese vocabulary for daily communication.",
      href: "/dashboard/lessons/vocabulary",
      icon: Library,
      status: "N5",
    },
    {
      title: "Grammar",
      subtitle: "文法",
      description:
        "Understand basic sentence patterns, particles, tenses, and polite forms.",
      href: "/dashboard/lessons/grammar",
      icon: BookText,
      status: "N5",
    },
    {
      title: "Kanji",
      subtitle: "漢字",
      description:
        "Start learning simple beginner Kanji with meaning and reading support.",
      href: "/dashboard/lessons/kanji",
      icon: Languages,
      status: "Basic",
    },
    {
      title: "Quizzes",
      subtitle: "練習",
      description:
        "Check your understanding through Hiragana, Katakana, matching, and word quizzes.",
      href: "/dashboard/quizzes",
      icon: CheckCircle2,
      status: "Practice",
    },
  ];

  const learningPath = [
    "Start with Hiragana characters",
    "Continue with Katakana characters",
    "Learn beginner vocabulary",
    "Study basic grammar patterns",
    "Practise using quizzes",
    "Improve through conversation practice",
  ];

  return (
    <div className="min-h-screen bg-[#fafafc] px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-gray-400">
          <Link
            href="/dashboard"
            className="transition hover:text-[#a54a5c]"
          >
            Dashboard
          </Link>
          <span>/</span>
          <span className="text-[#a54a5c]">Lessons</span>
        </div>

        {/* Header */}
        <section className="mb-8 rounded-3xl bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#a54a5c]">
                Hanashi Learning Path
              </p>

              <h1 className="text-3xl font-extrabold tracking-tight text-[#202c5c] md:text-5xl">
                Learn Japanese step by step
              </h1>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-500 md:text-base">
                Start with Japanese writing systems, then continue with
                vocabulary, grammar, quizzes, cultural learning, video lessons,
                and conversation practice. This path is designed for beginner
                learners.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/dashboard/lessons/hiragana"
                  className="inline-flex items-center gap-2 rounded-2xl bg-[#a54a5c] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#913f50]"
                >
                  Start Hiragana
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/dashboard/quizzes"
                  className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-6 py-3 text-sm font-bold text-[#202c5c] transition hover:bg-gray-50"
                >
                  Try Quizzes
                </Link>
              </div>
            </div>

            <div className="rounded-3xl bg-[#fafafc] p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#202c5c] text-white">
                  <Sparkles className="h-6 w-6" />
                </div>

                <div>
                  <h2 className="text-xl font-extrabold text-[#202c5c]">
                    Beginner Focus
                  </h2>
                  <p className="text-sm text-gray-500">
                    Suitable for new Japanese learners
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {learningPath.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-white p-3"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pink-100 text-sm font-extrabold text-[#a54a5c]">
                      {index + 1}
                    </div>
                    <p className="text-sm font-semibold text-gray-600">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Lesson Cards */}
        <section className="mb-8">
          <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold text-[#202c5c]">
                Beginner Lessons
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Choose a topic and continue your Japanese learning journey.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {beginnerLessons.map((lesson) => {
              const Icon = lesson.icon;

              return (
                <Link
                  key={lesson.title}
                  href={lesson.href}
                  className="group rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-[#a54a5c]">
                      <Icon className="h-7 w-7" />
                    </div>

                    <span className="rounded-full bg-[#fafafc] px-3 py-1 text-xs font-bold text-gray-500">
                      {lesson.status}
                    </span>
                  </div>

                  <p className="text-sm font-bold text-[#a54a5c]">
                    {lesson.subtitle}
                  </p>

                  <h3 className="mt-2 text-2xl font-extrabold text-[#202c5c]">
                    {lesson.title}
                  </h3>

                  <p className="mt-3 min-h-18 text-sm leading-7 text-gray-500">
                    {lesson.description}
                  </p>

                  <p className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#a54a5c]">
                    Open Lesson
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Extra Practice */}
        <section className="mb-8 grid gap-5 lg:grid-cols-3">
          <Link
            href="/dashboard/video-lessons"
            className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-[#202c5c]">
              <PlayCircle className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-extrabold text-[#202c5c]">
              Video Lessons
            </h3>
            <p className="mt-3 text-sm leading-7 text-gray-500">
              Watch visual lessons to support Japanese learning topics.
            </p>
          </Link>

          <Link
            href="/dashboard/conversation"
            className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-700">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-extrabold text-[#202c5c]">
              Conversation Practice
            </h3>
            <p className="mt-3 text-sm leading-7 text-gray-500">
              Practise speaking and communication through conversation-based
              activities.
            </p>
          </Link>

          <Link
            href="/dashboard/ai-chat"
            className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-700">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-extrabold text-[#202c5c]">
              AI Tutor
            </h3>
            <p className="mt-3 text-sm leading-7 text-gray-500">
              Ask for Japanese grammar help, translation support, and sentence
              correction.
            </p>
          </Link>
        </section>

        {/* Teacher Published Lessons */}
        <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#a54a5c]">
              Teacher Content
            </p>
            <h2 className="text-2xl font-extrabold text-[#202c5c]">
              Published Lessons
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Lessons published by teachers will appear below for students.
            </p>
          </div>

          <PublishedLessons />
        </section>
      </div>
    </div>
  );
}