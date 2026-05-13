"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Bot,
  Languages,
  Loader2,
  Send,
  Sparkles,
  Wand2,
} from "lucide-react";

export default function AIChatPage() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSend() {
    if (!message.trim() || loading) return;

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

      if (!res.ok) {
        setReply(
          "The AI tutor could not process the request right now. Please try again."
        );
        return;
      }

      if (data.reply) {
        setReply(data.reply);
      } else {
        setReply(
          "The AI tutor did not return a response. Please try another question."
        );
      }
    } catch (error) {
      console.error(error);
      setReply(
        "Something went wrong while connecting to the AI tutor. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  const examples = [
    "Correct this Japanese sentence: 私は学校へ行く",
    "Explain the difference between は and が in simple English.",
    "Translate this to Japanese: I am studying Japanese.",
    "මට こんにちは කියන්නේ මොකක්ද කියලා සිංහලෙන් කියන්න.",
  ];

  return (
    <div className="min-h-screen bg-[#fafafc] px-4 py-8 md:px-8">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/dashboard"
          className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-[#a54a5c] transition hover:text-[#202c5c]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>

        {/* Header */}
        <div className="mb-8 rounded-3xl bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#a54a5c] text-white shadow-sm">
                <Bot className="h-7 w-7" />
              </div>

              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#a54a5c]">
                  Hanashi AI Tutor
                </p>

                <h1 className="text-3xl font-extrabold text-[#202c5c] md:text-4xl">
                  Japanese Learning Assistant
                </h1>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-500">
                  Ask questions about Japanese grammar, vocabulary,
                  translation, sentence correction, and beginner-level practice.
                  You can ask in English, Sinhala, or Japanese.
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-[#fafafc] p-5">
              <div className="flex items-center gap-3">
                <Languages className="h-5 w-5 text-[#a54a5c]" />
                <div>
                  <p className="text-sm font-extrabold text-[#202c5c]">
                    Language Support
                  </p>
                  <p className="text-xs text-gray-500">
                    Sinhala • English • Japanese
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
          {/* Chat Box */}
          <div className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
            <div className="mb-5">
              <label className="mb-2 block text-sm font-extrabold text-[#202c5c]">
                Ask the AI tutor
              </label>

              <p className="text-sm leading-6 text-gray-500">
                Type a Japanese sentence, grammar question, translation request,
                or Sinhala explanation request.
              </p>
            </div>

            <textarea
              className="h-44 w-full resize-none rounded-3xl border border-gray-200 bg-[#fafafc] p-5 text-sm leading-7 text-gray-800 outline-none transition focus:border-[#a54a5c] focus:bg-white"
              placeholder="Example: Correct this sentence and explain in Sinhala: 私は学校へ行く"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-gray-400">
                Tip: Ask for correction, meaning, examples, or simple grammar
                explanations.
              </p>

              <button
                onClick={handleSend}
                disabled={loading || !message.trim()}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#a54a5c] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#913f50] disabled:cursor-not-allowed disabled:opacity-60"
                type="button"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Checking...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Ask AI Tutor
                  </>
                )}
              </button>
            </div>

            {reply ? (
              <div className="mt-8 rounded-3xl border border-pink-100 bg-[#fff7f9] p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#a54a5c] text-white">
                    <Sparkles className="h-5 w-5" />
                  </div>

                  <div>
                    <h2 className="font-extrabold text-[#202c5c]">
                      AI Tutor Response
                    </h2>
                    <p className="text-xs text-gray-500">
                      Review the answer and practise again.
                    </p>
                  </div>
                </div>

                <pre className="whitespace-pre-wrap font-sans text-sm leading-7 text-gray-800">
                  {reply}
                </pre>
              </div>
            ) : (
              <div className="mt-8 rounded-3xl border border-gray-100 bg-[#fafafc] p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-[#a54a5c] shadow-sm">
                    <Wand2 className="h-5 w-5" />
                  </div>

                  <div>
                    <h2 className="font-extrabold text-[#202c5c]">
                      What can the AI tutor help with?
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-gray-500">
                      It can correct beginner Japanese sentences, explain
                      grammar simply, translate short phrases, and provide
                      practice examples for learning.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Examples */}
          <aside className="h-fit rounded-3xl bg-white p-6 shadow-sm">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#a54a5c]">
              Example Prompts
            </p>

            <h2 className="text-xl font-extrabold text-[#202c5c]">
              Try one of these
            </h2>

            <div className="mt-5 space-y-3">
              {examples.map((example) => (
                <button
                  key={example}
                  onClick={() => setMessage(example)}
                  className="w-full rounded-2xl border border-gray-100 bg-[#fafafc] p-4 text-left text-sm leading-6 text-gray-600 transition hover:border-[#a54a5c] hover:bg-white"
                  type="button"
                >
                  {example}
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-[#202c5c] p-5 text-white">
              <p className="text-sm font-extrabold">Best use</p>
              <p className="mt-2 text-sm leading-6 text-white/75">
                For final project demo, show sentence correction, Sinhala
                explanation, and Japanese grammar support.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}