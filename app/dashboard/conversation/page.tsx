'use client'

import { useId, useState } from 'react'
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
  const [autoTranslate, setAutoTranslate] = useState(true)
  const roomId = useId().replace(/:/g, '')
  const roomName = `HanashiLiveSession_${roomId}`
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

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
          
          <Link href="/dashboard" className="w-full bg-[#f85c5c] hover:bg-red-600 text-white py-3 rounded-xl font-bold flex items-center justify-center transition-all hidden lg:flex">
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
          <div className="flex-1 rounded-[2rem] overflow-hidden shadow-sm border border-gray-200 bg-[#1e1e1e] relative min-w-0">
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

          {/* Real-time Assistant Panel */}
          {isSidebarOpen && (
            <div className="w-[320px] lg:w-[380px] shrink-0 bg-white rounded-[2rem] shadow-sm border border-gray-200 flex flex-col overflow-hidden max-h-full">
              {/* Header */}
              <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-white shrink-0">
                <div>
                  <h3 className="font-black text-[#202c5c] text-[11px] tracking-[0.15em] uppercase mb-1 flex items-center gap-2">
                    <span className="w-1 h-3 bg-blue-500 rounded-full"></span>
                    Live Transcript
                  </h3>
                  <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest pl-3">N3 Natural Flow</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-blue-500" />
                </div>
              </div>

              {/* Chat Flow */}
              <div className="flex-1 overflow-y-auto p-5 space-y-6 scrollbar-hide bg-[#fcfdff]">
                
                {/* Tutor Bubble */}
                <div className="flex flex-col gap-2">
                  <div className="bg-white p-4 rounded-2xl rounded-tl-sm border border-gray-100 shadow-sm text-[#202c5c] text-sm font-medium leading-relaxed">
                    こんにちは！今日のトピックは「レストランでの注文」ですね。準備はいいですか？
                  </div>
                  <div className="flex items-start gap-2 pl-1">
                    <div className="w-4 h-4 rounded bg-pink-100 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[9px] text-pink-600 font-bold">A</span>
                    </div>
                    <p className="text-[11px] text-gray-500 italic font-medium leading-snug">&quot;Hello! Today&apos;s topic is &apos;Ordering at a restaurant&apos;. Are you ready?&quot;</p>
                  </div>
                </div>
                {/* User Bubble */}
                <div className="flex flex-col items-end gap-1.5">
                  <div className="bg-blue-600 text-white p-4 rounded-2xl rounded-tr-sm text-sm font-medium leading-relaxed max-w-[85%] shadow-md shadow-blue-900/10">
                    はい、準備はできています。お願いします！
                  </div>
                  <div className="flex items-center gap-1.5 pr-1">
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Seen 14:15</span>
                    <Check className="w-3 h-3 text-blue-400" />
                  </div>
                </div>

                {/* Tutor Bubble 2 */}
                <div className="flex flex-col gap-2">
                  <div className="bg-white p-4 rounded-2xl rounded-tl-sm border border-gray-100 shadow-sm text-[#202c5c] text-sm font-medium leading-relaxed">
                    素晴らしい。まずは、メニューを頼むところから始めましょう。「メニューをください」と言ってみてください。
                  </div>
                  <button className="text-[9px] font-black text-blue-500 hover:text-blue-600 uppercase tracking-widest text-left pl-1 transition-colors">
                    Show Translation
                  </button>
                </div>

                {/* Tip Card */}
                <div className="bg-gradient-to-r from-[#fff5f8] to-[#fffbfc] border border-pink-100 rounded-[1.5rem] p-4 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-pink-200/20 rounded-bl-full filter blur-xl"></div>
                  <div className="flex items-center gap-2 mb-2 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center">
                      <Lightbulb className="w-3.5 h-3.5 text-pink-500" />
                    </div>
                    <span className="text-[10px] font-black text-pink-600 uppercase tracking-widest">Zen Tip</span>
                  </div>
                  <p className="text-xs text-gray-700 font-medium leading-relaxed relative z-10">
                    Try using <strong className="text-[#202c5c] bg-white px-2 py-0.5 rounded border border-pink-200 mx-0.5">「すみません」</strong> (Sumimasen) before asking for the menu.
                  </p>
                </div>

              </div>

              {/* Input Toolbar */}
              <div className="p-4 bg-white border-t border-gray-100 shrink-0">
                <div className="flex items-center justify-between mb-3 px-1">
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setAutoTranslate(!autoTranslate)}
                      className={`w-9 h-5 rounded-full relative transition-all duration-300 ${autoTranslate ? 'bg-blue-600' : 'bg-gray-200'}`}
                    >
                      <div className={`w-3.5 h-3.5 bg-white rounded-full shadow-sm absolute top-[3px] transition-all duration-300 ${autoTranslate ? 'left-[18px]' : 'left-[3px]'}`}></div>
                    </button>
                    <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Auto-Translate</span>
                  </div>
                  <button className="text-gray-400 hover:text-[#202c5c] transition-colors">
                    <Smile className="w-4 h-4" />
                  </button>
                </div>

                <div className="border border-gray-200 rounded-[1rem] flex items-center p-1 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/10 transition-all bg-gray-50/50">
                  <input 
                    type="text" 
                    placeholder="Speak or type..." 
                    className="flex-1 bg-transparent border-none outline-none px-3 py-2 text-[13px] font-medium text-[#202c5c] placeholder-gray-400"
                  />
                  <button className="w-10 h-10 rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-all shadow-md shadow-blue-500/20">
                    <Mic className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
