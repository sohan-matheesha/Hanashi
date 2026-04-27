'use client'

export default function DesuGrammarNotes() {
  return (
    <section className="w-full py-10">
      <div className="mx-auto max-w-7xl">
        {/* Page Title */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900 md:text-5xl tracking-tight">
            Japanese です Grammar Notes
          </h1>
          <p className="mt-4 text-base text-gray-600 md:text-lg">
            Learn how to use です, ではありません, でした, and
            ではありませんでした in Japanese sentences.
          </p>
        </div>

        {/* Quick Summary */}
        <div className="mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
          <div className="border-b border-gray-200 bg-linear-to-r from-green-50 to-white px-6 py-5">
            <h2 className="text-xl font-semibold text-gray-900">
              Quick Grammar Summary
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              These four forms are used to make present, past, positive, and
              negative sentences.
            </p>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[750px] border-collapse text-center">
              <thead>
                <tr className="bg-gray-100 text-[10px] uppercase tracking-widest text-gray-500">
                  <th className="border border-gray-200 px-4 py-4 font-black">
                    No.
                  </th>
                  <th className="border border-gray-200 px-4 py-4 font-black">
                    Sentence Type
                  </th>
                  <th className="border border-gray-200 px-4 py-4 font-black">
                    Japanese Form
                  </th>
                  <th className="border border-gray-200 px-4 py-4 font-black">
                    Romaji
                  </th>
                  <th className="border border-gray-200 px-4 py-4 font-black">
                    Meaning
                  </th>
                </tr>
              </thead>

              <tbody className="text-base text-black font-jp">
                {[
                  ["1", "Present Positive", "です", "desu", "is / am / are"],
                  [
                    "2",
                    "Present Negative",
                    "ではありません",
                    "dewa arimasen",
                    "is not / am not / are not",
                  ],
                  ["3", "Past Positive", "でした", "deshita", "was / were"],
                  [
                    "4",
                    "Past Negative",
                    "ではありませんでした",
                    "dewa arimasen deshita",
                    "was not / were not",
                  ],
                ].map((row, index) => (
                  <tr key={index} className="transition hover:bg-gray-50">
                    <td className="border border-gray-200 px-4 py-4 font-bold text-gray-400">{row[0]}</td>
                    <td className="border border-gray-200 px-4 py-4 font-bold text-[#202c5c]">{row[1]}</td>
                    <td className="border border-gray-200 px-4 py-4 text-2xl text-[#c64188]">{row[2]}</td>
                    <td className="border border-gray-200 px-4 py-4 font-bold text-emerald-600">{row[3]}</td>
                    <td className="border border-gray-200 px-4 py-4 text-gray-500 font-medium">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 1. Desu */}
        <GrammarCard
          number="1"
          title="です"
          romaji="desu"
          meaning="is / am / are"
          sentenceType="Present Positive"
          pattern="Noun + は + Noun + です"
          examples={[
            [
              "わたしは学生です。\nWatashi wa gakusei desu.",
              "I am a student.",
            ],
            [
              "かのじょは先生です。\nKanojo wa sensei desu.",
              "She is a teacher.",
            ],
            [
              "かれは先生です。\nKare wa sensei desu.",
              "He is a teacher.",
            ],
            [
              "山田さんは社長です。\nYamada-san wa shachou desu.",
              "Mr. Yamada is the president/boss.",
            ],
            [
              "母は主婦です。\nHaha wa shufu desu.",
              "My mother is a housewife.",
            ],
          ]}
        />

        {/* 2. Dewa Arimasen */}
        <GrammarCard
          number="2"
          title="ではありません"
          romaji="dewa arimasen"
          meaning="is not / am not / are not"
          sentenceType="Present Negative"
          pattern="Noun + は + Noun + ではありません"
          examples={[
            [
              "わたしは学生ではありません。\nWatashi wa gakusei dewa arimasen.",
              "I am not a student.",
            ],
            [
              "かのじょは先生ではありません。\nKanojo wa sensei dewa arimasen.",
              "She is not a teacher.",
            ],
            [
              "ここは学校ではありません。\nKoko wa gakkou dewa arimasen.",
              "This place is not a school.",
            ],
            [
              "これは本ではありません。\nKore wa hon dewa arimasen.",
              "This is not a book.",
            ],
          ]}
        />

        {/* 3. Deshita */}
        <GrammarCard
          number="3"
          title="でした"
          romaji="deshita"
          meaning="was / were"
          sentenceType="Past Positive"
          pattern="Noun + は + Noun + でした"
          examples={[
            [
              "わたしの母は先生でした。\nWatashi no haha wa sensei deshita.",
              "My mother was a teacher.",
            ],
            [
              "ここは公園でした。\nKoko wa kouen deshita.",
              "This place was a park.",
            ],
            ["昨日は雨でした。\nKinou wa ame deshita.", "Yesterday was rainy."],
            [
              "今朝は晴れでした。\nKesa wa hare deshita.",
              "This morning was sunny.",
            ],
          ]}
        />

        {/* 4. Dewa Arimasen Deshita */}
        <GrammarCard
          number="4"
          title="ではありませんでした"
          romaji="dewa arimasen deshita"
          meaning="was not / were not"
          sentenceType="Past Negative"
          pattern="Noun + は + Noun + ではありませんでした"
          examples={[
            [
              "昼ご飯はおにぎりではありませんでした。\nHiru gohan wa onigiri dewa arimasen deshita.",
              "Lunch was not onigiri.",
            ],
            [
              "昨日は休みの日ではありませんでした。\nKinou wa yasumi no hi dewa arimasen deshita.",
              "Yesterday was not a holiday.",
            ],
            [
              "むかし、ここは病院ではありませんでした。\nMukashi, koko wa byouin dewa arimasen deshita.",
              "Long ago, this place was not a hospital.",
            ],
          ]}
        />

        {/* Final Note */}
        <div className="rounded-2xl bg-green-50 p-6 text-sm text-green-800 border border-green-100">
          <p>
            <span className="font-bold uppercase tracking-widest text-[10px] block mb-1">Key Usage Note</span>
            です is used for present positive sentences. ではありません is used for present negative sentences. でした is used for past positive sentences. ではありませんでした is used for past negative sentences.
          </p>
        </div>
      </div>
    </section>
  );
}

function GrammarCard({
  number,
  title,
  romaji,
  meaning,
  sentenceType,
  pattern,
  examples,
}: any) {
  return (
    <div className="mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
      <div className="border-b border-gray-200 bg-linear-to-r from-green-50 to-white px-6 py-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              {number}. {title}
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              {sentenceType} — {meaning}
            </p>
          </div>

          <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-black text-green-700 uppercase tracking-widest">
            {romaji}
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Pattern Box */}
        <div className="mb-6 rounded-2xl bg-green-50 p-5 text-green-800">
          <p className="font-semibold text-xs uppercase tracking-widest mb-1">Grammar Pattern</p>
          <p className="text-lg font-bold">{pattern}</p>
        </div>

        {/* Examples Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[750px] border-collapse text-center">
            <thead>
              <tr className="bg-gray-100 text-[10px] uppercase tracking-widest text-gray-500">
                <th className="border border-gray-200 px-4 py-4 font-black">
                  Japanese / Romaji
                </th>
                <th className="border border-gray-200 px-4 py-4 font-black">
                  English
                </th>
              </tr>
            </thead>

            <tbody className="text-base text-black font-jp">
              {examples.map((row: any, index: number) => (
                <tr key={index} className="transition hover:bg-gray-50">
                  <td className="whitespace-pre-line border border-gray-200 px-4 py-4 font-medium">
                    {row[0]}
                  </td>
                  <td className="border border-gray-200 px-4 py-4 text-gray-600 font-medium">
                    {row[1]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
