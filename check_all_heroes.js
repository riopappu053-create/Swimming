const fs = require('fs');

const files = ['about.html', 'coaches.html', 'contact.html', 'gallery.html', 'programs.html'];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  console.log(`\n=================== FILE: ${file} ===================`);
  
  // Find heading rules in hero sections
  const h1Match = content.match(/\.[\w-]*hero[^{]*h1\s*\{[^}]*\}/gi);
  if (h1Match) {
    console.log('H1 blocks:', h1Match);
  }

  const badgeMatch = content.match(/\.[\w-]*hero[^{]*\.hero-badge\s*\{[^}]*\}/gi);
  if (badgeMatch) {
    console.log('Badge blocks:', badgeMatch);
  }

  const pMatch = content.match(/\.[\w-]*hero[^{]*p\s*\{[^}]*\}/gi);
  if (pMatch) {
    console.log('P blocks:', pMatch);
  }
});
