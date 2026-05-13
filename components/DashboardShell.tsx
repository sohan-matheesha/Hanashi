'use client'

import { usePathname } from 'next/navigation'
import MainSidebar from '@/app/dashboard/MainSidebar'
import MainContent from '@/app/dashboard/MainContent'

type UserRole = 'student' | 'teacher' | 'admin'

export default function DashboardShell({
  children,
  role,
}: {
  children: React.ReactNode
  role: UserRole
}) {
  const pathname = usePathname()

  const isConversationPage = pathname.startsWith('/dashboard/conversation')

  if (isConversationPage) {
    return (
      <div className="w-full min-h-screen">
        {children}
      </div>
    )
  }

  return (
    <div className="flex w-full z-10">
      <MainSidebar role={role} />

      <MainContent>
        {children}
      </MainContent>
    </div>
  )
}