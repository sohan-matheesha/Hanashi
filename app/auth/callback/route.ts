import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);

  const code = requestUrl.searchParams.get("code");
  const tokenHash = requestUrl.searchParams.get("token_hash");
  const type = requestUrl.searchParams.get("type") as
    | "signup"
    | "recovery"
    | "invite"
    | "email"
    | null;

  const next = requestUrl.searchParams.get("next") || "/auth/redirect";
  const origin = requestUrl.origin;

  const supabase = await createClient();

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }

    return NextResponse.redirect(
      `${origin}/login?message=${encodeURIComponent(
        "Could not verify login session. Please try again.",
      )}`,
    );
  }

  if (tokenHash && type) {
    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash: tokenHash,
    });

    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }

    return NextResponse.redirect(
      `${origin}/login?message=${encodeURIComponent(
        "Could not verify email. Please try again.",
      )}`,
    );
  }

  return NextResponse.redirect(
    `${origin}/login?message=${encodeURIComponent(
      "Invalid confirmation link. Please try again.",
    )}`,
  );
}