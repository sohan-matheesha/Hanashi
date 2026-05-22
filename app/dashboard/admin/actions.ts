"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";
import { createClient as createSupabaseAdminClient } from "@supabase/supabase-js";

export type UpdateUserRoleState = {
  success: string | null;
  error: string | null;
};

const initialState: UpdateUserRoleState = {
  success: null,
  error: null,
};

export async function updateUserRole(
  prevStateOrFormData: UpdateUserRoleState | FormData,
  maybeFormData?: FormData
): Promise<UpdateUserRoleState> {
  const formData =
    maybeFormData instanceof FormData
      ? maybeFormData
      : prevStateOrFormData instanceof FormData
        ? prevStateOrFormData
        : null;

  if (!formData) {
    return {
      ...initialState,
      error: "Form data not received.",
    };
  }

  const userId = String(formData.get("userId") || "").trim();
  const role = String(formData.get("role") || "").toLowerCase().trim();

  if (!userId || !role) {
    return {
      ...initialState,
      error: "Missing user ID or role.",
    };
  }

  if (!["student", "teacher", "admin"].includes(role)) {
    return {
      ...initialState,
      error: "Invalid role selected.",
    };
  }

  const supabase = await createClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return {
      ...initialState,
      error: "You must be logged in.",
    };
  }

  const { data: currentProfile, error: profileError } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  // Normalize role comparison to avoid casing/whitespace mismatches
  const currentRole = String(currentProfile?.role || "").toLowerCase().trim();

  if (profileError || currentRole !== "admin") {
    return {
      ...initialState,
      error: "Only admins can update user roles.",
    };
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return {
      ...initialState,
      error: "Missing Supabase service role environment variable.",
    };
  }

  const adminSupabase = createSupabaseAdminClient(
    supabaseUrl,
    serviceRoleKey,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );

  const profileUpdates = {
    role,
    teacher_verification_status: role === "teacher" ? "approved" : null,
  };

  const { error: updateError } = await adminSupabase
    .from("profiles")
    .update(profileUpdates)
    .eq("id", userId);

  if (updateError) {
    console.error("Role update error:", updateError);

    return {
      ...initialState,
      error: "Failed to update user role.",
    };
  }

  if (role === "teacher") {
    // Try to update an existing teacher_profiles row; if none exists, insert one.
    try {
      const { data: teacherUpdateData, error: teacherUpdateError } = await adminSupabase
        .from("teacher_profiles")
        .update({ verification_status: "approved" })
        .eq("user_id", userId)
        .select();

      if (teacherUpdateError) {
        console.error("Teacher profile update error (update):", teacherUpdateError);
      }

      // If update returned no rows, try to insert a new teacher_profiles row
      if (!teacherUpdateData || teacherUpdateData.length === 0) {
        const { error: insertError } = await adminSupabase.from("teacher_profiles").insert({
          user_id: userId,
          verification_status: "approved",
        });

        if (insertError) {
          console.error("Teacher profile insert error:", insertError);
        }
      }
    } catch (e) {
      // Non-fatal: log and continue. Profiles table is the source of truth.
      console.error("Teacher profile update/insert exception:", e);
    }
  }

  revalidatePath("/dashboard/admin");
  revalidatePath("/dashboard/admin/users");
  revalidatePath("/dashboard/admin/roles");
  revalidatePath("/dashboard/admin/teacher-verification");
  revalidatePath("/dashboard");
  revalidatePath("/profile");
  revalidatePath("/dashboard/teacher");

  return {
    success:
      role === "teacher"
        ? "Teacher approved and user role updated successfully."
        : "User role updated successfully.",
    error: null,
  };
}