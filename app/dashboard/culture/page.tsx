import Link from "next/link"
import { Image as ImageIcon, PlayCircle, Hand, MoveRight } from "lucide-react"

export default function CultureHub() {
  return (
    <div className="max-w-6xl mx-auto space-y-16 pb-20">
      {/* Hero Section */}
      <section className="relative w-full h-100 md:h-120 rounded-[2.5rem] overflow-hidden bg-linear-to-r from-slate-400 to-slate-200 flex items-center p-12 md:p-16">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-50 block"></div>
        <div className="relative z-10 max-w-xl">
          <p className="text-white/80 font-bold tracking-widest text-xs uppercase mb-4">Cultural Exploration</p>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
            Explore the Heart<br />of Japan.
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-medium mb-10 max-w-md leading-relaxed">
            Discover the quiet beauty and deep-rooted traditions of the Japanese spirit through our curated cultural archives.
          </p>
          <button className="bg-[#2d3b6a] text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-[#1a2548] transition-colors">
            START YOUR JOURNEY <br />
            <MoveRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Featured Articles & Washoku / Bow Grid */}
      <section>
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-gray-400 font-bold tracking-widest text-[10px] uppercase mb-2">The Archives</p>
            <h2 className="text-3xl font-black text-[#222744]">Featured Articles</h2>
          </div>
          <Link href="#" className="text-sm font-bold text-gray-500 border-b-2 border-gray-300 pb-1 hover:text-hanashi-primary hover:border-hanashi-primary transition-colors">
            View All Editorial
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Feature - Omotenashi */}
          <div className="md:col-span-8 bg-linear-to-br from-slate-400 to-slate-500 rounded-4xl overflow-hidden relative min-h-75 flex items-end p-8 group cursor-pointer">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-black/80 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white/30">
              <ImageIcon className="w-20 h-20" />
            </div>
            
            <div className="relative z-10 w-full">
              <span className="inline-block bg-[#ff9ebf] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-md mb-4 shadow-sm">
                Tradition
              </span>
              <h3 className="text-3xl font-bold text-white mb-2 leading-tight">The Art of Omotenashi:<br/>Japanese Hospitality</h3>
              <p className="text-white/80 text-sm font-medium line-clamp-2 max-w-lg">
                More than just service, Omotenashi is the philosophy of looking after guests wholeheartedly. Discover the history behind the...
              </p>
            </div>
          </div>

          {/* Side Feature - Matsuri */}
          <div className="md:col-span-4 bg-gray-50 rounded-4xl overflow-hidden flex flex-col group cursor-pointer border border-gray-100 pb-2 shadow-sm relative">
            <div className="aspect-4/3 bg-gray-200 relative flex items-center justify-center">
              <ImageIcon className="w-12 h-12 text-gray-300" />
            </div>
            <div className="p-6 mt-auto">
              <p className="text-gray-400 font-bold tracking-widest text-[10px] uppercase mb-2">Festivals</p>
              <h3 className="text-xl font-bold text-[#222744] mb-2 leading-tight">Matsuri Guide:<br/>Essential Summer Festivals</h3>
              <p className="text-gray-500 text-xs font-medium line-clamp-2 leading-relaxed">
                From the Gion Matsuri to the Awa Odori, explore the vibrant energy of Japan&apos;s...
              </p>
            </div>
          </div>

          {/* Washoku placeholder */}
          <div className="md:col-span-5 bg-gray-50 rounded-4xl overflow-hidden flex flex-col group cursor-pointer border border-gray-100 pb-2 shadow-sm relative h-full">
            <div className="aspect-4/3 bg-gray-200 relative flex items-center justify-center m-3 rounded-3xl">
              <ImageIcon className="w-12 h-12 text-gray-300" />
            </div>
            <div className="p-6 pt-2 h-full flex flex-col justify-end">
              <p className="text-gray-400 font-bold tracking-widest text-[10px] uppercase mb-2 mt-auto">Food</p>
              <h3 className="text-xl font-bold text-[#222744] mb-2 leading-tight">Washoku: The<br/>Seasons of Japanese Cuisine</h3>
              <p className="text-gray-500 text-xs font-medium line-clamp-2 leading-relaxed">
                Learn how &apos;Shun&apos;—the use of seasonal ingredients—defines the UNESCO-...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Etiquette Tip Banner */}
      <section className="mt-8 mb-16">
        <div className="bg-[#2d3b6a] rounded-4xl overflow-hidden flex items-center relative cursor-pointer px-10 py-12 shadow-lg mx-auto">
          {/* Background Decorations */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 right-20 w-40 h-40 bg-[#ff9ebf]/10 rounded-full translate-y-1/2"></div>
          
          <div className="relative z-10 w-full flex items-center justify-between gap-12">
            <div className="max-w-110">
              <span className="inline-block bg-[#48a56f] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-md mb-6 shadow-sm">
                Etiquette Tip
              </span>
              <h3 className="text-[2.5rem] font-bold text-white mb-6 leading-[1.1]">Mastering the<br/>Bow: When and<br/>How?</h3>
              <p className="text-white/70 text-[15px] font-medium line-clamp-3 mb-8 leading-relaxed">
                The bow (Ojigi) is fundamental. From a slight 15° Eshaku for greetings to a deep 45° Saikeirei for apologies, understand the subtle language of Japanese respect.
              </p>
              <button className="bg-white text-[#2d3b6a] px-8 py-3.5 rounded-full text-sm font-bold shadow-sm hover:bg-gray-50 transition-colors inline-flex items-center gap-2">
                Read Full Guide
              </button>
            </div>

            {/* Hand Icon Graphic */}
            <div className="shrink-0 w-48 h-48 bg-[#ff9ebf] rounded-full flex items-center justify-center shadow-[0_0_0_12px_rgba(255,255,255,0.05)] relative z-10 lg:mr-10">
              <Hand className="w-20 h-20 text-[#2d3b6a]" />
            </div>
          </div>
        </div>
      </section>

      {/* Zen in Motion (Video Section) */}
      <section className="bg-gray-50/50 -mx-10 px-10 py-16">
        <div className="max-w-6xl mx-auto flex flex-col">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-1 bg-[#8c3246] rounded-full"></div>
            <h2 className="text-2xl font-black text-[#222744]">Zen in Motion</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Video 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-video bg-gray-300 rounded-3xl relative flex items-center justify-center mb-4 overflow-hidden border border-gray-200">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                <PlayCircle className="w-14 h-14 text-white/90 relative z-10 drop-shadow-md" strokeWidth={1.5} />
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-[10px] font-bold px-2 py-1 rounded-md backdrop-blur-sm">
                  12:45
                </div>
              </div>
              <h3 className="font-bold text-[#222744] text-sm leading-tight mb-1 group-hover:text-hanashi-primary transition-colors">Kyoto at Dawn: A Cinematic Walk through Gion</h3>
              <p className="text-gray-400 text-xs font-medium">Travel Vlog • 45k views</p>
            </div>

            {/* Video 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-video bg-gray-300 rounded-3xl relative flex items-center justify-center mb-4 overflow-hidden border border-gray-200">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                <PlayCircle className="w-14 h-14 text-white/90 relative z-10 drop-shadow-md" strokeWidth={1.5} />
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-[10px] font-bold px-2 py-1 rounded-md backdrop-blur-sm">
                  08:30
                </div>
              </div>
              <h3 className="font-bold text-[#222744] text-sm leading-tight mb-1 group-hover:text-hanashi-primary transition-colors">Living Treasures: The Master Potters of Karatsu</h3>
              <p className="text-gray-400 text-xs font-medium">Documentary • 12k views</p>
            </div>

            {/* Video 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-video bg-gray-300 rounded-3xl relative flex items-center justify-center mb-4 overflow-hidden border border-gray-200">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                <PlayCircle className="w-14 h-14 text-white/90 relative z-10 drop-shadow-md" strokeWidth={1.5} />
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-[10px] font-bold px-2 py-1 rounded-md backdrop-blur-sm">
                  15:10
                </div>
              </div>
              <h3 className="font-bold text-[#222744] text-sm leading-tight mb-1 group-hover:text-hanashi-primary transition-colors">Finding Stillness: Meditation in a Japanese Temple</h3>
              <p className="text-gray-400 text-xs font-medium">Culture Lab • 89k views</p>
            </div>
          </div>
        </div>
      </section>

      {/* Did You Know Banner */}
      <section className="bg-[#ffebf0] rounded-[3rem] p-12 md:p-16 relative overflow-hidden flex flex-col">
        {/* Book BG graphic (abstract representation) */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-100 h-100 opacity-20 pointer-events-none">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#c3829e]">
            <path d="M100 180V40C100 40 70 20 20 40V180C70 160 100 180 100 180Z" fill="currentColor"/>
            <path d="M100 180V40C100 40 130 20 180 40V180C130 160 100 180 100 180Z" fill="currentColor"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-2xl">
          <span className="inline-block bg-white text-gray-500 text-[10px] font-black tracking-widest uppercase px-4 py-2 rounded-full mb-6 shadow-sm">
            Did you know?
          </span>
          <h2 className="text-4xl md:text-[3.5rem] font-black text-[#2e2633] mb-6 tracking-tight leading-[1.1]">
            Japanese has no<br/>future tense.
          </h2>
          <p className="text-[#64596b] text-lg font-medium leading-relaxed mb-10 max-w-xl">
            In Japanese grammar, the present and future are the same. Context and time-words define when something will happen. This linguistic structure is said to root speakers deeply in the &quot;now.&quot;
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[#664b58] text-white px-8 py-3.5 rounded-full text-sm font-bold tracking-wider hover:bg-[#4a3640] transition-colors uppercase">
              Explore Language Roots
            </button>
            <button className="border-2 border-[#c3829e]/40 text-[#664b58] px-8 py-3.5 rounded-full text-sm font-bold tracking-wider hover:bg-[#c3829e]/10 transition-colors uppercase flex items-center gap-2">
              Share This Fact
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}
