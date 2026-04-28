"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock } from "lucide-react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // =========================================
      // KEEP YOUR EXISTING SUPABASE REGISTER LOGIC HERE
      // Example:
      // const { error } = await supabase.auth.signUp({
      //   email,
      //   password,
      // });
      //
      // if (error) throw error;
      // =========================================

      console.log("Register:", { email, password });
    } catch (error) {
      console.error("Register error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f8f6f7] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-6xl overflow-hidden rounded-4xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] md:grid md:grid-cols-2">
        
        {/* Left Image Panel */}
<div
  className="relative hidden min-h-[700px] overflow-hidden rounded-l-[28px] md:block"
  style={{
    backgroundImage: "url('/images/login-japanese-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
          <div className="absolute inset-0 bg-linear-to-b from-[#c96c9a]/30 to-[#8d4f87]/20" />

          <div className="absolute inset-x-0 top-0 p-8">
            <h2 className="max-w-[260px] text-5xl font-bold leading-tight text-white drop-shadow-sm">
              Master the art of language.
            </h2>

            <p className="mt-6 max-w-[260px] text-lg leading-8 text-white/90">
              Learn Japanese in the most elegant and effective way with Hanashi.
            </p>
          </div>

          <div className="absolute bottom-8 left-8 flex gap-3">
            <span className="h-3 w-3 rounded-full bg-pink-500" />
            <span className="h-3 w-3 rounded-full bg-white/80" />
            <span className="h-3 w-3 rounded-full bg-white/80" />
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="flex items-center justify-center bg-white px-6 py-10 sm:px-10 md:px-12">
          <div className="w-full max-w-md">
            {/* Logo */}
            <div className="mb-8 flex items-center gap-3">
              <span className="text-3xl font-bold text-pink-500">⛩</span>
              <h1 className="text-3xl font-bold text-[#111827]">
                Hanashi <span className="text-[#6b7280]">(話し)</span>
              </h1>
            </div>

            {/* Heading */}
            <h2 className="text-5xl font-bold tracking-tight text-[#0f172a]">
              Create Account
            </h2>

            <p className="mt-4 text-xl leading-8 text-[#667085]">
              Start your Japanese learning journey today.
            </p>

            {/* Form */}
            <form onSubmit={handleRegister} className="mt-10 space-y-6">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-3 block text-xl font-semibold text-[#1f2937]"
                >
                  Email address
                </label>

                <div className="flex h-16 items-center gap-3 rounded-2xl border border-[#e5e7eb] bg-white px-5 shadow-sm focus-within:border-pink-400">
                  <Mail className="h-6 w-6 text-[#667085]" />
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-transparent text-lg text-[#111827] outline-none placeholder:text-[#98a2b3]"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-3 block text-xl font-semibold text-[#1f2937]"
                >
                  Password
                </label>

                <div className="flex h-16 items-center gap-3 rounded-2xl border border-[#e5e7eb] bg-white px-5 shadow-sm focus-within:border-pink-400">
                  <Lock className="h-6 w-6 text-[#667085]" />
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full bg-transparent text-lg text-[#111827] outline-none placeholder:text-[#98a2b3]"
                  />
                </div>

                <p className="mt-3 text-sm text-[#98a2b3]">
                  Must be at least 6 characters long.
                </p>
              </div>

              {/* Register Button */}
              <button
                type="submit"
                disabled={loading}
                className="flex h-16 w-full items-center justify-center rounded-2xl bg-linear-to-r from-pink-400 to-pink-500 text-xl font-semibold text-white shadow-lg transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Creating..." : "Create Account"}
              </button>
            </form>

            {/* Bottom Link */}
            <p className="mt-8 text-center text-lg text-[#667085]">
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