import FloatingAIButton from '@/components/FloatingAIButton'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import DashboardShell from '@/components/DashboardShell'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/register')
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#070b2d] font-sans text-[#17123f]">
      {/* Main dark purple / sakura background */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.28),transparent_32%),radial-gradient(circle_at_top_right,rgba(124,58,237,0.35),transparent_38%),linear-gradient(135deg,#070b2d_0%,#130a3d_45%,#2e1465_100%)]" />

      {/* Soft glow effects */}
      <div className="pointer-events-none fixed -left-32 top-20 z-0 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl" />
      <div className="pointer-events-none fixed right-0 top-0 z-0 h-96 w-96 rounded-full bg-purple-500/25 blur-3xl" />
      <div className="pointer-events-none fixed bottom-0 left-1/3 z-0 h-80 w-80 rounded-full bg-fuchsia-400/10 blur-3xl" />

      {/* Subtle grid pattern */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[48px_48px]" />

      {/* Decorative sakura text */}
      <div className="pointer-events-none fixed right-10 top-10 z-0 text-7xl opacity-20">
        🌸
      </div>
      <div className="pointer-events-none fixed left-[35%] top-24 z-0 text-5xl opacity-10">
        日本語
      </div>

      <div className="relative z-10 flex min-h-screen">
        <DashboardShell role={profile?.role ?? 'student'}>
          {children}
          <FloatingAIButton />
        </DashboardShell>
      </div>
    </div>
  )
}