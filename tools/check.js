// Checks every language file before a change is taken in. Run: node tools/check.js
// It runs by itself on every pull request (.github/workflows/check.yml).
const fs = require('fs'), path = require('path');
const dir = path.join(__dirname, '..', 'languages');
const en = JSON.parse(fs.readFileSync(path.join(dir, 'en.json'), 'utf8')).strings;
const holes = s => [...new Set(s.match(/\{[A-Za-z0-9_]+\}/g) || [])].sort().join(' ');   // the same SET: a language may say a name twice
let problems = 0;
const say = (file, key, msg) => { problems++; console.log(`${file}  ${key}: ${msg}`); };

for (const file of fs.readdirSync(dir).filter(f => f.endsWith('.json') && f !== 'en.json')) {
  let L;
  try { L = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8')); }
  catch (e) { say(file, '-', 'not valid JSON: ' + e.message); continue; }
  const S = L.strings || {};
  for (const key of Object.keys(en)) if (!S[key]) say(file, key, 'missing (do not delete lines)');
  for (const [key, e] of Object.entries(S)) {
    if (!(key in en)) { say(file, key, 'not a line of the game (do not add or rename lines)'); continue; }
    if (e.en !== en[key]) say(file, key, 'the "en" text was changed: change only "text"');
    const t = typeof e.text === 'string' ? e.text : '';
    if (!t.trim()) { say(file, key, 'empty "text"'); continue; }
    if (holes(t) !== holes(en[key])) say(file, key, `the {placeholders} must stay the same: English has "${holes(en[key])}", this has "${holes(t)}"`);
    if (en[key].startsWith('Nixie:') && !t.startsWith('Nixie:')) say(file, key, 'keep "Nixie:" at the start (the game shows who speaks by it)');
    if (t.length > Math.max(40, en[key].length * 2.2)) say(file, key, `much longer than the English (${t.length} against ${en[key].length} letters): it may not fit on screen`);
  }
}
console.log(problems ? `${problems} problem(s)` : 'all good');
process.exit(problems ? 1 : 0);
