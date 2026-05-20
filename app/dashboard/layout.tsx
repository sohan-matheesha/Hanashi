import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import MainSidebar from "./MainSidebar";
import ConversationNotificationListener from "@/components/ConversationNotificationListener";

export default async function DashboardLayout({
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
    .select("role")
    .eq("id", user.id)
    .single();

  const role = profile?.role ?? null;

  return (
    <div className="min-h-screen bg-[#fff7fb]">
      <ConversationNotificationListener currentUserId={user.id} />

      <MainSidebar role={role} />

      <main className="min-h-screen overflow-x-hidden md:ml-64">
        {children}
      </main>
    </div>
  );
}