'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  Bot,
  Camera,
  CheckCircle2,
  Copy,
  Headphones,
  MessageCircle,
  Mic,
  MicOff,
  MonitorUp,
  Phone,
  PhoneOff,
  Search,
  Sparkles,
  UserRound,
  Users,
  Video,
  VideoOff,
  Volume2,
  Wifi,
} from 'lucide-react'

const sideItems = [
  {
    id: 'live',
    label: 'Live Practice',
    icon: Video,
  },
  {
    id: 'ai',
    label: 'AI Partner',
    icon: Bot,
  },
  {
    id: 'listening',
    label: 'Listening',
    icon: Headphones,
  },
]

const modes = [
  { id: 'video', label: 'Video Call', icon: Video },
  { id: 'voice', label: 'Voice Call', icon: Mic },
  { id: 'chat', label: 'Text Chat', icon: MessageCircle },
  { id: 'ai', label: 'AI Partner', icon: Bot },
]

const learners = [
  {
    id: 1,
    name: 'Aiko Tanaka',
    level: 'N3',
    topic: 'Daily Japanese Conversation',
    mode: 'Voice + Video',
    online: true,
    initial: 'A',
    color: 'bg-pink-100 text-pink-600',
  },
  {
    id: 2,
    name: 'Kenji Mori',
    level: 'N5',
    topic: 'Basic Self Introduction',
    mode: 'Voice Only',
    online: true,
    initial: 'K',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: 3,
    name: 'Yuna Sato',
    level: 'N4',
    topic: 'Shopping and Food',
    mode: 'Video + Chat',
    online: true,
    initial: 'Y',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    id: 4,
    name: 'Haruto Lee',
    level: 'N5',
    topic: 'Greetings Practice',
    mode: 'AI Partner',
    online: true,
    initial: 'H',
    color: 'bg-emerald-100 text-emerald-600',
  },
]

const usefulPhrases = [
  {
    jp: 'こんにちは。',
    en: 'Hello.',
  },
  {
    jp: '私は日本語を勉強しています。',
    en: 'I am studying Japanese.',
  },
  {
    jp: 'もう一度お願いします。',
    en: 'Once again, please.',
  },
  {
    jp: 'ゆっくり話してください。',
    en: 'Please speak slowly.',
  },
]

export default function ConversationPage() {
  const [activeSideItem, setActiveSideItem] = useState('live')
  const [selectedMode, setSelectedMode] = useState('video')
  const [selectedLearnerId, setSelectedLearnerId] = useState(1)
  const [micOn, setMicOn] = useState(true)
  const [cameraOn, setCameraOn] = useState(true)

  const selectedLearner =
    learners.find((learner) => learner.id === selectedLearnerId) || learners[0]

  const selectedModeLabel = useMemo(() => {
    return modes.find((mode) => mode.id === selectedMode)?.label || 'Video Call'
  }, [selectedMode])

  return (
    <div className="min-h-screen bg-[#f6f7fb] text-[#202c5c]">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        {/* Left Sidebar */}
        <aside className="hidden border-r border-gray-100 bg-white px-5 py-6 lg:flex lg:flex-col">
          <Link
            href="/dashboard"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-gray-400 transition hover:text-[#202c5c]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>

          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff5a2f] text-white shadow-sm">
              <MessageCircle className="h-7 w-7" />
            </div>

            <div>
              <h1 className="text-xl font-extrabold text-[#202c5c]">
                Hanashi
              </h1>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-400">
                Speaking Room
              </p>
            </div>
          </div>

          <nav className="space-y-3">
            {sideItems.map((item) => {
              const Icon = item.icon
              const active = activeSideItem === item.id

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSideItem(item.id)

                    if (item.id === 'ai') {
                      setSelectedMode('ai')
                    }

                    if (item.id === 'live') {
                      setSelectedMode('video')
                    }
                  }}
                  className={`flex w-full items-center gap-4 rounded-2xl px-4 py-4 text-left text-sm font-bold transition ${
                    active
                      ? 'bg-[#fff1ea] text-[#ff5a2f]'
                      : 'text-gray-500 hover:bg-gray-50 hover:text-[#202c5c]'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </button>
              )
            })}
          </nav>

          <div className="mt-auto space-y-4">
            <div className="rounded-3xl bg-[#f7f8fc] p-5">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-lg font-extrabold text-emerald-700">
                  N3
                </div>

                <div>
                  <p className="text-sm font-extrabold text-[#202c5c]">
                    Level: N3
                  </p>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-400">
                    Intermediate
                  </p>
                </div>
              </div>
            </div>

            <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#ff5b5b] px-5 py-4 text-sm font-extrabold text-white transition hover:bg-red-500">
              <PhoneOff className="h-4 w-4" />
              End Session
            </button>
          </div>
        </aside>

        {/* Main */}
        <main className="px-4 py-6 md:px-6 xl:px-8">
          {/* Top */}
          <div className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <Link
                href="/dashboard"
                className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-[#202c5c] lg:hidden"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Dashboard
              </Link>

              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#ff6b2d]">
                Live Practice Room
              </p>

              <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-[#202c5c] md:text-4xl">
                Japanese Speaking Practice
              </h1>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                  N5 - N3 Friendly
                </span>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                  {learners.length} Learners Online
                </span>
                <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-700">
                  {selectedModeLabel}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#202c5c] shadow-sm ring-1 ring-gray-100 transition hover:bg-gray-50">
                Change Topic
              </button>

              <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#202c5c] shadow-sm ring-1 ring-gray-100 transition hover:bg-gray-50">
                <Copy className="h-4 w-4" />
                Copy Link
              </button>

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 shadow-sm ring-1 ring-emerald-100">
                <Wifi className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Listening Screen */}
          {activeSideItem === 'listening' ? (
            <div className="rounded-[32px] border border-gray-100 bg-white p-8 shadow-sm">
              <div className="mx-auto max-w-3xl text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#fff1ea] text-[#ff5a2f]">
                  <Headphones className="h-10 w-10" />
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.28em] text-[#ff6b2d]">
                  Listening Practice
                </p>

                <h2 className="mt-3 text-3xl font-extrabold text-[#202c5c]">
                  Listen and Understand Japanese
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500">
                  This section can be used for audio-based practice such as
                  listening to kana sounds, daily phrases, and short
                  conversations. You can connect audio exercises here later.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  <div className="rounded-3xl bg-[#f7f8fc] p-5">
                    <Headphones className="mx-auto h-7 w-7 text-[#ff5a2f]" />
                    <h3 className="mt-4 font-extrabold text-[#202c5c]">
                      Kana Sounds
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Hear a sound and choose the correct kana.
                    </p>
                  </div>

                  <div className="rounded-3xl bg-[#f7f8fc] p-5">
                    <MessageCircle className="mx-auto h-7 w-7 text-[#ff5a2f]" />
                    <h3 className="mt-4 font-extrabold text-[#202c5c]">
                      Daily Phrases
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Practice common phrases used in real conversations.
                    </p>
                  </div>

                  <div className="rounded-3xl bg-[#f7f8fc] p-5">
                    <Sparkles className="mx-auto h-7 w-7 text-[#ff5a2f]" />
                    <h3 className="mt-4 font-extrabold text-[#202c5c]">
                      Mini Dialogues
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Listen to short conversations and answer questions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Mode Tabs */}
              <div className="mb-6 flex flex-wrap gap-3">
                {modes.map((mode) => {
                  const Icon = mode.icon
                  const isActive = selectedMode === mode.id

                  return (
                    <button
                      key={mode.id}
                      onClick={() => {
                        setSelectedMode(mode.id)

                        if (mode.id === 'ai') {
                          setActiveSideItem('ai')
                        } else {
                          setActiveSideItem('live')
                        }
                      }}
                      className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                        isActive
                          ? 'bg-[#202c5c] text-white shadow-md'
                          : 'bg-white text-gray-600 ring-1 ring-gray-100 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {mode.label}
                    </button>
                  )
                })}
              </div>

              {/* Main Layout */}
              <div className="grid gap-6 xl:grid-cols-[minmax(0,1.7fr)_360px]">
                {/* Left Main Content */}
                <div className="space-y-6">
                  {/* Video Stage */}
                  <div className="overflow-hidden rounded-[32px] border border-gray-100 bg-white shadow-sm">
                    <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
                      <div>
                        <p className="text-sm font-bold text-[#202c5c]">
                          Japanese Speaking Session
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                          Topic: {selectedLearner.topic}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-700">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        Live now
                      </div>
                    </div>

                    <div className="relative bg-[#0e1220] p-4 md:p-5">
                      <div className="relative flex min-h-[430px] items-center justify-center overflow-hidden rounded-[28px] bg-linear-to-br from-[#171d32] via-[#0f1325] to-[#1c243f] md:min-h-[520px]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,120,80,0.18),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(120,140,255,0.16),transparent_30%)]" />

                        <div className="relative z-10 text-center">
                          <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-[#ff7850] text-6xl font-extrabold text-white shadow-lg md:h-40 md:w-40 md:text-7xl">
                            {selectedLearner.initial}
                          </div>

                          <h2 className="mt-6 text-2xl font-bold text-white">
                            {selectedLearner.name}
                          </h2>

                          <p className="mt-2 text-sm text-white/70">
                            {selectedLearner.level} • {selectedLearner.mode}
                          </p>
                        </div>

                        {/* Self Preview */}
                        <div className="absolute bottom-5 right-5 w-[160px] overflow-hidden rounded-[22px] border border-white/10 bg-[#22283d] shadow-xl md:w-[190px]">
                          <div className="flex h-[120px] items-center justify-center bg-linear-to-br from-[#30395c] to-[#1f263c] md:h-[140px]">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-2xl font-bold text-white">
                              S
                            </div>
                          </div>

                          <div className="flex items-center justify-between px-3 py-2 text-xs font-semibold text-white/80">
                            <span>You</span>
                            <span>{cameraOn ? 'Camera On' : 'Camera Off'}</span>
                          </div>
                        </div>

                        <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                            {selectedModeLabel}
                          </span>
                          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                            Topic: {selectedLearner.topic}
                          </span>
                        </div>
                      </div>

                      {/* Controls */}
                      <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                        <button
                          onClick={() => setMicOn((prev) => !prev)}
                          className={`flex h-14 w-14 items-center justify-center rounded-full transition ${
                            micOn
                              ? 'bg-white text-[#202c5c] hover:bg-gray-100'
                              : 'bg-red-100 text-red-600 hover:bg-red-200'
                          }`}
                        >
                          {micOn ? (
                            <Mic className="h-5 w-5" />
                          ) : (
                            <MicOff className="h-5 w-5" />
                          )}
                        </button>

                        <button
                          onClick={() => setCameraOn((prev) => !prev)}
                          className={`flex h-14 w-14 items-center justify-center rounded-full transition ${
                            cameraOn
                              ? 'bg-white text-[#202c5c] hover:bg-gray-100'
                              : 'bg-red-100 text-red-600 hover:bg-red-200'
                          }`}
                        >
                          {cameraOn ? (
                            <Camera className="h-5 w-5" />
                          ) : (
                            <VideoOff className="h-5 w-5" />
                          )}
                        </button>

                        <button className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#202c5c] transition hover:bg-gray-100">
                          <Volume2 className="h-5 w-5" />
                        </button>

                        <button className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#202c5c] transition hover:bg-gray-100">
                          <MonitorUp className="h-5 w-5" />
                        </button>

                        <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ff5b5b] text-white transition hover:bg-[#ef4444]">
                          <PhoneOff className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Useful Phrases */}
                  <div className="rounded-[32px] border border-gray-100 bg-white p-5 shadow-sm">
                    <div className="mb-5 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#ff6b2d]">
                          Useful Japanese Phrases
                        </p>
                        <h2 className="mt-2 text-xl font-extrabold text-[#202c5c]">
                          Quick Speaking Support
                        </h2>
                      </div>

                      <button className="rounded-full bg-[#f7f8fc] px-4 py-2 text-sm font-semibold text-[#202c5c] hover:bg-gray-100">
                        View More
                      </button>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                      {usefulPhrases.map((phrase) => (
                        <div
                          key={phrase.jp}
                          className="rounded-[24px] bg-[#f8f9fc] p-4 transition hover:bg-[#f2f4f9]"
                        >
                          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-400">
                            Useful Phrase
                          </p>

                          <p className="mt-4 text-xl font-bold text-[#202c5c]">
                            {phrase.jp}
                          </p>

                          <p className="mt-2 text-sm text-gray-500">
                            {phrase.en}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Clean Right Sidebar */}
                <aside className="h-fit rounded-[32px] bg-white p-5 shadow-sm">
                  <div className="mb-5">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-green-500">
                      Active Practice Lobby
                    </p>
                    <h2 className="mt-2 text-xl font-extrabold text-[#202c5c]">
                      Find a Speaking Partner
                    </h2>
                  </div>

                  <div className="mb-5 flex items-center gap-4 rounded-3xl bg-green-50 p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-green-600">
                      <Users className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="font-extrabold text-[#202c5c]">
                        {learners.length} learners online now
                      </p>
                      <p className="text-sm text-gray-500">
                        Join a room or choose a partner.
                      </p>
                    </div>
                  </div>

                  <div className="mb-4 flex items-center gap-3 rounded-full bg-[#f7f8fc] px-4 py-3">
                    <Search className="h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search learners..."
                      className="w-full bg-transparent text-sm text-[#202c5c] placeholder:text-gray-400 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-4">
                    {learners.map((learner) => {
                      const active = learner.id === selectedLearnerId

                      return (
                        <div
                          key={learner.id}
                          className={`rounded-3xl border p-4 transition ${
                            active
                              ? 'border-[#202c5c] bg-[#f8f9fd]'
                              : 'border-gray-100 bg-white hover:border-gray-200'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className={`flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold ${learner.color}`}
                            >
                              {learner.initial}
                            </div>

                            <div className="flex-1">
                              <div className="flex items-center justify-between gap-2">
                                <h3 className="font-extrabold text-[#202c5c]">
                                  {learner.name}
                                </h3>

                                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-600">
                                  Online
                                </span>
                              </div>

                              <p className="mt-1 text-sm font-medium text-gray-400">
                                Level {learner.level} • {learner.mode}
                              </p>
                            </div>
                          </div>

                          <div className="mt-4 rounded-2xl bg-[#f7f8fb] p-3">
                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
                              Wants to practice
                            </p>
                            <p className="mt-2 font-bold text-[#202c5c]">
                              {learner.topic}
                            </p>
                          </div>

                          <div className="mt-4 grid grid-cols-2 gap-3">
                            <button
                              onClick={() => {
                                setSelectedLearnerId(learner.id)
                                setSelectedMode('voice')
                                setActiveSideItem('live')
                              }}
                              className="flex items-center justify-center gap-2 rounded-full bg-[#ff5a2f] py-3 text-sm font-bold text-white transition hover:bg-[#f25c1c]"
                            >
                              <Mic className="h-4 w-4" />
                              Voice
                            </button>

                            <button
                              onClick={() => {
                                setSelectedLearnerId(learner.id)
                                setSelectedMode('video')
                                setActiveSideItem('live')
                              }}
                              className="flex items-center justify-center gap-2 rounded-full bg-[#202c5c] py-3 text-sm font-bold text-white transition hover:bg-[#2c3a78]"
                            >
                              <Video className="h-4 w-4" />
                              Video
                            </button>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </aside>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  )
}