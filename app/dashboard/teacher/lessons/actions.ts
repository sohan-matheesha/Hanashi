"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createLesson(formData: FormData) {
  const title = formData.get("title") as string;
  const level = formData.get("level") as string;
  const category = formData.get("category") as string;
  const duration = formData.get("duration") as string;
  const status = formData.get("status") as string;
  const description = formData.get("description") as string;

  if (!title || !level || !category || !status) {
    throw new Error("Title, level, category, and status are required");
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

  const { error } = await supabase.from("lessons").insert({
    title,
    level,
    category,
    duration,
    status,
    description,
    teacher_id: user.id,
  });

  if (error) {
    console.error("Create lesson error:", error);
    throw new Error("Failed to create lesson");
  }

  revalidatePath("/dashboard/teacher/lessons");
}


export async function deleteLesson(formData: FormData) {
  const lessonId = formData.get("lessonId") as string;

  if (!lessonId) {
    throw new Error("Lesson ID is required");
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
    .from("lessons")
    .delete()
    .eq("id", lessonId);

  if (error) {
    console.error("Delete lesson error:", error);
    throw new Error("Failed to delete lesson");
  }

  eval
}
export async function updateLesson(formData: FormData) {
  const lessonId = formData.get("lessonId") as string;
  const title = formData.get("title") as string;
  const level = formData.get("level") as string;
  const category = formData.get("category") as string;
  const duration = formData.get("duration") as string;
  const status = formData.get("status") as string;
  const description = formData.get("description") as string;

  if (!lessonId || !title || !level || !category || !status) {
    throw new Error("Lesson ID, title, level, category, and status are required");
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
    .from("lessons")
    .update({
      title,
      level,
      category,
      duration,
      status,
      description,
    })
    .eq("id", lessonId);

  if (error) {
    console.error("Update lesson error:", error);
    throw new Error("Failed to update lesson");
  }

  revalidatePath("/dashboard/teacher/lessons");
  redirect("/dashboard/teacher/lessons");
}