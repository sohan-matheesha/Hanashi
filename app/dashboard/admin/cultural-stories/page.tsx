import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  ImagePlus,
  Landmark,
  PlusCircle,
  Sparkles,
  Trash2,
} from "lucide-react";

const storyTools = [
  {
    title: "Create Culture Story",
    description:
      "Prepare Japanese culture learning content for beginner students.",
    icon: PlusCircle,
    status: "Prepared",
  },
  {
    title: "Feature Story",
    description:
      "Highlight important cultural topics such as greetings, food, festivals, and manners.",
    icon: Sparkles,
    status: "Content Area",
  },
  {
    title: "Culture Categories",
    description:
      "Organise cultural content into daily life, traditions, travel, and language context.",
    icon: Landmark,
    status: "Available",
  },
  {
    title: "Content Moderation",
    description:
      "Admins can review and remove unsuitable content in future improvements.",
    icon: Trash2,
    status: "Future",
  },
];

export default function AdminCulturalStoriesPage() {
  return (
    <div className="min-h-screen bg-[#fafafc] px-4 py-8 md:px-8">
      <Link
        href="/dashboard/admin"
        className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-[#a54a5c]"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Admin Panel
      </Link>

      <section className="mb-8 rounded-3xl bg-white p-8 shadow-sm">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-[#a54a5c]">
          <ImagePlus className="h-7 w-7" />
        </div>

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#a54a5c]">
          Admin Content
        </p>

        <h1 className="text-3xl font-extrabold text-[#202c5c]">
          Cultural Hub Stories
        </h1>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-500">
          Admins can prepare and manage Japanese cultural learning content for
          the Cultural Hub. This area supports stories, learning notes, culture
          categories, and content moderation.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {storyTools.map((tool) => {
          const Icon = tool.icon;

          return (
            <div key={tool.title} className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 text-[#a54a5c]">
                <Icon className="h-6 w-6" />
              </div>

              <h2 className="text-xl font-extrabold text-[#202c5c]">
                {tool.title}
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                {tool.description}
              </p>

              <span className="mt-5 inline-flex rounded-full bg-[#fafafc] px-3 py-1 text-xs font-bold text-gray-500">
                {tool.status}
              </span>
            </div>
          );
        })}
      </section>

      <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#202c5c] text-white">
            <BookOpen className="h-6 w-6" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a54a5c]">
              Example Content
            </p>
            <h2 className="text-2xl font-extrabold text-[#202c5c]">
              Suggested cultural topics
            </h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {["Japanese greetings", "Food manners", "Festivals and traditions"].map(
            (topic) => (
              <div
                key={topic}
                className="rounded-2xl border border-gray-100 bg-[#fafafc] p-4 text-sm font-semibold text-gray-600"
              >
                {topic}
              </div>
            ),
          )}
        </div>
      </section>
    </div>
  );
}