"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Award,
  Calendar,
  Camera,
  FileUp,
  Globe2,
  GraduationCap,
  Mail,
  Phone,
  Send,
  Sparkles,
  User,
} from "lucide-react";

export default function TeacherProfilePage() {
  const router = useRouter();
  const supabase = useMemo(() => createClient(), []);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const certificateInputRef = useRef<HTMLInputElement | null>(null);

  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [certificateName, setCertificateName] = useState("");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [country, setCountry] = useState("");
  const [qualification, setQualification] = useState("JLPT N4");
  const [experience, setExperience] = useState("Less than 1 year");
  const [highestEducation, setHighestEducation] = useState("");
  const [bio, setBio] = useState("");
  const [verificationStatus, setVerificationStatus] = useState("pending");

  const [saving, setSaving] = useState(false);
  const [loadingProfile, setLoadingProfile] = useState(true);

  useEffect(() => {
    const loadTeacherProfile = async () => {
      try {
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError || !user) {
          router.push("/login");
          return;
        }

        const { data: profileData } = await supabase
          .from("profiles")
          .select("full_name, email, phone_number, date_of_birth, country, avatar_url, teacher_verification_status")
          .eq("id", user.id)
          .single();

        if (profileData) {
          setFullName(profileData.full_name || "");
          setEmail(profileData.email || user.email || "");
          setPhoneNumber(profileData.phone_number || "");
          setDateOfBirth(profileData.date_of_birth || "");
          setCountry(profileData.country || "");
          setProfileImage(profileData.avatar_url || null);
          setVerificationStatus(profileData.teacher_verification_status || "pending");
        } else {
          setEmail(user.email || "");
        }

        const { data: teacherData, error: teacherError } = await supabase
          .from("teacher_profiles")
          .select(
            "full_name, email, phone_number, date_of_birth, country, japanese_qualification, teaching_experience, highest_education, certificate_url, bio, verification_status"
          )
          .eq("user_id", user.id)
          .maybeSingle();

        if (teacherError) {
          console.error("Load teacher profile error:", teacherError);
          return;
        }

        if (teacherData) {
          setFullName(teacherData.full_name || profileData?.full_name || "");
          setEmail(teacherData.email || profileData?.email || user.email || "");
          setPhoneNumber(teacherData.phone_number || profileData?.phone_number || "");
          setDateOfBirth(teacherData.date_of_birth || profileData?.date_of_birth || "");
          setCountry(teacherData.country || profileData?.country || "");
          setQualification(teacherData.japanese_qualification || "JLPT N4");
          setExperience(teacherData.teaching_experience || "Less than 1 year");
          setHighestEducation(teacherData.highest_education || "");
          setCertificateName(teacherData.certificate_url || "");
          setBio(teacherData.bio || "");
          setVerificationStatus(teacherData.verification_status || "pending");
        }
      } catch (error) {
        console.error("Unexpected load error:", error);
      } finally {
        setLoadingProfile(false);
      }
    };

    loadTeacherProfile();
  }, [router, supabase]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setProfileImage(imageUrl);
  };

  const handleCertificateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setCertificateName(file.name);
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

      const { error: profileError } = await supabase
        .from("profiles")
        .update({
          full_name: fullName,
          email: email,
          phone_number: phoneNumber,
          date_of_birth: dateOfBirth,
          country: country,
          role: "teacher",
          profile_completed: true,
          teacher_verification_status: "pending",
        })
        .eq("id", user.id);

      if (profileError) {
        console.error("Teacher profile update error:", profileError);
        alert(profileError.message);
        return;
      }

      const { error: teacherError } = await supabase
        .from("teacher_profiles")
        .upsert(
          {
            user_id: user.id,
            full_name: fullName,
            email: email,
            phone_number: phoneNumber,
            date_of_birth: dateOfBirth,
            country: country,
            japanese_qualification: qualification,
            teaching_experience: experience,
            highest_education: highestEducation,
            certificate_url: certificateName,
            bio: bio,
            verification_status: "pending",
          },
          {
            onConflict: "user_id",
          }
        );

      if (teacherError) {
        console.error("Teacher profile save error:", teacherError);
        alert(teacherError.message || "Teacher profile save failed.");
        return;
      }

      router.push("/onboarding/teacher-pending");
    } catch (error) {
      console.error("Unexpected teacher save error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  if (loadingProfile) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-rose-50 via-white to-pink-50">
        <p className="font-semibold text-gray-600">Loading teacher profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <header className="border-b border-rose-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/onboarding/choose-role"
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

      <main className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 inline-flex items-center rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
            Teacher Verification
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            Complete your teacher profile
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
            Submit your qualification details so Hanashi can verify your
            teaching profile before giving access to teacher tools.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[330px_1fr]">
          <aside className="rounded-3xl border border-pink-100 bg-white p-6 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-pink-50 ring-4 ring-white shadow-md">
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt="Profile preview"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <User size={58} className="text-pink-300" />
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
                  className="absolute bottom-2 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-pink-400 text-white shadow-md hover:bg-pink-500"
                >
                  <Camera size={18} />
                </button>
              </div>

              <h2 className="mt-5 text-2xl font-bold text-gray-800">
                Teacher Profile
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Your profile will be reviewed by an admin.
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-2">
                <span className="rounded-full bg-pink-100 px-4 py-1 text-sm font-semibold text-pink-600">
                  {qualification}
                </span>

                <span
                  className={`rounded-full px-4 py-1 text-sm font-semibold ${
                    verificationStatus === "approved"
                      ? "bg-emerald-100 text-emerald-700"
                      : verificationStatus === "rejected"
                      ? "bg-red-100 text-red-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {verificationStatus === "approved"
                    ? "Approved"
                    : verificationStatus === "rejected"
                    ? "Rejected"
                    : "Pending Verification"}
                </span>
              </div>

              <div className="mt-8 w-full rounded-2xl bg-pink-50 p-4 text-left">
                <p className="text-sm font-semibold text-gray-800">
                  Verification process:
                </p>

                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                  <li>• Fill teacher details</li>
                  <li>• Upload qualification document</li>
                  <li>• Submit for admin review</li>
                  <li>• Access teacher dashboard after approval</li>
                </ul>
              </div>
            </div>
          </aside>

          <section className="rounded-3xl border border-pink-100 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800">
              Teacher Information
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Provide accurate information for qualification verification.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-8">
              <section>
                <div className="mb-5 flex items-center gap-2">
                  <User size={20} className="text-pink-400" />
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
                        className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-11 py-3 text-gray-700 outline-none transition focus:border-pink-300 focus:bg-white focus:ring-4 focus:ring-pink-50"
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
                        className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-11 py-3 text-gray-700 outline-none transition focus:border-pink-300 focus:bg-white focus:ring-4 focus:ring-pink-50"
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
                        className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-11 py-3 text-gray-700 outline-none transition focus:border-pink-300 focus:bg-white focus:ring-4 focus:ring-pink-50"
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
                        className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-11 py-3 text-gray-700 outline-none transition focus:border-pink-300 focus:bg-white focus:ring-4 focus:ring-pink-50"
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
                        className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-11 py-3 text-gray-700 outline-none transition focus:border-pink-300 focus:bg-white focus:ring-4 focus:ring-pink-50"
                      />
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className="mb-5 flex items-center gap-2">
                  <Award size={20} className="text-pink-400" />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Qualification Details
                  </h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="mb-3 block text-sm font-semibold text-gray-600">
                      Japanese Qualification
                    </label>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {[
                        "JLPT N5",
                        "JLPT N4",
                        "JLPT N3",
                        "JLPT N2",
                        "JLPT N1",
                        "Japanese Diploma",
                        "Japanese Degree",
                        "Other",
                      ].map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setQualification(item)}
                          className={`rounded-2xl border px-5 py-4 text-sm font-semibold transition ${
                            qualification === item
                              ? "border-pink-400 bg-pink-50 text-pink-600 shadow-sm"
                              : "border-gray-200 bg-gray-50 text-gray-600 hover:border-pink-200 hover:bg-white"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-semibold text-gray-600">
                      Teaching Experience
                    </label>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {[
                        "No experience",
                        "Less than 1 year",
                        "1 - 2 years",
                        "3 - 5 years",
                        "More than 5 years",
                      ].map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setExperience(item)}
                          className={`rounded-2xl border px-5 py-4 text-sm font-semibold transition ${
                            experience === item
                              ? "border-pink-400 bg-pink-50 text-pink-600 shadow-sm"
                              : "border-gray-200 bg-gray-50 text-gray-600 hover:border-pink-200 hover:bg-white"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-600">
                      Highest Education Qualification
                    </label>
                    <div className="relative">
                      <GraduationCap
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        size={18}
                      />
                      <input
                        type="text"
                        required
                        value={highestEducation}
                        onChange={(e) => setHighestEducation(e.target.value)}
                        placeholder="Example: Diploma, Degree, Advanced Level"
                        className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-11 py-3 text-gray-700 outline-none transition focus:border-pink-300 focus:bg-white focus:ring-4 focus:ring-pink-50"
                      />
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className="mb-5 flex items-center gap-2">
                  <FileUp size={20} className="text-pink-400" />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Verification Document
                  </h3>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => certificateInputRef.current?.click()}
                    className="flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-pink-200 bg-pink-50/60 px-6 py-10 text-center transition hover:border-pink-300 hover:bg-pink-50"
                  >
                    <FileUp size={34} className="text-pink-400" />
                    <span className="mt-3 text-sm font-semibold text-gray-700">
                      {certificateName || "Upload certificate or document"}
                    </span>
                    <span className="mt-1 text-xs text-gray-500">
                      PDF, PNG, JPG accepted
                    </span>
                  </button>

                  <input
                    ref={certificateInputRef}
                    type="file"
                    accept=".pdf,.png,.jpg,.jpeg"
                    className="hidden"
                    onChange={handleCertificateChange}
                  />

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-600">
                      Short Bio
                    </label>
                    <textarea
                      required
                      rows={7}
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      placeholder="Tell us about your Japanese teaching background..."
                      className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700 outline-none transition focus:border-pink-300 focus:bg-white focus:ring-4 focus:ring-pink-50"
                    />
                  </div>
                </div>
              </section>

              <div className="flex flex-col gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-gray-500">
                  Your teacher access will be enabled after admin approval.
                </p>

                <button
                  type="submit"
                  disabled={saving}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-pink-400 px-8 py-3 font-semibold text-white shadow-lg shadow-pink-200 transition hover:bg-pink-500 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <Send size={18} />
                  {saving ? "Submitting..." : "Submit for Verification"}
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}