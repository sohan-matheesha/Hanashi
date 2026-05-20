import CreateConversationAlertButton from "@/components/CreateConversationAlertButton";
import Link from "next/link";
import { Bot, MessageCircle, Mic, Video, Wifi } from "lucide-react";

export default function ConversationPage() {
  return (
    <div className="min-h-screen bg-[#fff7fb]">
      <main className="mx-auto max-w-7xl px-4 py-6 md:px-8">
        {/* Back Button */}
        <Link
          href="/dashboard"
          className="mb-6 inline-flex items-center text-sm font-semibold text-gray-500 transition hover:text-[#32253a]"
        >
          ← Back to Dashboard
        </Link>

        {/* Header Card */}
        <section className="mb-6 rounded-3xl border border-pink-100 bg-white p-6 shadow-sm md:p-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.45em] text-[#c3829e]">
                Conversation Practice
              </p>

              <h1 className="text-3xl font-extrabold text-[#202c5c] md:text-4xl">
                Japanese Speaking Practice
              </h1>

              <p className="mt-3 max-w-3xl text-sm text-gray-500 md:text-base">
                Practise Japanese speaking through video call, voice call, text
                chat, or AI partner support.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 rounded-full bg-[#202c5c] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#32253a]">
                  <Video className="h-4 w-4" />
                  Video Call
                </button>

                <button className="inline-flex items-center gap-2 rounded-full border border-pink-100 bg-white px-5 py-3 text-sm font-bold text-gray-600 shadow-sm transition hover:bg-pink-50">
                  <Mic className="h-4 w-4" />
                  Voice Call
                </button>

                <button className="inline-flex items-center gap-2 rounded-full border border-pink-100 bg-white px-5 py-3 text-sm font-bold text-gray-600 shadow-sm transition hover:bg-pink-50">
                  <MessageCircle className="h-4 w-4" />
                  Text Chat
                </button>

                <button className="inline-flex items-center gap-2 rounded-full border border-pink-100 bg-pink-50 px-5 py-3 text-sm font-bold text-[#c3829e] shadow-sm transition hover:bg-pink-100">
                  <Bot className="h-4 w-4" />
                  AI Partner
                </button>
              </div>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-2xl bg-green-50 px-5 py-3 text-sm font-bold text-green-600">
              <Wifi className="h-5 w-5" />
              Online
            </div>
          </div>
        </section>

        {/* Jitsi Video Call Section */}
        <section className="rounded-3xl border border-pink-100 bg-white p-4 shadow-sm md:p-5">
          <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-extrabold text-[#202c5c]">
                Japanese Practice Session
              </h2>
              <p className="text-sm text-gray-500">
                Topic: Basic Self Introduction
              </p>
            </div>

            <span className="inline-flex w-fit items-center rounded-full bg-green-50 px-5 py-2 text-sm font-bold text-green-600">
              Jitsi Live Room
            </span>
          </div>

          <CreateConversationAlertButton />
          <div className="overflow-hidden rounded-3xl border border-pink-100 bg-black">
            <iframe
              src="https://meet.jit.si/Hanashi-Fyp-Nsbm-2026-Basic-Speaking-Practice"
              allow="camera; microphone; fullscreen; display-capture; autoplay"
              className="h-[72vh] w-full border-0"
              title="Hanashi Japanese Speaking Practice Room"
            />
          </div>
        </section>

        {/* Floating AI Partner Button */}
        <Link
          href="/dashboard/ai-chat"
          className="fixed bottom-6 right-6 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#ff5a1f] text-white shadow-lg transition hover:scale-105 hover:bg-[#e94d16]"
          aria-label="Open AI Partner"
        >
          <Bot className="h-7 w-7" />
        </Link>
      </main>
    </div>
  );
}