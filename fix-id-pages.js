const fs = require('fs')

const modules = ['kanji', 'vocabulary', 'grammar', 'adjectives', 'verbs']

for (const mod of modules) {
  const capMod = mod.charAt(0).toUpperCase() + mod.slice(1)
  const itemType = `${capMod}Item`
  
  const path = `app/dashboard/lessons/${mod}/[id]/page.tsx`
  if (!fs.existsSync(path)) continue;
  
  let content = fs.readFileSync(path, 'utf-8')
  content = content.replace(/HiraganaCharacter/g, itemType)
  fs.writeFileSync(path, content)
  console.log('Fixed', path)
}
