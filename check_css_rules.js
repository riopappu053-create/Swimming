const fs = require('fs');

const files = ['login.html', 'signup.html'];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  console.log(`\n=== FILE: ${file} ===`);
  const matches = content.match(/\.[\w-]*toggle-password[^{]*\{[^}]*\}/gi) || [];
  console.log('Matches:', matches);
});
