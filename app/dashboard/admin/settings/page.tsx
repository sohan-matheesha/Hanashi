import Link from "next/link";
import {
  ArrowLeft,
  Bell,
  Database,
  Lock,
  Settings,
  ShieldCheck,
} from "lucide-react";

const settingsItems = [
  {
    title: "Access Control",
    description:
      "Manage role-based access for students, teachers, and administrators.",
    icon: Lock,
    status: "Configured",
  },
  {
    title: "User Role Settings",
    description:
      "Admins can update user roles through the Supabase-connected admin panel.",
    icon: ShieldCheck,
    status: "Active",
  },
  {
    title: "System Notifications",
    description:
      "Notification and approval workflow settings can be extended in future improvements.",
    icon: Bell,
    status: "Future",
  },
  {
    title: "Database Connection",
    description:
      "The platform uses Supabase for authentication, profiles, and role-based data.",
    icon: Database,
    status: "Connected",
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
          This section provides a structured area for managing system-level
          settings, access rules, role permissions, and platform configuration
          notes.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {settingsItems.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 text-[#a54a5c]">
                <Icon className="h-6 w-6" />
              </div>

              <h2 className="text-xl font-extrabold text-[#202c5c]">
                {item.title}
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                {item.description}
              </p>

              <span className="mt-5 inline-flex rounded-full bg-[#fafafc] px-3 py-1 text-xs font-bold text-gray-500">
                {item.status}
              </span>
            </div>
          );
        })}
      </section>

      <div className="mt-8 rounded-3xl border border-dashed border-pink-200 bg-white p-6 text-center">
        <h3 className="text-xl font-extrabold text-[#202c5c]">
          Settings management area
        </h3>

        <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-gray-500">
          This page is prepared for future admin settings such as platform
          rules, approval settings, notification controls, and system
          configuration.
        </p>
      </div>
    </div>
  );
}