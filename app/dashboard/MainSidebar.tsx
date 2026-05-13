"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  MessageCircle,
  CheckCircle2,
  Globe,
  Trophy,
  Menu,
  X,
  Library,
  GraduationCap,
  ShieldCheck,
  PlayCircle,
  Headphones,
  Sparkles,
} from "lucide-react";

type UserRole = "student" | "teacher" | "admin" | null;

export default function MainSidebar({ role }: { role: UserRole }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Hide this main sidebar when inside lesson pages.
  // Lesson pages use their own lesson sidebar.
  if (pathname.startsWith("/dashboard/lessons")) {
    return null;
  }

  const navLinks = [
    {
      href: "/dashboard",
      icon: LayoutDashboard,
      label: "Overview",
      exact: true,
    },
    {
      href: "/dashboard/lessons",
      icon: BookOpen,
      label: "Lessons",
    },
    {
      href: "/dashboard/video-lessons",
      icon: PlayCircle,
      label: "Video Lessons",
    },
    {
      href: "/dashboard/listening",
      icon: Headphones,
      label: "Listening Practice",
    },
    {
      href: "/dashboard/conversation",
      icon: MessageCircle,
      label: "Conversation Practice",
    },
    {
      href: "/dashboard/quizzes",
      icon: CheckCircle2,
      label: "Quizzes",
    },
    {
      href: "/dashboard/lessons/vocabulary",
      icon: Library,
      label: "Vocabulary",
    },
    {
      href: "/dashboard/cultural-hub",
      icon: Globe,
      label: "Cultural Hub",
    },
    {
      href: "/dashboard/achievements",
      icon: Trophy,
      label: "Achievements",
    },

    ...(role === "teacher" || role === "admin"
      ? [
          {
            href: "/dashboard/teacher",
            icon: GraduationCap,
            label: "Teacher Panel",
          },
        ]
      : []),

    ...(role === "admin"
      ? [
          {
            href: "/dashboard/admin",
            icon: ShieldCheck,
            label: "Admin Panel",
          },
        ]
      : []),
  ];

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-[22px] z-30 flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-[#202c5c] shadow-sm md:hidden"
        aria-label="Toggle sidebar"
        type="button"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <button
          className="fixed inset-0 z-10 bg-black/30 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
          aria-label="Close sidebar"
          type="button"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed z-20 flex h-full w-[260px] flex-col border-r border-gray-100 bg-[#f4f5f7] transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Header Section */}
        <div className="border-b border-white px-8 pb-6 pt-10">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#a54a5c] text-white shadow-sm">
              <Sparkles className="h-6 w-6" />
            </div>

            <div>
              <h2 className="text-[15px] font-bold leading-tight text-[#202c5c]">
                Hanashi
              </h2>
              <p className="text-xs font-medium text-gray-500">
                Learning Dashboard
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#a54a5c]">
              Current Level
            </p>
            <p className="mt-1 text-sm font-bold text-[#202c5c]">
              Beginner Japanese
            </p>
            <p className="mt-2 text-xs leading-5 text-gray-500">
              Learn through lessons, quizzes, listening, videos, and
              conversation practice.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map(({ href, icon: Icon, label, exact }) => {
            const isActive = exact
              ? pathname === href
              : pathname.startsWith(href);

            return (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-4 rounded-2xl px-4 py-3 transition-all ${
                  isActive
                    ? "bg-[#a54a5c] font-bold text-white shadow-sm"
                    : "font-medium text-[#59668d] hover:bg-white"
                }`}
              >
                <Icon className="h-[18px] w-[18px]" />
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom Note */}
        <div className="mt-auto p-6">
          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <p className="text-xs font-bold text-[#202c5c]">
              Daily practice matters
            </p>
            <p className="mt-1 text-xs leading-5 text-gray-500">
              Continue practising Japanese step by step with Hanashi.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}