import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function ProfilePage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("role, profile_completed, teacher_verification_status")
    .eq("id", user.id)
    .single();

  if (error || !profile) {
    redirect("/onboarding/choose-role");
  }

  if (!profile.role) {
    redirect("/onboarding/choose-role");
  }

  if (profile.role === "student") {
    redirect("/onboarding/student-profile");
  }

  if (profile.role === "teacher") {
    redirect("/onboarding/teacher-profile");
  }

  if (profile.role === "admin") {
    redirect("/dashboard/admin");
  }

  redirect("/onboarding/choose-role");
}