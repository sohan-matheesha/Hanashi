'use client'

import Link from 'next/link'
import { Eye, ArrowRight, LayoutGrid } from 'lucide-react'

export default function QuizLandingPage() {
  return (
    <div className="max-w-6xl mx-auto font-sans">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div className="text-[10px] font-black text-gray-400 tracking-widest uppercase flex items-center gap-2">
          <Link href="/dashboard" className="hover:text-hanashi-primary transition-colors">Dashboard</Link>
          <span>›</span>
          <span className="text-hanashi-primary">Quizzes</span>
        </div>
      </div>

      <div className="max-w-2xl mb-12">
        <h1 className="text-4xl font-black text-hanashi-dark mb-4 tracking-tight flex items-center gap-2">
          Test Your Knowledge <span className="text-hanashi-primary font-jp ml-1">試験</span>
        </h1>
        <p className="text-gray-500 font-medium leading-relaxed">
          Challenge yourself and reinforce what you&apos;ve learned. Choose a quiz format below to track your progress and improve retention.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        
        {/* Multiple Choice Quiz Card */}
        <Link href="/dashboard/quiz/multiple-choice" className="group">
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_25px_rgb(0,0,0,0.08)] transition-all h-full flex flex-col hover:-translate-y-1">
            <div className="flex justify-between items-start mb-6">
              <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center">
                <LayoutGrid className="w-8 h-8" />
              </div>
              <div className="bg-blue-50 text-blue-600 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest">
                Comprehensive
              </div>
            </div>
            <h3 className="text-2xl font-black text-hanashi-dark mb-2 group-hover:text-blue-500 transition-colors">
              Multiple Choice Quiz
            </h3>
            <p className="text-gray-500 font-medium mb-8">
              Select the correct translation or reading from up to 4 options to test your broad understanding.
            </p>
            <div className="mt-auto flex items-center text-blue-500 font-bold text-sm gap-2">
              Start Quiz <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>

        {/* Character Recognition Quiz Card */}
        <Link href="/dashboard/quiz/character-recognition" className="group">
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_25px_rgb(0,0,0,0.08)] transition-all h-full flex flex-col hover:-translate-y-1">
            <div className="flex justify-between items-start mb-6">
              <div className="w-16 h-16 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center">
                <Eye className="w-8 h-8" />
              </div>
              <div className="bg-orange-50 text-orange-600 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest">
                Visual Memory
              </div>
            </div>
            <h3 className="text-2xl font-black text-hanashi-dark mb-2 group-hover:text-orange-500 transition-colors">
              Character Recognition
            </h3>
            <p className="text-gray-500 font-medium mb-8">
              Identify Kanji or Kana characters quickly as they appear to improve your visual reading speed.
            </p>
            <div className="mt-auto flex items-center text-orange-500 font-bold text-sm gap-2">
              Start Quiz <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>

      </div>
    </div>
  )
}
