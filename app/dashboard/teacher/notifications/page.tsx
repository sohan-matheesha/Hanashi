import Link from "next/link";
import { redirect } from "next/navigation";
import { BellRing, MessageCircle, Clock } from "lucide-react";
import { createClient } from "@/utils/supabase/server";

export default async function TeacherNotificationsPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (profile?.role !== "teacher" && profile?.role !== "admin") {
    redirect("/dashboard");
  }

  const { data: alerts, error } = await supabase
    .from("conversation_alerts")
    .select("id, title, message, created_by_name, room_link, created_at, expires_at, status")
    .eq("status", "active")
    .gt("expires_at", new Date().toISOString())
    .order("created_at", { ascending: false });

  const notifications = alerts ?? [];

  return (
    <div className="min-h-screen bg-[#fff7fb] px-4 py-8 md:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 rounded-3xl border border-pink-100 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#c3829e]">
                Teacher Panel
              </p>

              <h1 className="mt-2 text-3xl font-extrabold text-[#202c5c]">
                Conversation Notifications
              </h1>

              <p className="mt-2 text-sm text-slate-600">
                See students who are currently waiting for Japanese speaking practice.
              </p>
            </div>

            <Link
              href="/dashboard/conversation"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#202c5c] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#182246]"
            >
              <MessageCircle className="h-4 w-4" />
              Open Conversation Room
            </Link>
          </div>
        </div>

        {error && (
          <div className="rounded-2xl border border-red-100 bg-red-50 p-4 text-sm font-medium text-red-600">
            Failed to load notifications. Please try again.
          </div>
        )}

        {!error && notifications.length === 0 && (
          <div className="rounded-3xl border border-dashed border-pink-200 bg-white p-10 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-pink-50 text-[#c3829e]">
              <BellRing className="h-7 w-7" />
            </div>

            <h2 className="mt-4 text-xl font-bold text-[#202c5c]">
              No active speaking requests
            </h2>

            <p className="mt-2 text-sm text-slate-600">
              When a student sends a speaking practice request, it will appear here.
            </p>
          </div>
        )}

        <div className="space-y-4">
          {notifications.map((alert) => (
            <div
              key={alert.id}
              className="rounded-3xl border border-pink-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-pink-50 text-[#c3829e]">
                    <BellRing className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#202c5c]">
                      {alert.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {alert.message}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500">
                      <span>
                        From: {alert.created_by_name || "Hanashi learner"}
                      </span>

                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {new Date(alert.created_at).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <Link
                  href={alert.room_link || "/dashboard/conversation"}
                  className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#202c5c] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#182246]"
                >
                  Join Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}