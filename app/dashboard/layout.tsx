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
    <div className="min-h-screen bg-[#fafafc] flex font-sans text-[#202c5c] relative">
      <DashboardShell role={profile?.role ?? 'student'}>
        {children}
        <FloatingAIButton />
      </DashboardShell>
    </div>
  )
}