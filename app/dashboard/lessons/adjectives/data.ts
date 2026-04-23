export type AdjectivesItem = {
    char: string;
    romaji: string;
    sinhala_pronounce: string;
    example_word: string;
    example_reading: string;
    example_meaning_sinhala: string;
    mnemonic_hint: string;
};

export type LessonModule = {
    id: string;
    title: string;
    title_sinhala: string;
    description: string;
    type: string;
    content: AdjectivesItem[];
};

export const adjectivesLessons: LessonModule[] = [
    {
        id: 'adj-1',
        title: 'Adjectives Basics',
        title_sinhala: 'Adjectives මූලික',
        description: 'Learn the foundational adjectives.',
        type: 'adjectives',
        content: [
            { char: 'Adjectives A', romaji: 'adj-a', sinhala_pronounce: 'adj-a', example_word: 'Word', example_reading: 'reading', example_meaning_sinhala: 'meaning', mnemonic_hint: 'hint' },
            { char: 'Adjectives B', romaji: 'adj-b', sinhala_pronounce: 'adj-b', example_word: 'Word', example_reading: 'reading', example_meaning_sinhala: 'meaning', mnemonic_hint: 'hint' },
            { char: 'Adjectives C', romaji: 'adj-c', sinhala_pronounce: 'adj-c', example_word: 'Word', example_reading: 'reading', example_meaning_sinhala: 'meaning', mnemonic_hint: 'hint' },
        ]
    }
];
