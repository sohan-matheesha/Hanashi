import Link from "next/link";
import { Sparkles, BookOpen, Mic, Globe, Gamepad2, Settings } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SakuraHero from "@/components/SakuraHero";

export default function Home() {
  return (
    <div className="font-sans min-h-screen pb-20 relative">
      {/* Full Page Fixed Background */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/sakura-night.jpg')` }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10">
        <Navbar />

        <SakuraHero />

      {/* Methodology / Features Section */}

      {/* Methodology / Features Section */}
      <section id="features" className="py-16 md:py-24 lg:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h4 className="text-pink-300 text-[11px] font-bold tracking-widest uppercase mb-4 drop-shadow-md">
              Core Methodology
            </h4>
            <h2 className="text-3xl md:text-[2.75rem] leading-tight font-black text-white mb-6 drop-shadow-lg">
              Why Choose Hanashi?
            </h2>
            <p className="text-gray-300 font-medium text-lg leading-relaxed drop-shadow-md">
              A curated blend of traditional pedagogy and modern interaction for the discerning learner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-4xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-white/10 transition-all relative overflow-hidden group">
              <div className="w-14 h-14 bg-pink-500/20 rounded-2xl flex items-center justify-center text-pink-300 mb-8 transition-transform group-hover:scale-110 border border-pink-500/20">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white text-xl mb-3">Structured Lessons</h3>
              <p className="text-gray-300 leading-relaxed text-sm font-medium">
                Deep linguistic insights and modules designed by Tokyo's top educators.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-4xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-white/10 transition-all relative overflow-hidden group mt-0 lg:mt-6">
              <div className="w-14 h-14 bg-pink-500/20 rounded-2xl flex items-center justify-center text-pink-300 mb-8 transition-transform group-hover:scale-110 border border-pink-500/20">
                <Mic className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white text-xl mb-3">Speak Confidently</h3>
              <p className="text-gray-300 leading-relaxed text-sm font-medium">
                Proprietary real-time matching system for high-fidelity vocal practice.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-4xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-white/10 transition-all relative overflow-hidden group mt-0 lg:mt-12">
              <div className="w-14 h-14 bg-pink-500/20 rounded-2xl flex items-center justify-center text-pink-300 mb-8 transition-transform group-hover:scale-110 border border-pink-500/20">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white text-xl mb-3">Cultural Context</h3>
              <p className="text-gray-300 leading-relaxed text-sm font-medium">
                Understand the nuances of etiquette and history behind every phrase.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-4xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-white/10 transition-all relative overflow-hidden group mt-0 lg:mt-16">
              <div className="w-14 h-14 bg-pink-500/20 rounded-2xl flex items-center justify-center text-pink-300 mb-8 transition-transform group-hover:scale-110 border border-pink-500/20">
                <Gamepad2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white text-xl mb-3">Gamified Mastery</h3>
              <p className="text-gray-300 leading-relaxed text-sm font-medium">
                Reward-driven paths that make the JLPT journey feel like an adventure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-[3rem] p-8 md:p-24 flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-pink-500/10 to-purple-900/10 pointer-events-none" />
          <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-pink-300 mb-8 relative z-10 border border-white/10">
            <Settings className="w-8 h-8" />
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-[3.5rem] font-black text-white mb-6 relative z-10 tracking-tight drop-shadow-lg">
            Begin Your Story.
          </h2>
          <p className="text-gray-200 font-medium text-lg max-w-2xl mb-12 relative z-10 leading-relaxed drop-shadow-md">
            Join 50,000+ students worldwide mastering Japanese with elegance. Your first masterclass is complimentary.
          </p>
          <Link href="/register" className="inline-flex items-center justify-center bg-pink-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-pink-700 transition-all shadow-[0_0_20px_rgba(219,39,119,0.4)] hover:shadow-[0_0_30px_rgba(219,39,119,0.6)] relative z-10 hover:-translate-y-0.5">
            Start Free Now
          </Link>
        </div>
      </section>

      <Footer />
      </div>
    </div>
  );
}
