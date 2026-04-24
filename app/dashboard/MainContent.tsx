'use client'

import { usePathname } from 'next/navigation'

export default function MainContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLessonsRoute = pathname.startsWith('/dashboard/lessons')

  return (
    <div className={`flex-1 flex flex-col min-h-screen ${isLessonsRoute ? 'ml-0' : 'ml-[260px]'}`}>
      {children}
    </div>
  )
}
