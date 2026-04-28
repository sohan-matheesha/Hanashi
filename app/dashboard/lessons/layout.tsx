'use client'

import { usePathname } from 'next/navigation'
import LessonsSidebar from './LessonsSidebar'

export default function LessonsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isGrammarPage = pathname.startsWith('/dashboard/lessons/grammar')

  return (
    <div className="flex w-full">
      {!isGrammarPage && <LessonsSidebar />}
      <div className={`flex-1 ${isGrammarPage ? '' : 'lg:ml-[240px]'}`}>
        {children}
      </div>
    </div>
  )
}
