'use client'

export default function PolitePlainNotes() {
  return (
    <section className="w-full py-10">
      <div className="mx-auto max-w-7xl">
        {/* Page Title */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-black text-[#202c5c] md:text-5xl tracking-tight mb-4">
            Japanese Polite Form and Plain Form
          </h1>
          <p className="text-base text-gray-500 md:text-lg max-w-3xl mx-auto leading-relaxed">
            Learn how to change Japanese polite forms into plain forms and how
            to use plain form grammar patterns.
          </p>
        </div>

        {/* Intro */}
        <TableCard
          title="1. Polite Form and Plain Form"
          description="Japanese has two common sentence styles: polite form and plain form."
          headers={["Form", "Meaning / Use", "Common Ending"]}
          rows={[
            ["Polite Form", "Formal / respectful speaking style", "です / ます"],
            [
              "Plain Form",
              "Casual / normal speaking style",
              "Dictionary form / ない / た / なかった",
            ],
          ]}
        />

        {/* Verb polite to plain */}
        <TableCard
          title="2. Verb Polite Form → Plain Form"
          description="Example using 行きます / 行く."
          headers={["Sentence Type", "Polite Form", "Plain Form", "Meaning"]}
          rows={[
            ["Present Positive", "行きます", "行く", "go / will go"],
            ["Present Negative", "行きません", "行かない", "do not go"],
            ["Past Positive", "行きました", "行った", "went"],
            ["Past Negative", "行きませんでした", "行かなかった", "did not go"],
          ]}
        />

        <TableCard
          title="Verb Examples: 行きます → 行く"
          description="Polite and plain sentence examples."
          headers={["Polite Form", "Plain Form", "English"]}
          rows={[
            [
              "私は銀行に行きます。\nWatashi wa ginkou ni ikimasu.",
              "私は銀行に行く。\nWatashi wa ginkou ni iku.",
              "I go to the bank.",
            ],
            [
              "私は銀行に行きません。\nWatashi wa ginkou ni ikimasen.",
              "私は銀行に行かない。\nWatashi wa ginkou ni ikanai.",
              "I do not go to the bank.",
            ],
            [
              "私は銀行に行きました。\nWatashi wa ginkou ni ikimashita.",
              "私は銀行に行った。\nWatashi wa ginkou ni itta.",
              "I went to the bank.",
            ],
            [
              "私は銀行に行きませんでした。\nWatashi wa ginkou ni ikimasen deshita.",
              "私は銀行に行かなかった。\nWatashi wa ginkou ni ikanakatta.",
              "I did not go to the bank.",
            ],
          ]}
        />

        {/* Souji */}
        <TableCard
          title="3. Verb Example: 掃除します / 掃除する"
          description="Another example using a する verb."
          headers={["Sentence Type", "Polite Form", "Plain Form", "Meaning"]}
          rows={[
            ["Present Positive", "掃除します", "掃除する", "clean"],
            ["Present Negative", "掃除しません", "掃除しない", "do not clean"],
            ["Past Positive", "掃除しました", "掃除した", "cleaned"],
            [
              "掃除しませんでした",
              "掃除しなかった",
              "did not clean",
            ],
          ]}
        />

        {/* I adjective */}
        <TableCard
          title="4. い Adjective Polite Form → Plain Form"
          description="Example using おいしい."
          headers={["Sentence Type", "Polite Form", "Plain Form", "Meaning"]}
          rows={[
            ["Present Positive", "おいしいです", "おいしい", "is delicious"],
            [
              "おいしくないです",
              "おいしくない",
              "is not delicious",
            ],
            [
              "おいしかったです",
              "おいしかった",
              "was delicious",
            ],
            [
              "おいしくなかったです",
              "おいしくなかった",
              "was not delicious",
            ],
          ]}
        />

        {/* Na adjective / noun */}
        <TableCard
          title="6. な Adjective / Noun Polite Form → Plain Form"
          description="な adjectives and nouns use だ in present positive plain form."
          headers={["Sentence Type", "Polite Form", "Plain Form", "Meaning"]}
          rows={[
            ["Present Positive", "元気です", "元気だ", "is fine / healthy"],
            [
              "元気ではありません",
              "元気ではない / 元気じゃない",
              "is not fine",
            ],
            ["Past Positive", "元気でした", "元気だった", "was fine"],
            [
              "元気ではありませんでした",
              "元気ではなかった / 元気じゃなかった",
              "was not fine",
            ],
          ]}
        />

        {/* Kara */}
        <PatternCard
          title="7. から"
          meaning="because / so"
          pattern="Plain Form + から / Polite Form + から"
          examples={[
            [
              "今日は寒いですから、ヒーターをつけました。\nKyou wa samui desu kara, hiitaa o tsukemashita.",
              "Because today is cold, I turned on the heater.",
            ],
            [
              "今日は寒いから、ヒーターをつけました。\nKyou wa samui kara, hiitaa o tsukemashita.",
              "Because today is cold, I turned on the heater.",
            ],
          ]}
        />

        {/* To omoimasu */}
        <PatternCard
          title="8. と思います"
          meaning="I think that..."
          pattern="Plain Form + と思います"
          examples={[
            [
              "教えると思います。\nOshieru to omoimasu.",
              "I think he/she will teach.",
            ],
            [
              "教えないと思います。\nOshienai to omoimasu.",
              "I think he/she will not teach.",
            ],
          ]}
        />

        {/* Toki */}
        <PatternCard
          title="10. とき"
          meaning="when"
          pattern="Plain Form + とき"
          examples={[
            [
              "暇なとき、テレビを見ます。\nHima na toki, terebi o mimasu.",
              "When I am free, I watch TV.",
            ],
            [
              "暑いとき、水を飲みます。\nAtsui toki, mizu o nomimasu.",
              "When it is hot, I drink water.",
            ],
          ]}
        />

        <TableCard
          title="Important Summary"
          description="Main grammar patterns in this lesson."
          headers={["Grammar", "Pattern", "Meaning"]}
          rows={[
            ["から", "Plain / Polite Form + から", "because / so"],
            ["と思います", "Plain Form + と思います", "I think that..."],
            ["でしょう", "Plain Form + でしょう", "probably / maybe"],
            ["とき", "Plain Form + とき", "when"],
          ]}
        />

        <div className="rounded-4xl bg-gray-50 p-8 border border-gray-100 flex items-start gap-4 mb-10">
          <div className="w-1.5 h-full bg-hanashi-primary rounded-full shrink-0 min-h-[40px]"></div>
          <p className="text-gray-600 text-sm leading-relaxed italic">
            <span className="font-black text-hanashi-dark block not-italic uppercase tracking-widest text-[10px] mb-2">Social Context</span>
            Polite form is used in formal or respectful situations. Plain form is used in casual speech
            and before many grammar patterns such as から, と思います, でしょう,
            and とき.
          </p>
        </div>
      </div>
    </section>
  );
}

function PatternCard({ title, meaning, pattern, examples }: any) {
  return (
    <div className="mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
      <div className="border-b border-gray-200 bg-linear-to-r from-green-50 to-white px-6 py-5">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <p className="mt-1 text-sm text-gray-600">{meaning}</p>
      </div>

      <div className="p-6">
        <div className="mb-6 rounded-2xl bg-green-50 p-5 text-green-800">
          <p className="font-semibold text-[10px] uppercase tracking-widest mb-1">Grammar Pattern</p>
          <p className="text-lg font-bold">{pattern}</p>
        </div>

        <Table headers={["Japanese / Romaji", "English"]} rows={examples} />
      </div>
    </div>
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
