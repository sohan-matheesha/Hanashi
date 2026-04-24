'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Layers, Settings, User } from 'lucide-react'
import { verbsLessons } from './data'

export default function VerbsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="max-w-[1400px] mx-auto w-full min-h-[900px] bg-[#f8f9fc] rounded-[2rem] shadow-2xl flex flex-col md:flex-row overflow-hidden font-sans border-8 border-white/60 mb-20 relative">
       {/* Sidebar */}
       <div className="w-full md:w-[280px] bg-white p-6 lg:p-8 flex flex-col shrink-0 z-10 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
         <div className="flex items-center gap-3 mb-10">
           <div className="w-10 h-10 rounded-full border-2 border-gray-100 flex items-center justify-center overflow-hidden shrink-0">
             <User className="w-5 h-5 text-gray-400" />
           </div>
           <div>
             <h2 className="text-[#202c5c] text-sm font-black tracking-tight leading-tight">My Path</h2>
             <p className="text-gray-400 text-[10px] font-bold">Zen Practitioner</p>
           </div>
         </div>

         <nav className="flex md:flex-col gap-1.5 flex-1 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
           {verbsLessons.map((lesson) => {
              const isActive = pathname.includes(lesson.id)
              return (
                <Link 
                  key={lesson.id} 
                  href={`/dashboard/lessons/verbs/${lesson.id}`}
                  className={`px-4 py-3 rounded-xl font-bold text-xs flex items-center gap-3 transition-all whitespace-nowrap md:whitespace-normal flex-shrink-0 md:flex-shrink relative ${
                      isActive 
                      ? 'bg-[#feeef5] text-[#c64188]' 
                      : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                  }`}
                >
                  {isActive && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-[#e86b9f] rounded-r-full"></div>}
                  <Layers className={`w-4 h-4 ${isActive ? 'text-[#c64188]' : 'text-gray-400'}`} />
                  <span className="truncate">{lesson.title.split(' (')[0]}</span>
                </Link>
              )
           })}
         </nav>

         <div className="mt-auto hidden md:block pt-8">
           <button className="bg-[#202c5c] text-white font-bold py-3.5 px-6 rounded-3xl w-full hover:bg-[#1a234a] transition-colors shadow-lg shadow-[#202c5c]/20 text-xs tracking-wide">
             Review Mastery
           </button>
         </div>
       </div>

       {/* Main Content */}
       <div className="flex-1 flex flex-col relative w-full h-[900px] overflow-y-auto bg-[#fdfdfd]">
         {/* Top Navigation Bar */}
         <div className="sticky top-0 z-20 flex items-center justify-between px-10 pt-8 pb-4 bg-gradient-to-b from-[#fdfdfd] to-[#fdfdfd]/0 backdrop-blur-sm">
           <div className="flex items-center gap-2">
             <h1 className="text-[#202c5c] text-sm font-black tracking-tight">Zen Verbs</h1>
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
