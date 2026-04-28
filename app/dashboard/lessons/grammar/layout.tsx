'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  BookOpen, Leaf, Clock, Smile, Zap, FileText, Users, List, User, 
  Settings, ChevronRight, ArrowLeft
} from 'lucide-react'
import { grammarLessons } from './data'

export default function GrammarLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Helper to get the correct icon component
  const getIcon = (iconName: string, isActive: boolean) => {
    const props = { className: `w-5 h-5 transition-colors ${isActive ? 'text-[#c64188]' : 'text-gray-500 group-hover:text-gray-700'}` }
    switch (iconName) {
      case 'Leaf': return <Leaf {...props} />
      case 'Clock': return <Clock {...props} />
      case 'Smile': return <Smile {...props} />
      case 'Zap': return <Zap {...props} />
      case 'FileText': return <FileText {...props} />
      case 'Users': return <Users {...props} />
      case 'List': return <List {...props} />
      case 'User': return <User {...props} />
      default: return <BookOpen {...props} />
    }
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Secondary Sidebar (Grammar Specific) */}
      <aside className="w-full md:w-80 bg-white border-r border-gray-100 flex flex-col shrink-0 z-20 overflow-y-auto">
        <div className="p-8 pb-4">
          {/* Back to Lessons */}
          <Link 
            href="/dashboard/lessons" 
            className="flex items-center gap-2 text-gray-400 hover:text-[#202c5c] transition-colors mb-8 group/back"
          >
            <div className="p-1.5 rounded-lg group-hover/back:bg-gray-100 transition-all">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="text-[13px] font-bold tracking-tight">Back to Lessons</span>
          </Link>

          <div className="flex items-center gap-3 mb-10 text-[#202c5c]">
            <BookOpen className="w-6 h-6" />
            <h2 className="text-xl font-bold tracking-tight">Grammar</h2>
          </div>

          <nav className="space-y-1.5 pb-20">
            {grammarLessons.map((lesson) => {
              const isActive = pathname.includes(lesson.id) || (pathname.endsWith('/grammar') && lesson.id === 'particles')
              
              return (
                <Link 
                  key={lesson.id} 
                  href={`/dashboard/lessons/grammar/${lesson.id}`}
                  className={`group flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all relative ${
                    isActive 
                    ? 'bg-[#feeef5] text-[#c64188]' 
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {getIcon(lesson.icon, isActive)}
                    <span className={`text-[13px] font-bold tracking-tight ${isActive ? 'text-[#c64188]' : ''}`}>
                      {lesson.title}
                    </span>
                  </div>
                  
                  {isActive && (
                    <div className="w-1.5 h-1.5 bg-[#c64188] rounded-full"></div>
                  )}
                </Link>
              )
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 bg-[#fafafc] min-h-screen overflow-y-auto">
        <div className="max-w-5xl mx-auto px-6 py-12 md:px-12 lg:px-20">
          {children}
        </div>
      </main>
    </div>
  )
}
