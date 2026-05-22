"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";

function getRedirectPath(role: string | null | undefined) {
  if (role === "admin") {
    return "/dashboard/admin";
  }

  if (role === "teacher") {
    return "/dashboard/teacher";
  }

  return "/dashboard";
}

export async function login(formData: FormData) {
  const supabase = await createClient();

  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");

  if (!email || !password) {
    redirect("/login?message=Please enter email and password");
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    redirect("/login?message=Could not authenticate user");
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?message=Login failed. Please try again");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("id, role")
    .eq("id", user.id)
    .maybeSingle();

  if (!profile) {
    await supabase.from("profiles").insert({
      id: user.id,
      role: "student",
      full_name: user.email?.split("@")[0] || "Student",
      student_id: `STU${Math.floor(1000000 + Math.random() * 9000000)}`,
    });

    revalidatePath("/", "layout");
    redirect("/dashboard");
  }

  const redirectPath = getRedirectPath(profile.role);

  revalidatePath("/", "layout");
  redirect(redirectPath);
}

export async function signup(formData: FormData) {
  const supabase = await createClient();
  const headersList = await headers();

  const origin =
    headersList.get("origin") || headersList.get("x-forwarded-host") || "";

  const siteUrl = origin.startsWith("http") ? origin : `https://${origin}`;

  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");
  const fullName = String(formData.get("full_name") || "").trim();

  if (!email || !password) {
    redirect("/register?message=Please enter email and password");
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${siteUrl}/auth/callback`,
      data: {
        full_name: fullName || email.split("@")[0],
        role: "student",
      },
    },
  });

  if (error) {
    redirect(`/register?message=${encodeURIComponent(error.message)}`);
  }

  if (data.user) {
    await supabase.from("profiles").upsert({
      id: data.user.id,
      full_name: fullName || email.split("@")[0],
      role: "student",
      student_id: `STU${Math.floor(1000000 + Math.random() * 9000000)}`,
    });
  }

  revalidatePath("/", "layout");

  redirect(
    "/login?message=Account created successfully. Please check your email and login",
  );
}