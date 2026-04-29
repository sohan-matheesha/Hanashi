"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Bot, Send, X, Minus, Volume2, Square } from "lucide-react";

export default function FloatingAIButton() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const hiddenPaths = ["/", "/login", "/register"];

  const shouldHide = hiddenPaths.some((path) => pathname === path);

  if (shouldHide) {
    return null;
  }

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

 function speakText(text: string) {
  if (!text) return;

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);

  const voices = window.speechSynthesis.getVoices();

  const smoothVoice =
    voices.find((voice) => voice.name.includes("Samantha")) ||
    voices.find((voice) => voice.name.includes("Google US English")) ||
    voices.find((voice) => voice.name.includes("Microsoft Aria")) ||
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
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[92vw] max-w-[390px] overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between bg-[#FF5A1F] px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <Bot size={22} />
              <div>
                <h2 className="text-sm font-bold">Hanashi AI Tutor</h2>
                <p className="text-xs text-white/80">
                  Ask anything about Japanese
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 hover:bg-white/20"
                aria-label="Minimize AI Tutor"
              >
                <Minus size={18} />
              </button>

              <button
                onClick={() => {
                  stopSpeaking();
                  setIsOpen(false);
                  setMessage("");
                  setReply("");
                }}
                className="rounded-full p-1 hover:bg-white/20"
                aria-label="Close AI Tutor"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="max-h-[420px] overflow-y-auto p-4">
            <div className="mb-3 rounded-2xl bg-[#fff7f2] p-3 text-xs text-gray-700">
              Ask in Sinhala, English, or Japanese. Example: I am learning
              Japanese.
            </div>

            <textarea
              className="h-24 w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-800 outline-none focus:border-[#FF5A1F] focus:bg-white"
              placeholder="Type your question..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button
              onClick={handleSend}
              disabled={loading}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#FF5A1F] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send size={16} />
              {loading ? "Checking..." : "Ask AI"}
            </button>

            {reply && (
              <div className="mt-4 rounded-2xl border border-orange-100 bg-[#fff7f2] p-4">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="text-sm font-bold text-[#2d2424]">
                    AI Answer
                  </h3>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => speakText(reply)}
                      className="flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#FF5A1F] shadow-sm hover:bg-orange-50"
                    >
                      <Volume2 size={14} />
                      Listen
                    </button>

                    <button
                      onClick={stopSpeaking}
                      className="flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-gray-600 shadow-sm hover:bg-gray-50"
                    >
                      <Square size={12} />
                      Stop
                    </button>
                  </div>
                </div>

                <pre className="whitespace-pre-wrap font-sans text-xs leading-5 text-gray-800">
                  {reply}
                </pre>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating Icon */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#FF5A1F] text-white shadow-lg transition hover:scale-105 hover:shadow-xl"
        aria-label="Open AI Tutor"
      >
        <Bot size={28} />
      </button>
    </>
  );
}