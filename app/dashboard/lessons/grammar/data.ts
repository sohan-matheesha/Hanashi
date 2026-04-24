export type GrammarItem = {
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
    content: GrammarItem[];
};

export const grammarLessons: LessonModule[] = [
    {
        id: 'grammar-1',
        title: 'Grammar Basics',
        title_sinhala: 'Grammar මූලික',
        description: 'Learn the foundational grammar.',
        type: 'grammar',
        content: [
            { char: 'Grammar A', romaji: 'grammar-a', sinhala_pronounce: 'grammar-a', example_word: 'Word', example_reading: 'reading', example_meaning_sinhala: 'meaning', mnemonic_hint: 'hint' },
            { char: 'Grammar B', romaji: 'grammar-b', sinhala_pronounce: 'grammar-b', example_word: 'Word', example_reading: 'reading', example_meaning_sinhala: 'meaning', mnemonic_hint: 'hint' },
            { char: 'Grammar C', romaji: 'grammar-c', sinhala_pronounce: 'grammar-c', example_word: 'Word', example_reading: 'reading', example_meaning_sinhala: 'meaning', mnemonic_hint: 'hint' },
        ]
    }
];
