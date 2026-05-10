"use client";

import Link from "next/link";
import {
  Clock,
  MailCheck,
  ShieldCheck,
  Sparkles,
  ArrowLeft,
  Home,
} from "lucide-react";

export default function TeacherPendingPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-rose-50 via-white to-pink-50">
      <header className="border-b border-rose-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/onboarding/teacher-profile"
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-pink-500"
          >
            <ArrowLeft size={18} />
            Back
          </Link>

          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-pink-400 text-white shadow-md shadow-pink-200">
              <Sparkles size={18} />
            </div>
            <span className="text-xl font-bold text-gray-900">Hanashi</span>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-amber-100 text-amber-600 shadow-lg shadow-amber-100">
          <Clock size={46} />
        </div>

        <div className="mt-8 inline-flex items-center rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
          Verification Pending
        </div>

        <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
          Your teacher profile is under review
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
          Thank you for submitting your teacher details. Hanashi admin will
          review your qualifications and documents before enabling teacher
          dashboard access.
        </p>

        <div className="mt-10 grid w-full gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-pink-100 bg-white p-6 shadow-sm">
            <MailCheck className="mx-auto text-pink-400" size={34} />
            <h3 className="mt-4 font-bold text-gray-800">Submission Sent</h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Your verification request has been recorded successfully.
            </p>
          </div>

          <div className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
            <Clock className="mx-auto text-amber-500" size={34} />
            <h3 className="mt-4 font-bold text-gray-800">Admin Review</h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              An admin will check your qualification details and certificate.
            </p>
          </div>

          <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
            <ShieldCheck className="mx-auto text-emerald-500" size={34} />
            <h3 className="mt-4 font-bold text-gray-800">Access Granted</h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              After approval, you can access teacher dashboard features.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/dashboard"
            className="flex items-center justify-center gap-2 rounded-2xl bg-pink-400 px-8 py-3 font-semibold text-white shadow-lg shadow-pink-200 transition hover:bg-pink-500"
          >
            <Home size={18} />
            Go to Dashboard
          </Link>

          <Link
            href="/onboarding/teacher-profile"
            className="rounded-2xl border border-pink-200 bg-white px-8 py-3 font-semibold text-pink-500 transition hover:bg-pink-50"
          >
            Edit Submission
          </Link>
        </div>
      </main>
    </div>
  );
}