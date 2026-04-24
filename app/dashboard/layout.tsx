import Link from 'next/link'
import { Search, User } from 'lucide-react'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import MainSidebar from './MainSidebar'
import MainContent from './MainContent'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

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
      <div className="flex w-full z-10">
        {/* Dynamic Main Sidebar */}
        <MainSidebar />

        {/* Main Area */}
      <MainContent>
        {/* Top Header */}
        <header className="h-[88px] bg-white/80 backdrop-blur-md flex items-center justify-between px-10 sticky top-0 z-10 border-b border-gray-100/50">
          
          <div className="flex items-center gap-12">
            {/* Logo */}
            <Link href="/dashboard" className="flex items-center">
              <h1 className="font-bold text-3xl tracking-tight text-[#202c5c]">Komorebi</h1>
            </Link>

            {/* Top Navigation Links */}
            <nav className="flex gap-8 hidden md:flex pt-1">
               <Link href="/dashboard/lessons" className="text-[#a1626f] text-sm font-medium border-b-2 border-transparent pb-1 hover:text-[#202c5c] transition-colors">Lessons</Link>
               <Link href="/dashboard/characters" className="text-[#202c5c] text-sm font-bold border-b-2 border-[#a1626f] pb-1">Characters</Link>
               <Link href="/dashboard/dictionary" className="text-gray-500 text-sm font-medium border-b-2 border-transparent pb-1 hover:text-[#202c5c] transition-colors">Dictionary</Link>
            </nav>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4 w-full max-w-[320px] justify-end">
            {/* Search Bar */}
            <div className="relative w-full max-w-[240px]">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
                <Search className="w-[14px] h-[14px]" />
              </div>
              <input
                type="text"
                placeholder="Search characters..."
                className="w-full pl-9 pr-4 py-2 bg-[#f0f0f4] border-none rounded-full text-xs font-medium text-[#202c5c] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#202c5c]/20"
              />
            </div>

            {/* User Icon */}
            <Link href="/profile" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors shrink-0 text-[#202c5c]">
               <User className="w-[14px] h-[14px]" />
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-0">
          {children}
        </main>
      </MainContent>
      </div>
    </div>
  )
}
