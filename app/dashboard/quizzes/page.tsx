import Link from "next/link";
import {
  BookOpenCheck,
  Languages,
  Shuffle,
  Headphones,
  Sparkles,
  ArrowRight,
  Clock,
  Trophy,
} from "lucide-react";

const quizModes = [
  {
    id: "hiragana-practice",
    title: "Hiragana Practice",
    subtitle: "ひらがな",
    description:
      "Practice Hiragana characters using Kana to Romaji and Romaji to Kana questions.",
    category: "Kana Basics",
    level: "Beginner",
    questions: 10,
    duration: "5 min",
    icon: BookOpenCheck,
    href: "/dashboard/quizzes/hiragana-practice",
    available: true,
  },
  {
    id: "katakana-practice",
    title: "Katakana Practice",
    subtitle: "カタカナ",
    description:
      "Learn Katakana recognition with simple character and Romaji conversion questions.",
    category: "Kana Basics",
    level: "Beginner",
    questions: 10,
    duration: "5 min",
    icon: Languages,
    href: "/dashboard/quizzes/katakana-practice",
    available: true,
  },
  {
    id: "match-kana",
    title: "Match Kana",
    subtitle: "かな マッチ",
    description:
      "Match Hiragana characters with their correct Katakana versions.",
    category: "Matching",
    level: "Beginner",
    questions: 8,
    duration: "6 min",
    icon: Shuffle,
    href: "/dashboard/quizzes/match-kana",
    available: true,
  },
  {
    id: "word-challenge",
    title: "Word Challenge",
    subtitle: "ことば",
    description:
      "Practice simple Japanese words such as ねこ, いぬ, すし, コーヒー, and テレビ.",
    category: "Vocabulary",
    level: "N5",
    questions: 10,
    duration: "7 min",
    icon: Sparkles,
    href: "/dashboard/quizzes/word-challenge",
    available: true,
  },
  {
    id: "listening-quiz",
    title: "Listening Quiz",
    subtitle: "リスニング",
    description:
      "Listening-based quiz activities will be added in a future improvement of the platform.",
    category: "Audio Practice",
    level: "Beginner",
    questions: 0,
    duration: "Soon",
    icon: Headphones,
    available: false,
  },
];

export default function QuizzesPage() {
  const availableModes = quizModes.filter((mode) => mode.available).length;
  const comingSoonModes = quizModes.length - availableModes;

  return (
    <div className="min-h-screen bg-[#fafafc] px-6 py-8 md:px-10">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c77d9b]">
          Practice Mode
        </p>

        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-[#202c5c]">
          Student Quizzes
        </h1>

        <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-500">
          Choose a quiz mode and practise Japanese step by step. Start with
          Hiragana and Katakana, then move into matching, vocabulary, and
          listening practice.
        </p>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-pink-100 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Available Modes</p>
          <h2 className="mt-2 text-3xl font-extrabold text-[#202c5c]">
            {availableModes}
          </h2>
          <p className="mt-1 text-xs text-gray-400">
            {comingSoonModes} coming soon
          </p>
        </div>

        <div className="rounded-3xl border border-pink-100 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Focus Area</p>
          <h2 className="mt-2 text-3xl font-extrabold text-[#202c5c]">N5</h2>
          <p className="mt-1 text-xs text-gray-400">Beginner friendly</p>
        </div>

        <div className="rounded-3xl border border-pink-100 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Learning Style</p>
          <h2 className="mt-2 text-3xl font-extrabold text-[#202c5c]">
            Practice
          </h2>
          <p className="mt-1 text-xs text-gray-400">Instant quiz feedback</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {quizModes.map((mode) => {
          const Icon = mode.icon;

          return (
            <div
              key={mode.id}
              className={`group relative overflow-hidden rounded-3xl border bg-white p-6 shadow-sm transition ${
                mode.available
                  ? "border-pink-100 hover:-translate-y-1 hover:shadow-lg"
                  : "border-gray-100 opacity-75"
              }`}
            >
              <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[4rem] bg-[#f8e9ed]" />

              <div className="relative mb-6 flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#202c5c] text-white shadow-sm">
                  <Icon className="h-7 w-7" />
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold ${
                    mode.available
                      ? "bg-[#eef1ff] text-[#202c5c]"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {mode.available ? mode.level : "Coming Soon"}
                </span>
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c77d9b]">
                {mode.category}
              </p>

              <h2 className="mt-3 text-2xl font-extrabold text-[#202c5c]">
                {mode.title}
              </h2>

              <p className="mt-1 text-lg font-semibold text-[#c77d9b]">
                {mode.subtitle}
              </p>

              <p className="mt-4 min-h-[72px] text-sm leading-6 text-gray-500">
                {mode.description}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-[#c77d9b]" />
                  <span>
                    {mode.available ? `${mode.questions} Questions` : "Locked"}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#c77d9b]" />
                  <span>{mode.duration}</span>
                </div>
              </div>

              {mode.available ? (
                <Link
                 href={mode.href ?? "/dashboard/quizzes"}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#202c5c] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#c77d9b]"
                >
                  Start Practice
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : (
                <button
                  disabled
                  className="mt-6 w-full cursor-not-allowed rounded-full bg-gray-100 px-5 py-3 text-sm font-bold text-gray-400"
                  type="button"
                >
                  Coming Soon
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}