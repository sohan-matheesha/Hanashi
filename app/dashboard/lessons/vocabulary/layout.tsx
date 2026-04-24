'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Layers, Settings, User } from 'lucide-react'
import { vocabularyLessons } from './data'

export default function VocabularyLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="max-w-[1400px] mx-auto w-full min-h-[900px] bg-[#f8f9fc] rounded-[2rem] shadow-2xl flex flex-col md:flex-row overflow-hidden font-sans border-8 border-white/60 mb-20 relative">
       {/* Main Content */}
       <div className="flex-1 flex flex-col relative w-full h-[900px] overflow-y-auto bg-[#fdfdfd]">
         {/* Top Navigation Bar */}
         <div className="sticky top-0 z-20 flex items-center justify-between px-10 pt-8 pb-4 bg-gradient-to-b from-[#fdfdfd] to-[#fdfdfd]/0 backdrop-blur-sm">
           <div className="flex items-center gap-2">
             <h1 className="text-[#202c5c] text-sm font-black tracking-tight">Zen Vocabulary</h1>
             <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest bg-gray-100 px-2 py-0.5 rounded-sm">Mastery Path</span>
           </div>
           
           <div className="flex items-center gap-6">
             <nav className="hidden sm:flex items-center gap-6 text-xs font-bold text-gray-400">
               <Link href="#" className="text-gray-800 border-b-2 border-gray-800 pb-1">Lessons</Link>
               <Link href="#" className="hover:text-gray-800 transition-colors">Dictionary</Link>
               <Link href="#" className="hover:text-gray-800 transition-colors">Community</Link>
             </nav>
             <div className="flex items-center gap-3">
               <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-800 transition-colors"><span className="sr-only">Support</span><span className="text-[10px]">◯</span></button>
               <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-800 transition-colors"><Settings className="w-3.5 h-3.5" /></button>
             </div>
           </div>
         </div>

         {/* Content Area */}
         <div className="px-10 pb-20">
           {children}
         </div>
       </div>
    </div>
  )
}
