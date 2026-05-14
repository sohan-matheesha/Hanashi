import Link from "next/link";
import { signup } from "../login/actions";
import { Mail, Lock, UserRound } from "lucide-react";

export default async function RegisterPage(props: {
  searchParams: Promise<{ message?: string }>;
}) {
  const searchParams = await props.searchParams;
  const message = searchParams.message;

  const isSuccessMessage =
    message?.toLowerCase().includes("success") ||
    message?.toLowerCase().includes("check") ||
    message?.toLowerCase().includes("created");

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8f6f7] px-4 py-8">
      <div className="w-full max-w-6xl overflow-hidden rounded-4xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] md:grid md:grid-cols-2">
        <div
          className="relative hidden min-h-[700px] overflow-hidden md:block"
          style={{
            backgroundImage: "url('/images/login-japanese-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-linear-to-b from-[#c96c9a]/35 to-[#8d4f87]/25" />

          <div className="absolute inset-x-0 top-0 p-8">
            <h2 className="max-w-[280px] text-5xl font-bold leading-tight text-white drop-shadow-sm">
              Master the art of language.
            </h2>

            <p className="mt-6 max-w-[290px] text-lg leading-8 text-white/90">
              Learn Japanese in the most elegant and effective way with Hanashi.
            </p>
          </div>

          <div className="absolute bottom-8 left-8 flex gap-3">
            <span className="h-3 w-3 rounded-full bg-pink-500" />
            <span className="h-3 w-3 rounded-full bg-white/80" />
            <span className="h-3 w-3 rounded-full bg-white/80" />
          </div>
        </div>

        <div className="flex items-center justify-center bg-white px-6 py-10 sm:px-10 md:px-12">
          <div className="w-full max-w-md">
            <div className="mb-8 flex items-center gap-3">
              <span className="text-3xl font-bold text-pink-500">⛩</span>
              <h1 className="text-3xl font-bold text-[#111827]">
                Hanashi <span className="text-[#6b7280]">(話し)</span>
              </h1>
            </div>

            <h2 className="text-5xl font-bold tracking-tight text-[#0f172a]">
              Create Account
            </h2>

            <p className="mt-4 text-lg leading-8 text-[#667085]">
              Start your Japanese learning journey today.
            </p>

            {message && (
              <div
                className={`mt-6 rounded-2xl border p-4 text-center text-sm font-semibold ${
                  isSuccessMessage
                    ? "border-green-200 bg-green-50 text-green-700"
                    : "border-red-200 bg-red-50 text-red-600"
                }`}
              >
                {message}
              </div>
            )}

            <form className="mt-8 space-y-6">
              <div>
                <label
                  htmlFor="full_name"
                  className="mb-3 block text-base font-semibold text-[#1f2937]"
                >
                  Full Name
                </label>

                <div className="flex h-14 items-center gap-3 rounded-2xl border border-[#e5e7eb] bg-white px-5 shadow-sm transition focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400">
                  <UserRound className="h-5 w-5 text-[#667085]" />
                  <input
                    id="full_name"
                    name="full_name"
                    type="text"
                    placeholder="Enter your full name"
                    required
                    className="w-full bg-transparent text-base text-[#111827] outline-none placeholder:text-[#98a2b3]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-3 block text-base font-semibold text-[#1f2937]"
                >
                  Email address
                </label>

                <div className="flex h-14 items-center gap-3 rounded-2xl border border-[#e5e7eb] bg-white px-5 shadow-sm transition focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400">
                  <Mail className="h-5 w-5 text-[#667085]" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    required
                    className="w-full bg-transparent text-base text-[#111827] outline-none placeholder:text-[#98a2b3]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-3 block text-base font-semibold text-[#1f2937]"
                >
                  Password
                </label>

                <div className="flex h-14 items-center gap-3 rounded-2xl border border-[#e5e7eb] bg-white px-5 shadow-sm transition focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400">
                  <Lock className="h-5 w-5 text-[#667085]" />
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    autoComplete="new-password"
                    minLength={6}
                    required
                    className="w-full bg-transparent text-base text-[#111827] outline-none placeholder:text-[#98a2b3]"
                  />
                </div>

                <p className="mt-3 text-sm text-[#98a2b3]">
                  Must be at least 6 characters long.
                </p>
              </div>

              <button
                formAction={signup}
                className="flex h-14 w-full items-center justify-center rounded-2xl bg-linear-to-r from-pink-400 to-pink-500 text-base font-semibold text-white shadow-lg transition hover:opacity-95"
              >
                Create Student Account
              </button>
            </form>

            <div className="mt-8 rounded-2xl bg-pink-50 p-4 text-center">
              <p className="text-sm font-medium leading-6 text-[#8a4b65]">
                New accounts are created as <b>student</b> accounts. Teacher
                access must be approved by the admin.
              </p>
            </div>

            <p className="mt-8 text-center text-base text-[#667085]">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-pink-500 hover:text-pink-600"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}