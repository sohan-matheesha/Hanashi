import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = await createClient();

  const { data: lessons, error } = await supabase
    .from("lessons")
    .select("id, title, level, category, duration, status, description, created_at")
    .eq("status", "Published")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Published lessons fetch error:", error);

    return NextResponse.json(
      { lessons: [], error: "Failed to fetch published lessons" },
      { status: 500 }
    );
  }

  return NextResponse.json({ lessons: lessons ?? [] });
}