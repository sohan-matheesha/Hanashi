"use client";

import { useState } from "react";
import { Bot, Send, Sparkles } from "lucide-react";

export default function AIChatPage() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSend() {
    if (!message.trim()) return;

    setLoading(true);
    setReply("");

    try {
      const res = await fetch("/api/ai-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();

      if (data.reply) {
        setReply(data.reply);
      } else {
        setReply("Sorry bro, AI response eka ganna bari una.");
      }
    } catch (error) {
      console.error(error);
      setReply("Error ekak awa bro. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#f8f3ea] p-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 rounded-3xl bg-white p-6 shadow-sm">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF5A1F] text-white">
              <Bot size={26} />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-[#2d2424]">
                Hanashi AI Tutor
              </h1>
              <p className="text-sm text-gray-600">
                Practice Japanese and get grammar corrections instantly.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl bg-[#fff7f2] p-4 text-sm text-gray-700">
            <div className="mb-2 flex items-center gap-2 font-semibold text-[#FF5A1F]">
              <Sparkles size={18} />
              Example
            </div>
            Type: <span className="font-semibold">私は学校へ行く</span>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Enter your Japanese sentence
          </label>

          <textarea
            className="h-36 w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 p-4 text-gray-800 outline-none transition focus:border-[#FF5A1F] focus:bg-white"
            placeholder="Example: 私は学校へ行く"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            onClick={handleSend}
            disabled={loading}
            className="mt-4 flex items-center gap-2 rounded-2xl bg-[#FF5A1F] px-6 py-3 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send size={18} />
            {loading ? "Checking..." : "Ask AI"}
          </button>

          {reply && (
            <div className="mt-6 rounded-2xl border border-orange-100 bg-[#fff7f2] p-5">
              <h2 className="mb-3 font-bold text-[#2d2424]">
                AI Correction
              </h2>

              <pre className="whitespace-pre-wrap font-sans text-sm leading-6 text-gray-800">
                {reply}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}