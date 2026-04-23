const fs = require('fs');

// 1. Update Vocabulary page.tsx
fs.writeFileSync('app/dashboard/lessons/vocabulary/page.tsx', `import { redirect } from 'next/navigation'

export default function VocabularyRootPage() {
  redirect('/dashboard/lessons/vocabulary/vocab-1')
}
`);

// 2. Update Grammar page.tsx
fs.writeFileSync('app/dashboard/lessons/grammar/page.tsx', `import { redirect } from 'next/navigation'

export default function GrammarRootPage() {
  redirect('/dashboard/lessons/grammar/grammar-1')
}
`);

// 3. Update Adjectives page.tsx
fs.writeFileSync('app/dashboard/lessons/adjectives/page.tsx', `import { redirect } from 'next/navigation'

export default function AdjectivesRootPage() {
  redirect('/dashboard/lessons/adjectives/adj-1')
}
`);

// 4. Update Verbs page.tsx
fs.writeFileSync('app/dashboard/lessons/verbs/page.tsx', `import { redirect } from 'next/navigation'

export default function VerbsRootPage() {
  redirect('/dashboard/lessons/verbs/verb-1')
}
`);
console.log("Updated page.tsx redirect files");
