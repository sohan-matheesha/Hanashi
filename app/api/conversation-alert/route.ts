import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient as createSupabaseAdminClient } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/server";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    const { data: alert, error: alertError } = await supabase
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

    if (alertError) {
      console.error("Conversation alert insert error:", alertError);

      return NextResponse.json(
        { error: "Failed to create conversation alert." },
        { status: 500 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const resendApiKey = process.env.RESEND_API_KEY;
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

    if (!supabaseUrl || !serviceRoleKey || !resendApiKey) {
      return NextResponse.json({
        success: true,
        alert,
        emailStatus:
          "Alert created, but email skipped because environment keys are missing.",
      });
    }

    const adminSupabase = createSupabaseAdminClient(
      supabaseUrl,
      serviceRoleKey
    );

    const { data: usersData, error: usersError } =
      await adminSupabase.auth.admin.listUsers();

    if (usersError) {
      console.error("Supabase admin users error:", usersError);

      return NextResponse.json({
        success: true,
        alert,
        emailStatus: "Alert created, but failed to load users for email.",
      });
    }

    const recipients =
      usersData.users
        ?.filter((item) => item.email && item.id !== user.id)
        .map((item) => item.email as string) ?? [];

    if (recipients.length > 0) {
      const { error: emailError } = await resend.emails.send({
        from: "Hanashi <onboarding@resend.dev>",
        to: recipients,
        subject: "A Hanashi learner is ready for speaking practice",
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color:#202c5c;">Japanese Speaking Practice Request</h2>

            <p>${message}</p>

            <p>
              A Hanashi learner is currently available in the conversation room.
              If you are free, you can join now and practise Japanese speaking together.
            </p>

            <a 
              href="${appUrl}/dashboard/conversation"
              style="display:inline-block;background:#202c5c;color:white;padding:12px 18px;border-radius:999px;text-decoration:none;font-weight:bold;"
            >
              Join Conversation
            </a>

            <p style="margin-top:20px;color:#666;font-size:13px;">
              This speaking practice request will expire soon.
            </p>
          </div>
        `,
      });

      if (emailError) {
        console.error("Resend email error:", emailError);

        return NextResponse.json({
          success: true,
          alert,
          emailStatus: "Alert created, but email failed to send.",
        });
      }
    }

    return NextResponse.json({
      success: true,
      alert,
      emailStatus: `Email sent to ${recipients.length} users.`,
    });
  } catch (error) {
    console.error("Conversation alert API error:", error);

    return NextResponse.json(
      { error: "Something went wrong while creating the alert." },
      { status: 500 }
    );
  }
}