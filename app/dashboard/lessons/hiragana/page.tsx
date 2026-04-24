'use client'

import React from 'react'

const gojuon = [
  { row: 'a-row', cells: [{v:'あ',k:'a'}, {v:'い',k:'i'}, {v:'う',k:'u'}, {v:'え',k:'e'}, {v:'お',k:'o'}] },
  { row: 'ka-row', cells: [{v:'か',k:'ka'}, {v:'き',k:'ki'}, {v:'く',k:'ku'}, {v:'け',k:'ke'}, {v:'こ',k:'ko'}] },
  { row: 'sa-row', cells: [{v:'さ',k:'sa'}, {v:'し',k:'shi'}, {v:'す',k:'su'}, {v:'せ',k:'se'}, {v:'そ',k:'so'}] },
  { row: 'ta-row', cells: [{v:'た',k:'ta'}, {v:'ち',k:'chi'}, {v:'つ',k:'tsu'}, {v:'て',k:'te'}, {v:'と',k:'to'}] },
  { row: 'na-row', cells: [{v:'な',k:'na'}, {v:'に',k:'ni'}, {v:'ぬ',k:'nu'}, {v:'ね',k:'ne'}, {v:'の',k:'no'}] },
  { row: 'ha-row', cells: [{v:'は',k:'ha'}, {v:'ひ',k:'hi'}, {v:'ふ',k:'fu'}, {v:'へ',k:'he'}, {v:'ほ',k:'ho'}] },
  { row: 'ma-row', cells: [{v:'ま',k:'ma'}, {v:'み',k:'mi'}, {v:'む',k:'mu'}, {v:'め',k:'me'}, {v:'も',k:'mo'}] },
  { row: 'ya-row', cells: [{v:'や',k:'ya'}, null, {v:'ゆ',k:'yu'}, null, {v:'よ',k:'yo'}] },
  { row: 'ra-row', cells: [{v:'ら',k:'ra'}, {v:'り',k:'ri'}, {v:'る',k:'ru'}, {v:'れ',k:'re'}, {v:'ろ',k:'ro'}] },
  { row: 'wa-row', cells: [{v:'わ',k:'wa'}, null, null, null, {v:'を',k:'o'}] },
]

const dakuon = [
  { row: 'ga-row', cells: [{v:'が',k:'ga'}, {v:'ぎ',k:'gi'}, {v:'ぐ',k:'gu'}, {v:'げ',k:'ge'}, {v:'ご',k:'go'}] },
  { row: 'za-row', cells: [{v:'ざ',k:'za'}, {v:'じ',k:'ji'}, {v:'ず',k:'zu'}, {v:'ぜ',k:'ze'}, {v:'ぞ',k:'zo'}] },
  { row: 'da-row', cells: [{v:'だ',k:'da'}, {v:'ぢ',k:'ji'}, {v:'づ',k:'zu'}, {v:'で',k:'de'}, {v:'ど',k:'do'}] },
  { row: 'ba-row', cells: [{v:'ば',k:'ba'}, {v:'び',k:'bi'}, {v:'ぶ',k:'bu'}, {v:'べ',k:'be'}, {v:'ぼ',k:'bo'}] },
]

const handakuon = [
  { row: 'pa-row', cells: [{v:'ぱ',k:'pa'}, {v:'ぴ',k:'pi'}, {v:'ぷ',k:'pu'}, {v:'ぺ',k:'pe'}, {v:'ぽ',k:'po'}] },
]

const yoon1 = [
  [{v:'きゃ',k:'kya'}, {v:'きゅ',k:'kyu'}, {v:'きょ',k:'kyo'}],
  [{v:'しゃ',k:'sha'}, {v:'しゅ',k:'shu'}, {v:'しょ',k:'sho'}],
  [{v:'ちゃ',k:'cha'}, {v:'ちゅ',k:'chu'}, {v:'ちょ',k:'cho'}],
  [{v:'にゃ',k:'nya'}, {v:'にゅ',k:'nyu'}, {v:'にょ',k:'nyo'}],
  [{v:'ひゃ',k:'hya'}, {v:'ひゅ',k:'hyu'}, {v:'ひょ',k:'hyo'}],
  [{v:'みゃ',k:'mya'}, {v:'みゅ',k:'myu'}, {v:'みょ',k:'myo'}],
]
const yoon2 = [
  [{v:'りゃ',k:'rya'}, {v:'りゅ',k:'ryu'}, {v:'りょ',k:'ryo'}],
]
const yoon3 = [
  [{v:'ぎゃ',k:'gya'}, {v:'ぎゅ',k:'gyu'}, {v:'ぎょ',k:'gyo'}],
  [{v:'じゃ',k:'ja'}, {v:'じゅ',k:'ju'}, {v:'じょ',k:'jo'}],
  [{v:'ぢゃ',k:'ja'}, {v:'ぢゅ',k:'ju'}, {v:'ぢょ',k:'jo'}],
  [{v:'びゃ',k:'bya'}, {v:'びゅ',k:'byu'}, {v:'びょ',k:'byo'}],
  [{v:'ぴゃ',k:'pya'}, {v:'ぴゅ',k:'pyu'}, {v:'ぴょ',k:'pyo'}],
]

const Cell = ({ v, k, className = "" }: { v?: string, k?: string, className?: string }) => (
  <div className={`flex flex-col items-center justify-center py-3 bg-white hover:bg-[#f8f9fc] transition-colors ${className}`}>
    {v && <span className="text-2xl font-medium font-jp text-[#202c5c] leading-tight mb-1">{v}</span>}
    {k && <span className="text-[11px] text-gray-500 font-medium">{k}</span>}
  </div>
)

const RowHeader = ({ text, className = "" }: { text: string, className?: string }) => (
  <div className={`bg-gray-50/50 flex flex-col items-center justify-center p-2 text-[10px] font-bold text-[#848fa5] ${className}`}>
    {text}
  </div>
)

const ColHeader = ({ text }: { text: string }) => (
  <div className="bg-gray-50/50 py-2 flex items-center justify-center text-[10px] font-bold text-[#848fa5]">
    {text}
  </div>
)

export default function HiraganaRootPage() {
  return (
    <div className="w-full max-w-250 mx-auto pb-16 animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="text-center mb-10 pt-4">
        <h1 className="text-3xl font-bold text-[#202c5c] mb-2 font-serif">Table of Hiragana Letters</h1>
        <div className="w-16 h-1 bg-[#a1626f] mx-auto rounded-full"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
        
        {/* Left Column (Gojuon, Dakuon, Handakuon, Additional) */}
        <div className="flex-1 w-full flex flex-col gap-8">
          
          {/* gojūon */}
          <div>
            <h2 className="text-center font-bold text-lg mb-3 text-[#202c5c]">gojūon</h2>
            <div className="grid grid-cols-[40px_repeat(5,1fr)] bg-gray-200 gap-px border border-gray-200 rounded-xl overflow-hidden shadow-sm">
               <div className="bg-white"></div>
               {['a-column', 'i-column', 'u-column', 'e-column', 'o-column'].map(col => (
                 <ColHeader key={col} text={col} />
               ))}
               
               {gojuon.map((r, i) => (
                  <React.Fragment key={i}>
                    <RowHeader text={r.row} />
                    {r.cells.map((c, j) => (
                      c ? <Cell key={j} v={c.v} k={c.k} /> : <div key={j} className="bg-white"></div>
                    ))}
                  </React.Fragment>
               ))}
               
               {/* n row */}
               <div className="bg-white"></div>
               <div className="bg-white col-span-5 flex flex-col items-center justify-center py-3 border-t border-gray-100 hover:bg-[#f8f9fc] transition-colors">
                  <span className="text-2xl font-medium font-jp text-[#202c5c] leading-tight mb-1">ん</span>
                  <span className="text-[11px] text-gray-500 font-medium">n</span>
               </div>
            </div>
          </div>

          {/* dakuon */}
          <div>
            <h2 className="text-center font-bold text-lg mb-3 text-[#202c5c]">dakuon</h2>
            <div className="grid grid-cols-[60px_repeat(5,1fr)] bg-gray-200 gap-px border border-gray-200 rounded-xl overflow-hidden shadow-sm">
               {dakuon.map((r, i) => (
                  <React.Fragment key={i}>
                    <RowHeader text={r.row} />
                    {r.cells.map((c, j) => (
                      c ? <Cell key={j} v={c.v} k={c.k} /> : <div key={j} className="bg-white"></div>
                    ))}
                  </React.Fragment>
               ))}
            </div>
          </div>

          {/* han-dakuon */}
          <div>
            <h2 className="text-center font-bold text-lg mb-3 text-[#202c5c]">han-dakuon</h2>
            <div className="grid grid-cols-[60px_repeat(5,1fr)] bg-gray-200 gap-px border border-gray-200 rounded-xl overflow-hidden shadow-sm">
               {handakuon.map((r, i) => (
                  <React.Fragment key={i}>
                    <RowHeader text={r.row} />
                    {r.cells.map((c, j) => (
                      c ? <Cell key={j} v={c.v} k={c.k} /> : <div key={j} className="bg-white"></div>
                    ))}
                  </React.Fragment>
               ))}
            </div>
          </div>

          {/* additional letters */}
          <div>
            <h2 className="text-center font-bold text-lg mb-3 text-[#202c5c]">additional letters for foreign sounds</h2>
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
               <div className="flex gap-4 justify-center items-end mb-4">
                  <span className="text-3xl font-jp text-[#202c5c]">ゔ</span>
                  <span className="text-xl font-jp text-[#202c5c]">ぁ</span>
                  <span className="text-xl font-jp text-[#202c5c]">ぃ</span>
                  <span className="text-xl font-jp text-[#202c5c]">ぅ</span>
                  <span className="text-xl font-jp text-[#202c5c]">ぇ</span>
                  <span className="text-xl font-jp text-[#202c5c]">ぉ</span>
               </div>
               <p className="text-xs text-gray-500 font-medium">
                 e.g. ゔぃ (vi), ふぁ (fa), てぃ (ti), どぅ (du), うぇ (we), ふぉ (fo)
               </p>
            </div>
          </div>

        </div>
        
        {/* Right Column (Yoon, Sokuon) */}
        <div className="w-full lg:w-85 flex flex-col gap-8">
          
          {/* yōon */}
          <div>
            <h2 className="text-center font-bold text-lg mb-3 text-[#202c5c]">yōon</h2>
            
            <div className="bg-gray-200 gap-px border border-gray-200 rounded-xl overflow-hidden shadow-sm flex flex-col">
              {/* Part 1 */}
              <div className="bg-white h-15"></div>
              <div className="grid grid-cols-3 gap-px bg-gray-200 border-t border-gray-200">
                {yoon1.map((row, i) => (
                  <React.Fragment key={`yoon1-${i}`}>
                    {row.map((c, j) => <Cell key={j} v={c.v} k={c.k} />)}
                  </React.Fragment>
                ))}
              </div>

              {/* Part 2 */}
              <div className="bg-white h-15 border-t border-gray-200"></div>
              <div className="grid grid-cols-3 gap-px bg-gray-200 border-t border-gray-200">
                {yoon2.map((row, i) => (
                  <React.Fragment key={`yoon2-${i}`}>
                    {row.map((c, j) => <Cell key={j} v={c.v} k={c.k} />)}
                  </React.Fragment>
                ))}
              </div>

              {/* Part 3 */}
              <div className="bg-white h-25 border-t border-gray-200"></div>
              <div className="grid grid-cols-3 gap-px bg-gray-200 border-t border-gray-200">
                {yoon3.map((row, i) => (
                  <React.Fragment key={`yoon3-${i}`}>
                    {row.map((c, j) => <Cell key={j} v={c.v} k={c.k} />)}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* sokuon */}
          <div>
            <h2 className="text-center font-bold text-lg mb-3 text-[#202c5c]">sokuon</h2>
            <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center shadow-sm">
               <span className="text-3xl font-jp text-[#202c5c] mb-2 leading-none">っ</span>
               <span className="text-xs text-gray-500 font-medium">pause (no sound)</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}