'use client'

import { usePathname } from 'next/navigation'

export default function MainContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLessonsRoute = pathname.startsWith('/dashboard/lessons')

  return (
    <main
      className={`relative z-10 flex min-h-screen flex-1 flex-col overflow-x-hidden transition-all duration-300 ${
        isLessonsRoute ? 'ml-0' : 'ml-0 md:ml-[282px]'
      }`}
    >
      <div className="min-h-screen w-full">
        {children}
      </div>
    </main>
  )
}