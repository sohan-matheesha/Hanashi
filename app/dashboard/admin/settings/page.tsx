import Link from "next/link";
import {
  ArrowLeft,
  Bell,
  CheckCircle2,
  Database,
  KeyRound,
  Lock,
  Settings,
  ShieldCheck,
  UserCog,
  Video,
} from "lucide-react";

const settingsItems = [
  {
    title: "Access Control",
    description:
      "Students, teachers, and admins are separated using role-based layouts and Supabase profile roles.",
    icon: Lock,
    status: "Configured",
    color: "bg-blue-50 text-blue-700",
  },
  {
    title: "User Role Settings",
    description:
      "Admins can update user roles from the admin users table using Supabase profile records.",
    icon: ShieldCheck,
    status: "Active",
    color: "bg-green-50 text-green-700",
  },
  {
    title: "Video Lesson Management",
    description:
      "Teachers and admins can add or delete video lesson links. Students can view published videos.",
    icon: Video,
    status: "Active",
    color: "bg-purple-50 text-purple-700",
  },
  {
    title: "Database Connection",
    description:
      "Supabase is used for authentication, profiles, lessons, sessions, support, progress, and videos.",
    icon: Database,
    status: "Connected",
    color: "bg-pink-50 text-pink-600",
  },
];

const accessRules = [
  {
    role: "Student",
    access:
      "Student dashboard, lessons, quizzes, AI tutor, video lessons, conversation practice, feedback, and progress summary.",
  },
  {
    role: "Teacher",
    access:
      "Teacher dashboard, manage lessons, live sessions, student support, progress review, and video lesson management.",
  },
  {
    role: "Admin",
    access:
      "Admin dashboard, user management, role updates, settings, cultural content, and teacher/admin management tools.",
  },
];

const environmentItems = [
  {
    name: "NEXT_PUBLIC_SUPABASE_URL",
    description: "Required for Supabase project connection.",
    safe: "Public",
  },
  {
    name: "NEXT_PUBLIC_SUPABASE_ANON_KEY",
    description: "Required for Supabase client authentication requests.",
    safe: "Public",
  },
  {
    name: "GEMINI_API_KEY",
    description:
      "Required for AI tutor server-side API calls. Do not expose this as NEXT_PUBLIC.",
    safe: "Private",
  },
];

export default function AdminSettingsPage() {
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
          <Settings className="h-7 w-7" />
        </div>

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#a54a5c]">
          Admin Tools
        </p>

        <h1 className="text-3xl font-extrabold text-[#202c5c]">
          System Settings
        </h1>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-500">
          Review the main platform configuration areas, role-based access rules,
          database usage, and environment variable checklist for Hanashi.
        </p>
      </section>

      <section className="mb-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {settingsItems.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="rounded-3xl bg-white p-6 shadow-sm">
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${item.color}`}
              >
                <Icon className="h-6 w-6" />
              </div>

              <h2 className="text-xl font-extrabold text-[#202c5c]">
                {item.title}
              </h2>

              <p className="mt-3 min-h-[112px] text-sm leading-7 text-gray-500">
                {item.description}
              </p>

              <span className="mt-5 inline-flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
                <CheckCircle2 className="h-3.5 w-3.5" />
                {item.status}
              </span>
            </div>
          );
        })}
      </section>

      <section className="mb-8 grid gap-6 lg:grid-cols-[1fr_420px]">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-700">
              <UserCog className="h-6 w-6" />
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-[#202c5c]">
                Role Access Summary
              </h2>
              <p className="text-sm text-gray-500">
                Current access structure used by the platform.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {accessRules.map((rule) => (
              <div
                key={rule.role}
                className="rounded-3xl border border-pink-100 bg-[#fffafd] p-5"
              >
                <h3 className="text-lg font-extrabold text-[#202c5c]">
                  {rule.role}
                </h3>
                <p className="mt-2 text-sm leading-7 text-gray-500">
                  {rule.access}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
              <KeyRound className="h-6 w-6" />
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-[#202c5c]">
                Environment Checklist
              </h2>
              <p className="text-sm text-gray-500">
                Required keys for local and Vercel deployment.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {environmentItems.map((item) => (
              <div
                key={item.name}
                className="rounded-3xl border border-gray-100 bg-[#fafafc] p-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-extrabold text-[#202c5c]">
                    {item.name}
                  </p>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      item.safe === "Private"
                        ? "bg-red-50 text-red-600"
                        : "bg-green-50 text-green-700"
                    }`}
                  >
                    {item.safe}
                  </span>
                </div>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-3xl border border-dashed border-red-200 bg-red-50 p-4">
            <p className="text-sm font-semibold leading-6 text-red-700">
              Do not use <b>NEXT_PUBLIC_GEMINI_API_KEY</b>. Gemini API key must
              stay private and only be used in server-side API routes.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-dashed border-pink-200 bg-white p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-extrabold text-[#202c5c]">
              Notification and approval workflows
            </h3>

            <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-500">
              Teacher approval requests, notification controls, and automated
              admin alerts can be extended as future improvements. The current
              stable flow uses admin role updates from the users table.
            </p>
          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-[#a54a5c]">
            <Bell className="h-7 w-7" />
          </div>
        </div>
      </section>
    </div>
  );
}