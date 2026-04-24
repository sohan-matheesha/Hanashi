import { createClient } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/dashboard'

  if (code) {
    const supabase = await createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      // Use the origin from the request so it works on both localhost and Vercel
      return NextResponse.redirect(`${origin}${next}`)
    }
  }

  // Return the user to login with an error message if something went wrong
  return NextResponse.redirect(`${origin}/login?message=Could not verify email. Please try again.`)
}
