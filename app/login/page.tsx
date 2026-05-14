import Link from "next/link";
import { login } from "./actions";
import { Mail, Lock, LogIn } from "lucide-react";

export default async function LoginPage(props: {
  searchParams: Promise<{ message?: string }>;
}) {
  const searchParams = await props.searchParams;
  const message = searchParams.message;

  const isSuccessMessage =
    message?.toLowerCase().includes("check") ||
    message?.toLowerCase().includes("success") ||
    message?.toLowerCase().includes("confirmed");

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f8f9fc] p-4 font-sans text-[#2d2a32] sm:p-6 lg:p-8">
      <div className="relative z-10 flex min-h-[650px] w-full max-w-5xl flex-col overflow-hidden rounded-4xl bg-white shadow-xl md:flex-row">
        <div
          className="relative hidden min-h-[650px] md:block md:w-[45%]"
          style={{
            backgroundImage: "url('/images/login-japanese-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-linear-to-b from-[#c96c9a]/35 to-[#8d4f87]/25" />

          <div className="absolute inset-x-0 top-0 p-12">
            <h2 className="max-w-[280px] text-[2.5rem] font-bold leading-[1.1] tracking-tight text-white drop-shadow-sm">
              Master the art of language.
            </h2>

            <p className="mt-6 max-w-[290px] text-[15px] leading-relaxed text-white/90">
              Learn Japanese in the most elegant and effective way with Hanashi.
            </p>
          </div>

          <div className="absolute bottom-12 left-12 flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-pink-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/60" />
          </div>
        </div>

        <div className="flex w-full items-center justify-center bg-white px-6 py-10 sm:px-10 md:w-[55%] md:px-12">
          <div className="w-full max-w-[390px]">
            <div className="mb-10 flex items-center gap-3">
              <span className="text-3xl font-bold text-[#f06428]">⛩</span>
              <h1 className="text-2xl font-bold text-[#111827]">
                Hanashi <span className="text-[#6b7280]">(話し)</span>
              </h1>
            </div>

            <h2 className="mb-2 text-[2.2rem] font-bold tracking-tight text-[#0f172a]">
              Welcome Back
            </h2>

            <p className="mb-8 text-sm text-[#667085]">
              Sign in to continue your Japanese learning journey.
            </p>

            {message && (
              <div
                className={`mb-5 rounded-xl border p-3 text-center text-sm font-medium ${
                  isSuccessMessage
                    ? "border-green-200 bg-green-50 text-green-700"
                    : "border-red-200 bg-red-50 text-red-600"
                }`}
              >
                {message}
              </div>
            )}

            <form className="flex w-full flex-col gap-5">
              <div>
                <label
                  className="mb-2 block text-[14px] font-semibold text-[#1f2937]"
                  htmlFor="email"
                >
                  Email address
                </label>

                <div className="flex h-12 items-center gap-3 rounded-xl border border-[#e5e7eb] bg-white px-4 shadow-sm transition-all focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400">
                  <Mail className="h-5 w-5 text-[#667085]" />
                  <input
                    className="w-full bg-transparent text-[15px] text-[#111827] outline-none placeholder:text-[#98a2b3]"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  className="mb-2 block text-[14px] font-semibold text-[#1f2937]"
                  htmlFor="password"
                >
                  Password
                </label>

                <div className="flex h-12 items-center gap-3 rounded-xl border border-[#e5e7eb] bg-white px-4 shadow-sm transition-all focus-within:border-pink-400 focus-within:ring-1 focus-within:ring-pink-400">
                  <Lock className="h-5 w-5 text-[#667085]" />
                  <input
                    className="w-full bg-transparent text-[15px] text-[#111827] outline-none placeholder:text-[#98a2b3]"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                  />
                </div>
              </div>

              <div className="mb-2 flex items-center justify-between">
                <label className="group flex cursor-pointer items-center gap-2">
                  <div className="relative flex items-center justify-center">
                    <input
                      type="checkbox"
                      name="remember"
                      className="peer h-4 w-4 cursor-pointer appearance-none rounded-[4px] border border-gray-300 transition-all checked:border-[#e34288] checked:bg-[#e34288]"
                    />
                    <svg
                      className="pointer-events-none absolute h-2.5 w-2.5 text-white opacity-0 peer-checked:opacity-100"
                      viewBox="0 0 14 10"
                      fill="none"
                    >
                      <path
                        d="M1 5L4.5 8.5L13 1"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <span className="text-[13px] font-medium text-[#667085] transition-colors group-hover:text-gray-700">
                    Remember me
                  </span>
                </label>

                <span className="text-[13px] font-medium text-[#98a2b3]">
                  Forgot password
                </span>
              </div>

              <button
                formAction={login}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#ec4899] px-4 py-3.5 text-[15px] font-semibold text-white shadow-md transition-colors hover:bg-[#db2777]"
              >
                <LogIn className="h-4 w-4" />
                Sign In
              </button>
            </form>

            <div className="mt-8 w-full">
              <div className="relative mb-8 flex items-center justify-center">
                <div className="absolute inset-x-0 h-px bg-[#e5e7eb]" />
                <span className="relative bg-white px-4 text-[12px] font-medium uppercase tracking-widest text-[#98a2b3]">
                  Account
                </span>
              </div>

              <div className="rounded-2xl bg-[#fafafc] p-4 text-center">
                <p className="text-[14px] font-medium text-[#667085]">
                  Don&apos;t have an account?
                </p>

                <Link
                  href="/register"
                  className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-pink-100 bg-white px-4 py-3 text-sm font-bold text-[#ec4899] transition-colors hover:bg-pink-50 hover:text-[#db2777]"
                >
                  Create Student Account
                </Link>
              </div>

              <p className="mt-5 text-center text-xs leading-5 text-[#98a2b3]">
                Teacher access is approved by the admin after registration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}