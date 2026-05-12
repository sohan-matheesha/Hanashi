import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role, profile_completed, teacher_verification_status")
    .eq("id", user.id)
    .single();

  if (!profile) {
    redirect("/onboarding/choose-role");
  }

  if (profile.role === "admin") {
    return <>{children}</>;
  }

  if (profile.role !== "teacher") {
    redirect("/dashboard");
  }

  if (!profile.profile_completed) {
    redirect("/onboarding/teacher-profile");
  }

  if (profile.teacher_verification_status !== "approved") {
    redirect("/onboarding/teacher-pending");
  }

  return <>{children}</>;
}