import Link from "next/link";
import { redirect } from "next/navigation";
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
  Bot,
  Flame,
  Flower2,
  Fan,
  Torus,
  CalendarDays,
  Clock,
  ExternalLink,
  MessageCircle,
  BarChart3,
  ClipboardList,
} from "lucide-react";
import { createClient } from "@/utils/supabase/server";

type LiveSession = {
  id: string;
  title: string;
  session_type: string;
  session_date: string;
  session_time: string;
  meeting_link: string | null;
  description: string | null;
};

type SupportRecord = {
  id: string;
  support_type: string;
  title: string;
  message: string;
  created_at: string;
};

type ProgressRecord = {
  id: string;
  quiz_score: number | null;
  lessons_completed: number | null;
  practice_minutes: number | null;
  current_level: string | null;
  progress_note: string | null;
  created_at: string;
};

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: liveSessionsData } = await supabase
    .from("teacher_live_sessions")
    .select(
      "id, title, session_type, session_date, session_time, meeting_link, description",
    )
    .order("session_date", { ascending: true })
    .order("session_time", { ascending: true })
    .limit(3);

  const { data: supportData } = await supabase
    .from("teacher_student_support")
    .select("id, support_type, title, message, created_at")
    .eq("student_id", user.id)
    .order("created_at", { ascending: false })
    .limit(3);

  const { data: progressData } = await supabase
    .from("teacher_student_progress")
    .select(
      "id, quiz_score, lessons_completed, practice_minutes, current_level, progress_note, created_at",
    )
    .eq("student_id", user.id)
    .order("created_at", { ascending: false })
    .limit(1);

  const liveSessions = (liveSessionsData ?? []) as LiveSession[];
  const supportRecords = (supportData ?? []) as SupportRecord[];
  const latestProgress = (progressData?.[0] ?? null) as ProgressRecord | null;

  const learningCards = [
    {
      title: "Structured Lessons",
      description:
        "Start with Hiragana, Katakana, vocabulary, grammar, and beginner Japanese learning content.",
      href: "/dashboard/lessons",
      icon: BookOpen,
      action: "Open Lessons",
      color: "from-purple-500 to-indigo-600",
    },
    {
      title: "Video Lessons",
      description:
        "Watch learning videos and use visual explanations to understand Japanese language topics.",
      href: "/dashboard/video-lessons",
      icon: PlayCircle,
      action: "Watch Videos",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Conversation Practice",
      description:
        "Practise Japanese communication through speaking, chat, and conversation-based activities.",
      href: "/dashboard/conversation",
      icon: Mic,
      action: "Start Practice",
      color: "from-violet-500 to-fuchsia-500",
    },
    {
      title: "Quizzes",
      description:
        "Test your knowledge with quizzes and review what you have learned through practice.",
      href: "/dashboard/quizzes",
      icon: CheckSquare,
      action: "Try Quiz",
      color: "from-indigo-500 to-purple-600",
    },
  ];

  const quickStats = [
    {
      label: "Learning Level",
      value: latestProgress?.current_level || "Beginner",
      description: "初心者レベル",
      icon: Torus,
    },
    {
      label: "Main Focus",
      value: "JLPT N5",
      description: "ひらがな・カタカナ・文法",
      icon: Fan,
    },
    {
      label: "Practice Mode",
      value: "AI + Live",
      description: "AI tutor and conversation practice",
      icon: Bot,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f8f5ff] px-4 py-6 text-[#17123f] md:px-8">
      <div
        className="absolute inset-x-0 top-0 h-[390px] overflow-hidden rounded-b-[48px] bg-[#070b2d]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(7, 11, 45, 0.45), rgba(76, 29, 149, 0.55)), url('/images/dashboard-bg.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(236,72,153,0.25),transparent_28%),radial-gradient(circle_at_75%_25%,rgba(124,58,237,0.25),transparent_30%)]" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute left-8 top-8 text-5xl opacity-80">🌸</div>
        <div className="absolute right-16 top-10 text-6xl opacity-80">🌸</div>
        <div className="absolute right-32 top-28 text-4xl opacity-60">🌙</div>
        <div className="absolute bottom-10 left-[42%] text-7xl opacity-25">
          富士山
        </div>
        <div className="absolute bottom-4 right-20 text-8xl opacity-20">⛩️</div>
      </div>

      <div className="relative z-10">
        <div className="mb-8 pt-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-pink-200">
                Hanashi
                <span className="text-pink-300">•</span>
                <span className="normal-case tracking-[0.14em] text-pink-300">
                  日本語を学びましょう
                </span>
              </p>

              <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                Welcome back to your Japanese learning space 🌸
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-purple-100 md:text-base">
                Continue learning Japanese through lessons, quizzes, cultural
                content, AI tutor support, video lessons, and conversation
                practice.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 rounded-2xl border border-white/20 bg-white/90 px-5 py-3 text-sm font-extrabold text-[#3b1c89] shadow-lg backdrop-blur">
                <Flame className="h-5 w-5 text-orange-500" />
                7 Day Streak
              </div>

              <Link
                href="/profile"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/90 text-[#3b1c89] shadow-lg backdrop-blur transition hover:scale-105"
                title="Profile"
              >
                <User className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <section className="mb-8 grid gap-5 md:grid-cols-3">
          {quickStats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="group rounded-3xl border border-white/70 bg-white/90 p-6 shadow-[0_20px_60px_rgba(70,38,120,0.16)] backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(124,58,237,0.22)]"
              >
                <div className="flex items-center gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-pink-100 to-purple-100 text-[#7c3aed]">
                    <Icon className="h-8 w-8" />
                  </div>

                  <div>
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#5b3aa4]">
                      {stat.label}
                    </p>
                    <h2 className="mt-2 text-2xl font-extrabold text-[#17123f]">
                      {stat.value}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-[#6b5b95]">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_380px]">
          <div className="space-y-8">
            <section className="rounded-3xl border border-purple-100 bg-white/92 p-6 shadow-[0_20px_60px_rgba(70,38,120,0.12)] backdrop-blur-xl md:p-8">
              <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="flex items-center gap-2 text-2xl font-extrabold text-[#17123f]">
                    <Flower2 className="h-6 w-6 text-pink-500" />
                    Continue Learning
                  </h2>
                  <p className="mt-2 text-sm text-[#6b5b95]">
                    Pick up where you left off and build your Japanese skills
                    step by step.
                  </p>
                </div>

                <Link
                  href="/dashboard/lessons"
                  className="text-sm font-extrabold text-[#7c3aed] transition hover:text-pink-500"
                >
                  View Lessons
                </Link>
              </div>

              <div className="grid gap-6 md:grid-cols-[280px_1fr]">
                <div className="relative min-h-64 overflow-hidden rounded-3xl bg-linear-to-br from-[#24105f] via-[#4c1d95] to-[#ec4899] p-6 text-white shadow-xl">
                  <div className="absolute right-4 top-4 text-4xl opacity-70">
                    🌸
                  </div>
                  <div className="absolute bottom-3 right-4 text-6xl opacity-25">
                    ⛩️
                  </div>
                  <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-pink-400/30 blur-2xl" />

                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div>
                      <p className="text-3xl font-bold leading-tight">
                        ひらがなと
                        <br />
                        カタカナ
                      </p>
                      <p className="mt-3 text-sm font-semibold text-purple-100">
                        Hiragana & Katakana
                      </p>
                    </div>

                    <span className="w-fit rounded-full bg-white/20 px-4 py-2 text-xs font-extrabold backdrop-blur">
                      Lesson 3 of 10
                    </span>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <span className="mb-4 w-fit rounded-full bg-pink-50 px-4 py-1 text-xs font-extrabold uppercase tracking-[0.18em] text-pink-500">
                    Recommended for you
                  </span>

                  <h3 className="text-2xl font-extrabold text-[#17123f]">
                    Start with Hiragana and Katakana
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6b5b95]">
                    Learn the Japanese writing systems first, then continue with
                    vocabulary, grammar, quizzes, and conversation practice.
                  </p>

                  <div className="mt-6">
                    <div className="mb-2 flex justify-between text-xs font-bold text-[#5b3aa4]">
                      <span>Your Progress</span>
                      <span>
                        {latestProgress?.lessons_completed ? "Updated" : "42%"}
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-purple-100">
                      <div className="h-2 w-[42%] rounded-full bg-linear-to-r from-[#7c3aed] to-[#ec4899]" />
                    </div>
                  </div>

                  <Link
                    href="/dashboard/lessons"
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-2xl bg-linear-to-r from-[#7c3aed] to-[#4c1d95] px-7 py-4 text-sm font-extrabold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    Resume Learning
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-5 text-2xl font-extrabold text-[#17123f]">
                Learning Activities
              </h2>

              <div className="grid gap-5 md:grid-cols-2">
                {learningCards.map((card) => {
                  const Icon = card.icon;

                  return (
                    <Link
                      key={card.title}
                      href={card.href}
                      className="group rounded-3xl border border-purple-100 bg-white/90 p-6 shadow-[0_18px_45px_rgba(70,38,120,0.10)] backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(124,58,237,0.18)]"
                    >
                      <div
                        className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${card.color} text-white shadow-lg`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>

                      <h3 className="text-xl font-extrabold text-[#17123f]">
                        {card.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-[#6b5b95]">
                        {card.description}
                      </p>

                      <p className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[#7c3aed]">
                        {card.action}
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </p>
                    </Link>
                  );
                })}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <section className="rounded-3xl border border-purple-100 bg-white/90 p-6 shadow-[0_20px_60px_rgba(70,38,120,0.12)] backdrop-blur-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-pink-600">
                <CalendarDays className="h-7 w-7" />
              </div>

              <h2 className="text-xl font-extrabold text-[#17123f]">
                Upcoming Live Sessions
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#6b5b95]">
                Teacher-created live classes and conversation sessions.
              </p>

              {liveSessions.length === 0 ? (
                <div className="mt-5 rounded-3xl border border-dashed border-purple-200 bg-purple-50/60 p-5 text-center">
                  <p className="text-sm font-semibold text-[#6b5b95]">
                    No live sessions available yet.
                  </p>
                </div>
              ) : (
                <div className="mt-5 space-y-4">
                  {liveSessions.map((session) => (
                    <div
                      key={session.id}
                      className="rounded-3xl bg-linear-to-br from-purple-50 to-pink-50 p-4"
                    >
                      <div className="mb-2 flex flex-wrap gap-2">
                        <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-pink-600">
                          {session.session_type}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-bold text-[#6b5b95]">
                          <Clock className="h-3 w-3" />
                          {session.session_date} • {session.session_time}
                        </span>
                      </div>

                      <h3 className="font-extrabold text-[#17123f]">
                        {session.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#6b5b95]">
                        {session.description ||
                          "Join this teacher-led Japanese learning session."}
                      </p>

                      {session.meeting_link ? (
                        <a
                          href={session.meeting_link}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-[#4c1d95] to-[#7c3aed] px-5 py-3 text-sm font-extrabold text-white shadow-lg transition hover:-translate-y-0.5"
                        >
                          Join Session
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      ) : (
                        <p className="mt-4 rounded-2xl bg-white p-3 text-xs font-bold text-[#6b5b95]">
                          Meeting link not added yet.
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              <Link
                href="/dashboard/conversation"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-purple-200 bg-white px-5 py-4 text-sm font-extrabold text-[#4c1d95] transition hover:bg-purple-50"
              >
                Open Conversation Practice
                <ArrowRight className="h-4 w-4" />
              </Link>
            </section>

            <section className="rounded-3xl border border-purple-100 bg-white/90 p-6 shadow-[0_18px_45px_rgba(70,38,120,0.10)] backdrop-blur-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                <MessageCircle className="h-7 w-7" />
              </div>

              <h2 className="text-xl font-extrabold text-[#17123f]">
                My Teacher Feedback
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#6b5b95]">
                Feedback and practice tasks sent by your teacher.
              </p>

              {supportRecords.length === 0 ? (
                <div className="mt-5 rounded-3xl border border-dashed border-purple-200 bg-purple-50/60 p-5 text-center">
                  <p className="text-sm font-semibold text-[#6b5b95]">
                    No teacher feedback yet.
                  </p>
                </div>
              ) : (
                <div className="mt-5 space-y-4">
                  {supportRecords.map((record) => (
                    <div
                      key={record.id}
                      className="rounded-3xl bg-blue-50/70 p-4"
                    >
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-blue-600">
                        {record.support_type}
                      </span>

                      <h3 className="mt-3 font-extrabold text-[#17123f]">
                        {record.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[#6b5b95]">
                        {record.message}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </section>
            <Link
             href="/dashboard/support"
             className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-[#4c1d95] to-[#7c3aed] px-5 py-4 text-sm font-extrabold text-white shadow-lg transition hover:-translate-y-0.5">
             Ask Teacher for Help
             <ArrowRight className="h-4 w-4" />
            </Link>

            <section className="rounded-3xl border border-purple-100 bg-white/90 p-6 shadow-[0_18px_45px_rgba(70,38,120,0.10)] backdrop-blur-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                <BarChart3 className="h-7 w-7" />
              </div>

              <h2 className="text-xl font-extrabold text-[#17123f]">
                My Progress Summary
              </h2>

              {latestProgress ? (
                <div className="mt-5 space-y-4">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-2xl bg-emerald-50 p-3 text-center">
                      <p className="text-xs font-bold text-[#6b5b95]">Quiz</p>
                      <p className="mt-1 text-lg font-extrabold text-[#17123f]">
                        {latestProgress.quiz_score ?? 0}%
                      </p>
                    </div>

                    <div className="rounded-2xl bg-purple-50 p-3 text-center">
                      <p className="text-xs font-bold text-[#6b5b95]">
                        Lessons
                      </p>
                      <p className="mt-1 text-lg font-extrabold text-[#17123f]">
                        {latestProgress.lessons_completed ?? 0}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-pink-50 p-3 text-center">
                      <p className="text-xs font-bold text-[#6b5b95]">
                        Practice
                      </p>
                      <p className="mt-1 text-lg font-extrabold text-[#17123f]">
                        {latestProgress.practice_minutes ?? 0}m
                      </p>
                    </div>
                  </div>

                  <div className="rounded-3xl bg-linear-to-br from-emerald-50 to-purple-50 p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <ClipboardList className="h-4 w-4 text-emerald-600" />
                      <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-emerald-600">
                        {latestProgress.current_level || "Beginner"}
                      </span>
                    </div>

                    <p className="text-sm leading-6 text-[#6b5b95]">
                      {latestProgress.progress_note ||
                        "Your teacher has added a progress update."}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="mt-5 rounded-3xl border border-dashed border-purple-200 bg-purple-50/60 p-5 text-center">
                  <p className="text-sm font-semibold text-[#6b5b95]">
                    No progress update yet.
                  </p>
                </div>
              )}
            </section>

            <section className="rounded-3xl border border-purple-100 bg-white/90 p-6 shadow-[0_20px_60px_rgba(70,38,120,0.12)] backdrop-blur-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-[#7c3aed] to-[#ec4899] text-white shadow-lg">
                <Sparkles className="h-7 w-7" />
              </div>

              <h2 className="text-xl font-extrabold text-[#17123f]">
                AI Tutor Support
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#6b5b95]">
                Ask questions about Japanese words, grammar, translations, and
                sentence practice using the AI tutor.
              </p>

              <div className="mt-6 rounded-3xl bg-linear-to-br from-purple-50 to-pink-50 p-5">
                <p className="text-sm font-bold text-[#4c1d95]">
                  こんにちは! What would you like to learn today?
                </p>
              </div>

              <Link
                href="/dashboard/ai-chat"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-[#4c1d95] to-[#7c3aed] px-5 py-4 text-sm font-extrabold text-white shadow-lg transition hover:-translate-y-0.5"
              >
                Open AI Tutor
                <ArrowRight className="h-4 w-4" />
              </Link>
            </section>

            <section className="rounded-3xl border border-purple-100 bg-white/90 p-6 shadow-[0_18px_45px_rgba(70,38,120,0.10)] backdrop-blur-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-[#7c3aed]">
                <Globe className="h-7 w-7" />
              </div>

              <h2 className="text-xl font-extrabold text-[#17123f]">
                Cultural Learning
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#6b5b95]">
                Explore Japanese culture, daily life, manners, and useful
                context behind the language.
              </p>

              <Link
                href="/dashboard/cultural-hub"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-purple-200 bg-white px-5 py-4 text-sm font-extrabold text-[#4c1d95] transition hover:bg-purple-50"
              >
                Open Cultural Hub
                <ArrowRight className="h-4 w-4" />
              </Link>
            </section>

            <section className="rounded-3xl border border-purple-100 bg-white/90 p-6 shadow-[0_18px_45px_rgba(70,38,120,0.10)] backdrop-blur-xl">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600">
                <Award className="h-7 w-7" />
              </div>

              <h2 className="text-xl font-extrabold text-[#17123f]">
                Achievements
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#6b5b95]">
                Track badges and learning milestones as the platform grows.
              </p>

              <Link
                href="/dashboard/achievements"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-purple-200 bg-white px-5 py-4 text-sm font-extrabold text-[#4c1d95] transition hover:bg-purple-50"
              >
                View Achievements
                <ArrowRight className="h-4 w-4" />
              </Link>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}