'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const vocabularyModules = [
  {
    id: 'greetings',
    kanji: '挨拶',
    title: 'Greetings',
    description: "Master the art of 'Aisatsu'—from formal bows to casual morning checks.",
    badge: 'LEVEL 1',
    badgeColor: 'bg-[#ffe8e8] text-[#c64161]',
    count: '12 WORDS',
    bgColor: 'bg-[#f6f7f9] relative overflow-hidden',
    textColor: 'text-[#202c5c]',
    isImage: true,
    imageSrc: 'https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=600&auto=format&fit=crop',
    gradientColor: 'to-[#f6f7f9]'
  },
  {
    id: 'numbers',
    kanji: '数字',
    title: 'Numbers',
    description: 'Learn to count from 0 to 10,000 and understand the logic of Japanese digits.',
    badge: 'BASICS',
    badgeColor: 'bg-[#ffe8e8] text-[#c64161]',
    count: '20 WORDS',
    bgColor: 'bg-[#f6f7f9] relative overflow-hidden',
    textColor: 'text-[#202c5c]',
    isImage: true,
    imageSrc: 'https://images.unsplash.com/photo-1518134267676-e131d2df5251?q=80&w=600&auto=format&fit=crop',
    gradientColor: 'to-[#f6f7f9]'
  },
  {
    id: 'counting-system',
    kanji: '助数詞',
    title: 'Counting System',
    description: 'Unlock the secret of counters for flat objects, animals, and long things.',
    badge: 'FEATURED',
    badgeColor: 'bg-white text-[#9a8c98]',
    count: '15 COUNTERS',
    bgColor: 'bg-[#fcecf1] relative overflow-hidden',
    textColor: 'text-[#84445c]',
    isImage: true,
    imageSrc: 'https://images.unsplash.com/photo-1506506200949-dfca24d27197?q=80&w=600&auto=format&fit=crop',
    gradientColor: 'to-[#fcecf1]'
  },
  {
    id: 'time',
    kanji: '時間',
    title: 'Time',
    description: 'Telling time, minutes, and periods of the day with precision.',
    badge: 'LEVEL 2',
    badgeColor: 'bg-[#ffe8e8] text-[#c64161]',
    count: '18 WORDS',
    bgColor: 'bg-[#f6f7f9] relative overflow-hidden',
    textColor: 'text-[#202c5c]',
    isImage: true,
    imageSrc: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=600&auto=format&fit=crop',
    gradientColor: 'to-[#f6f7f9]'
  },
  {
    id: 'months',
    kanji: '月',
    title: 'Months',
    description: 'A simple guide to the twelve months of the year.',
    badge: 'BASICS',
    badgeColor: 'bg-[#ffe8e8] text-[#c64161]',
    count: '12 WORDS',
    bgColor: 'bg-[#f6f7f9] relative overflow-hidden',
    textColor: 'text-[#202c5c]',
    isImage: true,
    imageSrc: 'https://images.unsplash.com/photo-1506784951279-d1000bb7fbda?q=80&w=600&auto=format&fit=crop',
    gradientColor: 'to-[#f6f7f9]'
  },
  {
    id: 'years',
    kanji: '年',
    title: 'Years',
    description: 'How to express past, current, and future years and eras.',
    badge: 'BASICS',
    badgeColor: 'bg-[#ffe8e8] text-[#c64161]',
    count: '10 WORDS',
    bgColor: 'bg-[#f6f7f9] relative overflow-hidden',
    textColor: 'text-[#202c5c]',
    isImage: true,
    imageSrc: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600&auto=format&fit=crop',
    gradientColor: 'to-[#f6f7f9]'
  },
  {
    id: 'dates',
    kanji: '日付',
    title: 'Dates',
    description: 'Master the irregular pronunciations of the first 10 days of the month.',
    badge: 'DIFFICULT',
    badgeColor: 'bg-[#ffe8e8] text-[#c64161]',
    count: '31 WORDS',
    bgColor: 'bg-[#f6f7f9] relative overflow-hidden',
    textColor: 'text-[#202c5c]',
    isImage: true,
    imageSrc: 'https://images.unsplash.com/photo-1520779774613-adba35ac9378?q=80&w=600&auto=format&fit=crop',
    gradientColor: 'to-[#f6f7f9]'
  },
  {
    id: 'family-members',
    kanji: '家族',
    title: 'Family Members',
    description: 'Understanding the humble and polite ways to refer to family.',
    badge: 'CULTURAL',
    badgeColor: 'bg-[#ffe8e8] text-[#c64161]',
    count: '22 WORDS',
    bgColor: 'bg-[#f6f7f9] relative overflow-hidden',
    textColor: 'text-[#202c5c]',
    isImage: true,
    imageSrc: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=600&auto=format&fit=crop',
    gradientColor: 'to-[#f6f7f9]'
  },
  {
    id: 'food-drinks',
    kanji: '飲食',
    title: 'Food & Drinks',
    description: 'Essential vocabulary for navigating menus and ordering at an Izakaya.',
    badge: 'POPULAR',
    badgeColor: 'bg-white/20 text-white',
    count: '45 WORDS',
    bgColor: 'bg-[#4a5c88] relative overflow-hidden',
    textColor: 'text-white',
    isImage: true,
    imageSrc: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=600&auto=format&fit=crop',
    gradientColor: 'to-[#4a5c88]'
  },
  {
    id: 'places',
    kanji: '場所',
    title: 'Places',
    description: 'Navigating the city: stations, parks, shops, and landmarks.',
    badge: 'TRAVEL',
    badgeColor: 'bg-[#ffe8e8] text-[#c64161]',
    count: '30 WORDS',
    bgColor: 'bg-[#f6f7f9] relative overflow-hidden',
    textColor: 'text-[#202c5c]',
    isImage: true,
    imageSrc: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=600&auto=format&fit=crop',
    gradientColor: 'to-[#f6f7f9]'
  },
]

export default function VocabularyPage() {
  return (
    <div className="max-w-6xl mx-auto p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 relative">
        <div className="max-w-2xl relative z-10">
          <p className="text-[#848fa5] text-[10px] font-bold tracking-widest uppercase mb-6 flex items-center gap-4">
            <span>Word Bank</span>
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-[#202c5c] leading-tight mb-6">
            Master the <i className="text-[#a54a5c]">Vocabulary</i> of<br />Daily Life.
          </h1>
          <p className="text-gray-500 text-base leading-relaxed max-w-lg">
            Explore curated collections of essential Japanese words. Each module is designed to bridge the gap between simple memorization and cultural intuition.
          </p>
        </div>

        {/* Decorative elements on the right */}
        <div className="absolute right-0 top-0 hidden lg:flex flex-col items-end opacity-20 pointer-events-none">
          <div className="text-7xl font-jp tracking-widest text-[#202c5c]" style={{ writingMode: 'vertical-rl' }}>
            ことば
          </div>
          <div className="text-[10px] font-bold tracking-[0.3em] uppercase mt-4 mr-2">
            Vocabulary
          </div>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        {vocabularyModules.map((module, idx) => (
          <Link 
            key={idx} 
            href={`/dashboard/lessons/vocabulary/${module.id}`}
            className={`${module.bgColor} rounded-4xl p-8 md:p-10 flex flex-col justify-between min-h-85 group cursor-pointer border border-transparent hover:border-gray-200 transition-all duration-300 relative block`}
          >
            {/* Background image for food */}
            {module.isImage && (
              <div className="absolute top-0 right-0 w-[60%] h-full opacity-40 z-0 transition-opacity duration-300 group-hover:opacity-60">
                 {/* Note: since background colors vary, we use an inline style to simulate the dynamic tailwind gradient properly */}
                 <div className="w-full h-full absolute inset-0 z-10" style={{ background: `linear-gradient(to left, transparent, ${module.gradientColor.replace('to-[', '').replace(']', '')})` }}></div>
                 <img src={module.imageSrc} alt={module.title} className="w-full h-full object-cover object-left" />
              </div>
            )}
            
            <div className="flex justify-between items-start relative z-10">
              <h2 className={`text-4xl md:text-5xl font-medium font-jp tracking-widest ${module.textColor}`}>
                {module.kanji}
              </h2>
              <span className={`${module.badgeColor} text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase`}>
                {module.badge}
              </span>
            </div>

            <div className="relative z-10 mt-auto pt-16">
              <h3 className={`text-2xl font-bold mb-3 ${module.textColor}`}>
                {module.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-8 ${module.textColor === 'text-white' ? 'text-white/80' : 'text-gray-500'}`}>
                {module.description}
              </p>
              
              <div className="flex justify-between items-center">
                <span className={`text-[10px] font-bold tracking-widest uppercase ${module.textColor === 'text-white' ? 'text-white/70' : 'text-gray-400'}`}>
                  {module.count}
                </span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${module.textColor === 'text-white' ? 'bg-white text-[#4a5c88]' : module.bgColor === 'bg-[#fcecf1]' ? 'bg-[#84445c] text-white' : 'bg-[#202c5c] text-white'}`}>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Progress Footer */}
      <div className="bg-[#f0f2f5] rounded-4xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-100 mt-16">
        <div>
          <h3 className="text-[#202c5c] text-xl font-bold mb-2">Your Progress</h3>
          <p className="text-gray-500 text-sm">You&apos;ve mastered 124 of 2,400 core vocabulary words.</p>
        </div>
        
        {/* Bars */}
        <div className="flex gap-2 items-end h-12">
          <div className="w-2.5 h-12 bg-[#2d5649] rounded-full"></div>
          <div className="w-2.5 h-10 bg-[#2d5649] rounded-full"></div>
          <div className="w-2.5 h-12 bg-[#2d5649] rounded-full"></div>
          <div className="w-2.5 h-8 bg-[#8dbf9e] rounded-full"></div>
          <div className="w-2.5 h-10 bg-[#d8e3db] rounded-full"></div>
          <div className="w-2.5 h-6 bg-[#d8e3db] rounded-full"></div>
        </div>

        <button className="bg-[#3b4776] text-white px-8 py-4 rounded-full text-sm font-bold shadow-md hover:bg-[#2e375e] transition-colors whitespace-nowrap">
          Continue Daily Practice
        </button>
      </div>

    </div>
  )
}
