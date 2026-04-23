const fs = require('fs');
let content = fs.readFileSync('app/dashboard/lessons/page.tsx', 'utf-8');

// The duplicate vocabulary link in Module 3
content = content.replace(
    /<Link href="\/dashboard\/lessons\/vocabulary" className="w-full bg-hanashi-primary text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-md shadow-hanashi-primary\/20 hover:-translate-y-0.5">Continue Learning <ArrowRight className="w-4 h-4" \/><\/Link>\s*Continue Learning <ArrowRight className="w-4 h-4" \/>\s*<Link href="\/dashboard\/lessons\/vocabulary" className="w-full bg-hanashi-primary text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-md shadow-hanashi-primary\/20 hover:-translate-y-0.5">Continue Learning <ArrowRight className="w-4 h-4" \/><\/Link>/g,
    `<Link href="/dashboard/lessons/vocabulary" className="w-full bg-hanashi-primary text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-md shadow-hanashi-primary/20 hover:-translate-y-0.5">Continue Learning <ArrowRight className="w-4 h-4" /></Link>`
);

content = content.replace(
    /<button className="w-full bg-white border-2 border-blue-100 text-blue-600 py-3\.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-50 transition-all shadow-sm">\s*Start Module <ArrowRight className="w-4 h-4" \/>\s*<\/button>/g,
    `<Link href="/dashboard/lessons/grammar" className="w-full bg-white border-2 border-blue-100 text-blue-600 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-50 transition-all shadow-sm">Start Module <ArrowRight className="w-4 h-4" /></Link>`
);

content = content.replace(
    /<button disabled className="w-full bg-gray-50 text-gray-400 py-3\.5 rounded-xl font-bold flex items-center justify-center cursor-not-allowed">\s*Complete Previous\s*<\/button>/,
    `<Link href="/dashboard/lessons/adjectives" className="w-full bg-hanashi-primary text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-md shadow-hanashi-primary/20 hover:-translate-y-0.5">Start Module <ArrowRight className="w-4 h-4" /></Link>`
);

content = content.replace(
    /<button disabled className="w-full bg-gray-50 text-gray-400 py-3\.5 rounded-xl font-bold flex items-center justify-center cursor-not-allowed">\s*Complete Previous\s*<\/button>/,
    `<Link href="/dashboard/lessons/verbs" className="w-full bg-hanashi-primary text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all shadow-md shadow-hanashi-primary/20 hover:-translate-y-0.5">Start Module <ArrowRight className="w-4 h-4" /></Link>`
);

fs.writeFileSync('app/dashboard/lessons/page.tsx', content);
