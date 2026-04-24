'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, BookOpen, MessageCircle, CheckCircle2, Globe, Trophy } from 'lucide-react'

export default function MainSidebar() {
  const pathname = usePathname()

  // Hide this main sidebar when inside lessons
  if (pathname.startsWith('/dashboard/lessons')) {
    return null
  }

  return (
    <aside className="w-[260px] bg-[#f4f5f7] border-r border-gray-100 flex flex-col fixed h-full z-20">
      {/* Profile/Progress Section */}
      <div className="pt-10 px-8 pb-6 border-b border-white">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full border-2 border-[#5484a4] bg-[#42959b] overflow-hidden flex items-center justify-center shrink-0">
             <div className="w-6 h-6 bg-[#ffe0bd] rounded-full mt-2 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-1 bg-black/20 rounded-full"></div>
             </div>
          </div>
          <div>
            <h2 className="text-[#202c5c] font-bold text-[15px] leading-tight">Learning Path</h2>
            <p className="text-gray-500 font-medium text-xs">Genki Level 1</p>
          </div>
        </div>
        
        <div className="w-full bg-[#f0f0f4] h-1.5 rounded-full overflow-hidden mb-2">
          <div className="bg-[#7d505f] h-full w-[65%] rounded-full"></div>
        </div>
        <p className="text-[#7d505f] font-bold tracking-widest text-[9px] uppercase">65% Mastered</p>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col py-4 px-4 gap-1">
        <Link href="/dashboard" className={`flex items-center gap-4 px-4 py-3 rounded-2xl font-medium transition-all ${pathname === '/dashboard' ? 'bg-[#a54a5c] text-white font-bold shadow-sm' : 'text-[#59668d] hover:bg-gray-100'}`}>
           <LayoutDashboard className="w-[18px] h-[18px]" />
           <span>Overview</span>
        </Link>
        <Link href="/dashboard/lessons" className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all ${pathname.startsWith('/dashboard/lessons') ? 'bg-[#a54a5c] text-white font-bold shadow-sm' : 'text-[#59668d] hover:bg-gray-100 font-medium'}`}>
           <BookOpen className="w-[18px] h-[18px]" />
           <span>My Lessons</span>
        </Link>
        <Link href="/dashboard/conversation" className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all ${pathname.startsWith('/dashboard/conversation') ? 'bg-[#a54a5c] text-white font-bold shadow-sm' : 'text-[#59668d] hover:bg-gray-100 font-medium'}`}>
           <MessageCircle className="w-[18px] h-[18px]" />
           <span>Conversation</span>
        </Link>
        <Link href="/dashboard/quizzes" className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all ${pathname.startsWith('/dashboard/quizzes') ? 'bg-[#a54a5c] text-white font-bold shadow-sm' : 'text-[#59668d] hover:bg-gray-100 font-medium'}`}>
           <CheckCircle2 className="w-[18px] h-[18px]" />
           <span>Quizzes</span>
        </Link>
        <Link href="/dashboard/cultural-hub" className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all ${pathname.startsWith('/dashboard/cultural-hub') ? 'bg-[#a54a5c] text-white font-bold shadow-sm' : 'text-[#59668d] hover:bg-gray-100 font-medium'}`}>
           <Globe className="w-[18px] h-[18px]" />
           <span>Cultural Hub</span>
        </Link>
        <Link href="/dashboard/achievements" className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all ${pathname.startsWith('/dashboard/achievements') ? 'bg-[#a54a5c] text-white font-bold shadow-sm' : 'text-[#59668d] hover:bg-gray-100 font-medium'}`}>
           <Trophy className="w-[18px] h-[18px]" />
           <span>Achievements</span>
        </Link>
      </nav>

      {/* Upgrade Plan */}
      <div className="p-6 mt-auto">
         <button className="w-full bg-[#394676] text-white text-[10px] tracking-widest uppercase font-bold py-3.5 rounded-full hover:bg-[#202c5c] transition-colors shadow-md">
           Upgrade to Pro
         </button>
      </div>
    </aside>
  )
}
