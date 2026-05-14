"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowLeft,
  BookOpen,
  FileText,
  Languages,
  GraduationCap,
  RefreshCw,
  PenTool,
} from "lucide-react";

const lessonLinks = [
  {
    title: "Hiragana",
    href: "/dashboard/lessons/hiragana",
    icon: BookOpen,
  },
  {
    title: "Katakana",
    href: "/dashboard/lessons/katakana",
    icon: FileText,
  },
  {
    title: "Kanji",
    href: "/dashboard/lessons/kanji",
    icon: Languages,
  },
  {
    title: "Vocabulary",
    href: "/dashboard/lessons/vocabulary",
    icon: FileText,
  },
  {
    title: "Grammar",
    href: "/dashboard/lessons/grammar",
    icon: PenTool,
  },
  {
    title: "Review",
    href: "/dashboard/lessons/review",
    icon: RefreshCw,
  },
];

export default function LessonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideLessonsSidebar = pathname.startsWith("/dashboard/lessons/grammar");

  return (
    <div className="min-h-screen bg-[#fafafc]">
      <div className="flex min-h-screen">
        {!hideLessonsSidebar && (
          <aside className="hidden w-72 shrink-0 border-r border-gray-100 bg-white px-7 py-8 shadow-sm lg:block">
            <Link
              href="/dashboard"
              className="mb-10 inline-flex items-center gap-3 text-sm font-bold text-gray-400 transition hover:text-[#a54a5c]"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Dashboard
            </Link>

            <div className="mb-10 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4e67a6] text-white shadow-md">
                <GraduationCap className="h-7 w-7" />
              </div>

              <div>
                <h2 className="text-lg font-extrabold text-[#202c5c]">
                  Learning Path
                </h2>
                <p className="text-sm font-medium text-gray-500">
                  N5 Proficiency
                </p>
              </div>
            </div>

            <nav className="space-y-2">
              {lessonLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.title}
                    href={link.href}
                    className={`flex items-center gap-4 rounded-2xl px-3 py-4 text-base font-semibold transition ${
                      isActive
                        ? "border-2 border-blue-500 bg-white text-gray-600"
                        : "text-gray-500 hover:bg-pink-50 hover:text-[#a54a5c]"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {link.title}
                  </Link>
                );
              })}
            </nav>
          </aside>
        )}

        <main className="min-w-0 flex-1 bg-[#fafafc] px-4 py-8 md:px-10">
          {children}
        </main>
      </div>
    </div>
  );
}