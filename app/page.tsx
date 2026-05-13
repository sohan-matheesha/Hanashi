import Link from "next/link";
import { BookOpen, Mic, Globe, Gamepad2, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SakuraHero from "@/components/SakuraHero";

export default function Home() {
  const features = [
    {
      title: "Structured Lessons",
      description:
        "Learn Japanese step by step with beginner-friendly lessons such as Hiragana, Katakana, vocabulary, and grammar.",
      icon: BookOpen,
    },
    {
      title: "Conversation Practice",
      description:
        "Practise speaking through chat, voice, and video-based learning activities designed to improve confidence.",
      icon: Mic,
    },
    {
      title: "Cultural Learning",
      description:
        "Explore Japanese culture, daily life, manners, and useful context behind the language.",
      icon: Globe,
    },
    {
      title: "Quizzes & Progress",
      description:
        "Test your knowledge with quizzes and track your learning progress as you complete activities.",
      icon: Gamepad2,
    },
  ];

  return (
    <main className="font-sans min-h-screen relative overflow-hidden text-white">
      {/* Full Page Background */}
      <div className="fixed inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/sakura-night.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <Navbar />

      <SakuraHero />

      {/* Features Section */}
      <section id="features" className="relative z-10 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-pink-300">
              Hanashi Learning Platform
            </p>

            <h2 className="mb-5 text-3xl font-black leading-tight md:text-5xl">
              Learn Japanese in a simple and practical way
            </h2>

            <p className="text-base leading-8 text-gray-200 md:text-lg">
              Hanashi is a Japanese language practice platform designed for
              beginners, especially students who want to improve reading,
              vocabulary, grammar, speaking confidence, and cultural knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-white/10 bg-white/10 p-7 shadow-xl backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/15"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-pink-300/20 bg-pink-500/20 text-pink-200">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-white">
                    {feature.title}
                  </h3>

                  <p className="text-sm leading-7 text-gray-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="relative z-10 px-4 py-12 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl rounded-4xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-md md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-center">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-pink-300">
                Beginner Path
              </p>

              <h2 className="mb-4 text-3xl font-black md:text-4xl">
                Start from the basics and build confidence
              </h2>

              <p className="leading-8 text-gray-200">
                The platform guides learners through essential Japanese topics
                such as characters, vocabulary, grammar, quizzes, and practical
                communication activities.
              </p>
            </div>

            <div className="grid gap-3">
              {[
                "Learn Hiragana and Katakana",
                "Practise basic vocabulary and grammar",
                "Complete quizzes to check understanding",
                "Use AI tutor support for Japanese practice",
                "Improve confidence through conversation activities",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pink-500 text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="text-sm font-medium text-gray-100 md:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-4 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-4xl rounded-4xl border border-white/10 bg-white/10 p-8 text-center shadow-2xl backdrop-blur-md md:p-12">
          <h2 className="mb-4 text-3xl font-black md:text-5xl">
            Ready to start learning?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl leading-8 text-gray-200">
            Create an account and begin practising Japanese through lessons,
            quizzes, cultural content, and conversation-based activities.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-pink-500 px-7 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-pink-600"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/20"
            >
              Login
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}