import {
  Award,
  BookOpen,
  CheckCircle2,
  Flame,
  GraduationCap,
  Sparkles,
  Trophy,
} from "lucide-react";
import { createClient } from "@/utils/supabase/server";

export default async function AchievementsPage() {
  const supabase = await createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return (
      <div className="min-h-screen bg-[#fafafc] px-4 py-8 md:px-8">
        <div className="mx-auto max-w-7xl">
          <section className="mb-8 rounded-3xl bg-white p-6 shadow-sm md:p-8">
            <div>
              <h1 className="text-2xl font-extrabold text-[#202c5c]">Achievements</h1>
              <p className="mt-2 text-sm text-gray-500">Please log in to view your achievements.</p>
            </div>
          </section>
        </div>
      </div>
    );
  }

  const { data: resultsData } = await supabase
    .from("quiz_results")
    .select("id, quiz_id, quiz_title, score, total_questions, percentage, completed_at")
    .eq("user_id", user.id)
    .order("completed_at", { ascending: false });

  const results = resultsData ?? [];

  const totalCompleted = results.length;
  const averageScore = totalCompleted
    ? Math.round(
        results.reduce((sum: number, r: any) => sum + (r.percentage || 0), 0) / totalCompleted
      )
    : 0;

  const bestScore = totalCompleted ? Math.max(...results.map((r: any) => r.percentage || 0)) : 0;

  const recentResults = results.slice(0, 5);

  const unlocked = {
    firstQuiz: totalCompleted >= 1,
    quizBeginner: totalCompleted >= 3,
    highScorer: results.some((r: any) => (r.percentage || 0) >= 80),
    perfectScore: results.some((r: any) => (r.percentage || 0) === 100),
    consistentLearner: totalCompleted >= 5,
  };

  const achievements = [
    {
      title: "First Quiz Completed",
      description: "Complete your first quiz.",
      icon: CheckCircle2,
      unlocked: unlocked.firstQuiz,
    },
    {
      title: "Quiz Beginner",
      description: "Complete 3 quizzes.",
      icon: BookOpen,
      unlocked: unlocked.quizBeginner,
    },
    {
      title: "High Scorer",
      description: "Achieve 80% or above on any quiz.",
      icon: Trophy,
      unlocked: unlocked.highScorer,
    },
    {
      title: "Perfect Score",
      description: "Achieve 100% on any quiz.",
      icon: Sparkles,
      unlocked: unlocked.perfectScore,
    },
    {
      title: "Consistent Learner",
      description: "Complete 5 quizzes.",
      icon: Flame,
      unlocked: unlocked.consistentLearner,
    },
  ];

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
                Track learning milestones, quiz progress, and practice goals.
              </p>
            </div>

            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-[#a54a5c] text-white shadow-sm">
              <Award className="h-10 w-10" />
            </div>
          </div>
        </section>

        <section className="mb-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">Quizzes Completed</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#202c5c]">{totalCompleted}</h2>
            <p className="mt-1 text-xs text-gray-400">Total quizzes completed</p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">Average Score</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#202c5c]">{averageScore}%</h2>
            <p className="mt-1 text-xs text-gray-400">Across completed quizzes</p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">Best Score</p>
            <h2 className="mt-2 text-3xl font-extrabold text-[#202c5c]">{bestScore}%</h2>
            <p className="mt-1 text-xs text-gray-400">Highest quiz percentage</p>
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
                      achievement.unlocked ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {achievement.unlocked ? "Unlocked" : "Locked"}
                  </span>
                </div>

                <h2 className="text-xl font-extrabold text-[#202c5c]">{achievement.title}</h2>

                <p className="mt-3 text-sm leading-7 text-gray-500">{achievement.description}</p>
              </div>
            );
          })}
        </section>

        <section className="mt-8 rounded-3xl border border-dashed border-pink-200 bg-white p-6">
          <h3 className="text-xl font-extrabold text-[#202c5c]">Recent Quiz Results</h3>

          <div className="mt-4 space-y-3">
            {recentResults.length === 0 && (
              <p className="text-sm text-gray-500">No quiz results yet. Complete a quiz to unlock achievements.</p>
            )}

            {recentResults.map((r: any) => (
              <div key={r.id} className="flex items-center justify-between rounded-2xl border p-3">
                <div>
                  <div className="text-sm font-bold text-[#202c5c]">{r.quiz_title || r.quiz_id}</div>
                  <div className="text-xs text-gray-400">{new Date(r.completed_at).toLocaleString()}</div>
                </div>

                <div className="text-right">
                  <div className="text-sm font-extrabold">{r.percentage}%</div>
                  <div className="text-xs text-gray-400">{r.score}/{r.total_questions}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
