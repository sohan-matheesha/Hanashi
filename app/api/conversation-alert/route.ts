import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function POST() {
  try {
    const supabase = await createClient();

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.json(
        { error: "You must be logged in to create a conversation alert." },
        { status: 401 }
      );
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("full_name, role")
      .eq("id", user.id)
      .single();

    const userName =
      profile?.full_name || user.email?.split("@")[0] || "A Hanashi learner";

    const userRole = profile?.role || "student";

    const roomLink = "/dashboard/conversation";

    const title = "Someone is ready for speaking practice";

    const message =
      userRole === "teacher"
        ? `${userName} is available to help students with Japanese speaking practice.`
        : `${userName} is waiting for Japanese speaking practice. Join now if you are free.`;

    const { data, error } = await supabase
      .from("conversation_alerts")
      .insert({
        created_by: user.id,
        created_by_name: userName,
        target_role: "all",
        title,
        message,
        room_link: roomLink,
        status: "active",
      })
      .select()
      .single();

    if (error) {
      console.error("Conversation alert insert error:", error);

      return NextResponse.json(
        { error: "Failed to create conversation alert." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      alert: data,
    });
  } catch (error) {
    console.error("Conversation alert API error:", error);

    return NextResponse.json(
      { error: "Something went wrong while creating the alert." },
      { status: 500 }
    );
  }
}