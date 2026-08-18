const fs = require('fs');

const files = ['login.html', 'signup.html'];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  console.log(`\n=================== FILE: ${file} ===================`);
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    if (line.includes('input-wrapper')) {
      console.log(`  Line ${idx+1}: ${line.trim()}`);
    }
  });
});
