import Link from "next/link";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  ArrowLeft,
  BookOpen,
  ImagePlus,
  Landmark,
  PlusCircle,
  Sparkles,
  Trash2,
} from "lucide-react";
import { createClient } from "@/utils/supabase/server";

type CulturalStory = {
  id: string;
  title: string;
  category: string;
  image_url: string | null;
  description: string;
  content: string | null;
  created_at: string;
};

async function addCulturalStory(formData: FormData) {
  "use server";

  const supabase = await createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle();

  if (profile?.role !== "admin") {
    redirect("/dashboard");
  }

  const title = String(formData.get("title") || "").trim();
  const category = String(formData.get("category") || "").trim();
  const imageUrl = String(formData.get("image_url") || "").trim();
  const description = String(formData.get("description") || "").trim();
  const content = String(formData.get("content") || "").trim();

  if (!title || !category || !description) {
    return;
  }

  await supabase.from("cultural_stories").insert({
    title,
    category,
    image_url: imageUrl || null,
    description,
    content,
    created_by: user.id,
    is_published: true,
  });

  revalidatePath("/dashboard/admin/cultural-stories");
  revalidatePath("/dashboard/cultural-hub");
}

async function deleteCulturalStory(formData: FormData) {
  "use server";

  const supabase = await createClient();

  const id = String(formData.get("id") || "").trim();

  if (!id) {
    return;
  }

  await supabase.from("cultural_stories").delete().eq("id", id);

  revalidatePath("/dashboard/admin/cultural-stories");
  revalidatePath("/dashboard/cultural-hub");
}

const storyTools = [
  {
    title: "Create Culture Story",
    description:
      "Prepare Japanese culture learning content for beginner students.",
    icon: PlusCircle,
    status: "Active",
  },
  {
    title: "Feature Story",
    description:
      "Highlight important cultural topics such as greetings, food, festivals, and manners.",
    icon: Sparkles,
    status: "Ready",
  },
  {
    title: "Culture Categories",
    description:
      "Organise cultural content into daily life, traditions, travel, and language context.",
    icon: Landmark,
    status: "Available",
  },
  {
    title: "Content Moderation",
    description:
      "Admins can review and remove unsuitable cultural content.",
    icon: Trash2,
    status: "Active",
  },
];

export default async function AdminCulturalStoriesPage() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("cultural_stories")
    .select("id, title, category, image_url, description, content, created_at")
    .order("created_at", { ascending: false });

  const stories = (data ?? []) as CulturalStory[];

  return (
    <div className="min-h-screen bg-[#fafafc] px-4 py-8 md:px-8">
      <Link
        href="/dashboard/admin"
        className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-[#a54a5c]"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Admin Panel
      </Link>

      <section className="mb-8 rounded-3xl bg-white p-8 shadow-sm">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 text-[#a54a5c]">
          <ImagePlus className="h-7 w-7" />
        </div>

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#a54a5c]">
          Admin Content
        </p>

        <h1 className="text-3xl font-extrabold text-[#202c5c]">
          Cultural Hub Stories
        </h1>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-500">
          Admins can create, publish, and remove Japanese cultural learning
          stories for students.
        </p>
      </section>

      <section className="mb-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {storyTools.map((tool) => {
          const Icon = tool.icon;

          return (
            <div key={tool.title} className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 text-[#a54a5c]">
                <Icon className="h-6 w-6" />
              </div>

              <h2 className="text-xl font-extrabold text-[#202c5c]">
                {tool.title}
              </h2>

              <p className="mt-3 min-h-[96px] text-sm leading-7 text-gray-500">
                {tool.description}
              </p>

              <span className="mt-5 inline-flex rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
                {tool.status}
              </span>
            </div>
          );
        })}
      </section>

      <section className="grid gap-6 lg:grid-cols-[420px_1fr]">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#202c5c] text-white">
              <PlusCircle className="h-6 w-6" />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a54a5c]">
                Add Content
              </p>
              <h2 className="text-2xl font-extrabold text-[#202c5c]">
                Create Culture Story
              </h2>
            </div>
          </div>

          <form action={addCulturalStory} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-bold text-[#202c5c]">
                Story Title
              </label>
              <input
                name="title"
                required
                placeholder="Example: Japanese Greetings"
                className="w-full rounded-2xl border border-pink-100 px-4 py-3 text-sm outline-none focus:border-[#a54a5c]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#202c5c]">
                Category
              </label>
              <select
                name="category"
                required
                className="w-full rounded-2xl border border-pink-100 px-4 py-3 text-sm outline-none focus:border-[#a54a5c]"
              >
                <option value="">Select category</option>
                <option value="Daily Life">Daily Life</option>
                <option value="Manners">Manners</option>
                <option value="Food">Food</option>
                <option value="Festivals">Festivals</option>
                <option value="Travel">Travel</option>
                <option value="Language Context">Language Context</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#202c5c]">
                Image URL
              </label>
              <input
                name="image_url"
                placeholder="Optional image URL"
                className="w-full rounded-2xl border border-pink-100 px-4 py-3 text-sm outline-none focus:border-[#a54a5c]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#202c5c]">
                Short Description
              </label>
              <textarea
                name="description"
                rows={4}
                required
                placeholder="Short description shown to students..."
                className="w-full rounded-2xl border border-pink-100 px-4 py-3 text-sm outline-none focus:border-[#a54a5c]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#202c5c]">
                Story Content
              </label>
              <textarea
                name="content"
                rows={6}
                placeholder="Full cultural story or learning note..."
                className="w-full rounded-2xl border border-pink-100 px-4 py-3 text-sm outline-none focus:border-[#a54a5c]"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-[#a54a5c] px-5 py-3 text-sm font-extrabold text-white shadow-sm transition hover:bg-[#913f50]"
            >
              Add Culture Story
            </button>
          </form>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 text-[#a54a5c]">
                <BookOpen className="h-6 w-6" />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a54a5c]">
                  Published Stories
                </p>
                <h2 className="text-2xl font-extrabold text-[#202c5c]">
                  Culture Story List
                </h2>
              </div>
            </div>

            <span className="rounded-full bg-pink-50 px-4 py-2 text-sm font-bold text-[#a54a5c]">
              {stories.length} Stories
            </span>
          </div>

          {error && (
            <div className="mb-4 rounded-2xl bg-red-50 p-4 text-sm font-semibold text-red-600">
              Could not load cultural stories. Check Supabase table and policies.
            </div>
          )}

          {stories.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-pink-200 p-8 text-center">
              <h3 className="text-lg font-extrabold text-[#202c5c]">
                No cultural stories yet
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Add your first Japanese culture story using the form.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {stories.map((story) => (
                <div
                  key={story.id}
                  className="rounded-3xl border border-pink-100 p-5"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <div className="mb-2 flex flex-wrap gap-2">
                        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-bold text-[#a54a5c]">
                          {story.category}
                        </span>

                        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
                          Published
                        </span>
                      </div>

                      <h3 className="text-xl font-extrabold text-[#202c5c]">
                        {story.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-500">
                        {story.description}
                      </p>

                      {story.content && (
                        <p className="mt-3 rounded-2xl bg-[#fafafc] p-4 text-sm leading-6 text-gray-500">
                          {story.content}
                        </p>
                      )}
                    </div>

                    <form action={deleteCulturalStory}>
                      <input type="hidden" name="id" value={story.id} />
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-2xl bg-red-50 px-4 py-2 text-sm font-bold text-red-600 hover:bg-red-100"
                      >
                        <Trash2 className="h-4 w-4" />
                        Delete
                      </button>
                    </form>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}