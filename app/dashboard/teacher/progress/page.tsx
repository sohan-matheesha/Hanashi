import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  CheckCircle2,
  LineChart,
  Trophy,
} from "lucide-react";

const progressTools = [
  {
    title: "Quiz Performance",
    description:
      "Review student quiz attempts and identify areas where learners need support.",
    icon: CheckCircle2,
  },
  {
    title: "Learning Progress",
    description:
      "Track how students move through lessons, vocabulary, grammar, and practice tasks.",
    icon: LineChart,
  },
  {
    title: "Achievement Review",
    description:
      "Review badges, milestones, and practice achievements as the platform improves.",
    icon: Trophy,
  },
];

export default function TeacherProgressPage() {
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
          <BarChart3 className="h-7 w-7" />
        </div>

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#a54a5c]">
          Teacher Panel
        </p>

        <h1 className="text-3xl font-extrabold text-[#202c5c]">
          Progress Review
        </h1>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-500">
          Teachers can review student learning progress, quiz results, and
          practice activity performance to provide better learning support.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {progressTools.map((tool) => {
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
          Progress tracking area
        </h3>

        <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-gray-500">
          This section can be connected with quiz results, lesson completion,
          and Supabase progress data in a future improvement.
        </p>
      </div>
    </div>
  );
}