'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import {
  Plus,
  Trash2,
  ImageIcon,
  Save,
  Loader2,
  Eye,
  EyeOff,
  Star,
} from 'lucide-react'

type CulturalStory = {
  id: string
  title: string
  category: string
  short_description: string
  full_description: string | null
  image_url: string
  read_time: string | null
  is_featured: boolean
  is_published: boolean
  created_at: string
}

const categories = [
  'Traditions',
  'Food & Dining',
  'Festivals',
  'Daily Life',
  'Etiquette',
  'Places',
  'Pop Culture',
]

export default function AdminCulturalStoriesPage() {
  const supabase = createClient()

  const [stories, setStories] = useState<CulturalStory[]>([])
  const [loading, setLoading] = useState(false)
  const [fetching, setFetching] = useState(true)

  const [form, setForm] = useState({
    title: '',
    category: 'Traditions',
    short_description: '',
    full_description: '',
    image_url: '',
    read_time: '5 min read',
    is_featured: false,
    is_published: true,
  })

  const fetchStories = async () => {
    setFetching(true)

    const { data, error } = await supabase
      .from('cultural_stories')
      .select('*')
      .order('created_at', { ascending: false })

    setFetching(false)

    if (error) {
      alert(error.message)
      return
    }

    setStories(data || [])
  }

  useEffect(() => {
    fetchStories()
  }, [])

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = e.target as HTMLInputElement

    setForm({
      ...form,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.title || !form.short_description || !form.image_url) {
      alert('Please fill title, short description, and image URL.')
      return
    }

    setLoading(true)

    const { error } = await supabase.from('cultural_stories').insert({
      title: form.title,
      category: form.category,
      short_description: form.short_description,
      full_description: form.full_description,
      image_url: form.image_url,
      read_time: form.read_time,
      is_featured: form.is_featured,
      is_published: form.is_published,
    })

    setLoading(false)

    if (error) {
      alert(error.message)
      return
    }

    alert('Cultural story added successfully!')

    setForm({
      title: '',
      category: 'Traditions',
      short_description: '',
      full_description: '',
      image_url: '',
      read_time: '5 min read',
      is_featured: false,
      is_published: true,
    })

    fetchStories()
  }

  const deleteStory = async (id: string) => {
    const confirmDelete = confirm('Are you sure you want to delete this story?')

    if (!confirmDelete) return

    const { error } = await supabase
      .from('cultural_stories')
      .delete()
      .eq('id', id)

    if (error) {
      alert(error.message)
      return
    }

    alert('Story deleted successfully.')
    fetchStories()
  }

  const togglePublish = async (story: CulturalStory) => {
    const { error } = await supabase
      .from('cultural_stories')
      .update({ is_published: !story.is_published })
      .eq('id', story.id)

    if (error) {
      alert(error.message)
      return
    }

    fetchStories()
  }

  const toggleFeatured = async (story: CulturalStory) => {
    const { error } = await supabase
      .from('cultural_stories')
      .update({ is_featured: !story.is_featured })
      .eq('id', story.id)

    if (error) {
      alert(error.message)
      return
    }

    fetchStories()
  }

  return (
    <main className="min-h-screen bg-[#faf7f4] px-6 py-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
          Admin Content Studio
        </p>

        <h1 className="mt-2 text-4xl font-bold text-[#172554]">
          Manage Cultural Hub Stories
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
          Add, publish, feature, or delete Japanese culture stories. These
          stories will appear inside the Cultural Hub magazine page.
        </p>
      </div>

      <div className="grid gap-8 xl:grid-cols-[430px_1fr]">
        <section className="rounded-3xl border border-pink-100 bg-white p-6 shadow-sm">
          <h2 className="mb-5 flex items-center gap-2 text-xl font-bold text-[#172554]">
            <Plus className="text-pink-500" />
            Add New Story
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Story Title
              </label>

              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                required
                placeholder="Example: Hanami Season in Kyoto"
                className="w-full rounded-2xl border border-pink-100 px-4 py-3 text-sm outline-none focus:border-pink-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Category
              </label>

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full rounded-2xl border border-pink-100 px-4 py-3 text-sm outline-none focus:border-pink-400"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Short Description
              </label>

              <textarea
                name="short_description"
                value={form.short_description}
                onChange={handleChange}
                required
                rows={3}
                placeholder="Small summary for the card..."
                className="w-full rounded-2xl border border-pink-100 px-4 py-3 text-sm outline-none focus:border-pink-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Full Details
              </label>

              <textarea
                name="full_description"
                value={form.full_description}
                onChange={handleChange}
                rows={6}
                placeholder="Write full cultural details here..."
                className="w-full rounded-2xl border border-pink-100 px-4 py-3 text-sm outline-none focus:border-pink-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Image URL
              </label>

              <input
                name="image_url"
                value={form.image_url}
                onChange={handleChange}
                required
                placeholder="Paste image URL here"
                className="w-full rounded-2xl border border-pink-100 px-4 py-3 text-sm outline-none focus:border-pink-400"
              />

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Paste an image link. Example: Unsplash image URL.
              </p>
            </div>

            {form.image_url && (
              <div className="overflow-hidden rounded-2xl border border-pink-100">
                <img
                  src={form.image_url}
                  alt="Preview"
                  className="h-44 w-full object-cover"
                />
              </div>
            )}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Read Time
              </label>

              <input
                name="read_time"
                value={form.read_time}
                onChange={handleChange}
                placeholder="5 min read"
                className="w-full rounded-2xl border border-pink-100 px-4 py-3 text-sm outline-none focus:border-pink-400"
              />
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-pink-50 px-4 py-3">
              <label className="text-sm font-semibold text-slate-700">
                Featured Story
              </label>

              <input
                name="is_featured"
                type="checkbox"
                checked={form.is_featured}
                onChange={handleChange}
                className="h-5 w-5"
              />
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-pink-50 px-4 py-3">
              <label className="text-sm font-semibold text-slate-700">
                Publish Now
              </label>

              <input
                name="is_published"
                type="checkbox"
                checked={form.is_published}
                onChange={handleChange}
                className="h-5 w-5"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#172554] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0f1a3d] disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 size={17} className="animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save size={17} />
                  Save Story
                </>
              )}
            </button>
          </form>
        </section>

        <section className="rounded-3xl border border-pink-100 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-xl font-bold text-[#172554]">
              <ImageIcon className="text-pink-500" />
              Existing Stories
            </h2>

            <span className="rounded-full bg-pink-50 px-4 py-2 text-xs font-bold text-pink-500">
              {stories.length} stories
            </span>
          </div>

          {fetching ? (
            <div className="flex items-center justify-center rounded-3xl border border-dashed border-pink-200 p-12 text-slate-500">
              <Loader2 className="mr-2 animate-spin" size={18} />
              Loading stories...
            </div>
          ) : stories.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-pink-200 p-12 text-center">
              <p className="text-sm text-slate-500">
                No cultural stories added yet.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {stories.map((story) => (
                <article
                  key={story.id}
                  className="overflow-hidden rounded-3xl border border-pink-100 bg-[#faf7f4] shadow-sm"
                >
                  <img
                    src={story.image_url}
                    alt={story.title}
                    className="h-40 w-full object-cover"
                  />

                  <div className="p-4">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase text-pink-500">
                        {story.category}
                      </span>

                      <span
                        className={`rounded-full px-3 py-1 text-[10px] font-bold ${
                          story.is_published
                            ? 'bg-green-100 text-green-700'
                            : 'bg-slate-200 text-slate-600'
                        }`}
                      >
                        {story.is_published ? 'Published' : 'Draft'}
                      </span>

                      {story.is_featured && (
                        <span className="rounded-full bg-yellow-100 px-3 py-1 text-[10px] font-bold text-yellow-700">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="font-bold leading-snug text-[#172554]">
                      {story.title}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
                      {story.short_description}
                    </p>

                    <p className="mt-2 text-xs text-slate-500">
                      {story.read_time || '5 min read'}
                    </p>

                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => togglePublish(story)}
                        className="flex items-center justify-center gap-1 rounded-xl bg-white px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-pink-50"
                      >
                        {story.is_published ? (
                          <>
                            <EyeOff size={14} />
                            Draft
                          </>
                        ) : (
                          <>
                            <Eye size={14} />
                            Publish
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => toggleFeatured(story)}
                        className="flex items-center justify-center gap-1 rounded-xl bg-white px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-yellow-50"
                      >
                        <Star size={14} />
                        {story.is_featured ? 'Unstar' : 'Star'}
                      </button>

                      <button
                        type="button"
                        onClick={() => deleteStory(story.id)}
                        className="flex items-center justify-center gap-1 rounded-xl bg-red-50 px-3 py-2 text-xs font-semibold text-red-500 transition hover:bg-red-100"
                      >
                        <Trash2 size={14} />
                        Delete
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  )
}