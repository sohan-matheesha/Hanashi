"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createLiveSession(formData: FormData) {
  const title = formData.get("title") as string;
  const sessionDate = formData.get("sessionDate") as string;
  const sessionTime = formData.get("sessionTime") as string;
  const meetingLink = formData.get("meetingLink") as string;
  const platform = formData.get("platform") as string;
  const status = formData.get("status") as string;

  if (!title || !sessionDate || !sessionTime || !platform || !status) {
    throw new Error("Title, date, time, platform, and status are required");
  }

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/register");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (profile?.role !== "teacher" && profile?.role !== "admin") {
    redirect("/dashboard");
  }

  const { error } = await supabase.from("live_sessions").insert({
    title,
    session_date: sessionDate,
    session_time: sessionTime,
    meeting_link: meetingLink,
    platform,
    status,
    teacher_id: user.id,
  });

  if (error) {
    console.error("Create live session error:", error);
    throw new Error("Failed to create live session");
  }

  revalidatePath("/dashboard/teacher/live-sessions");
}

export async function deleteLiveSession(formData: FormData) {
  const sessionId = formData.get("sessionId") as string;

  if (!sessionId) {
    throw new Error("Session ID is required");
  }

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/register");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (profile?.role !== "teacher" && profile?.role !== "admin") {
    redirect("/dashboard");
  }

  const { error } = await supabase
    .from("live_sessions")
    .delete()
    .eq("id", sessionId);

  if (error) {
    console.error("Delete live session error:", error);
    throw new Error("Failed to delete live session");
  }

  revalidatePath("/dashboard/teacher/live-sessions");
}