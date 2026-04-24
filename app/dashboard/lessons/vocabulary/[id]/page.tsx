'use client'

import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import { ArrowLeft, Volume2, Info, BookOpen } from 'lucide-react'

// Content definitions mapped by id

import { greetingsData } from "../data/greetings"
import { numbersData } from "../data/numbers"
import { familyData } from "../data/family"

const vocabularyContent: Record<string, any> = {
  "greetings": greetingsData,
  "numbers": numbersData,
  "family-members": familyData
}

export default function VocabularyDetailPage() {
  const params = useParams()
  const router = useRouter()
  
  // Safe param extraction for next 15+ 
  const idValue = params?.id;
  const id = Array.isArray(idValue) ? idValue[0] : (typeof idValue === 'string' ? idValue : '');
  
  const content = vocabularyContent[id as keyof typeof vocabularyContent]

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fafafc] flex-col relative w-full overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-br from-[#202c5c]/10 to-[#c64161]/10 -z-10"></div>
         <div className="text-center p-8 bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl border border-white max-w-md w-full">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-gray-400" />
            </div>
            <h1 className="text-3xl font-black text-[#202c5c] mb-3 tracking-tight">Module Coming Soon</h1>
            <p className="text-gray-500 mb-8 leading-relaxed font-medium">We're still crafting the vocabulary list for <span className="text-[#c64161] font-bold">{id || 'this topic'}</span>. Please check back later.</p>
            <button onClick={() => router.push('/dashboard/lessons/vocabulary')} className="w-full px-6 py-4 bg-[#202c5c] text-white rounded-xl font-bold hover:bg-[#1b2550] hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm uppercase tracking-wider">
                Back to Library
            </button>
         </div>
      </div>
    )
  }

  return (
    <div className="bg-[#fafafc] min-h-screen pb-24">
      {/* Hero Header */}
      <div className="relative h-[22rem] md:h-96 w-full overflow-hidden rounded-b-[40px] shadow-sm">
         <div className="absolute inset-0 bg-gradient-to-t from-[#1a1b26] via-black/40 to-black/10 z-10 transition-colors"></div>
         <img src={content.headerImage} alt={content.title} className="w-full h-full object-cover object-center absolute inset-0 z-0 scale-105" />
         
         <div className="absolute inset-0 z-20 max-w-6xl mx-auto px-6 md:px-12 flex flex-col justify-end pb-16">
            <button 
              onClick={() => router.push('/dashboard/lessons/vocabulary')} 
              className="absolute top-10 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-[#202c5c] transition-all font-bold text-sm border border-white/20 hover:border-white shadow-lg shadow-black/10"
            >
              <ArrowLeft className="w-4 h-4" /> <span>Topics</span>
            </button>
            <div className="transform translate-y-4">
              <span className={`inline-block px-4 py-1.5 backdrop-blur-md text-white/90 text-[10px] font-black tracking-[0.2em] uppercase rounded-lg mb-4 shadow-sm border border-white/20`} style={{backgroundColor: 'rgba(198, 65, 97, 0.4)'}}>
                {content.badge}
              </span>
              <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-6 mb-2">
                 <h1 className="text-5xl md:text-7xl font-black text-white font-sans tracking-tight leading-none drop-shadow-md">
                   {content.title}
                 </h1>
                 <span className="text-4xl md:text-6xl font-black text-white/60 font-jp tracking-tight mb-0.5 mix-blend-overlay">
                   {content.kanji}
                 </span>
              </div>
              <p className="text-white/80 max-w-2xl text-base md:text-lg leading-relaxed mt-4 font-medium hidden sm:block">
                {content.description}
              </p>
            </div>
         </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 -mt-8 relative z-30">
         {/* Stats Bar */}
         <div className="bg-white rounded-3xl shadow-xl shadow-[#202c5c]/5 p-6 md:p-8 flex flex-wrap items-center justify-between gap-6 border border-gray-100 mb-12 backdrop-blur-xl">
            <div className="flex items-center gap-8 md:gap-16 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
               <div>
                  <p className="text-[11px] uppercase tracking-[0.15em] font-bold text-gray-400 mb-2">Total Words</p>
                  <p className="text-3xl font-black text-[#202c5c]">{content.items.length}</p>
               </div>
               <div className="w-px h-12 bg-gray-100"></div>
               <div>
                  <p className="text-[11px] uppercase tracking-[0.15em] font-bold text-gray-400 mb-2">Topic</p>
                  <p className={`text-xl font-bold ${content.colorText} break-words whitespace-nowrap`}>{content.title}</p>
               </div>
            </div>
            <button className={`${content.bgColor} hover:opacity-80 text-[#c64161] px-8 py-4 rounded-xl font-bold transition-all text-sm uppercase tracking-widest border border-[#c64161]/20 w-full md:w-auto shadow-sm`}>
               Practice Flashcards
            </button>
         </div>

         {/* Vocabulary Table Layout */}
         <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-12">
            <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="bg-[#202c5c] text-white border-b border-[#2a3b7c]">
                        <th className="px-6 py-5 font-bold text-sm uppercase tracking-wider">No.</th>
                        <th className="px-6 py-5 font-bold text-sm uppercase tracking-wider">Romaji</th>
                        <th className="px-6 py-5 font-bold text-sm uppercase tracking-wider">Hiragana / Kanji</th>
                        <th className="px-6 py-5 font-bold text-sm uppercase tracking-wider">Meaning</th>
                        <th className="px-6 py-5 font-bold text-sm uppercase tracking-wider text-center w-24">Audio</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                     {content.items.map((item: any, index: number) => (
                        <tr key={index} className="hover:bg-[#fff5f7] transition-colors group">
                           <td className="px-6 py-5">
                              <span className="font-bold text-gray-500">{index + 1}</span>
                           </td>
                           <td className="px-6 py-5">
                              <span className={`${content.colorText} bg-[#fff5f7] px-3 py-1.5 rounded-lg text-sm font-bold tracking-wider font-jp uppercase border border-[#c64161]/10`}>{item.romaji}</span>
                           </td>
                           <td className="px-6 py-5">
                              <span className="text-2xl font-black font-jp text-[#202c5c]">{item.kanji}</span>
                           </td>
                           <td className="px-6 py-5">
                              <div>
                                 <span className="font-black text-gray-800 text-lg block mb-1">{item.english}</span>
                                 <span className="text-gray-500 font-medium text-sm">{item.sinhala}</span>
                                 {item.notes && (
                                    <div className="mt-2 flex items-start gap-1.5 text-xs text-gray-500 bg-gray-50 py-1.5 px-3 rounded-md w-fit">
                                       <Info className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                                       <span>{item.notes}</span>
                                    </div>
                                 )}
                              </div>
                           </td>
                           <td className="px-6 py-5 text-center">
                              <button className="text-gray-300 hover:text-[#c64161] hover:bg-[#fff5f7] w-10 h-10 rounded-full transition-all inline-flex items-center justify-center border border-transparent shadow-sm hover:shadow group-hover:border-[#c64161]/20">
                                 <Volume2 className="w-4 h-4" />
                              </button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
    </div>
  )
}
