import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

function getBaseUrl(request: NextRequest) {
  const origin = request.headers.get("origin");

  if (origin) {
    return origin;
  }

  const host = request.headers.get("host");

  if (host) {
    const protocol = host.includes("localhost") ? "http" : "https";
    return `${protocol}://${host}`;
  }

  return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
}

function getDashboardPath(role: string | null | undefined) {
  if (role === "admin") {
    return "/dashboard/admin";
  }

  if (role === "teacher") {
    return "/dashboard/teacher";
  }

  return "/dashboard";
}

export async function GET(request: NextRequest) {
  const supabase = await createClient();
  const baseUrl = getBaseUrl(request);

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return NextResponse.redirect(new URL("/login", baseUrl));
  }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("id, full_name, role")
    .eq("id", user.id)
    .maybeSingle();

  if (profileError) {
    return NextResponse.redirect(
      new URL(
        `/login?message=${encodeURIComponent(
          "Could not load profile. Please try again.",
        )}`,
        baseUrl,
      ),
    );
  }

  if (!profile) {
    await supabase.from("profiles").insert({
      id: user.id,
      full_name: user.email?.split("@")[0] || "Student",
      role: "student",
      student_id: `STU${Math.floor(1000000 + Math.random() * 9000000)}`,
    });

    return NextResponse.redirect(new URL("/dashboard", baseUrl));
  }

  const dashboardPath = getDashboardPath(profile.role);

  return NextResponse.redirect(new URL(dashboardPath, baseUrl));
}