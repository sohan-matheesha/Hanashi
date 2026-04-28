'use client'

import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import { ArrowLeft, Volume2, Info, BookOpen } from 'lucide-react'

// Content definitions mapped by id

import { greetingsData } from "../data/greetings"
import { numbersData } from "../data/numbers"
import { familyData } from "../data/family"
import { countingSystemData } from "../data/counting-system"
import { timeData } from "../data/time"
import { monthsData } from "../data/months"
import { yearsData } from "../data/years"
import { datesData } from "../data/dates"
import { foodDrinksData } from "../data/food-drinks"
import { placesData } from "../data/places"

const vocabularyContent: Record<string, any> = {
  "greetings": greetingsData,
  "numbers": numbersData,
  "family-members": familyData,
  "counting-system": countingSystemData,
  "time": timeData,
  "months": monthsData,
  "years": yearsData,
  "dates": datesData,
  "food-drinks": foodDrinksData,
  "places": placesData
}

export default function VocabularyDetailPage() {
  const params = useParams()
  const router = useRouter()
  
  // Safe param extraction for next 15+ 
  const idValue = params?.id;
  const id = Array.isArray(idValue) ? idValue[0] : (typeof idValue === 'string' ? idValue : '');
  
  const content = vocabularyContent[id as keyof typeof vocabularyContent]

  if (id === 'counting-system') {
    return (
      <div className="bg-[#fafafc] min-h-screen pb-24">
        {/* Header with Back Button */}
        <div className="max-w-7xl mx-auto px-4 pt-10 md:px-8 lg:px-16">
          <button 
            onClick={() => router.push('/dashboard/lessons/vocabulary')} 
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#202c5c]/5 text-[#202c5c] hover:bg-[#202c5c] hover:text-white transition-all font-bold text-sm border border-[#202c5c]/10 mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> <span>Back to Topics</span>
          </button>
        </div>

        <section className="w-full px-4 py-10 md:px-8 lg:px-16 -mt-10">
          <div className="mx-auto max-w-7xl">
            {/* Title Section */}
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Japanese Counting System
              </h2>
              <p className="mt-3 text-base text-gray-600 md:text-lg">
                Learn how to count objects, people, animals, cups, and shoes in Japanese.
              </p>
            </div>

            {/* Table Card */}
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              <div className="border-b border-gray-200 bg-linear-to-r from-green-50 to-white px-6 py-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  Japanese Counters Table
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Different counters are used depending on what you are counting.
                </p>
              </div>

              {/* Responsive Table Wrapper */}
              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[950px] border-collapse text-center">
                  <thead>
                    <tr className="bg-gray-100 text-sm text-gray-900">
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        No.
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Counting Books / Long Objects <br />
                        <span className="text-green-600">〜本</span>
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Counting People <br />
                        <span className="text-green-600">〜人</span>
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Counting Small Animals <br />
                        <span className="text-green-600">〜匹</span>
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Counting Large Animals <br />
                        <span className="text-green-600">〜頭</span>
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Counting Cups / Glasses <br />
                        <span className="text-green-600">〜杯</span>
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Counting Shoes / Socks <br />
                        <span className="text-green-600">〜足</span>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-base text-black font-jp">
                    {[
                      ["1", "いっぽん", "ひとり", "いっぴき", "いっとう", "いっぱい", "いっそく"],
                      ["2", "にほん", "ふたり", "にひき", "にとう", "にはい", "にそく"],
                      ["3", "さんぼん", "さんにん", "さんびき", "さんとう", "さんばい", "さんぞく"],
                      ["4", "よんほん", "よにん", "よんひき", "よんとう", "よんはい", "よんそく"],
                      ["5", "ごほん", "ごにん", "ごひき", "ごとう", "ごはい", "ごそく"],
                      ["6", "ろっぽん", "ろくにん", "ろっぴき", "ろくとう", "ろっぱい", "ろくそく"],
                      ["7", "ななほん", "ななにん", "ななひき", "ななとう", "ななはい", "ななそく"],
                      ["8", "はっぽん", "はちにん", "はっぴき", "はちとう", "はっぱい", "はっそく"],
                      ["9", "きゅうほん", "きゅうにん", "きゅうひき", "きゅうとう", "きゅうはい", "きゅうそく"],
                      ["10", "じゅっぽん", "じゅうにん", "じゅっぴき", "じゅっとう", "じゅっぱい", "じゅっそく"],
                    ].map((row, index) => (
                      <tr
                        key={index}
                        className="transition hover:bg-gray-50"
                      >
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className="border border-gray-200 px-4 py-4"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}

                    <tr className="bg-green-50 font-bold text-green-700">
                      <td className="border border-green-200 px-4 py-4">
                        How many?
                      </td>
                      <td className="border border-green-200 px-4 py-4">なんぼん</td>
                      <td className="border border-green-200 px-4 py-4">なんんにん</td>
                      <td className="border border-green-200 px-4 py-4">なんびき</td>
                      <td className="border border-green-200 px-4 py-4">なんとう</td>
                      <td className="border border-green-200 px-4 py-4">なんばい</td>
                      <td className="border border-green-200 px-4 py-4">なんぞく</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Note */}
            <div className="mt-6 rounded-2xl bg-green-50 p-5 text-sm text-green-800">
              <p>
                <span className="font-semibold">Note:</span> Japanese uses different
                counters depending on the object. For example, 〜人 is used for people,
                〜匹 is used for small animals, and 〜杯 is used for cups or glasses.
              </p>
            </div>

            {/* SECOND TABLE CARD */}
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg mt-12">
              <div className="border-b border-gray-200 bg-linear-to-r from-green-50 to-white px-6 py-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  Japanese Counters Table 2
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Different counters are used depending on the object or situation.
                </p>
              </div>

              {/* Responsive Table Wrapper */}
              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[950px] border-collapse text-center">
                  <thead>
                    <tr className="bg-gray-100 text-sm text-gray-900">
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        No.
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Counting Thin / Flat Objects <br />
                        <span className="text-green-600">〜枚</span>
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Counting Books / Notebooks <br />
                        <span className="text-green-600">〜冊</span>
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Counting Times <br />
                        <span className="text-green-600">〜回</span>
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Counting Floors <br />
                        <span className="text-green-600">〜階</span>
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Counting Small Objects <br />
                        <span className="text-green-600">〜個</span>
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Counting General Objects <br />
                        <span className="text-green-600">〜つ</span>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-base text-black font-jp">
                    {[
                      ["1", "いちまい", "いっさつ", "いっかい", "いっかい", "いっこ", "ひとつ"],
                      ["2", "にまい", "にさつ", "にかい", "にかい", "にこ", "ふたつ"],
                      ["3", "さんまい", "さんさつ", "さんかい", "さんがい", "さんこ", "みっつ"],
                      ["4", "よんまい", "よんさつ", "よんかい", "よんかい", "よんこ", "よっつ"],
                      ["5", "ごまい", "ごさつ", "ごかい", "ごかい", "ごこ", "いつつ"],
                      ["6", "ろくまい", "ろくさつ", "ろっかい", "ろっかい", "ろっこ", "むっつ"],
                      ["7", "ななまい", "ななさつ", "ななかい", "ななかい", "ななこ", "ななつ"],
                      ["8", "はちまい", "はっさつ", "はっかい", "はっかい", "はっこ", "やっつ"],
                      ["9", "きゅうまい", "きゅうさつ", "きゅうかい", "きゅうかい", "きゅうこ", "ここのつ"],
                      ["10", "じゅうまい", "じゅっさつ", "じゅっかい", "じゅっかい", "じゅっこ", "とお"],
                    ].map((row, index) => (
                      <tr key={index} className="transition hover:bg-gray-50">
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className="border border-gray-200 px-4 py-4"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}

                    <tr className="bg-green-50 font-bold text-green-700">
                      <td className="border border-green-200 px-4 py-4">
                        How many?
                      </td>
                      <td className="border border-green-200 px-4 py-4">なんまい</td>
                      <td className="border border-green-200 px-4 py-4">なんさつ</td>
                      <td className="border border-green-200 px-4 py-4">なんかい</td>
                      <td className="border border-green-200 px-4 py-4">なんがい</td>
                      <td className="border border-green-200 px-4 py-4">なんこ</td>
                      <td className="border border-green-200 px-4 py-4">いくつ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Note 2 */}
            <div className="mt-6 rounded-2xl bg-green-50 p-5 text-sm text-green-800">
              <p>
                <span className="font-semibold">Note:</span> Japanese uses different
                counters for different things. For example, 〜枚 is used for thin flat
                objects, 〜冊 is used for books, 〜回 is used for times, 〜階 is used
                for floors, 〜個 is used for small objects, and 〜つ is used for general
                objects.
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  }

  if (id === 'time') {
    return (
      <div className="bg-[#fafafc] min-h-screen pb-24 font-sans">
        {/* Header with Back Button */}
        <div className="max-w-7xl mx-auto px-4 pt-10 md:px-8 lg:px-16">
          <button 
            onClick={() => router.push('/dashboard/lessons/vocabulary')} 
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#202c5c]/5 text-[#202c5c] hover:bg-[#202c5c] hover:text-white transition-all font-bold text-sm border border-[#202c5c]/10 mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> <span>Back to Topics</span>
          </button>
        </div>

        <section className="w-full px-4 py-10 md:px-8 lg:px-16 -mt-10">
          <div className="mx-auto max-w-6xl">
            {/* Page Title */}
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Japanese Time Vocabulary
              </h2>
              <p className="mt-3 text-base text-gray-600 md:text-lg">
                Learn Japanese words, hours, minutes, and useful time sentences.
              </p>
            </div>

            {/* Table 1: Time Vocabulary */}
            <div className="mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              <div className="border-b border-gray-200 bg-linear-to-r from-green-50 to-white px-6 py-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  Time Vocabulary
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Basic Japanese words related to time.
                </p>
              </div>

              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[650px] border-collapse text-center">
                  <thead>
                    <tr className="bg-gray-100 text-sm text-gray-900">
                      <th className="border border-gray-200 px-4 py-4 font-bold">English</th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">Japanese</th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">Romaji</th>
                    </tr>
                  </thead>
                  <tbody className="text-base text-black font-jp">
                    {[
                      ["Time", "時間", "jikan"],
                      ["Clock / Watch", "時計", "tokei"],
                      ["Hour", "時", "ji"],
                      ["Minute", "分", "fun / pun"],
                      ["Second", "秒", "byou"],
                      ["Morning", "朝", "asa"],
                      ["Afternoon", "午後", "gogo"],
                      ["Evening", "夕方", "yuugata"],
                      ["Night", "夜", "yoru"],
                      ["Today", "今日", "kyou"],
                      ["Tomorrow", "明日", "ashita"],
                      ["Yesterday", "昨日", "kinou"],
                      ["Now", "今", "ima"],
                      ["Later", "後で", "ato de"],
                      ["Before", "前", "mae"],
                      ["Half", "半", "han"],
                      ["AM", "午前", "gozen"],
                      ["PM", "午後", "gogo"],
                      ["What time?", "何時", "nanji"],
                    ].map((row, index) => (
                      <tr key={index} className="transition hover:bg-gray-50">
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className="border border-gray-200 px-4 py-4"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 2: Hours */}
            <div className="mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              <div className="border-b border-gray-200 bg-linear-to-r from-green-50 to-white px-6 py-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  Hours
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  How to say o’clock in Japanese.
                </p>
              </div>

              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[650px] border-collapse text-center">
                  <thead>
                    <tr className="bg-gray-100 text-sm text-gray-900">
                      <th className="border border-gray-200 px-4 py-4 font-bold">English</th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">Japanese</th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">Romaji</th>
                    </tr>
                  </thead>
                  <tbody className="text-base text-black font-jp">
                    {[
                      ["1 o’clock", "一時", "ichi ji"],
                      ["2 o’clock", "二時", "ni ji"],
                      ["3 o’clock", "三時", "san ji"],
                      ["4 o’clock", "四時", "yo ji"],
                      ["5 o’clock", "五時", "go ji"],
                      ["6 o’clock", "六時", "roku ji"],
                      ["7 o’clock", "七時", "shichi ji / nana ji"],
                      ["8 o’clock", "八時", "hachi ji"],
                      ["9 o’clock", "九時", "ku ji"],
                      ["10 o’clock", "十時", "juu ji"],
                      ["11 o’clock", "十一時", "juu ichi ji"],
                      ["12 o’clock", "十二時", "juu ni ji"],
                    ].map((row, index) => (
                      <tr key={index} className="transition hover:bg-gray-50">
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className="border border-gray-200 px-4 py-4"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 3: Minutes */}
            <div className="mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              <div className="border-b border-gray-200 bg-linear-to-r from-green-50 to-white px-6 py-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  Minutes
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  How to say minutes in Japanese.
                </p>
              </div>

              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[650px] border-collapse text-center">
                  <thead>
                    <tr className="bg-gray-100 text-sm text-gray-900">
                      <th className="border border-gray-200 px-4 py-4 font-bold">English</th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">Japanese</th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">Romaji</th>
                    </tr>
                  </thead>
                  <tbody className="text-base text-black font-jp">
                    {[
                      ["1 minute", "一分", "ippun"],
                      ["2 minutes", "二分", "ni fun"],
                      ["3 minutes", "三分", "san pun"],
                      ["4 minutes", "四分", "yon pun"],
                      ["5 minutes", "五分", "go fun"],
                      ["6 minutes", "六分", "roppun"],
                      ["7 minutes", "七分", "nana fun"],
                      ["8 minutes", "八分", "happun"],
                      ["9 minutes", "九分", "kyuu fun"],
                      ["10 minutes", "十分", "juppun / jippun"],
                      ["30 minutes / half", "半", "han"],
                    ].map((row, index) => (
                      <tr key={index} className="transition hover:bg-gray-50">
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className="border border-gray-200 px-4 py-4"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 4: Useful Sentences */}
            <div className="mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              <div className="border-b border-gray-200 bg-linear-to-r from-green-50 to-white px-6 py-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  Useful Time Sentences
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Simple sentences for asking and telling time in Japanese.
                </p>
              </div>

              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[800px] border-collapse text-center">
                  <thead>
                    <tr className="bg-gray-100 text-sm text-gray-900">
                      <th className="border border-gray-200 px-4 py-4 font-bold">English</th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">Japanese</th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">Romaji</th>
                    </tr>
                  </thead>
                  <tbody className="text-base text-black font-jp">
                    {[
                      ["What time is it?", "今、何時ですか。", "Ima, nanji desu ka?"],
                      ["It is 3 o’clock.", "三時です。", "San ji desu."],
                      ["It is 3:30.", "三時半です。", "San ji han desu."],
                      ["It is 7:15.", "七時十五分です。", "Shichi ji juu go fun desu."],
                      ["I wake up at 6 o’clock.", "六時に起きます。", "Roku ji ni okimasu."],
                      ["I sleep at 10 o’clock.", "十時に寝ます。", "Juu ji ni nemasu."],
                    ].map((row, index) => (
                      <tr key={index} className="transition hover:bg-gray-50">
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className="border border-gray-200 px-4 py-4"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Note */}
            <div className="rounded-2xl bg-green-50 p-5 text-sm text-green-800">
              <p>
                <span className="font-semibold">Note:</span> Japanese time is usually
                said using the hour number + 時 (ji). Minutes are said using the number
                + 分 (fun / pun). For example, 三時 means 3 o’clock and 十分 means 10
                minutes.
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  }

  if (id === 'months') {
    return (
      <div className="bg-[#fafafc] min-h-screen pb-24 font-sans">
        {/* Header with Back Button */}
        <div className="max-w-7xl mx-auto px-4 pt-10 md:px-8 lg:px-16">
          <button 
            onClick={() => router.push('/dashboard/lessons/vocabulary')} 
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#202c5c]/5 text-[#202c5c] hover:bg-[#202c5c] hover:text-white transition-all font-bold text-sm border border-[#202c5c]/10 mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> <span>Back to Topics</span>
          </button>
        </div>

        <section className="w-full px-4 py-10 md:px-8 lg:px-16 -mt-10">
          <div className="mx-auto max-w-6xl">
            {/* Page Title */}
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Japanese Month Vocabulary
              </h2>
              <p className="mt-3 text-base text-gray-600 md:text-lg">
                Learn Japanese months, useful month words, and simple month sentences.
              </p>
            </div>

            {/* Table 1: Months */}
            <div className="mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              <div className="border-b border-gray-200 bg-linear-to-r from-green-50 to-white px-6 py-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  Months in Japanese
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Learn the names of the 12 months in Japanese.
                </p>
              </div>

              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[650px] border-collapse text-center">
                  <thead>
                    <tr className="bg-gray-100 text-sm text-gray-900">
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        English
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Japanese
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Romaji
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-base text-black font-jp">
                    {[
                      ["January", "一月", "ichi-gatsu"],
                      ["February", "二月", "ni-gatsu"],
                      ["March", "三月", "san-gatsu"],
                      ["April", "四月", "shi-gatsu"],
                      ["May", "五月", "go-gatsu"],
                      ["June", "六月", "roku-gatsu"],
                      ["July", "七月", "shichi-gatsu"],
                      ["August", "八月", "hachi-gatsu"],
                      ["September", "九月", "ku-gatsu"],
                      ["October", "十月", "juu-gatsu"],
                      ["November", "十一月", "juuichi-gatsu"],
                      ["December", "十二月", "juuni-gatsu"],
                    ].map((row, index) => (
                      <tr key={index} className="transition hover:bg-gray-50">
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className="border border-gray-200 px-4 py-4"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 2: Extra Month Words */}
            <div className="mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              <div className="border-b border-gray-200 bg-linear-to-r from-green-50 to-white px-6 py-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  Extra Month Words
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Common Japanese words related to months.
                </p>
              </div>

              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[650px] border-collapse text-center">
                  <thead>
                    <tr className="bg-gray-100 text-sm text-gray-900">
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        English
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Japanese
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Romaji
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-base text-black font-jp">
                    {[
                      ["Month", "月", "tsuki / gatsu"],
                      ["This month", "今月", "kongetsu"],
                      ["Last month", "先月", "sengetsu"],
                      ["Next month", "来月", "raigetsu"],
                      ["Every month", "毎月", "maitsuki"],
                      ["One month", "一か月", "ikkagetsu"],
                      ["Two months", "二か月", "nikagetsu"],
                      ["Three months", "三か月", "sankagetsu"],
                      ["Four months", "四か月", "yonkagetsu"],
                      ["Five months", "五か月", "gokagetsu"],
                      ["Six months", "六か月", "rokkagetsu"],
                      ["Seven months", "七か月", "nanakagetsu"],
                      ["Eight months", "八か月", "hakkagetsu"],
                      ["Nine months", "九か月", "kyuukagetsu"],
                      ["Ten months", "十か月", "jukkagetsu"],
                    ].map((row, index) => (
                      <tr key={index} className="transition hover:bg-gray-50">
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className="border border-gray-200 px-4 py-4"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 3: Useful Month Sentences */}
            <div className="mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              <div className="border-b border-gray-200 bg-linear-to-r from-green-50 to-white px-6 py-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  Useful Month Sentences
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Simple sentences using month vocabulary.
                </p>
              </div>

              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[800px] border-collapse text-center">
                  <thead>
                    <tr className="bg-gray-100 text-sm text-gray-900">
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        English
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Japanese
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Romaji
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-base text-black font-jp">
                    {[
                      ["What month is it?", "何月ですか。", "Nan-gatsu desu ka?"],
                      ["It is January.", "一月です。", "Ichi-gatsu desu."],
                      [
                        "My birthday is in May.",
                        "私の誕生日は五月です。",
                        "Watashi no tanjoubi wa go-gatsu desu.",
                      ],
                      ["I will go next month.", "来月行きます。", "Raigetsu ikimasu."],
                      [
                        "I went last month.",
                        "先月行きました。",
                        "Sengetsu ikimashita.",
                      ],
                      [
                        "I study Japanese every month.",
                        "毎月日本語を勉強します。",
                        "Maitsuki nihongo o benkyou shimasu.",
                      ],
                    ].map((row, index) => (
                      <tr key={index} className="transition hover:bg-gray-50">
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className="border border-gray-200 px-4 py-4"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Note */}
            <div className="rounded-2xl bg-green-50 p-5 text-sm text-green-800">
              <p>
                <span className="font-semibold">Note:</span> Japanese months are made by
                adding 月 (gatsu) after the number. For example, 一月 means January,
                二月 means February, and 三月 means March. Some months have special
                readings, such as 四月 (shi-gatsu), 七月 (shichi-gatsu), and 九月
                (ku-gatsu).
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  }

  if (id === 'years') {
    return (
      <div className="bg-[#fafafc] min-h-screen pb-24 font-sans">
        {/* Header with Back Button */}
        <div className="max-w-7xl mx-auto px-4 pt-10 md:px-8 lg:px-16">
          <button 
            onClick={() => router.push('/dashboard/lessons/vocabulary')} 
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#202c5c]/5 text-[#202c5c] hover:bg-[#202c5c] hover:text-white transition-all font-bold text-sm border border-[#202c5c]/10 mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> <span>Back to Topics</span>
          </button>
        </div>

        <section className="w-full px-4 py-10 md:px-8 lg:px-16 -mt-10">
          <div className="mx-auto max-w-6xl">
            {/* Page Title */}
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Japanese Year Vocabulary
              </h2>
              <p className="mt-3 text-base text-gray-600 md:text-lg">
                Learn Japanese year words, year counting, and simple year sentences.
              </p>
            </div>

            {/* Table 1: Extra Year Words */}
            <div className="mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              <div className="border-b border-gray-200 bg-linear-to-r from-green-50 to-white px-6 py-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  Extra Year Words
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Common Japanese words related to years.
                </p>
              </div>

              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[650px] border-collapse text-center">
                  <thead>
                    <tr className="bg-gray-100 text-sm text-gray-900">
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        English
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Japanese
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Romaji
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-base text-black font-jp">
                    {[
                      ["Year", "年", "toshi / nen"],
                      ["This year", "今年", "kotoshi"],
                      ["Last year", "去年", "kyonen"],
                      ["Next year", "来年", "rainen"],
                      ["Every year", "毎年", "mainen / maitoshi"],
                      ["New year", "新年", "shinnen"],
                      ["School year", "学年", "gakunen"],
                      ["Age / Years old", "歳", "sai"],
                    ].map((row, index) => (
                      <tr key={index} className="transition hover:bg-gray-50">
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className="border border-gray-200 px-4 py-4"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 2: Counting Years */}
            <div className="mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              <div className="border-b border-gray-200 bg-linear-to-r from-green-50 to-white px-6 py-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  Counting Years
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  How to count one year, two years, three years, and more in Japanese.
                </p>
              </div>

              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[650px] border-collapse text-center">
                  <thead>
                    <tr className="bg-gray-100 text-sm text-gray-900">
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        English
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Japanese
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Romaji
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-base text-black font-jp">
                    {[
                      ["One year", "一年", "ichi-nen"],
                      ["Two years", "二年", "ni-nen"],
                      ["Three years", "三年", "san-nen"],
                      ["Four years", "四年", "yo-nen"],
                      ["Five years", "五年", "go-nen"],
                      ["Six years", "六年", "roku-nen"],
                      ["Seven years", "七年", "nana-nen"],
                      ["Eight years", "八年", "hachi-nen"],
                      ["Nine years", "九年", "kyuu-nen"],
                      ["Ten years", "十年", "juu-nen"],
                    ].map((row, index) => (
                      <tr key={index} className="transition hover:bg-gray-50">
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className="border border-gray-200 px-4 py-4"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 3: Useful Year Sentences */}
            <div className="mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              <div className="border-b border-gray-200 bg-linear-to-r from-green-50 to-white px-6 py-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  Useful Year Sentences
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Simple sentences using year vocabulary.
                </p>
              </div>

              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[800px] border-collapse text-center">
                  <thead>
                    <tr className="bg-gray-100 text-sm text-gray-900">
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        English
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Japanese
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Romaji
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-base text-black font-jp">
                    {[
                      ["What year is it?", "何年ですか。", "Nan-nen desu ka?"],
                      ["It is 2026.", "二千二十六年です。", "Nisen nijuu roku-nen desu."],
                      [
                        "This year is 2026.",
                        "今年は二千二十六年です。",
                        "Kotoshi wa nisen nijuu roku-nen desu.",
                      ],
                      ["I will go next year.", "来年行きます。", "Rainen ikimasu."],
                      ["I went last year.", "去年行きました。", "Kyonen ikimashita."],
                      [
                        "I study Japanese every year.",
                        "毎年日本語を勉強します。",
                        "Maitoshi nihongo o benkyou shimasu.",
                      ],
                    ].map((row, index) => (
                      <tr key={index} className="transition hover:bg-gray-50">
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className="border border-gray-200 px-4 py-4"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Note */}
            <div className="rounded-2xl bg-green-50 p-5 text-sm text-green-800">
              <p>
                <span className="font-semibold">Note:</span> Japanese years are usually
                made by adding 年 (nen) after the number. For example, 一年 means one
                year, 二年 means two years, and 三年 means three years. Common words
                include 今年 for this year, 去年 for last year, and 来年 for next year.
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  }

  if (id === 'dates') {
    return (
      <div className="bg-[#fafafc] min-h-screen pb-24 font-sans">
        {/* Header with Back Button */}
        <div className="max-w-7xl mx-auto px-4 pt-10 md:px-8 lg:px-16">
          <button 
            onClick={() => router.push('/dashboard/lessons/vocabulary')} 
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#202c5c]/5 text-[#202c5c] hover:bg-[#202c5c] hover:text-white transition-all font-bold text-sm border border-[#202c5c]/10 mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> <span>Back to Topics</span>
          </button>
        </div>

        <section className="w-full px-4 py-10 md:px-8 lg:px-16 -mt-10">
          <div className="mx-auto max-w-6xl">
            {/* Page Title */}
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Days and Week Vocabulary in Japanese
              </h2>
              <p className="mt-3 text-base text-gray-600 md:text-lg">
                Learn days of the week, extra day words, and week-related vocabulary in Japanese.
              </p>
            </div>

            {/* Table 1: Days of the Week */}
            <div className="mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              <div className="border-b border-gray-200 bg-linear-to-r from-green-50 to-white px-6 py-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  Days of the Week in Japanese
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Common weekday names used in daily Japanese conversations.
                </p>
              </div>

              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[750px] border-collapse text-center">
                  <thead>
                    <tr className="bg-gray-100 text-sm text-gray-900">
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        English
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Hiragana
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Kanji
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Romaji
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-base text-black font-jp">
                    {[
                      ["Monday", "げつようび", "月曜日", "getsuyoobi"],
                      ["Tuesday", "かようび", "火曜日", "kayoobi"],
                      ["Wednesday", "すいようび", "水曜日", "suiyoobi"],
                      ["Thursday", "もくようび", "木曜日", "mokuyoobi"],
                      ["Friday", "きんようび", "金曜日", "kinyoobi"],
                      ["Saturday", "どようび", "土曜日", "doyoobi"],
                      ["Sunday", "にちようび", "日曜日", "nichiyoobi"],
                    ].map((row, index) => (
                      <tr key={index} className="transition hover:bg-gray-50">
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className="border border-gray-200 px-4 py-4"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 2: Extra Day Words */}
            <div className="mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              <div className="border-b border-gray-200 bg-linear-to-r from-green-50 to-white px-6 py-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  Extra Day Words
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Useful Japanese words for today, yesterday, tomorrow, and related days.
                </p>
              </div>

              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[750px] border-collapse text-center">
                  <thead>
                    <tr className="bg-gray-100 text-sm text-gray-900">
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        English
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Hiragana
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Kanji
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Romaji
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-base text-black font-jp">
                    {[
                      ["Today", "きょう", "今日", "kyoo"],
                      ["Yesterday", "きのう", "昨日", "kinoo"],
                      ["The day before yesterday", "おととい", "一昨日", "ototoi"],
                      ["Tomorrow", "あした", "明日", "ashita"],
                      ["The day after tomorrow", "あさって", "明後日", "asatte"],
                      ["What day of the week?", "なんようび", "何曜日", "nan'yoobi"],
                    ].map((row, index) => (
                      <tr key={index} className="transition hover:bg-gray-50">
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className="border border-gray-200 px-4 py-4"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 3: Week Words */}
            <div className="mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              <div className="border-b border-gray-200 bg-linear-to-r from-green-50 to-white px-6 py-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  Week Words
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Learn Japanese vocabulary for last week, this week, next week, and weekend.
                </p>
              </div>

              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[750px] border-collapse text-center">
                  <thead>
                    <tr className="bg-gray-100 text-sm text-gray-900">
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        English
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Hiragana
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Kanji
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Romaji
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-base text-black font-jp">
                    {[
                      ["Last week", "せんしゅう", "先週", "senshuu"],
                      ["This week", "こんしゅう", "今週", "konshuu"],
                      ["Next week", "らいしゅう", "来週", "raishuu"],
                      ["Weekend", "しゅうまつ", "週末", "shuumatsu"],
                    ].map((row, index) => (
                      <tr key={index} className="transition hover:bg-gray-50">
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className="border border-gray-200 px-4 py-4"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 1: Dates in Japanese */}
            <div className="mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              <div className="border-b border-gray-200 bg-linear-to-r from-green-50 to-white px-6 py-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  Dates in Japanese
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Learn how to say the 1st day to the 31st day in Japanese.
                </p>
              </div>

              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[650px] border-collapse text-center">
                  <thead>
                    <tr className="bg-gray-100 text-sm text-gray-900">
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        English
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Japanese
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Romaji
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-base text-black font-jp">
                    {[
                      ["1st day", "一日", "tsuitachi"],
                      ["2nd day", "二日", "futsuka"],
                      ["3rd day", "三日", "mikka"],
                      ["4th day", "四日", "yokka"],
                      ["5th day", "五日", "itsuka"],
                      ["6th day", "六日", "muika"],
                      ["7th day", "七日", "nanoka"],
                      ["8th day", "八日", "youka"],
                      ["9th day", "九日", "kokonoka"],
                      ["10th day", "十日", "tooka"],
                      ["11th day", "十一日", "juuichi-nichi"],
                      ["12th day", "十二日", "juuni-nichi"],
                      ["13th day", "十三日", "juusan-nichi"],
                      ["14th day", "十四日", "juuyokka"],
                      ["15th day", "十五日", "juugo-nichi"],
                      ["16th day", "十六日", "juuroku-nichi"],
                      ["17th day", "十七日", "juushichi-nichi / juunana-nichi"],
                      ["18th day", "十八日", "juuhachi-nichi"],
                      ["19th day", "十九日", "juuku-nichi"],
                      ["20th day", "二十日", "hatsuka"],
                      ["21st day", "二十一日", "nijuuichi-nichi"],
                      ["22nd day", "二十二日", "nijuuni-nichi"],
                      ["23rd day", "二十三日", "nijuusan-nichi"],
                      ["24th day", "二十四日", "nijuuyokka"],
                      ["25th day", "二十五日", "nijuugo-nichi"],
                      ["26th day", "二十六日", "nijuuroku-nichi"],
                      ["27th day", "二十七日", "nijuushichi-nichi / nijuunana-nichi"],
                      ["28th day", "二十八日", "nijuuhachi-nichi"],
                      ["29th day", "二十九日", "nijuuku-nichi"],
                      ["30th day", "三十日", "sanjuu-nichi"],
                      ["31st day", "三十一日", "sanjuuichi-nichi"],
                    ].map((row, index) => (
                      <tr key={index} className="transition hover:bg-gray-50">
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className="border border-gray-200 px-4 py-4"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 2: Extra Date Words */}
            <div className="mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              <div className="border-b border-gray-200 bg-linear-to-r from-green-50 to-white px-6 py-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  Extra Date Words
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Common Japanese words related to dates.
                </p>
              </div>

              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[650px] border-collapse text-center">
                  <thead>
                    <tr className="bg-gray-100 text-sm text-gray-900">
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        English
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Japanese
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Romaji
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-base text-black font-jp">
                    {[
                      ["Date / Day of month", "日付", "hizuke"],
                      ["Day", "日", "hi / nichi"],
                      ["Today", "今日", "kyou"],
                      ["Tomorrow", "明日", "ashita"],
                      ["Yesterday", "昨日", "kinou"],
                      ["This week", "今週", "konshuu"],
                      ["Last week", "先週", "senshuu"],
                      ["Next week", "来週", "raishuu"],
                      ["This month", "今月", "kongetsu"],
                      ["Last month", "先月", "sengetsu"],
                      ["Next month", "来月", "raigetsu"],
                      ["Birthday", "誕生日", "tanjoubi"],
                    ].map((row, index) => (
                      <tr key={index} className="transition hover:bg-gray-50">
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className="border border-gray-200 px-4 py-4"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 3: Useful Date Sentences */}
            <div className="mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              <div className="border-b border-gray-200 bg-linear-to-r from-green-50 to-white px-6 py-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  Useful Date Sentences
                </h3>
                <p className="mt-1 text-sm text-green-800">
                  Simple sentences using date vocabulary.
                </p>
              </div>

              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[800px] border-collapse text-center">
                  <thead>
                    <tr className="bg-gray-100 text-sm text-gray-900">
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        English
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Japanese
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Romaji
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-base text-black font-jp">
                    {[
                      [
                        "What is today’s date?",
                        "今日は何日ですか。",
                        "Kyou wa nan-nichi desu ka?",
                      ],
                      ["Today is the 1st.", "今日は一日です。", "Kyou wa tsuitachi desu."],
                      ["Today is the 10th.", "今日は十日です。", "Kyou wa tooka desu."],
                      ["Today is the 20th.", "今日は二十日です。", "Kyou wa hatsuka desu."],
                      [
                        "My birthday is May 5th.",
                        "私の誕生日は五月五日です。",
                        "Watashi no tanjoubi wa go-gatsu itsuka desu.",
                      ],
                      [
                        "The test is on July 14th.",
                        "テストは七月十四日です。",
                        "Tesuto wa shichi-gatsu juuyokka desu.",
                      ],
                    ].map((row, index) => (
                      <tr key={index} className="transition hover:bg-gray-50">
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className="border border-gray-200 px-4 py-4"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Note */}
            <div className="rounded-2xl bg-green-50 p-5 text-sm text-green-800">
              <p>
                <span className="font-semibold">Note:</span> Japanese dates use the day
                number + 日 (nichi), but many dates from 1 to 10 have special readings.
                For example, 一日 is tsuitachi, 二日 is futsuka, and 十日 is tooka. The
                14th, 20th, and 24th also have special readings: juuyokka, hatsuka, and
                nijuuyokka.
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  }

  if (id === 'food-drinks') {
    return (
      <div className="bg-[#fafafc] min-h-screen pb-24 font-sans">
        {/* Header with Back Button */}
        <div className="max-w-7xl mx-auto px-4 pt-10 md:px-8 lg:px-16">
          <button 
            onClick={() => router.push('/dashboard/lessons/vocabulary')} 
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#202c5c]/5 text-[#202c5c] hover:bg-[#202c5c] hover:text-white transition-all font-bold text-sm border border-[#202c5c]/10 mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> <span>Back to Topics</span>
          </button>
        </div>

        <section className="w-full px-4 py-10 md:px-8 lg:px-16 -mt-10">
          <div className="mx-auto max-w-6xl">
            {/* Page Title */}
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Japanese Food Vocabulary
              </h2>
              <p className="mt-3 text-base text-gray-600 md:text-lg">
                Learn taste words, useful food sentences, fruits, food items, and meat
                items in Japanese.
              </p>
            </div>

            {/* Table 1: Taste Words */}
            <div className="mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              <div className="border-b border-gray-200 bg-linear-to-r from-green-50 to-white px-6 py-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  Taste Words
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Common Japanese words used to describe taste.
                </p>
              </div>

              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[650px] border-collapse text-center">
                  <thead>
                    <tr className="bg-gray-100 text-sm text-gray-900">
                      <th className="border border-gray-200 px-4 py-4 font-bold">English</th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">Japanese</th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">Romaji</th>
                    </tr>
                  </thead>

                  <tbody className="text-base text-black font-jp">
                    {[
                      ["Delicious", "おいしい", "oishii"],
                      ["Sweet", "甘い", "amai"],
                      ["Spicy", "辛い", "karai"],
                      ["Salty", "しょっぱい", "shoppai"],
                      ["Sour", "酸っぱい", "suppai"],
                      ["Bitter", "苦い", "nigai"],
                      ["Hot", "熱い", "atsui"],
                      ["Cold", "冷たい", "tsumetai"],
                    ].map((row, index) => (
                      <tr key={index} className="transition hover:bg-gray-50">
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className="border border-gray-200 px-4 py-4">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 2: Useful Food Sentences */}
            <div className="mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              <div className="border-b border-gray-200 bg-linear-to-r from-green-50 to-white px-6 py-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  Useful Food Sentences
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Simple Japanese sentences for food and drinks.
                </p>
              </div>

              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[800px] border-collapse text-center">
                  <thead>
                    <tr className="bg-gray-100 text-sm text-gray-900">
                      <th className="border border-gray-200 px-4 py-4 font-bold">English</th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">Japanese</th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">Romaji</th>
                    </tr>
                  </thead>

                  <tbody className="text-base text-black font-jp">
                    {[
                      ["I eat rice.", "ご飯を食べます。", "Gohan o tabemasu."],
                      ["I drink water.", "水を飲みます。", "Mizu o nomimasu."],
                      ["This is delicious.", "これはおいしいです。", "Kore wa oishii desu."],
                      ["I like sushi.", "寿司が好きです。", "Sushi ga suki desu."],
                      ["Please give me water.", "水をください。", "Mizu o kudasai."],
                      [
                        "What do you want to eat?",
                        "何を食べたいですか。",
                        "Nani o tabetai desu ka?",
                      ],
                      [
                        "What do you want to drink?",
                        "何を飲みたいですか。",
                        "Nani o nomitai desu ka?",
                      ],
                    ].map((row, index) => (
                      <tr key={index} className="transition hover:bg-gray-50">
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className="border border-gray-200 px-4 py-4">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 3: Fruits in Japanese */}
            <div className="mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              <div className="border-b border-gray-200 bg-linear-to-r from-green-50 to-white px-6 py-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  Fruits in Japanese
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  20 common fruit names in Japanese.
                </p>
              </div>

              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[650px] border-collapse text-center">
                  <thead>
                    <tr className="bg-gray-100 text-sm text-gray-900">
                      <th className="border border-gray-200 px-4 py-4 font-bold">English</th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">Japanese</th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">Romaji</th>
                    </tr>
                  </thead>

                  <tbody className="text-base text-black font-jp">
                    {[
                      ["Apple", "りんご", "ringo"],
                      ["Banana", "バナナ", "banana"],
                      ["Orange", "オレンジ", "orenji"],
                      ["Grapes", "ぶどう", "budou"],
                      ["Strawberry", "いちご", "ichigo"],
                      ["Watermelon", "すいか", "suika"],
                      ["Melon", "メロン", "meron"],
                      ["Peach", "もも", "momo"],
                      ["Pear", "なし", "nashi"],
                      ["Pineapple", "パイナップル", "painappuru"],
                      ["Mango", "マンゴー", "mangoo"],
                      ["Lemon", "レモン", "remon"],
                      ["Cherry", "さくらんぼ", "sakuranbo"],
                      ["Kiwi", "キウイ", "kiui"],
                      ["Coconut", "ココナッツ", "kokonattsu"],
                      ["Papaya", "パパイヤ", "papaiya"],
                      ["Guava", "グアバ", "guaba"],
                      ["Avocado", "アボカド", "abokado"],
                      ["Pomegranate", "ザクロ", "zakuro"],
                      ["Plum", "プラム", "puramu"],
                    ].map((row, index) => (
                      <tr key={index} className="transition hover:bg-gray-50">
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className="border border-gray-200 px-4 py-4">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 4: Food Items in Japanese */}
            <div className="mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              <div className="border-b border-gray-200 bg-linear-to-r from-green-50 to-white px-6 py-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  Food Items in Japanese
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  20 common food items in Japanese.
                </p>
              </div>

              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[650px] border-collapse text-center">
                  <thead>
                    <tr className="bg-gray-100 text-sm text-gray-900">
                      <th className="border border-gray-200 px-4 py-4 font-bold">English</th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">Japanese</th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">Romaji</th>
                    </tr>
                  </thead>

                  <tbody className="text-base text-black font-jp">
                    {[
                      ["Rice / Meal", "ご飯", "gohan"],
                      ["Bread", "パン", "pan"],
                      ["Noodles", "麺", "men"],
                      ["Ramen", "ラーメン", "raamen"],
                      ["Sushi", "寿司", "sushi"],
                      ["Curry rice", "カレーライス", "karee raisu"],
                      ["Fried rice", "チャーハン", "chaahan"],
                      ["Soup", "スープ", "suupu"],
                      ["Egg", "卵", "tamago"],
                      ["Fish", "魚", "sakana"],
                      ["Meat", "肉", "niku"],
                      ["Chicken", "鶏肉", "toriniku"],
                      ["Beef", "牛肉", "gyuuniku"],
                      ["Pork", "豚肉", "butaniku"],
                      ["Vegetable", "野菜", "yasai"],
                      ["Salad", "サラダ", "sarada"],
                      ["Sandwich", "サンドイッチ", "sandoicchi"],
                      ["Cake", "ケーキ", "keeki"],
                      ["Ice cream", "アイスクリーム", "aisukuriimu"],
                      ["Pizza", "ピザ", "piza"],
                    ].map((row, index) => (
                      <tr key={index} className="transition hover:bg-gray-50">
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className="border border-gray-200 px-4 py-4">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 5: Meat Items in Japanese */}
            <div className="mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              <div className="border-b border-gray-200 bg-linear-to-r from-green-50 to-white px-6 py-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  Meat Items in Japanese
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  20 common meat items in Japanese.
                </p>
              </div>

              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[650px] border-collapse text-center">
                  <thead>
                    <tr className="bg-gray-100 text-sm text-gray-900">
                      <th className="border border-gray-200 px-4 py-4 font-bold">English</th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">Japanese</th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">Romaji</th>
                    </tr>
                  </thead>

                  <tbody className="text-base text-black font-jp">
                    {[
                      ["Meat", "肉", "niku"],
                      ["Chicken", "鶏肉", "toriniku"],
                      ["Beef", "牛肉", "gyuuniku"],
                      ["Pork", "豚肉", "butaniku"],
                      ["Mutton", "羊肉", "youniku"],
                      ["Lamb", "ラム肉", "ramu niku"],
                      ["Duck meat", "鴨肉", "kamo niku"],
                      ["Turkey", "七面鳥の肉", "shichimenchou no niku"],
                      ["Minced meat", "ひき肉", "hikiniku"],
                      ["Bacon", "ベーコン", "beekon"],
                      ["Ham", "ハム", "hamu"],
                      ["Sausage", "ソーセージ", "sooseeji"],
                      ["Steak", "ステーキ", "suteeki"],
                      ["Chicken breast", "鶏むね肉", "tori mune niku"],
                      ["Chicken thigh", "鶏もも肉", "tori momo niku"],
                      ["Chicken wing", "手羽先", "tebasaki"],
                      ["Liver", "レバー", "rebaa"],
                      ["Ribs", "リブ", "ribu"],
                      ["Meatball", "ミートボール", "miito booru"],
                      ["Hamburger steak", "ハンバーグ", "hanbaagu"],
                    ].map((row, index) => (
                      <tr key={index} className="transition hover:bg-gray-50">
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className="border border-gray-200 px-4 py-4">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Note */}
            <div className="rounded-2xl bg-green-50 p-5 text-sm text-green-800">
              <p>
                <span className="font-semibold">Note:</span> 食べ物 (tabemono) means
                food, 果物 (kudamono) means fruit, and 肉 (niku) means meat. To say
                “I eat,” use 食べます (tabemasu).
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  }

  if (id === 'places') {
    return (
      <div className="bg-[#fafafc] min-h-screen pb-24 font-sans">
        {/* Header with Back Button */}
        <div className="max-w-7xl mx-auto px-4 pt-10 md:px-8 lg:px-16">
          <button 
            onClick={() => router.push('/dashboard/lessons/vocabulary')} 
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#202c5c]/5 text-[#202c5c] hover:bg-[#202c5c] hover:text-white transition-all font-bold text-sm border border-[#202c5c]/10 mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> <span>Back to Topics</span>
          </button>
        </div>

        <section className="w-full px-4 py-10 md:px-8 lg:px-16 -mt-10">
          <div className="mx-auto max-w-6xl">
            {/* Page Title */}
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Places in Japanese
              </h2>
              <p className="mt-3 text-base text-gray-600 md:text-lg">
                Learn common places, travel locations, and useful place sentences in Japanese.
              </p>
            </div>

            {/* Table 1: Places in Japanese */}
            <div className="mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              <div className="border-b border-gray-200 bg-linear-to-r from-green-50 to-white px-6 py-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  Places in Japanese
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Common place names used in daily Japanese conversations.
                </p>
              </div>

              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[650px] border-collapse text-center">
                  <thead>
                    <tr className="bg-gray-100 text-sm text-gray-900">
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        English
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Japanese
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Romaji
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-base text-black font-jp">
                    {[
                      ["Place", "場所", "basho"],
                      ["Home / House", "家", "ie"],
                      ["School", "学校", "gakkou"],
                      ["University", "大学", "daigaku"],
                      ["Classroom", "教室", "kyoushitsu"],
                      ["Library", "図書館", "toshokan"],
                      ["Hospital", "病院", "byouin"],
                      ["Bank", "銀行", "ginkou"],
                      ["Post office", "郵便局", "yuubinkyoku"],
                      ["Police station", "警察署", "keisatsusho"],
                      ["Restaurant", "レストラン", "resutoran"],
                      ["Shop / Store", "店", "mise"],
                      ["Supermarket", "スーパー", "suupaa"],
                      ["Convenience store", "コンビニ", "konbini"],
                      ["Market", "市場", "ichiba"],
                      ["Hotel", "ホテル", "hoteru"],
                      ["Park", "公園", "kouen"],
                      ["Station", "駅", "eki"],
                      ["Bus stop", "バス停", "basutei"],
                      ["Airport", "空港", "kuukou"],
                    ].map((row, index) => (
                      <tr key={index} className="transition hover:bg-gray-50">
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className="border border-gray-200 px-4 py-4"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 2: City / Travel Places */}
            <div className="mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              <div className="border-b border-gray-200 bg-linear-to-r from-green-50 to-white px-6 py-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  City / Travel Places
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Useful Japanese words for city and travel locations.
                </p>
              </div>

              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[650px] border-collapse text-center">
                  <thead>
                    <tr className="bg-gray-100 text-sm text-gray-900">
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        English
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Japanese
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Romaji
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-base text-black font-jp">
                    {[
                      ["City / Town", "町", "machi"],
                      ["City", "都市", "toshi"],
                      ["Street / Road", "道", "michi"],
                      ["Bridge", "橋", "hashi"],
                      ["Temple", "お寺", "otera"],
                      ["Shrine", "神社", "jinja"],
                      ["Museum", "博物館", "hakubutsukan"],
                      ["Cinema", "映画館", "eigakan"],
                      ["Zoo", "動物園", "doubutsuen"],
                      ["Beach", "海辺 / ビーチ", "umibe / biichi"],
                      ["Mountain", "山", "yama"],
                      ["River", "川", "kawa"],
                      ["Sea", "海", "umi"],
                      ["Garden", "庭", "niwa"],
                      ["Office", "事務所", "jimusho"],
                    ].map((row, index) => (
                      <tr key={index} className="transition hover:bg-gray-50">
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className="border border-gray-200 px-4 py-4"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 3: Useful Place Sentences */}
            <div className="mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              <div className="border-b border-gray-200 bg-linear-to-r from-green-50 to-white px-6 py-5">
                <h3 className="text-xl font-semibold text-gray-900">
                  Useful Place Sentences
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Simple Japanese sentences for asking and talking about places.
                </p>
              </div>

              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[800px] border-collapse text-center">
                  <thead>
                    <tr className="bg-gray-100 text-sm text-gray-900">
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        English
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Japanese
                      </th>
                      <th className="border border-gray-200 px-4 py-4 font-bold">
                        Romaji
                      </th>
                    </tr>
                  </thead>

                  <tbody className="text-base text-black font-jp">
                    {[
                      ["Where is the station?", "駅はどこですか。", "Eki wa doko desu ka?"],
                      ["Where is the hospital?", "病院はどこですか。", "Byouin wa doko desu ka?"],
                      ["I am going to school.", "学校へ行きます。", "Gakkou e ikimasu."],
                      ["I am at home.", "家にいます。", "Ie ni imasu."],
                      [
                        "The restaurant is near the station.",
                        "レストランは駅の近くです。",
                        "Resutoran wa eki no chikaku desu.",
                      ],
                      [
                        "The bank is next to the post office.",
                        "銀行は郵便局の隣です。",
                        "Ginkou wa yuubinkyoku no tonari desu.",
                      ],
                    ].map((row, index) => (
                      <tr key={index} className="transition hover:bg-gray-50">
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className="border border-gray-200 px-4 py-4"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Note */}
            <div className="rounded-2xl bg-green-50 p-5 text-sm text-green-800">
              <p>
                <span className="font-semibold">Note:</span> 場所 (basho) means place.
                To ask “Where is it?”, use どこですか (doko desu ka). For example,
                駅はどこですか means “Where is the station?”
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  }

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fafafc] flex-col relative w-full overflow-hidden">
         <div className="absolute inset-0 bg-linear-to-br from-[#202c5c]/10 to-[#c64161]/10 -z-10"></div>
         <div className="text-center p-8 bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl border border-white max-w-md w-full">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-gray-400" />
            </div>
            <h1 className="text-3xl font-black text-[#202c5c] mb-3 tracking-tight">Module Coming Soon</h1>
            <p className="text-gray-500 mb-8 leading-relaxed font-medium">We're still crafting the vocabulary list for <span className="text-[#c64161] font-bold">{id || 'this topic'}</span>. Please check back later.</p>
            <button onClick={() => router.push('/dashboard/lessons/vocabulary')} className="w-full px-6 py-4 bg-[#202c5c] text-white rounded-xl font-bold hover:bg-[#1b2550] hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm uppercase tracking-wider">
                Back to Library
            </button>
         </div>
      </div>
    )
  }

  return (
    <div className="bg-[#fafafc] min-h-screen pb-24">
      {/* Hero Header */}
      <div className="relative h-88 md:h-96 w-full overflow-hidden rounded-b-[40px] shadow-sm">
         <div className="absolute inset-0 bg-linear-to-t from-[#1a1b26] via-black/40 to-black/10 z-10 transition-colors"></div>
         <img src={content.headerImage} alt={content.title} className="w-full h-full object-cover object-center absolute inset-0 z-0 scale-105" />
         
         <div className="absolute inset-0 z-20 max-w-6xl mx-auto px-6 md:px-12 flex flex-col justify-end pb-16">
            <button 
              onClick={() => router.push('/dashboard/lessons/vocabulary')} 
              className="absolute top-10 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-[#202c5c] transition-all font-bold text-sm border border-white/20 hover:border-white shadow-lg shadow-black/10"
            >
              <ArrowLeft className="w-4 h-4" /> <span>Topics</span>
            </button>
            <div className="transform translate-y-4">
              <span className={`inline-block px-4 py-1.5 backdrop-blur-md text-white/90 text-[10px] font-black tracking-[0.2em] uppercase rounded-lg mb-4 shadow-sm border border-white/20`} style={{backgroundColor: 'rgba(198, 65, 97, 0.4)'}}>
                {content.badge}
              </span>
              <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-6 mb-2">
                 <h1 className="text-5xl md:text-7xl font-black text-white font-sans tracking-tight leading-none drop-shadow-md">
                   {content.title}
                 </h1>
                 <span className="text-4xl md:text-6xl font-black text-white/60 font-jp tracking-tight mb-0.5 mix-blend-overlay">
                   {content.kanji}
                 </span>
              </div>
              <p className="text-white/80 max-w-2xl text-base md:text-lg leading-relaxed mt-4 font-medium hidden sm:block">
                {content.description}
              </p>
            </div>
         </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 -mt-8 relative z-30">
         {/* Stats Bar */}
         <div className="bg-white rounded-3xl shadow-xl shadow-[#202c5c]/5 p-6 md:p-8 flex flex-wrap items-center justify-between gap-6 border border-gray-100 mb-12 backdrop-blur-xl">
            <div className="flex items-center gap-8 md:gap-16 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
               <div>
                  <p className="text-[11px] uppercase tracking-[0.15em] font-bold text-gray-400 mb-2">Total Words</p>
                  <p className="text-3xl font-black text-[#202c5c]">{content.items.length}</p>
               </div>
               <div className="w-px h-12 bg-gray-100"></div>
               <div>
                  <p className="text-[11px] uppercase tracking-[0.15em] font-bold text-gray-400 mb-2">Topic</p>
                  <p className={`text-xl font-bold ${content.colorText} wrap-break-word`}>{content.title}</p>
               </div>
            </div>
            <button className={`${content.bgColor} hover:opacity-80 text-[#c64161] px-8 py-4 rounded-xl font-bold transition-all text-sm uppercase tracking-widest border border-[#c64161]/20 w-full md:w-auto shadow-sm`}>
               Practice Flashcards
            </button>
         </div>

         {/* Vocabulary Table Layout */}
         <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-12">
            <div className="overflow-x-auto">
               {content.isTable ? (
                  <table className="w-full text-center border-collapse">
                     <thead>
                        <tr className="bg-[#202c5c] text-white border-b border-[#2a3b7c]">
                           {content.tableHeaders.map((header: any, i: number) => (
                              <th key={i} className="px-6 py-5 font-bold text-sm uppercase tracking-wider">
                                 {header.label} {header.subLabel && <span className="block text-[10px] opacity-70 mt-1 font-jp">{header.subLabel}</span>}
                              </th>
                           ))}
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-gray-100">
                        {content.rows.map((row: string[], rowIndex: number) => (
                           <tr 
                              key={rowIndex} 
                              className={`hover:bg-[#fff5f7] transition-colors group ${rowIndex === content.rows.length - 1 ? 'bg-green-50/50' : ''}`}
                           >
                              {row.map((cell, cellIndex) => (
                                 <td key={cellIndex} className="px-6 py-5">
                                    <span className={`${cellIndex === 0 ? 'font-black text-[#202c5c]' : 'text-gray-700 font-jp'} ${rowIndex === content.rows.length - 1 && cellIndex !== 0 ? 'text-green-700 font-bold' : ''}`}>
                                       {cell}
                                    </span>
                                 </td>
                              ))}
                           </tr>
                        ))}
                     </tbody>
                  </table>
               ) : (
                  <table className="w-full text-left border-collapse">
                     <thead>
                        <tr className="bg-[#202c5c] text-white border-b border-[#2a3b7c]">
                           <th className="px-6 py-5 font-bold text-sm uppercase tracking-wider">No.</th>
                           <th className="px-6 py-5 font-bold text-sm uppercase tracking-wider">Romaji</th>
                           <th className="px-6 py-5 font-bold text-sm uppercase tracking-wider">Hiragana / Kanji</th>
                           <th className="px-6 py-5 font-bold text-sm uppercase tracking-wider">Meaning</th>
                           <th className="px-6 py-5 font-bold text-sm uppercase tracking-wider text-center w-24">Audio</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-gray-100">
                        {content.items.map((item: any, index: number) => (
                           <tr key={index} className="hover:bg-[#fff5f7] transition-colors group">
                              <td className="px-6 py-5">
                                 <span className="font-bold text-gray-500">{index + 1}</span>
                              </td>
                              <td className="px-6 py-5">
                                 <span className={`${content.colorText} bg-[#fff5f7] px-3 py-1.5 rounded-lg text-sm font-bold tracking-wider font-jp uppercase border border-[#c64161]/10`}>{item.romaji}</span>
                              </td>
                              <td className="px-6 py-5">
                                 <span className="text-2xl font-black font-jp text-[#202c5c]">{item.kanji}</span>
                              </td>
                              <td className="px-6 py-5">
                                 <div>
                                    <span className="font-black text-gray-800 text-lg block mb-1">{item.english}</span>
                                    <span className="text-gray-500 font-medium text-sm">{item.sinhala}</span>
                                    {item.notes && (
                                       <div className="mt-2 flex items-start gap-1.5 text-xs text-gray-500 bg-gray-50 py-1.5 px-3 rounded-md w-fit">
                                          <Info className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                                          <span>{item.notes}</span>
                                       </div>
                                    )}
                                 </div>
                              </td>
                              <td className="px-6 py-5 text-center">
                                 <button className="text-gray-300 hover:text-[#c64161] hover:bg-[#fff5f7] w-10 h-10 rounded-full transition-all inline-flex items-center justify-center border border-transparent shadow-sm hover:shadow group-hover:border-[#c64161]/20">
                                    <Volume2 className="w-4 h-4" />
                                 </button>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               )}
            </div>
         </div>
      </div>
    </div>
  )
}
