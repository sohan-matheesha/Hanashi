'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BookOpen, FileText, Languages, PenTool, RefreshCw, GraduationCap } from 'lucide-react'

export default function LessonsSidebar() {
  const pathname = usePathname()

  const links = [
    { name: 'Hiragana', href: '/dashboard/lessons/hiragana', icon: BookOpen },
    { name: 'Katakana', href: '/dashboard/lessons/katakana', icon: FileText },
    { name: 'Kanji', href: '/dashboard/lessons/kanji', icon: Languages },
    { name: 'Grammar', href: '/dashboard/lessons/grammar', icon: PenTool },
    { name: 'Review', href: '/dashboard/lessons/review', icon: RefreshCw },
  ]

  return (
    <aside className="w-[240px] bg-[#f4f5f7] border-r border-gray-100 flex flex-col fixed h-[calc(100vh-88px)] top-[88px] left-0 z-10 hidden lg:flex">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="bg-[#4d6096] text-white p-2.5 rounded-2xl shadow-sm">
            <GraduationCap className="w-7 h-7" />
          </div>
          <div>
            <h2 className="text-[#202c5c] font-bold text-[15px] leading-tight">Learning Path</h2>
            <p className="text-gray-500 font-medium text-[13px]">N5 Proficiency</p>
          </div>
        </div>
      </div>
      
      <div className="flex-1 py-1 flex flex-col gap-2 px-3">
        {links.map((link) => {
          const Icon = link.icon
          const isActive = pathname.startsWith(link.href)
          
          return (
            <Link 
              key={link.name} 
              href={link.href}
              className={`flex items-center gap-4 px-4 py-3 rounded-2xl transition-all ${isActive ? 'bg-white text-[#2a3b7c] font-bold shadow-sm' : 'text-gray-500 hover:bg-white/50 font-medium'}`}
            >
              <Icon className="w-[18px] h-[18px]" strokeWidth={2.5} />
              <span>{link.name}</span>
            </Link>
          )
        })}
      </div>
    </aside>
  )
}
