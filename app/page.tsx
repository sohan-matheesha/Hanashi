import Link from "next/link";
import { Sparkles, BookOpen, Mic, Globe, Gamepad2, Settings } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SakuraNightAnimation from "@/components/SakuraNightAnimation";

export default function Home() {
  return (
    <div 
      className="font-sans min-h-screen pb-20 relative bg-[#0a0a0c]"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.65)), url('/images/sakura-night.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-24">
        <SakuraNightAnimation />
        <main className="max-w-4xl mx-auto px-4 md:px-8 flex flex-col items-center justify-center text-center">
          {/* Copy & Actions */}
          <div className="flex flex-col items-center gap-8 z-10 w-full">
            {/* Badge */}
            <div className="flex items-center gap-2 bg-pink-500/20 text-pink-300 text-[11px] font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-2 border border-pink-500/30 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>New: Live Conversation Matching</span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-[3.5rem] lg:text-[5.5rem] font-black text-white leading-[1.05] tracking-tight text-center drop-shadow-2xl">
              Master Japanese <br className="hidden lg:block"/>
              <span className="text-pink-400 italic font-serif font-medium">through</span> Practice
            </h1>

            {/* Subheading */}
            <p className="text-base md:text-xl text-gray-200 leading-relaxed font-medium max-w-120 text-center px-2 opacity-90">
              An editorial-grade language platform designed to bridge the gap between textbook Japanese and native fluency.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2 w-full sm:w-auto">
              <Link href="/register" className="flex items-center justify-center w-full sm:w-auto bg-pink-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-pink-500 transition-all shadow-[0_0_20px_rgba(219,39,119,0.3)] hover:-translate-y-0.5 whitespace-nowrap">
                Get Started Free
              </Link>
              <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-bold border border-white/20 hover:bg-white/20 transition-all shadow-sm hover:-translate-y-0.5 whitespace-nowrap">
                Explore Features
              </button>
            </div>
          </div>
        </main>
      </section>

      {/* Methodology / Features Section */}
      <section id="features" className="bg-gray-50/50 py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h4 className="text-hanashi-primary text-[11px] font-bold tracking-widest uppercase mb-4">
              Core Methodology
            </h4>
            <h2 className="text-3xl md:text-[2.75rem] leading-tight font-black text-hanashi-dark mb-6">
              Why Choose Hanashi?
            </h2>
            <p className="text-gray-500 font-medium text-lg leading-relaxed">
              A curated blend of traditional pedagogy and modern interaction for the discerning learner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-4xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="w-14 h-14 bg-hanashi-accent/30 rounded-2xl flex items-center justify-center text-hanashi-primary mb-8 transition-transform group-hover:scale-110">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-hanashi-dark text-xl mb-3">Structured Lessons</h3>
              <p className="text-gray-500 leading-relaxed text-sm font-medium">
                Deep linguistic insights and modules designed by Tokyo&apos;s top educators.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-4xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow relative overflow-hidden group mt-0 lg:mt-6">
              <div className="w-14 h-14 bg-hanashi-accent/30 rounded-2xl flex items-center justify-center text-hanashi-primary mb-8 transition-transform group-hover:scale-110">
                <Mic className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-hanashi-dark text-xl mb-3">Speak Confidently</h3>
              <p className="text-gray-500 leading-relaxed text-sm font-medium">
                Proprietary real-time matching system for high-fidelity vocal practice.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-4xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow relative overflow-hidden group mt-0 lg:mt-12">
              <div className="w-14 h-14 bg-hanashi-accent/30 rounded-2xl flex items-center justify-center text-hanashi-primary mb-8 transition-transform group-hover:scale-110">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-hanashi-dark text-xl mb-3">Cultural Context</h3>
              <p className="text-gray-500 leading-relaxed text-sm font-medium">
                Understand the nuances of etiquette and history behind every phrase.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-4xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow relative overflow-hidden group mt-0 lg:mt-16">
              <div className="w-14 h-14 bg-hanashi-accent/30 rounded-2xl flex items-center justify-center text-hanashi-primary mb-8 transition-transform group-hover:scale-110">
                <Gamepad2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-hanashi-dark text-xl mb-3">Gamified Mastery</h3>
              <p className="text-gray-500 leading-relaxed text-sm font-medium">
                Reward-driven paths that make the JLPT journey feel like an adventure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto bg-linear-to-br from-[#30273a] to-[#251e2e] rounded-2xl md:rounded-[3rem] p-8 md:p-24 flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-hanashi-secondary mb-8 relative z-10 border border-white/10">
            <Settings className="w-8 h-8" />
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-[3.5rem] font-black text-white mb-6 relative z-10 tracking-tight">
            Begin Your Story.
          </h2>
          <p className="text-gray-300 font-medium text-lg max-w-2xl mb-12 relative z-10 leading-relaxed">
            Join 50,000+ students worldwide mastering Japanese with elegance. Your first masterclass is complimentary.
          </p>
          <Link href="/register" className="inline-flex items-center justify-center bg-white text-hanashi-dark px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl relative z-10 hover:-translate-y-0.5">
            Start Free Now
          </Link>
        </div>
      </section>

      <Footer />
      </div>
    </div>
  );
}
