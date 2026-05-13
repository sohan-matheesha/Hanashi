import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Coffee,
  Globe,
  Heart,
  Home,
  Landmark,
  Sparkles,
  Utensils,
} from "lucide-react";

const cultureCards = [
  {
    title: "Japanese Greetings",
    subtitle: "あいさつ",
    description:
      "Learn common greetings such as こんにちは, おはようございます, and ありがとうございます.",
    icon: Heart,
    category: "Daily Life",
  },
  {
    title: "Food Culture",
    subtitle: "食文化",
    description:
      "Explore popular Japanese food culture, dining manners, and useful food-related words.",
    icon: Utensils,
    category: "Culture",
  },
  {
    title: "Tea and Daily Habits",
    subtitle: "お茶",
    description:
      "Understand simple daily habits, tea culture, and polite expressions used in Japan.",
    icon: Coffee,
    category: "Lifestyle",
  },
  {
    title: "Japanese Homes",
    subtitle: "家",
    description:
      "Learn basic cultural ideas related to Japanese homes, rooms, and daily routines.",
    icon: Home,
    category: "Daily Life",
  },
  {
    title: "Festivals and Traditions",
    subtitle: "祭り",
    description:
      "Discover beginner-friendly information about festivals, traditions, and seasonal events.",
    icon: Sparkles,
    category: "Traditions",
  },
  {
    title: "Places in Japan",
    subtitle: "日本の場所",
    description:
      "Learn about famous places in Japan and useful words for travel and locations.",
    icon: Landmark,
    category: "Travel",
  },
];

const usefulCulturePhrases = [
  {
    jp: "いただきます",
    romaji: "Itadakimasu",
    meaning: "Said before eating",
  },
  {
    jp: "ごちそうさまでした",
    romaji: "Gochisousama deshita",
    meaning: "Said after eating",
  },
  {
    jp: "すみません",
    romaji: "Sumimasen",
    meaning: "Excuse me / Sorry",
  },
  {
    jp: "よろしくお願いします",
    romaji: "Yoroshiku onegaishimasu",
    meaning: "Nice to meet you / Please treat me well",
  },
];

export default function CulturalHubPage() {
  return (
    <div className="min-h-screen bg-[#fafafc] px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-gray-400">
          <Link href="/dashboard" className="transition hover:text-[#a54a5c]">
            Dashboard
          </Link>
          <span>/</span>
          <span className="text-[#a54a5c]">Cultural Hub</span>
        </div>

        {/* Header */}
        <section className="mb-8 rounded-3xl bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#a54a5c]">
                Japanese Culture
              </p>

              <h1 className="text-3xl font-extrabold tracking-tight text-[#202c5c] md:text-5xl">
                Learn the culture behind the language
              </h1>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-500 md:text-base">
                Cultural understanding helps learners use Japanese more
                naturally. Explore greetings, manners, food culture, traditions,
                daily life, and useful expressions for beginner learners.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/dashboard/lessons"
                  className="inline-flex items-center gap-2 rounded-2xl bg-[#a54a5c] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#913f50]"
                >
                  Back to Lessons
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/dashboard/conversation"
                  className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-6 py-3 text-sm font-bold text-[#202c5c] transition hover:bg-gray-50"
                >
                  Practise Conversation
                </Link>
              </div>
            </div>

            <div className="rounded-3xl bg-[#fafafc] p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#202c5c] text-white">
                  <Globe className="h-6 w-6" />
                </div>

                <div>
                  <h2 className="text-xl font-extrabold text-[#202c5c]">
                    Culture Focus
                  </h2>
                  <p className="text-sm text-gray-500">
                    Useful for beginners and travellers
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  "Daily Japanese manners",
                  "Food and greetings",
                  "Useful polite phrases",
                  "Culture-based conversation practice",
                ].map((item, index) => (
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

        {/* Culture Cards */}
        <section className="mb-8">
          <div className="mb-5">
            <h2 className="text-2xl font-extrabold text-[#202c5c]">
              Culture Topics
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Beginner-friendly cultural topics connected to Japanese learning.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {cultureCards.map((card) => {
              const Icon = card.icon;

              return (
                <article
                  key={card.title}
                  className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-[#a54a5c]">
                      <Icon className="h-7 w-7" />
                    </div>

                    <span className="rounded-full bg-[#fafafc] px-3 py-1 text-xs font-bold text-gray-500">
                      {card.category}
                    </span>
                  </div>

                  <p className="text-sm font-bold text-[#a54a5c]">
                    {card.subtitle}
                  </p>

                  <h3 className="mt-2 text-2xl font-extrabold text-[#202c5c]">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    {card.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Useful Phrases */}
        <section className="mb-8 rounded-3xl bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#a54a5c] text-white">
              <BookOpen className="h-6 w-6" />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a54a5c]">
                Useful Expressions
              </p>
              <h2 className="mt-1 text-2xl font-extrabold text-[#202c5c]">
                Culture-based Japanese phrases
              </h2>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {usefulCulturePhrases.map((phrase) => (
              <div
                key={phrase.jp}
                className="rounded-3xl border border-gray-100 bg-[#fafafc] p-5"
              >
                <p className="text-2xl font-extrabold text-[#202c5c]">
                  {phrase.jp}
                </p>
                <p className="mt-2 text-sm font-bold text-[#a54a5c]">
                  {phrase.romaji}
                </p>
                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {phrase.meaning}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Final note */}
        <section className="rounded-3xl border border-dashed border-pink-200 bg-white p-6 text-center">
          <h3 className="text-xl font-extrabold text-[#202c5c]">
            Cultural learning area
          </h3>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-gray-500">
            This section supports the language-learning process by connecting
            Japanese words and expressions with real cultural context.
          </p>
        </section>
      </div>
    </div>
  );
}