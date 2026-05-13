import Link from 'next/link'
import {
  Mic,
  CheckSquare,
  User,
  Flame,
  Puzzle,
  Award,
  Lock,
  Search,
} from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#fafafc] px-6 py-8 md:px-10">
      {/* Header */}
      <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-[#2b2238]">
            Welcome, malki-san!
          </h1>

          <p className="mt-3 text-sm font-medium text-gray-500">
            You have completed <span className="font-bold text-[#202c5c]">64%</span> of your JLPT N5 curriculum. Keep it up!
          </p>
        </div>

        {/* Top Right Actions */}
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/dashboard/conversation"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#c77d9b] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#b96f8e]"
          >
            <Mic className="h-4 w-4" />
            Join Speak Session
          </Link>

          <Link
            href="/dashboard/quizzes"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-6 py-3 text-sm font-bold text-[#2b2238] shadow-sm transition hover:bg-gray-50"
          >
            <CheckSquare className="h-4 w-4" />
            Daily Quiz
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

      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_360px]">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Continue Learning */}
          <section>
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-extrabold text-[#2b2238]">
                Continue Learning
              </h2>

              <Link
                href="/dashboard/lessons"
                className="text-sm font-bold text-[#c77d9b] transition hover:text-[#202c5c]"
              >
                View All Lessons
              </Link>
            </div>

            <div className="rounded-4xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="grid gap-6 md:grid-cols-[280px_1fr]">
                <div className="h-60 overflow-hidden rounded-3xl md:h-full">
                  <img
                    src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=900&q=80"
                    alt="Japanese street"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <span className="mb-4 w-fit rounded-full bg-gray-100 px-4 py-1 text-xs font-extrabold uppercase tracking-[0.2em] text-gray-500">
                    Lesson 04 • Intermediate
                  </span>

                  <h3 className="text-2xl font-extrabold text-[#2b2238]">
                    JLPT N5 Kanji: Time & Numbers
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-500">
                    Mastering the essential kanji for hours, minutes, and counting days of the week.
                  </p>

                  <div className="mt-8">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-xs font-bold text-gray-500">
                        Progress
                      </span>
                      <span className="text-xs font-extrabold text-[#2b2238]">
                        75%
                      </span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                      <div className="h-full w-[75%] rounded-full bg-[#c77d9b]" />
                    </div>
                  </div>

                  <Link
                    href="/dashboard/lessons"
                    className="mt-8 block rounded-2xl bg-[#c77d9b] px-6 py-4 text-center text-sm font-extrabold text-white transition hover:bg-[#b96f8e]"
                  >
                    Resume Lesson
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="grid gap-6 md:grid-cols-2">
            <div className="rounded-4xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                  <Flame className="h-7 w-7" />
                </div>

                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-gray-400">
                    Current Streak
                  </p>
                  <h3 className="mt-2 text-3xl font-extrabold text-[#2b2238]">
                    7 Days
                  </h3>
                </div>
              </div>
            </div>

            <div className="rounded-4xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-500">
                  <Puzzle className="h-7 w-7" />
                </div>

                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-gray-400">
                    Kanji Mastered
                  </p>
                  <h3 className="mt-2 text-3xl font-extrabold text-[#2b2238]">
                    142<span className="text-gray-400">/800</span>
                  </h3>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Content */}
        <div className="space-y-8">
          {/* Achievements */}
          <section>
            <h2 className="mb-5 text-xl font-extrabold text-[#2b2238]">
              Recent Achievements
            </h2>

            <div className="rounded-4xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-50 text-yellow-500">
                    <Award className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="font-extrabold text-[#2b2238]">
                      7-Day Streak
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Unstoppable learner! You've logged in for a week straight.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-500">
                    <Search className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="font-extrabold text-[#2b2238]">
                      Cultural Explorer
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Completed 5 lessons in the Cultural Hub.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 opacity-40">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 text-gray-400">
                    <Lock className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="font-extrabold text-[#2b2238]">
                      Fluent Speaker
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Attend 10 Speak Sessions to unlock.
                    </p>
                  </div>
                </div>
              </div>

              <button className="mt-8 w-full rounded-2xl bg-[#f7f8fb] px-5 py-4 text-sm font-extrabold text-[#202c5c] transition hover:bg-gray-100">
                View All Badges
              </button>
            </div>
          </section>

          {/* Culture Spotlight */}
          <section>
            <h2 className="mb-5 text-xl font-extrabold text-[#2b2238]">
              Culture Spotlight
            </h2>

            <div className="overflow-hidden rounded-4xl border border-gray-100 bg-white shadow-sm">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80"
                  alt="Japanese culture"
                  className="h-full w-full object-cover"
                />

                <span className="absolute left-4 top-4 rounded bg-black/70 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-white">
                  New Article
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-extrabold text-[#2b2238]">
                  The Art of Omotenashi
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Discover the Japanese culture of hospitality and respectful service.
                </p>

                <Link
                  href="/dashboard/cultural-hub"
                  className="mt-5 inline-block text-sm font-extrabold text-[#c77d9b] transition hover:text-[#202c5c]"
                >
                  Read More
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}