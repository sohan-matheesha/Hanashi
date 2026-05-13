import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  MessageCircle,
  PlusCircle,
  Video,
} from "lucide-react";

const sessionTools = [
  {
    title: "Schedule Session",
    description:
      "Plan live Japanese learning sessions for speaking practice and lesson discussions.",
    icon: PlusCircle,
  },
  {
    title: "Video Practice",
    description:
      "Prepare video-based sessions for conversation practice and pronunciation support.",
    icon: Video,
  },
  {
    title: "Discussion Support",
    description:
      "Use live sessions to answer learner questions and guide Japanese practice.",
    icon: MessageCircle,
  },
];

export default function TeacherLiveSessionsPage() {
  return (
    <div className="min-h-screen bg-[#fafafc] px-4 py-8 md:px-8">
      <Link
        href="/dashboard/teacher"
        className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-[#a54a5c]"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Teacher Panel
      </Link>

      <div className="mb-8 rounded-3xl bg-white p-8 shadow-sm">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-[#a54a5c]">
          <CalendarDays className="h-7 w-7" />
        </div>

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#a54a5c]">
          Teacher Panel
        </p>

        <h1 className="text-3xl font-extrabold text-[#202c5c]">
          Live Sessions
        </h1>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-500">
          Teachers can plan live sessions for Japanese lessons, conversation
          practice, pronunciation support, and student discussions.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {sessionTools.map((tool) => {
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
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-3xl border border-dashed border-pink-200 bg-white p-6 text-center">
        <h3 className="text-xl font-extrabold text-[#202c5c]">
          Live session management area
        </h3>

        <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-gray-500">
          This section can be extended to create scheduled classes, online
          meeting links, and teacher-led conversation sessions.
        </p>
      </div>
    </div>
  );
}