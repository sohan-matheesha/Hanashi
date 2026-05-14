'use client'

import { use } from 'react'
import {
  grammarLessons,
  shortGrammarIntro,
  shortGrammarPatterns,
} from '../data'
import { notFound } from 'next/navigation'
import JapaneseParticlesNotes from '../Particles'
import DesuGrammarNotes from '../Tenses'
import JapaneseAdjectivesNotes from '../Adjectives'
import JapaneseVerbsFormsNotes from '../VerbsForms'
import PolitePlainNotes from '../PolitePlain'
import JapaneseNounsNotes from '../Nouns'

// Short Grammar Custom View
function ShortGrammarView({ lesson }: any) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h2 className="text-[#202c5c] text-4xl font-black tracking-tight mb-2">
          {lesson.title}
        </h2>
        <p className="text-gray-400 text-sm font-medium font-jp">
          {lesson.title_sinhala}
        </p>
      </div>

      <div className="mb-8 rounded-3xl border border-pink-100 bg-white p-8 shadow-sm">
        <p className="text-lg font-bold text-[#202c5c]">
          {shortGrammarIntro}
        </p>
        <p className="mt-4 text-gray-500 text-base leading-relaxed">
          {lesson.description}
        </p>
      </div>

      <div className="grid gap-6">
        {shortGrammarPatterns.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-start">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-pink-50 text-4xl shadow-inner">
                {item.image}
              </div>

              <div className="flex-1">
                <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm font-black text-pink-500">
                      Pattern {item.id}
                    </p>
                    <h3 className="mt-1 text-2xl font-black text-[#202c5c]">
                      {item.pattern}
                    </h3>
                  </div>

                  <span className="w-fit rounded-full bg-gray-100 px-4 py-2 text-sm font-bold text-gray-600">
                    {item.meaning}
                  </span>
                </div>

                <div className="grid gap-3">
                  {item.examples.map((example, index) => (
                    <div
                      key={`${item.id}-${index}`}
                      className="rounded-2xl border border-gray-100 bg-[#fafafc] p-4"
                    >
                      <div className="flex gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pink-100 text-sm font-black text-pink-600">
                          {index + 1}
                        </div>

                        <div>
                          <p className="text-lg font-black text-gray-800">
                            {example.japanese}
                          </p>
                          <p className="mt-1 text-sm font-semibold text-gray-500">
                            {example.english}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Fallback Generic View for other categories
function GenericView({ lesson }: any) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-[#202c5c] text-4xl font-black tracking-tight mb-2">
        {lesson.title}
      </h2>
      <p className="text-gray-400 text-sm font-medium mb-6 font-jp">
        {lesson.title_sinhala}
      </p>
      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
        <p className="text-gray-500 text-lg leading-relaxed">
          {lesson.description}
        </p>
        <div className="mt-8 pt-8 border-t border-gray-50 flex items-center gap-3 text-gray-400 text-sm font-bold">
          <div className="w-2 h-2 rounded-full bg-amber-400"></div>
          Content for this module is currently being updated.
        </div>
      </div>
    </div>
  )
}

export default function GrammarItemPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const resolvedParams = use(params)
  const lesson = grammarLessons.find((l) => l.id === resolvedParams.id)

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

  // Custom view for Short Grammar
  if (lesson.id === 'short-grammar') return <ShortGrammarView lesson={lesson} />

  // Default view for others
  return <GenericView lesson={lesson} />
}