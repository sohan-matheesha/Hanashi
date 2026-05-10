"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  GraduationCap,
  BookOpenCheck,
  ArrowRight,
  Sparkles,
  Loader2,
} from "lucide-react";
import { createClient } from "@/utils/supabase/client";

export default function ChooseRolePage() {
  const router = useRouter();
  const supabase = createClient();

  const [loadingRole, setLoadingRole] = useState<"student" | "teacher" | null>(
    null
  );

  const handleChooseRole = async (role: "student" | "teacher") => {
    try {
      setLoadingRole(role);

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        alert("Please login before choosing an account type.");
        router.push("/login");
        return;
      }

      const { error } = await supabase
        .from("profiles")
        .update({
          role: role,
          email: user.email,
          teacher_verification_status: role === "teacher" ? "pending" : null,
        })
        .eq("id", user.id);

      if (error) {
        console.error("Role update error:", error);
        alert(error.message);
        return;
      }

      if (role === "student") {
        router.push("/onboarding/student-profile");
      }

      if (role === "teacher") {
        router.push("/onboarding/teacher-profile");
      }
    } catch (error) {
      console.error("Unexpected role error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoadingRole(null);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-rose-50 via-white to-pink-50">
      {/* Top Bar */}
      <header className="border-b border-rose-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-400 text-white shadow-md shadow-rose-200">
              <Sparkles size={18} />
            </div>
            <span className="text-xl font-bold text-gray-900">Hanashi</span>
          </div>

          <p className="hidden text-sm font-medium text-gray-500 sm:block">
            Choose how you want to use Hanashi
          </p>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col items-center px-6 py-16">
        {/* Heading */}
        <div className="max-w-2xl text-center">
          <div className="mx-auto mb-5 inline-flex items-center rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-600">
            Welcome to Hanashi
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            What type of account do you want to create?
          </h1>

          <p className="mt-5 text-base leading-7 text-gray-600 md:text-lg">
            Select your account type to continue. Students can start learning
            Japanese, while teachers need to submit qualification details for
            verification.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid w-full gap-6 md:grid-cols-2">
          {/* Student Card */}
          <button
            type="button"
            disabled={loadingRole !== null}
            onClick={() => handleChooseRole("student")}
            className="group rounded-3xl border border-rose-100 bg-white p-8 text-left shadow-sm transition hover:-translate-y-1 hover:border-rose-300 hover:shadow-xl hover:shadow-rose-100 disabled:cursor-not-allowed disabled:opacity-70"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-100 text-rose-500 transition group-hover:bg-rose-400 group-hover:text-white">
              <GraduationCap size={34} />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-gray-900">
              I am a Student
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Learn Japanese through structured lessons, quizzes, AI tutor
              support, cultural content, and speaking practice sessions.
            </p>

            <div className="mt-6 space-y-3">
              <div className="rounded-2xl bg-rose-50 px-4 py-3 text-sm font-medium text-gray-700">
                Beginner-friendly Japanese lessons
              </div>
              <div className="rounded-2xl bg-rose-50 px-4 py-3 text-sm font-medium text-gray-700">
                Track your learning progress
              </div>
              <div className="rounded-2xl bg-rose-50 px-4 py-3 text-sm font-medium text-gray-700">
                Practice with AI and live sessions
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <span className="font-semibold text-rose-500">
                {loadingRole === "student" ? "Saving..." : "Continue as Student"}
              </span>

              {loadingRole === "student" ? (
                <Loader2 className="animate-spin text-rose-400" />
              ) : (
                <ArrowRight className="text-rose-400 transition group-hover:translate-x-1" />
              )}
            </div>
          </button>

          {/* Teacher Card */}
          <button
            type="button"
            disabled={loadingRole !== null}
            onClick={() => handleChooseRole("teacher")}
            className="group rounded-3xl border border-pink-100 bg-white p-8 text-left shadow-sm transition hover:-translate-y-1 hover:border-pink-300 hover:shadow-xl hover:shadow-pink-100 disabled:cursor-not-allowed disabled:opacity-70"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-100 text-pink-500 transition group-hover:bg-pink-400 group-hover:text-white">
              <BookOpenCheck size={34} />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-gray-900">
              I am a Teacher
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Create Japanese lessons, manage students, conduct learning
              sessions, and support learners after qualification verification.
            </p>

            <div className="mt-6 space-y-3">
              <div className="rounded-2xl bg-pink-50 px-4 py-3 text-sm font-medium text-gray-700">
                Submit qualification details
              </div>
              <div className="rounded-2xl bg-pink-50 px-4 py-3 text-sm font-medium text-gray-700">
                Upload certificate or document
              </div>
              <div className="rounded-2xl bg-pink-50 px-4 py-3 text-sm font-medium text-gray-700">
                Admin verification before teaching
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <span className="font-semibold text-pink-500">
                {loadingRole === "teacher" ? "Saving..." : "Continue as Teacher"}
              </span>

              {loadingRole === "teacher" ? (
                <Loader2 className="animate-spin text-pink-400" />
              ) : (
                <ArrowRight className="text-pink-400 transition group-hover:translate-x-1" />
              )}
            </div>
          </button>
        </div>

        <p className="mt-8 max-w-2xl text-center text-sm text-gray-500">
          Your account type helps Hanashi provide the correct dashboard,
          profile setup, and learning or teaching experience.
        </p>
      </main>
    </div>
  );
}