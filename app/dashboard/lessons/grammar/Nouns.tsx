'use client'

export default function JapaneseNounsNotes() {
  return (
    <section className="w-full py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-black text-[#202c5c] md:text-5xl tracking-tight mb-4">
            Japanese Nouns — JLPT N5
          </h1>
          <p className="text-base text-gray-500 md:text-lg max-w-3xl mx-auto leading-relaxed">
            Learn common JLPT N5 nouns with English meaning, Japanese writing,
            romaji, and basic noun grammar patterns.
          </p>
        </div>

        <TableCard
          title="1. What is a Noun?"
          description="A noun is a word used to name a person, place, thing, food, time, direction, or idea."
          headers={["Particle", "Use"]}
          rows={[
            ["は", "topic marker"],
            ["の", "possession / connection"],
            ["を", "object marker"],
            ["が", "subject / existence marker"],
            ["に", "place / time marker"],
            ["で", "action location"],
            ["と", "and / with"],
            ["も", "also / too"],
          ]}
        />

        <TableCard
          title="2. People Nouns"
          description="Common JLPT N5 nouns used for people and family members."
          headers={["English", "Japanese", "Romaji"]}
          rows={[
            ["person", "人", "hito"],
            ["child", "子供", "kodomo"],
            ["student", "学生", "gakusei"],
            ["teacher", "先生", "sensei"],
            ["friend", "友達", "tomodachi"],
            ["family", "家族", "kazoku"],
            ["father", "父", "chichi"],
            ["mother", "母", "haha"],
            ["older brother", "兄", "ani"],
            ["older sister", "姉", "ane"],
            ["younger brother", "弟", "otouto"],
            ["younger sister", "妹", "imouto"],
          ]}
        />

        <TableCard
          title="3. Place Nouns"
          description="Common JLPT N5 nouns used for places."
          headers={["English", "Japanese", "Romaji"]}
          rows={[
            ["school", "学校", "gakkou"],
            ["university", "大学", "daigaku"],
            ["company", "会社", "kaisha"],
            ["house", "家", "ie"],
            ["room", "部屋", "heya"],
            ["shop", "店", "mise"],
            ["station", "駅", "eki"],
            ["hospital", "病院", "byouin"],
            ["park", "公園", "kouen"],
            ["bank", "銀行", "ginkou"],
            ["library", "図書館", "toshokan"],
          ]}
        />

        <TableCard
          title="4. Thing Nouns"
          description="Common JLPT N5 nouns used for objects and daily items."
          headers={["English", "Japanese", "Romaji"]}
          rows={[
            ["book", "本", "hon"],
            ["notebook", "ノート", "nooto"],
            ["pencil", "鉛筆", "enpitsu"],
            ["pen", "ペン", "pen"],
            ["bag", "かばん", "kaban"],
            ["umbrella", "傘", "kasa"],
            ["chair", "いす", "isu"],
            ["desk", "机", "tsukue"],
            ["car", "車", "kuruma"],
            ["watch / clock", "時計", "tokei"],
          ]}
        />

        <TableCard
          title="5. Food and Drink Nouns"
          description="Common JLPT N5 food and drink nouns."
          headers={["English", "Japanese", "Romaji"]}
          rows={[
            ["food", "食べ物", "tabemono"],
            ["drink", "飲み物", "nomimono"],
            ["rice / meal", "御飯", "gohan"],
            ["water", "水", "mizu"],
            ["tea", "お茶", "ocha"],
            ["coffee", "コーヒー", "koohii"],
            ["milk", "牛乳", "gyuunyuu"],
            ["bread", "パン", "pan"],
            ["fish", "魚", "sakana"],
            ["meat", "肉", "niku"],
          ]}
        />

        <TableCard
          title="6. Time Nouns"
          description="Common JLPT N5 nouns related to time."
          headers={["English", "Japanese", "Romaji"]}
          rows={[
            ["today", "今日", "kyou"],
            ["tomorrow", "明日", "ashita"],
            ["yesterday", "昨日", "kinou"],
            ["morning", "朝", "asa"],
            ["afternoon", "昼", "hiru"],
            ["night", "夜", "yoru"],
            ["this week", "今週", "konshuu"],
            ["last month", "先月", "sengetsu"],
            ["next year", "来年", "rainen"],
          ]}
        />

        <TableCard
          title="8. Basic Noun Grammar Patterns"
          description="Useful noun grammar patterns for JLPT N5 beginners."
          headers={["Pattern", "Meaning"]}
          rows={[
            ["Noun + です", "is / am / are"],
            ["Noun + ではありません", "is not / am not / are not"],
            ["Noun + でした", "was / were"],
            ["Noun + ではありませんでした", "was not / were not"],
            ["Noun + の + Noun", "possession / connection"],
            ["Noun + を + Verb", "object of action"],
            ["Place + で + Verb", "action location"],
            ["Noun + も", "also / too"],
          ]}
        />

        <div className="rounded-4xl bg-gray-50 p-8 border border-gray-100 flex items-start gap-4 mb-10">
          <div className="w-1.5 h-full bg-hanashi-primary rounded-full shrink-0 min-h-[40px]"></div>
          <p className="text-gray-600 text-sm leading-relaxed italic">
            <span className="font-black text-hanashi-dark block not-italic uppercase tracking-widest text-[10px] mb-2">Category Summary</span>
            Japanese nouns are used with particles such as は, の, を, が, に, で, と, から, まで,
            and も. Nouns can also be used with です, ではありません, でした,
            and ではありませんでした to make basic sentences.
          </p>
        </div>
      </div>
    </section>
  );
}

function TableCard({ title, description, headers, rows }: any) {
  return (
    <div className="mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
      <div className="border-b border-gray-200 bg-linear-to-r from-green-50 to-white px-6 py-5">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
      </div>

      <Table headers={headers} rows={rows} />
    </div>
  );
}

function Table({ headers, rows }: any) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[750px] border-collapse text-center">
        <thead>
          <tr className="bg-gray-100 text-[10px] uppercase tracking-widest text-gray-500">
            {headers.map((header: any, index: number) => (
              <th
                key={index}
                className="border border-gray-200 px-4 py-4 font-black"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="text-base text-black font-jp">
          {rows.map((row: any, rowIndex: number) => (
            <tr key={rowIndex} className="transition hover:bg-gray-50">
              {row.map((cell: any, cellIndex: number) => (
                <td
                  key={cellIndex}
                  className="whitespace-pre-line border border-gray-200 px-4 py-4 font-medium"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
