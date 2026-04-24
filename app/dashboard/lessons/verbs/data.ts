export type VerbsItem = {
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
    content: VerbsItem[];
};

export const verbsLessons: LessonModule[] = [
    {
        id: 'verb-1',
        title: 'Verbs Basics',
        title_sinhala: 'Verbs මූලික',
        description: 'Learn the foundational verbs.',
        type: 'verbs',
        content: [
            { char: 'Verbs A', romaji: 'verb-a', sinhala_pronounce: 'verb-a', example_word: 'Word', example_reading: 'reading', example_meaning_sinhala: 'meaning', mnemonic_hint: 'hint' },
            { char: 'Verbs B', romaji: 'verb-b', sinhala_pronounce: 'verb-b', example_word: 'Word', example_reading: 'reading', example_meaning_sinhala: 'meaning', mnemonic_hint: 'hint' },
            { char: 'Verbs C', romaji: 'verb-c', sinhala_pronounce: 'verb-c', example_word: 'Word', example_reading: 'reading', example_meaning_sinhala: 'meaning', mnemonic_hint: 'hint' },
        ]
    }
];
