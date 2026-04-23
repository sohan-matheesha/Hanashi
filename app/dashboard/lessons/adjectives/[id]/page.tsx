'use client'

import { use } from 'react'
import { adjectivesLessons, AdjectivesItem } from '../data'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

function BasicCard({ char, className = "" }: { char: AdjectivesItem, className?: string }) {
  if (!char) return null;
  return (
    <div className={`bg-white rounded-[2rem] p-6 pb-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col hover:border-pink-200 transition-colors group h-full ${className}`}>
      <div className="flex flex-col items-center flex-1">
        <span className="text-[5rem] md:text-[6rem] font-jp font-medium text-[#202c5c] leading-none mb-4 group-hover:scale-105 transition-transform duration-300">
          {char.char}
        </span>
        
        <div className="flex gap-2 items-center mb-6">
          <span className="bg-[#feeef5] text-[#c64188] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">{char.romaji}</span>
          <span className="bg-[#ffebf0] text-[#e86b9f] text-[10px] font-black px-3 py-1 rounded-full">{char.sinhala_pronounce}</span>
        </div>

        <div className="w-full text-left mt-auto">
          <p className="text-[8px] font-black text-gray-400 tracking-widest uppercase mb-1">Mnemonic</p>
          <p className="text-[#64596b] text-xs font-medium leading-relaxed mb-4">
            {char.mnemonic_hint}
          </p>
        </div>
      </div>

      <div className="w-full border-t border-gray-100 pt-4 mt-auto">
        <p className="text-[8px] font-black text-gray-400 tracking-widest uppercase mb-1.5">Example Word</p>
        <p className="text-[#202c5c] text-sm font-bold font-jp">
          {char.example_word} <span className="text-gray-400 text-[10px] font-medium">({char.example_meaning_sinhala})</span>
        </p>
      </div>
    </div>
  )
}

function Section3({ lesson }: { lesson: any }) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-start justify-between mb-12">
        <div className="w-1/2">
          <h2 className="text-[#202c5c] text-3xl md:text-4xl font-black tracking-tight mb-2">
            {lesson.title}
          </h2>
          <p className="text-gray-400 text-sm font-medium mb-4 font-jp">{lesson.title_sinhala}</p>
          <p className="text-gray-500 text-sm leading-relaxed max-w-md mt-2">
            {lesson.description} Mastery of these columns unlocks foundational vocabulary.
          </p>
        </div>
        <div className="flex items-center gap-1.5 pt-4">
          <div className="w-6 h-1.5 bg-[#4a5578] rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-[#4a5578] rounded-full opacity-40"></div>
          <div className="w-1.5 h-1.5 bg-[#4a5578] rounded-full opacity-40"></div>
        </div>
      </div>

      {/* Grid of 10 characters - 5 cols x 2 rows */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {lesson.content.map((char: any, i: number) => (
          <BasicCard key={i} char={char} />
        ))}
      </div>

      <div className="mt-8 bg-[#202c5c] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-white text-lg font-bold mb-1">Ready to Practice?</h3>
          <p className="text-white/70 text-xs">Test your recognition of the Na and Ha columns.</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-white text-[#202c5c] px-6 py-3 rounded-full text-xs font-bold shadow-sm hover:bg-gray-50 transition-colors">
            Writing Guide
          </button>
          <button className="bg-[#c64188] text-white px-6 py-3 rounded-full text-xs font-bold shadow-sm hover:bg-[#a63470] transition-colors">
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  )
}

function Section4({ lesson }: { lesson: any }) {
  // Map characters by Romaji to place them precisely
  const charMap = lesson.content.reduce((acc: any, char: any) => {
    acc[char.romaji] = char
    return acc
  }, {})

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-10">
        <p className="text-[#e86b9f] text-[10px] font-black tracking-widest uppercase mb-1">Current Lesson</p>
        <p className="text-gray-300 text-[8px] font-black tracking-widest uppercase mb-4">Mastery Path</p>
        <div className="flex justify-between items-start">
          <div className="w-2/3">
            <h2 className="text-[#202c5c] text-3xl font-black tracking-tight mb-1">
              {lesson.title}
            </h2>
            <p className="text-gray-400 text-xs font-medium mb-3 font-jp">{lesson.title_sinhala}</p>
            <p className="text-gray-500 text-xs leading-relaxed max-w-sm mt-3">
              Deepen your understanding of the Japanese script by mastering the 'Ma' column and the unique 'Ya' glide characters. Practice the flow of each stroke to achieve Zen-like precision.
            </p>
          </div>
          <div className="flex items-center gap-1.5 pt-4">
            <div className="w-6 h-1.5 bg-[#4a5578] rounded-full opacity-40"></div>
            <div className="w-6 h-1.5 bg-[#4a5578] rounded-full opacity-40"></div>
            <div className="w-6 h-1.5 bg-[#4a5578] rounded-full opacity-40"></div>
            <div className="w-6 h-1.5 bg-[#4a5578] rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-[#4a5578] rounded-full opacity-40"></div>
          </div>
        </div>
      </div>

      {/* Complex Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-auto pb-8">
        {/* Top Row */}
        <BasicCard char={charMap['ma']} />
        <BasicCard char={charMap['mi']} />
        <BasicCard char={charMap['mu']} />
        
        {/* MO blocks right side, spans 2 rows visually */}
        <div className="md:row-span-2 col-span-1 bg-[#ece9f0] rounded-[2rem] p-6 pb-8 shadow-sm flex flex-col items-center">
          <span className="text-[6rem] font-jp font-medium text-[#202c5c] leading-none mb-4 mt-6">{charMap['mo']?.char}</span>
          <div className="flex gap-2 items-center mb-6">
            <span className="bg-white text-[#c64188] text-[10px] font-black px-3 py-1 rounded-full uppercase">mo</span>
            <span className="bg-[#ffebf0] text-[#e86b9f] text-[10px] font-black px-3 py-1 rounded-full">{charMap['mo']?.sinhala_pronounce}</span>
          </div>
          <p className="text-[#64596b] text-xs text-center px-4 leading-relaxed mb-10 italic mt-8">"{charMap['mo']?.mnemonic_hint}"</p>
          
          <div className="w-full text-center mt-auto border-t border-white pt-6">
            <p className="text-[8px] font-black text-gray-500 tracking-widest uppercase mb-1">Example Word</p>
            <p className="text-[#202c5c] text-lg font-bold font-jp">{charMap['mo']?.example_word} <span className="text-gray-500 text-xs font-normal">({charMap['mo']?.example_meaning_sinhala})</span></p>
            <p className="text-gray-500 text-[10px] uppercase font-bold mt-1">Peach</p>
          </div>
        </div>

        {/* ME large block */}
        <div className="md:col-span-2 bg-[#46548a] rounded-[2rem] p-8 shadow-md flex flex-col md:flex-row h-full relative overflow-hidden text-white min-h-[220px]">
           <div className="absolute top-4 right-10 opacity-20 hidden md:block">
             {/* Eye graphic representation */}
             <svg width="120" height="90" viewBox="0 0 100 100" fill="currentColor">
               <path d="M50 20C20 20 0 50 0 50C0 50 20 80 50 80C80 80 100 50 100 50C100 50 80 20 50 20ZM50 70C39 70 30 61 30 50C30 39 39 30 50 30C61 30 70 39 70 50C70 61 61 70 50 70Z" />
               <circle cx="50" cy="50" r="10" />
             </svg>
           </div>
           <div className="w-full md:w-1/2 flex flex-col z-10">
             <span className="text-[6rem] font-jp font-medium leading-none mb-2">{charMap['me']?.char}</span>
             <div className="flex gap-2 items-center mt-4">
               <span className="bg-white text-[#46548a] text-[10px] font-black px-3 py-1 rounded-full uppercase">me</span>
               <span className="bg-white/20 text-white text-[10px] font-black px-3 py-1 rounded-full">{charMap['me']?.sinhala_pronounce}</span>
             </div>
           </div>
           <div className="w-full md:w-1/2 flex flex-col justify-end z-10 border-t md:border-t-0 md:border-l border-white/20 mt-6 md:mt-0 pt-4 md:pt-0 md:pl-6">
             <div className="mb-4">
               <p className="text-[8px] font-black text-white/50 tracking-widest uppercase mb-1">Mnemonic</p>
               <p className="text-white/90 text-[11px] leading-relaxed">{charMap['me']?.mnemonic_hint}</p>
             </div>
             <div>
               <p className="text-[8px] font-black text-white/50 tracking-widest uppercase mb-1">Primary Example</p>
               <p className="text-white text-lg font-bold font-jp">
                 Megane <span className="font-sans text-xs font-normal text-white/70">({charMap['me']?.example_meaning_sinhala})</span>
               </p>
               <p className="text-white/60 text-[9px] uppercase font-bold mt-1">Glasses (ඇස් කණ්ණාඩි)</p>
             </div>
           </div>
        </div>

        {/* Empty placeholder column implicitly handled by CSS Grid when using 4 cols */}
        {/* Bottom Row */}
        <BasicCard char={charMap['ya']} />
        <BasicCard char={charMap['yu']} />
        <BasicCard char={charMap['yo']} />
      </div>

      <div className="bg-[#e2f9ee] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border-l-8 border-[#91dfbe]">
        <div className="flex-1">
          <h3 className="text-[#1a4a38] text-xl font-black mb-1">Ready for Basics 4 Review?</h3>
          <p className="text-[#1a4a38]/80 text-xs max-w-sm leading-relaxed mt-2">Put your 'Ma' and 'Ya' knowledge to the test. Trace the characters and match them with their sounds to earn your mastery badge.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-[#202c5c] text-white px-8 py-3.5 rounded-full text-xs font-bold shadow-sm shadow-[#202c5c]/20 hover:bg-[#1a234a]">
            Start Quiz
          </button>
          <button className="bg-[#ffebf0] text-[#c64188] border border-[#ffebf0] px-8 py-3.5 rounded-full text-xs font-bold shadow-sm hover:bg-[#ffe3ea]">
            Trace Practice
          </button>
        </div>
      </div>
    </div>
  )
}

function Section5({ lesson }: { lesson: any }) {
  const ra_n = lesson.content.slice(0, 8)
  const dakuon = lesson.content.slice(8)

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      <div className="mb-12 flex justify-between">
        <div className="w-1/2">
          <p className="text-[#202c5c]/40 text-[10px] font-black tracking-widest uppercase mb-4">Final Mastery</p>
          <h2 className="text-[#202c5c] text-4xl md:text-5xl font-black tracking-tight mb-2 leading-tight">
             {lesson.title}
          </h2>
          <p className="text-gray-400 text-xs font-medium mb-6 font-jp">{lesson.title_sinhala}</p>
          <p className="text-gray-500 text-sm leading-relaxed max-w-sm mt-4">
            Learn Ra, Ri, Ru, Re, Ro, Wa, Wo, N and GA row. Complete your foundational understanding of the core Hiragana syllabary.
          </p>
        </div>
        <div className="w-[35%] h-[180px]">
          <div className="w-full h-full rounded-[2rem] bg-gradient-to-tr from-[#90733a] to-[#d9a857] shadow-xl overflow-hidden relative border-4 border-[#fffbeb]">
             {/* Simulated video/ink block */}
             <div className="absolute right-0 bottom-0 top-0 w-1/2 bg-black/10"></div>
             <div className="absolute right-8 top-1/2 -translate-y-1/2">
               <div className="w-2 h-16 bg-black/[0.15] rounded-full mx-auto"></div>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {/* Ra, Ri, N */}
        <BasicCard char={ra_n[0]} />
        <BasicCard char={ra_n[1]} />
        <BasicCard char={ra_n[7]} />
      </div>

      <div className="bg-[#f0fcfe] rounded-[2rem] p-8 mb-4 border border-[#d2eff2] flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3">
          <p className="text-[#21918a] text-[9px] font-black tracking-widest uppercase mb-1">Dakuon Expansion</p>
          <h3 className="text-[#1d6b65] text-2xl font-black tracking-tight mb-2">The "GA" Column</h3>
          <p className="text-[#3b8c87] text-[11px] leading-relaxed mt-3 pr-4">Created by adding <strong>tenten</strong> (two small strokes) to the KA row. This turns the 'K' sound into a 'G' sound.</p>
        </div>
        <div className="md:w-2/3 flex gap-2 justify-between flex-wrap">
          {dakuon.map((d: any) => (
             <div key={d.romaji} className="bg-white rounded-[1.25rem] w-[18%] aspect-[3/4] flex flex-col items-center justify-center shadow-sm border border-gray-100 hover:border-[#21918a]/30 transition-colors">
                <span className="text-[2.25rem] md:text-[2.75rem] font-medium font-jp text-[#202c5c] mb-1">{d.char}</span>
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{d.romaji}</span>
             </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
        <BasicCard char={ra_n[6]} /> {/* wo */}
        <BasicCard char={ra_n[2]} /> {/* ru */}
        
        {/* Re spans 2 columns */}
        <div className="md:col-span-2 bg-[#46548a] rounded-[2rem] p-8 shadow-md flex flex-col justify-between relative overflow-hidden text-white h-[320px]">
           <div className="absolute right-0 top-0 bottom-0 w-[45%] bg-[#394676] rounded-l-[100px] opacity-30"></div>
           
           <div className="flex justify-between w-full relative z-10 items-start">
             <span className="text-[7.5rem] font-jp font-medium leading-none mt-2">{ra_n[3]?.char}</span>
             <div className="flex gap-2 items-center">
               <span className="bg-white text-[#46548a] text-[10px] font-black px-3 py-1 rounded-full uppercase">re</span>
               <span className="bg-white/20 text-white text-[10px] font-black px-3 py-1 rounded-full">{ra_n[3]?.sinhala_pronounce}</span>
             </div>
           </div>

           <div className="flex w-full mt-auto relative z-10 border-t border-white/10 pt-5">
              <div className="w-1/2 pr-4">
               <p className="text-[8px] font-black text-white/50 tracking-widest uppercase mb-1">Mnemonic</p>
               <p className="text-white/90 text-xs font-medium">{ra_n[3]?.mnemonic_hint}</p>
              </div>
              <div className="w-1/2 pl-4 border-l border-white/10">
               <p className="text-[8px] font-black text-white/50 tracking-widest uppercase mb-1">Example</p>
               <p className="text-white text-lg font-bold font-jp">
                 くるま <span className="font-sans text-xs font-normal text-white/70"></span>
               </p>
               <p className="text-white/60 text-[9px] font-bold">(Kuruma)</p>
              </div>
           </div>
        </div>
      </div>

      <div className="bg-[#eceef8] rounded-[2.5rem] p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#d5d7f5]">
        <div>
          <h3 className="text-[#202c5c] text-xl font-black mb-1">Foundation Complete!</h3>
          <p className="text-[#202c5c]/70 text-xs mt-2">You've reached the end of the Basics series. Ready to test your mastery of all 46 characters?</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border text-[#202c5c] px-6 py-3.5 rounded-full text-xs font-bold hover:bg-gray-50 flex items-center shadow-sm">
            Retake Basics 5
          </button>
          <button className="bg-[#202c5c] text-white px-8 py-3.5 rounded-full text-xs font-bold shadow-md shadow-[#202c5c]/20 hover:bg-[#1a234a] flex items-center gap-2">
            Final Exam <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  )
}

function SectionDefault({ lesson }: { lesson: any }) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-12">
        <h2 className="text-[#202c5c] text-4xl font-black tracking-tight mb-2">
          {lesson.title}
        </h2>
        <p className="text-gray-400 text-sm font-medium mb-6 font-jp">{lesson.title_sinhala}</p>
        <p className="text-gray-500 text-sm leading-relaxed max-w-md">
          {lesson.description}
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {lesson.content.map((char: any, i: number) => (
          <BasicCard key={i} char={char} />
        ))}
      </div>
    </div>
  )
}

export default function AdjectivesItemPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const lesson = adjectivesLessons.find(l => l.id === resolvedParams.id)

  if (!lesson) notFound()

  if (lesson.id === 'hiragana-3') return <Section3 lesson={lesson} />
  if (lesson.id === 'hiragana-4') return <Section4 lesson={lesson} />
  if (lesson.id === 'hiragana-5') return <Section5 lesson={lesson} />

  // Render a default grid view for 1 and 2
  return <SectionDefault lesson={lesson} />
}
