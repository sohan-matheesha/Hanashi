export type HiraganaCharacter = {
  char: string
  romaji: string
  sinhala_pronounce: string
  mnemonic_hint: string
  example_word: string
  example_meaning_sinhala: string
}

export type LessonModule = {
  id: string
  title: string
  title_sinhala: string
  description: string
  content: HiraganaCharacter[]
}

export const hiraganaLessons: LessonModule[] = [
  {
    id: 'hiragana-1',
    title: 'Basics 1',
    title_sinhala: 'මූලික 1',
    description: 'Learn the first Hiragana characters.',
    content: [
      {
        char: 'あ',
        romaji: 'a',
        sinhala_pronounce: 'අ',
        mnemonic_hint: 'Looks like a person with arms open saying ah!',
        example_word: 'あさ',
        example_meaning_sinhala: 'උදෑසන'
      },
      {
        char: 'い',
        romaji: 'i',
        sinhala_pronounce: 'ඉ',
        mnemonic_hint: 'Two simple strokes for i.',
        example_word: 'いえ',
        example_meaning_sinhala: 'ගෙදර'
      },
      {
        char: 'う',
        romaji: 'u',
        sinhala_pronounce: 'උ',
        mnemonic_hint: 'Looks soft and curved like saying oo.',
        example_word: 'うみ',
        example_meaning_sinhala: 'මුහුද'
      },
      {
        char: 'え',
        romaji: 'e',
        sinhala_pronounce: 'එ',
        mnemonic_hint: 'Looks like a curved entrance for e.',
        example_word: 'えき',
        example_meaning_sinhala: 'දුම්රිය ස්ථානය'
      },
      {
        char: 'お',
        romaji: 'o',
        sinhala_pronounce: 'ඔ',
        mnemonic_hint: 'A round ending sound, o.',
        example_word: 'おちゃ',
        example_meaning_sinhala: 'තේ'
      }
    ]
  },
  {
    id: 'hiragana-2',
    title: 'Basics 2',
    title_sinhala: 'මූලික 2',
    description: 'Continue with the next Hiragana set.',
    content: [
      {
        char: 'か',
        romaji: 'ka',
        sinhala_pronounce: 'ක',
        mnemonic_hint: 'Looks like a key shape for ka.',
        example_word: 'かさ',
        example_meaning_sinhala: 'කුඩය'
      },
      {
        char: 'き',
        romaji: 'ki',
        sinhala_pronounce: 'කි',
        mnemonic_hint: 'Several strokes crossing like a key.',
        example_word: 'き',
        example_meaning_sinhala: 'ගස'
      },
      {
        char: 'く',
        romaji: 'ku',
        sinhala_pronounce: 'කු',
        mnemonic_hint: 'A simple hook shape for ku.',
        example_word: 'くつ',
        example_meaning_sinhala: 'සපත්තු'
      },
      {
        char: 'け',
        romaji: 'ke',
        sinhala_pronounce: 'කෙ',
        mnemonic_hint: 'Tall and balanced shape for ke.',
        example_word: 'けむり',
        example_meaning_sinhala: 'දුම'
      },
      {
        char: 'こ',
        romaji: 'ko',
        sinhala_pronounce: 'කො',
        mnemonic_hint: 'Two lines stacked for ko.',
        example_word: 'こえ',
        example_meaning_sinhala: 'හඬ'
      }
    ]
  },
  {
    id: 'hiragana-3',
    title: 'Basics 3',
    title_sinhala: 'මූලික 3',
    description: 'Learn the na and ha columns.',
    content: [
      {
        char: 'な',
        romaji: 'na',
        sinhala_pronounce: 'න',
        mnemonic_hint: 'Flowing shape for na.',
        example_word: 'なつ',
        example_meaning_sinhala: 'ගිම්හානය'
      },
      {
        char: 'に',
        romaji: 'ni',
        sinhala_pronounce: 'නි',
        mnemonic_hint: 'Neat shape with two parts.',
        example_word: 'にく',
        example_meaning_sinhala: 'මස්'
      },
      {
        char: 'ぬ',
        romaji: 'nu',
        sinhala_pronounce: 'නු',
        mnemonic_hint: 'Curvy character for nu.',
        example_word: 'いぬ',
        example_meaning_sinhala: 'බල්ලා'
      },
      {
        char: 'ね',
        romaji: 'ne',
        sinhala_pronounce: 'නෙ',
        mnemonic_hint: 'Looks looped and rounded.',
        example_word: 'ねこ',
        example_meaning_sinhala: 'පූසා'
      },
      {
        char: 'の',
        romaji: 'no',
        sinhala_pronounce: 'නො',
        mnemonic_hint: 'Single loop for no.',
        example_word: 'のり',
        example_meaning_sinhala: 'සීවීඩ්'
      },
      {
        char: 'は',
        romaji: 'ha',
        sinhala_pronounce: 'හ',
        mnemonic_hint: 'Balanced shape for ha.',
        example_word: 'はな',
        example_meaning_sinhala: 'මල'
      },
      {
        char: 'ひ',
        romaji: 'hi',
        sinhala_pronounce: 'හි',
        mnemonic_hint: 'Smooth curve for hi.',
        example_word: 'ひ',
        example_meaning_sinhala: 'ගින්න'
      },
      {
        char: 'ふ',
        romaji: 'fu',
        sinhala_pronounce: 'ෆු',
        mnemonic_hint: 'Looks like wind flowing.',
        example_word: 'ふね',
        example_meaning_sinhala: 'නෞකාව'
      },
      {
        char: 'へ',
        romaji: 'he',
        sinhala_pronounce: 'හෙ',
        mnemonic_hint: 'Simple angle for he.',
        example_word: 'へや',
        example_meaning_sinhala: 'කාමරය'
      },
      {
        char: 'ほ',
        romaji: 'ho',
        sinhala_pronounce: 'හො',
        mnemonic_hint: 'Tall shape for ho.',
        example_word: 'ほし',
        example_meaning_sinhala: 'තරුව'
      }
    ]
  },
  {
    id: 'hiragana-4',
    title: 'Basics 4',
    title_sinhala: 'මූලික 4',
    description: 'Learn the ma row and ya row.',
    content: [
      {
        char: 'ま',
        romaji: 'ma',
        sinhala_pronounce: 'ම',
        mnemonic_hint: 'Looks soft and rounded.',
        example_word: 'まど',
        example_meaning_sinhala: 'ජනේලය'
      },
      {
        char: 'み',
        romaji: 'mi',
        sinhala_pronounce: 'මි',
        mnemonic_hint: 'Curved and flowing.',
        example_word: 'みず',
        example_meaning_sinhala: 'වතුර'
      },
      {
        char: 'む',
        romaji: 'mu',
        sinhala_pronounce: 'මු',
        mnemonic_hint: 'Looks looped inward.',
        example_word: 'むし',
        example_meaning_sinhala: 'කෘමියා'
      },
      {
        char: 'め',
        romaji: 'me',
        sinhala_pronounce: 'මෙ',
        mnemonic_hint: 'Looks like an eye shape.',
        example_word: 'めがね',
        example_meaning_sinhala: 'කණ්ණාඩි'
      },
      {
        char: 'も',
        romaji: 'mo',
        sinhala_pronounce: 'මො',
        mnemonic_hint: 'Round and extended shape.',
        example_word: 'もも',
        example_meaning_sinhala: 'පීච්'
      },
      {
        char: 'や',
        romaji: 'ya',
        sinhala_pronounce: 'ය',
        mnemonic_hint: 'Wide upper part for ya.',
        example_word: 'やま',
        example_meaning_sinhala: 'කන්ද'
      },
      {
        char: 'ゆ',
        romaji: 'yu',
        sinhala_pronounce: 'යු',
        mnemonic_hint: 'Curved line with hook.',
        example_word: 'ゆき',
        example_meaning_sinhala: 'හිම'
      },
      {
        char: 'よ',
        romaji: 'yo',
        sinhala_pronounce: 'යො',
        mnemonic_hint: 'Looks open and curved.',
        example_word: 'よる',
        example_meaning_sinhala: 'රෑ'
      }
    ]
  },
  {
    id: 'hiragana-5',
    title: 'Basics 5',
    title_sinhala: 'මූලික 5',
    description: 'Final basic Hiragana lesson.',
    content: [
      {
        char: 'ら',
        romaji: 'ra',
        sinhala_pronounce: 'ර',
        mnemonic_hint: 'Light and simple stroke.',
        example_word: 'らく',
        example_meaning_sinhala: 'පහසු'
      },
      {
        char: 'り',
        romaji: 'ri',
        sinhala_pronounce: 'රි',
        mnemonic_hint: 'Two separate elegant strokes.',
        example_word: 'りす',
        example_meaning_sinhala: 'ලේනා'
      },
      {
        char: 'る',
        romaji: 'ru',
        sinhala_pronounce: 'රු',
        mnemonic_hint: 'Curved loop ending.',
        example_word: 'くるま',
        example_meaning_sinhala: 'කාර් එක'
      },
      {
        char: 'れ',
        romaji: 're',
        sinhala_pronounce: 'රෙ',
        mnemonic_hint: 'Flowing line with a tail.',
        example_word: 'れい',
        example_meaning_sinhala: 'ආචාරය'
      },
      {
        char: 'ろ',
        romaji: 'ro',
        sinhala_pronounce: 'රො',
        mnemonic_hint: 'Short rounded ending.',
        example_word: 'ろうそく',
        example_meaning_sinhala: 'මැටි පහන'
      },
      {
        char: 'わ',
        romaji: 'wa',
        sinhala_pronounce: 'ව',
        mnemonic_hint: 'Round left curve.',
        example_word: 'わに',
        example_meaning_sinhala: 'මකරයා'
      },
      {
        char: 'を',
        romaji: 'wo',
        sinhala_pronounce: 'වො',
        mnemonic_hint: 'Used mainly as a particle.',
        example_word: 'を',
        example_meaning_sinhala: 'particle'
      },
      {
        char: 'ん',
        romaji: 'n',
        sinhala_pronounce: 'න්',
        mnemonic_hint: 'Final sound character.',
        example_word: 'ほん',
        example_meaning_sinhala: 'පොත'
      },
      {
        char: 'が',
        romaji: 'ga',
        sinhala_pronounce: 'ග',
        mnemonic_hint: 'KA with tenten.',
        example_word: 'がくせい',
        example_meaning_sinhala: 'ශිෂ්‍යයා'
      },
      {
        char: 'ぎ',
        romaji: 'gi',
        sinhala_pronounce: 'ගි',
        mnemonic_hint: 'KI with tenten.',
        example_word: 'ぎんこう',
        example_meaning_sinhala: 'බැංකුව'
      },
      {
        char: 'ぐ',
        romaji: 'gu',
        sinhala_pronounce: 'ගු',
        mnemonic_hint: 'KU with tenten.',
        example_word: 'ぐん',
        example_meaning_sinhala: 'හමුදාව'
      },
      {
        char: 'げ',
        romaji: 'ge',
        sinhala_pronounce: 'ගෙ',
        mnemonic_hint: 'KE with tenten.',
        example_word: 'げんき',
        example_meaning_sinhala: 'හොඳින්'
      },
      {
        char: 'ご',
        romaji: 'go',
        sinhala_pronounce: 'ගො',
        mnemonic_hint: 'KO with tenten.',
        example_word: 'ごはん',
        example_meaning_sinhala: 'බත්'
      }
    ]
  }
]