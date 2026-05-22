import LessonsSidebar from "./LessonsSidebar";

export default function LessonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fff7fb]">
      <LessonsSidebar />

      <main className="min-h-screen bg-[#fff7fb] lg:ml-60">
        {children}
      </main>
    </div>
  );
}