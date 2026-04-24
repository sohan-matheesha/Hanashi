export type VocabularyItem = {
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
    content: VocabularyItem[];
};

export const vocabularyLessons: LessonModule[] = [
    {
        id: 'vocab-1',
        title: 'Greetings',
        

        title_sinhala: 'Vocabulary මූලික',
        description: 'Learn the foundational vocabulary.',
        type: 'vocabulary',        content: [
            { char: 'Vocabulary A', romaji: 'vocab-a', sinhala_pronounce: 'vocab-a', example_word: 'Word', example_reading: 'reading', example_meaning_sinhala: 'meaning', mnemonic_hint: 'hint' },
            { char: 'Vocabulary B', romaji: 'vocab-b', sinhala_pronounce: 'vocab-b', example_word: 'Word', example_reading: 'reading', example_meaning_sinhala: 'meaning', mnemonic_hint: 'hint' },
            { char: 'Vocabulary C', romaji: 'vocab-c', sinhala_pronounce: 'vocab-c', example_word: 'Word', example_reading: 'reading', example_meaning_sinhala: 'meaning', mnemonic_hint: 'hint' },
        ]
    }
];
