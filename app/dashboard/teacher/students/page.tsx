import Link from "next/link";
import { ArrowLeft, MessageCircle, Search, Users } from "lucide-react";

const supportItems = [
  {
    title: "Student Questions",
    description:
      "Teachers can review student questions and provide learning guidance.",
  },
  {
    title: "Practice Feedback",
    description:
      "Teachers can support learners by giving feedback for lessons and practice tasks.",
  },
  {
    title: "Learning Support",
    description:
      "Teachers can help students improve grammar, vocabulary, and speaking confidence.",
  },
];

export default function TeacherStudentsPage() {
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
          <Users className="h-7 w-7" />
        </div>

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#a54a5c]">
          Teacher Panel
        </p>

        <h1 className="text-3xl font-extrabold text-[#202c5c]">
          Student Support
        </h1>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-500">
          Teachers can support students by reviewing learning needs, answering
          questions, and providing feedback for Japanese practice activities.
        </p>
      </div>

      <div className="mb-8 rounded-3xl bg-white p-5 shadow-sm">
        <div className="flex items-center gap-3 rounded-2xl bg-[#fafafc] px-4 py-3">
          <Search className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search students or support requests..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {supportItems.map((item) => (
          <div key={item.title} className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 text-[#a54a5c]">
              <MessageCircle className="h-6 w-6" />
            </div>

            <h2 className="text-xl font-extrabold text-[#202c5c]">
              {item.title}
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-500">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-dashed border-pink-200 bg-white p-6 text-center">
        <h3 className="text-xl font-extrabold text-[#202c5c]">
          Student support area
        </h3>

        <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-gray-500">
          This section is prepared for future student management, feedback, and
          teacher-student support features.
        </p>
      </div>
    </div>
  );
}