"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  CalendarDays,
  GraduationCap,
  Loader2,
  Send,
  ShieldCheck,
  Users,
  BarChart3,
} from "lucide-react";

const teacherFeatures = [
  {
    title: "Manage Lessons",
    description: "Create and manage Japanese learning materials for students.",
    icon: BookOpen,
    status: "Open",
    href: "/dashboard/teacher/lessons",
  },
  {
    title: "Live Sessions",
    description:
      "Plan live learning sessions and conversation practice activities.",
    icon: CalendarDays,
    status: "Open",
    href: "/dashboard/teacher/live-sessions",
  },
  {
    title: "Student Support",
    description:
      "Support learners by providing guidance, practice tasks, and feedback.",
    icon: Users,
    status: "Open",
    href: "/dashboard/teacher/students",
  },
  {
    title: "Progress Review",
    description:
      "Review student learning progress and quiz-based practice results.",
    icon: BarChart3,
    status: "Open",
    href: "/dashboard/teacher/progress",
  },
];

export default function TeacherPage() {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      full_name: formData.get("full_name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      qualification: formData.get("qualification"),
      experience: formData.get("experience"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/teacher-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.error || "Something went wrong. Please try again.");
        return;
      }

      setSuccessMessage(
        "Your teacher approval request has been submitted successfully. Please wait for admin review."
      );
      form.reset();
    } catch (error) {
      console.error(error);
      alert("Failed to submit teacher request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#fafafc] px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <section className="mb-8 rounded-3xl bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#a54a5c]">
                Teacher Panel
              </p>

              <h1 className="text-3xl font-extrabold tracking-tight text-[#202c5c] md:text-5xl">
                Teacher verification and learning management
              </h1>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-500 md:text-base">
                Teachers can support students by managing learning materials,
                planning practice activities, and guiding beginner Japanese
                learners. New teachers must submit an approval request before
                gaining access to teaching tools.
              </p>
            </div>

            <div className="rounded-3xl bg-[#fafafc] p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#202c5c] text-white">
                  <ShieldCheck className="h-6 w-6" />
                </div>

                <div>
                  <h2 className="text-xl font-extrabold text-[#202c5c]">
                    Approval Required
                  </h2>
                  <p className="text-sm text-gray-500">
                    Admin review protects content quality
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  "Submit teacher details",
                  "Admin reviews the request",
                  "Approved teachers access teaching tools",
                  "Teachers manage learning content",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-white p-3"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pink-100 text-sm font-extrabold text-[#a54a5c]">
                      {index + 1}
                    </div>
                    <p className="text-sm font-semibold text-gray-600">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Clickable Teacher Feature Cards */}
        <section className="mb-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {teacherFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <Link
                key={feature.title}
                href={feature.href}
                className="group rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-[#a54a5c]">
                  <Icon className="h-7 w-7" />
                </div>

                <h2 className="text-xl font-extrabold text-[#202c5c]">
                  {feature.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {feature.description}
                </p>

                <span className="mt-5 inline-flex rounded-full bg-[#fafafc] px-3 py-1 text-xs font-bold text-[#a54a5c]">
                  {feature.status}
                </span>

                <p className="mt-4 text-sm font-bold text-[#a54a5c] transition group-hover:translate-x-1">
                  Open →
                </p>
              </Link>
            );
          })}
        </section>

        {/* Request Form */}
        <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
          <div className="mb-8">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#a54a5c] text-white">
              <GraduationCap className="h-7 w-7" />
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a54a5c]">
              Teacher Verification
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-[#202c5c]">
              Submit Teacher Approval Request
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-500">
              Fill in your teaching details. After submitting, the admin can
              review the request before approving teacher access.
            </p>
          </div>

          {successMessage && (
            <div className="mb-6 rounded-2xl border border-green-100 bg-green-50 p-4 text-sm font-semibold text-green-700">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid gap-5 lg:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-bold text-gray-700">
                Full Name
              </label>
              <input
                name="full_name"
                type="text"
                required
                placeholder="Enter your full name"
                className="w-full rounded-2xl border border-gray-200 bg-[#fafafc] px-4 py-3 text-sm outline-none transition focus:border-[#a54a5c] focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-gray-700">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-2xl border border-gray-200 bg-[#fafafc] px-4 py-3 text-sm outline-none transition focus:border-[#a54a5c] focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-gray-700">
                Phone Number
              </label>
              <input
                name="phone"
                type="text"
                placeholder="Enter your phone number"
                className="w-full rounded-2xl border border-gray-200 bg-[#fafafc] px-4 py-3 text-sm outline-none transition focus:border-[#a54a5c] focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-gray-700">
                Qualification
              </label>
              <input
                name="qualification"
                type="text"
                placeholder="Example: JLPT N3 / Japanese Diploma / Teaching Certificate"
                className="w-full rounded-2xl border border-gray-200 bg-[#fafafc] px-4 py-3 text-sm outline-none transition focus:border-[#a54a5c] focus:bg-white"
              />
            </div>

            <div className="lg:col-span-2">
              <label className="mb-2 block text-sm font-bold text-gray-700">
                Teaching Experience
              </label>
              <textarea
                name="experience"
                rows={4}
                placeholder="Briefly describe your teaching experience"
                className="w-full resize-none rounded-2xl border border-gray-200 bg-[#fafafc] px-4 py-3 text-sm outline-none transition focus:border-[#a54a5c] focus:bg-white"
              />
            </div>

            <div className="lg:col-span-2">
              <label className="mb-2 block text-sm font-bold text-gray-700">
                Message to Admin
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Add any extra message for the admin"
                className="w-full resize-none rounded-2xl border border-gray-200 bg-[#fafafc] px-4 py-3 text-sm outline-none transition focus:border-[#a54a5c] focus:bg-white"
              />
            </div>

            <div className="lg:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#202c5c] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#162044] disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Submit for Approval
                  </>
                )}
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}