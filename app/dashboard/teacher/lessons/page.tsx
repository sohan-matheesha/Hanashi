import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  FileText,
  PlusCircle,
  Video,
} from "lucide-react";

const lessonTools = [
  {
    title: "Create Lesson",
    description:
      "Prepare beginner Japanese lessons for Hiragana, Katakana, vocabulary, and grammar.",
    icon: PlusCircle,
  },
  {
    title: "Lesson Materials",
    description:
      "Organise notes, examples, explanations, and practice tasks for students.",
    icon: FileText,
  },
  {
    title: "Video Resources",
    description:
      "Connect video-based learning materials to support student understanding.",
    icon: Video,
  },
];

export default function TeacherLessonsPage() {
  return (
    <div className="min-h-screen bg-[#fafafc] px-4 py-8 md:px-8">
      <Link
        href="/dashboard/teacher"
        className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-[#a54a5c]"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Teacher Panel
      </Link>

      <div className="mb-8 rounded-3xl bg-white p-8 shadow-sm">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-[#a54a5c]">
          <BookOpen className="h-7 w-7" />
        </div>

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#a54a5c]">
          Teacher Panel
        </p>

        <h1 className="text-3xl font-extrabold text-[#202c5c]">
          Manage Lessons
        </h1>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-500">
          Teachers can create, organise, and manage Japanese learning materials
          for beginner students. This section is prepared for lesson content
          management and teacher-published learning resources.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {lessonTools.map((tool) => {
          const Icon = tool.icon;

          return (
            <div key={tool.title} className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 text-[#a54a5c]">
                <Icon className="h-6 w-6" />
              </div>

              <h2 className="text-xl font-extrabold text-[#202c5c]">
                {tool.title}
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                {tool.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-3xl border border-dashed border-pink-200 bg-white p-6 text-center">
        <h3 className="text-xl font-extrabold text-[#202c5c]">
          Lesson management area
        </h3>

        <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-gray-500">
          This section can be connected with Supabase lesson tables so teachers
          can add, edit, publish, and remove lesson content.
        </p>
      </div>
    </div>
  );
}