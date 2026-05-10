import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.redirect(new URL("/login", process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"));
  }

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("role, profile_completed, teacher_verification_status")
    .eq("id", user.id)
    .single();

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  if (error || !profile) {
    return NextResponse.redirect(new URL("/onboarding/choose-role", baseUrl));
  }

  if (!profile.role) {
    return NextResponse.redirect(new URL("/onboarding/choose-role", baseUrl));
  }

  if (profile.role === "student") {
    if (!profile.profile_completed) {
      return NextResponse.redirect(new URL("/onboarding/student-profile", baseUrl));
    }

    return NextResponse.redirect(new URL("/dashboard", baseUrl));
  }

  if (profile.role === "teacher") {
    if (!profile.profile_completed) {
      return NextResponse.redirect(new URL("/onboarding/teacher-profile", baseUrl));
    }

    if (profile.teacher_verification_status === "approved") {
      return NextResponse.redirect(new URL("/dashboard/teacher", baseUrl));
    }

    if (profile.teacher_verification_status === "rejected") {
      return NextResponse.redirect(new URL("/onboarding/teacher-profile", baseUrl));
    }

    return NextResponse.redirect(new URL("/onboarding/teacher-pending", baseUrl));
  }

  if (profile.role === "admin") {
    return NextResponse.redirect(new URL("/dashboard/admin", baseUrl));
  }

  return NextResponse.redirect(new URL("/onboarding/choose-role", baseUrl));
}