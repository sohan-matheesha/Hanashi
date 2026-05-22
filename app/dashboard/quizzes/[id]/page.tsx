"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  RotateCcw,
  Trophy,
  XCircle,
  Sparkles,
  Gift,
  Flower2,
  Medal,
  Home,
} from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

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

type Reward = {
  title: string;
  icon: string;
  label: string;
  message: string;
  giftWord: string;
  giftMeaning: string;
  giftRomaji: string;
  bgText: string;
};

const quizData: Record<string, Quiz> = {
  "hiragana-practice": {
    title: "Hiragana Practice",
    subtitle: "ひらがな",
    description: "Practice Kana to Romaji and Romaji to Kana questions.",
    questions: [
      { question: "What is the romaji for あ?", display: "あ", options: ["a", "i", "u", "e"], answer: "a", hint: "あ is the first Hiragana vowel sound." },
      { question: "Choose the Hiragana for ka.", display: "ka", options: ["さ", "か", "た", "な"], answer: "か", hint: "か sounds like ka." },
      { question: "What is the romaji for み?", display: "み", options: ["ma", "mi", "mu", "me"], answer: "mi", hint: "み belongs to the M-row." },
      { question: "Choose the Hiragana for su.", display: "su", options: ["す", "せ", "そ", "し"], answer: "す", hint: "す is pronounced su." },
      { question: "What is the romaji for ね?", display: "ね", options: ["na", "ni", "nu", "ne"], answer: "ne", hint: "ね sounds like ne." },
      { question: "What is the romaji for い?", display: "い", options: ["a", "i", "u", "o"], answer: "i", hint: "い is pronounced i." },
      { question: "Choose the Hiragana for ku.", display: "ku", options: ["け", "く", "こ", "き"], answer: "く", hint: "く sounds like ku." },
      { question: "What is the romaji for せ?", display: "せ", options: ["sa", "shi", "su", "se"], answer: "se", hint: "せ belongs to the S-row." },
      { question: "Choose the Hiragana for to.", display: "to", options: ["て", "と", "た", "つ"], answer: "と", hint: "と is pronounced to." },
      { question: "What is the romaji for は?", display: "は", options: ["ha", "hi", "fu", "he"], answer: "ha", hint: "は is usually pronounced ha." },
      { question: "Choose the Hiragana for mo.", display: "mo", options: ["ま", "み", "む", "も"], answer: "も", hint: "も sounds like mo." },
      { question: "What is the romaji for り?", display: "り", options: ["ra", "ri", "ru", "re"], answer: "ri", hint: "り belongs to the R-row." },
      { question: "Choose the Hiragana for ya.", display: "ya", options: ["や", "ゆ", "よ", "ら"], answer: "や", hint: "や is pronounced ya." },
      { question: "What is the romaji for わ?", display: "わ", options: ["ra", "wa", "wo", "ya"], answer: "wa", hint: "わ sounds like wa." },
      { question: "Choose the Hiragana for n.", display: "n", options: ["ん", "の", "ね", "な"], answer: "ん", hint: "ん is the standalone n sound." },
    ],
  },

  "katakana-practice": {
    title: "Katakana Practice",
    subtitle: "カタカナ",
    description: "Practice Katakana to Romaji and Romaji to Katakana questions.",
    questions: [
      { question: "What is the romaji for ア?", display: "ア", options: ["a", "i", "u", "e"], answer: "a", hint: "ア is the Katakana version of あ." },
      { question: "Choose the Katakana for ka.", display: "ka", options: ["サ", "カ", "タ", "ナ"], answer: "カ", hint: "カ sounds like ka." },
      { question: "What is the romaji for ミ?", display: "ミ", options: ["ma", "mi", "mu", "me"], answer: "mi", hint: "ミ belongs to the M-row." },
      { question: "Choose the Katakana for su.", display: "su", options: ["ス", "セ", "ソ", "シ"], answer: "ス", hint: "ス sounds like su." },
      { question: "What is the romaji for ネ?", display: "ネ", options: ["na", "ni", "nu", "ne"], answer: "ne", hint: "ネ is pronounced ne." },
      { question: "What is the romaji for イ?", display: "イ", options: ["a", "i", "u", "o"], answer: "i", hint: "イ is pronounced i." },
      { question: "Choose the Katakana for ku.", display: "ku", options: ["ケ", "ク", "コ", "キ"], answer: "ク", hint: "ク sounds like ku." },
      { question: "What is the romaji for セ?", display: "セ", options: ["sa", "shi", "su", "se"], answer: "se", hint: "セ belongs to the S-row." },
      { question: "Choose the Katakana for to.", display: "to", options: ["テ", "ト", "タ", "ツ"], answer: "ト", hint: "ト is pronounced to." },
      { question: "What is the romaji for ハ?", display: "ハ", options: ["ha", "hi", "fu", "he"], answer: "ha", hint: "ハ sounds like ha." },
      { question: "Choose the Katakana for mo.", display: "mo", options: ["マ", "ミ", "ム", "モ"], answer: "モ", hint: "モ sounds like mo." },
      { question: "What is the romaji for リ?", display: "リ", options: ["ra", "ri", "ru", "re"], answer: "ri", hint: "リ belongs to the R-row." },
      { question: "Choose the Katakana for ya.", display: "ya", options: ["ヤ", "ユ", "ヨ", "ラ"], answer: "ヤ", hint: "ヤ is pronounced ya." },
      { question: "What is the romaji for ワ?", display: "ワ", options: ["ra", "wa", "wo", "ya"], answer: "wa", hint: "ワ sounds like wa." },
      { question: "Choose the Katakana for n.", display: "n", options: ["ン", "ノ", "ネ", "ナ"], answer: "ン", hint: "ン is the standalone n sound in Katakana." },
    ],
  },

  "match-kana": {
    title: "Match Kana",
    subtitle: "かな マッチ",
    description: "Match Hiragana characters with their Katakana versions.",
    questions: [
      { question: "Match Hiragana か with the correct Katakana.", display: "か", options: ["カ", "サ", "タ", "ナ"], answer: "カ", hint: "か and カ both sound like ka." },
      { question: "Match Hiragana み with the correct Katakana.", display: "み", options: ["マ", "ミ", "ム", "メ"], answer: "ミ", hint: "み and ミ both sound like mi." },
      { question: "Match Hiragana す with the correct Katakana.", display: "す", options: ["ス", "セ", "ソ", "シ"], answer: "ス", hint: "す and ス both sound like su." },
      { question: "Match Hiragana ね with the correct Katakana.", display: "ね", options: ["ノ", "ヌ", "ネ", "ナ"], answer: "ネ", hint: "ね and ネ both sound like ne." },
      { question: "Match Hiragana も with the correct Katakana.", display: "も", options: ["マ", "ミ", "ム", "モ"], answer: "モ", hint: "も and モ both sound like mo." },
      { question: "Match Hiragana あ with the correct Katakana.", display: "あ", options: ["ア", "イ", "ウ", "エ"], answer: "ア", hint: "あ and ア both sound like a." },
      { question: "Match Hiragana い with the correct Katakana.", display: "い", options: ["ア", "イ", "ウ", "オ"], answer: "イ", hint: "い and イ both sound like i." },
      { question: "Match Hiragana く with the correct Katakana.", display: "く", options: ["ケ", "ク", "コ", "キ"], answer: "ク", hint: "く and ク both sound like ku." },
      { question: "Match Hiragana せ with the correct Katakana.", display: "せ", options: ["サ", "ス", "セ", "ソ"], answer: "セ", hint: "せ and セ both sound like se." },
      { question: "Match Hiragana と with the correct Katakana.", display: "と", options: ["タ", "チ", "ツ", "ト"], answer: "ト", hint: "と and ト both sound like to." },
      { question: "Match Hiragana は with the correct Katakana.", display: "は", options: ["ハ", "ヒ", "フ", "ヘ"], answer: "ハ", hint: "は and ハ both sound like ha." },
      { question: "Match Hiragana り with the correct Katakana.", display: "り", options: ["ラ", "リ", "ル", "レ"], answer: "リ", hint: "り and リ both sound like ri." },
      { question: "Match Hiragana や with the correct Katakana.", display: "や", options: ["ヤ", "ユ", "ヨ", "ラ"], answer: "ヤ", hint: "や and ヤ both sound like ya." },
      { question: "Match Hiragana わ with the correct Katakana.", display: "わ", options: ["ラ", "ワ", "ヲ", "ヤ"], answer: "ワ", hint: "わ and ワ both sound like wa." },
      { question: "Match Hiragana ん with the correct Katakana.", display: "ん", options: ["ン", "ノ", "ネ", "ナ"], answer: "ン", hint: "ん and ン both represent n." },
    ],
  },

  "word-challenge": {
    title: "Word Challenge",
    subtitle: "ことば",
    description: "Practice simple beginner Japanese words.",
    questions: [
      { question: "What does ねこ mean?", display: "ねこ", options: ["Dog", "Cat", "Bird", "Fish"], answer: "Cat", hint: "ねこ is a common animal word." },
      { question: "What does いぬ mean?", display: "いぬ", options: ["Cat", "Dog", "Rice", "Water"], answer: "Dog", hint: "いぬ means dog." },
      { question: "What does すし mean?", display: "すし", options: ["Sushi", "Tea", "Coffee", "Milk"], answer: "Sushi", hint: "すし means sushi." },
      { question: "What does みず mean?", display: "みず", options: ["Water", "Book", "School", "Car"], answer: "Water", hint: "みず means water." },
      { question: "What does テレビ mean?", display: "テレビ", options: ["Radio", "Phone", "Television", "Camera"], answer: "Television", hint: "テレビ is a Katakana loanword." },
      { question: "What does ほん mean?", display: "ほん", options: ["Book", "Bag", "Chair", "Door"], answer: "Book", hint: "ほん means book." },
      { question: "What does がっこう mean?", display: "がっこう", options: ["Hospital", "School", "Shop", "Station"], answer: "School", hint: "がっこう means school." },
      { question: "What does くるま mean?", display: "くるま", options: ["Train", "Bus", "Car", "Bicycle"], answer: "Car", hint: "くるま means car." },
      { question: "What does でんわ mean?", display: "でんわ", options: ["Phone", "Television", "Camera", "Radio"], answer: "Phone", hint: "でんわ means phone." },
      { question: "What does コーヒー mean?", display: "コーヒー", options: ["Tea", "Coffee", "Juice", "Water"], answer: "Coffee", hint: "コーヒー is a Katakana loanword." },
      { question: "What does おちゃ mean?", display: "おちゃ", options: ["Tea", "Rice", "Milk", "Bread"], answer: "Tea", hint: "おちゃ means tea." },
      { question: "What does ごはん mean?", display: "ごはん", options: ["Rice / Meal", "Water", "Fish", "Fruit"], answer: "Rice / Meal", hint: "ごはん can mean rice or meal." },
      { question: "What does ともだち mean?", display: "ともだち", options: ["Teacher", "Friend", "Student", "Family"], answer: "Friend", hint: "ともだち means friend." },
      { question: "What does せんせい mean?", display: "せんせい", options: ["Teacher", "Student", "Doctor", "Friend"], answer: "Teacher", hint: "せんせい means teacher." },
      { question: "What does ありがとう mean?", display: "ありがとう", options: ["Sorry", "Goodbye", "Thank you", "Good morning"], answer: "Thank you", hint: "ありがとう means thank you." },
    ],
  },
};

function getReward(score: number, total: number): Reward {
  const percentage = Math.round((score / total) * 100);

  if (percentage >= 90) {
    return {
      title: "Sensei Trophy",
      icon: "🏆",
      label: "Excellent Result",
      message: "Amazing work! You are learning Japanese with strong focus and confidence.",
      giftWord: "すごい",
      giftMeaning: "Amazing",
      giftRomaji: "Sugoi",
      bgText: "先生",
    };
  }

  if (percentage >= 70) {
    return {
      title: "Samurai Badge",
      icon: "🎖️",
      label: "Great Progress",
      message: "Great job! Your Japanese skills are getting stronger step by step.",
      giftWord: "がんばって",
      giftMeaning: "Do your best",
      giftRomaji: "Ganbatte",
      bgText: "侍",
    };
  }

  if (percentage >= 50) {
    return {
      title: "Sakura Badge",
      icon: "🌸",
      label: "Reward Unlocked",
      message: "Good job! You unlocked a reward. Keep practising and you will improve more.",
      giftWord: "ありがとう",
      giftMeaning: "Thank you",
      giftRomaji: "Arigatou",
      bgText: "桜",
    };
  }

  return {
    title: "Keep Practicing",
    icon: "🌱",
    label: "Good Try",
    message: "Nice effort! Review the lesson and try again. Every mistake helps you learn.",
    giftWord: "もう一度",
    giftMeaning: "One more time",
    giftRomaji: "Mou ichido",
    bgText: "練習",
  };
}

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
  const [saved, setSaved] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    if (!isFinished) return;

    const saveResult = async () => {
      try {
        const total = quiz.questions.length;
        const percentage = Math.round((score / total) * 100);

        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError || !user) {
          setSaveError("Please login to save quiz results.");
          return;
        }

        const payload = {
          user_id: user.id,
          quiz_id: id,
          quiz_title: quiz.title,
          score: score,
          total_questions: total,
          percentage: percentage,
          completed_at: new Date().toISOString(),
        } as any;

        const { error: insertError } = await supabase.from("quiz_results").insert(payload);

        if (insertError) {
          console.error("Failed to save quiz result:", insertError);
          setSaveError(insertError.message || "Failed to save result.");
          return;
        }

        setSaved(true);

        try {
          router.refresh();
        } catch (e) {
          // ignore
        }
      } catch (e) {
        console.error("Unexpected save result error:", e);
        setSaveError(String(e));
      }
    };

    saveResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFinished]);

  if (!quiz) {
    return (
      <div className="min-h-screen bg-[#fafafc] px-6 py-10">
        <Link href="/dashboard/quizzes" className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-[#a54a5c]">
          <ArrowLeft className="h-4 w-4" />
          Back to Quizzes
        </Link>

        <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
          <XCircle className="mx-auto mb-4 h-14 w-14 text-red-400" />
          <h1 className="text-3xl font-extrabold text-[#202c5c]">Quiz Not Found</h1>
          <p className="mt-3 text-sm text-gray-500">The selected quiz is not available.</p>
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
    const total = quiz.questions.length;
    const percentage = Math.round((score / total) * 100);
    const reward = getReward(score, total);
    const isUnlocked = percentage >= 50;

    return (
      <div className="fixed inset-0 z-50 min-h-screen overflow-y-auto bg-[#10051f] px-4 py-8 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(236,72,153,0.35),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(124,58,237,0.42),transparent_32%),radial-gradient(circle_at_50%_85%,rgba(255,255,255,0.12),transparent_28%),linear-gradient(135deg,#10051f_0%,#251057_48%,#4c1d95_100%)]" />

        <div className="pointer-events-none absolute left-8 top-8 text-6xl opacity-70">🌸</div>
        <div className="pointer-events-none absolute right-10 top-16 text-7xl opacity-70">🌸</div>
        <div className="pointer-events-none absolute bottom-12 left-10 text-8xl opacity-20">⛩️</div>
        <div className="pointer-events-none absolute bottom-10 right-12 text-8xl opacity-20">富士山</div>
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[180px] font-black text-white/5 md:text-[260px]">
          {reward.bgText}
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-64px)] max-w-5xl items-center justify-center">
          <div className="w-full rounded-[40px] border border-white/20 bg-white/10 p-6 text-center shadow-2xl backdrop-blur-xl md:p-10">
            <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-white/15 text-7xl shadow-2xl md:h-36 md:w-36 md:text-8xl">
              {reward.icon}
            </div>

            <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.35em] text-pink-200">
              {reward.label}
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
              {reward.title}
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-purple-100 md:text-lg">
              {reward.message}
            </p>

            <div className="mx-auto mt-8 grid max-w-3xl gap-4 md:grid-cols-3">
              <div className="rounded-3xl border border-white/15 bg-white/10 p-5">
                <CheckCircle2 className="mx-auto mb-3 h-7 w-7 text-green-300" />
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-purple-200">Score</p>
                <h2 className="mt-2 text-3xl font-extrabold">{score}/{total}</h2>
              </div>

              <div className="rounded-3xl border border-white/15 bg-white/10 p-5">
                <Trophy className="mx-auto mb-3 h-7 w-7 text-yellow-300" />
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-purple-200">Correct</p>
                <h2 className="mt-2 text-3xl font-extrabold">{percentage}%</h2>
              </div>

              <div className="rounded-3xl border border-white/15 bg-white/10 p-5">
                {isUnlocked ? (
                  <Medal className="mx-auto mb-3 h-7 w-7 text-pink-300" />
                ) : (
                  <Flower2 className="mx-auto mb-3 h-7 w-7 text-green-300" />
                )}
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-purple-200">Status</p>
                <h2 className="mt-2 text-2xl font-extrabold">{isUnlocked ? "Unlocked" : "Try Again"}</h2>
              </div>
            </div>

            <div className="mx-auto mt-8 max-w-3xl rounded-4xl border border-white/15 bg-white/15 p-6">
              <div className="mb-4 flex items-center justify-center gap-2">
                <Gift className="h-5 w-5 text-pink-200" />
                <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-pink-200">
                  Japanese Gift
                </p>
              </div>

              <p className="text-5xl font-extrabold md:text-7xl">{reward.giftWord}</p>
              <p className="mt-4 text-lg font-bold text-purple-100">
                {reward.giftRomaji} • {reward.giftMeaning}
              </p>
            </div>

            <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
              <button
                onClick={restartQuiz}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-5 py-4 text-sm font-extrabold text-white transition hover:bg-white/20"
                type="button"
              >
                <RotateCcw className="h-4 w-4" />
                Try Again
              </button>

              <Link href="/dashboard/quizzes" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-sm font-extrabold text-[#4c1d95] transition hover:bg-purple-50">
                <Trophy className="h-4 w-4" />
                More Quizzes
              </Link>

              <Link href="/dashboard" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-pink-500 px-5 py-4 text-sm font-extrabold text-white transition hover:bg-pink-600">
                <Home className="h-4 w-4" />
                Continue
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafc] px-6 py-10">
      <Link href="/dashboard/quizzes" className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-[#a54a5c]">
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
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Score</p>
              <p className="mt-1 text-2xl font-extrabold text-[#a54a5c]">{score}</p>
            </div>
          </div>

          <div className="mt-6 h-3 overflow-hidden rounded-full bg-gray-100">
            <div className="h-full rounded-full bg-[#a54a5c] transition-all" style={{ width: `${progress}%` }} />
          </div>

          <p className="mt-3 text-xs font-semibold text-gray-400">
            Question {currentIndex + 1} of {quiz.questions.length}
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6 flex min-h-36 items-center justify-center rounded-3xl bg-linear-to-br from-[#202c5c] to-[#a54a5c] p-8 text-white">
            <div className="text-center">
              <Sparkles className="mx-auto mb-3 h-8 w-8" />
              <p className="text-6xl font-extrabold">{currentQuestion.display}</p>
            </div>
          </div>

          <h2 className="text-2xl font-extrabold text-[#202c5c]">
            {currentQuestion.question}
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {currentQuestion.options.map((option) => {
              const isCorrect = option === currentQuestion.answer;
              const isSelected = selectedAnswer === option;

              let optionClass = "border-gray-200 bg-white text-[#202c5c] hover:border-[#a54a5c] hover:bg-pink-50";

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

                  {showFeedback && isCorrect && <CheckCircle2 className="h-5 w-5" />}
                  {showFeedback && isSelected && !isCorrect && <XCircle className="h-5 w-5" />}
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
                {currentIndex === quiz.questions.length - 1 ? "Finish Quiz" : "Next Question"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}