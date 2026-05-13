import Link from "next/link";
import {
  BookOpen,
  Mic,
  CheckSquare,
  User,
  PlayCircle,
  Globe,
  Award,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function DashboardPage() {
  const learningCards = [
    {
      title: "Structured Lessons",
      description:
        "Start with Hiragana, Katakana, vocabulary, grammar, and beginner Japanese learning content.",
      href: "/dashboard/lessons",
      icon: BookOpen,
      action: "Open Lessons",
    },
    {
      title: "Video Lessons",
      description:
        "Watch learning videos and use visual explanations to understand Japanese language topics.",
      href: "/dashboard/video-lessons",
      icon: PlayCircle,
      action: "Watch Videos",
    },
    {
      title: "Conversation Practice",
      description:
        "Practise Japanese communication through speaking, chat, and conversation-based activities.",
      href: "/dashboard/conversation",
      icon: Mic,
      action: "Start Practice",
    },
    {
      title: "Quizzes",
      description:
        "Test your knowledge with quizzes and review what you have learned through practice.",
      href: "/dashboard/quizzes",
      icon: CheckSquare,
      action: "Try Quiz",
    },
  ];

  const quickStats = [
    {
      label: "Learning Level",
      value: "Beginner",
      description: "Designed for new Japanese learners",
    },
    {
      label: "Main Focus",
      value: "JLPT N5",
      description: "Basic Japanese characters and grammar",
    },
    {
      label: "Practice Mode",
      value: "AI + Live",
      description: "Tutor support and conversation practice",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafafc] px-4 py-8 md:px-8">
      {/* Header */}
      <div className="mb-8 rounded-3xl bg-white p-6 shadow-sm md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#a54a5c]">
              Hanashi Dashboard
            </p>

            <h1 className="text-3xl font-extrabold tracking-tight text-[#202c5c] md:text-4xl">
              Welcome to your Japanese learning space
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-500">
              Continue learning Japanese through lessons, quizzes, cultural
              content, AI tutor support, video lessons, and conversation
              practice.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/dashboard/conversation"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#a54a5c] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#913f50]"
            >
              <Mic className="h-4 w-4" />
              Practise Speaking
            </Link>

            <Link
              href="/profile"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-[#202c5c] shadow-sm transition hover:bg-gray-50"
              title="Profile"
            >
              <User className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <section className="mb-8 grid gap-5 md:grid-cols-3">
        {quickStats.map((stat) => (
          <div key={stat.label} className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
              {stat.label}
            </p>
            <h2 className="mt-3 text-2xl font-extrabold text-[#202c5c]">
              {stat.value}
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              {stat.description}
            </p>
          </div>
        ))}
      </section>

      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_360px]">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Continue Learning */}
          <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
            <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-extrabold text-[#202c5c]">
                  Continue Learning
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Follow the beginner learning path and build your Japanese
                  skills step by step.
                </p>
              </div>

              <Link
                href="/dashboard/lessons"
                className="text-sm font-bold text-[#a54a5c] transition hover:text-[#202c5c]"
              >
                View Lessons
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-[260px_1fr]">
              <div className="flex min-h-56 items-center justify-center rounded-3xl bg-gradient-to-br from-[#202c5c] to-[#a54a5c] p-6 text-white">
                <div className="text-center">
                  <Sparkles className="mx-auto mb-4 h-12 w-12" />
                  <p className="text-sm font-bold uppercase tracking-[0.25em]">
                    Beginner Path
                  </p>
                  <h3 className="mt-3 text-2xl font-extrabold">
                    Japanese Basics
                  </h3>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <span className="mb-4 w-fit rounded-full bg-gray-100 px-4 py-1 text-xs font-extrabold uppercase tracking-[0.2em] text-gray-500">
                  Recommended Start
                </span>

                <h3 className="text-2xl font-extrabold text-[#202c5c]">
                  Start with Hiragana and Katakana
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500">
                  Learn the Japanese writing systems first, then continue with
                  vocabulary, grammar, quizzes, and conversation practice.
                </p>

                <Link
                  href="/dashboard/lessons"
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-2xl bg-[#a54a5c] px-6 py-4 text-sm font-extrabold text-white transition hover:bg-[#913f50]"
                >
                  Resume Learning
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* Learning Cards */}
          <section>
            <h2 className="mb-5 text-2xl font-extrabold text-[#202c5c]">
              Learning Activities
            </h2>

            <div className="grid gap-5 md:grid-cols-2">
              {learningCards.map((card) => {
                const Icon = card.icon;

                return (
                  <Link
                    key={card.title}
                    href={card.href}
                    className="group rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 text-[#a54a5c]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-xl font-extrabold text-[#202c5c]">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-500">
                      {card.description}
                    </p>

                    <p className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#a54a5c]">
                      {card.action}
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </p>
                  </Link>
                );
              })}
            </div>
          </section>
        </div>

        {/* Right Content */}
        <div className="space-y-8">
          {/* AI Tutor */}
          <section className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#202c5c] text-white">
              <Sparkles className="h-6 w-6" />
            </div>

            <h2 className="text-xl font-extrabold text-[#202c5c]">
              AI Tutor Support
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-500">
              Ask questions about Japanese words, grammar, translations, and
              sentence practice using the AI tutor.
            </p>

            <Link
              href="/dashboard/ai-chat"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#202c5c] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#151d3d]"
            >
              Open AI Tutor
              <ArrowRight className="h-4 w-4" />
            </Link>
          </section>

          {/* Culture Spotlight */}
          <section className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-[#202c5c]">
              <Globe className="h-6 w-6" />
            </div>

            <h2 className="text-xl font-extrabold text-[#202c5c]">
              Cultural Learning
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-500">
              Explore Japanese culture, daily life, manners, and useful context
              behind the language.
            </p>

            <Link
              href="/dashboard/cultural-hub"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-gray-200 px-5 py-4 text-sm font-bold text-[#202c5c] transition hover:bg-gray-50"
            >
              Open Cultural Hub
              <ArrowRight className="h-4 w-4" />
            </Link>
          </section>

          {/* Achievements */}
          <section className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-700">
              <Award className="h-6 w-6" />
            </div>

            <h2 className="text-xl font-extrabold text-[#202c5c]">
              Achievements
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-500">
              Track badges and learning milestones as the platform grows.
            </p>

            <Link
              href="/dashboard/achievements"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-gray-200 px-5 py-4 text-sm font-bold text-[#202c5c] transition hover:bg-gray-50"
            >
              View Achievements
              <ArrowRight className="h-4 w-4" />
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}