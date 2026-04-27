'use client'

export default function JapaneseAdjectivesNotes() {
  return (
    <section className="w-full py-10">
      <div className="mx-auto max-w-7xl">
        {/* Page Title */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-black text-[#202c5c] md:text-5xl tracking-tight">
            Japanese Adjectives Notes
          </h1>
          <p className="mt-4 text-base text-gray-500 md:text-lg max-w-2xl mx-auto leading-relaxed">
            Learn い adjectives and な adjectives with patterns, examples, and
            sentence forms.
          </p>
        </div>

        {/* What are adjectives */}
        <TableCard
          title="1. What are Japanese Adjectives?"
          description="Japanese adjectives are words used to describe nouns."
          headers={["English", "Japanese", "Romaji"]}
          rows={[
            ["Delicious", "おいしい", "oishii"],
            ["Busy", "いそがしい", "isogashii"],
            ["Hot", "あつい", "atsui"],
            ["Cold", "さむい", "samui"],
            ["Beautiful / Clean", "きれいな", "kirei na"],
            ["Famous", "ゆうめいな", "yuumei na"],
            ["Lively", "にぎやかな", "nigiyaka na"],
            ["Quiet", "しずかな", "shizuka na"],
          ]}
        />

        {/* Types */}
        <TableCard
          title="2. Types of Japanese Adjectives"
          description="Japanese adjectives have two main types: い adjectives and な adjectives."
          headers={["Type", "Ending", "Example", "Meaning"]}
          rows={[
            ["い adjective", "Ends with い", "おいしい", "delicious"],
            ["な adjective", "Uses な before noun", "きれいな", "beautiful / clean"],
          ]}
        />

        {/* I adjectives before noun */}
        <GrammarCard
          title="3.1 い Adjective Before a Noun"
          description="When an い adjective comes before a noun, keep い."
          pattern="い adjective + noun"
        >
          <Table
            headers={["Japanese / Romaji", "English"]}
            rows={[
              ["おいしい みかん\noishii mikan", "delicious orange"],
              ["あまい みかん\namai mikan", "sweet orange"],
              ["あたたかい 天気\natatakai tenki", "warm weather"],
              ["きたない 水\nkitanai mizu", "dirty water"],
            ]}
          />
        </GrammarCard>

        {/* I adjective forms */}
        <TableCard
          title="3.2 い Adjective Sentence Forms"
          description="For い adjectives, the ending changes depending on positive, negative, and past tense."
          headers={["Sentence Type", "Pattern", "Example"]}
          rows={[
            ["Present Positive", "い adjective + です", "おいしいです"],
            ["Present Negative", "remove い + くないです", "おいしくないです"],
            ["Past Positive", "remove い + かったです", "おいしかったです"],
            ["Past Negative", "remove い + くなかったです", "おいしくなかったです"],
          ]}
        />

        {/* Connecting I adjectives */}
        <GrammarCard
          title="3.3 Connecting い Adjectives with くて"
          description="Use くて when connecting an い adjective with another adjective or sentence."
          pattern="remove い + くて + adjective / sentence"
        >
          <Table
            headers={["Japanese / Romaji", "English"]}
            rows={[
              [
                "おいしくて あまい みかんです。\nOishikute amai mikan desu.",
                "It is a delicious and sweet orange.",
              ],
              [
                "彼はいそがしくて元気です。\nKare wa isogashikute genki desu.",
                "He is busy and healthy/well.",
              ],
            ]}
          />
        </GrammarCard>

        {/* Na adjectives before noun */}
        <GrammarCard
          title="4.1 な Adjective Before a Noun"
          description="When a な adjective comes before a noun, add な."
          pattern="な adjective + な + noun"
        >
          <Table
            headers={["Japanese / Romaji", "English"]}
            rows={[
              ["元気な子ども\ngenki na kodomo", "healthy / energetic child"],
              ["上手な人\njouzu na hito", "skillful person"],
              ["きれいな女の人\nkirei na onna no hito", "beautiful woman"],
            ]}
          />
        </GrammarCard>

        {/* Na adjective forms */}
        <TableCard
          title="4.2 な Adjective Sentence Forms"
          description="For な adjectives, use the same sentence style as nouns."
          headers={["Sentence Type", "Pattern", "Example"]}
          rows={[
            ["Present Positive", "な adjective + です", "元気です"],
            [
              "Present Negative",
              "な adjective + ではありません",
              "元気ではありません",
            ],
            ["Past Positive", "な adjective + でした", "元気でした"],
            [
              "Past Negative",
              "な adjective + ではありませんでした",
              "元気ではありませんでした",
            ],
          ]}
        />

        {/* Important difference */}
        <TableCard
          title="5. Important Difference"
          description="Main differences between い adjectives and な adjectives."
          headers={["Point", "い Adjective", "な Adjective"]}
          rows={[
            ["Before noun", "adjective directly before noun", "add な before noun"],
            ["Example", "おいしい みかん", "元気な 子ども"],
            ["Negative", "remove い + くないです", "adjective + ではありません"],
            ["Past", "remove い + かったです", "adjective + でした"],
            ["Connect with another word", "remove い + くて", "adjective + で"],
          ]}
        />

        {/* Note */}
        <div className="rounded-[2.5rem] bg-gray-50 p-8 border border-gray-100 mb-10">
          <p className="text-gray-600 text-sm leading-relaxed italic">
            <span className="font-black text-hanashi-dark block not-italic uppercase tracking-widest text-[10px] mb-2">Category Summary</span>
            Japanese adjectives are divided into two main types: い adjectives and な adjectives. い
            adjectives usually end with い, such as おいしい and いそ가しい. な
            adjectives use な before nouns, such as 元気な子ども and きれいな人.
          </p>
        </div>
      </div>
    </section>
  );
}

function GrammarCard({ title, description, pattern, children }: any) {
  return (
    <div className="mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
      <div className="border-b border-gray-200 bg-linear-to-r from-green-50 to-white px-6 py-5">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
      </div>

      <div className="p-6">
        <div className="mb-6 rounded-2xl bg-green-50 p-5 text-green-800">
          <p className="font-semibold text-[10px] uppercase tracking-widest mb-1">Grammar Pattern</p>
          <p className="text-lg font-bold">{pattern}</p>
        </div>

        {children}
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
