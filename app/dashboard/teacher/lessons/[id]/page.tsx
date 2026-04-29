import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
import { createClient } from "@/utils/supabase/server";
import { updateLesson } from "../actions";
import { notFound } from "next/navigation";

export default async function EditLessonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const supabase = await createClient();

  const { data: lesson, error } = await supabase
    .from("lessons")
    .select("id, title, level, category, duration, status, description")
    .eq("id", id)
    .single();

  if (error || !lesson) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#fafafc] px-4 py-6 md:px-8">
      <div className="mb-6">
        <Link
          href="/dashboard/teacher/lessons"
          className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-sm font-bold text-[#202c5c] shadow-sm transition hover:bg-orange-50 hover:text-[#FF5A1F]"
        >
          <ArrowLeft size={16} />
          Back to Lessons
        </Link>
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <div className="mb-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#FF5A1F]">
            Teacher Panel
          </p>
          <h1 className="text-3xl font-bold text-[#202c5c]">
            Edit Lesson
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Update lesson details and save the changes to Supabase.
          </p>
        </div>

        <form action={updateLesson} className="grid gap-4 md:grid-cols-2">
          <input type="hidden" name="lessonId" value={lesson.id} />

          <div>
            <label className="mb-2 block text-sm font-bold text-[#202c5c]">
              Lesson Title
            </label>
            <input
              name="title"
              type="text"
              defaultValue={lesson.title}
              required
              className="w-full rounded-2xl bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#FF5A1F]/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#202c5c]">
              Level
            </label>
            <select
              name="level"
              defaultValue={lesson.level}
              required
              className="w-full rounded-2xl bg-gray-50 px-4 py-3 text-sm text-[#202c5c] outline-none focus:ring-2 focus:ring-[#FF5A1F]/20"
            >
              <option value="Beginner">Beginner</option>
              <option value="N5">N5</option>
              <option value="N4">N4</option>
              <option value="N3">N3</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#202c5c]">
              Category
            </label>
            <select
              name="category"
              defaultValue={lesson.category}
              required
              className="w-full rounded-2xl bg-gray-50 px-4 py-3 text-sm text-[#202c5c] outline-none focus:ring-2 focus:ring-[#FF5A1F]/20"
            >
              <option value="Characters">Characters</option>
              <option value="Vocabulary">Vocabulary</option>
              <option value="Grammar">Grammar</option>
              <option value="Conversation">Conversation</option>
              <option value="Culture">Culture</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#202c5c]">
              Duration
            </label>
            <input
              name="duration"
              type="text"
              defaultValue={lesson.duration || ""}
              placeholder="Example: 25 min"
              className="w-full rounded-2xl bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#FF5A1F]/20"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#202c5c]">
              Status
            </label>
            <select
              name="status"
              defaultValue={lesson.status}
              required
              className="w-full rounded-2xl bg-gray-50 px-4 py-3 text-sm text-[#202c5c] outline-none focus:ring-2 focus:ring-[#FF5A1F]/20"
            >
              <option value="Draft">Draft</option>
              <option value="Published">Published</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-bold text-[#202c5c]">
              Description
            </label>
            <textarea
              name="description"
              defaultValue={lesson.description || ""}
              rows={5}
              className="w-full resize-none rounded-2xl bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#FF5A1F]/20"
            />
          </div>

          <button
            type="submit"
            className="flex w-fit items-center justify-center gap-2 rounded-2xl bg-[#FF5A1F] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:scale-105 md:col-span-2"
          >
            <Save size={18} />
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}