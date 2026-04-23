'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, XCircle, FileText, RotateCcw } from 'lucide-react'

const dummyQuestions = [
  {
    id: 1,
    character: "車",
    correctAnswer: "kuruma",
    hints: ["Means 'car' or 'vehicle'", "Has 7 strokes"]
  },
  {
    id: 2,
    character: "猫",
    correctAnswer: "neko",
    hints: ["Means 'cat'", "Meow!"]
  },
  {
    id: 3,
    character: "食べる",
    correctAnswer: "taberu",
    hints: ["Means 'to eat'", "Verb"]
  },
  {
    id: 4,
    character: "大きい",
    correctAnswer: "ookii",
    hints: ["Means 'big' or 'large'", "Adjective"]
  }
];

export default function CharacterRecognitionQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userInput, setUserInput] = useState('')
  const [isAnswered, setIsAnswered] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [score, setScore] = useState(0)
  const [quizComplete, setQuizComplete] = useState(false)
  const [showHint, setShowHint] = useState(false)

  const currentQuestion = dummyQuestions[currentQuestionIndex]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isAnswered || !userInput.trim()) return;

    setIsAnswered(true);
    
    // Simple case-insensitive match for demo
    const correct = userInput.toLowerCase().trim() === currentQuestion.correctAnswer.toLowerCase();
    setIsCorrect(correct);

    if (correct) {
      setScore(prev => prev + 1);
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < dummyQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
      setUserInput('')
      setIsAnswered(false)
      setIsCorrect(false)
      setShowHint(false)
    } else {
      setQuizComplete(true)
    }
  }

  const restartQuiz = () => {
    setCurrentQuestionIndex(0)
    setUserInput('')
    setIsAnswered(false)
    setIsCorrect(false)
    setScore(0)
    setQuizComplete(false)
    setShowHint(false)
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
            <FileText className="w-6 h-6 text-green-500" />
            Character Recognition
          </h1>
          <p className="text-sm font-medium text-gray-500">Type the correct romaji or translation</p>
        </div>
      </div>

      {!quizComplete ? (
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100">
          {/* Progress Bar */}
          <div className="mb-10">
            <div className="flex justify-between text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
              <span>Character {currentQuestionIndex + 1} of {dummyQuestions.length}</span>
              <span>Score: {score}</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2.5">
              <div 
                className="bg-green-500 h-2.5 rounded-full transition-all duration-500" 
                style={{ width: `${((currentQuestionIndex + 1) / dummyQuestions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Character Display */}
          <div className="mb-12 flex flex-col items-center justify-center">
            <div className="w-48 h-48 bg-gray-50 rounded-3xl flex items-center justify-center border-2 border-gray-100 mb-6 shadow-inner">
              <span className="text-7xl font-black text-hanashi-dark">{currentQuestion.character}</span>
            </div>
            
            {showHint ? (
              <div className="bg-yellow-50 text-yellow-800 px-6 py-4 rounded-xl border border-yellow-200 text-sm font-medium w-full max-w-md text-center animate-in fade-in slide-in-from-top-2">
                <p className="font-bold mb-1">💡 Hints:</p>
                <ul className="list-disc list-inside">
                  {currentQuestion.hints.map((hint, i) => (
                    <li key={i}>{hint}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <button 
                onClick={() => setShowHint(true)}
                className="text-sm font-bold text-gray-400 hover:text-yellow-600 transition-colors bg-gray-50 hover:bg-yellow-50 px-4 py-2 rounded-full"
              >
                Need a hint?
              </button>
            )}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                disabled={isAnswered}
                placeholder="Type the reading (romaji)..."
                className={`w-full px-6 py-4 rounded-2xl border-2 font-bold text-lg outline-none transition-all ${
                  !isAnswered 
                    ? 'border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/10' 
                    : isCorrect 
                      ? 'border-green-500 bg-green-50 text-green-700' 
                      : 'border-red-500 bg-red-50 text-red-700'
                }`}
                autoFocus
              />
              {isAnswered && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  {isCorrect ? (
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-500" />
                  )}
                </div>
              )}
            </div>
            
            {!isAnswered ? (
              <button
                type="submit"
                disabled={!userInput.trim()}
                className="w-full mt-4 px-8 py-4 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 transition-all shadow-md shadow-green-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Check Answer
              </button>
            ) : (
              <div className="mt-4 text-center">
                {!isCorrect && (
                  <p className="text-red-500 font-bold mb-4">
                    Correct answer: <span className="text-hanashi-dark">{currentQuestion.correctAnswer}</span>
                  </p>
                )}
                <button
                  type="button"
                  onClick={handleNextQuestion}
                  className="w-full px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-all shadow-md"
                >
                  {currentQuestionIndex === dummyQuestions.length - 1 ? 'Finish Quiz' : 'Continue'}
                </button>
              </div>
            )}
          </form>
        </div>
      ) : (
        /* Results Screen */
        <div className="bg-white rounded-3xl p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 text-center max-w-2xl mx-auto animate-in zoom-in duration-500">
          <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-green-500" />
          </div>
          <h2 className="text-3xl font-black text-hanashi-dark mb-2">Quiz Complete!</h2>
          <p className="text-gray-500 font-medium mb-8">You have successfully finished the Character Recognition Quiz.</p>
          
          <div className="bg-gray-50 rounded-2xl p-6 mb-8 inline-block min-w-[200px]">
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
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white bg-green-500 hover:bg-green-600 transition-colors shadow-md shadow-green-500/20 flex items-center justify-center gap-2"
            >
              Return to Quizzes
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
