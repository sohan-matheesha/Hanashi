import {
  Award,
  BookOpen,
  CheckCircle2,
  Flame,
  GraduationCap,
  Sparkles,
  Trophy,
} from "lucide-react";

const achievements = [
  {
    title: "First Step",
    description: "Start learning Japanese through Hanashi.",
    icon: Sparkles,
    status: "Available",
  },
  {
    title: "Kana Beginner",
    description: "Complete Hiragana and Katakana practice activities.",
    icon: BookOpen,
    status: "In Progress",
  },
  {
    title: "Quiz Starter",
    description: "Complete your first Japanese quiz.",
    icon: CheckCircle2,
    status: "In Progress",
  },
  {
    title: "Speaking Practice",
    description: "Practise Japanese through conversation activities.",
    icon: GraduationCap,
    status: "Available",
  },
  {
    title: "Daily Learner",
    description: "Build a regular Japanese learning habit.",
    icon: Flame,
    status: "Coming Soon",
  },
  {
    title: "N5 Explorer",
    description: "Continue learning beginner-level JLPT N5 topics.",
    icon: Trophy,
    status: "Coming Soon",
  },
];

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-[#fafafc] px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl">
        <section className="mb-8 rounded-3xl bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#a54a5c]">
                Learning Progress
              </p>

              <h1 className="text-3xl font-extrabold tracking-tight text-[#202c5c] md:text-5xl">
                Achievements
              </h1>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-500 md:text-base">
                Track learning milestones, quiz progress, and practice goals as
                students continue learning Japanese through Hanashi.
              </p>
            </div>

            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#a54a5c] text-white shadow-sm">
              <Award className="h-10 w-10" />
            </div>
          </div>
        </section>

        <section className="mb-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">Achievement Type</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#202c5c]">
              Learning
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">Main Focus</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#202c5c]">
              N5
            </h2>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">Progress Mode</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#202c5c]">
              Badges
            </h2>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;

            return (
              <div
                key={achievement.title}
                className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-[#a54a5c]">
                    <Icon className="h-7 w-7" />
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      achievement.status === "Coming Soon"
                        ? "bg-gray-100 text-gray-400"
                        : achievement.status === "In Progress"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                    }`}
                  >
                    {achievement.status}
                  </span>
                </div>

                <h2 className="text-xl font-extrabold text-[#202c5c]">
                  {achievement.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </section>

        <section className="mt-8 rounded-3xl border border-dashed border-pink-200 bg-white p-6 text-center">
          <h3 className="text-xl font-extrabold text-[#202c5c]">
            Achievement tracking area
          </h3>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-gray-500">
            This section is prepared for future progress tracking, quiz results,
            streaks, and badge-based gamification features.
          </p>
        </section>
      </div>
    </div>
  );
}
