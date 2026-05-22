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
  ];

  return (
    <aside className="fixed left-0 top-0 z-30 hidden h-screen w-60 flex-col border-r border-slate-100 bg-white/95 px-6 py-8 shadow-sm backdrop-blur lg:flex">
      <Link
        href={backHref}
        className="mb-10 flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-[#b74b6b]"
      >
        <ArrowLeft size={16} />
        {backLabel}
      </Link>

      <div className="mb-10 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#202c5c] text-white shadow-md">
          <GraduationCap size={26} />
        </div>
        <div>
          <h2 className="text-base font-bold text-[#202c5c]">Learning Path</h2>
          <p className="text-sm text-slate-500">N5 Proficiency</p>
        </div>
      </div>

      <nav className="space-y-2">
        {links.map((item) => {
          const Icon = item.icon;
          const isActive = pathname.startsWith(item.href);

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition hover:bg-[#fff1f6] hover:text-[#b74b6b] ${
                isActive ? "bg-[#fff1f6] text-[#b74b6b]" : "text-slate-600"
              }`}
            >
              <Icon size={19} className="text-slate-500 transition group-hover:text-[#b74b6b]" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}