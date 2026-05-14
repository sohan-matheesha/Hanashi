"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import {
  ArrowLeft,
  Bot,
  CalendarDays,
  Camera,
  Clock,
  ExternalLink,
  MessageCircle,
  Mic,
  MicOff,
  PhoneOff,
  Search,
  Users,
  Video,
  VideoOff,
  Wifi,
} from "lucide-react";

declare global {
  interface Window {
    JitsiMeetExternalAPI: any;
  }
}

type LiveSession = {
  id: string;
  title: string;
  session_type: string;
  session_date: string;
  session_time: string;
  meeting_link: string | null;
  description: string | null;
};

const sideItems = [
  {
    id: "live",
    label: "Live Practice",
    icon: Video,
  },
  {
    id: "ai",
    label: "AI Partner",
    icon: Bot,
  },
];

const modes = [
  { id: "video", label: "Video Call", icon: Video },
  { id: "voice", label: "Voice Call", icon: Mic },
  { id: "chat", label: "Text Chat", icon: MessageCircle },
  { id: "ai", label: "AI Partner", icon: Bot },
];

const learners = [
  {
    id: 1,
    name: "Practice Partner 1",
    level: "N5",
    topic: "Basic Self Introduction",
    mode: "Voice + Video",
    initial: "P",
    color: "bg-pink-100 text-pink-600",
  },
  {
    id: 2,
    name: "Practice Partner 2",
    level: "N5",
    topic: "Greetings Practice",
    mode: "Voice Only",
    initial: "P",
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 3,
    name: "Practice Partner 3",
    level: "N4",
    topic: "Shopping and Food",
    mode: "Video + Chat",
    initial: "P",
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 4,
    name: "AI Practice Partner",
    level: "Beginner",
    topic: "Daily Japanese Conversation",
    mode: "AI Partner",
    initial: "A",
    color: "bg-emerald-100 text-emerald-600",
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
  {
    jp: "ゆっくり話してください。",
    en: "Please speak slowly.",
  },
];

function JitsiCallRoom({
  roomName,
  displayName,
  selectedMode,
}: {
  roomName: string;
  displayName: string;
  selectedMode: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let api: any;
    let cancelled = false;

    const loadScript = () => {
      return new Promise<void>((resolve, reject) => {
        if (window.JitsiMeetExternalAPI) {
          resolve();
          return;
        }

        const existingScript = document.querySelector(
          'script[src="https://meet.jit.si/external_api.js"]',
        );

        if (existingScript) {
          existingScript.addEventListener("load", () => resolve());
          existingScript.addEventListener("error", () =>
            reject(new Error("Jitsi script failed to load")),
          );
          return;
        }

        const script = document.createElement("script");
        script.src = "https://meet.jit.si/external_api.js";
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () =>
          reject(new Error("Jitsi script failed to load"));
        document.body.appendChild(script);
      });
    };

    loadScript()
      .then(() => {
        if (cancelled || !containerRef.current) return;

        containerRef.current.innerHTML = "";

        api = new window.JitsiMeetExternalAPI("meet.jit.si", {
          roomName,
          parentNode: containerRef.current,
          width: "100%",
          height: "100%",
          userInfo: {
            displayName,
          },
          configOverwrite: {
            prejoinPageEnabled: false,
            startWithAudioMuted: false,
            startWithVideoMuted: selectedMode === "voice",
          },
          interfaceConfigOverwrite: {
            SHOW_JITSI_WATERMARK: false,
            SHOW_WATERMARK_FOR_GUESTS: false,
          },
        });
      })
      .catch((error) => {
        console.error("Jitsi load error:", error);
      });

    return () => {
      cancelled = true;

      if (api) {
        api.dispose();
      }
    };
  }, [roomName, displayName, selectedMode]);

  return (
    <div className="h-[520px] w-full overflow-hidden rounded-[28px] bg-black md:h-[610px]">
      <div ref={containerRef} className="h-full w-full" />
    </div>
  );
}

export default function ConversationPage() {
  const [activeSideItem, setActiveSideItem] = useState("live");
  const [selectedMode, setSelectedMode] = useState("video");
  const [selectedLearnerId, setSelectedLearnerId] = useState(1);
  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);
  const [liveSessions, setLiveSessions] = useState<LiveSession[]>([]);
  const [sessionsLoading, setSessionsLoading] = useState(true);

  useEffect(() => {
    const loadLiveSessions = async () => {
      const supabase = createClient();

      const { data, error } = await supabase
        .from("teacher_live_sessions")
        .select(
          "id, title, session_type, session_date, session_time, meeting_link, description",
        )
        .order("session_date", { ascending: true })
        .order("session_time", { ascending: true });

      if (error) {
        console.error("Live sessions load error:", error);
        setLiveSessions([]);
      } else {
        setLiveSessions(data || []);
      }

      setSessionsLoading(false);
    };

    loadLiveSessions();
  }, []);

  const selectedLearner =
    learners.find((learner) => learner.id === selectedLearnerId) || learners[0];

  const selectedModeLabel = useMemo(() => {
    return modes.find((mode) => mode.id === selectedMode)?.label || "Video Call";
  }, [selectedMode]);

  const safeTopic = selectedLearner.topic
    .toLowerCase()
    .replaceAll(" ", "-")
    .replace(/[^a-z0-9-]/g, "");

  const roomName = `hanashi-fyp-nsbm-2026-${safeTopic}-partner-${selectedLearner.id}`;

  return (
    <div className="min-h-screen bg-[#f6f7fb] text-[#202c5c]">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="hidden border-r border-gray-100 bg-white px-5 py-6 lg:flex lg:flex-col">
          <Link
            href="/dashboard"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-gray-400 transition hover:text-[#202c5c]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>

          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff5a2f] text-white shadow-sm">
              <MessageCircle className="h-7 w-7" />
            </div>

            <div>
              <h1 className="text-xl font-extrabold text-[#202c5c]">
                Hanashi
              </h1>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-400">
                Speaking Room
              </p>
            </div>
          </div>

          <nav className="space-y-3">
            {sideItems.map((item) => {
              const Icon = item.icon;
              const active = activeSideItem === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSideItem(item.id);

                    if (item.id === "ai") {
                      setSelectedMode("ai");
                    }

                    if (item.id === "live") {
                      setSelectedMode("video");
                    }
                  }}
                  className={`flex w-full items-center gap-4 rounded-2xl px-4 py-4 text-left text-sm font-bold transition ${
                    active
                      ? "bg-[#fff1ea] text-[#ff5a2f]"
                      : "text-gray-500 hover:bg-gray-50 hover:text-[#202c5c]"
                  }`}
                  type="button"
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="mt-auto space-y-4">
            <div className="rounded-3xl bg-[#f7f8fc] p-5">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-lg font-extrabold text-emerald-700">
                  N5
                </div>

                <div>
                  <p className="text-sm font-extrabold text-[#202c5c]">
                    Beginner Practice
                  </p>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                    Speaking Support
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/dashboard"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#ff5b5b] px-5 py-4 text-sm font-extrabold text-white transition hover:bg-red-500"
            >
              <PhoneOff className="h-4 w-4" />
              Leave Room
            </Link>
          </div>
        </aside>

        <main className="px-4 py-6 md:px-6 xl:px-8">
          <div className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <Link
                href="/dashboard"
                className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-[#202c5c] lg:hidden"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Dashboard
              </Link>

              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#ff6b2d]">
                Conversation Practice
              </p>

              <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-[#202c5c] md:text-4xl">
                Japanese Speaking Practice
              </h1>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                  Beginner Friendly
                </span>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                  {learners.length} Practice Options
                </span>
                <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-700">
                  {selectedModeLabel}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 shadow-sm ring-1 ring-emerald-100">
                <Wifi className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div className="mb-6 flex flex-wrap gap-3">
            {modes.map((mode) => {
              const Icon = mode.icon;
              const isActive = selectedMode === mode.id;

              return (
                <button
                  key={mode.id}
                  onClick={() => {
                    setSelectedMode(mode.id);

                    if (mode.id === "ai") {
                      setActiveSideItem("ai");
                    } else {
                      setActiveSideItem("live");
                    }
                  }}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                    isActive
                      ? "bg-[#202c5c] text-white shadow-md"
                      : "bg-white text-gray-600 ring-1 ring-gray-100 hover:bg-gray-50"
                  }`}
                  type="button"
                >
                  <Icon className="h-4 w-4" />
                  {mode.label}
                </button>
              );
            })}
          </div>

          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.7fr)_360px]">
            <div className="space-y-6">
              <div className="overflow-hidden rounded-[32px] border border-gray-100 bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
                  <div>
                    <p className="text-sm font-bold text-[#202c5c]">
                      Japanese Practice Session
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Topic: {selectedLearner.topic}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-700">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Jitsi Live Room
                  </div>
                </div>

                <div className="bg-[#0e1220] p-4 md:p-5">
                  {selectedMode === "ai" ? (
                    <div className="flex min-h-[520px] items-center justify-center rounded-[28px] bg-[#101827] p-6 text-center md:min-h-[610px]">
                      <div>
                        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                          <Bot className="h-10 w-10" />
                        </div>
                        <h2 className="text-2xl font-extrabold text-white">
                          AI Partner Mode
                        </h2>
                        <p className="mt-3 max-w-md text-sm text-white/70">
                          Use your AI tutor chat for Japanese practice. Live Jitsi
                          calls are available from Video Call or Voice Call modes.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <JitsiCallRoom
                      roomName={roomName}
                      displayName="Hanashi Student"
                      selectedMode={selectedMode}
                    />
                  )}

                  <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={() => setMicOn((prev) => !prev)}
                      className={`flex h-12 w-12 items-center justify-center rounded-full transition ${
                        micOn
                          ? "bg-white text-[#202c5c] hover:bg-gray-100"
                          : "bg-red-100 text-red-600 hover:bg-red-200"
                      }`}
                      type="button"
                    >
                      {micOn ? (
                        <Mic className="h-5 w-5" />
                      ) : (
                        <MicOff className="h-5 w-5" />
                      )}
                    </button>

                    <button
                      onClick={() => setCameraOn((prev) => !prev)}
                      className={`flex h-12 w-12 items-center justify-center rounded-full transition ${
                        cameraOn
                          ? "bg-white text-[#202c5c] hover:bg-gray-100"
                          : "bg-red-100 text-red-600 hover:bg-red-200"
                      }`}
                      type="button"
                    >
                      {cameraOn ? (
                        <Camera className="h-5 w-5" />
                      ) : (
                        <VideoOff className="h-5 w-5" />
                      )}
                    </button>

                    <Link
                      href="/dashboard"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff5b5b] text-white transition hover:bg-[#ef4444]"
                    >
                      <PhoneOff className="h-5 w-5" />
                    </Link>
                  </div>

                  <p className="mt-3 text-center text-xs text-white/50">
                    Jitsi controls are inside the call window. Use the buttons
                    inside Jitsi for real mute, camera, screen share, and leave.
                  </p>
                </div>
              </div>

              <div className="rounded-[32px] border border-gray-100 bg-white p-5 shadow-sm">
                <div className="mb-5">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#ff6b2d]">
                    Useful Japanese Phrases
                  </p>
                  <h2 className="mt-2 text-xl font-extrabold text-[#202c5c]">
                    Quick Speaking Support
                  </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  {usefulPhrases.map((phrase) => (
                    <div
                      key={phrase.jp}
                      className="rounded-[24px] bg-[#f8f9fc] p-4 transition hover:bg-[#f2f4f9]"
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-400">
                        Useful Phrase
                      </p>

                      <p className="mt-4 text-xl font-bold text-[#202c5c]">
                        {phrase.jp}
                      </p>

                      <p className="mt-2 text-sm text-gray-500">
                        {phrase.en}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="h-fit space-y-5">
              <div className="rounded-[32px] bg-white p-5 shadow-sm">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 text-[#a54a5c]">
                    <CalendarDays className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a54a5c]">
                      Teacher Sessions
                    </p>
                    <h2 className="text-xl font-extrabold text-[#202c5c]">
                      Upcoming Live Sessions
                    </h2>
                  </div>
                </div>

                {sessionsLoading ? (
                  <div className="rounded-3xl border border-dashed border-pink-100 bg-pink-50/50 p-5 text-center">
                    <p className="text-sm font-semibold text-gray-500">
                      Loading live sessions...
                    </p>
                  </div>
                ) : liveSessions.length === 0 ? (
                  <div className="rounded-3xl border border-dashed border-pink-100 bg-pink-50/50 p-5 text-center">
                    <p className="text-sm font-semibold text-gray-500">
                      No teacher live sessions available yet.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {liveSessions.map((session) => (
                      <div
                        key={session.id}
                        className="rounded-3xl border border-pink-100 bg-pink-50/40 p-4"
                      >
                        <div className="mb-3 flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#a54a5c]">
                            {session.session_type}
                          </span>

                          <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-bold text-gray-600">
                            <Clock className="h-3 w-3" />
                            {session.session_date} • {session.session_time}
                          </span>
                        </div>

                        <h3 className="font-extrabold text-[#202c5c]">
                          {session.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-gray-500">
                          {session.description ||
                            "Join this teacher-led Japanese practice session."}
                        </p>

                        {session.meeting_link ? (
                          <a
                            href={session.meeting_link}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#a54a5c] px-4 py-3 text-sm font-extrabold text-white transition hover:bg-[#8f3d4e]"
                          >
                            Join Session
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        ) : (
                          <p className="mt-4 rounded-2xl bg-white p-3 text-xs font-bold text-gray-500">
                            Meeting link not added yet.
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="rounded-[32px] bg-white p-5 shadow-sm">
                <div className="mb-5">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-green-500">
                    Practice Lobby
                  </p>
                  <h2 className="mt-2 text-xl font-extrabold text-[#202c5c]">
                    Choose Practice Mode
                  </h2>
                </div>

                <div className="mb-5 flex items-center gap-4 rounded-3xl bg-green-50 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-green-600">
                    <Users className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="font-extrabold text-[#202c5c]">
                      {learners.length} practice options
                    </p>
                    <p className="text-sm text-gray-500">
                      Select a partner or use the AI partner.
                    </p>
                  </div>
                </div>

                <div className="mb-4 flex items-center gap-3 rounded-full bg-[#f7f8fc] px-4 py-3">
                  <Search className="h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search practice options..."
                    className="w-full bg-transparent text-sm text-[#202c5c] placeholder:text-gray-400 focus:outline-none"
                  />
                </div>

                <div className="space-y-4">
                  {learners.map((learner) => {
                    const active = learner.id === selectedLearnerId;

                    return (
                      <div
                        key={learner.id}
                        className={`rounded-3xl border p-4 transition ${
                          active
                            ? "border-[#202c5c] bg-[#f8f9fd]"
                            : "border-gray-100 bg-white hover:border-gray-200"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold ${learner.color}`}
                          >
                            {learner.initial}
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center justify-between gap-2">
                              <h3 className="font-extrabold text-[#202c5c]">
                                {learner.name}
                              </h3>

                              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-600">
                                Available
                              </span>
                            </div>

                            <p className="mt-1 text-sm font-medium text-gray-400">
                              Level {learner.level} • {learner.mode}
                            </p>
                          </div>
                        </div>

                        <div className="mt-4 rounded-2xl bg-[#f7f8fb] p-3">
                          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
                            Practice topic
                          </p>
                          <p className="mt-2 font-bold text-[#202c5c]">
                            {learner.topic}
                          </p>
                        </div>

                        <div className="mt-4 grid grid-cols-2 gap-3">
                          <button
                            onClick={() => {
                              setSelectedLearnerId(learner.id);
                              setSelectedMode("voice");
                              setActiveSideItem(
                                learner.mode === "AI Partner" ? "ai" : "live",
                              );
                            }}
                            className="flex items-center justify-center gap-2 rounded-full bg-[#ff5a2f] py-3 text-sm font-bold text-white transition hover:bg-[#f25c1c]"
                            type="button"
                          >
                            <Mic className="h-4 w-4" />
                            Voice
                          </button>

                          <button
                            onClick={() => {
                              setSelectedLearnerId(learner.id);
                              setSelectedMode(
                                learner.mode === "AI Partner" ? "ai" : "video",
                              );
                              setActiveSideItem(
                                learner.mode === "AI Partner" ? "ai" : "live",
                              );
                            }}
                            className="flex items-center justify-center gap-2 rounded-full bg-[#202c5c] py-3 text-sm font-bold text-white transition hover:bg-[#2c3a78]"
                            type="button"
                          >
                            {learner.mode === "AI Partner" ? (
                              <Bot className="h-4 w-4" />
                            ) : (
                              <Video className="h-4 w-4" />
                            )}
                            {learner.mode === "AI Partner" ? "AI" : "Video"}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}