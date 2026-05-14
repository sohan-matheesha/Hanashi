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
  Sparkles,
  Flame,
  ChevronRight,
  Castle,
} from "lucide-react";

type UserRole = "student" | "teacher" | "admin" | null;

export default function MainSidebar({ role }: { role: UserRole }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

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
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-4 z-40 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-[#120a3d]/90 text-white shadow-lg backdrop-blur-xl md:hidden"
        aria-label="Toggle sidebar"
        type="button"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {isOpen && (
        <button
          className="fixed inset-0 z-20 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
          aria-label="Close sidebar"
          type="button"
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-30 flex h-screen w-[282px] flex-col overflow-hidden border-r border-white/10 bg-[#060b2d] text-white shadow-[20px_0_70px_rgba(4,7,35,0.45)] transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.24),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.28),transparent_40%)]" />
        <div className="pointer-events-none absolute bottom-8 right-4 text-6xl opacity-10">
          🌸
        </div>
        <div className="pointer-events-none absolute right-8 top-24 text-5xl opacity-10">
          花
        </div>

        <div className="relative z-10 flex h-full flex-col">
          {/* Logo */}
          <div className="px-7 pb-5 pt-8">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/90 text-[#7c3aed] shadow-lg">
                <Castle className="h-7 w-7" />
              </div>

              <h1 className="text-2xl font-extrabold tracking-tight text-white">
                Hanashi{" "}
                <span className="font-semibold text-purple-200">(話し)</span>
              </h1>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="relative z-10 flex flex-col gap-2 px-5 py-4">
            {navLinks.map(({ href, icon: Icon, label, exact }) => {
              const isActive = exact
                ? pathname === href
                : pathname.startsWith(href);

              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center gap-4 rounded-2xl px-4 py-3.5 text-[15px] transition-all ${
                    isActive
                      ? "bg-linear-to-r from-[#7c3aed] to-[#4c1d95] font-extrabold text-white shadow-[0_16px_35px_rgba(124,58,237,0.35)]"
                      : "font-semibold text-purple-100/90 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-xl transition ${
                      isActive
                        ? "bg-white/16 text-white"
                        : "text-purple-100 group-hover:bg-white/10"
                    }`}
                  >
                    <Icon className="h-[19px] w-[19px]" />
                  </span>

                  <span className="leading-tight">{label}</span>

                  {isActive && (
                    <ChevronRight className="ml-auto h-4 w-4 text-white/80" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Bottom profile card */}
          <div className="relative z-10 mt-auto space-y-4 p-5">
            <div className="rounded-3xl border border-white/10 bg-white/8 p-4 shadow-lg backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-[#ec4899] to-[#7c3aed] text-lg font-extrabold text-white shadow-lg">
                  H
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-extrabold text-white">
                    Hanashi User
                  </p>
                  <p className="mt-0.5 text-xs capitalize text-purple-100">
                    {role ?? "student"}
                  </p>
                </div>

                <ChevronRight className="h-4 w-4 text-purple-100" />
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/8 p-4 shadow-lg backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-300">
                  <Flame className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-lg font-extrabold text-white">7</p>
                  <p className="text-xs font-medium text-purple-100">
                    Day Streak
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}