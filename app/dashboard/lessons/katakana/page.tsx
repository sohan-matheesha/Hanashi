'use client'

import React from 'react'

const gojuon = [
  { row: 'a-row', cells: [{v:'ア',k:'a'}, {v:'イ',k:'i'}, {v:'ウ',k:'u'}, {v:'エ',k:'e'}, {v:'オ',k:'o'}] },
  { row: 'ka-row', cells: [{v:'カ',k:'ka'}, {v:'キ',k:'ki'}, {v:'ク',k:'ku'}, {v:'ケ',k:'ke'}, {v:'コ',k:'ko'}] },
  { row: 'sa-row', cells: [{v:'サ',k:'sa'}, {v:'シ',k:'shi'}, {v:'ス',k:'su'}, {v:'セ',k:'se'}, {v:'ソ',k:'so'}] },
  { row: 'ta-row', cells: [{v:'タ',k:'ta'}, {v:'チ',k:'chi'}, {v:'ツ',k:'tsu'}, {v:'テ',k:'te'}, {v:'ト',k:'to'}] },
  { row: 'na-row', cells: [{v:'ナ',k:'na'}, {v:'ニ',k:'ni'}, {v:'ヌ',k:'nu'}, {v:'ネ',k:'ne'}, {v:'ノ',k:'no'}] },
  { row: 'ha-row', cells: [{v:'ハ',k:'ha'}, {v:'ヒ',k:'hi'}, {v:'フ',k:'fu'}, {v:'ヘ',k:'he'}, {v:'ホ',k:'ho'}] },
  { row: 'ma-row', cells: [{v:'マ',k:'ma'}, {v:'ミ',k:'mi'}, {v:'ム',k:'mu'}, {v:'メ',k:'me'}, {v:'モ',k:'mo'}] },
  { row: 'ya-row', cells: [{v:'ヤ',k:'ya'}, null, {v:'ユ',k:'yu'}, null, {v:'ヨ',k:'yo'}] },
  { row: 'ra-row', cells: [{v:'ラ',k:'ra'}, {v:'リ',k:'ri'}, {v:'ル',k:'ru'}, {v:'レ',k:'re'}, {v:'ロ',k:'ro'}] },
  { row: 'wa-row', cells: [{v:'ワ',k:'wa'}, null, null, null, {v:'ヲ',k:'o'}] },
]

const dakuon = [
  { row: 'ga-row', cells: [{v:'ガ',k:'ga'}, {v:'ギ',k:'gi'}, {v:'グ',k:'gu'}, {v:'ゲ',k:'ge'}, {v:'ゴ',k:'go'}] },
  { row: 'za-row', cells: [{v:'ザ',k:'za'}, {v:'ジ',k:'ji'}, {v:'ズ',k:'zu'}, {v:'ゼ',k:'ze'}, {v:'ゾ',k:'zo'}] },
  { row: 'da-row', cells: [{v:'ダ',k:'da'}, {v:'ヂ',k:'ji'}, {v:'ヅ',k:'zu'}, {v:'デ',k:'de'}, {v:'ド',k:'do'}] },
  { row: 'ba-row', cells: [{v:'バ',k:'ba'}, {v:'ビ',k:'bi'}, {v:'ブ',k:'bu'}, {v:'ベ',k:'be'}, {v:'ボ',k:'bo'}] },
]

const handakuon = [
  { row: 'pa-row', cells: [{v:'パ',k:'pa'}, {v:'ピ',k:'pi'}, {v:'プ',k:'pu'}, {v:'ペ',k:'pe'}, {v:'ポ',k:'po'}] },
]

const yoon1 = [
  [{v:'キャ',k:'kya'}, {v:'キュ',k:'kyu'}, {v:'キョ',k:'kyo'}],
  [{v:'シャ',k:'sha'}, {v:'シュ',k:'shu'}, {v:'ショ',k:'sho'}],
  [{v:'チャ',k:'cha'}, {v:'チュ',k:'chu'}, {v:'チョ',k:'cho'}],
  [{v:'ニャ',k:'nya'}, {v:'ニュ',k:'nyu'}, {v:'ニョ',k:'nyo'}],
  [{v:'ヒャ',k:'hya'}, {v:'ヒュ',k:'hyu'}, {v:'ヒョ',k:'hyo'}],
  [{v:'ミャ',k:'mya'}, {v:'ミュ',k:'myu'}, {v:'ミョ',k:'myo'}],
]
const yoon2 = [
  [{v:'リャ',k:'rya'}, {v:'リュ',k:'ryu'}, {v:'リョ',k:'ryo'}],
]
const yoon3 = [
  [{v:'ギャ',k:'gya'}, {v:'ギュ',k:'gyu'}, {v:'ギョ',k:'gyo'}],
  [{v:'ジャ',k:'ja'}, {v:'ジュ',k:'ju'}, {v:'ジョ',k:'jo'}],
  [{v:'ヂャ',k:'ja'}, {v:'ヂュ',k:'ju'}, {v:'ヂョ',k:'jo'}],
  [{v:'ビャ',k:'bya'}, {v:'ビュ',k:'byu'}, {v:'ビョ',k:'byo'}],
  [{v:'ピャ',k:'pya'}, {v:'ピュ',k:'pyu'}, {v:'ピョ',k:'pyo'}],
]

const Cell = ({ v, k, className = "" }: { v?: string, k?: string, className?: string }) => (
  <div className={`flex flex-col items-center justify-center py-3 bg-white hover:bg-[#f8f9fc] transition-colors ${className}`}>
    {v && <span className="text-2xl font-medium font-jp text-[#d65f3f] leading-tight mb-1">{v}</span>}
    {k && <span className="text-[11px] text-gray-500 font-medium">{k}</span>}
  </div>
)

const RowHeader = ({ text, className = "" }: { text: string, className?: string }) => (
  <div className={`bg-[#fdf6f4] flex flex-col items-center justify-center p-2 text-[10px] font-bold text-[#b55841] ${className}`}>
    {text}
  </div>
)

const ColHeader = ({ text }: { text: string }) => (
  <div className="bg-[#fdf6f4] py-2 flex items-center justify-center text-[10px] font-bold text-[#b55841]">
    {text}
  </div>
)

export default function KatakanaRootPage() {
  return (
    <div className="w-full max-w-250 mx-auto pb-16 animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="text-center mb-10 pt-4">
        <h1 className="text-3xl font-bold text-[#202c5c] mb-2 font-serif">Table of Katakana Letters</h1>
        <div className="w-16 h-1 bg-[#d65f3f] mx-auto rounded-full"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
        
        {/* Left Column (Gojuon, Dakuon, Handakuon, Additional) */}
        <div className="flex-1 w-full flex flex-col gap-8">
          
          {/* gojūon */}
          <div>
            <h2 className="text-center font-bold text-lg mb-3 text-[#202c5c]">gojūon</h2>
            <div className="grid grid-cols-[40px_repeat(5,1fr)] bg-[#f3e3df] gap-px border border-[#f3e3df] rounded-xl overflow-hidden shadow-sm">
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
               <div className="bg-white col-span-5 flex flex-col items-center justify-center py-3 border-t border-[#f3e3df] hover:bg-[#f8f9fc] transition-colors">
                  <span className="text-2xl font-medium font-jp text-[#d65f3f] leading-tight mb-1">ン</span>
                  <span className="text-[11px] text-gray-500 font-medium">n</span>
               </div>
            </div>
          </div>

          {/* dakuon */}
          <div>
            <h2 className="text-center font-bold text-lg mb-3 text-[#202c5c]">dakuon</h2>
            <div className="grid grid-cols-[60px_repeat(5,1fr)] bg-[#f3e3df] gap-px border border-[#f3e3df] rounded-xl overflow-hidden shadow-sm">
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
            <div className="grid grid-cols-[60px_repeat(5,1fr)] bg-[#f3e3df] gap-px border border-[#f3e3df] rounded-xl overflow-hidden shadow-sm">
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
            <div className="bg-white border border-[#f3e3df] rounded-xl p-6 text-center shadow-sm">
               <div className="flex gap-4 justify-center items-end mb-4">
                  <span className="text-3xl font-jp text-[#d65f3f]">ヴ</span>
                  <span className="text-xl font-jp text-[#d65f3f]">ァ</span>
                  <span className="text-xl font-jp text-[#d65f3f]">ィ</span>
                  <span className="text-xl font-jp text-[#d65f3f]">ゥ</span>
                  <span className="text-xl font-jp text-[#d65f3f]">ェ</span>
                  <span className="text-xl font-jp text-[#d65f3f]">ォ</span>
               </div>
               <p className="text-xs text-gray-500 font-medium">
                 e.g. ヴィ (vi), ファ (fa), ティ (ti), ドゥ (du), ウェ (we), フォ (fo)
               </p>
            </div>
          </div>

        </div>
        
        {/* Right Column (Yoon, Sokuon) */}
        <div className="w-full lg:w-85 flex flex-col gap-8">
          
          {/* yōon */}
          <div>
            <h2 className="text-center font-bold text-lg mb-3 text-[#202c5c]">yōon</h2>
            
            <div className="bg-[#f3e3df] gap-px border border-[#f3e3df] rounded-xl overflow-hidden shadow-sm flex flex-col">
              {/* Part 1 */}
              <div className="bg-white h-15"></div>
              <div className="grid grid-cols-3 gap-px bg-[#f3e3df] border-t border-[#f3e3df]">
                {yoon1.map((row, i) => (
                  <React.Fragment key={`yoon1-${i}`}>
                    {row.map((c, j) => <Cell key={j} v={c.v} k={c.k} />)}
                  </React.Fragment>
                ))}
              </div>

              {/* Part 2 */}
              <div className="bg-white h-15 border-t border-[#f3e3df]"></div>
              <div className="grid grid-cols-3 gap-px bg-[#f3e3df] border-t border-[#f3e3df]">
                {yoon2.map((row, i) => (
                  <React.Fragment key={`yoon2-${i}`}>
                    {row.map((c, j) => <Cell key={j} v={c.v} k={c.k} />)}
                  </React.Fragment>
                ))}
              </div>

              {/* Part 3 */}
              <div className="bg-white h-25 border-t border-[#f3e3df]"></div>
              <div className="grid grid-cols-3 gap-px bg-[#f3e3df] border-t border-[#f3e3df]">
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
            <div className="bg-white border border-[#f3e3df] rounded-xl p-6 flex flex-col items-center shadow-sm">
               <span className="text-3xl font-jp text-[#d65f3f] mb-2 leading-none">ッ</span>
               <span className="text-xs text-gray-500 font-medium">pause (no sound)</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}