import LessonsSidebar from './LessonsSidebar'

export default function LessonsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex w-full">
      <LessonsSidebar />
      <div className="flex-1 lg:ml-[240px]">
        {children}
      </div>
    </div>
  )
}
