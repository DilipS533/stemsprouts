// Read-only content extraction: pull key text from static HTML files into JSON fixtures.
const fs = require('fs');
const path = require('path');

const files = ['index.html','about.html','pinboard.html'];
const out = {};

files.forEach(file => {
  const p = path.join(__dirname, '..', file);
  if (!fs.existsSync(p)) return;
  const s = fs.readFileSync(p, 'utf8');
  // naive extraction: grab <h2> in header and first paragraph in main
  const h2Match = s.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i);
  const pMatch = s.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
  out[file] = {
    h2: h2Match ? h2Match[1].replace(/\n|\r/g,'').trim() : null,
    p: pMatch ? pMatch[1].replace(/\n|\r/g,'').trim() : null
  };
});

fs.writeFileSync(path.join(__dirname, '..', 'web', 'content', 'extracted.json'), JSON.stringify(out, null, 2));
console.log('extracted fixtures written to web/content/extracted.json');
