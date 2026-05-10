"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  GraduationCap,
  Mail,
  MapPin,
  RefreshCcw,
  User,
  XCircle,
} from "lucide-react";

type TeacherProfile = {
  id: string;
  user_id: string;
  full_name: string | null;
  email: string | null;
  date_of_birth: string | null;
  country: string | null;
  japanese_qualification: string | null;
  teaching_experience: string | null;
  highest_education: string | null;
  certificate_url: string | null;
  bio: string | null;
  verification_status: "pending" | "approved" | "rejected";
  created_at: string;
};

export default function TeacherVerificationPage() {
  const supabase = createClient();

  const [teachers, setTeachers] = useState<TeacherProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchTeachers = async () => {
    try {
      setLoading(true);

      const { data, error } = await supabase
        .from("teacher_profiles")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Fetch teacher profiles error:", error);
        alert(error.message);
        return;
      }

      setTeachers(data || []);
    } catch (error) {
      console.error("Unexpected fetch error:", error);
      alert("Something went wrong while loading teacher profiles.");
    } finally {
      setLoading(false);
    }
  };

  const updateTeacherStatus = async (
    teacher: TeacherProfile,
    status: "approved" | "rejected"
  ) => {
    try {
      setUpdatingId(teacher.id);

      const { error: teacherError } = await supabase
        .from("teacher_profiles")
        .update({
          verification_status: status,
        })
        .eq("id", teacher.id);

      if (teacherError) {
        console.error("Teacher status update error:", teacherError);
        alert(teacherError.message);
        return;
      }

      const { error: profileError } = await supabase
        .from("profiles")
        .update({
          teacher_verification_status: status,
        })
        .eq("id", teacher.user_id);

      if (profileError) {
        console.error("Profile status update error:", profileError);
        alert(profileError.message);
        return;
      }

      await fetchTeachers();
    } catch (error) {
      console.error("Unexpected update error:", error);
      alert("Something went wrong while updating teacher status.");
    } finally {
      setUpdatingId(null);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  const pendingCount = teachers.filter(
    (teacher) => teacher.verification_status === "pending"
  ).length;

  const approvedCount = teachers.filter(
    (teacher) => teacher.verification_status === "approved"
  ).length;

  const rejectedCount = teachers.filter(
    (teacher) => teacher.verification_status === "rejected"
  ).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <header className="border-b border-rose-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/dashboard/admin"
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-pink-500"
          >
            <ArrowLeft size={18} />
            Back to Admin Dashboard
          </Link>

          <button
            type="button"
            onClick={fetchTeachers}
            className="flex items-center gap-2 rounded-xl border border-pink-100 bg-white px-4 py-2 text-sm font-semibold text-pink-500 shadow-sm hover:bg-pink-50"
          >
            <RefreshCcw size={16} />
            Refresh
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8">
          <div className="inline-flex items-center rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-600">
            Admin Panel
          </div>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900">
            Teacher Verification
          </h1>

          <p className="mt-3 max-w-2xl text-gray-600">
            Review teacher qualification details and approve or reject access to
            Hanashi teacher features.
          </p>
        </div>

        <div className="mb-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-amber-100 bg-white p-6 shadow-sm">
            <Clock className="text-amber-500" size={30} />
            <p className="mt-4 text-sm font-semibold text-gray-500">
              Pending
            </p>
            <h2 className="mt-1 text-3xl font-bold text-gray-900">
              {pendingCount}
            </h2>
          </div>

          <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
            <CheckCircle2 className="text-emerald-500" size={30} />
            <p className="mt-4 text-sm font-semibold text-gray-500">
              Approved
            </p>
            <h2 className="mt-1 text-3xl font-bold text-gray-900">
              {approvedCount}
            </h2>
          </div>

          <div className="rounded-3xl border border-red-100 bg-white p-6 shadow-sm">
            <XCircle className="text-red-500" size={30} />
            <p className="mt-4 text-sm font-semibold text-gray-500">
              Rejected
            </p>
            <h2 className="mt-1 text-3xl font-bold text-gray-900">
              {rejectedCount}
            </h2>
          </div>
        </div>

        {loading ? (
          <div className="rounded-3xl border border-pink-100 bg-white p-10 text-center shadow-sm">
            <p className="font-semibold text-gray-600">
              Loading teacher profiles...
            </p>
          </div>
        ) : teachers.length === 0 ? (
          <div className="rounded-3xl border border-pink-100 bg-white p-10 text-center shadow-sm">
            <p className="font-semibold text-gray-700">
              No teacher verification requests found.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {teachers.map((teacher) => (
              <div
                key={teacher.id}
                className="rounded-3xl border border-pink-100 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex gap-4">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-pink-50 text-pink-400">
                      <User size={34} />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h2 className="text-xl font-bold text-gray-900">
                          {teacher.full_name || "Unnamed Teacher"}
                        </h2>

                        <span
                          className={`rounded-full px-3 py-1 text-xs font-bold ${
                            teacher.verification_status === "approved"
                              ? "bg-emerald-100 text-emerald-700"
                              : teacher.verification_status === "rejected"
                              ? "bg-red-100 text-red-700"
                              : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {teacher.verification_status.toUpperCase()}
                        </span>
                      </div>

                      <div className="mt-3 grid gap-2 text-sm text-gray-600 md:grid-cols-2">
                        <p className="flex items-center gap-2">
                          <Mail size={16} />
                          {teacher.email || "No email"}
                        </p>

                        <p className="flex items-center gap-2">
                          <MapPin size={16} />
                          {teacher.country || "No country"}
                        </p>

                        <p className="flex items-center gap-2">
                          <GraduationCap size={16} />
                          {teacher.japanese_qualification || "No qualification"}
                        </p>

                        <p>
                          Experience:{" "}
                          <span className="font-semibold">
                            {teacher.teaching_experience || "Not provided"}
                          </span>
                        </p>

                        <p>
                          Highest Education:{" "}
                          <span className="font-semibold">
                            {teacher.highest_education || "Not provided"}
                          </span>
                        </p>

                        <p>
                          Certificate:{" "}
                          <span className="font-semibold">
                            {teacher.certificate_url || "No document"}
                          </span>
                        </p>
                      </div>

                      {teacher.bio && (
                        <div className="mt-4 rounded-2xl bg-pink-50 p-4 text-sm leading-6 text-gray-700">
                          {teacher.bio}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                    <button
                      type="button"
                      disabled={
                        updatingId === teacher.id ||
                        teacher.verification_status === "approved"
                      }
                      onClick={() => updateTeacherStatus(teacher, "approved")}
                      className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <CheckCircle2 size={18} />
                      Approve
                    </button>

                    <button
                      type="button"
                      disabled={
                        updatingId === teacher.id ||
                        teacher.verification_status === "rejected"
                      }
                      onClick={() => updateTeacherStatus(teacher, "rejected")}
                      className="flex items-center justify-center gap-2 rounded-2xl bg-red-500 px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <XCircle size={18} />
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}