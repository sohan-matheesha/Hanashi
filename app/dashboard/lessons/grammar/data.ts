export const grammarLessons = [
  {
    id: "particles",
    title: "Particles",
    icon: "Leaf",
    title_sinhala: "Particles",
    description:
      "Particles are small words used to show the relationship between words in a sentence.",
  },
  {
    id: "tenses",
    title: "Tenses",
    icon: "Clock",
    title_sinhala: "Tenses",
    description: "Learn how to express actions in past, present, and future.",
  },
  {
    id: "adjectives",
    title: "Adjectives",
    icon: "Smile",
    title_sinhala: "Adjectives",
    description: "Describing things and people in Japanese.",
  },
  {
    id: "verbs-forms",
    title: "Verbs / Forms",
    icon: "Zap",
    title_sinhala: "Verbs and Forms",
    description:
      "Master Japanese verb groups and their essential conjugations (Te-form, Nai-form, etc.).",
  },
  {
    id: "polite-plain",
    title: "Polite and Plain Form",
    icon: "Users",
    title_sinhala: "Polite and Plain Form",
    description: "Understanding social hierarchy through language.",
  },
  {
    id: "short-grammar",
    title: "Short Grammar",
    icon: "List",
    title_sinhala: "Short Grammar",
    description: "Quick rules for daily communication.",
  },
  {
    id: "nouns",
    title: "Nouns",
    icon: "User",
    title_sinhala: "Nouns",
    description: "Basic noun sentences and usage.",
  },
];

export const shortGrammarIntro =
  "Short Grammar introduces simple Japanese grammar patterns with meanings and example sentences to help beginners build daily sentences easily.";


export type ShortGrammarExample = {
  japanese: string;
  english: string;
};

export type ShortGrammarPattern = {
  id: number;
  pattern: string;
  meaning: string;
  image: string;
  examples: ShortGrammarExample[];
};

export const shortGrammarPatterns: ShortGrammarPattern[] = [
  {
    id: 1,
    pattern: "Noun + です",
    meaning: "is / am / are",
    image: "🎓",
    examples: [
      { japanese: "わたしは学生です。", english: "I am a student." },
      { japanese: "これは本です。", english: "This is a book." },
      { japanese: "あれは学校です。", english: "That is a school." },
    ],
  },
  {
    id: 2,
    pattern: "Noun + じゃないです",
    meaning: "is not / am not / are not",
    image: "🙅",
    examples: [
      { japanese: "わたしは先生じゃないです。", english: "I am not a teacher." },
      { japanese: "これは車じゃないです。", english: "This is not a car." },
      { japanese: "あの人は学生じゃないです。", english: "That person is not a student." },
    ],
  },
  {
    id: 3,
    pattern: "Verb + ます",
    meaning: "polite present / future action",
    image: "🍚",
    examples: [
      { japanese: "ごはんを食べます。", english: "I eat rice." },
      { japanese: "水を飲みます。", english: "I drink water." },
      { japanese: "学校へ行きます。", english: "I go to school." },
    ],
  },
  {
    id: 4,
    pattern: "Verb + ません",
    meaning: "do not / does not",
    image: "☕",
    examples: [
      { japanese: "コーヒーを飲みません。", english: "I do not drink coffee." },
      { japanese: "テレビを見ません。", english: "I do not watch TV." },
      { japanese: "今日、学校へ行きません。", english: "I do not go to school today." },
    ],
  },
  {
    id: 5,
    pattern: "Verb + ました",
    meaning: "did / past action",
    image: "🎬",
    examples: [
      { japanese: "昨日、映画を見ました。", english: "I watched a movie yesterday." },
      { japanese: "朝ごはんを食べました。", english: "I ate breakfast." },
      { japanese: "日本語を勉強しました。", english: "I studied Japanese." },
    ],
  },
  {
    id: 6,
    pattern: "Verb + ませんでした",
    meaning: "did not / past negative",
    image: "📚",
    examples: [
      { japanese: "昨日、学校へ行きませんでした。", english: "I did not go to school yesterday." },
      { japanese: "朝ごはんを食べませんでした。", english: "I did not eat breakfast." },
      { japanese: "宿題をしませんでした。", english: "I did not do homework." },
    ],
  },
  {
    id: 7,
    pattern: "Noun + は + Noun + です",
    meaning: "A is B",
    image: "🖊️",
    examples: [
      { japanese: "これはペンです。", english: "This is a pen." },
      { japanese: "わたしは学生です。", english: "I am a student." },
      { japanese: "ここは図書館です。", english: "This place is a library." },
    ],
  },
  {
    id: 8,
    pattern: "Noun + が + あります",
    meaning: "there is / have — for things",
    image: "📖",
    examples: [
      { japanese: "つくえの上に本があります。", english: "There is a book on the desk." },
      { japanese: "かばんの中にペンがあります。", english: "There is a pen in the bag." },
      { japanese: "部屋にテレビがあります。", english: "There is a TV in the room." },
    ],
  },
  {
    id: 9,
    pattern: "Person/Animal + が + います",
    meaning: "there is / have — for people and animals",
    image: "🐱",
    examples: [
      { japanese: "部屋に猫がいます。", english: "There is a cat in the room." },
      { japanese: "教室に先生がいます。", english: "There is a teacher in the classroom." },
      { japanese: "公園に子どもがいます。", english: "There is a child in the park." },
    ],
  },
  {
    id: 10,
    pattern: "Noun + を + Verb",
    meaning: "object + action",
    image: "🎧",
    examples: [
      { japanese: "水を飲みます。", english: "I drink water." },
      { japanese: "本を読みます。", english: "I read a book." },
      { japanese: "音楽を聞きます。", english: "I listen to music." },
    ],
  },
  {
    id: 11,
    pattern: "Place + へ + 行きます",
    meaning: "go to a place",
    image: "🚌",
    examples: [
      { japanese: "日本へ行きます。", english: "I go to Japan." },
      { japanese: "学校へ行きます。", english: "I go to school." },
      { japanese: "スーパーへ行きます。", english: "I go to the supermarket." },
    ],
  },
  {
    id: 12,
    pattern: "Time + に + Verb",
    meaning: "do something at a specific time",
    image: "⏰",
    examples: [
      { japanese: "7時に起きます。", english: "I wake up at 7 o’clock." },
      { japanese: "9時に寝ます。", english: "I sleep at 9 o’clock." },
      { japanese: "月曜日に学校へ行きます。", english: "I go to school on Monday." },
    ],
  },
  {
    id: 13,
    pattern: "Noun + が + 好きです",
    meaning: "like",
    image: "💖",
    examples: [
      { japanese: "アニメが好きです。", english: "I like anime." },
      { japanese: "日本語が好きです。", english: "I like Japanese." },
      { japanese: "犬が好きです。", english: "I like dogs." },
    ],
  },
  {
    id: 14,
    pattern: "Noun + が + きらいです",
    meaning: "dislike",
    image: "😣",
    examples: [
      { japanese: "魚がきらいです。", english: "I dislike fish." },
      { japanese: "雨がきらいです。", english: "I dislike rain." },
      { japanese: "宿題がきらいです。", english: "I dislike homework." },
    ],
  },
  {
    id: 15,
    pattern: "Verb stem + たいです",
    meaning: "want to do",
    image: "✈️",
    examples: [
      { japanese: "日本へ行きたいです。", english: "I want to go to Japan." },
      { japanese: "ラーメンを食べたいです。", english: "I want to eat ramen." },
      { japanese: "日本語を勉強したいです。", english: "I want to study Japanese." },
    ],
  },
  {
    id: 16,
    pattern: "Verbて + ください",
    meaning: "please do",
    image: "✍️",
    examples: [
      { japanese: "ここに名前を書いてください。", english: "Please write your name here." },
      { japanese: "これを読んでください。", english: "Please read this." },
      { japanese: "少し待ってください。", english: "Please wait a little." },
    ],
  },
  {
    id: 17,
    pattern: "Verbて + います",
    meaning: "doing now / currently doing",
    image: "📘",
    examples: [
      { japanese: "今、勉強しています。", english: "I am studying now." },
      { japanese: "友だちと話しています。", english: "I am talking with my friend." },
      { japanese: "音楽を聞いています。", english: "I am listening to music." },
    ],
  },
  {
    id: 18,
    pattern: "Adjective + です",
    meaning: "adjective sentence",
    image: "🚗",
    examples: [
      { japanese: "この車は高いです。", english: "This car is expensive." },
      { japanese: "この部屋は広いです。", english: "This room is spacious." },
      { japanese: "日本語は楽しいです。", english: "Japanese is fun." },
    ],
  },
  {
    id: 19,
    pattern: "い-Adjective + くないです",
    meaning: "not adjective",
    image: "☀️",
    examples: [
      { japanese: "この本は難しくないです。", english: "This book is not difficult." },
      { japanese: "今日、暑くないです。", english: "Today is not hot." },
      { japanese: "このかばんは重くないです。", english: "This bag is not heavy." },
    ],
  },
  {
    id: 20,
    pattern: "な-Adjective + じゃないです",
    meaning: "not な-adjective",
    image: "🏙️",
    examples: [
      { japanese: "この町は静かじゃないです。", english: "This town is not quiet." },
      { japanese: "この部屋はきれいじゃないです。", english: "This room is not clean." },
      { japanese: "彼は元気じゃないです。", english: "He is not well." },
    ],
  },
  {
    id: 21,
    pattern: "Noun + と + Noun",
    meaning: "and / with",
    image: "🥛",
    examples: [
      { japanese: "パンと牛乳を買います。", english: "I buy bread and milk." },
      { japanese: "友だちと学校へ行きます。", english: "I go to school with my friend." },
      { japanese: "犬と猫がいます。", english: "There is a dog and a cat." },
    ],
  },
  {
    id: 22,
    pattern: "Noun + も",
    meaning: "also / too",
    image: "🙋",
    examples: [
      { japanese: "わたしも学生です。", english: "I am also a student." },
      { japanese: "これも本です。", english: "This is also a book." },
      { japanese: "日本語も勉強します。", english: "I also study Japanese." },
    ],
  },
  {
    id: 23,
    pattern: "Question + か",
    meaning: "question marker",
    image: "❓",
    examples: [
      { japanese: "あなたは学生ですか。", english: "Are you a student?" },
      { japanese: "これは本ですか。", english: "Is this a book?" },
      { japanese: "日本語を勉強しますか。", english: "Do you study Japanese?" },
    ],
  },
  {
    id: 24,
    pattern: "Noun + の + Noun",
    meaning: "possession / of",
    image: "📕",
    examples: [
      { japanese: "これは私の本です。", english: "This is my book." },
      { japanese: "これは先生のペンです。", english: "This is the teacher’s pen." },
      { japanese: "日本語の本を読みます。", english: "I read a Japanese book." },
    ],
  },
  {
    id: 25,
    pattern: "Verb Dictionary Form + ことができます",
    meaning: "can do",
    image: "🎹",
    examples: [
      { japanese: "日本語を話すことができます。", english: "I can speak Japanese." },
      { japanese: "漢字を読むことができます。", english: "I can read kanji." },
      { japanese: "ピアノを弾くことができます。", english: "I can play the piano." },
    ],
  },
];