"use client";

import { useId, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  Bot,
  BookOpen,
  Copy,
  Mic,
  Send,
  Sparkles,
  Users,
  Video,
  Wifi,
  X,
  MessageCircle,
  Volume2,
  Square,
} from "lucide-react";

const JitsiMeeting = dynamic(
  () => import("@jitsi/react-sdk").then((mod) => mod.JitsiMeeting),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center rounded-4xl bg-gray-900 text-white">
        Loading meeting interface...
      </div>
    ),
  }
);

type PracticeMode = "live" | "ai";

const activeLearners = [
  {
    name: "Aiko Tanaka",
    level: "N3",
    topic: "Daily Japanese Conversation",
    mode: "Voice + Video",
    color: "bg-pink-100 text-pink-700",
  },
  {
    name: "Kenji Mori",
    level: "N5",
    topic: "Basic Self Introduction",
    mode: "Voice Only",
    color: "bg-blue-100 text-blue-700",
  },
];

const usefulPhrases = [
  {
    jp: "こんにちは。",
    en: "Hello.",
  },
  {
    jp: "私は日本語を勉強しています。",
    en: "I am studying Japanese.",
  },
  {
    jp: "もう一度お願いします。",
    en: "Once again, please.",
  },
];

export default function ConversationPage() {
  const roomId = useId().replace(/:/g, "");
  const roomName = `HanashiLiveSession_${roomId}`;

  const [mode, setMode] = useState<PracticeMode>("live");
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const [voiceError, setVoiceError] = useState("");

  async function handleAskAI() {
    if (!message.trim()) return;

    setLoading(true);
    setReply("");

    try {
      const res = await fetch("/api/ai-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: `Act as a Japanese speaking practice partner for a language learning platform. Help the student practise simple daily Japanese conversation. Reply naturally in beginner-friendly Japanese, include romaji, English meaning, and a short correction if needed. Student says: ${message}`,
        }),
      });

      const data = await res.json();

      if (data.reply) {
        setReply(data.reply);
      } else {
        setReply("Sorry, I could not generate a practice reply.");
      }
    } catch (error) {
      console.error(error);
      setReply("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function speakText(text: string) {
    if (!text) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();

    const smoothVoice =
      voices.find((voice) => voice.name.includes("Samantha")) ||
      voices.find((voice) => voice.name.includes("Google US English")) ||
      voices.find((voice) => voice.lang === "en-US") ||
      voices[0];

    if (smoothVoice) {
      utterance.voice = smoothVoice;
    }

    utterance.lang = "en-US";
    utterance.rate = 0.82;
    utterance.pitch = 1.05;
    utterance.volume = 1;

    window.speechSynthesis.speak(utterance);
  }

  function stopSpeaking() {
    window.speechSynthesis.cancel();
  }

  return (
    <div className="fixed inset-0 z-50 flex h-screen overflow-hidden bg-[#f8f9fc] font-sans text-[#202c5c]">
      {/* Left Sidebar */}
      <aside className="relative z-10 flex h-full w-[86px] shrink-0 flex-col justify-between border-r border-gray-100 bg-white px-4 py-6 shadow-sm transition-all duration-300 lg:w-[240px]">
        <div>
          <Link
            href="/dashboard"
            className="mb-8 flex items-center justify-center gap-3 lg:justify-start"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FF5A1F] text-white">
              <MessageCircle className="h-5 w-5" />
            </div>

            <div className="hidden lg:block">
              <h1 className="text-lg font-black leading-tight text-[#202c5c]">
                Hanashi
              </h1>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                Speaking Room
              </p>
            </div>
          </Link>

          <nav className="space-y-3">
            <button
              onClick={() => setMode("live")}
              className={`flex w-full items-center justify-center gap-4 rounded-2xl px-3 py-3 font-bold transition lg:justify-start ${
                mode === "live"
                  ? "bg-[#fff1ea] text-[#FF5A1F]"
                  : "text-gray-500 hover:bg-gray-50 hover:text-[#202c5c]"
              }`}
            >
              <Video className="h-5 w-5" />
              <span className="hidden lg:block">Live Practice</span>
            </button>

            <button
              onClick={() => setMode("ai")}
              className={`flex w-full items-center justify-center gap-4 rounded-2xl px-3 py-3 font-bold transition lg:justify-start ${
                mode === "ai"
                  ? "bg-[#eef2ff] text-[#202c5c]"
                  : "text-gray-500 hover:bg-gray-50 hover:text-[#202c5c]"
              }`}
            >
              <Bot className="h-5 w-5" />
              <span className="hidden lg:block">AI Partner</span>
            </button>
          </nav>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-center gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-3 lg:justify-start">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-100 font-bold text-teal-800">
              N3
            </div>

            <div className="hidden lg:block">
              <p className="text-xs font-bold text-[#202c5c]">Level: N3</p>
              <p className="text-[10px] font-black uppercase text-gray-400">
                Intermediate
              </p>
            </div>
          </div>

          <Link
            href="/dashboard"
            className="flex w-full items-center justify-center rounded-2xl bg-[#f85c5c] py-3 font-bold text-white transition hover:bg-red-600"
          >
            <span className="hidden lg:block">End Session</span>
            <X className="h-5 w-5 lg:hidden" />
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Top Header */}
        <header className="z-10 flex h-[88px] shrink-0 items-center justify-between border-b border-gray-100 bg-white px-6 shadow-sm">
          <div className="min-w-0">
            <p className="mb-1 text-[10px] font-black uppercase tracking-[0.2em] text-[#FF5A1F]">
              {mode === "live" ? "Live Practice Room" : "Hanashi AI Partner"}
            </p>

            <h2 className="truncate text-xl font-black text-[#202c5c]">
              Japanese Speaking Practice
            </h2>

            <div className="mt-2 flex flex-wrap gap-2">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-black text-blue-700">
                N3 Intermediate
              </span>
              <span className="rounded-full bg-green-50 px-3 py-1 text-[10px] font-black text-green-700">
                {mode === "live" ? "4 Learners Online" : "AI Online"}
              </span>
              <span className="rounded-full bg-orange-50 px-3 py-1 text-[10px] font-black text-[#FF5A1F]">
                {mode === "live" ? "Voice + Video" : "Voice + Text"}
              </span>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <button className="hidden rounded-2xl bg-gray-50 px-4 py-3 text-xs font-bold text-[#202c5c] transition hover:bg-gray-100 md:flex">
              Change Topic
            </button>

            <button className="hidden items-center gap-2 rounded-2xl bg-gray-50 px-4 py-3 text-xs font-bold text-[#202c5c] transition hover:bg-gray-100 md:flex">
              <Copy className="h-4 w-4" />
              Copy Link
            </button>

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-50 text-green-700">
              <Wifi className="h-4 w-4" />
            </div>
          </div>
        </header>

        {/* Body */}
        <main className="flex min-h-0 flex-1 gap-4 overflow-hidden bg-[#f0f2f9] p-4 lg:gap-6 lg:p-6">
          {/* Main Practice Area */}
          <section className="flex min-w-0 flex-1 flex-col gap-4">
            {mode === "live" ? (
              <div className="relative min-h-0 flex-1 overflow-hidden rounded-4xl border border-gray-200 bg-[#1e1e1e] shadow-sm">
                <JitsiMeeting
                  roomName={roomName}
                  configOverwrite={{
                    startWithAudioMuted: true,
                    startWithVideoMuted: false,
                    disableModeratorIndicator: true,
                    startScreenSharing: false,
                    enableEmailInStats: false,
                    prejoinPageEnabled: false,
                    disableDeepLinking: true,
                  }}
                  interfaceConfigOverwrite={{
                    DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
                    SHOW_CHROME_EXTENSION_BANNER: false,
                    TOOLBAR_BUTTONS: [
                      "microphone",
                      "camera",
                      "closedcaptions",
                      "desktop",
                      "fullscreen",
                      "fodeviceselection",
                      "hangup",
                      "profile",
                      "chat",
                      "settings",
                      "raisehand",
                      "videoquality",
                      "filmstrip",
                      "shortcuts",
                      "tileview",
                    ],
                  }}
                  userInfo={{
                    displayName: "Student",
                    email: "student@hanashi.app",
                  }}
                  getIFrameRef={(iframeRef) => {
                    iframeRef.style.height = "100%";
                    iframeRef.style.width = "100%";
                    iframeRef.style.border = "none";
                  }}
                />
              </div>
            ) : (
              <div className="flex min-h-0 flex-1 flex-col rounded-4xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#eef2ff] text-[#202c5c]">
                    <Bot className="h-8 w-8" />
                  </div>

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FF5A1F]">
                      AI Conversation Mode
                    </p>
                    <h2 className="text-2xl font-black text-[#202c5c]">
                      Practice with Hanashi AI Partner
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      No partner online? Practice Japanese with AI until someone
                      joins.
                    </p>
                  </div>
                </div>

                <div className="mb-5 rounded-3xl bg-[#fff7f2] p-5">
                  <p className="text-sm font-bold text-[#202c5c]">
                    AI Partner:
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    こんにちは！今日は日本語で簡単な会話の練習をしましょう。
                    First, try introducing yourself or saying something simple in
                    Japanese.
                  </p>
                </div>

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your answer in Sinhala, English, or Japanese..."
                  className="min-h-[140px] resize-none rounded-3xl border border-gray-200 bg-gray-50 p-4 text-sm text-[#202c5c] outline-none transition focus:border-[#FF5A1F] focus:bg-white"
                />

                <div className="mt-4 flex flex-wrap gap-3">
                  <button
                    onClick={handleAskAI}
                    disabled={loading}
                    className="flex items-center gap-2 rounded-2xl bg-[#FF5A1F] px-5 py-3 text-sm font-bold text-white transition hover:opacity-90 disabled:opacity-60"
                  >
                    <Send className="h-4 w-4" />
                    {loading ? "Thinking..." : "Ask AI Partner"}
                  </button>

                  <button className="flex items-center gap-2 rounded-2xl bg-[#202c5c] px-5 py-3 text-sm font-bold text-white transition hover:opacity-90">
                    <Mic className="h-4 w-4" />
                    Voice Practice Soon
                  </button>
                </div>

                {reply && (
                  <div className="mt-5 rounded-3xl border border-orange-100 bg-[#fff7f2] p-5">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <h3 className="text-sm font-black text-[#202c5c]">
                        AI Practice Reply
                      </h3>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => speakText(reply)}
                          className="flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#FF5A1F]"
                        >
                          <Volume2 className="h-4 w-4" />
                          Listen
                        </button>

                        <button
                          onClick={stopSpeaking}
                          className="flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-gray-600"
                        >
                          <Square className="h-3 w-3" />
                          Stop
                        </button>
                      </div>
                    </div>

                    <pre className="whitespace-pre-wrap font-sans text-sm leading-6 text-gray-700">
                      {reply}
                    </pre>
                  </div>
                )}
              </div>
            )}

            {/* Bottom Practice Tools */}
            <div className="grid gap-4 rounded-4xl border border-gray-200 bg-white p-5 shadow-sm md:grid-cols-3">
              {usefulPhrases.map((phrase) => (
                <div
                  key={phrase.jp}
                  className="rounded-3xl bg-gray-50 p-4 transition hover:bg-orange-50"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-[#FF5A1F]" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                      Useful Phrase
                    </span>
                  </div>
                  <p className="text-lg font-black text-[#202c5c]">
                    {phrase.jp}
                  </p>
                  <p className="mt-1 text-xs font-medium text-gray-500">
                    {phrase.en}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Right Panel */}
          <aside className="hidden w-[330px] shrink-0 flex-col overflow-hidden rounded-4xl border border-gray-200 bg-white shadow-sm xl:flex">
            {mode === "live" ? (
              <>
                <div className="border-b border-gray-100 p-5">
                  <h3 className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.15em] text-[#202c5c]">
                    <span className="h-3 w-1 rounded-full bg-green-500" />
                    Active Practice Lobby
                  </h3>
                  <p className="mt-1 pl-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    Find a speaking partner
                  </p>
                </div>

                <div className="border-b border-gray-100 bg-[#fcfdff] p-5">
                  <div className="rounded-3xl border border-green-100 bg-green-50 p-4">
                    <div className="flex items-center gap-3">
                      <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white text-green-600">
                        <Users className="h-5 w-5" />
                        <span className="absolute right-0 top-0 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
                      </div>

                      <div>
                        <p className="text-sm font-black text-[#202c5c]">
                          4 learners online now
                        </p>
                        <p className="text-xs font-medium text-gray-500">
                          Join a room or wait for a partner.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 space-y-4 overflow-y-auto bg-[#fcfdff] p-5">
                  {activeLearners.map((learner) => (
                    <div
                      key={learner.name}
                      className="rounded-3xl border border-gray-100 bg-white p-4 shadow-sm"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`relative flex h-11 w-11 items-center justify-center rounded-full font-black ${learner.color}`}
                          >
                            {learner.name.charAt(0)}
                            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
                          </div>

                          <div>
                            <p className="text-sm font-black text-[#202c5c]">
                              {learner.name}
                            </p>
                            <p className="text-xs font-semibold text-gray-400">
                              Level {learner.level} • {learner.mode}
                            </p>
                          </div>
                        </div>

                        <span className="rounded-full bg-green-50 px-3 py-1 text-[10px] font-black text-green-700">
                          Online
                        </span>
                      </div>

                      <div className="mt-4 rounded-2xl bg-gray-50 p-3">
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                          Wants to practice
                        </p>
                        <p className="mt-1 text-sm font-bold text-[#202c5c]">
                          {learner.topic}
                        </p>
                      </div>

                      <div className="mt-4 flex gap-2">
                        <button className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#FF5A1F] px-4 py-3 text-xs font-bold text-white transition hover:opacity-90">
                          <Mic className="h-4 w-4" />
                          Voice
                        </button>

                        <button className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#202c5c] px-4 py-3 text-xs font-bold text-white transition hover:opacity-90">
                          <Video className="h-4 w-4" />
                          Video
                        </button>
                      </div>
                    </div>
                  ))}

                  <div className="rounded-3xl border border-dashed border-orange-200 bg-[#fff7f2] p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#FF5A1F]">
                        <Sparkles className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-sm font-black text-[#202c5c]">
                          No partner?
                        </p>
                        <p className="mt-1 text-xs leading-5 text-gray-500">
                          Switch to AI Partner and keep practicing while waiting.
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => setMode("ai")}
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#FF5A1F] px-4 py-3 text-xs font-bold text-white"
                    >
                      <Bot className="h-4 w-4" />
                      Practice with AI
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="border-b border-gray-100 p-5">
                  <h3 className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.15em] text-[#202c5c]">
                    <span className="h-3 w-1 rounded-full bg-[#FF5A1F]" />
                    AI Partner Tools
                  </h3>
                  <p className="mt-1 pl-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    Practice support
                  </p>
                </div>

                <div className="flex-1 space-y-4 overflow-y-auto bg-[#fcfdff] p-5">
                  <div className="rounded-3xl bg-[#eef2ff] p-5">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#202c5c]">
                      <Bot className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-black text-[#202c5c]">
                      Hanashi AI Partner
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      Practice anytime when no learner is online. Ask for hints,
                      corrections, roleplay, and natural Japanese sentences.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-gray-100 bg-white p-4">
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                      Practice Mode
                    </p>
                    <div className="mt-3 grid gap-2">
                      <button className="rounded-2xl bg-orange-50 px-4 py-3 text-left text-sm font-bold text-[#FF5A1F]">
                        Daily Conversation Practice
                      </button>
                      <button className="rounded-2xl bg-gray-50 px-4 py-3 text-left text-sm font-bold text-[#202c5c]">
                        Self Introduction
                      </button>
                      <button className="rounded-2xl bg-gray-50 px-4 py-3 text-left text-sm font-bold text-[#202c5c]">
                        Correction Practice
                      </button>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-dashed border-green-200 bg-green-50 p-4">
                    <p className="text-sm font-black text-[#202c5c]">
                      AI is ready now
                    </p>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Start by typing or speaking your answer. Voice input can be
                      added in the next step.
                    </p>
                  </div>
                </div>
              </>
            )}
          </aside>
        </main>
      </div>
    </div>
  );
}