"use client";

import Link from "next/link";
import {
  BookOpen,
  CalendarDays,
  ShieldCheck,
  Users,
  BarChart3,
  Video,
} from "lucide-react";

const teacherFeatures = [
  {
    title: "Manage Lessons",
    description: "Create and manage Japanese learning materials for students.",
    icon: BookOpen,
    status: "Open",
    href: "/dashboard/teacher/lessons",
  },
  {
    title: "Live Sessions",
    description:
      "Plan live learning sessions and conversation practice activities.",
    icon: CalendarDays,
    status: "Open",
    href: "/dashboard/teacher/live-sessions",
  },
  {
    title: "Student Support",
    description:
      "Support learners by providing guidance, practice tasks, and feedback.",
    icon: Users,
    status: "Open",
    href: "/dashboard/teacher/students",
  },
  {
    title: "Progress Review",
    description:
      "Review student learning progress and quiz-based practice results.",
    icon: BarChart3,
    status: "Open",
    href: "/dashboard/teacher/progress",
  },
  {
    title: "Video Lessons",
    description:
      "Add, manage, and delete Japanese video lessons for students.",
    icon: Video,
    status: "Open",
    href: "/dashboard/teacher/video-lessons",
  },
];

export default function TeacherPage() {
  return (
    <main className="min-h-screen bg-[#fafafc] px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl">
        <section className="mb-8 rounded-3xl bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#a54a5c]">
                Teacher Panel
              </p>

              <h1 className="text-3xl font-extrabold tracking-tight text-[#202c5c] md:text-5xl">
                Teaching tools and learning management
              </h1>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-500 md:text-base">
                Manage Japanese lessons, video resources, live sessions,
                student support, and learning progress from one teacher
                dashboard.
              </p>
            </div>

            <div className="rounded-3xl bg-[#fafafc] p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#202c5c] text-white">
                  <ShieldCheck className="h-6 w-6" />
                </div>

                <div>
                  <h2 className="text-xl font-extrabold text-[#202c5c]">
                    Teacher Access Active
                  </h2>
                  <p className="text-sm text-gray-500">
                    You can manage student learning content
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  "Create and publish lessons",
                  "Add video lesson resources",
                  "Schedule live learning sessions",
                  "Review student support and progress",
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

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {teacherFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <Link
                key={feature.title}
                href={feature.href}
                className="group rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-[#a54a5c]">
                  <Icon className="h-7 w-7" />
                </div>

                <h2 className="text-xl font-extrabold text-[#202c5c]">
                  {feature.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {feature.description}
                </p>

                <span className="mt-5 inline-flex rounded-full bg-[#fafafc] px-3 py-1 text-xs font-bold text-[#a54a5c]">
                  {feature.status}
                </span>

                <p className="mt-4 text-sm font-bold text-[#a54a5c] transition group-hover:translate-x-1">
                  Open →
                </p>
              </Link>
            );
          })}
        </section>
      </div>
    </main>
  );
}