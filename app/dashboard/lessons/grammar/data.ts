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

export const grammarLessons = [
    {
        id: 'particles',
        title: 'Particles',
        icon: 'Leaf',
        title_sinhala: 'නිපාත පද (Nipatha Pada)',
        description: 'Particles are small words used to show the relationship between words in a sentence.'
    },
    {
        id: 'tenses',
        title: 'Tenses',
        icon: 'Clock',
        title_sinhala: 'කාල (Kaala)',
        description: 'Learn how to express actions in past, present, and future.'
    },
    {
        id: 'adjectives',
        title: 'Adjectives',
        icon: 'Smile',
        title_sinhala: 'නාම විශේෂණ (Nama Visheshana)',
        description: 'Describing things and people in Japanese.'
    },
    {
        id: 'verbs-forms',
        title: 'Verbs / Forms',
        icon: 'Zap',
        title_sinhala: 'ක්‍රියා පද සහ ආකෘති',
        description: 'Master Japanese verb groups and their essential conjugations (Te-form, Nai-form, etc.).'
    },
    {
        id: 'polite-plain',
        title: 'Polite and Plain Form',
        icon: 'Users',
        title_sinhala: 'ගෞරවනීය සහ සාමාන්‍ය ව්‍යවහාරය',
        description: 'Understanding social hierarchy through language.'
    },
    {
        id: 'short-grammar',
        title: 'Short Grammar',
        icon: 'List',
        title_sinhala: 'කෙටි ව්‍යාකරණ (Keti Vyakaranaya)',
        description: 'Quick rules for daily communication.'
    },
    {
        id: 'nouns',
        title: 'Nouns',
        icon: 'User',
        title_sinhala: 'නාම පද (Nama Pada)',
        description: 'Basic noun sentences and usage.'
    }
];
