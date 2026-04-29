'use client'

import { useId } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { 
  Wifi, BookOpen, Settings, Sparkles, Lightbulb, Smile, Check, Mic, 
  MessageSquare, Users, History, GraduationCap, X, Maximize2
} from 'lucide-react'

// Dynamically import JitsiMeeting to avoid SSR issues
const JitsiMeeting = dynamic(
  () => import('@jitsi/react-sdk').then((mod) => mod.JitsiMeeting),
  { ssr: false, loading: () => <div className="flex-1 flex items-center justify-center bg-gray-900 rounded-3xl animate-pulse text-white">Loading meeting interface...</div> }
)

export default function ConversationPage() {
  
  const roomId = useId().replace(/:/g, '')
  const roomName = `HanashiLiveSession_${roomId}`

  return (
    <div className="fixed inset-0 z-50 bg-[#f8f9fc] flex font-sans text-hanashi-dark h-screen overflow-hidden">
      
      {/* Left Navigation Sidebar */}
      <aside className="w-[80px] lg:w-[240px] bg-white flex flex-col justify-between shrink-0 h-full border-r border-gray-100 relative py-6 transition-all duration-300 z-10 shadow-sm">
        <div className="px-4">
          <Link href="/dashboard" className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
            <div className="w-10 h-10 bg-[#e4ecff] text-[#202c5c] rounded-xl flex items-center justify-center font-black">
              あa
            </div>
            <div className="hidden lg:block">
              <h1 className="font-bold text-lg leading-tight text-[#202c5c]">Hanashi</h1>
              <p className="text-xs text-gray-500 font-medium">ZEN PRACTICE</p>
            </div>
          </Link>

          <nav className="space-y-3">
            <Link href="/dashboard/conversation/lobby" className="flex items-center gap-4 px-3 py-3 text-gray-500 font-bold rounded-xl transition-colors hover:bg-gray-50 hover:text-[#202c5c] justify-center lg:justify-start">
              <MessageSquare className="w-5 h-5" />
              <span className="hidden lg:block">Lobby</span>
            </Link>
            <div className="flex items-center gap-4 px-3 py-3 text-[#202c5c] bg-blue-50/50 rounded-xl font-bold cursor-default justify-center lg:justify-start">
              <div className="relative">
                <Users className="w-5 h-5" />
                <div className="w-2 h-2 bg-green-500 rounded-full border-2 border-white absolute -top-1 -right-1"></div>
              </div>
              <span className="hidden lg:block">Live Practice</span>
            </div>
            <Link href="/dashboard/conversation/tutors" className="flex items-center gap-4 px-3 py-3 text-gray-500 font-bold rounded-xl transition-colors hover:bg-gray-50 hover:text-[#202c5c] justify-center lg:justify-start">
              <GraduationCap className="w-5 h-5" />
              <span className="hidden lg:block">Tutors</span>
            </Link>
            <Link href="/dashboard/conversation/progress" className="flex items-center gap-4 px-3 py-3 text-gray-500 font-bold rounded-xl transition-colors hover:bg-gray-50 hover:text-[#202c5c] justify-center lg:justify-start">
              <History className="w-5 h-5" />
              <span className="hidden lg:block">Progress</span>
            </Link>
          </nav>
        </div>

        <div className="mt-auto px-4 space-y-4">
          <div className="bg-gray-50 rounded-2xl p-3 flex items-center justify-center lg:justify-start gap-3 border border-gray-100">
            <div className="w-10 h-10 bg-teal-100 text-teal-800 rounded-full flex items-center justify-center font-bold overflow-hidden relative shrink-0">
              <div className="w-6 h-6 absolute bottom-0 bg-teal-200 rounded-t-full"></div>
            </div>
            <div className="hidden lg:block">
              <p className="text-xs font-bold text-[#202c5c]">Level: N3</p>
              <p className="text-[10px] font-black text-gray-400">INTERMEDIATE</p>
            </div>
          </div>
          
          <Link href="/dashboard" className="w-full bg-[#f85c5c] hover:bg-red-600 text-white py-3 rounded-xl font-bold flex items-center justify-center transition-all lg:flex">
            End Session
          </Link>
          <Link href="/dashboard" className="w-10 h-10 mx-auto bg-[#f85c5c] hover:bg-red-600 text-white rounded-xl font-bold flex items-center justify-center transition-all lg:hidden">
            <X className="w-5 h-5" />
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Top Header / Lesson Status */}
        <div className="h-[88px] bg-white border-b border-gray-100 px-6 flex items-center justify-between shrink-0 shadow-sm z-10 w-full">
          <div className="flex items-center gap-6 overflow-x-auto min-w-0 whitespace-nowrap scrollbar-hide py-2">
            
            {/* Status Pill */}
            <div className="bg-green-50 text-green-700 px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 border border-green-100 shrink-0">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Aiko Tanaka
            </div>

            <div className="w-px h-8 bg-gray-200 shrink-0 hidden md:block"></div>

            {/* Active Topic Banner */}
            <div className="flex flex-col shrink-0 min-w-[200px]">
              <span className="text-[10px] font-black text-pink-500 uppercase tracking-widest mb-0.5">Active Topic</span>
              <h2 className="text-sm font-bold text-[#202c5c] leading-none">Ordering Food at a Restaurant</h2>
            </div>
            
            <div className="w-px h-8 bg-gray-200 shrink-0 hidden md:block"></div>

            {/* In-Lesson Vocabs */}
            <div className="flex gap-3 shrink-0 pr-4">
              <div className="bg-white px-4 py-2 rounded-xl border border-gray-200 flex items-center gap-3 group cursor-pointer hover:border-pink-300 transition-all shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[15px] font-bold text-[#202c5c]">注文</span>
                  </div>
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">ORDER</span>
                </div>
                <BookOpen className="w-4 h-4 text-pink-400" />
              </div>
              
              <div className="bg-white px-4 py-2 rounded-xl border border-gray-200 flex items-center gap-3 group cursor-pointer hover:border-pink-300 transition-all shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[15px] font-bold text-[#202c5c]">お願いします</span>
                  </div>
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">PLEASE</span>
                </div>
                <BookOpen className="w-4 h-4 text-pink-400" />
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 shrink-0 pl-4 bg-white">
            <div className="hidden md:flex items-center gap-2 text-xs font-bold text-gray-400">
              <Wifi className="w-4 h-4" />
              <span>HD</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
              <Maximize2 className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Video & Assistant Area */}
        <div className="flex-1 flex overflow-hidden bg-[#f0f2f9] p-4 lg:p-6 gap-4 lg:gap-6 min-h-0 relative">
          
          {/* Main Jitsi Container */}
          <div className="flex-1 rounded-4xl overflow-hidden shadow-sm border border-gray-200 bg-[#1e1e1e] relative min-w-0">
            <JitsiMeeting
              roomName={roomName}
              configOverwrite={{
                startWithAudioMuted: true,
                startWithVideoMuted: false,
                disableModeratorIndicator: true,
                startScreenSharing: false,
                enableEmailInStats: false,
                prejoinPageEnabled: false,
                disableDeepLinking: true,
              }}
              interfaceConfigOverwrite={{
                DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
                SHOW_CHROME_EXTENSION_BANNER: false,
                TOOLBAR_BUTTONS: [
                  'microphone', 'camera', 'closedcaptions', 'desktop', 'fullscreen',
                  'fodeviceselection', 'hangup', 'profile', 'chat', 'settings',
                  'raisehand', 'videoquality', 'filmstrip', 'shortcuts',
                  'tileview'
                ],
              }}
              userInfo={{
                displayName: 'Student',
                email: 'student@hanashi.app',
              }}
              onApiReady={(externalApi) => {
                // You can attach listeners or controls to the api here
              }}
              getIFrameRef={(iframeRef) => {
                iframeRef.style.height = '100%';
                iframeRef.style.width = '100%';
                iframeRef.style.border = 'none';
              }}
            />
          </div>

          {/* Active Practice Lobby Panel */}
<div className="w-[320px] lg:w-[380px] shrink-0 bg-white rounded-4xl shadow-sm border border-gray-200 flex flex-col overflow-hidden max-h-full">
  {/* Header */}
  <div className="p-5 border-b border-gray-100 bg-white shrink-0">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="font-black text-[#202c5c] text-[11px] tracking-[0.15em] uppercase mb-1 flex items-center gap-2">
          <span className="w-1 h-3 bg-green-500 rounded-full"></span>
          Active Practice Lobby
        </h3>
        <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest pl-3">
          Find a speaking partner
        </p>
      </div>

      <div className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center">
        <Users className="w-4 h-4 text-green-600" />
      </div>
    </div>
  </div>

  {/* Online Status */}
  <div className="p-5 border-b border-gray-100 bg-[#fcfdff]">
    <div className="rounded-3xl bg-green-50 border border-green-100 p-4">
      <div className="flex items-center gap-3">
        <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white text-green-600">
          <Users className="h-5 w-5" />
          <span className="absolute right-0 top-0 h-3 w-3 rounded-full border-2 border-white bg-green-500"></span>
        </div>

        <div>
          <p className="text-sm font-black text-[#202c5c]">
            4 learners online now
          </p>
          <p className="text-xs font-medium text-gray-500">
            Join a room or wait for a partner.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Active Learners */}
  <div className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-hide bg-[#fcfdff]">
    <div className="rounded-3xl border border-gray-100 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-pink-100 font-black text-pink-700">
            A
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500"></span>
          </div>

          <div>
            <p className="text-sm font-black text-[#202c5c]">Aiko Tanaka</p>
            <p className="text-xs font-semibold text-gray-400">
              Level N3 • Intermediate
            </p>
          </div>
        </div>

        <span className="rounded-full bg-green-50 px-3 py-1 text-[10px] font-black text-green-700">
          Online
        </span>
      </div>

      <div className="mt-4 rounded-2xl bg-gray-50 p-3">
        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
          Wants to practice
        </p>
        <p className="mt-1 text-sm font-bold text-[#202c5c]">
          Ordering Food at a Restaurant
        </p>
      </div>

      <div className="mt-4 flex gap-2">
        <button className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#FF5A1F] px-4 py-3 text-xs font-bold text-white transition hover:opacity-90">
          <Mic className="h-4 w-4" />
          Voice
        </button>

        <button className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#202c5c] px-4 py-3 text-xs font-bold text-white transition hover:opacity-90">
          <Users className="h-4 w-4" />
          Video
        </button>
      </div>
    </div>

    <div className="rounded-3xl border border-gray-100 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 font-black text-blue-700">
            K
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500"></span>
          </div>

          <div>
            <p className="text-sm font-black text-[#202c5c]">Kenji Mori</p>
            <p className="text-xs font-semibold text-gray-400">
              Level N5 • Beginner
            </p>
          </div>
        </div>

        <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-black text-blue-700">
          Voice only
        </span>
      </div>

      <div className="mt-4 rounded-2xl bg-gray-50 p-3">
        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
          Wants to practice
        </p>
        <p className="mt-1 text-sm font-bold text-[#202c5c]">
          Basic self introduction
        </p>
      </div>

      <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#FF5A1F] px-4 py-3 text-xs font-bold text-white transition hover:opacity-90">
        <Mic className="h-4 w-4" />
        Join Voice Practice
      </button>
    </div>

    <div className="rounded-3xl border border-dashed border-orange-200 bg-[#fff7f2] p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#FF5A1F]">
          <Sparkles className="h-5 w-5" />
        </div>

        <div>
          <p className="text-sm font-black text-[#202c5c]">
            Waiting for a partner?
          </p>
          <p className="mt-1 text-xs leading-5 text-gray-500">
            Stay online here. When another learner joins, they can invite you for
            voice or video practice.
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom Action */}
  <div className="border-t border-gray-100 bg-white p-4 shrink-0">
    <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#202c5c] px-4 py-3 text-sm font-bold text-white transition hover:opacity-90">
      <Users className="h-4 w-4" />
      Join Open Practice Room
    </button>

    <p className="mt-3 text-center text-[10px] font-semibold text-gray-400">
      Real online presence can be connected with Supabase Realtime later.
    </p>
  </div>
</div>
        </div>
      </div>
    </div>
  )
}