'use client'

export default function JapaneseVerbsFormsNotes() {
  return (
    <section className="w-full py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-black text-[#202c5c] md:text-5xl tracking-tight mb-4">
            Japanese Verbs / Forms Notes
          </h1>
          <p className="text-base text-gray-500 md:text-lg max-w-3xl mx-auto leading-relaxed">
            Learn Japanese verb groups, masu form, te form, ta form, nai form,
            and common grammar patterns.
          </p>
        </div>

        <TableCard
          title="1. Verb — 動詞「どうし」"
          description="Japanese verbs show actions such as write, eat, study, go, and come."
          headers={["Dictionary Form", "ます Form", "English"]}
          rows={[
            ["かく", "かきます", "write"],
            ["たべる", "たべます", "eat"],
            ["べんきょうする", "べんきょうします", "study"],
          ]}
        />

        <TableCard
          title="2. Dictionary Form vs ます Form"
          description="Dictionary form is the basic/plain form. ます form is the polite form."
          headers={["Form", "Use"]}
          rows={[
            ["Dictionary Form", "Basic / plain verb form"],
            ["ます Form", "Polite verb form"],
          ]}
        />

        <TableCard
          title="3. Japanese Verb Groups"
          description="Japanese verbs mainly have three groups."
          headers={["Group", "Name", "Explanation"]}
          rows={[
            ["1st Group", "Godan verbs", "Many verbs ending with う sounds"],
            ["2nd Group", "Ichidan verbs", "Many verbs ending with る"],
            ["3rd Group", "Irregular verbs", "する and くる verbs"],
          ]}
        />

        <GrammarCard
          title="4. 1st Group Verbs — ます Form"
          description="For 1st group verbs, change the final u sound to i sound, then add ます."
          pattern="Dictionary Form final u sound → i sound + ます"
        >
          <Table
            headers={["Ending", "Dictionary Form", "ます Form", "English"]}
            rows={[
              ["う", "あう", "あいます", "meet"],
              ["く", "かく", "かきます", "write"],
              ["す", "はなす", "はなします", "speak"],
              ["つ", "たつ", "たちます", "stand"],
              ["ぬ", "しぬ", "しにます", "die"],
              ["む", "のむ", "のみます", "drink"],
              ["る", "かえる", "かえります", "return"],
              ["ぐ", "およぐ", "およぎます", "swim"],
              ["ぶ", "あそぶ", "あそびます", "play"],
            ]}
          />
        </GrammarCard>

        <GrammarCard
          title="5. 2nd Group Verbs — ます Form"
          description="For 2nd group verbs, remove る and add ます."
          pattern="remove る + ます"
        >
          <Table
            headers={["Dictionary Form", "ます Form", "English"]}
            rows={[
              ["たべる", "たべます", "eat"],
              ["みる", "みます", "see / watch"],
              ["おきる", "おきます", "wake up"],
              ["ねる", "ねます", "sleep"],
            ]}
          />
        </GrammarCard>

        <GrammarCard
          title="6. 3rd Group Verbs — ます Form"
          description="3rd group verbs are irregular verbs."
          pattern="する → します / くる → きます"
        >
          <Table
            headers={["Dictionary Form", "ます Form", "English"]}
            rows={[
              ["する", "します", "do"],
              ["くる", "きます", "come"],
              ["べんきょうする", "べんきょうして", "study"],
              ["そうじする", "そうじします", "clean"],
            ]}
          />
        </GrammarCard>

        <TableCard
          title="7. ます Form Tenses"
          description="ます form has present, negative, past, and past negative forms."
          headers={["Sentence Type", "Form", "Meaning"]}
          rows={[
            ["Present / Future Positive", "ます", "do / will do"],
            ["Present / Future Negative", "ません", "do not / will not do"],
            ["Past Positive", "ました", "did"],
            ["Past Negative", "ませんでした", "did not"],
          ]}
        />

        <PatternCard
          title="10. てください"
          meaning="Please do..."
          pattern="Verb て form + ください"
          examples={[
            ["りんごをいつつください。\nRingo o itsutsu kudasai.", "Please give me five apples."],
            ["本をみせてください。\nHon o misete kudasai.", "Please show me the book."],
            ["ここに書いてください。\nKoko ni kaite kudasai.", "Please write here."],
          ]}
        />

        <PatternCard
          title="13. ています"
          meaning="Is doing / are doing / ongoing action"
          pattern="Verb て form + います"
          examples={[
            ["今、魚を選んでいます。\nIma, sakana o erande imasu.", "I am choosing fish now."],
            ["彼は勉強しています。\nKare wa benkyou shite imasu.", "He is studying."],
            ["先生は日本語を教えています。\nSensei wa nihongo o oshiete imasu.", "The teacher is teaching Japanese."],
          ]}
        />

        <PatternCard
          title="16. たことがあります"
          meaning="Have done before / have experience doing"
          pattern="Verb た form + ことがあります"
          examples={[
            ["私は日本へ行ったことがあります。\nWatashi wa Nihon e itta koto ga arimasu.", "I have been to Japan."],
            ["彼も富士山を見たことがあります。\nKare mo Fujisan o mita koto ga arimasu.", "He has also seen Mt. Fuji."],
            ["すしを食べたことがあります。\nSushi o tabeta koto ga arimasu.", "I have eaten sushi before."],
          ]}
        />

        <div className="rounded-4xl bg-gray-50 p-8 border border-gray-100 flex items-start gap-4 mb-10">
          <div className="w-1.5 h-full bg-hanashi-primary rounded-full shrink-0 min-h-[40px]"></div>
          <p className="text-gray-600 text-sm leading-relaxed italic">
            <span className="font-black text-hanashi-dark block not-italic uppercase tracking-widest text-[10px] mb-2">Category Summary</span>
            Japanese verbs have many useful forms. The ます form is polite, the て form is used for
            requests and connections, the た form is plain past, and the ない
            form is plain negative.
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
