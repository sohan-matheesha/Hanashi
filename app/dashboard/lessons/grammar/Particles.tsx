'use client'

export default function JapaneseParticlesNotes() {
  return (
    <section className="w-full py-10">
      <div className="mx-auto max-w-7xl">
        {/* Page Title */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900 md:text-5xl">
            Japanese Particles Notes
          </h1>
          <p className="mt-4 text-base text-gray-600 md:text-lg">
            Learn the main Japanese particles with meanings, patterns, and
            useful examples.
          </p>
        </div>

        {/* Main Particles Table */}
        <div className="mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
          <div className="border-b border-gray-200 bg-linear-to-r from-green-50 to-white px-6 py-5">
            <h2 className="text-xl font-semibold text-gray-900">
              Main Japanese Particles
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              These particles are used to connect words and show sentence
              relationships.
            </p>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[750px] border-collapse text-center">
              <thead>
                <tr className="bg-gray-100 text-sm text-gray-900">
                  <th className="border border-gray-200 px-4 py-4 font-bold">
                    Romaji
                  </th>
                  <th className="border border-gray-200 px-4 py-4 font-bold">
                    Hiragana
                  </th>
                  <th className="border border-gray-200 px-4 py-4 font-bold">
                    Use / Meaning
                  </th>
                </tr>
              </thead>

              <tbody className="text-base text-black font-jp">
                {[
                  ["wa", "は", "Topic marker — about / as for"],
                  ["o", "を", "Object marker"],
                  ["e", "へ", "Direction marker — to / towards"],
                  ["ka", "か", "Question marker"],
                  ["mo", "も", "Also / too"],
                  ["to", "と", "And / with"],
                  ["no", "の", "Possessive marker — of / ’s"],
                  ["ga", "が", "Subject marker"],
                  ["de", "で", "Place of action / by means"],
                  ["ni", "に", "Time / place / direction marker"],
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

        {/* WA Particle */}
        <ParticleCard
          title="は — wa Particle"
          description="は is used to mark the topic of the sentence."
          pattern="Topic + は + information"
          examples={[
            [
              "わたし は 学生です。\nWatashi wa gakusei desu.",
              "I am a student.",
            ],
            [
              "これは わたしの かさです。\nKore wa watashi no kasa desu.",
              "This is my umbrella.",
            ],
          ]}
        />

        {/* O Particle */}
        <ParticleCard
          title="を — o Particle"
          description="を marks the object of the sentence. It is used before action verbs like eat, read, watch, and drink."
          pattern="Subject + は + Object + を + Verb"
          examples={[
            [
              "わたし は ごはん を 食べます。\nWatashi wa gohan o tabemasu.",
              "I eat rice.",
            ],
            [
              "いもうと は 本 を 読みます。\nImouto wa hon o yomimasu.",
              "My younger sister reads a book.",
            ],
            [
              "おとうと は 映画 を 見ます。\nOtouto wa eiga o mimasu.",
              "My younger brother watches a movie.",
            ],
          ]}
        />

        {/* E Particle */}
        <div className="mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
          <div className="border-b border-gray-200 bg-linear-to-r from-green-50 to-white px-6 py-5">
            <h2 className="text-xl font-semibold text-gray-900">
              へ — e Particle
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              へ shows direction. It means to / towards. It is used with
              movement verbs.
            </p>
          </div>

          <div className="p-6">
            <div className="mb-6 rounded-2xl bg-green-50 p-5 text-green-800">
              <p className="font-semibold">Pattern</p>
              <p className="mt-1">Place + へ + movement verb</p>
            </div>

            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              Common Movement Verbs
            </h3>

            <div className="mb-8 w-full overflow-x-auto">
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
                    ["Go", "行きます", "ikimasu"],
                    ["Come", "来ます", "kimasu"],
                    ["Return / Go back", "帰ります", "kaerimasu"],
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

            <ExampleTable
              examples={[
                [
                  "あに は 銀行へ 行きます。\nAni wa ginkou e ikimasu.",
                  "My older brother goes to the bank.",
                ],
                [
                  "おとうと は 学校へ 行きます。\nOtouto wa gakkou e ikimasu.",
                  "My younger brother goes to school.",
                ],
                [
                  "はは は スーパーへ 行きました。\nHaha wa suupaa e ikimashita.",
                  "My mother went to the supermarket.",
                ],
                [
                  "あね は うちへ 帰ります。\nAne wa uchi e kaerimasu.",
                  "My older sister returns home.",
                ],
                [
                  "かれ は 大学へ 行きます。\nKare wa daigaku e ikimasu.",
                  "He goes to university.",
                ],
                [
                  "あした コロンボへ 行きます。\nAshita Koronbo e ikimasu.",
                  "I will go to Colombo tomorrow.",
                ],
                [
                  "どこへ 行きますか。\nDoko e ikimasu ka?",
                  "Where are you going?",
                ],
              ]}
            />
          </div>
        </div>

        {/* KA Particle */}
        <ParticleCard
          title="か — ka Particle"
          description="か is used at the end of a sentence to make a question."
          pattern="Sentence + か？"
          examples={[
            [
              "お名前は何ですか。\nOnamae wa nan desu ka?",
              "What is your name?",
            ],
            ["いくらですか。\nIkura desu ka?", "How much is it?"],
            [
              "今日は何曜日ですか。\nKyou wa nan youbi desu ka?",
              "What day is today?",
            ],
            [
              "お母さんは元気ですか。\nOkaasan wa genki desu ka?",
              "Is your mother well?",
            ],
            ["はい、元気です。\nHai, genki desu.", "Yes, she is fine."],
          ]}
        />

        {/* MO Particle */}
        <ParticleCard
          title="も — mo Particle"
          description="も means also / too. It replaces は or を when saying also."
          pattern="Noun + も + information"
          examples={[
            [
              "わたしは 学生です。\nWatashi wa gakusei desu.",
              "I am a student.",
            ],
            [
              "わたしも 学生です。\nWatashi mo gakusei desu.",
              "I am also a student.",
            ],
            ["魚も 買います。\nSakana mo kaimasu.", "I also buy fish."],
            [
              "この鉛筆も わたしのです。\nKono enpitsu mo watashi no desu.",
              "This pencil is also mine.",
            ],
            [
              "今週も 銀行へ 行きますか。\nKonshuu mo ginkou e ikimasu ka?",
              "Are you also going to the bank this week?",
            ],
          ]}
        />

        {/* Negative Sentences with MO */}
        <div className="mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
          <div className="border-b border-gray-200 bg-linear-to-r from-green-50 to-white px-6 py-5">
            <h2 className="text-xl font-semibold text-gray-900">
              Negative Sentences with も
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              In negative sentences, も can mean not any / none / nobody /
              nowhere.
            </p>
          </div>

          <div className="p-6">
            <ExampleTable
              examples={[
                [
                  "わたしは 何も 知りません。\nWatashi wa nanimo shirimasen.",
                  "I do not know anything.",
                ],
                [
                  "今日は どこも 行きません。\nKyou wa dokomo ikimasen.",
                  "I am not going anywhere today.",
                ],
                [
                  "クラスの中に 誰も いません。\nKurasu no naka ni daremo imasen.",
                  "There is nobody in the class.",
                ],
              ]}
            />

            <h3 className="mb-4 mt-8 text-lg font-semibold text-gray-900">
              Useful Words with も
            </h3>

            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-[650px] border-collapse text-center">
                <thead>
                  <tr className="bg-gray-100 text-sm text-gray-900">
                    <th className="border border-gray-200 px-4 py-4 font-bold">
                      Japanese
                    </th>
                    <th className="border border-gray-200 px-4 py-4 font-bold">
                      Romaji
                    </th>
                    <th className="border border-gray-200 px-4 py-4 font-bold">
                      Meaning
                    </th>
                  </tr>
                </thead>

                <tbody className="text-base text-black font-jp">
                  {[
                    ["なにも", "nanimo", "nothing / not anything"],
                    ["どこも", "dokomo", "nowhere / not anywhere"],
                    ["だれも", "daremo", "nobody"],
                    ["なにも〜ません", "nanimo ~ masen", "do not do anything"],
                    ["どこも〜ません", "dokomo ~ masen", "do not go anywhere"],
                    ["だれも〜ません", "daremo ~ masen", "nobody does"],
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
        </div>

        {/* TO Particle */}
        <div className="mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
          <div className="border-b border-gray-200 bg-linear-to-r from-green-50 to-white px-6 py-5">
            <h2 className="text-xl font-semibold text-gray-900">
              と — to Particle
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              と means and / with.
            </p>
          </div>

          <div className="p-6">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              A. と meaning “and”
            </h3>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                ["お父さん と お母さん", "Otousan to okaasan", "Father and mother"],
                ["りんご と みかん", "Ringo to mikan", "Apple and orange"],
                ["わたし と 友達", "Watashi to tomodachi", "Me and my friend"],
                ["猫 と うさぎ", "Neko to usagi", "Cat and rabbit"],
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-5"
                >
                  <p className="text-lg font-semibold text-gray-900 font-jp">
                    {item[0]}
                  </p>
                  <p className="mt-1 text-sm text-gray-600">{item[1]}</p>
                  <p className="mt-2 text-sm font-medium text-green-700">
                    {item[2]}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="mb-4 mt-8 text-lg font-semibold text-gray-900">
              B. と meaning “with”
            </h3>

            <ExampleTable
              examples={[
                [
                  "わたしは りんごと みかんを 買います。\nWatashi wa ringo to mikan o kaimasu.",
                  "I buy apples and oranges.",
                ],
                [
                  "いもうと と けんかします。\nImouto to kenka shimasu.",
                  "I argue with my younger sister.",
                ],
                [
                  "はは と うちへ 帰ります。\nHaha to uchi e kaerimasu.",
                  "I return home with my mother.",
                ],
                [
                  "今日 は ほん と かさを 買います。\nKyou wa hon to kasa o kaimasu.",
                  "Today I buy a book and an umbrella.",
                ],
                [
                  "今週 は だれ と 勉強しますか。\nKonshuu wa dare to benkyou shimasu ka?",
                  "With whom will you study this week?",
                ],
              ]}
            />
          </div>
        </div>

        {/* NO Particle */}
        <div className="mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
          <div className="border-b border-gray-200 bg-linear-to-r from-green-50 to-white px-6 py-5">
            <h2 className="text-xl font-semibold text-gray-900">
              の — no Particle
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              の shows possession. It means of / ’s / my / your.
            </p>
          </div>

          <div className="p-6">
            <div className="mb-6 rounded-2xl bg-green-50 p-5 text-green-800">
              <p className="font-semibold text-xs uppercase tracking-widest mb-1">Grammar Pattern</p>
              <p className="text-lg font-bold">Owner + の + Object</p>
            </div>

            <h3 className="mb-4 text-lg font-semibold text-gray-900 font-jp">
              Word Examples
            </h3>

            <div className="mb-8 w-full overflow-x-auto">
              <table className="w-full min-w-[650px] border-collapse text-center">
                <thead>
                  <tr className="bg-gray-100 text-sm text-gray-900">
                    <th className="border border-gray-200 px-4 py-4 font-bold">
                      Japanese / Romaji
                    </th>
                    <th className="border border-gray-200 px-4 py-4 font-bold">
                      English
                    </th>
                  </tr>
                </thead>

                <tbody className="text-base text-black font-jp">
                  {[
                    ["わたしの 本\nwatashi no hon", "my book"],
                    [
                      "せんせいの うえ\nsensei no ue",
                      "on top of the teacher’s desk / teacher’s above",
                    ],
                    ["いもうとの かさ\nimouto no kasa", "younger sister’s umbrella"],
                    ["かのじょの かばん\nkanojo no kaban", "her bag"],
                    ["りんごの あじ\nringo no aji", "taste of apple"],
                    ["へやの なか\nheya no naka", "inside the room"],
                  ].map((row, index) => (
                    <tr key={index} className="transition hover:bg-gray-50">
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className="whitespace-pre-line border border-gray-200 px-4 py-4"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <ExampleTable
              examples={[
                [
                  "これは わたしの かさです。\nKore wa watashi no kasa desu.",
                  "This is my umbrella.",
                ],
                [
                  "つくえの上に 本が たくさん あります。\nTsukue no ue ni hon ga takusan arimasu.",
                  "There are many books on the desk.",
                ],
                [
                  "きのうの夜 どこへ 行きましたか。\nKinou no yoru doko e ikimashita ka?",
                  "Where did you go last night?",
                ],
                [
                  "日本の首都は どこですか。\nNihon no shuto wa doko desu ka?",
                  "Where is the capital of Japan?",
                ],
                [
                  "今年の八月に 彼と 結婚します。\nKotoshi no hachigatsu ni kare to kekkon shimasu.",
                  "I will marry him in August this year.",
                ],
                [
                  "わたしの本は これです。\nWatashi no hon wa kore desu.",
                  "My book is this one.",
                ],
              ]}
            />
          </div>
        </div>

        {/* Quick Summary */}
        <div className="mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
          <div className="border-b border-gray-200 bg-linear-to-r from-green-50 to-white px-6 py-5">
            <h2 className="text-xl font-semibold text-gray-900">
              Quick Summary Table
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              A simple overview of the main particles.
            </p>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[850px] border-collapse text-center">
              <thead>
                <tr className="bg-gray-100 text-sm text-gray-900 font-bold">
                  <th className="border border-gray-200 px-4 py-4">
                    Particle
                  </th>
                  <th className="border border-gray-200 px-4 py-4">
                    Hiragana
                  </th>
                  <th className="border border-gray-200 px-4 py-4">
                    Main Meaning
                  </th>
                  <th className="border border-gray-200 px-4 py-4">
                    Example
                  </th>
                </tr>
              </thead>

              <tbody className="text-base text-black font-jp">
                {[
                  ["wa", "は", "Topic", "わたしは学生です。"],
                  ["o", "を", "Object", "ごはんを食べます。"],
                  ["e", "へ", "Direction", "学校へ行きます。"],
                  ["ka", "か", "Question", "何ですか。"],
                  ["mo", "も", "Also / too", "わたしも学生です。"],
                  ["to", "と", "And / with", "りんごとみかん"],
                  ["no", "の", "Possession / of", "わたしの本"],
                  ["ga", "が", "Subject", "本があります。"],
                  ["de", "で", "Place of action", "学校で勉強します。"],
                  ["ni", "に", "Time / place", "六時に起きます。"],
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

        {/* Final Note */}
        <div className="rounded-2xl bg-green-50 p-6 text-sm text-green-800 border border-green-100">
          <p>
            <span className="font-bold uppercase tracking-widest text-[10px] block mb-1">Important Note</span>
            Japanese particles are small words, but they are very important. They show the role of each word in a sentence, such as topic, object, direction, question, possession, and action place.
          </p>
        </div>
      </div>
    </section>
  );
}

function ParticleCard({ title, description, pattern, examples }: any) {
  return (
    <div className="mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
      <div className="border-b border-gray-200 bg-linear-to-r from-green-50 to-white px-6 py-5">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
      </div>

      <div className="p-6">
        <div className="mb-6 rounded-2xl bg-green-50 p-5 text-green-800">
          <p className="font-semibold text-xs uppercase tracking-widest mb-1">Pattern</p>
          <p className="text-lg font-bold">{pattern}</p>
        </div>

        <ExampleTable examples={examples} />
      </div>
    </div>
  );
}

function ExampleTable({ examples }: any) {
  return (
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
              <td className="border border-gray-200 px-4 py-4 text-gray-600 font-medium">{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
