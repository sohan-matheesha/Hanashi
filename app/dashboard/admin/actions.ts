"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const allowedRoles = ["student", "teacher", "admin"] as const;

export async function updateUserRole(formData: FormData) {
  const userId = String(formData.get("userId") || "").trim();
  const role = String(formData.get("role") || "").trim();

  if (!userId || !role) {
    throw new Error("User ID and role are required");
  }

  if (!allowedRoles.includes(role as (typeof allowedRoles)[number])) {
    throw new Error("Invalid role selected");
  }

  const supabase = await createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    redirect("/login");
  }

  const { data: adminProfile, error: adminProfileError } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle();

  if (adminProfileError || adminProfile?.role !== "admin") {
    redirect("/dashboard");
  }

  const { error } = await supabase
    .from("profiles")
    .update({ role })
    .eq("id", userId);

  if (error) {
    console.error("Role update error:", error);
    throw new Error("Failed to update user role");
  }

  revalidatePath("/dashboard/admin");
  revalidatePath("/dashboard/admin/users");
  revalidatePath("/dashboard/admin/roles");
  revalidatePath("/dashboard/teacher");
  revalidatePath("/dashboard");
}