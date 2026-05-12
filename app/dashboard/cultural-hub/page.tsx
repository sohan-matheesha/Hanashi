'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import {
  Flower2,
  Utensils,
  Sparkles,
  Landmark,
  MessageCircle,
  Clock,
  ArrowRight,
  Star,
  MapPin,
  Camera,
  Building2,
  Soup,
  Cherry,
  Eye,
  X,
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
  { name: 'All Stories', icon: Sparkles },
  { name: 'Traditions', icon: Landmark },
  { name: 'Food & Dining', icon: Utensils },
  { name: 'Festivals', icon: Cherry },
  { name: 'Daily Life', icon: Eye },
  { name: 'Etiquette', icon: MessageCircle },
  { name: 'Places', icon: MapPin },
  { name: 'Pop Culture', icon: Star },
]

const categoryDetails = [
  {
    category: 'Traditions',
    icon: Landmark,
    title: 'Timeless Japanese Traditions',
    description:
      'Explore Japan’s customs, ceremonies, clothing, arts, and spiritual practices.',
    image:
      'https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=1200&auto=format&fit=crop',
  },
  {
    category: 'Food & Dining',
    icon: Soup,
    title: 'Japanese Food & Dining Culture',
    description:
      'Discover ramen, sushi, bento, matcha, street food, and dining manners.',
    image:
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=1200&auto=format&fit=crop',
  },
  {
    category: 'Festivals',
    icon: Cherry,
    title: 'Colorful Japanese Festivals',
    description:
      'Experience cherry blossoms, summer fireworks, New Year traditions, and famous local festivals.',
    image:
      'https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=1200&auto=format&fit=crop',
  },
  {
    category: 'Daily Life',
    icon: Building2,
    title: 'Everyday Life in Japan',
    description:
      'Learn about school life, trains, convenience stores, apartments, and everyday routines.',
    image:
      'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1200&auto=format&fit=crop',
  },
  {
    category: 'Etiquette',
    icon: MessageCircle,
    title: 'Japanese Manners & Etiquette',
    description:
      'Understand respectful behavior, bowing, chopstick manners, public rules, and shrine manners.',
    image:
      'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?q=80&w=1200&auto=format&fit=crop',
  },
  {
    category: 'Places',
    icon: MapPin,
    title: 'Beautiful Places in Japan',
    description:
      'Explore Japan through temples, cities, mountains, gardens, and historical locations.',
    image:
      'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&w=1200&auto=format&fit=crop',
  },
  {
    category: 'Pop Culture',
    icon: Star,
    title: 'Modern Japanese Pop Culture',
    description:
      'Explore anime, manga, games, music, cosplay, fashion, and youth culture.',
    image:
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1200&auto=format&fit=crop',
  },
]

const galleryImages = [
  'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=900&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=900&auto=format&fit=crop',
]

export default function CulturalHubPage() {
  const supabase = createClient()

  const [stories, setStories] = useState<CulturalStory[]>([])
  const [activeCategory, setActiveCategory] = useState('All Stories')
  const [loading, setLoading] = useState(true)
  const [selectedStory, setSelectedStory] = useState<CulturalStory | null>(null)

  useEffect(() => {
    const fetchStories = async () => {
      setLoading(true)

      const { data, error } = await supabase
        .from('cultural_stories')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: false })

      setLoading(false)

      if (error) {
        console.error('Cultural stories fetch error:', error)
        return
      }

      setStories(data || [])
    }

    fetchStories()
  }, [supabase])

  const filteredStories =
    activeCategory === 'All Stories'
      ? stories
      : stories.filter((story) => story.category === activeCategory)

  const featuredStories =
    activeCategory === 'All Stories'
      ? stories.filter((story) => story.is_featured)
      : stories.filter(
          (story) => story.is_featured && story.category === activeCategory
        )

  const filteredCategoryDetails =
    activeCategory === 'All Stories'
      ? categoryDetails
      : categoryDetails.filter((section) => section.category === activeCategory)

  return (
    <main className="min-h-screen bg-[#faf7f4] px-6 py-8">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-4xl border border-pink-100 bg-white shadow-sm">
        <div className="absolute inset-0 z-10 bg-linear-to-r from-white via-white/90 to-white/10" />

        <img
          src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1600&auto=format&fit=crop"
          alt="Japanese temple with cherry blossoms"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="relative z-20 max-w-3xl px-10 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-pink-500">
            Magazine-style cultural discoveries
          </p>

          <h1 className="font-serif text-5xl font-bold leading-tight text-[#172554] md:text-7xl">
            Cultural Hub <span className="text-pink-400">✿</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-700">
            Dive into the stories, traditions, food, festivals, daily lifestyle,
            and modern spirit of Japan through beautiful visual articles.
          </p>

          <p className="mt-6 inline-flex rounded-full bg-white/80 px-5 py-2 text-sm font-semibold text-[#172554] shadow-sm">
            {stories.length} published stories available
          </p>
        </div>
      </section>

      {/* Category Buttons */}
      <section className="mt-6 flex flex-wrap gap-3">
        {categories.map((category) => {
          const Icon = category.icon
          const isActive = activeCategory === category.name

          return (
            <button
              key={category.name}
              type="button"
              onClick={() => setActiveCategory(category.name)}
              className={`flex items-center gap-2 rounded-2xl border px-5 py-3 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
                isActive
                  ? 'border-[#172554] bg-[#172554] text-white'
                  : 'border-pink-100 bg-white text-slate-700 hover:border-pink-300'
              }`}
            >
              <Icon size={17} />
              {category.name}
            </button>
          )
        })}
      </section>

      {/* Loading */}
      {loading && (
        <div className="mt-8 rounded-3xl border border-pink-100 bg-white p-10 text-center shadow-sm">
          <p className="text-sm font-semibold text-slate-500">
            Loading cultural stories...
          </p>
        </div>
      )}

      {!loading && (
        <div className="mt-8 grid gap-8 xl:grid-cols-[1fr_360px]">
          <section>
            {/* Featured */}
            <div className="mb-5 flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-[#172554]">
                <Flower2 className="text-pink-400" />
                {activeCategory === 'All Stories'
                  ? "Editor's Picks"
                  : `${activeCategory} Picks`}
              </h2>

              <p className="text-sm font-semibold text-slate-500">
                Featured stories
              </p>
            </div>

            {featuredStories.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-pink-200 bg-white p-10 text-center">
                <p className="text-sm font-semibold text-slate-500">
                  No featured stories for {activeCategory} yet.
                </p>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {featuredStories.map((story) => (
                  <article
                    key={story.id}
                    className="group overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={story.image_url}
                        alt={story.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                      />
                    </div>

                    <div className="p-5">
                      <p className="text-xs font-bold uppercase tracking-wide text-pink-500">
                        {story.category}
                      </p>

                      <h3 className="mt-2 text-lg font-bold leading-snug text-[#172554]">
                        {story.title}
                      </h3>

                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">
                        {story.short_description}
                      </p>

                      <div className="mt-5 flex items-center justify-between text-sm">
                        <span className="flex items-center gap-1 text-slate-500">
                          <Clock size={15} />
                          {story.read_time || '5 min read'}
                        </span>

                        <button
                          type="button"
                          onClick={() => setSelectedStory(story)}
                          className="flex items-center gap-1 font-semibold text-pink-500"
                        >
                          Read Story
                          <ArrowRight size={15} />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* All / Filtered Stories */}
            <section className="mt-10">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
                    Cultural Magazine
                  </p>

                  <h2 className="mt-2 text-3xl font-bold text-[#172554]">
                    {activeCategory === 'All Stories'
                      ? 'Latest Cultural Stories'
                      : activeCategory}
                  </h2>
                </div>

                <p className="rounded-full bg-white px-4 py-2 text-xs font-bold text-pink-500 shadow-sm">
                  {filteredStories.length} stories
                </p>
              </div>

              {filteredStories.length === 0 ? (
                <div className="rounded-3xl border border-dashed border-pink-200 bg-white p-12 text-center">
                  <p className="text-sm font-semibold text-slate-500">
                    No stories available for {activeCategory} yet.
                  </p>
                </div>
              ) : (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {filteredStories.map((story) => (
                    <article
                      key={story.id}
                      className="group overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                    >
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={story.image_url}
                          alt={story.title}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

                        <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-[#172554]">
                          {story.category}
                        </div>

                        {story.is_featured && (
                          <div className="absolute right-4 top-4 rounded-full bg-pink-500 px-3 py-1 text-xs font-bold text-white">
                            Featured
                          </div>
                        )}
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-[#172554]">
                          {story.title}
                        </h3>

                        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                          {story.short_description}
                        </p>

                        <div className="mt-5 flex items-center justify-between text-sm">
                          <span className="flex items-center gap-1 text-slate-500">
                            <Clock size={15} />
                            {story.read_time || '5 min read'}
                          </span>

                          <button
                            type="button"
                            onClick={() => setSelectedStory(story)}
                            className="flex items-center gap-1 font-semibold text-pink-500"
                          >
                            Read More
                            <ArrowRight size={15} />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>

            {/* Category Details */}
            <section className="mt-10">
              <div className="mb-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
                  Culture Categories
                </p>

                <h2 className="mt-2 text-3xl font-bold text-[#172554]">
                  Explore Every Side of Japan
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                  These guide sections help learners understand what each
                  cultural category means.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filteredCategoryDetails.map((section) => {
                  const Icon = section.icon

                  return (
                    <article
                      key={section.category}
                      className="group overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                    >
                      <div className="relative h-44 overflow-hidden">
                        <img
                          src={section.image}
                          alt={section.title}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

                        <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-[#172554]">
                          <Icon size={15} />
                          {section.category}
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-[#172554]">
                          {section.title}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-slate-600">
                          {section.description}
                        </p>
                      </div>
                    </article>
                  )
                })}
              </div>
            </section>
          </section>

          {/* Right Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-3xl border border-pink-100 bg-white p-5 shadow-sm">
              <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-[#172554]">
                <Flower2 className="text-pink-400" />
                This Week in Japan
              </h2>

              {stories[0] ? (
                <>
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={stories[0].image_url}
                      alt={stories[0].title}
                      className="h-48 w-full object-cover"
                    />
                  </div>

                  <div className="mt-4">
                    <p className="text-xs font-bold uppercase text-pink-500">
                      {stories[0].category}
                    </p>

                    <h3 className="mt-1 text-lg font-bold leading-snug text-[#172554]">
                      {stories[0].title}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">
                      {stories[0].short_description}
                    </p>

                    <button
                      type="button"
                      onClick={() => setSelectedStory(stories[0])}
                      className="mt-4 text-sm font-semibold text-pink-500"
                    >
                      Read story →
                    </button>
                  </div>
                </>
              ) : (
                <p className="text-sm text-slate-500">
                  Admin has not added any stories yet.
                </p>
              )}
            </div>

            <div className="rounded-3xl border border-pink-100 bg-linear-to-br from-pink-50 to-indigo-50 p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wide text-pink-500">
                Cultural Phrase
              </p>

              <h3 className="mt-2 text-3xl font-bold text-[#172554]">
                いただきます
              </h3>

              <p className="mt-1 text-sm font-semibold text-slate-500">
                Itadakimasu
              </p>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                A phrase said before eating. It shows gratitude for the food and
                the people who prepared it.
              </p>
            </div>

            <div className="rounded-3xl border border-pink-100 bg-white p-5 shadow-sm">
              <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-[#172554]">
                <Camera className="text-pink-400" />
                Culture Gallery
              </h2>

              <div className="grid grid-cols-2 gap-3">
                {galleryImages.slice(0, 4).map((image) => (
                  <img
                    key={image}
                    src={image}
                    alt="Japanese culture gallery"
                    className="h-24 rounded-2xl object-cover"
                  />
                ))}
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* Full Details Modal */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-4xl bg-white shadow-2xl">
            <div className="relative h-80 overflow-hidden rounded-t-4xl">
              <img
                src={selectedStory.image_url}
                alt={selectedStory.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />

              <button
                type="button"
                onClick={() => setSelectedStory(null)}
                className="absolute right-5 top-5 rounded-full bg-white/90 p-2 text-slate-700 shadow-md"
              >
                <X size={20} />
              </button>

              <div className="absolute bottom-6 left-6 right-6">
                <p className="mb-2 inline-flex rounded-full bg-pink-500 px-4 py-1 text-xs font-bold uppercase text-white">
                  {selectedStory.category}
                </p>

                <h2 className="text-4xl font-bold leading-tight text-white">
                  {selectedStory.title}
                </h2>

                <p className="mt-2 flex items-center gap-1 text-sm text-white/90">
                  <Clock size={15} />
                  {selectedStory.read_time || '5 min read'}
                </p>
              </div>
            </div>

            <div className="p-8">
              <p className="text-lg font-semibold leading-8 text-[#172554]">
                {selectedStory.short_description}
              </p>

              <div className="mt-6 rounded-3xl bg-[#faf7f4] p-6">
                <h3 className="mb-3 text-xl font-bold text-[#172554]">
                  Full Details
                </h3>

                <p className="whitespace-pre-line text-sm leading-7 text-slate-700">
                  {selectedStory.full_description ||
                    'No full details added by admin yet.'}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedStory(null)}
                className="mt-6 rounded-full bg-[#172554] px-6 py-3 text-sm font-semibold text-white"
              >
                Close Story
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}