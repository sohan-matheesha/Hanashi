'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, LayoutGrid, RotateCcw } from 'lucide-react'

// Dummy Data for the quiz
const dummyQuestions = [
  {
    id: 1,
    question: "What is the meaning of '水' (Mizu)?",
    options: ["Fire", "Water", "Tree", "Gold"],
    correctAnswer: "Water"
  },
  {
    id: 2,
    question: "How do you read '木曜日'?",
    options: ["Nichiyoubi", "Kayoubi", "Mokuyoubi", "Doyoubi"],
    correctAnswer: "Mokuyoubi"
  },
  {
    id: 3,
    question: "Which of the following means 'To eat'?",
    options: ["飲む (nomu)", "見る (miru)", "食べる (taberu)", "行く (iku)"],
    correctAnswer: "食べる (taberu)"
  },
  {
    id: 4,
    question: "Select the correct translation for 'Today':",
    options: ["明日 (ashita)", "今日 (kyou)", "昨日 (kinou)", "今週 (konshuu)"],
    correctAnswer: "今日 (kyou)"
  }
];

export default function MultipleChoiceQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [quizComplete, setQuizComplete] = useState(false)

  const currentQuestion = dummyQuestions[currentQuestionIndex]

  const handleOptionSelect = (option: string) => {
    if (isAnswered) return;
    
    setSelectedAnswer(option);
    setIsAnswered(true);

    if (option === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < dummyQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
      setSelectedAnswer(null)
      setIsAnswered(false)
    } else {
      setQuizComplete(true)
    }
  }

  const restartQuiz = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setIsAnswered(false)
    setScore(0)
    setQuizComplete(false)
  }

  return (
    <div className="max-w-4xl mx-auto font-sans pb-20">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/dashboard/quiz" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-500 hover:text-hanashi-primary transition-colors shadow-sm">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-black text-hanashi-dark flex items-center gap-2">
            <LayoutGrid className="w-6 h-6 text-blue-500" />
            Multiple Choice Quiz
          </h1>
          <p className="text-sm font-medium text-gray-500">Test your vocabulary and grammar comprehension</p>
        </div>
      </div>

      {!quizComplete ? (
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100">
          {/* Progress Bar */}
          <div className="mb-10">
            <div className="flex justify-between text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
              <span>Question {currentQuestionIndex + 1} of {dummyQuestions.length}</span>
              <span>Score: {score}</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2.5">
              <div 
                className="bg-blue-500 h-2.5 rounded-full transition-all duration-500" 
                style={{ width: `${((currentQuestionIndex + 1) / dummyQuestions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-hanashi-dark text-center leading-normal">
              {currentQuestion.question}
            </h2>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {currentQuestion.options.map((option, index) => {
              const isCorrect = option === currentQuestion.correctAnswer;
              const isSelected = option === selectedAnswer;
              
              let optionClasses = "p-5 rounded-2xl border-2 font-bold text-lg transition-all flex items-center justify-between ";
              
              if (!isAnswered) {
                optionClasses += "border-gray-200 text-gray-700 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 cursor-pointer";
              } else {
                if (isCorrect) {
                  optionClasses += "border-green-500 bg-green-50 text-green-700";
                } else if (isSelected) {
                  optionClasses += "border-red-500 bg-red-50 text-red-700";
                } else {
                  optionClasses += "border-gray-100 bg-gray-50 text-gray-400 opacity-50";
                }
              }

              return (
                <button
                  key={index}
                  disabled={isAnswered}
                  onClick={() => handleOptionSelect(option)}
                  className={optionClasses}
                >
                  <span>{option}</span>
                  {isAnswered && isCorrect && <CheckCircle2 className="w-6 h-6 text-green-500" />}
                  {isAnswered && isSelected && !isCorrect && <XCircle className="w-6 h-6 text-red-500" />}
                </button>
              )
            })}
          </div>

          {/* Next Button */}
          <div className="flex justify-end border-t border-gray-100 pt-6">
            <button
              disabled={!isAnswered}
              onClick={handleNextQuestion}
              className={`px-8 py-3.5 rounded-xl font-bold flex items-center gap-2 transition-all ${
                isAnswered 
                ? 'bg-blue-500 text-white hover:bg-blue-600 shadow-md shadow-blue-500/20 hover:-translate-y-0.5' 
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              {currentQuestionIndex === dummyQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'} 
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* Results Screen */
        <div className="bg-white rounded-3xl p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 text-center max-w-2xl mx-auto animate-in zoom-in duration-500">
          <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-blue-500" />
          </div>
          <h2 className="text-3xl font-black text-hanashi-dark mb-2">Quiz Complete!</h2>
          <p className="text-gray-500 font-medium mb-8">You have successfully finished the Multiple Choice Quiz.</p>
          
          <div className="bg-gray-50 rounded-2xl p-6 mb-8 inline-block min-w-50">
            <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Your Score</p>
            <p className="text-5xl font-black text-hanashi-primary">{score} <span className="text-xl text-gray-400">/ {dummyQuestions.length}</span></p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={restartQuiz}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-4 h-4" /> Try Again
            </button>
            <Link 
              href="/dashboard/quiz"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white bg-blue-500 hover:bg-blue-600 transition-colors shadow-md shadow-blue-500/20 flex items-center justify-center gap-2"
            >
              Return to Quizzes
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
