import Image from "next/image";
import { Sparkles, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-white to-hanashi-accent/30 font-sans">
      <Navbar />

      <main className="max-w-7xl mx-auto px-8 pt-40 pb-16 lg:py-32 grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
        {/* Left Column: Copy & Actions */}
        <div className="flex flex-col items-start gap-8 z-10 w-full max-w-[600px]">
          {/* Badge */}
          <div className="flex items-center gap-2 bg-hanashi-accent/40 text-hanashi-primary text-xs font-bold tracking-wider uppercase px-4 py-2 rounded-full border border-hanashi-secondary/40 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>New: Live Conversation Matching</span>
          </div>

          {/* Heading */}
          <h1 className="text-[3.5rem] lg:text-[4.5rem] font-black text-hanashi-dark leading-[1.1] tracking-tight">
            Master <br />
            Japanese <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10">through</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-hanashi-secondary/50 -z-10 -rotate-1 rounded-sm"></span>
            </span>{" "}
            <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10">Practice</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-hanashi-secondary/50 -z-10 rotate-1 rounded-sm"></span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg text-gray-600 leading-relaxed font-medium">
            A complete language platform designed to take you from beginner to
            fluent with native-speaker interactions and cultural immersion.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-hanashi-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg shadow-hanashi-primary/30 hover:-translate-y-0.5">
              Get Started Free
            </button>
            <button className="w-full sm:w-auto bg-white text-hanashi-primary px-8 py-4 rounded-xl font-bold border-2 border-hanashi-secondary/30 hover:border-hanashi-primary/40 transition-all shadow-sm hover:-translate-y-0.5">
              Explore Features
            </button>
          </div>
        </div>

        {/* Right Column: Image & Decorative Elements */}
        <div className="relative z-10 w-full max-w-[500px] mx-auto lg:ml-auto pt-10 lg:pt-0">
          {/* Main Image Container */}
          <div className="relative aspect-[4/3] w-full rounded-[2rem] overflow-hidden bg-hanashi-accent shadow-2xl p-4 md:p-6">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner border border-white/20">
              <Image
                src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=1200&auto=format&fit=crop"
                alt="Traditional Japanese interior overlooking a garden"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-4 lg:-left-12 bg-white px-5 py-4 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] flex items-center gap-4 border border-gray-50 z-20">
            <div className="w-12 h-12 bg-hanashi-accent/60 rounded-xl flex items-center justify-center text-hanashi-primary">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <p className="text-hanashi-dark font-bold text-sm">New Partner!</p>
              <p className="text-gray-500 text-xs font-medium">Practice with Yuki-san</p>
            </div>
          </div>

          {/* Decorative blur blob */}
          <div className="absolute top-10 -right-10 w-64 h-64 bg-hanashi-accent rounded-full mix-blend-multiply filter blur-3xl opacity-70 -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-hanashi-secondary/80 rounded-full mix-blend-multiply filter blur-3xl opacity-40 -z-10"></div>
        </div>
      </main>
    </div>
  );
}
