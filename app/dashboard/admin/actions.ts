"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";
import { createClient as createSupabaseAdminClient } from "@supabase/supabase-js";

export async function updateUserRole(formData: FormData) {
  const userId = formData.get("userId") as string;
  const role = formData.get("role") as string;

  if (!userId || !role) {
    throw new Error("Missing user ID or role.");
  }

  if (!["student", "teacher", "admin"].includes(role)) {
    throw new Error("Invalid role selected.");
  }

  const supabase = await createClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    throw new Error("You must be logged in.");
  }

  const { data: currentProfile, error: profileError } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (profileError || currentProfile?.role !== "admin") {
    throw new Error("Only admins can update user roles.");
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Missing Supabase service role environment variable.");
  }

  const adminSupabase = createSupabaseAdminClient(
    supabaseUrl,
    serviceRoleKey
  );

  const { error: updateError } = await adminSupabase
    .from("profiles")
    .update({ role })
    .eq("id", userId);

  if (updateError) {
    console.error("Role update error:", updateError);
    throw new Error("Failed to update user role.");
  }

  revalidatePath("/dashboard/admin");
  revalidatePath("/dashboard/admin/users");
  revalidatePath("/dashboard/admin/roles");
}