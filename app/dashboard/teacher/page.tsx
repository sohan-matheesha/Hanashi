import {
  BookOpen,
  Users,
  Video,
  ClipboardList,
  BarChart3,
  MessageCircle,
  Plus,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const stats = [
  {
    title: "Total Students",
    value: "128",
    icon: Users,
    description: "Students enrolled in your classes",
  },
  {
    title: "Active Lessons",
    value: "24",
    icon: BookOpen,
    description: "Published Japanese learning lessons",
  },
  {
    title: "Live Sessions",
    value: "06",
    icon: Video,
    description: "Upcoming teaching sessions",
  },
  {
    title: "Pending Questions",
    value: "18",
    icon: MessageCircle,
    description: "Student questions to review",
  },
];

const quickActions = [
  {
    title: "Manage Lessons",
    description: "Create, edit, and organize lesson content.",
    href: "/dashboard/teacher/lessons",
    icon: BookOpen,
  },
  {
    title: "Student List",
    description: "View students and manage learning support.",
    href: "/dashboard/teacher/students",
    icon: Users,
  },
  {
    title: "Live Sessions",
    description: "Schedule and manage live teaching sessions.",
    href: "/dashboard/teacher/live-sessions",
    icon: Video,
  },
  {
    title: "Assignments",
    description: "Create practice tasks and learning activities.",
    href: "/dashboard/teacher/assignments",
    icon: ClipboardList,
  },
  {
    title: "Progress Monitor",
    description: "Track student progress and performance.",
    href: "/dashboard/teacher/progress",
    icon: BarChart3,
  },
];

export default function TeacherDashboardPage() {
  return (
    <div className="min-h-screen bg-[#fafafc] px-4 py-6 md:px-8">
      {/* Header */}
      <div className="mb-8 rounded-3xl bg-linear-to-r from-[#FF5A1F] to-[#ff8a5b] p-6 text-white shadow-sm md:p-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-white/80">
              Teacher Section
            </p>
            <h1 className="text-3xl font-bold md:text-4xl">
              Welcome to Hanashi Teacher Dashboard
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/90 md:text-base">
              Manage lessons, guide students, conduct live sessions, and monitor
              learning progress from one place.
            </p>
          </div>

          <Link
            href="/dashboard/teacher/lessons"
            className="flex w-fit items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-[#FF5A1F] shadow-sm transition hover:scale-105"
          >
            <Plus size={18} />
            Create Lesson
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff1ea] text-[#FF5A1F]">
                <Icon size={24} />
              </div>

              <h2 className="text-3xl font-bold text-[#202c5c]">
                {item.value}
              </h2>
              <p className="mt-1 font-semibold text-[#202c5c]">{item.title}</p>
              <p className="mt-2 text-sm leading-5 text-gray-500">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#202c5c]">
              Teacher Tools
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Access the main tools required for teaching and student
              management.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {quickActions.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff1ea] text-[#FF5A1F]">
                  <Icon size={24} />
                </div>

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-[#202c5c]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {item.description}
                    </p>
                  </div>

                  <ArrowRight
                    size={20}
                    className="mt-1 text-gray-300 transition group-hover:translate-x-1 group-hover:text-[#FF5A1F]"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}