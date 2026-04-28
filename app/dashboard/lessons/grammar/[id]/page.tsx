'use client'

import { use } from 'react'
import { grammarLessons } from '../data'
import { notFound } from 'next/navigation'
import JapaneseParticlesNotes from '../Particles'
import DesuGrammarNotes from '../Tenses'
import JapaneseAdjectivesNotes from '../Adjectives'
import JapaneseVerbsFormsNotes from '../VerbsForms'
import PolitePlainNotes from '../PolitePlain'
import JapaneseNounsNotes from '../Nouns'

// Fallback Generic View for other categories
function GenericView({ lesson }: any) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-[#202c5c] text-4xl font-black tracking-tight mb-2">{lesson.title}</h2>
      <p className="text-gray-400 text-sm font-medium mb-6 font-jp">{lesson.title_sinhala}</p>
      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
        <p className="text-gray-500 text-lg leading-relaxed">{lesson.description}</p>
        <div className="mt-8 pt-8 border-t border-gray-50 flex items-center gap-3 text-gray-400 text-sm font-bold">
           <div className="w-2 h-2 rounded-full bg-amber-400"></div>
           Content for this module is currently being updated.
        </div>
      </div>
    </div>
  )
}

export default function GrammarItemPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const lesson = grammarLessons.find(l => l.id === resolvedParams.id)
  
  if (!lesson) notFound()
  
  // Custom view for Particles
  if (lesson.id === 'particles') return <JapaneseParticlesNotes />

  // Custom view for Tenses
  if (lesson.id === 'tenses') return <DesuGrammarNotes />

  // Custom view for Adjectives
  if (lesson.id === 'adjectives') return <JapaneseAdjectivesNotes />

  // Custom view for Verbs / Forms
  if (lesson.id === 'verbs-forms') return <JapaneseVerbsFormsNotes />

  // Custom view for Polite and Plain Form
  if (lesson.id === 'polite-plain') return <PolitePlainNotes />

  // Custom view for Nouns
  if (lesson.id === 'nouns') return <JapaneseNounsNotes />
  
  // Default view for others
  return <GenericView lesson={lesson} />
}
