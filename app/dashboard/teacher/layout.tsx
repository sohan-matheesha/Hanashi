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
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    redirect("/login");
  }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("id, full_name, role")
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
    });

    redirect("/dashboard");
  }

  if (profile.role !== "teacher" && profile.role !== "admin") {
    redirect("/dashboard");
  }

  return <>{children}</>;
}