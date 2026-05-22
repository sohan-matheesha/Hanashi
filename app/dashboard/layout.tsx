import { unstable_noStore as noStore } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import MainSidebar from "./MainSidebar";
import MainContent from "./MainContent";
import ConversationNotificationListener from "@/components/ConversationNotificationListener";

export default async function DashboardLayout({
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
    .select("role, teacher_verification_status")
    .eq("id", user.id)
    .maybeSingle();

  if (profileError) {
    console.error("Dashboard profile fetch error:", profileError);
  }

  const role = String(profile?.role || "student").toLowerCase().trim();

  const teacherVerificationStatus = String(
    profile?.teacher_verification_status || "pending"
  )
    .toLowerCase()
    .trim();

  console.log("DashboardLayout profile sync", {
    userId: user.id,
    userEmail: user.email,
    profileRole: role,
    profileTeacherVerificationStatus: teacherVerificationStatus,
  });

  return (
    <div className="min-h-screen bg-[#fff7fb]">
      <ConversationNotificationListener currentUserId={user.id} />

      <MainSidebar
        role={role as "student" | "teacher" | "admin"}
        teacherVerificationStatus={teacherVerificationStatus}
      />

      <MainContent>
        {children}
      </MainContent>
    </div>
  );
}