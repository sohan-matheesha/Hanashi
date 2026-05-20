"use client";

import { useState } from "react";
import { BellRing, Loader2 } from "lucide-react";

export default function CreateConversationAlertButton() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function sendAlert() {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("/api/conversation-alert", {
        method: "POST",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send alert");
      }

      setSent(true);
    } catch (err) {
      setError("Alert send wenne naha. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mb-4 rounded-2xl border border-pink-100 bg-pink-50/70 p-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-sm font-bold text-[#202c5c]">
            Need a speaking partner?
          </h3>
          <p className="mt-1 text-sm text-slate-600">
            Send a notification to online students and teachers that you are
            ready for Japanese speaking practice.
          </p>

          {sent && (
            <p className="mt-2 text-sm font-medium text-green-600">
              Notification sent successfully. Others can now join you.
            </p>
          )}

          {error && (
            <p className="mt-2 text-sm font-medium text-red-500">{error}</p>
          )}
        </div>

        <button
          onClick={sendAlert}
          disabled={loading || sent}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#202c5c] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#182246] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : sent ? (
            <>
              <BellRing className="h-4 w-4" />
              Alert Sent
            </>
          ) : (
            <>
              <BellRing className="h-4 w-4" />
              Notify Others
            </>
          )}
        </button>
      </div>
    </div>
  );
}