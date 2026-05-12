import {
  Flower2,
  Utensils,
  Torus,
  Sparkles,
  Landmark,
  MessageCircle,
  Clock,
  ArrowRight,
  Star,
  MapPin,
  Camera,
} from 'lucide-react'

const categories = [
  { name: 'All Stories', icon: Sparkles },
  { name: 'Traditions', icon: Landmark },
  { name: 'Food & Dining', icon: Utensils },
  { name: 'Festivals', icon: Flower2 },
  { name: 'Daily Life', icon: Torus },
  { name: 'Etiquette', icon: MessageCircle },
  { name: 'Places', icon: MapPin },
  { name: 'Pop Culture', icon: Star },
]

const featuredStories = [
  {
    title: 'Hanami Season in Kyoto',
    category: 'Seasonal',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=1200&auto=format&fit=crop',
    description:
      'Discover how cherry blossoms transform Kyoto into a soft pink dream during spring.',
  },
  {
    title: 'Inside a Japanese Tea Ceremony',
    category: 'Traditions',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=1200&auto=format&fit=crop',
    description:
      'Learn the beauty of silence, respect, harmony, and mindfulness in Japanese tea culture.',
  },
  {
    title: 'The Art of Bento',
    category: 'Food & Dining',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=1200&auto=format&fit=crop',
    description:
      'Small boxes with big meaning. Bento represents care, balance, and creativity.',
  },
  {
    title: 'Why Convenience Stores Feel Magical',
    category: 'Daily Life',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1200&auto=format&fit=crop',
    description:
      'A deep dive into Japan’s comfort culture through konbini life.',
  },
]

const trendingStories = [
  {
    title: 'Kimono: Elegance in Motion',
    category: 'Traditions',
    image:
      'https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=900&auto=format&fit=crop',
  },
  {
    title: 'Tokyo Nights & Youth Culture',
    category: 'Pop Culture',
    image:
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=900&auto=format&fit=crop',
  },
  {
    title: 'Shrine Etiquette for Beginners',
    category: 'Etiquette',
    image:
      'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?q=80&w=900&auto=format&fit=crop',
  },
  {
    title: 'Ramen Stories from Sapporo',
    category: 'Food & Dining',
    image:
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=900&auto=format&fit=crop',
  },
]

const weeklyStories = [
  {
    title: 'Gion Matsuri: Kyoto’s Timeless Festival',
    category: 'Festivals',
    time: '8 min read',
  },
  {
    title: 'Rainy Season Vibes in Kamakura',
    category: 'Places',
    time: '4 min read',
  },
  {
    title: 'New Wagashi You Must Try',
    category: 'Food & Dining',
    time: '3 min read',
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
  return (
    <main className="min-h-screen bg-[#faf7f4] px-6 py-8">
      <section className="relative overflow-hidden rounded-4xl border border-pink-100 bg-white shadow-sm">
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/90 to-transparent z-10" />

        <img
          src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1600&auto=format&fit=crop"
          alt="Japanese temple with cherry blossoms"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="relative z-20 max-w-3xl px-10 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-pink-500">
            Magazine-style cultural discoveries
          </p>

          <h1 className="font-serif text-6xl font-bold leading-tight text-[#172554]">
            Cultural Hub <span className="text-pink-400">✿</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-700">
            Dive into the stories, traditions, food, festivals, and modern spirit
            of Japan through beautiful visual articles.
          </p>

          <button className="mt-8 rounded-full bg-[#172554] px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0f1a3d]">
            Explore Stories
          </button>
        </div>
      </section>

      <section className="mt-6 flex flex-wrap gap-3">
        {categories.map((category, index) => {
          const Icon = category.icon

          return (
            <button
              key={category.name}
              className={`flex items-center gap-2 rounded-2xl border px-5 py-3 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
                index === 0
                  ? 'border-[#172554] bg-[#172554] text-white'
                  : 'border-pink-100 bg-white text-slate-700'
              }`}
            >
              <Icon size={17} />
              {category.name}
            </button>
          )
        })}
      </section>

      <div className="mt-8 grid gap-8 xl:grid-cols-[1fr_360px]">
        <section>
          <div className="mb-5 flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-[#172554]">
              <Flower2 className="text-pink-400" />
              Editor&apos;s Picks
            </h2>

            <button className="text-sm font-semibold text-slate-500 hover:text-pink-500">
              View all →
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredStories.map((story) => (
              <article
                key={story.title}
                className="group overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={story.image}
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

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {story.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1 text-slate-500">
                      <Clock size={15} />
                      {story.readTime}
                    </span>

                    <button className="flex items-center gap-1 font-semibold text-pink-500">
                      Read Story
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <h2 className="mb-5 flex items-center gap-2 text-2xl font-bold text-[#172554]">
              <Sparkles className="text-pink-400" />
              Trending Culture
            </h2>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {trendingStories.map((story) => (
                <article
                  key={story.title}
                  className="overflow-hidden rounded-3xl border border-pink-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <img
                    src={story.image}
                    alt={story.title}
                    className="h-36 w-full object-cover"
                  />

                  <div className="p-4">
                    <h3 className="font-bold leading-snug text-[#172554]">
                      {story.title}
                    </h3>

                    <p className="mt-2 text-xs font-bold uppercase text-pink-500">
                      {story.category}
                    </p>

                    <p className="mt-3 flex items-center gap-1 text-xs text-slate-500">
                      <Clock size={14} />
                      5 min read
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-pink-100 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="flex items-center gap-2 text-xl font-bold text-[#172554]">
                <Flower2 className="text-pink-400" />
                This Week in Japan
              </h2>

              <button className="text-xs font-semibold text-pink-500">
                View all
              </button>
            </div>

            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=1000&auto=format&fit=crop"
                alt="Japan festival street"
                className="h-48 w-full object-cover"
              />
            </div>

            <div className="mt-4">
              <p className="text-xs font-bold uppercase text-pink-500">
                Festivals
              </p>

              <h3 className="mt-1 text-lg font-bold leading-snug text-[#172554]">
                Gion Matsuri: Kyoto&apos;s Timeless Festival
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                A spectacular celebration of history, faith, and community.
              </p>
            </div>

            <div className="mt-5 space-y-4">
              {weeklyStories.slice(1).map((story) => (
                <div
                  key={story.title}
                  className="border-t border-slate-100 pt-4"
                >
                  <p className="text-xs font-bold uppercase text-pink-500">
                    {story.category}
                  </p>
                  <h4 className="mt-1 font-semibold text-[#172554]">
                    {story.title}
                  </h4>
                  <p className="mt-1 text-xs text-slate-500">{story.time}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-pink-100 bg-white p-5 shadow-sm">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-[#172554]">
              <Camera className="text-pink-400" />
              Explore by Mood
            </h2>

            <div className="grid grid-cols-2 gap-3">
              {['Calm & Mindful', 'Curious & Fun', 'Warm & Cozy', 'Adventurous'].map(
                (mood) => (
                  <div
                    key={mood}
                    className="rounded-2xl bg-linear-to-br from-pink-50 to-indigo-50 p-4 text-center"
                  >
                    <p className="text-sm font-bold text-[#172554]">{mood}</p>
                    <p className="mt-1 text-xs text-slate-500">12 stories</p>
                  </div>
                )
              )}
            </div>
          </div>
        </aside>
      </div>

      <section className="mt-10">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-[#172554]">
            <Camera className="text-pink-400" />
            Culture Gallery
          </h2>

          <button className="text-sm font-semibold text-slate-500 hover:text-pink-500">
            View gallery →
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-5">
          {galleryImages.map((image, index) => (
            <div
              key={image}
              className={`overflow-hidden rounded-3xl shadow-sm ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <img
                src={image}
                alt="Japanese culture gallery"
                className="h-44 w-full object-cover transition duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}