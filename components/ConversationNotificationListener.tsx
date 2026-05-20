"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BellRing, X } from "lucide-react";
import { createClient } from "@/utils/supabase/client";

type ConversationAlert = {
  id: string;
  title: string;
  message: string;
  room_link: string;
  created_by: string;
  created_at: string;
};

export default function ConversationNotificationListener({
  currentUserId,
}: {
  currentUserId?: string;
}) {
  const [alert, setAlert] = useState<ConversationAlert | null>(null);

  useEffect(() => {
    if (!currentUserId) return;

    const supabase = createClient();

    async function checkLatestAlert() {
      const { data, error } = await supabase
        .from("conversation_alerts")
        .select("id, title, message, room_link, created_by, created_at")
        .eq("status", "active")
        .gt("expires_at", new Date().toISOString())
        .neq("created_by", currentUserId)
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      if (error || !data) return;

      const lastSeenId = localStorage.getItem("last_seen_conversation_alert");

      if (lastSeenId === data.id) return;

      localStorage.setItem("last_seen_conversation_alert", data.id);
      setAlert(data as ConversationAlert);

      setTimeout(() => {
        setAlert(null);
      }, 15000);
    }

    checkLatestAlert();

    const interval = setInterval(() => {
      checkLatestAlert();
    }, 8000);

    return () => clearInterval(interval);
  }, [currentUserId]);

  if (!alert) return null;

  return (
    <div className="fixed right-5 top-24 z-9999 w-85 rounded-3xl border border-pink-100 bg-white p-4 shadow-2xl">
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-pink-50 text-[#c3829e]">
          <BellRing className="h-5 w-5" />
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-sm font-bold text-[#202c5c]">
              {alert.title}
            </h3>

            <button
              onClick={() => setAlert(null)}
              className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              aria-label="Close notification"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <p className="mt-1 text-sm leading-5 text-slate-600">
            {alert.message}
          </p>

          <Link
            href={alert.room_link || "/dashboard/conversation"}
            className="mt-3 inline-flex rounded-full bg-[#202c5c] px-4 py-2 text-xs font-semibold text-white hover:bg-[#182246]"
          >
            Join Conversation
          </Link>
        </div>
      </div>
    </div>
  );
}