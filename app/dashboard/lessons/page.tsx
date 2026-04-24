'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Flame, BookOpen, Star, PenTool, BookHeart, Network, Palette, Activity, Lock, ArrowRight,
  Grid, Briefcase, MessageSquare, Compass, FileText
} from 'lucide-react'

export default function MyLessonsPage() {
  const [activeLevel, setActiveLevel] = useState<'beginner' | 'advanced'>('advanced')
  
  const CIRCUMFERENCE = 2 * Math.PI * 36 // ~226.2

  return (
    <div className="max-w-6xl mx-auto font-sans">
      {/* Breadcrumb & Toggle */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div className="text-[10px] font-black text-gray-400 tracking-widest uppercase flex items-center gap-2">
          <Link href="/dashboard" className="hover:text-hanashi-primary transition-colors">Dashboard</Link>
          <span>›</span>
          <span className="text-hanashi-primary">My Lessons</span>
        </div>

        <div className="flex bg-gray-100 p-1 rounded-xl w-fit">
          <button 
            onClick={() => setActiveLevel('beginner')}
            className={`px-5 py-2 rounded-lg font-bold text-sm transition-all ${activeLevel === 'beginner' ? 'bg-white text-hanashi-dark shadow-sm' : 'text-gray-500 hover:text-hanashi-dark'}`}
          >
            Beginner
          </button>
          <button 
            onClick={() => setActiveLevel('advanced')}
            className={`px-5 py-2 rounded-lg font-bold text-sm transition-all ${activeLevel === 'advanced' ? 'bg-white text-hanashi-dark shadow-sm' : 'text-gray-500 hover:text-hanashi-dark'}`}
          >
            Advanced
          </button>
        </div>
      </div>

      {activeLevel === 'beginner' ? (
        <div className="animate-in fade-in duration-500">
          {/* Header Area */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-10">
            <div className="max-w-xl">
              <h1 className="text-4xl font-black text-hanashi-dark mb-3 tracking-tight">
                Beginner Level <span className="text-hanashi-primary font-jp ml-1">初級</span>
              </h1>
              <p className="text-gray-500 font-medium leading-relaxed">
                Master the fundamentals of Japanese language through our structured learning path. Each module builds upon the previous one.
              </p>
            </div>

            {/* Overall Progress Card */}
            <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm flex items-center gap-6 min-w-[280px]">
              <div className="relative w-[80px] h-[80px] flex-shrink-0">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="40" cy="40" r="36" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-50" />
                  <circle 
                    cx="40" 
                    cy="40" 
                    r="36" 
                    stroke="currentColor" 
                    strokeWidth="8" 
                    fill="transparent" 
                    strokeDasharray={CIRCUMFERENCE} 
                    strokeDashoffset={CIRCUMFERENCE - (CIRCUMFERENCE * 0.35)} 
                    strokeLinecap="round" 
                    className="text-hanashi-primary" 
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-sm font-black text-hanashi-primary">
                  35%
                </div>
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-400 tracking-widest uppercase mb-1">Overall Progress</p>
                <p className="text-lg font-black text-hanashi-dark">12 of 40 Lessons</p>
              </div>
            </div>
          </div>

          {/* Lessons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            
            {/* Module 1: Alphabet */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_25px_rgb(0,0,0,0.06)] transition-all flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center text-hanashi-dark relative overflow-hidden">
                   <span className="font-bold text-lg leading-none absolute top-3 left-3">A</span>
                   <span className="font-bold text-sm leading-none absolute bottom-3 right-3 font-jp">あ</span>
                </div>
                <div className="bg-green-100/80 text-green-700 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest">
                  In Progress
                </div>
              </div>
              <h4 className="font-black text-hanashi-dark text-xl mb-1 mt-auto">1. Alphabet - Hiragana and Katakana</h4>
              <p className="text-gray-500 text-sm font-medium mb-8">Basic Japanese syllabaries <span className="font-jp text-xs opacity-70">(あ/ア)</span></p>

              <div className="mt-auto">
                <div className="flex justify-between text-xs font-bold text-gray-500 mb-2">
                  <span>Completion</span>
                  <span>80%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2 mb-6">
                  <div className="bg-hanashi-primary h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
                <Link href="/dashboard/lessons/hiragana" className="w-full bg-hanashi-primary text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-md shadow-hanashi-primary/20 hover:-translate-y-0.5">
                  Continue Learning <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Module 2: Kanji */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_25px_rgb(0,0,0,0.06)] transition-all flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center text-hanashi-dark">
                   <PenTool className="w-6 h-6" />
                </div>
                <div className="bg-green-100/80 text-green-700 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest">
                  In Progress
                </div>
              </div>
              <h4 className="font-black text-hanashi-dark text-xl mb-1 mt-auto">2. Kanji</h4>
              <p className="text-gray-500 text-sm font-medium mb-8">Basic Characters <span className="font-jp text-xs opacity-70">(漢字)</span></p>

              <div className="mt-auto">
                <div className="flex justify-between text-xs font-bold text-gray-500 mb-2">
                  <span>Completion</span>
                  <span>45%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2 mb-6">
                  <div className="bg-hanashi-primary h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <Link href="/dashboard/lessons/kanji" className="w-full bg-hanashi-primary text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-md shadow-hanashi-primary/20 hover:-translate-y-0.5">
                  Continue Learning <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Module 3: Vocabulary */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_25px_rgb(0,0,0,0.06)] transition-all flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center text-hanashi-dark">
                   <BookHeart className="w-6 h-6" />
                </div>
                <div className="bg-emerald-50 text-emerald-600 border border-emerald-100/50 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest">
                  Started
                </div>
              </div>
              <h4 className="font-black text-hanashi-dark text-xl mb-1 mt-auto">3. Vocabulary</h4>
              <p className="text-gray-500 text-sm font-medium mb-8">Daily Essentials <span className="font-jp text-xs opacity-70">(単語)</span></p>

              <div className="mt-auto">
                <div className="flex justify-between text-xs font-bold text-gray-500 mb-2">
                  <span>Completion</span>
                  <span>20%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2 mb-6">
                  <div className="bg-hanashi-primary h-2 rounded-full" style={{ width: '20%' }}></div>
                </div>
<Link href="/dashboard/lessons/vocabulary" className="w-full bg-hanashi-primary text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-md shadow-hanashi-primary/20 hover:-translate-y-0.5">Continue Learning <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>

            {/* Module 4: Grammar */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_25px_rgb(0,0,0,0.06)] transition-all flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500">
                   <Network className="w-6 h-6" />
                </div>
                <div className="bg-blue-50 text-blue-600 border border-blue-100/50 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest">
                  Up Next
                </div>
              </div>
              <h4 className="font-black text-hanashi-dark text-xl mb-1 mt-auto">4. Grammar</h4>
              <p className="text-gray-500 text-sm font-medium mb-4">Basic Sentence Patterns <span className="font-jp text-xs opacity-70">(文法)</span></p>

              <ul className="text-sm font-medium text-gray-500 space-y-2 mb-6 flex-1">
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div> Essential Particles (は, が, を)</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div> Question Words & Pronouns</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div> Basic Noun Sentences</li>
              </ul>

              <div className="mt-auto">
                <div className="flex justify-between text-xs font-bold text-gray-500 mb-2">
                  <span>Completion</span>
                  <span>0%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2 mb-6">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '0%' }}></div>
                </div>
                <Link href="/dashboard/lessons/grammar" className="w-full bg-white border-2 border-blue-100 text-blue-600 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-50 transition-all shadow-sm">Start Module <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>

            {/* Module 5: Adjectives */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_25px_rgb(0,0,0,0.06)] transition-all flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500">
                   <Palette className="w-6 h-6" />
                </div>
                <div className="bg-gray-50 text-gray-500 border border-gray-100/50 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest flex items-center gap-1.5">
                   Started
                </div>
              </div>
              <h4 className="font-black text-hanashi-dark text-xl mb-1 mt-auto">5. Adjectives</h4>
              <p className="text-gray-500 text-sm font-medium mb-4">Describing Things <span className="font-jp text-xs opacity-70">(形容詞)</span></p>
              
              <ul className="text-sm font-medium text-gray-500 space-y-2 mb-6 flex-1 opacity-70">
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-300 rounded-full"></div> i-Adjectives (い-形容詞)</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-300 rounded-full"></div> na-Adjectives (な-形容詞)</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-300 rounded-full"></div> Present & Past Tenses</li>
              </ul>

              <div className="mt-auto">
                <div className="flex justify-between text-xs font-bold text-gray-400 mb-2">
                  <span>Required: Module 4</span>
                  <span>&nbsp;</span>
                </div>
                <div className="w-full bg-gray-50 rounded-full h-2 mb-6"></div>
                <Link href="/dashboard/lessons/adjectives" className="w-full bg-hanashi-primary text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-md shadow-hanashi-primary/20 hover:-translate-y-0.5">Start Module <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>

            {/* Module 6: Verbs */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_25px_rgb(0,0,0,0.06)] transition-all flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-500">
                   <Activity className="w-6 h-6" />
                </div>
                <div className="bg-gray-50 text-gray-500 border border-gray-100/50 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest flex items-center gap-1.5">
                   Started
                </div>
              </div>
              <h4 className="font-black text-hanashi-dark text-xl mb-1 mt-auto">6. Verbs</h4>
              <p className="text-gray-500 text-sm font-medium mb-4">Basic Actions <span className="font-jp text-xs opacity-70">(動詞)</span></p>

              <ul className="text-sm font-medium text-gray-500 space-y-2 mb-6 flex-1 opacity-70">
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-300 rounded-full"></div> Godan vs Ichidan Verbs</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-300 rounded-full"></div> Formal Masu Form (~ます)</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-300 rounded-full"></div> Common Travel & Daily Actions</li>
              </ul>

              <div className="mt-auto">
                <div className="flex justify-between text-xs font-bold text-gray-400 mb-2">
                  <span>Required: Module 5</span>
                  <span>&nbsp;</span>
                </div>
                <div className="w-full bg-gray-50 rounded-full h-2 mb-6"></div>
                <Link href="/dashboard/lessons/verbs" className="w-full bg-hanashi-primary text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-md shadow-hanashi-primary/20 hover:-translate-y-0.5">Start Module <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>

          </div>

          {/* Bottom Stats Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-hanashi-accent/30 rounded-3xl p-6 flex items-center gap-5 border border-hanashi-secondary/40">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-hanashi-primary shadow-sm border border-hanashi-secondary/40">
                <Flame className="w-7 h-7" />
              </div>
              <div>
                <p className="text-[10px] font-black text-hanashi-secondary tracking-widest uppercase mb-1">Day Streak</p>
                <p className="text-2xl font-black text-hanashi-dark tracking-tight">14 Days</p>
              </div>
            </div>

            <div className="bg-gray-50/80 rounded-3xl p-6 flex items-center gap-5 border border-gray-100">
              <div className="w-14 h-14 bg-hanashi-primary rounded-2xl flex items-center justify-center text-white shadow-sm hover:shadow-md transition-shadow">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-400 tracking-widest uppercase mb-1">Words Learned</p>
                <p className="text-2xl font-black text-hanashi-dark tracking-tight">245 Words</p>
              </div>
            </div>

            <div className="bg-gray-50/80 rounded-3xl p-6 flex items-center gap-5 border border-gray-100">
              <div className="w-14 h-14 bg-hanashi-primary rounded-2xl flex items-center justify-center text-white shadow-sm hover:shadow-md transition-shadow">
                <Star className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-400 tracking-widest uppercase mb-1">Skill Score</p>
                <p className="text-2xl font-black text-hanashi-dark tracking-tight">850 XP</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="animate-in fade-in duration-500">
          {/* Advanced Level Content */}
          <div className="max-w-2xl mb-8">
            <h1 className="text-3xl md:text-4xl font-black text-hanashi-dark mb-4 tracking-tight flex items-center gap-2">
              Advanced Level 上級 (Jōkyū)
            </h1>
            <p className="text-gray-500 font-medium leading-relaxed text-[15px]">
              Refine your fluency and master complex linguistic structures. This level focuses on professional communication, literature, and advanced JLPT N1/N2 preparation.
            </p>
          </div>

          {/* Advanced Overall Progress Horizontal Card */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-8 mb-10">
            {/* Circle Progress */}
            <div className="relative w-28 h-28 flex-shrink-0">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="56" cy="56" r="50" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-50" />
                <circle 
                  cx="56" 
                  cy="56" 
                  r="50" 
                  stroke="currentColor" 
                  strokeWidth="8" 
                  fill="transparent" 
                  strokeDasharray={2 * Math.PI * 50} 
                  strokeDashoffset={(2 * Math.PI * 50) - ((2 * Math.PI * 50) * 0.15)} 
                  strokeLinecap="round" 
                  className="text-orange-600" 
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-xl font-black text-hanashi-dark">
                15%
              </div>
            </div>

            {/* Description Area */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-[10px] font-black text-gray-400 tracking-widest uppercase mb-1">Overall Progress</p>
              <p className="text-2xl font-black text-hanashi-dark tracking-tight mb-2">6 of 40 Lessons Completed</p>
              <p className="text-gray-500 font-medium text-sm mb-4">
                You&apos;re making steady progress through the Jōkyū syllabus. Focus on High-stroke Kanji to boost your score.
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <span className="bg-orange-50 text-orange-600 text-xs font-bold px-3 py-1.5 rounded-full">3 Lessons this week</span>
                <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1.5 rounded-full">Top 5% at this level</span>
              </div>
            </div>

            {/* CTA */}
            <div className="w-full md:w-auto flex-shrink-0">
              <button className="w-full md:w-auto bg-[#ea580c] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-orange-700 transition-colors shadow-md shadow-orange-600/20">
                Continue Learning
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <Grid className="w-5 h-5 text-orange-600" />
            <h3 className="text-xl font-black text-hanashi-dark">Lesson Modules</h3>
          </div>

          {/* Advanced Lessons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            
            {/* Module 1 */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_25px_rgb(0,0,0,0.06)] transition-all flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600">
                   <PenTool className="w-5 h-5" />
                </div>
                <div className="bg-orange-50 text-orange-600 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest">
                  In Progress
                </div>
              </div>
              <h4 className="font-black text-hanashi-dark text-lg mb-2">Advanced Kanji</h4>
              <p className="text-gray-500 text-sm font-medium mb-8">High-stroke count, literary characters and academic compounds.</p>

              <div className="mt-auto pt-4 border-t border-gray-50">
                <div className="flex justify-between text-[11px] font-bold text-gray-800 mb-3">
                  <span>40% Complete</span>
                  <span className="text-orange-600">8/20 Kanji</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div className="bg-orange-600 h-1.5 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
            </div>

            {/* Module 2 */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_25px_rgb(0,0,0,0.06)] transition-all flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600">
                   <Briefcase className="w-5 h-5" />
                </div>
                <div className="bg-white border border-gray-200 text-gray-500 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                  Started
                </div>
              </div>
              <h4 className="font-black text-hanashi-dark text-lg mb-2">Business Japanese</h4>
              <p className="text-gray-500 text-sm font-medium mb-8">Mastering Keigo (honorifics), formal email writing, and office etiquette.</p>

              <div className="mt-auto pt-4 border-t border-gray-50">
                <div className="flex justify-between text-[11px] font-bold text-gray-800 mb-3">
                  <span>10% Complete</span>
                  <span className="text-gray-400">Resume soon</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div className="bg-orange-600 h-1.5 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
            </div>

            {/* Module 3 */}
            <div className="bg-gray-50/50 rounded-3xl p-6 border border-gray-100 border-dashed flex flex-col h-full bg-blend-soft-light relative">
              <div className="flex justify-between items-start mb-6 opacity-60">
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-500">
                   <BookOpen className="w-5 h-5" />
                </div>
                <Lock className="w-4 h-4 text-gray-400" />
              </div>
              <h4 className="font-black text-gray-500 text-lg mb-2">Literature & Media</h4>
              <p className="text-gray-400 text-sm font-medium mb-8">Analyzing modern news articles, essays, and classic modern fiction.</p>

              <div className="mt-auto pt-4 border-t border-gray-100">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Next Up (Started)
                </div>
              </div>
            </div>

            {/* Module 4 */}
            <div className="bg-gray-50/50 rounded-3xl p-6 border border-gray-100 flex flex-col h-full opacity-60">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
                   <MessageSquare className="w-5 h-5" />
                </div>
                <Lock className="w-4 h-4 text-gray-400" />
              </div>
              <h4 className="font-black text-gray-500 text-lg mb-2">Dialects & Nuance</h4>
              <p className="text-gray-400 text-sm font-medium mb-8">Regional accents (Kansai-ben) and subtle contextual social cues.</p>

              <div className="mt-auto pt-4 border-t border-gray-100">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Started
                </div>
              </div>
            </div>

            {/* Module 5 */}
            <div className="bg-gray-50/50 rounded-3xl p-6 border border-gray-100 flex flex-col h-full opacity-60">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
                   <Compass className="w-5 h-5" />
                </div>
                <Lock className="w-4 h-4 text-gray-400" />
              </div>
              <h4 className="font-black text-gray-500 text-lg mb-2">Abstract Grammar</h4>
              <p className="text-gray-400 text-sm font-medium mb-8">Complex sentence structures, literary forms, and poetic grammar.</p>

              <div className="mt-auto pt-4 border-t border-gray-100">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Started
                </div>
              </div>
            </div>

            {/* Module 6 */}
            <div className="bg-gray-50/50 rounded-3xl p-6 border border-gray-100 flex flex-col h-full opacity-60">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400">
                   <FileText className="w-5 h-5" />
                </div>
                <Lock className="w-4 h-4 text-gray-400" />
              </div>
              <h4 className="font-black text-gray-500 text-lg mb-2">Academic Writing</h4>
              <p className="text-gray-400 text-sm font-medium mb-8">Structuring arguments, logical flow, and formal essay writing.</p>

              <div className="mt-auto pt-4 border-t border-gray-100">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Started
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  )
}
