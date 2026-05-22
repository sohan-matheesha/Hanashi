import { unstable_noStore as noStore } from "next/cache";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  noStore();

  const supabase = await createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    redirect("/login");
  }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("id, full_name, role, teacher_verification_status")
    .eq("id", user.id)
    .maybeSingle();

  if (profileError) {
    redirect("/dashboard");
  }

  if (!profile) {
    await supabase.from("profiles").insert({
      id: user.id,
      full_name: user.email?.split("@")[0] || "Student",
      role: "student",
      teacher_verification_status: "pending",
    });

    redirect("/dashboard");
  }

  const role = String(profile.role || "student").toLowerCase().trim();
  const teacherVerificationStatus = String(
    profile.teacher_verification_status || "pending"
  )
    .toLowerCase()
    .trim();

  const isAdmin = role === "admin";
  const isTeacher = role === "teacher";

  if (!isAdmin && !isTeacher) {
    redirect("/dashboard");
  }

  return <>{children}</>;
}