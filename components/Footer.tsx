import Link from "next/link";
import { Castle, BookOpen, MessageCircle, CheckCircle2, Globe } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#features" },
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
  ];

  const platformLinks = [
    { name: "Lessons", href: "/dashboard/lessons", icon: BookOpen },
    { name: "Conversation Practice", href: "/dashboard/conversation", icon: MessageCircle },
    { name: "Quizzes", href: "/dashboard/quizzes", icon: CheckCircle2 },
    { name: "Cultural Hub", href: "/dashboard/cultural-hub", icon: Globe },
  ];

  return (
    <footer className="relative z-10 mt-12 border-t border-white/10 bg-black/40 px-6 py-12 text-white backdrop-blur-md md:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-[1.5fr_1fr_1.2fr]">
        {/* Brand */}
        <div>
          <Link href="/" className="mb-5 flex items-center gap-2">
            <Castle className="h-6 w-6 text-pink-300" />
            <span className="text-2xl font-extrabold tracking-tight">
              Hanashi <span className="text-xl font-medium opacity-80">(話し)</span>
            </span>
          </Link>

          <p className="max-w-md text-sm leading-7 text-gray-300">
            Hanashi is a Japanese language practice platform designed for
            beginners. It supports structured lessons, quizzes, cultural
            learning, AI tutor assistance, and conversation-based practice.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-pink-300">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm font-medium text-gray-300">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="transition hover:text-pink-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Platform */}
        <div>
          <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-pink-300">
            Platform
          </h3>

          <ul className="space-y-3 text-sm font-medium text-gray-300">
            {platformLinks.map((link) => {
              const Icon = link.icon;

              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 transition hover:text-pink-300"
                  >
                    <Icon className="h-4 w-4" />
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Hanashi. Final Year Project — Japanese
          Language Practice Platform.
        </p>
      </div>
    </footer>
  );
}