"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Briefcase,
  Calendar,
  Camera,
  Globe2,
  GraduationCap,
  Mail,
  Phone,
  Save,
  Sparkles,
  User,
} from "lucide-react";

export default function StudentProfilePage() {
  const router = useRouter();
  const supabase = useMemo(() => createClient(), []);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [country, setCountry] = useState("");
  const [level, setLevel] = useState("Beginner");
  const [status, setStatus] = useState("University Student");
  const [saving, setSaving] = useState(false);
  const [loadingProfile, setLoadingProfile] = useState(true);

  useEffect(() => {
    const loadStudentProfile = async () => {
      try {
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError || !user) {
          router.push("/login");
          return;
        }

        const { data, error } = await supabase
          .from("profiles")
          .select(
            "full_name, email, phone_number, date_of_birth, country, japanese_level, current_status, avatar_url"
          )
          .eq("id", user.id)
          .single();

        if (error) {
          console.error("Load student profile error:", error);
          setEmail(user.email || "");
          return;
        }

        if (data) {
          setFullName(data.full_name || "");
          setEmail(data.email || user.email || "");
          setPhoneNumber(data.phone_number || "");
          setDateOfBirth(data.date_of_birth || "");
          setCountry(data.country || "");
          setLevel(data.japanese_level || "Beginner");
          setStatus(data.current_status || "University Student");
          setProfileImage(data.avatar_url || null);
        }
      } catch (error) {
        console.error("Unexpected load error:", error);
      } finally {
        setLoadingProfile(false);
      }
    };

    loadStudentProfile();
  }, [router, supabase]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setProfileImage(imageUrl);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setSaving(true);

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        alert("Please login again.");
        router.push("/login");
        return;
      }

      const { error } = await supabase
        .from("profiles")
        .update({
          full_name: fullName,
          email: email,
          phone_number: phoneNumber,
          date_of_birth: dateOfBirth,
          country: country,
          japanese_level: level,
          current_status: status,
          role: "student",
          profile_completed: true,
          teacher_verification_status: null,
        })
        .eq("id", user.id);

      if (error) {
        console.error("Student profile save error:", error);
        alert(error.message);
        return;
      }

      router.push("/dashboard");
    } catch (error) {
      console.error("Unexpected save error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  if (loadingProfile) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-rose-50 via-white to-pink-50">
        <p className="font-semibold text-gray-600">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <header className="border-b border-rose-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/onboarding/choose-role"
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-rose-500"
          >
            <ArrowLeft size={18} />
            Back
          </Link>

          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-400 text-white shadow-md shadow-rose-200">
              <Sparkles size={18} />
            </div>
            <span className="text-xl font-bold text-gray-900">Hanashi</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 inline-flex items-center rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-600">
            Student Profile Setup
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            Complete your learning profile
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
            Add your basic details so Hanashi can personalize your Japanese
            learning experience.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[330px_1fr]">
          <aside className="rounded-3xl border border-rose-100 bg-white p-6 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-rose-50 ring-4 ring-white shadow-md">
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt="Profile preview"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <User size={58} className="text-rose-300" />
                  )}
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png,image/jpeg,image/jpg"
                  className="hidden"
                  onChange={handleImageChange}
                />

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute bottom-2 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-rose-400 text-white shadow-md hover:bg-rose-500"
                >
                  <Camera size={18} />
                </button>
              </div>

              <h2 className="mt-5 text-2xl font-bold text-gray-800">
                Student Profile
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Your Japanese learning journey starts here.
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-2">
                <span className="rounded-full bg-pink-100 px-4 py-1 text-sm font-semibold text-pink-600">
                  {level}
                </span>

                <span className="rounded-full bg-rose-100 px-4 py-1 text-sm font-semibold text-rose-600">
                  {status}
                </span>
              </div>

              <div className="mt-8 w-full rounded-2xl bg-rose-50 p-4 text-left">
                <p className="text-sm font-semibold text-gray-800">
                  What you can do next:
                </p>

                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  <li>• Access beginner lessons</li>
                  <li>• Complete quizzes</li>
                  <li>• Practice with AI Tutor</li>
                  <li>• Join speaking sessions</li>
                </ul>
              </div>
            </div>
          </aside>

          <section className="rounded-3xl border border-rose-100 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800">
              Student Information
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Fill in your details before entering the dashboard.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-8">
              <section>
                <div className="mb-5 flex items-center gap-2">
                  <User size={20} className="text-rose-400" />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Personal Information
                  </h3>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-600">
                      Full Name
                    </label>
                    <div className="relative">
                      <User
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        size={18}
                      />
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Enter your full name"
                        className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-11 py-3 text-gray-700 outline-none transition focus:border-rose-300 focus:bg-white focus:ring-4 focus:ring-rose-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-600">
                      Email
                    </label>
                    <div className="relative">
                      <Mail
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        size={18}
                      />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-11 py-3 text-gray-700 outline-none transition focus:border-rose-300 focus:bg-white focus:ring-4 focus:ring-rose-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-600">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        size={18}
                      />
                      <input
                        type="tel"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="+94 77 123 4567"
                        className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-11 py-3 text-gray-700 outline-none transition focus:border-rose-300 focus:bg-white focus:ring-4 focus:ring-rose-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-600">
                      Date of Birth
                    </label>
                    <div className="relative">
                      <Calendar
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        size={18}
                      />
                      <input
                        type="date"
                        required
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                        className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-11 py-3 text-gray-700 outline-none transition focus:border-rose-300 focus:bg-white focus:ring-4 focus:ring-rose-50"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-semibold text-gray-600">
                      Country
                    </label>
                    <div className="relative">
                      <Globe2
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        size={18}
                      />
                      <input
                        type="text"
                        required
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder="Sri Lanka"
                        className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-11 py-3 text-gray-700 outline-none transition focus:border-rose-300 focus:bg-white focus:ring-4 focus:ring-rose-50"
                      />
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className="mb-5 flex items-center gap-2">
                  <GraduationCap size={20} className="text-rose-400" />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Japanese Level
                  </h3>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {["Beginner", "JLPT N5", "JLPT N4", "Intermediate"].map(
                    (item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setLevel(item)}
                        className={`rounded-2xl border px-5 py-4 text-sm font-semibold transition ${
                          level === item
                            ? "border-rose-400 bg-rose-50 text-rose-600 shadow-sm"
                            : "border-gray-200 bg-gray-50 text-gray-600 hover:border-rose-200 hover:bg-white"
                        }`}
                      >
                        {item}
                      </button>
                    )
                  )}
                </div>
              </section>

              <section>
                <div className="mb-5 flex items-center gap-2">
                  <Briefcase size={20} className="text-rose-400" />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Current Status
                  </h3>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    "School Student",
                    "University Student",
                    "Employed",
                    "Unemployed",
                    "Other",
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setStatus(item)}
                      className={`rounded-2xl border px-5 py-4 text-sm font-semibold transition ${
                        status === item
                          ? "border-rose-400 bg-rose-50 text-rose-600 shadow-sm"
                          : "border-gray-200 bg-gray-50 text-gray-600 hover:border-rose-200 hover:bg-white"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </section>

              <div className="flex flex-col gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-gray-500">
                  You can update these details later from your profile page.
                </p>

                <button
                  type="submit"
                  disabled={saving}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-rose-400 px-8 py-3 font-semibold text-white shadow-lg shadow-rose-200 transition hover:bg-rose-500 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <Save size={18} />
                  {saving ? "Saving..." : "Save & Continue"}
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}