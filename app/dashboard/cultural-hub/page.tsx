import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Coffee,
  Heart,
  Landmark,
  Newspaper,
  Sparkles,
  Star,
} from "lucide-react";
import { createClient } from "@/utils/supabase/server";

type CulturalStory = {
  id: string;
  title: string;
  category: string;
  image_url: string | null;
  description: string;
  content: string | null;
  created_at: string;
};

const fallbackStories: CulturalStory[] = [
  {
    id: "daily-life",
    title: "A Day in Japanese Daily Life",
    category: "Daily Life",
    image_url:
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1200&auto=format&fit=crop",
    description:
      "Japanese daily life is organised, clean, and polite. People use trains, convenience stores, vending machines, and quiet public spaces in their everyday routine.",
    content:
      "A normal day in Japan often starts early. Many people travel by train to school or work. Public transport is usually quiet, clean, and punctual. Convenience stores, called konbini, are a big part of daily life because people can buy food, drinks, tickets, and daily items easily. Japanese daily life also shows discipline through habits such as waiting in lines, keeping public places clean, and respecting other people’s space.",
    created_at: new Date().toISOString(),
  },
  {
    id: "food-culture",
    title: "Japanese Food and Eating Manners",
    category: "Food",
    image_url:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=1200&auto=format&fit=crop",
    description:
      "Japanese food culture is not only about taste. It also shows balance, beauty, respect, and good manners.",
    content:
      "Japanese meals usually include rice, soup, vegetables, fish, meat, or small side dishes. Food is often served neatly and beautifully. Before eating, people say “itadakimasu” to show thanks for the meal. Chopsticks are used carefully, and there are important manners such as not sticking chopsticks upright in rice. Popular Japanese foods include sushi, ramen, bento, onigiri, curry rice, takoyaki, and miso soup. Japanese food culture teaches learners about respect, simplicity, and balance.",
    created_at: new Date().toISOString(),
  },
  {
    id: "clothing-fashion",
    title: "Kimono, Yukata, and Japanese Fashion",
    category: "Clothing",
    image_url:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=1200&auto=format&fit=crop",
    description:
      "Japanese clothing includes both traditional styles like kimono and modern styles seen in cities like Tokyo.",
    content:
      "The kimono is one of Japan’s most famous traditional clothes. It is usually worn during special events, ceremonies, weddings, and festivals. A yukata is a lighter casual version often worn during summer festivals. In modern Japan, people wear many styles, from formal work clothes to creative street fashion. Areas like Harajuku are famous for colourful and unique fashion. Japanese clothing culture shows both tradition and modern creativity.",
    created_at: new Date().toISOString(),
  },
  {
    id: "manners-etiquette",
    title: "Japanese Manners Beginners Should Know",
    category: "Manners",
    image_url:
      "https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=1200&auto=format&fit=crop",
    description:
      "Manners are very important in Japan. Bowing, speaking politely, and respecting public spaces are part of daily behaviour.",
    content:
      "In Japan, people often bow when greeting, thanking, apologising, or showing respect. Public behaviour is usually quiet and polite. People avoid talking loudly on trains, wait in lines properly, and keep public places clean. When visiting a Japanese home, people remove their shoes at the entrance called genkan. These manners may look simple, but they show respect for others. Learning Japanese manners helps language learners understand how culture and communication work together.",
    created_at: new Date().toISOString(),
  },
  {
    id: "festivals-events",
    title: "Japanese Festivals and Seasonal Events",
    category: "Festivals",
    image_url:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop",
    description:
      "Japan has many colourful festivals connected to seasons, traditions, family, and community life.",
    content:
      "Japanese festivals are called matsuri. They often include traditional clothes, food stalls, music, games, fireworks, and decorations. Sakura season in spring is famous for hanami, where people enjoy cherry blossoms. Summer festivals often include yukata, lanterns, and fireworks. New Year is one of the most important events in Japan, when families visit shrines and eat special food. Festivals help people celebrate nature, tradition, and togetherness.",
    created_at: new Date().toISOString(),
  },
  {
    id: "home-life",
    title: "Inside a Japanese Home",
    category: "Home Life",
    image_url:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1200&auto=format&fit=crop",
    description:
      "Japanese homes are often simple, clean, and carefully organised. Many homes include special habits connected to cleanliness and comfort.",
    content:
      "A Japanese home usually has an entrance area called genkan where people remove outdoor shoes. Some homes have tatami rooms, sliding doors, low tables, and futon bedding. Bathrooms are also different because washing and soaking are separated. In winter, some families use a warm table called kotatsu. Japanese home life shows the value of cleanliness, order, and peaceful living spaces.",
    created_at: new Date().toISOString(),
  },
  {
    id: "transport-city",
    title: "Trains and City Life in Japan",
    category: "Travel",
    image_url:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop",
    description:
      "Japanese cities are famous for trains, stations, clean streets, and organised public transport.",
    content:
      "Trains are one of the most important parts of life in Japan. Many students and workers travel by train every day. Japanese trains are known for being punctual, clean, and quiet. People usually stand in lines before entering the train and avoid loud phone calls. Cities like Tokyo are busy but organised. IC cards such as Suica and Pasmo make travel easier. Transport culture in Japan teaches discipline, timing, and respect for shared spaces.",
    created_at: new Date().toISOString(),
  },
  {
    id: "school-culture",
    title: "Japanese School Life",
    category: "School",
    image_url:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop",
    description:
      "Japanese school life includes uniforms, club activities, cleaning duties, lunch culture, and respect between students and teachers.",
    content:
      "Japanese students often wear school uniforms and follow a structured daily routine. One special part of school life is that students help clean classrooms and school areas. This teaches responsibility and teamwork. School lunch is also important, and students may serve food to each other. Club activities after school are common, such as sports, music, art, or cultural clubs. Japanese school culture shows discipline, teamwork, and respect.",
    created_at: new Date().toISOString(),
  },
  {
    id: "work-culture",
    title: "Japanese Work Culture and Respect",
    category: "Work",
    image_url:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    description:
      "Japanese work culture values punctuality, teamwork, respect, politeness, and responsibility.",
    content:
      "In Japanese workplaces, being on time is very important. Workers often greet each other politely and use respectful language. Teamwork is valued, and people try to avoid causing trouble for others. Business cards are exchanged carefully in formal situations. Customer service in Japan is also famous for being polite and professional. Work culture can be strict, but it shows how respect and responsibility are important in Japanese society.",
    created_at: new Date().toISOString(),
  },
  {
    id: "pop-culture",
    title: "Anime, Manga, Karaoke, and Japanese Pop Culture",
    category: "Pop Culture",
    image_url:
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=1200&auto=format&fit=crop",
    description:
      "Japanese pop culture is loved around the world through anime, manga, games, karaoke, cosplay, and character goods.",
    content:
      "Japan is famous for anime and manga, which are popular among people of many ages. Karaoke is also a big part of entertainment culture, where friends sing together in private rooms. Game centres, gachapon machines, cosplay events, and character goods are common in cities. Pop culture helps learners enjoy Japanese language in a fun way. Many students become interested in Japanese because of anime, songs, games, and dramas.",
    created_at: new Date().toISOString(),
  },
];

const categoryStyles: Record<string, string> = {
  Manners: "bg-blue-50 text-blue-700",
  "Daily Life": "bg-orange-50 text-orange-700",
  Food: "bg-red-50 text-red-700",
  Festivals: "bg-pink-50 text-pink-700",
  Travel: "bg-purple-50 text-purple-700",
  "Language Context": "bg-green-50 text-green-700",
  Clothing: "bg-fuchsia-50 text-fuchsia-700",
  "Home Life": "bg-amber-50 text-amber-700",
  School: "bg-cyan-50 text-cyan-700",
  Work: "bg-slate-100 text-slate-700",
  "Pop Culture": "bg-violet-50 text-violet-700",
};

const newspaperHighlights = [
  "Japanese Life",
  "Food Manners",
  "Traditional Clothes",
  "Festivals",
  "School Culture",
  "Anime & Manga",
];

export default async function CulturalHubPage() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("cultural_stories")
    .select("id, title, category, image_url, description, content, created_at")
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  const databaseStories = (data ?? []) as CulturalStory[];

  const stories =
    databaseStories.length > 0
      ? [...databaseStories, ...fallbackStories]
      : fallbackStories;

  const featuredStory = stories[0];
  const secondStory = stories[1];
  const otherStories = stories.slice(2);

  return (
    <main className="min-h-screen bg-[#fff7fb] px-4 py-8 md:px-8">
      <section
        className="relative mb-8 overflow-hidden rounded-4xl p-10 text-white shadow-xl"
        style={{
          backgroundImage:
            "linear-gradient(rgba(20, 10, 35, 0.45), rgba(20, 10, 35, 0.45)), url('/images/culture-hub-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="pointer-events-none absolute right-8 top-6 text-8xl opacity-20">
          文化
        </div>

        <div className="pointer-events-none absolute bottom-6 left-8 text-7xl opacity-20">
          🌸
        </div>

        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.28em] text-pink-100 backdrop-blur">
              <Newspaper className="h-4 w-4" />
              Culture Magazine
            </p>

            <h1 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
              Japanese Culture Hub
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-pink-50 md:text-lg">
              Read Japanese culture like a colourful magazine. Explore daily
              life, food, manners, clothing, festivals, transport, school life,
              work culture, and pop culture in a simple way.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {newspaperHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white backdrop-blur"
                >
                  #{item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-4xl border border-white/25 bg-white/15 p-6 shadow-xl backdrop-blur-xl">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#be185d]">
              <Sparkles className="h-7 w-7" />
            </div>

            <h2 className="text-2xl font-extrabold">
              Culture Book for Beginners
            </h2>

            <p className="mt-3 text-sm leading-7 text-pink-50">
              This hub is designed like a small culture book. Every card gives
              you a real-life Japanese culture topic with a useful note.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8 grid gap-4 md:grid-cols-4">
        {[
          {
            title: "Culture Notes",
            value: stories.length,
            icon: BookOpen,
            color: "bg-pink-100 text-pink-700",
          },
          {
            title: "Daily Life",
            value: "Japan",
            icon: Coffee,
            color: "bg-orange-100 text-orange-700",
          },
          {
            title: "Traditions",
            value: "Culture",
            icon: Landmark,
            color: "bg-purple-100 text-purple-700",
          },
          {
            title: "Fun Reading",
            value: "Magazine",
            icon: Star,
            color: "bg-yellow-100 text-yellow-700",
          },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-3xl border border-pink-100 bg-white p-5 shadow-sm"
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${item.color}`}
              >
                <Icon className="h-6 w-6" />
              </div>

              <p className="text-sm font-semibold text-gray-500">
                {item.title}
              </p>

              <h2 className="mt-1 text-3xl font-black text-[#202c5c]">
                {item.value}
              </h2>
            </div>
          );
        })}
      </section>

      {error && (
        <div className="mb-8 rounded-3xl border border-red-100 bg-red-50 p-5 text-sm font-bold text-red-600">
          Cultural stories table did not load. Showing built-in culture stories
          for now.
        </div>
      )}

      <section className="mb-8 grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
        <article className="overflow-hidden rounded-[36px] bg-white shadow-sm">
          <div className="grid lg:grid-cols-[1fr_0.9fr]">
            <div className="relative min-h-[420px] overflow-hidden bg-[#202c5c]">
              {featuredStory.image_url ? (
                <img
                  src={featuredStory.image_url}
                  alt={featuredStory.title}
                  className="h-full min-h-[420px] w-full object-cover"
                />
              ) : (
                <div className="flex h-full min-h-[420px] items-center justify-center bg-linear-to-br from-[#202c5c] to-[#be185d] text-7xl">
                  🌸
                </div>
              )}

              <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-transparent" />

              <div className="absolute bottom-6 left-6">
                <span
                  className={`rounded-full px-4 py-2 text-xs font-extrabold ${
                    categoryStyles[featuredStory.category] ||
                    "bg-pink-50 text-pink-700"
                  }`}
                >
                  {featuredStory.category}
                </span>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-[#be185d]">
                Cover Story
              </p>

              <h2 className="text-4xl font-black leading-tight text-[#202c5c]">
                {featuredStory.title}
              </h2>

              <p className="mt-5 text-base leading-8 text-gray-500">
                {featuredStory.description}
              </p>

              {featuredStory.content && (
                <p className="mt-5 rounded-3xl bg-[#fff7fb] p-5 text-sm leading-7 text-gray-600">
                  {featuredStory.content}
                </p>
              )}

              <div className="mt-6 flex items-center gap-3 text-sm font-bold text-[#be185d]">
                <Heart className="h-5 w-5" />
                Culture note for beginner learners
              </div>
            </div>
          </div>
        </article>

        <article className="overflow-hidden rounded-[36px] bg-white shadow-sm">
          <div className="relative h-64 overflow-hidden bg-[#202c5c]">
            {secondStory.image_url ? (
              <img
                src={secondStory.image_url}
                alt={secondStory.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-[#202c5c] to-[#be185d] text-7xl">
                🗾
              </div>
            )}

            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-5 left-5 right-5">
              <span
                className={`rounded-full px-3 py-1 text-xs font-extrabold ${
                  categoryStyles[secondStory.category] ||
                  "bg-pink-50 text-pink-700"
                }`}
              >
                {secondStory.category}
              </span>

              <h3 className="mt-3 text-2xl font-black leading-tight text-white">
                {secondStory.title}
              </h3>
            </div>
          </div>

          <div className="p-6">
            <p className="text-sm leading-7 text-gray-500">
              {secondStory.description}
            </p>

            {secondStory.content && (
              <details className="mt-4 rounded-2xl bg-[#fafafc] p-4">
                <summary className="cursor-pointer text-sm font-bold text-[#be185d]">
                  Read culture note
                </summary>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {secondStory.content}
                </p>
              </details>
            )}
          </div>
        </article>
      </section>

      <section className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#be185d]">
            Culture Newspaper
          </p>

          <h2 className="mt-2 text-3xl font-black text-[#202c5c]">
            Read Japanese life section by section
          </h2>
        </div>

        <div className="hidden items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#202c5c] shadow-sm md:flex">
          <CalendarDays className="h-4 w-4 text-[#be185d]" />
          Culture Picks
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {otherStories.map((story, index) => (
          <article
            key={story.id}
            className={`group overflow-hidden rounded-[32px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
              index % 4 === 0
                ? "border-t-8 border-t-pink-400"
                : index % 4 === 1
                  ? "border-t-8 border-t-orange-400"
                  : index % 4 === 2
                    ? "border-t-8 border-t-purple-400"
                    : "border-t-8 border-t-blue-400"
            }`}
          >
            <div className="relative h-52 overflow-hidden bg-[#202c5c]">
              {story.image_url ? (
                <img
                  src={story.image_url}
                  alt={story.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-[#202c5c] to-[#be185d] text-6xl">
                  🗾
                </div>
              )}

              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

              <div className="absolute left-4 top-4">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-extrabold ${
                    categoryStyles[story.category] ||
                    "bg-pink-50 text-pink-700"
                  }`}
                >
                  {story.category}
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-black leading-tight text-[#202c5c]">
                {story.title}
              </h3>

              <p className="mt-3 min-h-[112px] text-sm leading-7 text-gray-500">
                {story.description}
              </p>

              {story.content && (
                <details className="mt-4 rounded-2xl bg-[#fafafc] p-4">
                  <summary className="cursor-pointer text-sm font-bold text-[#be185d]">
                    Read culture note
                  </summary>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {story.content}
                  </p>
                </details>
              )}

              <div className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#be185d]">
                Read more
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-10 rounded-[36px] border border-pink-100 bg-white p-8 text-center shadow-sm">
        <h3 className="text-3xl font-black text-[#202c5c]">
          Want to add more stories?
        </h3>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-500">
          Admins can add more culture notes from the Cultural Stories management
          page. New stories will appear in this hub with magazine-style cards.
        </p>

        <Link
          href="/dashboard/admin/cultural-stories"
          className="mt-6 inline-flex rounded-2xl bg-[#be185d] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#9f1239]"
        >
          Add Culture Story
        </Link>
      </section>
    </main>
  );
}