import Image from "next/image";
import Link from "next/link";
import { Sparkles, MessageSquare, BookOpen, Mic, Globe, Gamepad2, Settings } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans bg-white pb-20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-24">
        <main className="max-w-7xl mx-auto px-8 grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="flex flex-col items-start gap-8 z-10 w-full">
            {/* Badge */}
            <div className="flex items-center gap-2 bg-hanashi-accent/30 text-hanashi-primary text-[11px] font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-2 border border-hanashi-accent">
              <Sparkles className="w-3.5 h-3.5" />
              <span>New: Live Conversation Matching</span>
            </div>

            {/* Heading */}
            <h1 className="text-[3.5rem] lg:text-[5.5rem] font-black text-hanashi-dark leading-[1.05] tracking-tight">
              Master <br />
              Japanese <br />
              <span className="text-hanashi-primary italic font-serif font-medium">through</span> <br />
              Practice
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium max-w-120">
              An editorial-grade language platform designed to bridge the gap between textbook Japanese and native fluency.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full sm:w-auto">
              <Link href="/register" className="flex items-center justify-center w-full sm:w-auto bg-hanashi-secondary text-white px-8 py-4 rounded-2xl font-bold hover:bg-opacity-90 transition-all shadow-md  hover:-translate-y-0.5 whitespace-nowrap">
                Get Started Free
              </Link>
              <button className="w-full sm:w-auto bg-white text-hanashi-dark px-8 py-4 rounded-2xl font-bold border border-gray-200 hover:border-gray-300 transition-all shadow-sm hover:-translate-y-0.5 whitespace-nowrap">
                Explore Features
              </button>
            </div>
          </div>

          {/* Right Column: Image & Decorative Elements */}
          <div className="relative w-full max-w-150 mx-auto lg:ml-auto pt-10 lg:pt-0">
            {/* Background Blob */}
            <div className="absolute top-0 right-0 w-100 h-100 bg-hanashi-accent/40 rounded-[60px] -rotate-12 -z-10 translate-x-12 -translate-y-12"></div>
            
            {/* Main Image Container */}
            <div className="relative bg-hanashi-dark rounded-[2.5rem] p-4 pb-6 shadow-2xl">
              <div className="relative aspect-3/4 w-full rounded-3xl overflow-hidden shadow-inner bg-black/20 border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop"
                  alt="Traditional Japanese temple"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Card inside the dark container */}
              <div className="absolute bottom-10 left-10 right-10 bg-white/95 backdrop-blur-md px-5 py-4 rounded-2xl shadow-xl flex items-center justify-between gap-4 border border-white/50 z-20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-hanashi-secondary text-white rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-hanashi-dark font-bold text-sm">New Live Session</p>
                    <p className="text-gray-500 text-xs font-medium">Practice with Yuki-san (N1 Native)</p>
                  </div>
                </div>
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full shrink-0"></div>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* Methodology / Features Section */}
      <section id="features" className="bg-gray-50/50 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8">
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
            <div className="bg-white p-8 rounded-4xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow relative overflow-hidden group mt-4 lg:mt-6">
              <div className="w-14 h-14 bg-hanashi-accent/30 rounded-2xl flex items-center justify-center text-hanashi-primary mb-8 transition-transform group-hover:scale-110">
                <Mic className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-hanashi-dark text-xl mb-3">Speak Confidently</h3>
              <p className="text-gray-500 leading-relaxed text-sm font-medium">
                Proprietary real-time matching system for high-fidelity vocal practice.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-4xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow relative overflow-hidden group mt-8 lg:mt-12">
              <div className="w-14 h-14 bg-hanashi-accent/30 rounded-2xl flex items-center justify-center text-hanashi-primary mb-8 transition-transform group-hover:scale-110">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-hanashi-dark text-xl mb-3">Cultural Context</h3>
              <p className="text-gray-500 leading-relaxed text-sm font-medium">
                Understand the nuances of etiquette and history behind every phrase.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-4xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow relative overflow-hidden group mt-12 lg:mt-16">
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
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto bg-linear-to-br from-[#30273a] to-[#251e2e] rounded-[3rem] p-12 md:p-24 flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-hanashi-secondary mb-8 relative z-10 border border-white/10">
            <Settings className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-[3.5rem] font-black text-white mb-6 relative z-10 tracking-tight">
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
  );
}
