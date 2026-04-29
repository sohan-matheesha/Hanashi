'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, BookOpen, MessageCircle, CheckCircle2, Globe, Trophy, Menu, X, Library, GraduationCap, ShieldCheck } from 'lucide-react'

export default function MainSidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  // Hide this main sidebar when inside lessons
  if (pathname.startsWith('/dashboard/lessons')) {
    return null
  }
const navLinks = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Overview', exact: true },
  { href: '/dashboard/lessons', icon: BookOpen, label: 'My Lessons' },
  { href: '/dashboard/conversation', icon: MessageCircle, label: 'Conversation' },
  { href: '/dashboard/quizzes', icon: CheckCircle2, label: 'Quizzes' },
  { href: '/dashboard/lessons/vocabulary', icon: Library, label: 'Vocabulary' },
  { href: '/dashboard/cultural-hub', icon: Globe, label: 'Cultural Hub' },
  { href: '/dashboard/achievements', icon: Trophy, label: 'Achievements' },
  { href: '/dashboard/teacher', icon: GraduationCap, label: 'Teacher Panel' },
  { href: '/dashboard/admin', icon: ShieldCheck, label: 'Admin Panel' },
]

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-[22px] left-4 z-30 w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center shadow-sm text-[#202c5c]"
        aria-label="Toggle sidebar"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/30 z-10 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`w-[260px] bg-[#f4f5f7] border-r border-gray-100 flex flex-col fixed h-full z-20 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
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
          {navLinks.map(({ href, icon: Icon, label, exact }) => {
            const isActive = exact ? pathname === href : pathname.startsWith(href)
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all ${isActive ? 'bg-[#a54a5c] text-white font-bold shadow-sm' : 'text-[#59668d] hover:bg-gray-100 font-medium'}`}
              >
                <Icon className="w-[18px] h-[18px]" />
                <span>{label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Upgrade Plan */}
        <div className="p-6 mt-auto">
           <button className="w-full bg-[#394676] text-white text-[10px] tracking-widest uppercase font-bold py-3.5 rounded-full hover:bg-[#202c5c] transition-colors shadow-md">
             Upgrade to Pro
           </button>
        </div>
      </aside>
    </>
  )
}
