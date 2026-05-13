"use client";

import { use, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  RotateCcw,
  Trophy,
  XCircle,
  Sparkles,
} from "lucide-react";

type Question = {
  question: string;
  display: string;
  options: string[];
  answer: string;
  hint: string;
};

type Quiz = {
  title: string;
  subtitle: string;
  description: string;
  questions: Question[];
};

const quizData: Record<string, Quiz> = {
  "hiragana-practice": {
    title: "Hiragana Practice",
    subtitle: "ひらがな",
    description: "Practice Kana to Romaji and Romaji to Kana questions.",
    questions: [
      {
        question: "What is the romaji for あ?",
        display: "あ",
        options: ["a", "i", "u", "e"],
        answer: "a",
        hint: "あ is the first Hiragana vowel sound.",
      },
      {
        question: "Choose the Hiragana for ka.",
        display: "ka",
        options: ["さ", "か", "た", "な"],
        answer: "か",
        hint: "か sounds like ka.",
      },
      {
        question: "What is the romaji for み?",
        display: "み",
        options: ["ma", "mi", "mu", "me"],
        answer: "mi",
        hint: "み belongs to the M-row.",
      },
      {
        question: "Choose the Hiragana for su.",
        display: "su",
        options: ["す", "せ", "そ", "し"],
        answer: "す",
        hint: "す is pronounced su.",
      },
      {
        question: "What is the romaji for ね?",
        display: "ね",
        options: ["na", "ni", "nu", "ne"],
        answer: "ne",
        hint: "ね sounds like ne.",
      },
    ],
  },

  "katakana-practice": {
    title: "Katakana Practice",
    subtitle: "カタカナ",
    description: "Practice Katakana to Romaji and Romaji to Katakana questions.",
    questions: [
      {
        question: "What is the romaji for ア?",
        display: "ア",
        options: ["a", "i", "u", "e"],
        answer: "a",
        hint: "ア is the Katakana version of あ.",
      },
      {
        question: "Choose the Katakana for ka.",
        display: "ka",
        options: ["サ", "カ", "タ", "ナ"],
        answer: "カ",
        hint: "カ sounds like ka.",
      },
      {
        question: "What is the romaji for ミ?",
        display: "ミ",
        options: ["ma", "mi", "mu", "me"],
        answer: "mi",
        hint: "ミ belongs to the M-row.",
      },
      {
        question: "Choose the Katakana for su.",
        display: "su",
        options: ["ス", "セ", "ソ", "シ"],
        answer: "ス",
        hint: "ス sounds like su.",
      },
      {
        question: "What is the romaji for ネ?",
        display: "ネ",
        options: ["na", "ni", "nu", "ne"],
        answer: "ne",
        hint: "ネ is pronounced ne.",
      },
    ],
  },

  "match-kana": {
    title: "Match Kana",
    subtitle: "かな マッチ",
    description: "Match Hiragana characters with their Katakana versions.",
    questions: [
      {
        question: "Match Hiragana か with the correct Katakana.",
        display: "か",
        options: ["カ", "サ", "タ", "ナ"],
        answer: "カ",
        hint: "か and カ both sound like ka.",
      },
      {
        question: "Match Hiragana み with the correct Katakana.",
        display: "み",
        options: ["マ", "ミ", "ム", "メ"],
        answer: "ミ",
        hint: "み and ミ both sound like mi.",
      },
      {
        question: "Match Hiragana す with the correct Katakana.",
        display: "す",
        options: ["ス", "セ", "ソ", "シ"],
        answer: "ス",
        hint: "す and ス both sound like su.",
      },
      {
        question: "Match Hiragana ね with the correct Katakana.",
        display: "ね",
        options: ["ノ", "ヌ", "ネ", "ナ"],
        answer: "ネ",
        hint: "ね and ネ both sound like ne.",
      },
      {
        question: "Match Hiragana も with the correct Katakana.",
        display: "も",
        options: ["マ", "ミ", "ム", "モ"],
        answer: "モ",
        hint: "も and モ both sound like mo.",
      },
    ],
  },

  "word-challenge": {
    title: "Word Challenge",
    subtitle: "ことば",
    description: "Practice simple beginner Japanese words.",
    questions: [
      {
        question: "What does ねこ mean?",
        display: "ねこ",
        options: ["Dog", "Cat", "Bird", "Fish"],
        answer: "Cat",
        hint: "ねこ is a common animal word.",
      },
      {
        question: "What does いぬ mean?",
        display: "いぬ",
        options: ["Cat", "Dog", "Rice", "Water"],
        answer: "Dog",
        hint: "いぬ means dog.",
      },
      {
        question: "What does すし mean?",
        display: "すし",
        options: ["Sushi", "Tea", "Coffee", "Milk"],
        answer: "Sushi",
        hint: "すし means sushi.",
      },
      {
        question: "What does みず mean?",
        display: "みず",
        options: ["Water", "Book", "School", "Car"],
        answer: "Water",
        hint: "みず means water.",
      },
      {
        question: "What does テレビ mean?",
        display: "テレビ",
        options: ["Radio", "Phone", "Television", "Camera"],
        answer: "Television",
        hint: "テレビ is a Katakana loanword.",
      },
    ],
  },
};

export default function QuizPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const quiz = quizData[id];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  if (!quiz) {
    return (
      <div className="min-h-screen bg-[#fafafc] px-6 py-10">
        <Link
          href="/dashboard/quizzes"
          className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-[#a54a5c]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Quizzes
        </Link>

        <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
          <XCircle className="mx-auto mb-4 h-14 w-14 text-red-400" />
          <h1 className="text-3xl font-extrabold text-[#202c5c]">
            Quiz Not Found
          </h1>
          <p className="mt-3 text-sm text-gray-500">
            The selected quiz is not available.
          </p>
        </div>
      </div>
    );
  }

  const currentQuestion = quiz.questions[currentIndex];
  const progress = ((currentIndex + 1) / quiz.questions.length) * 100;

  const handleAnswer = (option: string) => {
    if (showFeedback) return;

    setSelectedAnswer(option);
    setShowFeedback(true);

    if (option === currentQuestion.answer) {
      setScore((previousScore) => previousScore + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex === quiz.questions.length - 1) {
      setIsFinished(true);
      return;
    }

    setCurrentIndex((previousIndex) => previousIndex + 1);
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsFinished(false);
    setShowFeedback(false);
  };

  if (isFinished) {
    const percentage = Math.round((score / quiz.questions.length) * 100);

    return (
      <div className="min-h-screen bg-[#fafafc] px-6 py-10">
        <Link
          href="/dashboard/quizzes"
          className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-[#a54a5c]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Quizzes
        </Link>

        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 text-center shadow-sm">
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100 text-yellow-700">
            <Trophy className="h-10 w-10" />
          </div>

          <h1 className="text-4xl font-extrabold text-[#202c5c]">
            Quiz Completed
          </h1>

          <p className="mt-3 text-gray-500">
            You completed {quiz.title}. Review your score and try again to
            improve.
          </p>

          <div className="my-8 rounded-3xl bg-[#fafafc] p-6">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-gray-400">
              Your Score
            </p>
            <h2 className="mt-3 text-5xl font-extrabold text-[#a54a5c]">
              {score}/{quiz.questions.length}
            </h2>
            <p className="mt-2 text-sm font-semibold text-gray-500">
              {percentage}% Correct
            </p>
          </div>

          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <button
              onClick={restartQuiz}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#202c5c] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#151d3d]"
              type="button"
            >
              <RotateCcw className="h-4 w-4" />
              Try Again
            </button>

            <Link
              href="/dashboard/quizzes"
              className="inline-flex items-center justify-center rounded-2xl border border-gray-200 px-6 py-3 text-sm font-bold text-[#202c5c] transition hover:bg-gray-50"
            >
              Choose Another Quiz
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafc] px-6 py-10">
      <Link
        href="/dashboard/quizzes"
        className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-[#a54a5c]"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Quizzes
      </Link>

      <div className="mx-auto max-w-4xl">
        <div className="mb-8 rounded-3xl bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c77d9b]">
                {quiz.subtitle}
              </p>
              <h1 className="mt-2 text-3xl font-extrabold text-[#202c5c]">
                {quiz.title}
              </h1>
              <p className="mt-2 text-sm text-gray-500">{quiz.description}</p>
            </div>

            <div className="rounded-2xl bg-[#fafafc] px-5 py-4 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                Score
              </p>
              <p className="mt-1 text-2xl font-extrabold text-[#a54a5c]">
                {score}
              </p>
            </div>
          </div>

          <div className="mt-6 h-3 overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-[#a54a5c] transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="mt-3 text-xs font-semibold text-gray-400">
            Question {currentIndex + 1} of {quiz.questions.length}
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6 flex min-h-36 items-center justify-center rounded-3xl bg-linear-to-br from-[#202c5c] to-[#a54a5c] p-8 text-white">
            <div className="text-center">
              <Sparkles className="mx-auto mb-3 h-8 w-8" />
              <p className="text-6xl font-extrabold">
                {currentQuestion.display}
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-extrabold text-[#202c5c]">
            {currentQuestion.question}
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {currentQuestion.options.map((option) => {
              const isCorrect = option === currentQuestion.answer;
              const isSelected = selectedAnswer === option;

              let optionClass =
                "border-gray-200 bg-white text-[#202c5c] hover:border-[#a54a5c] hover:bg-pink-50";

              if (showFeedback && isCorrect) {
                optionClass = "border-green-200 bg-green-50 text-green-700";
              }

              if (showFeedback && isSelected && !isCorrect) {
                optionClass = "border-red-200 bg-red-50 text-red-700";
              }

              return (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  className={`flex items-center justify-between rounded-2xl border-2 px-5 py-4 text-left text-sm font-bold transition ${optionClass}`}
                  type="button"
                >
                  <span>{option}</span>

                  {showFeedback && isCorrect && (
                    <CheckCircle2 className="h-5 w-5" />
                  )}

                  {showFeedback && isSelected && !isCorrect && (
                    <XCircle className="h-5 w-5" />
                  )}
                </button>
              );
            })}
          </div>

          {showFeedback && (
            <div className="mt-6 rounded-2xl bg-[#fafafc] p-5">
              <p className="text-sm font-bold text-[#202c5c]">
                {selectedAnswer === currentQuestion.answer
                  ? "Correct answer!"
                  : "Not quite. Review the hint and continue."}
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                {currentQuestion.hint}
              </p>

              <button
                onClick={handleNext}
                className="mt-5 rounded-2xl bg-[#a54a5c] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#913f50]"
                type="button"
              >
                {currentIndex === quiz.questions.length - 1
                  ? "Finish Quiz"
                  : "Next Question"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}