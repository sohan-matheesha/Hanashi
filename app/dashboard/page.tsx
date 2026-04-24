import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import { Mic, CheckSquare, Flame, BrainCircuit, Award, Search, Lock } from 'lucide-react'

export default async function DashboardPage() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/register')
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  const fullName = profile?.full_name || user.email?.split('@')[0] || 'Student'
  const firstName = fullName.split(' ')[0]

  return (
    <>
      <div className="max-w-7xl mx-auto space-y-10 p-10">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-hanashi-dark mb-2 tracking-tight">
              Welcome , {firstName}-san!
            </h2>
            <p className="text-gray-500 font-medium text-base">
              You have completed <span className="font-bold text-gray-700">64%</span> of your JLPT N5 curriculum. Keep it up!
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-hanashi-primary text-white px-5 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-md">
              <Mic className="w-4 h-4" />
              Join Speak Session
            </button>
            <button className="flex items-center gap-2 bg-white text-hanashi-dark px-5 py-3 rounded-xl font-bold border border-gray-200 hover:border-gray-300 transition-all shadow-sm">
              <CheckSquare className="w-4 h-4" />
              Daily Quiz
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Continue Learning Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-hanashi-dark">Continue Learning</h3>
              <button className="text-sm font-bold text-hanashi-primary hover:underline">View All Lessons</button>
            </div>

            {/* Large Course Card */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8">
              {/* Image Area */}
              <div className="relative w-full md:w-64 aspect-square md:aspect-auto md:h-64 rounded-2xl overflow-hidden shrink-0 bg-gray-100">
                <Image 
                  src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop" 
                  alt="Japanese landscape"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Content Area */}
              <div className="flex flex-col justify-center flex-1">
                <div className="inline-flex items-center bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full mb-4 w-fit uppercase tracking-wider">
                  Lesson 04 &bull; Intermediate
                </div>
                <h4 className="text-2xl font-black text-hanashi-dark mb-3">JLPT N5 Kanji: Time & Numbers</h4>
                <p className="text-gray-500 font-medium mb-8 leading-relaxed text-sm">
                  Mastering the essential kanji for hours, minutes, and counting days of the week.
                </p>
                
                <div className="mt-auto">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-gray-500">Progress</span>
                    <span className="text-xs font-bold text-hanashi-dark">75%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5 mb-6 overflow-hidden">
                    <div className="bg-hanashi-primary h-2.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  
                  <button className="w-full bg-hanashi-primary text-white py-3.5 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-sm">
                    Resume Lesson
                  </button>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex items-center gap-5">
                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500">
                  <Flame className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 tracking-wider uppercase mb-1">Current Streak</p>
                  <p className="text-2xl font-black text-hanashi-dark">7 Days</p>
                </div>
              </div>
              
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex items-center gap-5">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 tracking-wider uppercase mb-1">Kanji Mastered</p>
                  <p className="text-2xl font-black text-hanashi-dark">142<span className="text-gray-400 text-lg">/800</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebars */}
          <div className="space-y-8">
            
            {/* Achievements Header */}
            <h3 className="text-xl font-bold text-hanashi-dark">Recent Achievements</h3>
            
            {/* Achievements Card */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
              <div className="space-y-6 mb-6">
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center text-yellow-600 shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-hanashi-dark text-sm mb-1">7-Day Streak</h5>
                    <p className="text-xs text-gray-500 font-medium">Unstoppable learner! You&apos;ve logged in for a week straight.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 shrink-0 border-2 border-transparent">
                    <Search className="w-5 h-5 relative -right-0.5 -bottom-0.5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-hanashi-dark text-sm mb-1">Cultural Explorer</h5>
                    <p className="text-xs text-gray-500 font-medium">Completed 5 lessons in the Cultural Hub.</p>
                  </div>
                </div>

                <div className="flex gap-4 opacity-50">
                  <div className="w-12 h-12 bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 shrink-0">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-500 text-sm mb-1">Fluent Speaker</h5>
                    <p className="text-xs text-gray-400 font-medium">Attend 10 Speak Sessions to unlock.</p>
                  </div>
                </div>

              </div>
              
              <button className="w-full bg-gray-50 text-gray-600 font-bold py-3 rounded-xl hover:bg-gray-100 transition-colors text-sm">
                View All Badges
              </button>
            </div>

            {/* Culture Spotlight Header */}
            <h3 className="text-xl font-bold text-hanashi-dark">Culture Spotlight</h3>
            
            {/* Culture Card */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden group cursor-pointer">
              <div className="relative h-40 w-full overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1545987796-200677ee1011?q=80&w=800&auto=format&fit=crop" 
                  alt="Japanese Tea Ceremony"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded w-fit uppercase tracking-wider">
                  New Article
                </div>
              </div>
              <div className="p-6">
                <h5 className="font-bold text-hanashi-dark text-lg mb-2">The Art of Omotenashi</h5>
                <p className="text-sm text-gray-500 font-medium leading-relaxed mb-1">
                  Discover the deep-rooted spirit of Japanese hospitality and how it shapes daily...
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
