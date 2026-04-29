"use client";

import { useEffect, useState } from "react";
import { BookOpen, Clock, Sparkles } from "lucide-react";

type Lesson = {
  id: string;
  title: string;
  level: string;
  category: string;
  duration: string | null;
  status: string;
  description: string | null;
  created_at: string;
};

export default function PublishedLessons() {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLessons() {
      try {
        const res = await fetch("/api/published-lessons");
        const data = await res.json();
        setLessons(data.lessons || []);
      } catch (error) {
        console.error("Failed to load published lessons:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchLessons();
  }, []);

  return (
    <section className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff1ea] text-[#FF5A1F]">
          <Sparkles size={24} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#202c5c]">
            Teacher Published Lessons
          </h2>
          <p className="text-sm text-gray-500">
            Lessons published by teachers are shown here for students.
          </p>
        </div>
      </div>

      {loading && (
        <div className="rounded-2xl bg-gray-50 p-5 text-sm text-gray-500">
          Loading published lessons...
        </div>
      )}

      {!loading && lessons.length === 0 && (
        <div className="rounded-2xl bg-gray-50 p-5 text-sm text-gray-500">
          No published lessons available yet.
        </div>
      )}

      {!loading && lessons.length > 0 && (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              className="rounded-3xl border border-gray-100 bg-[#fafafc] p-5 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff1ea] text-[#FF5A1F]">
                <BookOpen size={24} />
              </div>

              <h3 className="text-lg font-bold text-[#202c5c]">
                {lesson.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                {lesson.description || "Japanese learning material"}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                  {lesson.level}
                </span>

                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
                  {lesson.category}
                </span>

                <span className="flex items-center gap-1 rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-[#FF5A1F]">
                  <Clock size={13} />
                  {lesson.duration || "N/A"}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}