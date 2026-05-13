'use client'

import { use, useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  CheckCircle2,
  RotateCcw,
  Trophy,
  XCircle,
  Sparkles,
} from 'lucide-react'

const quizData = {
  'hiragana-practice': {
    title: 'Hiragana Practice',
    subtitle: 'ひらがな',
    description: 'Practice Kana → Romaji and Romaji → Kana questions.',
    questions: [
      {
        question: 'What is the romaji for あ?',
        display: 'あ',
        options: ['a', 'i', 'u', 'e'],
        answer: 'a',
        hint: 'あ is the first Hiragana vowel sound.',
      },
      {
        question: 'Choose the Hiragana for “ka”.',
        display: 'ka',
        options: ['さ', 'か', 'た', 'な'],
        answer: 'か',
        hint: 'か sounds like “ka”.',
      },
      {
        question: 'What is the romaji for み?',
        display: 'み',
        options: ['ma', 'mi', 'mu', 'me'],
        answer: 'mi',
        hint: 'み belongs to the M-row.',
      },
      {
        question: 'Choose the Hiragana for “su”.',
        display: 'su',
        options: ['す', 'せ', 'そ', 'し'],
        answer: 'す',
        hint: 'す is pronounced “su”.',
      },
      {
        question: 'What is the romaji for ね?',
        display: 'ね',
        options: ['na', 'ni', 'nu', 'ne'],
        answer: 'ne',
        hint: 'ね sounds like “ne”.',
      },
      {
        question: 'Choose the Hiragana for “mo”.',
        display: 'mo',
        options: ['ま', 'み', 'む', 'も'],
        answer: 'も',
        hint: 'も is in the M-row.',
      },
      {
        question: 'What is the romaji for り?',
        display: 'り',
        options: ['ra', 'ri', 'ru', 're'],
        answer: 'ri',
        hint: 'り sounds like “ri”.',
      },
      {
        question: 'Choose the Hiragana for “yo”.',
        display: 'yo',
        options: ['や', 'ゆ', 'よ', 'わ'],
        answer: 'よ',
        hint: 'よ is one of ya-yu-yo sounds.',
      },
      {
        question: 'What is the romaji for ふ?',
        display: 'ふ',
        options: ['ha', 'hi', 'fu', 'he'],
        answer: 'fu',
        hint: 'ふ is commonly written as “fu”.',
      },
      {
        question: 'Choose the Hiragana for “wa”.',
        display: 'wa',
        options: ['ら', 'わ', 'を', 'ん'],
        answer: 'わ',
        hint: 'わ is pronounced “wa”.',
      },
    ],
  },

  'katakana-practice': {
    title: 'Katakana Practice',
    subtitle: 'カタカナ',
    description: 'Practice Katakana → Romaji and Romaji → Katakana questions.',
    questions: [
      {
        question: 'What is the romaji for ア?',
        display: 'ア',
        options: ['a', 'i', 'u', 'e'],
        answer: 'a',
        hint: 'ア is the Katakana version of あ.',
      },
      {
        question: 'Choose the Katakana for “ka”.',
        display: 'ka',
        options: ['サ', 'カ', 'タ', 'ナ'],
        answer: 'カ',
        hint: 'カ sounds like “ka”.',
      },
      {
        question: 'What is the romaji for ミ?',
        display: 'ミ',
        options: ['ma', 'mi', 'mu', 'me'],
        answer: 'mi',
        hint: 'ミ belongs to the M-row.',
      },
      {
        question: 'Choose the Katakana for “su”.',
        display: 'su',
        options: ['ス', 'セ', 'ソ', 'シ'],
        answer: 'ス',
        hint: 'ス sounds like “su”.',
      },
      {
        question: 'What is the romaji for ネ?',
        display: 'ネ',
        options: ['na', 'ni', 'nu', 'ne'],
        answer: 'ne',
        hint: 'ネ is pronounced “ne”.',
      },
      {
        question: 'Choose the Katakana for “mo”.',
        display: 'mo',
        options: ['マ', 'ミ', 'ム', 'モ'],
        answer: 'モ',
        hint: 'モ belongs to the M-row.',
      },
      {
        question: 'What is the romaji for リ?',
        display: 'リ',
        options: ['ra', 'ri', 'ru', 're'],
        answer: 'ri',
        hint: 'リ sounds like “ri”.',
      },
      {
        question: 'Choose the Katakana for “yo”.',
        display: 'yo',
        options: ['ヤ', 'ユ', 'ヨ', 'ワ'],
        answer: 'ヨ',
        hint: 'ヨ is one of ya-yu-yo sounds.',
      },
      {
        question: 'What is the romaji for フ?',
        display: 'フ',
        options: ['ha', 'hi', 'fu', 'he'],
        answer: 'fu',
        hint: 'フ is commonly written as “fu”.',
      },
      {
        question: 'Choose the Katakana for “wa”.',
        display: 'wa',
        options: ['ラ', 'ワ', 'ヲ', 'ン'],
        answer: 'ワ',
        hint: 'ワ is pronounced “wa”.',
      },
    ],
  },

  'match-kana': {
    title: 'Match Kana',
    subtitle: 'かな マッチ',
    description: 'Match Hiragana characters with their Katakana versions.',
    questions: [
      {
        question: 'Match Hiragana か with the correct Katakana.',
        display: 'か',
        options: ['カ', 'サ', 'タ', 'ナ'],
        answer: 'カ',
        hint: 'か and カ both sound like “ka”.',
      },
      {
        question: 'Match Hiragana み with the correct Katakana.',
        display: 'み',
        options: ['マ', 'ミ', 'ム', 'メ'],
        answer: 'ミ',
        hint: 'み and ミ both sound like “mi”.',
      },
      {
        question: 'Match Hiragana す with the correct Katakana.',
        display: 'す',
        options: ['ス', 'セ', 'ソ', 'シ'],
        answer: 'ス',
        hint: 'す and ス both sound like “su”.',
      },
      {
        question: 'Match Hiragana ね with the correct Katakana.',
        display: 'ね',
        options: ['ノ', 'ヌ', 'ネ', 'ナ'],
        answer: 'ネ',
        hint: 'ね and ネ both sound like “ne”.',
      },
      {
        question: 'Match Hiragana も with the correct Katakana.',
        display: 'も',
        options: ['マ', 'ミ', 'ム', 'モ'],
        answer: 'モ',
        hint: 'も and モ both sound like “mo”.',
      },
      {
        question: 'Match Hiragana り with the correct Katakana.',
        display: 'り',
        options: ['ラ', 'リ', 'ル', 'レ'],
        answer: 'リ',
        hint: 'り and リ both sound like “ri”.',
      },
      {
        question: 'Match Hiragana よ with the correct Katakana.',
        display: 'よ',
        options: ['ヤ', 'ユ', 'ヨ', 'ワ'],
        answer: 'ヨ',
        hint: 'よ and ヨ both sound like “yo”.',
      },
      {
        question: 'Match Hiragana ふ with the correct Katakana.',
        display: 'ふ',
        options: ['ハ', 'ヒ', 'フ', 'ヘ'],
        answer: 'フ',
        hint: 'ふ and フ both sound like “fu”.',
      },
    ],
  },

  'word-challenge': {
    title: 'Word Challenge',
    subtitle: 'ことば',
    description: 'Practice simple Japanese beginner words.',
    questions: [
      {
        question: 'What does ねこ mean?',
        display: 'ねこ',
        options: ['Dog', 'Cat', 'Bird', 'Fish'],
        answer: 'Cat',
        hint: 'ねこ is a common animal word.',
      },
      {
        question: 'What does いぬ mean?',
        display: 'いぬ',
        options: ['Cat', 'Dog', 'Rice', 'Water'],
        answer: 'Dog',
        hint: 'いぬ means dog.',
      },
      {
        question: 'What does すし mean?',
        display: 'すし',
        options: ['Sushi', 'Tea', 'Coffee', 'Milk'],
        answer: 'Sushi',
        hint: 'This one is famous worldwide.',
      },
      {
        question: 'What does コーヒー mean?',
        display: 'コーヒー',
        options: ['Tea', 'Coffee', 'Juice', 'Water'],
        answer: 'Coffee',
        hint: 'Katakana is often used for foreign words.',
      },
      {
        question: 'What does テレビ mean?',
        display: 'テレビ',
        options: ['Phone', 'TV', 'Radio', 'Computer'],
        answer: 'TV',
        hint: 'テレビ comes from “television”.',
      },
      {
        question: 'What does みず mean?',
        display: 'みず',
        options: ['Water', 'Fire', 'Rice', 'Book'],
        answer: 'Water',
        hint: 'みず is very useful in daily life.',
      },
      {
        question: 'What does せんせい mean?',
        display: 'せんせい',
        options: ['Student', 'Teacher', 'Friend', 'Doctor'],
        answer: 'Teacher',
        hint: 'You call your teacher せんせい.',
      },
      {
        question: 'What does がっこう mean?',
        display: 'がっこう',
        options: ['Home', 'School', 'Shop', 'Station'],
        answer: 'School',
        hint: 'がっこう means school.',
      },
      {
        question: 'What does ともだち mean?',
        display: 'ともだち',
        options: ['Family', 'Teacher', 'Friend', 'Student'],
        answer: 'Friend',
        hint: 'ともだち is someone close to you.',
      },
      {
        question: 'What does ありがとう mean?',
        display: 'ありがとう',
        options: ['Sorry', 'Thank you', 'Goodbye', 'Good night'],
        answer: 'Thank you',
        hint: 'A very important polite word.',
      },
    ],
  },
}

type QuizId = keyof typeof quizData

export default function QuizPlayPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const quiz = quizData[id as QuizId]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [answered, setAnswered] = useState(false)

  if (!quiz) {
    return (
      <div className="min-h-screen bg-[#fafafc] px-6 py-10 md:px-10">
        <div className="mx-auto max-w-2xl rounded-4xl bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-bold text-[#202c5c]">
            Quiz not found
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            The quiz you are looking for does not exist.
          </p>

          <Link
            href="/dashboard/quizzes"
            className="mt-6 inline-block rounded-full bg-[#202c5c] px-6 py-3 text-sm font-semibold text-white hover:bg-[#c77d9b]"
          >
            Back to Quizzes
          </Link>
        </div>
      </div>
    )
  }

  const question = quiz.questions[currentQuestion]
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100
  const percentage = Math.round((score / quiz.questions.length) * 100)

  function handleAnswer(option: string) {
    if (answered) return

    setSelectedAnswer(option)
    setAnswered(true)

    if (option === question.answer) {
      setScore((prev) => prev + 1)
    }
  }

  function handleNext() {
    if (!answered) return

    if (currentQuestion + 1 < quiz.questions.length) {
      setCurrentQuestion((prev) => prev + 1)
      setSelectedAnswer('')
      setAnswered(false)
    } else {
      setShowResult(true)
    }
  }

  function restartQuiz() {
    setCurrentQuestion(0)
    setSelectedAnswer('')
    setScore(0)
    setShowResult(false)
    setAnswered(false)
  }

  if (showResult) {
    const finalPercentage = Math.round((score / quiz.questions.length) * 100)

    return (
      <div className="min-h-screen bg-[#fafafc] px-6 py-10 md:px-10">
        <div className="mx-auto max-w-3xl rounded-4xl border border-pink-100 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#f8e9ed] text-[#c77d9b]">
            <Trophy className="h-10 w-10" />
          </div>

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c77d9b]">
            Quiz Completed
          </p>

          <h1 className="mt-3 text-3xl font-extrabold text-[#202c5c]">
            {quiz.title}
          </h1>

          <div className="mx-auto mt-8 grid max-w-xl gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-[#fafafc] p-5">
              <p className="text-xs font-semibold text-gray-400">Score</p>
              <h2 className="mt-2 text-3xl font-extrabold text-[#202c5c]">
                {score}/{quiz.questions.length}
              </h2>
            </div>

            <div className="rounded-3xl bg-[#fafafc] p-5">
              <p className="text-xs font-semibold text-gray-400">Accuracy</p>
              <h2 className="mt-2 text-3xl font-extrabold text-[#202c5c]">
                {finalPercentage}%
              </h2>
            </div>

            <div className="rounded-3xl bg-[#fafafc] p-5">
              <p className="text-xs font-semibold text-gray-400">Mode</p>
              <h2 className="mt-2 text-xl font-extrabold text-[#202c5c]">
                Practice
              </h2>
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-gray-500">
            {finalPercentage >= 80
              ? 'Excellent work! Your Japanese practice is getting stronger.'
              : finalPercentage >= 50
                ? 'Good effort! Review the difficult questions and try again.'
                : 'Keep practicing! Kana and vocabulary become easier with repetition.'}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={restartQuiz}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#202c5c] px-6 py-3 text-sm font-bold text-white hover:bg-[#c77d9b]"
            >
              <RotateCcw className="h-4 w-4" />
              Try Again
            </button>

            <Link
              href="/dashboard/quizzes"
              className="rounded-full border border-gray-200 px-6 py-3 text-sm font-bold text-[#202c5c] hover:bg-gray-50"
            >
              Back to Quizzes
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#fafafc] px-6 py-8 md:px-10">
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <Link
          href="/dashboard/quizzes"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#a1626f] hover:text-[#202c5c]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Quizzes
        </Link>

        <div className="flex gap-3">
          <div className="rounded-2xl border border-pink-100 bg-white px-5 py-3 shadow-sm">
            <p className="text-xs text-gray-400">Score</p>
            <p className="font-extrabold text-[#202c5c]">
              {score}/{quiz.questions.length}
            </p>
          </div>

          <div className="rounded-2xl border border-pink-100 bg-white px-5 py-3 shadow-sm">
            <p className="text-xs text-gray-400">Accuracy</p>
            <p className="font-extrabold text-[#202c5c]">{percentage}%</p>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_320px]">
        <div className="rounded-4xl border border-pink-100 bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6">
            <div className="mb-3 flex items-center justify-between text-sm font-bold text-gray-500">
              <span>
                Question {currentQuestion + 1} of {quiz.questions.length}
              </span>
              <span>{Math.round(progress)}% Complete</span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full rounded-full bg-[#c77d9b] transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-gray-100 bg-[#fffefe] p-6 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c77d9b]">
              {quiz.subtitle}
            </p>

            <h1 className="mx-auto mt-4 max-w-2xl text-2xl font-extrabold leading-snug text-[#202c5c] md:text-3xl">
              {question.question}
            </h1>

            <div className="mx-auto mt-7 flex h-40 w-40 items-center justify-center rounded-4xl border-2 border-[#c77d9b] bg-white text-6xl font-bold text-[#111827] shadow-sm md:h-48 md:w-48 md:text-7xl">
              {question.display}
            </div>

            <p className="mt-5 text-sm text-gray-500">
              Choose the correct option below.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === option
              const isCorrect = question.answer === option
              const showCorrect = answered && isCorrect
              const showWrong = answered && isSelected && !isCorrect
              const optionLabel = ['A', 'B', 'C', 'D'][index]

              return (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  disabled={answered}
                  className={`flex min-h-[92px] items-center justify-between rounded-2xl border px-5 py-4 text-left transition ${
                    showCorrect
                      ? 'border-green-400 bg-green-50 text-green-700'
                      : showWrong
                        ? 'border-red-400 bg-red-50 text-red-700'
                        : isSelected
                          ? 'border-[#c77d9b] bg-[#f8e9ed] text-[#202c5c]'
                          : 'border-gray-100 bg-white text-gray-600 hover:border-[#c77d9b]/50 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm font-bold ${
                        showCorrect
                          ? 'border-green-400 bg-green-500 text-white'
                          : showWrong
                            ? 'border-red-400 bg-red-500 text-white'
                            : 'border-gray-200 bg-white text-[#202c5c]'
                      }`}
                    >
                      {optionLabel}
                    </span>

                    <span className="text-2xl font-extrabold">{option}</span>
                  </div>

                  {showCorrect && <CheckCircle2 className="h-6 w-6" />}
                  {showWrong && <XCircle className="h-6 w-6" />}
                </button>
              )
            })}
          </div>

          {answered && (
            <div
              className={`mt-6 rounded-2xl p-4 text-sm font-semibold ${
                selectedAnswer === question.answer
                  ? 'bg-green-50 text-green-700'
                  : 'bg-red-50 text-red-700'
              }`}
            >
              {selectedAnswer === question.answer
                ? 'Correct! Nice work.'
                : `Wrong answer. Correct answer is ${question.answer}.`}
            </div>
          )}

          <button
            onClick={handleNext}
            disabled={!answered}
            className="mt-8 w-full rounded-full bg-[#202c5c] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#c77d9b] disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            {currentQuestion + 1 === quiz.questions.length
              ? 'Finish Quiz'
              : 'Next Question'}
          </button>
        </div>

        <aside className="space-y-5">
          <div className="rounded-4xl border border-pink-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-extrabold text-[#202c5c]">
              Quiz Progress
            </h2>

            <div className="mt-5 flex flex-wrap gap-3">
              {quiz.questions.map((_, index) => {
                const isCurrent = index === currentQuestion
                const isDone = index < currentQuestion

                return (
                  <div
                    key={index}
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                      isDone
                        ? 'bg-green-500 text-white'
                        : isCurrent
                          ? 'bg-[#c77d9b] text-white'
                          : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    {index + 1}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="rounded-4xl border border-pink-100 bg-white p-6 shadow-sm">
            <div className="mb-3 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-[#c77d9b]" />
              <h2 className="text-lg font-extrabold text-[#202c5c]">
                Quick Tip
              </h2>
            </div>

            <p className="text-sm leading-6 text-gray-500">
              {question.hint}
            </p>
          </div>

          <div className="rounded-4xl bg-[#202c5c] p-6 text-white shadow-sm">
            <h2 className="text-lg font-extrabold">Practice Advice</h2>
            <p className="mt-3 text-sm leading-6 text-white/75">
              Repeat the same quiz until you score above 80%. Short daily practice helps you remember kana faster.
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}