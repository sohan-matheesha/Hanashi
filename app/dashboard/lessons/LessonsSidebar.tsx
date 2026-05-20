"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowLeft,
  BookOpen,
  FileText,
  Languages,
  PenTool,
  RefreshCw,
  GraduationCap,
  BookText,
} from "lucide-react";

export default function LessonsSidebar() {
  const pathname = usePathname();

  const isLessonsHome = pathname === "/dashboard/lessons";

  const backHref = isLessonsHome ? "/dashboard" : "/dashboard/lessons";
  const backLabel = isLessonsHome ? "Back to Dashboard" : "Back to Lessons";

  const links = [
    { name: "Hiragana", href: "/dashboard/lessons/hiragana", icon: BookOpen },
    { name: "Katakana", href: "/dashboard/lessons/katakana", icon: FileText },
    { name: "Kanji", href: "/dashboard/lessons/kanji", icon: Languages },
    { name: "Vocabulary", href: "/dashboard/lessons/vocabulary", icon: BookText },
    { name: "Grammar", href: "/dashboard/lessons/grammar", icon: PenTool },
    { name: "Review", href: "/dashboard/lessons/review", icon: RefreshCw },
  ];

  return (
    <aside className="fixed left-0 top-22 z-10 flex h-[calc(100vh-88px)] w-60 flex-col border-r border-gray-100 bg-[#f4f5f7] lg:flex">
      <div className="p-6">
        <Link
          href={backHref}
          className="mb-7 flex items-center gap-3 text-sm font-bold text-gray-400 transition-all duration-300 hover:-translate-x-1 hover:text-[#4d6096]"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>{backLabel}</span>
        </Link>

        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-[#4d6096] p-2.5 text-white shadow-sm">
            <GraduationCap className="h-7 w-7" />
          </div>

          <div>
            <h2 className="text-[15px] font-bold leading-tight text-[#202c5c]">
              Learning Path
            </h2>
            <p className="text-[13px] font-medium text-gray-500">
              N5 Proficiency
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 px-3 py-1">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = pathname.startsWith(link.href);

          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-4 rounded-2xl px-4 py-3 transition-all duration-300 ease-out hover:scale-[1.03] ${
                isActive
                  ? "bg-white font-bold text-[#2a3b7c] shadow-sm"
                  : "font-medium text-gray-500 hover:bg-white/50 hover:text-[#2a3b7c]"
              }`}
            >
              <Icon className="h-4 w-4" strokeWidth={2.5} />
              <span>{link.name}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}