import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Castle, LogOut } from 'lucide-react'

export default async function DashboardPage() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <nav className="w-full h-16 px-8 flex items-center justify-between bg-white border-b border-gray-100 sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2">
          <Castle className="w-5 h-5 text-hanashi-primary" />
          <span className="font-bold text-lg text-hanashi-dark">Hanashi</span>
        </Link>
        <form action={async () => {
          'use server'
          const supabase = await createClient()
          await supabase.auth.signOut()
          redirect('/login')
        }}>
          <button className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-hanashi-dark transition-colors">
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </form>
      </nav>

      <main className="max-w-4xl mx-auto py-12 px-8">
        <h1 className="text-3xl font-bold text-hanashi-dark mb-8">Dashboard</h1>
        
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-hanashi-accent/50 text-hanashi-primary rounded-full flex items-center justify-center font-bold text-xl">
              {user.email?.charAt(0).toUpperCase() || 'U'}
            </div>
            <div>
              <h2 className="text-xl font-bold text-hanashi-dark">Welcome back,</h2>
              <p className="text-gray-500 font-medium">{user.email}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <h3 className="font-bold text-hanashi-dark mb-2">Practice Sessions</h3>
              <p className="text-gray-500 text-sm">You haven&apos;t had any conversation sessions yet. Start exploring to find native speakers!</p>
              <button className="mt-4 bg-white text-hanashi-primary px-4 py-2 border border-hanashi-secondary/50 rounded-lg text-sm font-bold shadow-sm">
                Find a Partner
              </button>
            </div>
            <div className="p-6 rounded-2xl bg-hanashi-accent/30 border border-hanashi-secondary/30">
              <h3 className="font-bold text-hanashi-dark mb-2">Account Status</h3>
              <p className="text-gray-600 text-sm">Your account is successfully connected via Supabase authentication.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
