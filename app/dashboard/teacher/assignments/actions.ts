"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createAssignment(formData: FormData) {
  const title = formData.get("title") as string;
  const assignmentType = formData.get("assignmentType") as string;
  const level = formData.get("level") as string;
  const dueDate = formData.get("dueDate") as string;
  const assignedTo = formData.get("assignedTo") as string;
  const submissions = formData.get("submissions") as string;
  const status = formData.get("status") as string;
  const description = formData.get("description") as string;

  if (!title || !assignmentType || !level || !status) {
    throw new Error("Title, type, level, and status are required");
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

  const { error } = await supabase.from("assignments").insert({
    title,
    assignment_type: assignmentType,
    level,
    due_date: dueDate || null,
    assigned_to: assignedTo,
    submissions: submissions || "0/0",
    status,
    description,
    teacher_id: user.id,
  });

  if (error) {
    console.error("Create assignment error:", error);
    throw new Error("Failed to create assignment");
  }

  revalidatePath("/dashboard/teacher/assignments");
}

export async function deleteAssignment(formData: FormData) {
  const assignmentId = formData.get("assignmentId") as string;

  if (!assignmentId) {
    throw new Error("Assignment ID is required");
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
    .from("assignments")
    .delete()
    .eq("id", assignmentId);

  if (error) {
    console.error("Delete assignment error:", error);
    throw new Error("Failed to delete assignment");
  }

  revalidatePath("/dashboard/teacher/assignments");
}